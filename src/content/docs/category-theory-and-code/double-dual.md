---
title: "Double Dual 二重双対"
slug: double-dual
---
The concept of the double dual in vector spaces is an important example that catalyzed the birth of the term "natural transformation."

ベクトル空間における二重双対という概念は、自然変換という言葉が生まれるきっかけともなった重要な例です。

# What It Means for a Transformation to Be Natural
# 変換が自然であるとは

In mathematics and programming, countless operations transform one object into another. However, most are merely convenient conversions. Among them, transformations that don't depend on implementation details—such as a particular coordinate system—and arise inevitably from the structure itself are called "natural."

数学やプログラミングにおいて、ある対象を別の形に変換する操作は無数にあります。しかし、その多くは便宜上の変換に過ぎません。その中で、実装の詳細（例えば特定の座標系）に一切依存せず、構造そのものから必然的に導き出される変換を、「自然」（Natural）と呼びます。

A prime example is the map from a vector space $V$ to its double dual space $V^{\ast\ast}$.

その代表例が、ベクトル空間 $V$ からその二重双対空間 $V^{\ast\ast}$ への写像です。

# Three Layers
# 3つの階層

This discussion involves three layers:

-   $V$ (vector space): A collection of raw data. Example: points in 3D space $(x, y, z)$.

-   $V^*$ (dual space / space of measurement devices): A collection of linear functions $\phi$ that take a vector and return a numerical value. Examples:
    
    -   When light shines from above, reading only the $x$ component of the shadow cast on the ground ($xy$ plane): $\phi(v) = x$
    
    -   Multiplying three components by their respective unit prices and calculating the total: $\phi(x, y, z) = 100x + 50y + 10z$
    

-   $V^{\ast\ast}$ (double dual space / space of devices): A collection of meta-functions that take a measurement device $\phi$ and return a numerical value.

この話には3つの階層が登場します。

-   $V$（ベクトル空間）:
    
    生身のデータの集まり。例：3次元空間の点 $(x, y, z)$。
    

-   $V^*$（双対空間 / 測定器の空間）:
    
    ベクトルを受け取って数値を返す線形関数 $\phi$ の集まり。例：
    
    -   光が上から当たっているとき、地面（$xy$平面）に落ちた影の $x$ 成分だけを読み取る $\phi(v) = x$
    
    -   3つの成分の重さに、それぞれの単価を掛けて合計金額を出す $\phi(x, y, z) = 100x + 50y + 10z$
    

-   $V^{\ast\ast}$（二重双対空間 / 装置の空間）
    
    測定器 $\phi$を受け取って数値を返すメタ関数の集まり。
    

In category theory, within the category of vector spaces $\mathbf{Vect}$:

-   **Object** $V$: The world where raw data (vectors $v$) lives.

-   **Dual functor** $(-)^*: \mathbf{Vect} \to \mathbf{Vect}^{op}$: Maps an object $V$ to the set of morphisms from $V$ to scalar values ($V^*$).

-   **Morphism** $\phi \in V^*$: In category theory, this is the **morphism** $V \to \mathbb{R}$ itself.

-   **Double dual functor** $(-)^{\ast\ast}: \mathbf{Vect} \to \mathbf{Vect}^{\ast\ast}$: Maps object $V$ to $V^{\ast\ast}$ and morphism $f$ to $f^{\ast\ast}$.

圏論の言葉で書くならベクトル空間の圏 $\mathbf{Vect}$ において、  

-   **対象** $V$: 生身のデータ（ベクトル $v$）が住む世界

-   **双対関手** $(-)^*: \mathbf{Vect} \to \mathbf{Vect}^{op}$:  
    対象 $V$ を「$V$ からのスカラー値への射の集合（$V^*$）」へ移す操作。

-   **射** $\phi \in V^*$: 圏論では $V \to \mathbb{R}$ という**射**そのもの。

-   **二重双対関手**$(-)^{\ast\ast}: \mathbf{Vect} \to \mathbf{Vect}^{\ast\ast}$</span> : 対象 $V$ を $V^{\ast\ast}$ へ、射 $f$ を $f^{\ast\ast}$ へ移す。

# Unnatural Dual $V^*$
# 不自然な双対 $V^*$

For a vector space $V$ (a collection of data), its dual space $V^*$ is the collection of linear functions (measurement devices) that take a vector and return a numerical value.

$V$ (data): Points in 3D space $(x, y, z)$

$V^*$ (dual / measurement devices): "Calculation rules" such as measuring shadow length or computing total cost

ベクトル空間 $V$（データの集まり）に対して、その双対空間 $V^*$ とは、ベクトルを受け取って数値を返す線形関数（測定器）の集まりです。

$V$（データ）: 3次元空間の点 $(x, y, z)$

$V^*$（双対 / 測定器）: 影の長さを測る、合計金額を出すといった「計算ルール」

A vector space $V$ and its dual $V^*$ are structurally equivalent (isomorphic) when they have the same dimension. Any linear function $\phi$ that takes a vector $v = (x, y, z)$ in 3D space and returns a numerical value must take the following form:

ベクトル空間 $V$ とその双対 $V^*$ は、同じ次元であれば構造的に等しい（同型）です。3次元空間のベクトル $v = (x, y, z)$ を受け取って数値を返す線形関数 $\phi$ は、必ず次の形になります。

$\phi(x, y, z) = ax + by + cz$

To specify this "measurement rule," we need three parameters (coefficients): $a, b, c$. In other words, the "variations of linear functions" themselves form a 3D space ($V^*$), representable by coordinates $(a, b, c)$.

この「測定ルール」を特定するには、$a, b, c$ という3つのパラメータ（係数）を決める必要があります。つまり、「線形関数のバリエーション」そのものが、$(a, b, c)$ という座標で表せる3次元の空間（$V^*$）を作っているのです。

## Why the Dual Is Unnatural
## なぜ双対は不自然なのか

$V$ (data) and $V^*$ (measurement devices) are both 3D, but there's no natural rule for transforming between them that everyone can agree on.

$V$（データ）も3次元、$V^*$（測定器）も3次元ですが、その間の変換には誰にでも納得がいくような自然なルールが存在しません。

For example, what if we directly map the point $v = (1, 2, 3)$ to the function $\phi = (1, 2, 3)$ ($\phi(v) = 1x + 2y + 3z$)? As you can see from the components and unit prices example, this is completely meaningless.

例えば、$v = (1, 2, 3)$ という点を、$\phi = (1, 2, 3)$ という関数（$\phi(v) = 1x + 2y + 3z$）にそのまま対応させたらどうでしょう。これは成分と単価の例を考えてもわかるように全く無意味です。

In the shadow example, the basis in space is inherently arbitrary. We can choose completely different bases for the same space—such as Earth-based vs Sun-based coordinates, world coordinates vs camera coordinates, or centimeter units vs inch units. The shadow length is represented by different parameters of $\phi$ depending on the chosen basis (This argument applies even when not dealing with physical space).

また、影の例について考えると、空間における基底はそもそも恣意的なものです。同じ空間に対して全く異なる基底（例えば地球基準に対して太陽基準、ワールド座標に対してカメラ座標、センチメートル単位に対してインチ単位など）を取ることができ、影の長さは基底によって異なる $\phi$ のパラメータで表されます（この議論は物理的な空間でなくても同様に当てはまります）。

# The Natural Double Dual $V^{\ast\ast}$
# 自然な二重双対 $V^{\ast\ast}$

In the double dual, we add one more layer: we treat a vector $v$ as a device that takes a function $\phi$ and executes it by substituting $v$ into it.

二重双対では更に1つレイヤーを加えて、ベクトル $v$ を、受け取った関数 $\phi$ に自分 $v$ を代入して実行する装置とみなします。

Start with a specific vector $v = (3, 4, 5)$. No matter what computational rule $\phi$ (measurement device) is presented, you can substitute your value into $\phi$ and return the result.

-   If a total-cost-computing $\phi_2$ comes, compute and return $\phi_2(3, 4, 5)$.

-   If a shadow-measuring $\phi_1$ comes, compute and return $\phi_1(3, 4, 5)$.

  
特定のベクトル $v = (3, 4, 5)$ をスタート地点にします。目の前に、どんな計算ルール $\phi$（測定器）が差し出されても、あなたはその $\phi$ に自分の値を代入して結果を答えることができます。

  
• 影を測る $\phi_1$ が来れば $\phi_1(3, 4, 5)$ を計算して答える。  
• 合計金額を出す $\phi_2$ が来れば $\phi_2(3, 4, 5)$ を計算して答える。

This concept—executing $\phi$ on $v$—becomes an object in $V^{\ast\ast}$. The transformation from vector to device can be written as:

この $v$ に対して $\phi$ を実行するという概念そのものが、$V^{\ast\ast}$ における対象になります。ベクトルから装置への変換を式で書くと以下のようになります。

$v \mapsto \text{ev}_v \quad (\text{where } \text{ev}_v(\phi) = \phi(v))$

$v \mapsto \text{ev}_v \quad (\text{where } \text{ev}_v(\phi) = \phi(v))$

This correspondence $\alpha_V: V \to V^{\ast\ast}$ is a mapping built into the structure itself, unchanged no matter what coordinate system you choose.

この対応 $\alpha_V: V \to V^{\ast\ast}$ は、座標系をどう選ぼうが、構造そのものに組み込まれたマッピングです。

Let's write it in code as well.

コードでも書いてみましょう。  

```tsx
/**
 * Dual Space (V*): 
 * The function is the "Active" part. It consumes the data.
 */
// phi: V -> R
const shadowX = (v: Vector3): number => v.x;

const result = shadowX(v); // phi(v)

/**
 * Double Dual Space (V**): 
 * The data is wrapped into a "Device". 
 * It now consumes the function.
 */

// alpha: V -> V**
// This function transforms a raw vector into a "Double Dual" device.
const toDevice = (v: Vector3) => {
    // This returned function is the element of V**
    return <R>(phi: (data: Vector3) => R): R => {
        return phi(v);
    };
};

const ev_v = toDevice(v); // ev_v is an element of V**
const result = ev_v(shadowX); // The device "runs" the measurement.
```

> 
> 
> コードの例からこれはカリー化だと気づいた方もいるでしょう。二重双対の装置（評価写像）は、「適用」という演算をカリー化したものと言い換えることができます。

### Conditions in Category Theory
### 圏論における条件

This mapping $\alpha$ satisfies the naturality condition (commutativity) in category theory.

-   **Route 1**: Transform vector $v$ by linear transformation $f$, then move it into $V^{\ast\ast}$.

-   **Route 2**: Move vector $v$ into $V^{\ast\ast}$ first, then transform it there (by $f^{\ast\ast}$).

このマッピング $\alpha$ は圏論に於ける自然性の条件（可換性）を満たすことができます。

-   **Route 1**: ベクトル $v$ を線形変換 $f$ で加工してから、$V^{\ast\ast}$ の世界へ移す。

-   **Route 2**: ベクトル $v$ を先に $V^{\ast\ast}$ の世界へ移してから、その世界で加工（$f^{\ast\ast}$）する。

That these two routes coincide for all $f$ proves this transformation preserves only structure—the relationship of substitution—independent of specific numerical values.

この2つが全ての $f$ に対して一致することは、この変換が中身の具体的な数値によらず、構造（代入という関係性）だけを保存していることを証明しています。

[Generics and Category Theory ジェネリクスと圏論](/generics-and-category-theory)
