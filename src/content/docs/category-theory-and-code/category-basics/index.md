---
title: "Category Basics圏の基本"
slug: category-basics
---
Let's take a closer look at the structure of categories and what they mean.  
As a quick review, only two rules (axioms) are needed to construct a category.

圏の構造やその意味について、より詳しくみていきましょう。  
復習ですが、圏を構成するためのルール（公理）は2つしかありません。

1.  Composition  
    When there is $A \to B$ (morphism $f$) and $B \to C$ (morphism $g$), the composed arrow $A \to C$ (morphism $g \circ f$) must exist.

2.  Identity  
    For every object $A$, there must exist an identity arrow $id_A: A \to A$ that "does nothing." Composing any morphism with an identity arrow leaves that morphism unchanged ($f \circ id_A = f$ and $id_B \circ f = f$).

1.  合成 (Composition)  
    $A \to B$（射 $f$）と $B \to C$（射 $g$）があるとき、それらを合成した $A \to C$（射 $g \circ f$）という矢印が存在しなければならない。

2.  恒等射 (Identity)  
    すべての対象 $A$ に対して、自分自身へ戻る「なにもしない矢印」$id_A: A \to A$ が必ず存在しなければならない。任意の射と恒等射を合成しても、元の射は変化しません（$f \circ id_A = f$ かつ $id_B \circ f = f$）。

> 
> 
> A category can have any number of objects and morphisms—even infinitely many. While we've been using diagrams as examples, most categories we work with have too many objects or networks too complex to draw completely. Diagrams are mere tools to help understanding, but drawing them by hand is an extremely powerful technique, so we'll continue using diagrams throughout this page.
> 
> 対象や射は何個あっても、無限個でもかまいません。これまで図を描きながら例を挙げてきましたが、実際に扱う多くの圏は対象が多すぎたり、ネットワークが複雑すぎて全てを描き切れないケースがほとんどです。図はあくまで理解のためのツールですが、実際に手を動かして描くことは非常に強力な武器になるので、このページでも引き続き図解をベースに進めていきます。

## Common Examples
## 代表的な例

Let's look at some representative examples to see what "points and arrows" specifically refer to.

「点と矢印」が具体的に何を指すのか、代表的なものをセットで見てみましょう。

<table class="matrix-table"><tbody><tr><td>Name 圏の名前</td><td>Object 対象</td><td>Morphism 射</td></tr><tr><td>Category of all sets ($\mathbf{Set}$)<br>全集合の圏 ($\mathbf{Set}$)</td><td>All sets<br>あらゆる集合</td><td>All functions between them<br>それらの間のすべての写像</td></tr><tr><td>Category of types in programming<br>プログラミングにおける型の圏</td><td>Types (int, float, str, custom classes...)<br>型（int, float, str, 自作クラス...）</td><td>Functions connecting them<br>それらを結ぶ関数</td></tr><tr><td>Preorder<br>前順序</td><td>Each element of a set (e.g., each integer n ∈ ℤ)<br>ある集合の各要素（例：整数 n ∈ ℤ の元ひとつひとつ）</td><td>The comparison relation ≤<br>≤ という比較関係</td></tr><tr><td>Group<br>群</td><td>The entire group viewed as a single object<br>群全体をひとつの対象としてみる</td><td>Elements of the group (the operation itself)<br>群の要素（演算そのもの）</td></tr></tbody></table>


We didn't mention it on the previous page, but morphisms within a single category don't need to share the same meaning. Also, multiple morphisms can exist between the same objects. For example, in the category of all sets ($Set$), any two objects have all possible functions between them. In the category of types, each morphism represents a different function.

前ページでは触れませんでしたが、ひとつの圏の中で、射が同じ意味を持っている必要はありません。また、同じ対象の間には複数の射がありえます。例えば全ての集合の圏（$Set$）では対象どうしの間にはその間で可能な全てのパターンの写像があります。型の圏ではそれぞれの射は異なる関数になります。

Note that changing the morphisms creates a different category, even with the same objects. For example, if we take integers $n \in \mathbb{Z}$ as objects, the resulting network structure will be completely different depending on whether the arrows represent "$\le$ (ordering relation)" or "divides (divisibility relation)".

対象が同じでも射を変えれば違う圏が作れることにも注意しましょう。例えば整数 $n \in \mathbb{Z}$を対象にしても、矢印を「$\le$（大小関係）」とするか、「割り切れる（整除関係）」とするかで、出来上がるネットワークの構造（圏）は全く異なります。

**$\le$ ordering relation**  
**$\le$（大小関係）**

[![](/images/source.png "75")](/images/source.png)

[Source](https://colab.research.google.com/drive/1PLr74pG4RC8qYrXjMoTF4IIA7eqESEeY#scrollTo=vXmNjR0qFBYt)

**Divisibility relation**  
**整除関係**

[![](/images/source-1.png "50")](/images/source-1.png)

[Source](https://colab.research.google.com/drive/1PLr74pG4RC8qYrXjMoTF4IIA7eqESEeY#scrollTo=vXmNjR0qFBYt)

With this in mind, let's explore several important concepts about category structure.

以上を踏まえて、圏に構造についての重要な概念をいくつか見ていきましょう。

# Commutativity - Same Result Regardless of Route
# 可換性 -どのルートを通っても同じ

In category theory, a "diagram commutes" means that when going from one point to another, the final result (the composed morphism) is the same regardless of which route you take.

圏論において「図式が可換である」とは、ある点から別の点へ行くときに、どのルートを通っても最終的な結果（合成された射）が同じになることを指します。

  
**Commutativity**

In the diagram below, there are two routes from $A$ to $C$:  
下の図では $A$ から $C$ へ、2つのルートがあります。

1.  Morphism $h$.

2.  Following morphism $f$ and morphism $g$ in sequence.

1.  射 $h$ 。

2.  射 $f$ と 射 $g$ を順番に辿って行く。

[![](/images/source-2.png "50")](/images/source-2.png)

[Source](https://colab.research.google.com/drive/1PLr74pG4RC8qYrXjMoTF4IIA7eqESEeY#scrollTo=vXmNjR0qFBYt)

When $h = g \circ f$ holds, we say "this diagram commutes."

$h = g \circ f$ が成り立つとき、「この図式は可換である」といいます。

## Example of Commutativity in Code
## コードにおける可換性の例

Let's write a code example. Think of a process that takes a list of numbers, doubles each one, and converts the results to strings.

コードで例を書いてみましょう。数値のリストを受け取り、それらを2倍にしてから文字列にするという処理を考えます。

-   **Route 1 (Direct)**: A single function `h`

-   **Route 2 (Composition)**: Call function `f` that `double`s and function `g` that does `to_str` in sequence

-   **ルート1（直接）**: 関数 `h` ひとつ

-   **ルート2（合成）**: `double` する関数 `f` と、`to_str` する関数 `g` を順番に呼ぶ

If these two routes return the same result for any input, the structure of this program is commutative.

どのような入力に対しても、この2つのルートが同じ結果を返す場合、このプログラムの構造は可換であるといえます。

```tsx
// --- Morphisms (Functions as Arrows) ---

const f = (n: number): number => n * 2;
const g = (n: number): string => `Result: ${n}`;

/** Route 1: Direct implementation */
const h = (n: number): string => `Result: ${n * 2}`;

// --- Composition Tool ---

const compose = <A, B, C>(f: (a: A) => B, g: (b: B) => C) => 
    (x: A): C => g(f(x));

// --- Verification of Commutativity ---

function verifyCommutativity(inputVal: number) {
    /** Route 2: Combined route via composition */
    const gAfterF = compose(f, g);

    // If h(x) === (g ∘ f)(x), the diagram commutes!
    console.assert(h(inputVal) === gAfterF(inputVal), "Commutativity failed");
    console.log(`[OK] Commutativity: Direct h equals g ∘ f for input ${inputVal}`);
}

verifyCommutativity(10);
```

When commutativity is guaranteed, you can confidently refactor your code.

可換であることが保証されていると、安心してコードを書き換えることができます。

-   **Optimization**: If step-by-step processing is slow, combine steps into a single, mathematically equivalent function `h` (Route 2 → Route 1)

-   **Reusability**: Decompose the complex function `h` into reusable components `f` and `g` (Route 1 → Route 2)

-   **最適化**: ステップごとに処理すると遅いから、数学的に同等な1つの高速な関数 `h` にまとめる（ルート2 → ルート1）

-   **再利用**: 複雑な関数 `h` を、再利用可能な部品 `f` と `g` に分割する（ルート1 → ルート2）

This illustrates the essence of commutativity: even if internal implementations differ, they are interchangeable as long as the externally visible connections of arrows—the structure—remain the same.

このように、「中身の実装は違っても、外から見た矢印のつながり（構造）が同じであれば、それらは置き換え可能である」という考え方が、可換性の本質です。

# Isomorphism - Objects That Are Essentially the Same
# 同型 - 対象が本質的に同じ

Two objects $A$ and $B$ are said to be “isomorphic” when there exists a relationship that allows you to go back and forth between them. Specifically, the following two morphisms (functions) must exist:

- $f: A \to B$
- $g: B \to A$ (the inverse morphism, also written as $f^{-1}$)

2つの対象 $A$ と $B$ が「**同型**である」とは、その間に行って帰ってこられる関係があることを指します。具体的には、以下の2つの射（関数）が存在する必要があります。

- $f: A \to B$
- $g: B \to A$ （逆射。$f^{-1}$ とも書かれます）

The condition is that composing these morphisms results in the identity morphism—meaning they yield the same result as doing nothing.

- $g \circ f = id_A$ (going and coming back leaves you where you started)
- $f \circ g = id_B$ (coming and going back also leaves you where you started)

そして、これらを合成したときに恒等射、つまり何もしていない結果になることが条件です。

- $g \circ f = id_A$ （行って帰ってきたら元通り）
- $f \circ g = id_B$ （帰って行ってきても元通り）

## Example of Isomorphism in Code
## コードにおける同型の例

Structures that hold the same information but differ only in how that data is organized can be considered isomorphic.

同じ情報を保持しているけれどデータの持ち方が違うだけの構造は同型と見なすことができます。

For example, a tuple (x, y) and a Point data class are different formats, but you can convert between them without losing or adding information.

例えば、(x, y) というタプルと、Point というデータクラスは違いますが、情報を一切失ったり追加することなく互いに変換ができます。  

[![](/images/source-3.png "50")](/images/source-3.png)

[Source](https://colab.research.google.com/drive/1PLr74pG4RC8qYrXjMoTF4IIA7eqESEeY#scrollTo=vXmNjR0qFBYt)

```tsx
// --- Objects (Types) ---

interface PointObj {
    readonly x: number;
    readonly y: number;
}

type PointTuple = [number, number];

// --- Morphisms (Isomorphisms f and g) ---

/** Morphism f: PointObj -> PointTuple */
const toTuple = (p: PointObj): PointTuple => [p.x, p.y];

/** Morphism g: PointTuple -> PointObj (The inverse) */
const toObj = (t: PointTuple): PointObj => ({ x: t[0], y: t[1] });

// --- Helper Functions ---

const compose = <A, B, C>(f: (a: A) => B, g: (b: B) => C) => 
    (x: A): C => g(f(x));

// --- Isomorphism Verification ---

function verifyIsomorphism() {
    const p: PointObj = { x: 10, y: 20 };
    const t: PointTuple = [10, 20];

    // Case 1: Going to tuple and back (g ∘ f)
    // The result should be structurally identical to the original 'p'
    const backToObj = compose(toTuple, toObj);
    const resultObj = backToObj(p);
    
    console.assert(JSON.stringify(resultObj) === JSON.stringify(p), "Isomorphism (g ∘ f) failed");
    console.log(`[OK] Round-trip to Object:`, resultObj);

    // Case 2: Going to object and back (f ∘ g)
    // The result should be structurally identical to the original 't'
    const backToTuple = compose(toObj, toTuple);
    const resultTuple = backToTuple(t);

    console.assert(JSON.stringify(resultTuple) === JSON.stringify(t), "Isomorphism (f ∘ g) failed");
    console.log(`[OK] Round-trip to Tuple:`, resultTuple);
}

verifyIsomorphism();
```

Just like commutativity, isomorphism helps with code refactoring and design.

- **Refactoring**: When replacing internal data structures, isomorphism mathematically guarantees that external logic remains intact.
- **Interface design**: When converting data formats to match API specifications, isomorphism provides a criterion for verifying that no information is lost.

可換性と同じく、同型性はコードの書き換えや設計の助けになります。

- **リファクタリング**: 内部のデータ構造を置き換えても、同型性があれば外部のロジックを壊さないことが数学的に保証されます。
- **インターフェースの設計**: APIの仕様に合わせてデータ形式を変換する際、「情報の欠落がないか」をチェックする指標になります。

[Products, Coproducts, Universality and Duality 積、余積、普遍性と双対性](/products-coproducts-universality-and-duality)
