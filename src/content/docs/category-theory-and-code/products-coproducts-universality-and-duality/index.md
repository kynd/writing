---
title: "Products, Coproducts, Universality and Duality 積、余積、普遍性と双対性"
slug: products-coproducts-universality-and-duality
---
We've explored the basic rules of categories—composition and identity morphisms—and the consistency of structure through commutativity and isomorphism. These simple rules are based only on "points and arrows," yet they enable surprisingly rich expression.

圏の基本ルール（合成・恒等射）と、構造の整合性（可換性・同型）について見てきました。  
「点と矢印」だけのシンプルなルールですが、これだけでも驚くほど豊かな表現が可能です。

On this page, we'll explore everyday programming operations—like combining multiple pieces of data (tuples, structs) or choosing between alternatives (union types, enums)—through the lens of category theory. Along the way, we'll also learn about two fundamental concepts: universality and duality.

このページでは、普段プログラミングで当たり前のように使っている 「複数のデータをまとめる（タプル・構造体）」 や 「どちらかのデータを選ぶ（Union型・Enum）」 といった操作について圏論の世界で見てみながら、普遍性と双対性という圏論におけるとても重要な概念についても学びます。

# Product
# 積

Let's take a brief detour and consider the Cartesian product $A \times B$. The Cartesian product is a collection of pairs of elements from two sets, for example as follows:

ちょっと寄り道して積集合 $A \times B$ について考えてみましょう。積集合とは2つの集合の要素のペアを集めたもので例えば下記のようになります。

$\{1, 2\} \times \{a, b\} = \{(1,a), (1,b), (2, a), (2, b)\}$

If we think of the set of all real numbers $\mathbb{R}$ as a number line, i.e., a one-dimensional space, then $\mathbb{R} \times \mathbb{R} = \mathbb{R}^2$ becomes a two-dimensional space (the set of all coordinates).

全ての実数の集合 $\mathbb{R}$ を数直線、つまり1次元の空間だと考えると $\mathbb{R} \times \mathbb{R} = \mathbb{R}^2$ は2次元空間（の座標全ての集合）になります。

In category theory, this concept of product is further abstracted and defined as follows:

圏論ではこの積の概念をさらに抽象化して、下記のように定義します。

Given two objects $A$ and $B$, an object called their "product" $A \times B$ must have the following two arrows (morphisms):

2つの対象 $A$ と $B$ があるとき、それらの「積」と呼ばれる対象 $A \times B$ には、必ず以下の2つの矢印（射）が存在する。

-   $p_1: A \times B \to A$ (extracts the first element)

-   $p_2: A \times B \to B$ (extracts the second element)

-   $p_1: A \times B \to A$（1番目の要素を取り出す）

-   $p_2: A \times B \to B$（2番目の要素を取り出す）

And for any object $X$ with an arrow to $A$ ($f$) and an arrow to $B$ ($g$):

そして、どんな対象 $X$ からも、$A$ への矢印 ($f$) と $B$ への矢印 ($g$) があるならば:

-   There must exist an arrow $h$ from $X$ to $A \times B$

-   $h$ is unique (exactly one)

-   Going through $h$ and then descending via $p_1, p_2$ coincides with the original $f, g$ (the diagram commutes).

-   $X$ から $A \times B$ へ向かう矢印 $h$ が必ず存在し

-   $h$ はたった1つ（一意）

-   $h$ を通ってから $p_1, p_2$ で降りると、元の $f, g$ と一致する（図式が可換になる）。

[![](/images/source-7.png "33")](/images/source-7.png)

[Source](https://colab.research.google.com/drive/1PLr74pG4RC8qYrXjMoTF4IIA7eqESEeY#scrollTo=vXmNjR0qFBYt)

It may be difficult to understand why this definition can represent a product. Let's think about it this way.

この定義がなぜ積を表せるのかはなかなか理解が難しいと思います。このように考えてみましょう。

## Projection
## 射影

The Cartesian product $A \times B$ of sets $A=\{1, 2\}$ and $B=\{a, b\}$ has the following four elements:

集合 $A=\{1, 2\}$ と $B=\{a, b\}$ の積集合 $A \times B$ は、以下の4つの要素を持ちます。

  
$\{(1, a), (1, b), (2, a), (2, b)\}$  

The key feature that makes this set function as a "product" is that we can decompose pairs to identify elements of the original sets. For example, if we select the element $(1, a)$, we can consider two projections:

-   From $(1, a)$ to $1$

-   From $(1, a)$ to $a$

この集合が「積」として機能している最大の特徴は、ペアを解体して元の集合の要素を特定できることです。例えば元 $(1, a)$ を選べば、下の2つの射影が考えられます。

-   $(1, a)$ から $1$ へ

-   $(1, a)$ から $a$ へ  
    

Category theory abstracts this one-to-one correspondence with the original components as the definition of product, and this arrow is also called a projection in category theory.

この1対1で元の成分に対応づけられるという関係を抽象化したのが、圏論における積の定義で、この矢印を圏論でも射影（Projection）と呼びます。

## Universality
## 普遍性

The rule from object $X$ exists to eliminate anything unnecessary from this relationship.

対象$X$からのルールはこの関係性から余計なものを排除するためにあります。

For example, let's consider a triple $(A, B, C)$ that includes not only sets $A, B$ but also a completely unrelated set $C$. We can still create "an arrow that extracts $A$" and "an arrow that extracts $B$" from this. However, this is not pure as a product of $A$ and $B$.

例えば、集合 $A, B$ に加えて、全く関係のない集合 $C$ も加えた3つ組の集合 $(A, B, C)$ を考えてみましょう。ここからも「$A$ を取り出す矢印」と「$B$ を取り出す矢印」は作れます。しかし、これは $A$ と $B$ の積としては純粋ではありません。

When we apply the additional rule—that $h$ exists uniquely—this triple $(A, B, C)$ fails to qualify as a product. The extra $C$ component prevents the arrow $h$ from being uniquely determined. The uniqueness of $h$ ensures that no matter which $X$ (another data source) we start from, all information needed to construct $A$ and $B$ can be reproduced through $A \times B$.

ここで追加のルール（$h$ が一意に存在すること）を当てはめると、この 3 つ組 $(A, B, C)$ は積のオーディションに落ちます。なぜなら、余計な $C$ の部分のせいで、矢印 $h$ が一通りに決まらなくなってしまうからです。$h$ の一意性は、どんな $X$（別のデータ源）から来ても、 $A$ と $B$ を作るための情報は、すべて $A \times B$ を通じて再現できると言っています。

This requirement to contain "only" the necessary information is called "universality" and plays a very important role in category theory.

この必要な情報「だけ」を持つという要請は「普遍性（Universality）と呼ばれ圏論の中では非常に重要な役割を果たします。

## Comparison of Set Theory and Category Theory
## 集合論と圏論の比較

In set theory and category theory, how we think about products differs:

-   **Set theory**: This is a product because it contains pairs of elements from $A$ and $B$

-   **Category theory**: This is a product because it has arrows to $A$ and $B$ (projections) with perfect correspondence (universality), regardless of the contents

集合論と圏論では、積の捉え方が次のように変わります。

-   **集合論**: $A$ の要素と $B$ の要素をペアにした**中身**を持っているから、これは積だ

-   **圏論**: $A$ への矢印と $B$ への矢印（射影）があり、それらが完璧な対応関係（普遍性）を持っているから、中身が何であれこれは積だ

This abstraction lets us extend the concept of product beyond sets—to anything that satisfies certain relationships through morphisms.

この抽象化によって対象が集合でなくても、ある関係（射）を満たすものとして積の概念を拡張できます。

## Examples of Products in Code
## コードにおける積の例

Creating tuples like `(int, str)` or structs with multiple fields is common in programming. When we define these using only category-theoretic arrows, their essence becomes clear.

プログラミングで `(int, str)` のようなタプルや、複数のフィールドを持つ構造体を作ることは日常茶飯事ですが、これを圏論の矢印だけで定義すると、その本質が見えてきます。

When we have two objects $A$ and $B$, their "product" object $A \times B$ (such as a tuple) must have the following two projections:

-   $p_1: A \times B \to A$ (extracts the first element)

-   $p_2: A \times B \to B$ (extracts the second element)

2つの対象 $A$ と $B$ があるとき、それらの「積」と呼ばれる対象 $A \times B$（タプルなど）には、必ず以下の2つの射影が存在します。

-   $p_1: A \times B \to A$（1番目の要素を取り出す）

-   $p_2: A \times B \to B$（2番目の要素を取り出す）

Let's write this in TypeScript.

Typescriptで書いてみましょう。

```tsx
// Definitions for the Product A x B
type A = number;
type B = string;
type ProductAB = [A, B]; // Tuple representing A x B

// --- Projections (The arrows p1, p2) ---

/** Morphism p1: A x B -> A */
const pi1 = (p: ProductAB): A => p[0];

/** Morphism p2: A x B -> B */
const pi2 = (p: ProductAB): B => p[1];

// --- Universality: Creating the morphism h ---

type X = number;

/**
 * Given f: X -> A and g: X -> B, 
 * factorize returns the UNIQUE morphism h: X -> A x B
 * In Category Theory, h is often denoted as <f, g>
 */
const factorize = (
    f: (x: X) => A, 
    g: (x: X) => B
): ((x: X) => ProductAB) => {
    return (x: X) => [f(x), g(x)];
};

// --- Verification ---
const f = (x: X): A => x * 2;
const g = (x: X): B => `ID-${x}`;

const h = factorize(f, g);
const result = h(10); // [20, "ID-10"]

console.assert(pi1(result) === f(10), "p1 . h must equal f");
console.assert(pi2(result) === g(10), "p2 . h must equal g");
```

The rule of universality includes a crucial clause: "there exists exactly one (unique) morphism $h$ from $X \to A \times B$." From a programming perspective, this means it represents the minimal implementation that satisfies $f$ and $g$.

普遍性のルールには、「$X \to A \times B$ という矢印 $h$ がたった1つ（一意に）存在する」という重要な一節があります。これはプログラミングの視点では、$f$ と $g$ を満たす最小の実装になっていることを意味します。

For example, if the product included extra data `C` like `Tuple[A, B, C]`, `factorize` would become $h(x) = [f(x), g(x), \text{any\_value}]$. Since the value of $C$ could be chosen arbitrarily, $h$ would no longer be uniquely determined.

例えば、もし積が `Tuple[A, B, C]` のように余計なデータ `C` を持っていた場合、`factorize` は$h(x) = [f(x), g(x), \text{any\_value}]$ となり、$C$ の値が任意に選べてしまうため、h が一意に決まりません。

```tsx
/**
 *  Counter-example: Why h must be UNIQUE
 * * If the Product was [A, B, string] instead of [A, B], 
 * we would lose "Universality" because h would no longer be unique.
 */

type A = number;
type B = string;
type X = number;

// A "Bad" Product candidate that has an extra 'string' field
type BadProduct = [A, B, string];

/**
 * If we try to create h: X -> BadProduct, we face a problem.
 * There is more than one way to implement this while still satisfying 
 * the conditions (pi1 . h = f and pi2 . h = g).
 */
const factorizeBad = (
    f: (x: X) => A,
    g: (x: X) => B
): ((x: X) => BadProduct) => {
    
    // Implementation 1: h1
    // return (x: X) => [f(x), g(x), "Why am I here?"];

    // Implementation 2: h2
    // return (x: X) => [f(x), g(x), "I am different!"];

    // Because we can't decide which one is "correct", 
    // uniqueness collapses, and this object fails the "Product audition".
    throw new Error("Implementation is not unique!");
};
```

This is how the requirement that "$h$ is uniquely determined" ensures that the product $A \times B$ is the purest structure for composing $A$ and $B$—one that contains nothing extraneous.

このように、「$h$ が一意に決まる」という条件があるおかげで、積 $A \times B$ は$A$ と $B$ を合成するためだけの最も純粋で、余計なものを含まない構造であることが保証されるのです。

The concept of product mathematically guarantees the composition of information.

-   **Aggregation of information**: If you have a "function that returns a name" and a "function that returns an age," the product guarantees you can uniquely create a "function that returns a profile" by combining them (as a logical function, setting aside implementation details).

-   **Separation of interfaces**: Extracting only the necessary information from a large data structure (product) through projections is the essence of Separation of Concerns.

積の考え方は、情報の合成を数学的に保証します。

-   **情報の集約**: 「名前を返す関数」と「年齢を返す関数」があれば、それらを組み合わせて「プロフィールを返す関数」が（コードの書き方は置いておいて論理的な機能として）一意に作れることを保証します。

-   **インターフェースの分離**: 巨大なデータ構造（積）から必要な情報だけを射影で取り出すという操作は、関心の分離（Separation of Concerns）そのものです。

The "tuples" and "classes" we use every day are actually category-theoretic structures built on arrows called projections.

私たちが普段使っている「タプル」や「クラス」は、実は射影という矢印に支えられた圏論的な構造体だったのです。

# Coproduct and Duality
# 余積 (Coproduct) と 双対性 (Duality)

In category theory, when you reverse all the arrows in a given concept, you obtain a new concept. This is called the **dual** of the original concept. The dual of the product (with arrows reversed) is called the coproduct. What's fascinating is that anything you can prove about products can be proven almost automatically for coproducts simply by flipping the arrows. Learn one, and you get the other for free.

圏論では、ある概念に値してすべての射を逆向きにすると新しい概念が得られます。これを元の概念の**双対**と呼びます。積 (Product) の矢印を逆にしたものは余積 (Coproduct)と呼ばれます。面白いのは、積について証明できたことは、矢印をひっくり返すだけで、ほぼ自動的に余積についても証明できてしまうという点です。1つ学べば、自動的にもう1つが手に入るのです。

While the product was a "combination (AND)" that holds both $A$ and $B$, the coproduct represents a "choice (OR)" structure that holds either $A$ or $B$.

積が $A$ と $B$ の両方を持つ「組み合わせ（AND）」だったのに対し、余積は $A$ または $B$ のどちらか一方を持つ「選択（OR）」の構造を指します。

## Definition of Coproduct
## 余積の定義

For two objects $A, B$, their coproduct $A + B$ has two incoming arrows—the reverse of the product. These are called injections.

-   $i_1: A \to A + B$

-   $i_2: B \to A + B$

2つの対象 $A, B$ の余積 $A + B$ には、積のときとは逆に、**入ってくる2つの矢印**が存在します。これを Injection（入射） と呼びます。

-   $i_1: A \to A + B$

-   $i_2: B \to A + B$

Universality is also reversed. For any object $X$, if there exist arrows $A \to X$ and $B \to X$, then there exists a unique arrow $h$ from $A + B \to X$.

普遍性も逆転します。どんな対象 $X$ に対しても、$A \to X$ と $B \to X$ という矢印があれば、$A + B \to X$ という一意な矢印 $h$ が存在します。

[![](/images/source-8.png "33")](/images/source-8.png)

[Source](https://colab.research.google.com/drive/1PLr74pG4RC8qYrXjMoTF4IIA7eqESEeY#scrollTo=-bqRfHRdeO0V)

## Examples of Coproducts in Code
## コードにおける余積の例

While products correspond to tuples and structs, coproducts in programming correspond to the following:

-   **C**: `union`

-   **TypeScript**: `Union Type` (e.g., `string | number`)

-   **Functional languages**: `Either&lt;A, B&gt;`

積が「タプルや構造体」だったのに対し、余積はプログラミングでは以下のものに相当します。

-   **C言語**: `union`

-   **TypeScript**: `Union Type` (例: `string | number`)

-   **関数型言語**: `Either<A, B>` (左か右か)

```tsx
// Coproduct (A + B) represented as a Union Type
type Success = { kind: "success"; value: number }; // Object A
type Failure = { kind: "failure"; error: string }; // Object B

type Result = Success | Failure; // Coproduct: A + B

/**
 * To handle a Coproduct, we must branch based on the "injected" type.
 * This function 'process' acts as the morphism h: (A + B) -> X,
 * where X is the resulting string.
 */
function processResult(res: Result): string {
    switch (res.kind) {
        case "success":
            // Morphism f: A -> X
            return `Success with value: ${res.value}`;
        case "failure":
            // Morphism g: B -> X
            return `Failure with error: ${res.error}`;
    }
}

// --- Verification ---

// Injection i1: A -> A + B
const s: Result = { kind: "success", value: 100 };
// Injection i2: B -> A + B
const f: Result = { kind: "failure", error: "Timeout" };

console.log(processResult(s)); // Applying h to i1(A) results in f(A)
console.log(processResult(f)); // Applying h to i2(B) results in g(B)
```

When you think about duality, you realize that data decomposition (product) and data construction (coproduct) are actually two sides of the same coin.

-   The product $A \times B$ defines an interface for "extracting" information.

-   The coproduct $A + B$ defines a structure for "receiving" information.

双対を考えると、データの分解（積）とデータの構築（余積）が、実は同じコインの裏表であると気づけます。

-   積 $A \times B$ は、情報を「取り出す」ためのインターフェースを定義している。

-   余積 $A + B$ は、情報を「受け入れる」ための構造を定義している。

> 
> 
> Products and Coproducts in Ordered Sets (Preorders)  
> 順序集合（前順序）における積と余積
> 
> Because the definition in category theory is highly abstract, we can find products and coproducts even in worlds where objects are not "sets" or "types." Let's consider a category where objects are numbers like real numbers, and morphisms are $x \le y$ (ordering relations).
> 
> 圏論の定義は非常に抽象的なので、対象が「集合」や「型」でない世界でも積や余積を見つけることができます。実数などの数値を対象とし、射を $x \le y$（大小関係）とする圏を考えてみましょう。
> 
> **The product (**$A \times B$**) is** $\min(A, B)$Arrows extend to both $A$ and $B$, so $A \times B \le A$ and $A \times B \le B$. To satisfy universality, it must be the largest among all such values. In other words, $\min$—the greatest lower bound of $A$ and $B$—serves as the product.
> 
> **積 (**$A \times B$**) は**$\min(A, B)$  
> $A$ と $B$ の両方へ矢印が伸びているので、$A \times B \le A$ かつ $A \times B \le B$。普遍性を満たすには、その中で最も大きいものでなければなりません。つまり、$A$ と $B$ の最大下界である $\min$ が積の役割を果たします。
> 
> **The coproduct (**$A + B$**) is** $\max(A, B)$  
> With arrows reversed, the coproduct condition becomes "above both $A$ and $B$, and the smallest among them." This corresponds to $\max$—the least upper bound of $A$ and $B$.
> 
> **余積 (**$A + B$**) は**$\max(A, B)$  
> 矢印を逆転させると、余積の条件は「$A$ と $B$ の両方の上側にあり、かつその中で最も小さいもの」となります。つまり、$A$ と $B$ の最小上界である $\max$ に相当します。
> 
> Try drawing diagrams to explore this further.  
> 図を描きながら考えてみましょう。

[Functor 関手](/functor)
