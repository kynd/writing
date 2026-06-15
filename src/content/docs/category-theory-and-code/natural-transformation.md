---
title: "Natural Transformation 自然変換"
slug: natural-transformation
---
So far, we've called collections of objects categories, arrows between objects morphisms, and mappings from one category to another functors. Now we can consider a category where functors themselves are objects. This is called a functor category, denoted as $[\mathcal{C}, \mathcal{D}]$.

-   **Objects**: Functors $F, G, \dots$

-   **Morphisms**: Natural transformations $\alpha, \beta, \dots$

これまで、対象の集まりを圏と呼び、対象の間の矢印を射と呼び、圏から圏へのマッピングを関手と呼びました。ここで、関手そのものを対象とみなす圏を考えることができます。これを関手圏 (Functor Category) と呼び、$[\mathcal{C}, \mathcal{D}]$ と表記します。

-   **対象**: 関手 $F, G, \dots$

-   **射**: 自然変換 $\alpha, \beta, \dots$

In other words, a **natural transformation** is a morphism that transforms one mapping rule—a functor—into another.

つまり、自然変換とは関手という写像ルールそのものを、別のルールへ変形させるための射なのです。

# Definition of Natural Transformation
# 自然変換の定義

Given two functors $F: \mathcal{C} \to \mathcal{D}$ and $G: \mathcal{C} \to \mathcal{D}$, we assign to each object $A$ in category $\mathcal{C}$ a morphism $\alpha_A: F(A) \to G(A)$ in category $\mathcal{D}$.

2つの関手 $F: \mathcal{C} \to \mathcal{D}$ と $G: \mathcal{C} \to \mathcal{D}$ があるとき、圏 $\mathcal{C}$ の各対象 $A$ に対して、圏 $\mathcal{D}$ の射 $\alpha_A: F(A) \to G(A)$ を割り当てます。

$\alpha: F \to G$ is natural if, for any morphism $f: A \to B$ in category $\mathcal{C}$, the following equation holds:

$\alpha: F \to G$ が自然であるとは、圏 $\mathcal{C}$ における任意の射 $f: A \to B$ に対して、以下の等式が成り立つことを指します。

$G(f) \circ \alpha_A = \alpha_B \circ F(f)$

$$
\begin{CD}
F(A) @>\alpha_A>> G(A) \\
@VF(f)VV @VVG(f)V \\
F(B) @>>\alpha_B> G(B)
\end{CD}
$$

This means there are two routes—one from $F(f)$ to $\alpha_B$, and another from $\alpha_A$ to $G(f)$. Processing the contents first, then moving to a different world, yields the same result as moving to a different world first, then processing the contents.

$F(f)$から$\alpha_B$というルートと、$\alpha_A$から$G(f)$というルート、つまり中身を加工してから世界を移動するのと世界を移動してから中身を加工した結果が一致するというイメージです。

# Examples of Natural Transformations in Code
# コードにおける自然変換の例

This is too abstract, so let's look at a concrete code example. Consider the `toStr` function, which converts `number` to `string`. We can use functors to lift this function into the Option world and the Array world. The natural transformation is what connects these two worlds.

これではあまりに抽象的なので具体的なコードで例を見てみましょう。`number` を `string` に変換する `toStr` 関数をOptionとArrayの世界に連れて行く関手がそれぞれある場合に、OptionとArrayの世界を繋ぐのが自然変換になります。

<table class="matrix-table"><tbody><tr><td>Symbol記号</td><td>Meaning in Category Theory</td><td>圏論での意味</td><td>Concrete Code / Type Example具体的なコード / 型の例</td></tr><tr><td>𝒞</td><td>Domain (source category)</td><td>ドメイン（元の圏）</td><td>TypeScript's type world TypeScriptの型の世界(number,string, etc.)</td></tr><tr><td>𝒟</td><td>Codomain (target category)</td><td>コドメイン（先の圏）</td><td>TypeScript's type world (※same as 𝒞 in this case)TypeScriptの型の世界（※今回は 𝒞 と同じ）</td></tr><tr><td>A</td><td>Object 1</td><td>対象1</td><td>numbertype</td></tr><tr><td>B</td><td>Object 2</td><td>対象2</td><td>stringtype</td></tr><tr><td>f</td><td>Raw morphism (function)</td><td>生身の射（関数）</td><td>toStr: (n: number) =>`Result: ${n}`</td></tr><tr><td>F</td><td>Functor 1</td><td>関手1</td><td>Option</td></tr><tr><td>G</td><td>Functor 2</td><td>関手2</td><td>Array</td></tr><tr><td>F(A)</td><td>Object mapped byF</td><td>F によって移された対象</td><td>Option<number></td></tr><tr><td>F(B)</td><td>Object mapped byF</td><td>F によって移された対象</td><td>Option<string></td></tr><tr><td>G(A)</td><td>Object mapped byG</td><td>G によって移された対象</td><td>Array<number></td></tr><tr><td>G(B)</td><td>Object mapped byG</td><td>G によって移された対象</td><td>Array<string></td></tr><tr><td>F(f)</td><td>Lifted morphism</td><td>持ち上げられた射</td><td>Option.map(toStr)</td></tr><tr><td>G(f)</td><td>Lifted morphism</td><td>持ち上げられた射</td><td>Array.map(toStr)</td></tr><tr><td>α<sub>A</sub></td><td>Component of natural transformation atA</td><td>A における自然変換の成分</td><td>optionToArray<number></td></tr><tr><td>α<sub>B</sub></td><td>Component of natural transformation atB</td><td>B における自然変換の成分</td><td>optionToArray<string></td></tr></tbody></table>

$$
\begin{CD}
\text{Option<number>} @>{OptionToArray<number>}>> \text{Array<number>} \\
@VOption.map(toStr)VV @VVArray.map(toStr)V \\
\text{Option<string>} @>>{OptionToArray<string>}> \text{Array<string>}
\end{CD}
$$

```tsx
// --- 1. Functions & Data ---

/** f: A -> B (The raw morphism) */
const toStr = (n: number): string => `Result: ${n}`;

/** Data in Category F (Option world) */
const optData: Option<number> = some(10);

// --- 2. The Natural Transformation (The Bridge) ---

/** * α: F -> G (Natural Transformation)
 * This maps the Option world to the Array world.
 */
const optionToArray = <T>(opt: Option<T>): Array<T> => {
  return opt.tag === "some" ? [opt.value] : [];
};

// --- 3. Verification of Naturality (The Two Routes) ---

// Route 1: alpha_B ∘ F(f)
// Apply map in Option world, then transform to Array.
const res1 = optionToArray(optData.map(toStr));

// Route 2: G(f) ∘ alpha_A
// Transform to Array world first, then apply map in Array world.
const res2 = optionToArray(optData).map(toStr);

// --- 4. Conclusion ---

// Because optionToArray is a "Natural Transformation," 
// both routes are guaranteed to yield the same result.
console.log(res1); // ["Result: 10"]
console.log(res2); // ["Result: 10"]
console.log(JSON.stringify(res1) === JSON.stringify(res2)); // true
```

Like functors, a natural transformation $\alpha$ is not a single function but a family of morphisms—one morphism $\alpha_A$ for each object $A$. Defining `optionToArray<T>` as a generic (polymorphic function) matches the mathematical definition: a component $\alpha_A$ exists for every $A$.

関手の時と同様、自然変換 $\alpha$ は、それ自体が一本の関数ではなく、対象 $A$ ごとに用意された射 $\alpha_A$ の家族（Family of morphisms）です。 `optionToArray<T>` がジェネリクス（多相関数）として定義されるのは、数学における任意の $A$ に対して成分 $\alpha_A$ が決まるという定義と一致します。

# Other Examples of Natural Transformations
# その他の自然変換の例

Let's look at other examples of natural transformations.

他の自然変換の例も見てみましょう。

## Math Examples
## 数学の例

### Determinant
### 行列式 (Determinant)

Transforms a square matrix into a scalar value (a number). Scaling each element of the matrix (a morphism) and then computing the determinant yields the same result as computing the determinant first and then scaling that value (the morphism in the target).

正方行列を、そのスカラー値（数値）に変換する。行列の各要素を定数倍（射）してから行列式を求めるのと、行列式を求めてからその値を定数倍（射の移動先）するのが整合する。

### Double Dual
### 二重双対(Double Dual)

A mapping from a vector space $V$ to its double dual space $V^{**}$. This mapping is "naturally" determined without choosing a basis, making it one of the most important natural transformations in mathematical history. It will be explained in detail on the next page.

ベクトル空間 $V$ から、その二重対偶空間 $V^{**}$ への写像。基底を選ばずに「自然に」決まる写像として、数学史上もっとも重要な自然変換の1つ。次のページで詳しく説明します

## Programming
## プログラミング

### Repacking from One Data Container to Another
### データコンテナから別のコンテナへの詰め替え

`headOption` (Array $\to$ Option)  
Extracts the first element of an array, returning Some if it exists or None otherwise. Whether you double each element and then take the first, or take the first and then double it, the result is the same.  
`toList` (Set $\to$ List)  
Converts a set with no duplicates into an ordered list.  
`flatten` (or `join` $T^2 \to T$)  
Collapses a double container `Option<Option<T>>` into a single `Option<T>`.

`headOption` (Array $\to$ Option)  

配列の先頭要素を取り出し、あれば Some、なければ None を返す。配列の各要素を 2 倍にしてから先頭を取るのも、先頭を取ってから 2 倍にするのも、結果は同じ。  

`toList` (Set $\to$ List):  

重複のない集合を、順序のあるリストに変換する。  
`flatten` (または `join` $T^2 \to T$)二重の箱 `Option<Option<T>>` を 一重の `Option<T>` に潰す。

### Async & Stream Library Integration
### 非同期・ストリームライブラリの統合

Adapters that connect different asynchronous paradigms are mathematically natural transformations.

異なる非同期パラダイムを繋ぐアダプターは、数学的には自然変換  

  
`fromPromise` (Promise $\to$ Observable)  
Sends a one-time asynchronous result (Promise) into the world of streams (Observable). While a Promise represents a single asynchronous execution, an Observable is a mechanism where data can flow repeatedly by subscribing to it.

`fromPromise` (Promise $\to$ Observable)  

単発の非同期結果（Promise）を、ストリーム（Observable）の世界へ送り込む。Promise は単発の非同期実行であるのに対し、Observable は接続（Subscribe）することでデータが何度でも流れてくる仕組み。

### System Communication and Serialization
### システム通信とシリアライズ

Processing data (via `map`) in Service A before sending it (natural transformation), or sending it first then processing it (via `map`) in Service B—both approaches are equivalent. This equivalence guarantees the correctness of distributed systems by ensuring that communication does not alter the meaning of business logic.

サービス A でデータを加工（`map`）してから送信（自然変換）するのと、送信してからサービス B で加工（`map`）するのが等価であることは、通信によってビジネスロジックの意味が変わらないという分散システムの正当性を保証します。

The benefit common to all these examples is the freedom to optimize when operations occur.

これらの例すべてに共通するメリットは、処理のタイミングを自由に最適化できる点にあります。

-   If an array contains a million elements, applying `headOption` first is overwhelmingly faster.

-   If a `Promise` is expensive, you might convert it to an `Observable` first and use streaming features for asynchronous processing.

-   配列が100万件あるなら、`headOption` してから加工したほうが圧倒的に速い。

-   `Promise` が重いなら、`Observable` に変換してからストリームの機能を使って非同期に加工したいかもしれない。

Because there is a mathematical guarantee that either path yields the same result, advanced refactoring becomes possible—you can rewrite implementations for performance or readability while maintaining correctness. In other words, natural transformation is the mathematical concept for reasoning about such correctness.

どちらを通っても同じという数学的保証があるからこそ、正しさを維持したまま、パフォーマンスや読みやすさのために実装を書き換えるという、高度なリファクタリングが可能になります。逆に言えばそのような正しさについて語るための数学的概念が自然変換だと言えるでしょう。

# Double Dual
# 二重双対

On the next page, we'll examine the double dual as a representative example of natural transformations in mathematics.

次のページでは数学的の世界での自然変換の代表例として、二重双対について見てみましょう。

[Double Dual 二重双対](/double-dual)
