---
title: "Functor 関手"
slug: functor
---
So far, we've been observing types (objects) and functions (morphisms) within a single category—for example, the category of TypeScript types. Now let's step up to the meta-level and examine functors, which map between categories.

これまでは、ある圏（例えば TypeScript の型の圏）の中にある型（対象）や関数（射）を観察してきました。このページではさらにメタレベルに立ち、圏どうしの対応を扱う関手という概念についてみてみましょう。

A functor is a mapping from category $\mathcal{C}$ to category $\mathcal{D}$ that preserves the structure of the category—not just mapping objects, but maintaining connections between them (morphisms).

関手とは、圏 $\mathcal{C}$ から圏 $\mathcal{D}$ への写像であり、単に対象を対応させるだけでなく、それらの間のつながり(射)を保ちながら、圏の構造を保存するものです。

# Definition of a Functor
# 関手の定義

A functor $F$ from category $\mathcal{C}$ to category $\mathcal{D}$ (denoted as $F: \mathcal{C} \to \mathcal{D}$) consists of the following two mappings:

1.  Object Mapping:  
    For each object $A$ in $\mathcal{C}$, assign an object $F(A)$ in $\mathcal{D}$.

2.  Morphism Mapping:  
    For a morphism $f: A \to B$ in $\mathcal{C}$, assign a morphism $F(f): F(A) \to F(B)$ in $\mathcal{D}$.

  
圏 $\mathcal{C}$ から圏 $\mathcal{D}$ への関手 $F$（これを $F: \mathcal{C} \to \mathcal{D}$ と表記します）は、以下の2つのマッピングから構成されます。

1.  対象の対応:  
    $\mathcal{C}$ の各対象 $A$ に対して、$\mathcal{D}$ の対象 $F(A)$ を割り当てる。

2.  射の対応:  
    $\mathcal{C}$ の射 $f: A \to B$ に対して、$\mathcal{D}$ の射 $F(f): F(A) \to F(B)$ を割り当てる。

The process of applying $F$ to $f$ to obtain $F(f)$ is called lifting $f$ by $F$.

この $f$ に $F$ を作用させて $F(f)$ を得ることを $f$ を $F$ で持ち上げると言います。

# Functor Laws
# 関手の公理

For a mapping to qualify as a "functor," it must preserve the structure of the original category $\mathcal{C}$ in the destination category $\mathcal{D}$.

1.  Identity Preservation  
    The identity morphism—which "does nothing" in the original category—must remain an identity morphism in the destination.  
    $F(id_A) = id_{F(A)}$

2.  Composition Preservation  
    Composing morphisms before mapping must yield the same result as mapping morphisms before composing.  
    $F(g \circ f) = F(g) \circ F(f)$  
    In code, `map(x =&gt; toStr(double(x)))(optValue)` (compose then lift) and `map(toStr)(map(double)(optValue))` (lift then compose) are equivalent.

マッピングが「関手」として認められるためには、移設後の圏 $\mathcal{D}$ において、元の圏 $\mathcal{C}$ の構造が維持されていなければなりません。

1.  恒等射の保存 (Identity Preservation)  
    元の圏での「何もしない」という恒等射は、移設先でも恒等射でなければなりません。  
    $F(id_A) = id_{F(A)}$

2.  合成の保存 (Composition Preservation)  
    射を合成してから移すのと、射を移してから合成するのは等価でなければなりません。  
    $F(g \circ f) = F(g) \circ F(f)$
    
    コードでは `map(x => toStr(double(x)))(optValue)` （合成してから移す）`map(toStr)(map(double)(optValue))` （移してから合成する）が等価。
    

## Examples of Functors in Code
## コードにおける関手の例

As a code example, let's consider a mechanism for safely moving from the raw world—where values are manipulated directly—to a world where data carries context. This traversal between the two worlds illustrates a functor.

コードの例として、値を直接操作する生身の世界から、データに文脈がある世界へ安全に輸出する仕組みを考えてみましょう。この2つの世界の横断が関手の例になっています。

## The Raw World
## 生身の世界

In this world, we write simple logic (such as `n * 2`) assuming values always exist. We'll call this "the raw world $\mathcal{C}$".

この世界では値が必ず存在する前提で、単純なロジック（`n * 2` など）を書きます。これを「生身の世界 $\mathcal{C}$」と呼びましょう。

## The World with Context
## 文脈がある世界

However, in real-world cases, there are inherent risks: values may not exist, results may take time to obtain, or errors may occur.

しかし、現実のケースでは値が存在しないかもしれない、結果を得るのに時間がかかったり、エラーになるかもしれないなどの危険を孕んでいることもあります。

Writing `if (null)` checks or `await` statements into the logic each time buries simple calculations under complex "context" handling.

これらを扱うために、毎回 `if (null)` や `await` といった処理をロジックの中に書き込むと、本来シンプルだったはずの計算が、複雑な「文脈」の処理に埋もれてしまいます。

Here, we take pure logic (morphisms) written assuming values always exist and transport them to a world (category $\mathcal{D}$) that accounts for the possibility of missing values (option), while preserving their clarity.

ここでは値が存在する前提で書かれた純粋なロジック（射）を、その明快さを保ったまま、値が存在しない可能性（option）を考慮した世界（圏 $\mathcal{D}$）へ連れて行きます。

<table class="matrix-table"><tbody><tr><td>Component / 構成要素</td><td>Raw World C (Plain) / 生身の世界 C</td><td>Option World D (Context) / Optionの世界 D</td></tr><tr><td>Objects (Types)対象（型）</td><td>number, string</td><td>Option<number>, Option<string></td></tr><tr><td>Morphisms (Functions)射（関数）</td><td>f: A → B</td><td>map(f): Option&lt;A&gt; → Option&lt;B&gt;</td></tr><tr><td>Rules of the World世界のルール</td><td>Applying f changes the value.f を適用すると値が変わる。</td><td>Applying map(f) changes only the contents maintaining the structure.map(f) を適用すると構造を維持したまま中身だけが変わる。</td></tr></tbody></table>

First, let's define an `Option` type that wraps raw types (like `number` or `string`) and adds a tag indicating whether a value exists. We'll also define a `map` function that lifts functions from the raw world into the Option world.

まずは生身の型（number や stringなど）をラップして値が存在するかどうかをタグとして付け加える `Option`型を定義しましょう。また、関数を生の世界からOptionの世界に持ち上げるmap関数も定義します。

```tsx
// --- 1. Object Mapping (Type Constructor) ---

/** * [Category Theory] Object Mapping: Maps a raw type T to a new object Option<T>.
 * [Programming] Tagged Union: Attaches a "Context" label to the data.
 */
type Option<T> = 
    | { tag: "some"; value: T } // Label for "Value Exists". Holds the data (value).
    | { tag: "none" };          // Label for "Value is Absent". Holds no data.

/** * Lifts a raw value into the "Option World."
 * By attaching the "some" tag, the Functor (map) knows this is "Executable."
 */
const some = <T>(value: T): Option<T> => ({ tag: "some", value });

/** * Defines "Absence" as a valid resident of the "Option World."
 * By attaching the "none" tag, the Functor (map) knows to "Skip" execution.
 */
const none = <T>(): Option<T> => ({ tag: "none" });

// --- 2. Morphism Mapping (The map function) ---

/**
 * map is the "Translator" between the Raw World and the Option World.
 */
const map = <A, B>(f: (a: A) => B) => (opt: Option<A>): Option<B> => {
    // The "Physics" of the Functor is defined by checking the tags:
    return opt.tag === "some" 
        ? some(f(opt.value)) // Tag is 'some': Unbox, apply f, then re-box as 'some'.
        : none();            // Tag is 'none': Ignore f and return an empty box as 'none'.
};
```

The code below compares calculations using raw-world functions and values (`double`, `toStr`, `rawValue`) with their Option equivalents.

下のコードでは生身の世界の関数と値（`double`, `toStr`, `rawValue`）による計算とそのOption版を比較しています。

```tsx
/** Morphism f: A function in the raw world */
const double = (n: number): number => n * 2;

/** Morphism g: A function in the raw world */
const toStr = (n: number): string => `Result: ${n}`;

// --- Category C: Execution in the Raw World ---
// Values are "naked." Functions are applied directly.

const rawValue = 10;
const resultC = toStr(double(rawValue)); 

console.log("Result in Category C:", resultC); // "Result: 20"

// --- Category D: Execution in the Option World ---
// Values are encapsulated. Functions are "sent in" using the map functor.

const optValue: Option<number> = some(10);

/**
 * Via the Functor's map, the raw functions 'double' and 'toStr' 
 * are "lifted" into residents of the Option world (Option<A> -> Option<B>).
 * This process is known as Lifting.
 */
const resultD = map(toStr)(map(double)(optValue));

console.log("Result in Category D:", resultD); // some("Result: 20")
```

Below is a comparison when the value does not exist. In the raw world, you must explicitly write value checks. In the Option world, `map` handles missing values automatically, allowing you to write simpler code.

下は値が存在しない場合の比較です。生身の世界では値のチェックを明示的に書く必要がありますが、Optionの世界では`map`が値のないケースを処理してくれるので、シンプルに書けます。

```tsx
// --- Category C: The Raw World (Dangerous) ---
// There is no protection. If a value is missing (null/undefined), the app crashes.

const missingValue: any = null;

try {
    //  Runtime Error! double(null) might return 0 or NaN, 
    // but a more complex function would likely throw "Cannot read property... of null"
    const resultC = toStr(double(missingValue)); 
    console.log("Category C Result:", resultC);
} catch (e) {
    console.log("Category C crashed:", e.message);
}

// --- Category D: The Option World (Safe) ---
// The Functor acts as a "Safe Passage." 
// If the value is "none", the logic is bypassed automatically.

const emptyValue = none<number>();

/**
 * The map function acts as a guard. 
 * Since emptyValue is { tag: "none" }, double and toStr are NEVER called.
 * No crash, just a clean propagation of "none".
 */
const resultD = map(toStr)(map(double)(emptyValue));

console.log("Category D Result:", resultD); // { tag: "none" }
```

When you compare the raw world code (Category C) with the Option world code (Category D), the structure stays identical—but the D world is safer.

1.  **Function Reusability**: `double` and `toStr` never know about `Option`, yet they work perfectly in the Option world through `map`.

2.  **Context Preservation**: If `optValue` is `none()`, `map` doesn't throw an error—it just keeps returning `none()`. The functor respects the `Option` category's rule: if there's no value, do nothing.

3.  **Structure Preservation (Axiom)**: Composing `toStr(double(x))` in category $\mathcal{C}$ produces the same structural result as composing `map(toStr)(map(double)(x))` in category $\mathcal{D}$ (preservation of composition).

生身の世界（Category C: Execution in the Raw World）とOptionの世界（Category D: Execution in the Option World）のコードを比べると構造が全く同じまま、Dの世界の方が安全になっています。

1.  **関数の再利用**: `double` や `toStr` は、一度も `Option` の存在を知ることなく書かれていますが、`map` を通じて `Option` の世界でも完璧に機能しています。

2.  **文脈の保存**: もし `optValue` が `none()` であっても、`map` はエラーを出さず、ただ `none()` を返し続けます。これはもし値がなければ、何もしないという `Option` 圏のルールを関手が守っているからです。

3.  **構造の保存（公理）**: 圏 $\mathcal{C}$ で `toStr(double(x))` と合成した結果は、圏 $\mathcal{D}$ で `map(toStr)(map(double)(x))` と合成した結果と、構造的に等しくなります（合成の保存）。

The functor $F$ (specifically, its mapping of morphisms) is not itself a single function limited to specific types. It is a family of morphisms that assigns, for every morphism $f: A \to B$ in category $\mathcal{C}$, a corresponding "lifted morphism" $F(f): F(A) \to F(B)$.

関手 $F$（の射の対応）は、それ自体が特定の型に限定された一本の関数ではありません。圏 $\mathcal{C}$ におけるあらゆる射 $f: A \to B$ に対して、対応する「持ち上げられた射」 $F(f): F(A) \to F(B)$ を割り当てる家族（Family of morphisms）です。

In programming, the fact that `map&lt;A, B&gt;` is defined as a generic (polymorphic function) perfectly corresponds to the mathematical definition where a consistent lifting rule is determined for arbitrary objects $A, B$ and arbitrary morphisms $f$.  

プログラミングにおいて、`map<A, B>` がジェネリクス（多相関数）として定義されるのは、数学における任意の対象 $A, B$ と任意の射 $f$ に対して、一貫した持ち上げのルールが決まるという定義と完全に一致します。

The specification of generics—which allows you to write common code for various types—can be said to be an extremely category-theoretic practice in that it handles structure itself (the skeleton of a category) without depending on specific objects. Without generics, you would have to write separate code for each individual type (object) like `OptionNumber` and `OptionString`, making it difficult to discover or express universal laws.

ジェネリクスという様々な型を共通のコードで書ける仕様は、特定の対象に依存せず、構造そのもの（圏の骨組み）を扱うという点で極めて圏論的な作法だと言えるでしょう。ジェネリクスがなかったら、 `OptionNumber`, `OptionString` といった個別の型（対象）ごとにバラバラなコードを書くことになり、普遍的な法則を見出したり表現することは難しくなります。

> 
> 
> Here are some important points to keep in mind when thinking about category theory through code examples.
> 
> ここでコードによる例示を通じて圏論を考える際の注意点について触れておきます。
> 
> Code in programming describes execution steps (dynamic behavior) for specific data. In contrast, category theory diagrams depict static structure that transcends specific instances.
> 
> プログラミングにおけるコードは、特定のデータに対する実行ステップ（動的な振る舞い）を記述しますが、圏論の図式が描くのは、特定の事象を超えた静的な構造です。
> 
> The functor we're considering is a mapping from one category to another. It doesn't refer to a single type transformation, but rather a blueprint depicting a "bundle of arrows" consistently applied to all the countless types (objects) and functions (morphisms) within a category.
> 
> ここで考えている関手とは圏から圏への写像です。それは単一の型変換を指すのではなく、圏の中に存在する無数の型（対象）と関数（射）のすべてに対して一貫して適用される「矢印の束」を描いた設計図です。
> 
> Because this structure as a bundle is defined statically, we can trust that the mathematical integrity of the entire program is preserved—regardless of which objects or morphisms we combine—without tracing the behavior of individual data step by step.
> 
> この束としての構造が静的に定義されているからこそ、私たちは個別のデータの挙動を逐一追いかけることなく、どんな対象や射を組み合わせてもプログラム全体の整合性が数学的に保たれる、という信頼を得ることができます。
> 
> When reading the code below, remember that specific types and functions are merely examples. Behind the concept of a functor lies a chain of mappings for every possible type in that world and all the morphisms defined between them.
> 
> 以下のコードを読む際も、具体的な型や関数はあくまで一例に過ぎません。関手という概念の背後には、その世界で可能なあらゆる型と、その間に定義されたすべての射に対する写像の連なりがあることを想像してみてください。

# Other Examples of Functors
# その他の関手の例

Let's examine other examples of functors.

他の関手の例も見てみましょう。

## Mathematical Examples
## 数学の例

I'll skip the detailed explanations here (due to limited time and expertise). If you're interested, consult mathematics textbooks or ask an AI.

詳しい説明は（筆者の時間と実力が足りないため）省きます。興味のある方は数学の本にあたるかAIに聞いてみましょう。

### Power Set Functor
### 冪集合関手

Transforms a set $S$ into the set of all its subsets $\mathcal{P}(S)$. Given a function $f: A \to B$, it lifts this to a function that maps subsets of $A$ to subsets of $B$ (specifically, a subset $S$ of set $A$ is mapped to the set $\{f(s) \mid s \in S\}$ consisting of the images of each element under $f$).

集合 $S$ を、そのすべての部分集合の集合 $\mathcal{P}(S)$ に変換する。 関数 $f: A \to B$ があるとき、それを$A$ の部分集合を $B$ の部分集合に移す関数へと持ち上げる（具体的には、集合 $A$ の部分集合 $S$ を、その各要素を $f$ で移した先の集合 $\{f(s) \mid s \in S\}$ に対応させる）。

### Fundamental Group Functor
### 基本群関手

Transforms a shape (topological space) into a "group"—an algebraic structure consisting of "loops" on that shape. It lifts mappings that deform shapes into calculations between groups (homomorphisms). This lets us treat continuous deformations of shapes as mathematical formulas.

図形（位相空間）を、その図形上の「ループ」の集まりである「群」という代数構造に変換する。図形を変形させる写像を、群の間の計算（準同型写像）へと持ち上げます。これにより、図形の連続的な変形を数式として扱えるようになる。

## Programming
## プログラミング

Viewing through the meta lens of a functor reveals that the same structure from the Option example applies to other purposes. In the example below, code from the raw world (`double`, `toStr`) is mapped to the worlds of Array (processing multiple values together), Option (handling potentially missing values), and Promise (asynchronous processing).

関手というメタな視点を持つと、Optionの例と同じ構造が他の目的にも使えることがわかります。下の例では生の世界のコード（`double`, `toStr`)をArray（複数の値をまとめて処理できる）、Option（値が存在しなくても大丈夫）、Promise（非同期処理）の世界にマッピングしています

```tsx
// --- Raw World (Category C) ---
const double = (n: number) => n * 2;
const toStr = (n: number) => `Result: ${n}`;

// ---------------------------------------------------------
// 1. Array World (Context: Plurality)
// ---------------------------------------------------------
const arrayWorld = [1, 2, 3];

/**
 * map(double) handles the 'for' loop internally.
 * map(toStr) handles the 'for' loop internally.
 */
const resultA = arrayWorld
  .map(double)
  .map(toStr); 

// ---------------------------------------------------------
// 2. Option World (Context: Optionality/Missingness)
// ---------------------------------------------------------
const optionWorld = some(10);

/**
 * map(double) handles the 'null-check' internally.
 * map(toStr) handles the 'null-check' internally.
 */
const resultB = map(toStr)(map(double)(optionWorld));

// ---------------------------------------------------------
// 3. Promise World (Context: Temporality/Async)
// ---------------------------------------------------------
const promiseWorld = Promise.resolve(100);

/**
 * .then(double) handles the 'async-wait' internally.
 * .then(toStr) handles the 'async-wait' internally.
 * * Note: In JavaScript, .then is a specialized function that combines 
 * the role of a Functor's 'map' with the 'flatMap' of a Monad.
 */
const resultC = promiseWorld
  .then(double)
  .then(toStr);
```

The fact that these are functors guarantees that the following two pieces of code produce mathematically 100% identical results.

これらが関手であることは、例えば以下の2つのコードが数学的に100%同じ結果になるとことを保証してくれます。

```tsx
// 1. Apply map in small steps (readability-focused)
const res1 = map(toStr)(map(double)(optValue));

// 2. Compose first, then apply map once (performance-focused)
const res2 = map(x => toStr(double(x)))(optValue);
```

A meta-level understanding of functors connects scattered knowledge into a single thread. It helps us see the physical laws of the world created by types and understand not just how to use individual tools, but the principles behind them.

関手というメタ理解を持つことは、バラバラだった知識を一本の糸で繋ぎ、型が作る世界の物理法則を見極めて、個別の道具の使い方を覚えるだけでなく、道具の背後にある原理を理解する助けになります。

# Natural Transformation
# 自然変換

A functor is a mapping from category $\mathcal{C}$ to category $\mathcal{D}$. In the next page, we will explain natural transformations, which are bridges connecting these transformed worlds.

関手とはある圏 $\mathcal{C}$ から圏 $\mathcal{D}$ へのマッピング（写像）のことでした。次のページでは移動した後の世界どうしを繋ぐ橋である自然変換（Natural Transformation）について解説します。

[Natural Transformation 自然変換](/natural-transformation)
