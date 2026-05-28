---
title: "Generics and Category Theory ジェネリクスと圏論"
---
We used generics on the pages on functors and natural transformations. Generics are extremely useful for implementing category-theoretic thinking, which focuses on relationships between objects rather than the characteristics of objects themselves. This single feature can express multiple different concepts in category theory.

関手と自然変換のページではジェネリクスを用いました。ジェネリクスは対象自体の特徴ではなく、対象同士の関係に注目するという圏論的な考え方を実装する上で非常に役立ちます。ジェネリクスという1つの機能を、圏論における複数の異なる概念を表現するために使うことができます。

# Generics as Functors
# 関手としてのジェネリクス

When generics appear in the context of functors, they primarily serve as type constructors.

関手の文脈でジェネリクスが登場するとき、それは主に型コンストラクタとしての役割を果たしています。

For example, consider definitions like `List<T>` or `Option<T>`. These take a type `T` and generate a new type with the context of a list or option. This corresponds to mapping from one object to another in category theory.

たとえば `List<T>` や `Option<T>` という定義を考えてみましょう。これらは、ある型 `T` を受け取って、新しくリストやオプションという文脈を持った型を生成します。これは圏論における対象から対象へのマッピングに対応します。

The benefit of generics here is that we can consistently define the structural and mathematical properties of being a list, whether the contents are numbers or strings.

ここでのジェネリクスの恩恵は、中身が数値であっても文字列であっても、リストであるという構造的、数学的な性質を一貫して定義できる点にあります。

# Generics as Natural Transformations
# 自然変換としてのジェネリクス

In the context of natural transformations, generics serve as polymorphic functions. For example, consider a function `head<T>` that converts `List<T>` to `Option<T>`.

一方で、自然変換の文脈におけるジェネリクスは、多相関数としての役割を担います。たとえば、`List<T>` を `Option<T>` に変換する `head<T>` という関数を考えます。

```tsx
const head = <T>(list: T[]): Option<T> => ...
```

The `<T>` in this function doesn't merely define a type—it imposes a powerful constraint: the repacking rule (structure) never changes, regardless of the content type.

この関数における `<T>` は、単に型を定義しているのではなく、中身が何型であっても、詰め替えのルール（構造）は決して変わらないという強力な制約を課しています。

When writing a function like `alpha<T>`, you cannot modify the contents of `T` (doing so would cause a compile error since `T`'s type is unknown). This constraint—not knowing the contents in detail—is the key to guaranteeing that the transformation is "natural." Because the contents cannot be accessed, the code must focus purely on structural transformation. This constraint brings mathematically robust consistency to the program.

`alpha<T>` のような関数を書くときには、 `T` の中身を変更することはできません（`T`の型が不明なのでコンパイルエラーになります。）この中身を詳しく知らないという制約こそが、その変換が「自然」であることを保証する鍵となります。中身にアクセスできないからこそ、そのコードは純粋に構造の変換だけに専念せざるを得なくなります。この制約が、数学的に強固な一貫性をプログラムにもたらすのです。

In category theory, natural transformations are bridges between functors. By using generics, we can describe "natural" rules that safely move contents from structure to structure without depending on any specific concrete type.

圏論では、自然変換は関手間の橋渡しです。ジェネリクスを用いることで、私たちは特定の具体的な型に依存することなく、構造から構造へと中身を安全に移動させる「自然な」ルールを記述できるのです。

# About Languages Without Generics
# ジェネリクスのない言語について

Even in dynamically typed languages like JavaScript and Python, you can reproduce the behavior of functors and natural transformations. However, you cannot mathematically guarantee structure or prove naturality.

動的型付け言語である JavaScript や Python でも、関手や自然変換の挙動を再現することは可能です。ですが、数学的に構造を保証したり、自然性の証明をすることはできなくなります。

## Cannot Perform Meta-Level Typing
## メタな型付けができない

In statically typed languages like TypeScript, you can explicitly state through interfaces or type definitions that a type is a functor because it has `map`.

TypeScript のような静的型付け言語では、この型は `map` を持っているから関手であるということをインターフェースや型定義で明示できます。

In contrast, Python or JS will accept anything with a method named `map` (duck typing). While flexible and convenient, this approach cannot mechanically verify whether the transformation rule maintains mathematical consistency (axioms) across all types.

一方、Python や JS では、`map` という名前のメソッドを持っていれば動いてしまいます（ダックタイピング）。これは柔軟で便利ですが、この変換ルールは、あらゆる型に対して数学的な一貫性（公理）を守っているかを機械的にチェックすることができません。

For example, TypeScript uses generics to enforce through interfaces that "no matter what type `T` comes in, this structure (functor) is maintained." JavaScript cannot express such rules.

例えば TypeScript では、ジェネリクスを用いて「どんな型 `T` が来ても、この構造（関手）は維持される」ということをインターフェースで強制できますが、JavaScript ではこうしたルールを書くことができません。

```tsx
/**
 * [Category Theory] Functor Interface
 * F is a container that maps a type T to a new type F<T>.
 */
interface Functor<F> {
  // A contract: Must lift a function (A -> B) to (F<A> -> F<B>)
  // without knowing or modifying the values of A.
  map<A, B>(f: (a: A) => B, fa: any): any;
}

/**
 * Implementation of the Option Functor.
 * Generics <A, B> act as a "mathematical cage."
 */
class MyOptionFunctor implements Functor<"Option"> {
  map<A, B>(f: (a: A) => B, fa: A | null): B | null {
    // Because A is generic, the compiler prevents us from performing 
    // operations like `fa * 2` or `fa.toUpperCase()`.
    // We are FORCED to only apply `f` to the content.
    return fa === null ? null : f(fa);
  }
}

// Naturality Guaranteed:
// The type system ensures this transformation preserves the structure 
// and doesn't "cheat" by inspecting or modifying the data.
```

## No Barrier to Prevent Unnatural Transformations
## 不自然な変換を防ぐ壁がない

In category theory, a natural transformation is "natural" when it repacks only the structure (container) without tampering with the contents. When you use generics, the function cannot see the contents `T`, making it impossible to tamper with them.

圏論において自然変換が「自然」であるためには、中身をいじらずに構造（コンテナ）だけを詰め替えるというルールが守られていなければなりません。上で議論した通りジェネリクスを使うと、関数は中身 `T` を見ることができないため、物理的にいじることができません。

```tsx
// Since the type T is unknown, it's impossible to double or modify the content.
// Therefore, this is guaranteed at the type level to be a "pure structural transformation (natural transformation)."
const alpha = <T>(v: T) => (phi: (x: T) => any) => phi(v);
```

In JS, the contents are known at runtime, making it possible to inadvertently or intentionally corrupt them.

JS では中身が何であるか実行時に分かってしまうため、意図せず（あるいは意図的に）中身を汚すことができてしまいます。

```jsx
// In JS, if you know the content is a number, you can modify it.
const alpha = (v) => (phi) => {
    if (typeof v === 'number') {
        return phi(v * 2); //  Modifying arbitrarily! This is no longer "natural."
    }
    return phi(v)
}
```

## Is Category Theory Useless in Python and JS?
## Python や JS では圏論は役に立たないのか

Apparently in JavaScript and Python, `Promise`, `map`, and `flat_map` are used daily.

-   **JavaScript**: `Array.map` and `Promise.then` behave exactly like functors.

-   **Python**: The `map()` function and list comprehensions work similarly.

もちろん、JavaScript や Python でも、`Promise`や `map`, `flat_map` は日常的に使われています。

-   **JavaScript**: `Array.map` や `Promise.then` は関手の挙動そのものです。

-   **Python**: `map()` 関数やリスト内包表記も同様です。

In these languages, using category theory as a tool for rigorous proof is difficult. However, it's still very powerful as a mental model for good design. Without generics (static polymorphism), guaranteeing that a transformation deals only with structure relies on programmer discipline and conventions. Yet knowing mathematically desirable structures and behaviors—such as whether a function tampers with contents or merely swaps structure—serves as a valuable guide for writing good code and establishing coding conventions.

これらの言語では、圏論を厳密な証明の道具として使うのは難しいですが、良い設計のための指針（メンタルモデル）として使う分には非常に強力です。このように、ジェネリクス（静的な多相性）がない言語では、変換が構造だけを扱っていることを保証するのは、プログラマの善意や規約のみになってしまいます。ですが数学的に望ましい構造や挙動を知っていること、例えばこの関数は中身をいじっているか、それとも構造を入れ替えているだけかという視点を持つことは、良いコードやコーディング規約を書くための指針となるでしょう。

> 
> 
> Different languages have different generic capabilities. Some, like Haskell with its Parametric Polymorphism, offer even more rigorous mechanisms. While we won't explore language-specific details here, you might find it interesting to investigate further.
> 
> 言語によってはジェネリクスの機能が異なったり、Haskellのパラメトリック多相（Parametric Polymorphism）のようにある意味より厳密な仕組みを持った言語もあります。言語ごとの仕様にはここでは踏み込みませんが、調べてみると面白いかもしれません。

# Category Theory and Functional Programming
# 圏論と関数型プログラミング

Now that we've explored the connection between category theory and programming more deeply, let's examine the relationship between functional programming and category theory.

圏論の概念とプログラミングの結びつきについて少し深掘りしたところで、次は関数型プログラミングと圏論の関係について考えてみましょう。

[Category Theory and Functional Programming 圏論と関数型プログラミング](/category-theory-and-code/category-theory-and-functional-programming)
