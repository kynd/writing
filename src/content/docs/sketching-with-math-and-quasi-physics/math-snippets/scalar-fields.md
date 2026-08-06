---
title: "Scalar Fields スカラーフィールド"
slug: scalar-fields
---
<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="bNgYJrz" data-user="kynd" data-preview="true"></p></div>

In [Bowls and Pringles](/bowls-and-pringles), we looked at how functions like $z = x^2 + y^2$ can define a shape. That approach treats $z$ as a height computed directly from $x$ and $y$.

[Bowls and Pringles お椀とプリングルス](/bowls-and-pringles)では、$z = x^2 + y^2$ のような関数がどのように形状を定義できるかを見ました。このアプローチでは、$z$ を $x$ と $y$ から直接計算される高さとして扱います。

On this page, we'll generalize that idea to functions of the form $f(x, y, z) = 0$.

このページでは、その考え方を $f(x, y, z) = 0$ という形の関数に一般化します。

> $z = x^2 + y^2$ can be rewritten by moving $z$ to the right-hand side: $0 = x^2 + y^2 - z$

The function $f(x, y, z)$ returns a single value (a scalar) at every point in space. This is called a *scalar field*. The function can be anything—even something that returns random numbers—but many functions that can be written as relatively simple polynomials return continuous values. In those cases, we can find the set of points where the function is exactly zero, which forms continuous surfaces. This is called an **implicit surface** or a **level set**.

関数 $f(x, y, z)$ は、空間上の任意の点で1つの値（スカラー）を返します。これを**スカラー場**と呼びます。関数は何でもよく、ランダムな値を返すものもあり得ますが、比較的シンプルな多項式で表せる関数の多くは連続した値を返します。その場合、関数がちょうどゼロになる点の集合を求めることができ、それが連続した曲面を形成します。これを**陰関数曲面**や**等位集合**と呼びます。

# Ray marching Implicit Surfaces
# 陰関数曲面のレイマーチング

We can use [ray marching](/ray-marching) to render these shapes. But unlike [Signed Distance Fields](/signed-distance-functions), where the shader knows exactly how far the nearest surface is, general equations like $f(x,y,z) = 0$ don't provide a distance.

これらの形状をレンダリングするには[レイマーチング](/ray-marching)を使います。ただし、シェーダーが最近接曲面までの距離を正確に知っている[符号付き距離関数](/signed-distance-functions)（SDF）とは異なり、$f(x,y,z) = 0$ のような一般的な方程式は距離を返してくれません。

> [Signed distance functions](/signed-distance-functions) are a special kind of scalar field: they not only define an implicit surface, but their value also matches the Euclidean distance and direction measured from that surface.
>
> [符号付き距離関数](/signed-distance-functions)（Signed distance function）はスカラー場の特殊な形です。陰関数曲面を定義するだけでなく、その値が曲面からのユークリッド距離と向きに一致するという特性を持ちます。

To render these without a distance guide, we use **fixed-step ray marching with bisection**.

1. The camera shoots a ray through each pixel and advances it by a constant step size (`dt`).
2. At each step, it checks whether the function's sign has flipped since the previous position (e.g., from positive to negative). A flip means the ray crossed the surface boundary ($f = 0$).
3. Because fixed steps are too coarse, the shader refines the crossing interval by repeatedly splitting it in half (binary search) to locate the boundary with sub-pixel precision.
4. Once the intersection is pinned down, we use [numerical differentiation](/differentiation) to compute the surface normal by sampling nearby offset points for [lighting](/illuminating-objects).

距離の手がかりなしにレンダリングするため、**固定ステップのレイマーチングと二分法**を組み合わせて使います。

1. カメラは各ピクセルを通るレイを飛ばし、一定のステップ幅（`dt`）で前進します。
2. 各ステップで、前の位置から関数の符号が反転したかどうかを確認します（例：正から負へ）。反転していれば、レイが曲面（$f = 0$）を横切ったことを意味します。
3. 固定ステップは粗すぎるため、シェーダーはその区間を繰り返し半分に分割し（バイナリサーチ）、サブピクセル精度で境界を特定します。
4. 交点が確定したら近くの点をサンプリングし、[数値微分](/differentiation)によって[ライティング](/illuminating-objects)のための法線を計算します。

The demo below shows this process in 2D using the hyperbola $f(x,y) = y^2 - x^2 - 1$. You can think of this as a slice of the 3D version viewed from the side. Hit play or step to move the ray along its path.

下のデモでは、双曲線 $f(x,y) = y^2 - x^2 - 1$ を使ってこのプロセスを2Dで示しています。3Dバージョンを横から見た断面と考えてください。play または step をクリックしてレイを進めてみましょう。

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="rajYRmP" data-user="kynd" data-preview="true"></p></div>

This technique was used in the music video below. More details on the process can be read at [kynd.info/geom](https://www.kynd.info/geom/).

この手法は以下のミュージックビデオで使われています。制作プロセスの詳細は [kynd.info/geom](https://www.kynd.info/geom/) でご覧いただけます。

<div class="video-embed"><iframe src="https://player.vimeo.com/video/1215067660" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>
