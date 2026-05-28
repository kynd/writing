---
title: "Category Theory and Functional Programming 圏論と関数型プログラミング"
---
You may have noticed that most of the code examples so far are examples of functional programming (FP). In fact, functional programming has evolved in close connection with category theory (or so I've read).

ここまで読んできて、登場するコードの例の殆どが関数型プログラミング（FP: Functional Programing）の例になっていることに気づいたかもしれません。実際、関数型プログラミングは圏論と密接に関連しながら発展してきました（してきたそうです）。

# What is Functional Programming?
# 関数型プログラミングとは

Functional programming is a programming practice that treats computation as the evaluation of mathematical functions. It emphasizes avoiding state changes and data mutation.

関数型プログラミング（Functional Programming）を大雑把に定義すると、計算を数学的な関数の評価として捉え、状態の変化やデータの書き換えを避けることを重視するプログラミングの作法です。

While object-oriented programming centers on objects and their behavior, functional programming focuses on the flow of data from input to output.　The main concepts include:

オブジェクト指向プログラミングが物（オブジェクト）とその振る舞いを中心に考えるのに対し、関数型プログラミングは入力から出力へのデータの流れ（宣言）に焦点を当てます。主な概念としては下記のようなものがあります。

## Referential Transparency
## 参照透過性

A function with referential transparency always returns the same output for the same input. If it stores state internally or depends on external state, the result can vary even with identical calls. A referentially transparent function can be replaced with its resulting value without changing the program's meaning.

参照透過性を持つ関数は同じ入力に対しては常に同じ出力を返します。中に状態を保存したり、外部の状態との依存関係があると、同じ呼び出しでも結果が変わってしまいます。参照透過性がある関数はその呼び出しをその結果の値に置き換えても、プログラムの意味が変わりません。

## Elimination of Side Effects
## 副作用の排除

Side effects include modifying variables outside the function, outputting logs to the screen, or updating a database. Functional programming strictly separates and manages these operations.

副作用とは、関数の外部にある変数を書き換えたり、画面にログを出力したり、データベースを更新したりすることを指します。関数型ではこれらを厳格に分離・管理します。

## Pure Functions
## 純粋関数

A pure function behaves like a mathematical function. It has referential transparency and no side effects. Below are examples of pure and impure functions.

純粋関数（Pure Function）とは、プログラミングにおける関数が数学的な意味での関数と同じ振る舞いをすることを意味します。参照透過性があり副作用のない関数が純粋関数です。下は純粋関数と純粋でない関数の例です。

```jsx
// Pure Function
// The result depends only on arguments 'a' and 'b', 
// and it does not modify anything in the outside world.
const add = (a, b) => a + b;
```

```jsx
// Impure Functions
// Case 1: Depends on an external variable (Non-deterministic)
let tax = 0.1;
const calculateTotal = (price) => price * (1 + tax); 
// If 'tax' changes, the result of calculateTotal(price) changes even with the same input.

// Case 2: Has side effects
const saveUser = (user) => {
  // Modifies the state of an external database
  database.save(user); 
  return user;
};
```

## Immutability
## 不変性

Once data is created, it is never modified. To change a value, you create new data instead of rewriting the original. This relates directly to referential transparency and the elimination of side effects, preventing the behavior of code that references the data from changing unexpectedly.

一度作成したデータは変更しません。値を変えたい場合は、元のデータを書き換えずに新しいデータを作成します。これは参照透過性や副作用の排除と密接に関係しており、データを参照するコードの挙動が予期せず変わる事態を防ぎます。

## Functions as First-Class Objects
## 第一級オブジェクトとしての関数

Functions can be treated like numbers and strings. You can assign them to variables, pass them as arguments, or return them as values. This enables powerful techniques like "higher-order functions" that flexibly combine operations.

関数を数値や文字列と同じように扱えます。変数への代入、引数としての受け渡し、戻り値としての返却といった操作が可能です。これにより、処理を柔軟に組み合わせる「高階関数」などの強力な手法が使えるようになります。

> 
> 
> Functional languages (language specifications) and functional programming (methodology) are different things.
> 
> 関数型言語（言語仕様）と関数型プログラミング（手法）は別物です。
> 
> Functional languages like Haskell enforce immutability and side effect management at the language level. However, functional programming practices can be applied—to varying degrees—in other languages like JavaScript and Python.
> 
> Haskellなどの関数型言語は、不変性や副作用の管理を言語レベルで強制しますが、関数型プログラミングの作法は、JavaScriptやPythonといった他の言語でも程度の違いはあれ実践可能です。
> 
> For example, JavaScript treats functions as first-class objects, making it easy to pass them around. But it lacks mechanisms to guarantee referential transparency, so programmers must follow conventions as a best-effort approach.
> 
> 例えばJavaScriptは関数が第一級オブジェクトなので関数の受け渡しは容易にできますが、参照透過性を保証する仕組みはないため、プログラマが規約を守って書くベストエフォートの運用となります。

# The Influence of Category Theory on Functional Programming
# 圏論と関数型の影響

Category theory and functional programming originated independently.

圏論と関数型プログラミングは元々は異なる起源をもって生まれました。

Eilenberg and Mac Lane developed category theory to rigorously describe structural similarities across different areas of mathematics, particularly algebra and topology.

圏論はアイレンベルグとマックレーンによって、数学の異なる分野（特に代数学と位相幾何学）の間に横たわる構造的な類似性を厳密に記述することを目的に考え出されました。

Functional programming traces back to Alonzo Church's lambda calculus—a mathematical model that expresses computation purely through defining and applying functions of the form "takes <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi></mrow><annotation encoding="application/x-tex">x</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span></span></span></span> as an argument and returns <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>M</mi></mrow><annotation encoding="application/x-tex">M</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">M</span></span></span></span>".

関数型プログラミングの元はアロンゾ・チャーチによるラムダ計算（Lambda Calculus）で、一言で言えば、「計算」という概念を、「<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi></mrow><annotation encoding="application/x-tex">x</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span></span></span></span> を引数に取り、<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>M</mi></mrow><annotation encoding="application/x-tex">M</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">M</span></span></span></span> を返す」という形の関数の定義と適用だけで表現した数学的モデルです。

Later mathematical discoveries revealed that category theory is remarkably effective for studying and proving programming structures. The prime example is generics, which we discussed on the previous page.

ところが後の数学的発見により、圏論がプログラミングの構造を数学的に研究したり証明するのに非常に有効なことが分かります。前のページで触れたジェネリクスがその代表的な例です。

Generics began as practical wisdom for writing type-independent algorithms. In the late 1980s, Philip Wadler and others published "Theorems for free!", proving that functions written with generics `<T>` are mathematically guaranteed to transform only structure without modifying content—in other words, they are natural transformations. This proof is evident just from examining the type signature. This sparked a movement where category theory embraced programming as both a research subject and application domain, enabling mathematical description and proof of program structure and safety.

もともと型に依存しない共通のアルゴリズムを書くための現場の知恵として誕生したジェネリクスですが、80年代後半にフィリップ・ワドラーらが発表した「Theorems for free!（タダで手に入る定理）」という研究によって「ジェネリクス `<T>` で書かれた関数は、その型シグネチャを見ただけで、中身を加工せず構造のみを変換していることが数学的に保証される（＝自然変換である）」という事実が証明されました。これによってプログラムの構造や安全性などを数学的に記述し、証明する、圏論がプログラミングを研究の題材や適用範囲として取り入れるという流れが生まれます。

Category theory's greatest influence on functional programming was defining strict rules (interfaces) for assembling programs using mathematical language.

圏論が関数型プログラミングに与えた最大の影響は、プログラムを組み立てるための厳密なルール（インターフェース）を数学の言葉で定義したことにあります。

This enabled handling side effects and complex data transformations—inherently difficult problems—under unified rules. Let's examine how category theory concepts correspond to FP concepts.

これにより、本来は扱いにくい副作用や複雑なデータ構造の変換を、統一的なルールで扱えるようになりました。圏論の概念とFPの概念がどのように対応しているのか、概略をみてみましょう。

<table class="matrix-table"><tbody><tr><td>Category Theory Concept圏論の概念</td><td>Corresponding Concept (FP)プログラミング（FP）での対応</td><td>Concrete Image具体的なイメージ</td></tr><tr><td>Object対象</td><td>Data Type型</td><td>Int, String, User etc.Int、String、User などのデータ型</td></tr><tr><td>Morphism射</td><td>Function関数</td><td>A pure function that transforms one type into anotherある型を別の型へ変換する純粋関数</td></tr><tr><td>Composition合成</td><td>Function Composition関数の合成</td><td>The operation of connecting $f$ and $g$ to create a new function$f$ と $g$ をつなげて新しい関数を作る操作</td></tr><tr><td>Functor関手</td><td>Structure with mapmap が定義可能な構造</td><td>Containers whose contents can be transformed (Arrays, Option)配列や Option 型など、中身を変換できる容器</td></tr><tr><td>Natural Transformation自然変換</td><td>Generic Functionsジェネリクス関数</td><td>Transformations that change only "structure" (e.g., reversing a list)リストを逆順にするなど、中身をいじらず「構造」だけを変える変換</td></tr><tr><td>Monadモナド</td><td>Framework for Side Effects副作用を扱う枠組み</td><td>Computations with "context" (Failure, State changes, etc.)失敗する可能性や状態変化という「文脈」を伴う計算</td></tr></tbody></table>

## Monads
## モナド

The most famous influence of category theory on functional programming is the monad.

圏論から関数型プログラミングへの影響として、最も有名なのがモナドです。

Functional programming avoids "side effects" like errors, logs, and state changes. Yet most meaningful programs require them.

本来、関数型プログラミングは「副作用（エラー、ログ、状態など）」を嫌いますが、現実に意味のあるプログラムのほとんどにはこれらが必要です。

By introducing monads from category theory, functional programming found a way to handle impure operations—computations that might fail, input/output—without breaking the pure functional world. In other words, monads preserve referential transparency. They are the crown jewel of category theory's influence on programming, but also its most notoriously difficult concept.

関数型プログラミングはモナドという圏論の概念を導入したことで、「エラーが起こるかもしれない計算」や「入出力（I/O）」といった不純なものを、純粋な関数の世界の秩序を壊さずに（＝参照透過性を保ったまま）組み上げることが可能になりました。この意味でモナドは圏論とコードというテーマの華なのですが、同時に関数型プログラミングの中でも最も難解で意味が分からないと言われる概念でもあります。

The next page tackles this concept to conclude the series.

次のページではこの概念に挑戦して、シリーズを締めくくります。

[Monads モナド](/category-theory-and-code/monads)
