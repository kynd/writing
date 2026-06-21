---
title: "Visualizing Distances 距離を視覚化する"
slug: visualizing-distances
---
Let's visualize distances using GLSL. A black-and-white stripe pattern like a contour line is drawn based on the distance from the center of the screen. I will leave the technical details of GLSL to [the Book of Shaders](https://thebookofshaders.com/), but let’s pay attention only to the equation that defines the distance.

GLSLを使って距離を視覚化してみます。画面の中心からの距離を元に等高線のような白黒の縞模様を描きました。GLSLについての技術的な説明は [The Book of Shaders](https://thebookofshaders.com/?lan=jp) に譲るとして、ここでは距離を定義する式だけに注目しましょう。

In Euclidean space, points at the same distance from a given point form a circle. Remember that the formula for the Euclidean distance looked like this:

ユークリッド空間では、ある一点から等距離にある点を集めると円になります。ユークリッド距離の式を思い出しましょう。

${d={\sqrt {(x_{1}-x_{2})^{2}+(y_{1}-y_{2})^{2}}}}$

The above formula, written in GLSL, looks like this

上の公式をGLSLで書くとこのようになります。

```glsl
float distance = sqrt(pow(p0.x - p1.x, 2.0) + pow(p0.y - p1.y, 2.0));
```

[![](/images/visualizing-distances.png)](/images/visualizing-distances.png)

<div></div>

Drawing stripes using the Manhattan distance in the same way will result in squares rotated by 45 degrees. Let's review the Manhattan Distance formula to confirm that any point on a side on the same square is certainly equidistant from the center.

マンハッタン距離を用いて同じように縞模様を描くと45度回転した正方形になります。マンハッタン距離の式を見直して、同じ正方形上の辺上にあるどの点も確かに中心から等距離にあることを確認してみましょう。

```glsl
float distance = abs(p0.x - p1.x) + abs(p0.y - p1.y);
```

[![](/images/visualizing-distances-1.png)](/images/visualizing-distances-1.png)

<div></div>

Let's modify the formula for the Euclidean distance a bit: instead of squares, we'll use powers of 4, and instead of square root, we'll use 4th root (= powers of 1/4).

ユークリッド距離の式を少し書き換えてみましょう。2乗のかわりに4乗、平方根のかわりに4乗根（= 1/4乗）にしてみます。

${d={ ((x_{1}-x_{2})^{4}+(y_{1}-y_{2})^{4}})^{1/4}}$

Intriguingly, this ends up creating square-like shapes with rounded corners.

不思議なことに角が丸くなった正方形のような形ができます。

```glsl
float n = 4.0;
float distance = pow(pow(p0.x - p1.x, n) + pow(p0.y - p1.y, n), 1.0 / n);
```

[![](/images/visualizing-distances-2.png)](/images/visualizing-distances-2.png)

<div></div>

The example below illustrates the Chebyshev distance, where the distance is determined by the greater absolute value difference between the x-coordinates and the y-coordinates. The same applies to the multidimensional case, where the distance is the largest absolute value of the difference between each component of the coordinates.

下の例はチェビシェフ距離と呼ばれるもので、x座標の差とy座標の差の絶対値のうち大きい方を距離とします。多次元の場合も同様で座標の各成分ごとの差の絶対値のうち最大のものを距離とします。

```glsl
float distance = max(abs(p0.x - p1.x), abs(p0.y - p1.y));
```

[![](/images/visualizing-distances-3.png)](/images/visualizing-distances-3.png)


# Voronoi
# ボロノイ

In computer graphics, there is a technique called the Voronoi partition that divides a plane into regions closest to a given set of points. With this method too, different results can be obtained by swapping the distance functions.

CGでよく用いられる、ボロノイ分割という手法がありますが、これは、平面をある点の集合のそれぞれに近い領域に分割するものです。これも距離関数を入れ替えることで異なる結果が得られます。

Familiar looking Voronoi partition using Euclidean distance

ユークリッド距離を用いたお馴染みのボロノイ分割

[![](/images/visualizing-distances-4.png)](/images/visualizing-distances-4.png)

<div></div>

An example with Chebyshev distance instead of Euclidean distance

ユークリッド距離の替わりにチェビシェフ距離を用いた例

[![](/images/visualizing-distances-5.png)](/images/visualizing-distances-5.png)


<div class="instagram-wrap"><blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/B6wROGen8K2/" data-instgrm-version="14" style="width:100%;max-width:540px;margin:0;border:none;border-radius:4px;padding:0;"></blockquote></div>

[Signed distance functions 符号付き距離関数](/signed-distance-functions)
