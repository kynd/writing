---
title: "Monads モナド"
---
We saw the fundamental principles of functional programming: referential transparency (the same input always returns the same output) and the absence of side effects (not changing external variables or state). However, these principles make it difficult to write practical operations like input/output (I/O) or state management. If we mix these operations directly into functions, the program becomes unpredictable, and the predictability advantage of functional programming collapses.

関数型プログラミングの大原則は、参照透過性（同じ入力には同じ出力を返す）と、副作用がない（外部の変数や状態を変えない）ことでした。しかし、これでは入出力 (I/O) や状態管理といった現実的な処理が書けません。これらをそのまま関数の中に混ぜてしまうと、プログラムは一気に予測不可能になり、関数型が積み上げてきた予測可能性というメリットが崩壊します。

# The Purpose of Monads
# モナドの目的

So they came up with the idea not to execute side effects directly, but to return a "box" that carries the context of side effects. For example, instead of returning a string, you return a plan (IO monad) that will read a string from the outside world in the future.

そこで考え出されたのが、副作用を直接実行するのではなく、副作用という文脈を持つ「箱」を返すというアイデアです。例えば、単に文字列を返すのではなく、将来、外の世界から文字列を読み取ってくる。という予定（IOモナド）を返すのです。

**Function that executes side effects:** <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>A</mi><mo>→</mo><mi>B</mi></mrow><annotation encoding="application/x-tex">A \to B</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.05017em;">B</span></span></span></span>

**副作用を実行する関数:** <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>A</mi><mo>→</mo><mi>B</mi></mrow><annotation encoding="application/x-tex">A \to B</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.05017em;">B</span></span></span></span>

```tsx
// Impure: This function directly touches the outside world.
const processImpure = (input: string): string => {
  const result = input.toUpperCase();
  // The "dirt" (side effect) happens NOW.
  // e.g., Writing to a file, changing a global variable
  externalSystem.write(result); 
  return result;
};
```

**Function that adds side effects as context:** <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>A</mi><mo>→</mo><mtext>IO</mtext><mo>&lt;</mo><mi>B</mi><mo>&gt;</mo></mrow><annotation encoding="application/x-tex">A \to \text{IO}&lt;B&gt;</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7224em;vertical-align:-0.0391em;"></span><span class="mord text"><span class="mord">IO</span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&lt;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7224em;vertical-align:-0.0391em;"></span><span class="mord mathnormal" style="margin-right:0.05017em;">B</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&gt;</span></span></span></span>

**副作用を文脈として追加する関数:** <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>A</mi><mo>→</mo><mtext>IO</mtext><mo>&lt;</mo><mi>B</mi><mo>&gt;</mo></mrow><annotation encoding="application/x-tex">A \to \text{IO}&lt;B&gt;</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7224em;vertical-align:-0.0391em;"></span><span class="mord text"><span class="mord">IO</span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&lt;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7224em;vertical-align:-0.0391em;"></span><span class="mord mathnormal" style="margin-right:0.05017em;">B</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&gt;</span></span></span></span>  

```tsx
// Pure: This function only returns a "description" of what to do.
// It uses Generics <T> to stay agnostic about the actual data type.
const processPure = <T>(input: T): IO<T> => {
  return new IO(() => {
    /* The actual side effect is described here as a "recipe",
       but it is NOT executed yet. 
    */
    return input;
  });
};

// Calling the function does NOTHING to the environment.
const action = processPure("Data"); 

// 'action' is just a piece of data (an "order sheet").
// It can be passed around or combined with other actions safely.
```

Inside this `IO` box, the side effect of actually reading data is sealed as an order form (description). The contents cannot be directly manipulated from outside the box. This order form is executed all at once at the very end of the program, after all the pure logic has been assembled. The structure ensures that the pure world remains complete as-is, and the resulting conclusion (a giant order form) is handed over to the runtime in one batch.

この `IO` という箱の中には、実際にデータを読み取るという副作用が注文書（記述）として封じ込められています。箱の外側からは中身を直接いじることはできません。この注文書は、純粋なロジックが全て組み上がった最後、プログラムの終端で一括して実行されます。純粋な世界は純粋なまま完結させて、出た結論（巨大な注文書）をまとめてランタイムに委ねるという構成です。

This may sound similar to the separation of data and view in UI libraries (and indeed, it can be thought of as a form of pursuing that mathematically), but its strength lies in the guaranteed consistency of logical correctness. Since messy processes and optimizations like data I/O, asynchronous operation sequencing, and rendering are hidden away on the runtime side, programmers can concentrate on the essential computation of what happens.

これだけ聞くと、UIライブラリにおけるデータとビューの分離と同じようですが（実際、それを数学的に追求した形と言えます）、その強みはロジックの正しさの一貫性が保証される点にあります。データI/O、非同期処理の順序、描画といった泥臭い処理や最適化はランタイム側に隠蔽されるため、プログラマは何が起きるかについての本質的な計算に集中できます。

# The Problem of Nested Boxes
# 箱の入れ子問題

By enclosing side effects in a box called an order form (IO), we were able to protect the pure world. However, when we try to use the result of one operation to trigger the next side effect, we face a new problem.

-   **Step 1:** Create an order form to read a user ID <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo>→</mo><mtext>IO&lt;string&gt;</mtext></mrow><annotation encoding="application/x-tex">\to \text{IO&lt;string&gt;}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.3669em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8778em;vertical-align:-0.1944em;"></span><span class="mord text"><span class="mord">IO&lt;string&gt;</span></span></span></span></span>

-   **Step 2:** Use that ID to create an order form to search for an address <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo>→</mo><mtext>string</mtext><mo>→</mo><mtext>IO&lt;Address&gt;</mtext></mrow><annotation encoding="application/x-tex">\to \text{string} \to \text{IO&lt;Address&gt;}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.3669em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8623em;vertical-align:-0.1944em;"></span><span class="mord text"><span class="mord">string</span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7335em;vertical-align:-0.0391em;"></span><span class="mord text"><span class="mord">IO&lt;Address&gt;</span></span></span></span></span>

副作用を注文書（IO）という箱に閉じ込めることで、純粋な世界を守ることができました。しかし、ある処理の結果を使って次の副作用を起こそうとすると、新たな問題に直面します。

-   **Step 1:** ユーザーIDを読み取る注文書を作る <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo>→</mo><mtext>IO&lt;string&gt;</mtext></mrow><annotation encoding="application/x-tex">\to \text{IO&lt;string&gt;}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.3669em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8778em;vertical-align:-0.1944em;"></span><span class="mord text"><span class="mord">IO&lt;string&gt;</span></span></span></span></span>

-   **Step 2:** そのIDを使って、住所を検索する注文書を作る <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo>→</mo><mtext>string</mtext><mo>→</mo><mtext>IO&lt;Address&gt;</mtext></mrow><annotation encoding="application/x-tex">\to \text{string} \to \text{IO&lt;Address&gt;}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.3669em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8623em;vertical-align:-0.1944em;"></span><span class="mord text"><span class="mord">string</span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7335em;vertical-align:-0.0391em;"></span><span class="mord text"><span class="mord">IO&lt;Address&gt;</span></span></span></span></span>

If we simply connect these with `map` (the functor operation), the result becomes <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mtext>IO&lt;IO&lt;Address&gt;&gt;</mtext></mrow><annotation encoding="application/x-tex">\text{IO&lt;IO&lt;Address&gt;&gt;}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7335em;vertical-align:-0.0391em;"></span><span class="mord text"><span class="mord">IO&lt;IO&lt;Address&gt;&gt;</span></span></span></span></span>.

これらを単純に `map`（関手の操作）で繋ぐと、結果は <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mtext>IO&lt;IO&lt;Address&gt;&gt;</mtext></mrow><annotation encoding="application/x-tex">\text{IO&lt;IO&lt;Address&gt;&gt;}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7335em;vertical-align:-0.0391em;"></span><span class="mord text"><span class="mord">IO&lt;IO&lt;Address&gt;&gt;</span></span></span></span></span> になってしまいます。

```tsx
// map applies a function to the value inside the box.
// If the function also returns a box, we get nested boxes.
const nestedOrder = readId().map(id => findAddress(id)); 
// result: IO<IO<Address>>
```

In this state, an order form contains another order form as a prize, and even if you pass it to the runtime at the end, it won't execute the second instruction inside.

これでは注文書の中に、別の注文書が景品として入っている状態で、最後にランタイムに渡しても、中にある2枚目の指示を実行してくれません。

# Merging the Double Context
# 二重の文脈をマージする

A monad is a mechanism that flattens these nested boxes into a single layer without breaking their meaning.

モナドとは、この二重になった箱を、意味を壊さずに、1つの層に統合する（flatten）という仕組みのことです。

```tsx
class IO<T> {
  constructor(public run: () => T) {}

  // The core of Monad: μ (Multiplication / flatten)
  // It transforms nested structures into a sequential execution plan.
  static flatten<T>(mma: IO<IO<T>>): IO<T> {
    return new IO(() => {
      const ma = mma.run(); // 1. Execute outer IO to get the inner one
      return ma.run();      // 2. Execute the inner IO to get the final result
    });
  }

  // The programmer's tool: flatMap (bind)
  // It's a combination of 'map' and 'flatten'.
  flatMap<U>(f: (value: T) => IO<U>): IO<U> {
    const nested = this.map(f); // Create IO<IO<U>>
    return IO.flatten(nested);  // Immediately flatten to IO<U>
  }
}
```

The `IO` class doesn't automatically flatten nested IO structures because this gives programmers control over when and how to connect operations.

`IO` クラスが内部で勝手に「中身がIOだったら潰す」という自動処理をしないのは、いつ、どのタイミングで処理を繋げるか」という決定権（ロジック）をプログラマが持つためです。

When a programmer uses `flatMap`, they're stating: "Define Step 2, which depends on Step 1's result, and merge them into a single sequential timeline." Not flattening automatically also preserves the option to keep order forms as-is (as data) without executing them.

プログラマが `flatMap` を使うときは、「ステップ1の結果に依存するステップ2を定義し、これらを直列な一本の時間軸に統合せよ」という意思を示すことになります。自動で潰さないことで、注文書を注文書のまま（データとして）保持しておくという選択肢も担保されます。

# Examples of Other Monads
# 他のモナドの例

Monads handle various contexts beyond IO. They all share a common pattern: using data inside one context to create the next context, then merging them into one.

モナドは、IO以外にも様々な文脈を扱うために使われます。これらに共通するのは、中身のデータを使って、次の新しい文脈を作り、それを1つに統合するというパターンです。

Just as the IO monad handles timing and side effects, other monads encapsulate specific computational properties within a box.

IOモナドがタイミングや副作用を扱ったように、他のモナドも特定の計算の性質を箱の中に閉じ込めます。

## Option (Maybe) Monad
## Option (Maybe) モナド

This represents a context where "a value that might not exist (might be null)."

-   **flatten behavior:** Unifies a double box `Option<Option<T>>` into one. If either the outer or inner box is None, the whole result becomes "no value." If any step fails, all subsequent computations are safely skipped.

「値がないかもしれない（nullかもしれない）」という文脈です。

-   **flattenの挙動:** 二重の箱 `Option<Option<T>>` を1つにします。もし外側か内側のどちらかが値なし(None)なら、全体を「値なし」として統合します。途中で一度でも失敗したら、その後の計算をすべて安全にスキップできます。

## Array (List) Monad
## Array (List) モナド

This represents "multiple possible values."

-   **flatten behavior:** Flattens a nested list like `[[1, 2], [3, 4]]` into `[1, 2, 3, 4]`. This allows computations to run on all candidates and combine all results into a single list.

「複数の値の可能性がある」という文脈です。

-   **flattenの挙動:** `[[1, 2], [3, 4]]` という二重のリストを、`[1, 2, 3, 4]` と平坦化します。複数の候補すべてに対して計算を行い、結果をすべて並べるという連鎖を表現できます。

## State Monad
## State モナド

This represents "receiving a state, processing it, and returning the next state and value."

「ある状態を受け取り、加工して、次の状態と値を返す」という文脈です。

-   **flatten behavior:** When one state-modifying procedure contains another, they merge into a single continuous procedure. This preserves immutability while describing state transitions in simulations or game updates.

-   **flattenの挙動:** 状態を書き換える手順の中に、さらに状態を書き換える手順が入っているとき、それらを1つの連続した書き換え手順に統合します。不変性を保ったまま、シミュレーションやゲームのステート更新のような状態のバトンパスを記述できます。

# Definition of Monads in Category Theory
# 圏論によるモナドの定義

Let's align the code behavior with the formal definition from category theory.

コードとしての挙動に合わせて圏論における定義も確認しておきましょう。

In category theory, a monad is a triple <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">(</mo><mi>T</mi><mo separator="true">,</mo><mi>η</mi><mo separator="true">,</mo><mi>μ</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">(T, \eta, \mu)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">η</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">μ</span><span class="mclose">)</span></span></span></span> consisting of an endofunctor <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>T</mi></mrow><annotation encoding="application/x-tex">T</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span></span></span></span> on a category <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="script">C</mi></mrow><annotation encoding="application/x-tex">\mathcal{C}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathcal" style="margin-right:0.05834em;">C</span></span></span></span> and two natural transformations <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>η</mi><mo separator="true">,</mo><mi>μ</mi></mrow><annotation encoding="application/x-tex">\eta, \mu</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">η</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">μ</span></span></span></span>.  
圏論においてモナドは、圏 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="script">C</mi></mrow><annotation encoding="application/x-tex">\mathcal{C}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathcal" style="margin-right:0.05834em;">C</span></span></span></span> 上の自己関手 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>T</mi></mrow><annotation encoding="application/x-tex">T</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span></span></span></span> と、2つの自然変換 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>η</mi><mo separator="true">,</mo><mi>μ</mi></mrow><annotation encoding="application/x-tex">\eta, \mu</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">η</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">μ</span></span></span></span> の三つ組 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">(</mo><mi>T</mi><mo separator="true">,</mo><mi>η</mi><mo separator="true">,</mo><mi>μ</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">(T, \eta, \mu)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">η</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">μ</span><span class="mclose">)</span></span></span></span> として定義されます。

## Endofunctor <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>T</mi><mo>:</mo><mi mathvariant="script">C</mi><mo>→</mo><mi mathvariant="script">C</mi></mrow><annotation encoding="application/x-tex">T: \mathcal{C} \to \mathcal{C}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathcal" style="margin-right:0.05834em;">C</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathcal" style="margin-right:0.05834em;">C</span></span></span></span>自己関手 (Endofunctor) <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>T</mi><mo>:</mo><mi mathvariant="script">C</mi><mo>→</mo><mi mathvariant="script">C</mi></mrow><annotation encoding="application/x-tex">T: \mathcal{C} \to \mathcal{C}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathcal" style="margin-right:0.05834em;">C</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathcal" style="margin-right:0.05834em;">C</span></span></span></span>

This structure maps an object <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>A</mi></mrow><annotation encoding="application/x-tex">A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span></span></span></span> (type) to <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>T</mi><mo stretchy="false">(</mo><mi>A</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">T(A)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="mopen">(</span><span class="mord mathnormal">A</span><span class="mclose">)</span></span></span></span> (boxed type), and a morphism <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mo>:</mo><mi>A</mi><mo>→</mo><mi>B</mi></mrow><annotation encoding="application/x-tex">f: A \to B</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.05017em;">B</span></span></span></span> (function) to <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>T</mi><mo stretchy="false">(</mo><mi>f</mi><mo stretchy="false">)</mo><mo>:</mo><mi>T</mi><mo stretchy="false">(</mo><mi>A</mi><mo stretchy="false">)</mo><mo>→</mo><mi>T</mi><mo stretchy="false">(</mo><mi>B</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">T(f): T(A) \to T(B)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="mopen">(</span><span class="mord mathnormal">A</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.05017em;">B</span><span class="mclose">)</span></span></span></span> (function on boxed types). In our code examples, this corresponds to the type definition and `map`.

-   **Type correspondence:** The generic type definition `T<A>` itself.

-   **Morphism correspondence (**<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>m</mi><mi>a</mi><mi>p</mi></mrow><annotation encoding="application/x-tex">map</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">ma</span><span class="mord mathnormal">p</span></span></span></span>**):** `(f: A => B) => (ta: T<A>) => T<B>`—a function that translates functions for boxed types.

対象 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>A</mi></mrow><annotation encoding="application/x-tex">A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span></span></span></span>（型）を <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>T</mi><mo stretchy="false">(</mo><mi>A</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">T(A)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="mopen">(</span><span class="mord mathnormal">A</span><span class="mclose">)</span></span></span></span>（箱に入った型）へ、射 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mo>:</mo><mi>A</mi><mo>→</mo><mi>B</mi></mrow><annotation encoding="application/x-tex">f: A \to B</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.05017em;">B</span></span></span></span>（関数）を <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>T</mi><mo stretchy="false">(</mo><mi>f</mi><mo stretchy="false">)</mo><mo>:</mo><mi>T</mi><mo stretchy="false">(</mo><mi>A</mi><mo stretchy="false">)</mo><mo>→</mo><mi>T</mi><mo stretchy="false">(</mo><mi>B</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">T(f): T(A) \to T(B)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="mopen">(</span><span class="mord mathnormal">A</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.05017em;">B</span><span class="mclose">)</span></span></span></span>（箱に入った型に対する関数）へ移す構造です。ここまでのコードの例では、型の定義と `map` に対応します。

-   **型の対応:** `T<A>` というジェネリックな型の定義そのもの。

-   **射の対応 (**<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>m</mi><mi>a</mi><mi>p</mi></mrow><annotation encoding="application/x-tex">map</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">ma</span><span class="mord mathnormal">p</span></span></span></span>**):** `(f: A => B) => (ta: T<A>) => T<B>`という、関数を箱に翻訳する関数。

## Unit <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>η</mi><mo>:</mo><mi>I</mi><mi>d</mi><mo>→</mo><mi>T</mi></mrow><annotation encoding="application/x-tex">\eta: Id \to T</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">η</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal" style="margin-right:0.07847em;">I</span><span class="mord mathnormal">d</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span></span></span></span>単位 (Unit) <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>η</mi><mo>:</mo><mi>I</mi><mi>d</mi><mo>→</mo><mi>T</mi></mrow><annotation encoding="application/x-tex">\eta: Id \to T</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">η</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal" style="margin-right:0.07847em;">I</span><span class="mord mathnormal">d</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span></span></span></span>

For any object <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>A</mi></mrow><annotation encoding="application/x-tex">A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span></span></span></span>, this provides a morphism <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>η</mi><mi>A</mi></msub><mo>:</mo><mi>A</mi><mo>→</mo><mi>T</mi><mo stretchy="false">(</mo><mi>A</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\eta_A: A \to T(A)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">η</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3283em;"><span style="top:-2.55em;margin-left:-0.0359em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">A</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="mopen">(</span><span class="mord mathnormal">A</span><span class="mclose">)</span></span></span></span>. It's the entry point that wraps a plain value in a context (box). In code, this is a function like `(x: A) => T<A>` that sends raw data into the boxed world. As a natural transformation, it maps the identity functor (which does nothing) to <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>T</mi></mrow><annotation encoding="application/x-tex">T</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span></span></span></span>.

任意の対象 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>A</mi></mrow><annotation encoding="application/x-tex">A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span></span></span></span> に対して、射 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>η</mi><mi>A</mi></msub><mo>:</mo><mi>A</mi><mo>→</mo><mi>T</mi><mo stretchy="false">(</mo><mi>A</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\eta_A: A \to T(A)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">η</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3283em;"><span style="top:-2.55em;margin-left:-0.0359em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">A</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="mopen">(</span><span class="mord mathnormal">A</span><span class="mclose">)</span></span></span></span> を与えます。素の値を文脈（箱）へ送り込む入り口です。コードでは素のデータを箱の世界へ送り込む `(x: A) => T<A>` といった関数に相当します。自然変換としては元のままの対象（何もしない、という関手）を <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>T</mi></mrow><annotation encoding="application/x-tex">T</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span></span></span></span> に対応させます。

## Multiplication <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>μ</mi><mo>:</mo><msup><mi>T</mi><mn>2</mn></msup><mo>→</mo><mi>T</mi></mrow><annotation encoding="application/x-tex">\mu: T^2 \to T</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">μ</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span></span></span></span>乗法 (Multiplication) <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>μ</mi><mo>:</mo><msup><mi>T</mi><mn>2</mn></msup><mo>→</mo><mi>T</mi></mrow><annotation encoding="application/x-tex">\mu: T^2 \to T</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">μ</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span></span></span></span>

This is `flatten` in programming—the natural transformation <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>μ</mi><mo>:</mo><mi>T</mi><mo>∘</mo><mi>T</mi><mo>→</mo><mi>T</mi></mrow><annotation encoding="application/x-tex">\mu: T \circ T \to T</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">μ</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∘</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span></span></span></span> from a double functor application to a single application. It unifies nested contexts into one according to the monad's specific rules (sequencing for IO, concatenation for Array, failure propagation for Option). As a natural transformation, it maps two functor applications (viewed as one composite functor) to a single application of <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>T</mi></mrow><annotation encoding="application/x-tex">T</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span></span></span></span>.

プログラミングでの `flatten` 、関手を2回適用した状態から1回への自然変換 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>μ</mi><mo>:</mo><mi>T</mi><mo>∘</mo><mi>T</mi><mo>→</mo><mi>T</mi></mrow><annotation encoding="application/x-tex">\mu: T \circ T \to T</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">μ</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∘</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span></span></span></span> です。二重になった文脈を、そのモナド独自のルール（IOなら順序、Arrayなら結合、Optionなら失敗の伝播）に従って、1つに統合します。自然変換としては関手2回分（を1つの関手と見なす）を1回分の<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>T</mi></mrow><annotation encoding="application/x-tex">T</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span></span></span></span> に対応させます。

> 
> 
> As noted on the functor page, category theory diagrams depict static structures that transcend specific instances.
> 
> 関手のページに同様の注を挟みましたが、圏論の図式が描くのは、特定の事象を超えた静的な構造です。
> 
> The endofunctor <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>T</mi></mrow><annotation encoding="application/x-tex">T</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span></span></span></span> and natural transformations <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>η</mi><mo separator="true">,</mo><mi>μ</mi></mrow><annotation encoding="application/x-tex">\eta, \mu</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">η</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">μ</span></span></span></span> defined here don't refer to a single procedure. They are blueprints depicting "bundles of arrows" that apply consistently to all the countless types (objects) and functions (morphisms) in the category.
> 
> ここで定義した自己関手 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>T</mi></mrow><annotation encoding="application/x-tex">T</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span></span></span></span> や自然変換 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>η</mi><mo separator="true">,</mo><mi>μ</mi></mrow><annotation encoding="application/x-tex">\eta, \mu</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">η</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">μ</span></span></span></span> は、単一の処理を指すのではありません。それらは、圏の中に存在する無数の型（対象）と関数（射）のすべてに対して、一貫して適用可能な「矢印の束」を描いた設計図です。
> 
> For example, I wrote that the endofunctor corresponds to type and morphism mappings (map) in code, but this isn't about individual type or function definitions—think of it as a diagram showing the mapping from the original category to the boxed world, with all possible arrows drawn. Similarly, the unit and multiplication as natural transformations aren't singular: there are corresponding arrows for each object with respect to the endofunctor.
> 
> 例えば、自己関手はコードにおける型や射の対応（map）に相当すると書きましたが、これは個別の型や関数定義の話をしているのではなく、元の圏から箱に入った世界への写像、可能な矢印全てが書かれた図の話をしているのだと考えてください。同様に自然変換である単位や乗法についても、ひとつではなく、自己関手に対して対応する矢印が存在します。

# Monad Axioms
# モナドの公理

For this triple to be a monad, it must obey two rules (axioms). These mathematically guarantee that computation remains consistent no matter how you chain operations.

この3つ組がモナドであるためには、以下の2つのルール（公理）を守らなければなりません。これがどれだけ複雑に繋いでも、計算が壊れないことを数学的に保証しています。

## Associativity
## 結合律

When flattening a triply nested context <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>T</mi><mo stretchy="false">(</mo><mi>T</mi><mo stretchy="false">(</mo><mi>T</mi><mo stretchy="false">(</mo><mi>A</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">T(T(T(A)))</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="mopen">(</span><span class="mord mathnormal">A</span><span class="mclose">)))</span></span></span></span> into a single layer, the order doesn't matter. Flattening the outer two first or the inner two first yields the same result.

三重に重なった文脈 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>T</mi><mo stretchy="false">(</mo><mi>T</mi><mo stretchy="false">(</mo><mi>T</mi><mo stretchy="false">(</mo><mi>A</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">T(T(T(A)))</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="mopen">(</span><span class="mord mathnormal">A</span><span class="mclose">)))</span></span></span></span> を一重にする際、外側2つを先に潰すのも「内側2つを先に潰す」のも、結果が同じになるというルールです。  
  
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>μ</mi><mo>∘</mo><mi>T</mi><mi>μ</mi><mo>=</mo><mi>μ</mi><mo>∘</mo><mi>μ</mi><mi>T</mi></mrow><annotation encoding="application/x-tex">\mu \circ T\mu = \mu \circ \mu T</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6389em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">μ</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∘</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8778em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="mord mathnormal">μ</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6389em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">μ</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∘</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8778em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">μ</span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span></span></span></span>  

This allows programmers to nest flatMap in any order and get consistent results.

これがあるおかげで、プログラマは flatMap をどの順番でネストさせても、一貫した結果を得ることができます。

## Unit Laws
## 単位元律

Wrapping an empty box on the outside of a context and then flattening (<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>μ</mi><mo>∘</mo><msub><mi>η</mi><mi>T</mi></msub></mrow><annotation encoding="application/x-tex">\mu \circ \eta_T</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6389em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">μ</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∘</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">η</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3283em;"><span style="top:-2.55em;margin-left:-0.0359em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.13889em;">T</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span>), or putting an empty box inside and then flattening (<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>μ</mi><mo>∘</mo><mi>T</mi><mi>η</mi></mrow><annotation encoding="application/x-tex">\mu \circ T\eta</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6389em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">μ</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∘</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8778em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="mord mathnormal" style="margin-right:0.03588em;">η</span></span></span></span>), both do nothing.

文脈の外側に空の箱を被せてから潰す（<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>μ</mi><mo>∘</mo><msub><mi>η</mi><mi>T</mi></msub></mrow><annotation encoding="application/x-tex">\mu \circ \eta_T</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6389em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">μ</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∘</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">η</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3283em;"><span style="top:-2.55em;margin-left:-0.0359em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.13889em;">T</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span>）のと、中身に空の箱を入れてから潰す（<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>μ</mi><mo>∘</mo><mi>T</mi><mi>η</mi></mrow><annotation encoding="application/x-tex">\mu \circ T\eta</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6389em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">μ</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∘</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8778em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="mord mathnormal" style="margin-right:0.03588em;">η</span></span></span></span>）のは、どちらも何もしないことと同じ、というルールです。

  
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>μ</mi><mo>∘</mo><msub><mi>η</mi><mi>T</mi></msub><mo>=</mo><mi>μ</mi><mo>∘</mo><mi>T</mi><mi>η</mi><mo>=</mo><msub><mtext>id</mtext><mi>T</mi></msub></mrow><annotation encoding="application/x-tex">\mu \circ \eta_T = \mu \circ T\eta = \text{id}_T</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6389em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">μ</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∘</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">η</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3283em;"><span style="top:-2.55em;margin-left:-0.0359em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.13889em;">T</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6389em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">μ</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∘</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8778em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="mord mathnormal" style="margin-right:0.03588em;">η</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord text"><span class="mord">id</span></span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3283em;"><span style="top:-2.55em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.13889em;">T</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span>

# Monoid
# モノイド

A monad is a monoid in the category of endofunctors. A monoid is a concept that abstracts the aggregation of information, like addition, and satisfies the following three properties.

モナドは自己関手の圏におけるモノイドです。モノイドとは足し算のような情報の集約を抽象化した概念で下の3つを満たします。

## Binary Operation (Combination)
## 二項演算（結合）

There is a rule that combines two elements to create a single element of the same kind.

-   **For numbers:** `a + b`

-   **For strings:** `"Hello" + "World"`

-   **For lists:** `[1] + [2]`

2つの要素を合体させて、同じ種類の1つの要素にするルールがある。

-   **数値:** `a + b`

-   **文字列:** `"Hello" + "World"`

-   **リスト:** `[1] + [2]`

## Associativity
## 結合律

When combining three or more things, the result doesn't change no matter where you start calculating.

-   `(1 + 2) + 3` and `1 + (2 + 3)` are the same.

-   This allows you to freely change the order of computation or perform parallel processing.

3つ以上のものを合体させるとき、どこから計算しても結果が変わらない。

-   `(1 + 2) + 3` と `1 + (2 + 3)` は同じ。

-   これがあると計算の順番を自由に変えたり並列処理ができる。

## Identity Element
## 単位元

There exists a special element that, when combined with something, leaves it completely unchanged.

-   **For addition:** `0` (`5 + 0 = 5`)

-   **For multiplication:** `1` (`5 * 1 = 5`)

-   **For strings:** `""` (empty string)

それを合体させても、相手を全く変えない特別な要素があること。

-   **足し算なら:** `0` （`5 + 0 = 5`）

-   **掛け算なら:** `1` （`5 * 1 = 5`）

-   **文字列なら:** `""` （空文字）

Isn't it interesting that a mechanism designed to handle side effects in functional programming shares the same structure as addition when abstracted? This means the same mathematical theories and proofs can be applied to both at a certain level.

関数型プログラミングで副作用を扱うために考え出された仕組みが、抽象化すると足し算と同じ構造をしているのは、ちょっと面白くないでしょうか。これはあるレベルでは同じ数学的な理論や証明が両方に適用できるということを意味しています。

# Summary
# まとめ

This series ends here for now.

このシリーズは一旦ここで終わります。

As I mentioned at the beginning, I'm neither a mathematician nor a functional programming expert. When it comes to code, I'm the type who wants to reach the intended result—visuals or usability verification through prototyping—as quickly as possible, even if the code gets messy.

初めにも書きましたが、筆者は数学者でもなければ関数プログラムの使い手でもありません。コードに関して言えば、どちらかといえば汚くてもいいから狙った結果、ビジュアルとかプロトタイピングによる使用の検証にできるだけ早く辿り着きたいというタイプです。

What I've written here is an externalization of my own learning process. There are likely many inadequacies and questionable points in terms of accuracy, but I hope I've been able to share something of the fascination of abstract thinking.

ここに書いた内容は自分自身の学習プロセスの外部化で、至らぬ点や正誤が怪しい点も多々あると思いますが、抽象的な思考の面白さみたいなものが共有できていれば幸いです。

Lastly, here are some examples of connections between monads and creative coding that AI taught me, as food for further thought. The following is verbatim output from Gemini.

-   **Node-based design:** The connections between nodes in tools like TouchDesigner are precisely monadic chains—they're about composing data contexts (signals).

-   **Asynchronous visuals:** MIDI signals, sound analysis, network data—when elegantly connecting these "contexts that can arrive at any time" without polluting nodes or code, this sense of "flatten" becomes useful.

-   **Predictability:** In large, complex installations, being able to mathematically guarantee "what is happening where" (maintaining referential transparency) is your greatest weapon against debugging hell.

最後にAIが教えてくれた、モナドとクリエィティブコーディングの繋がりの例をいくつか、さらに考えるきっかけとしてあげておきます。以下Geminiの出力ママです。

-   **ノードベースの設計:** TouchDesignerなどのノードの繋がりは、まさにデータの文脈（シグナル）をどう合成するかというモナド的な連鎖そのものです。

-   **非同期ビジュアル:** MIDI信号、サウンド解析、ネットワークからのデータ…これら「いつ来るかわからない文脈」を、ノードやコードを汚さずにエレガントに繋ぎ合わせる際、この「flatten」の感覚が役に立ちます。

-   **予測可能性:** 巨大で複雑なインスタレーションにおいて、「どこで何が起きているか」を数学的に保証できる（参照透過性を守る）ことは、デバッグの地獄から身を守る最大の武器になります。
