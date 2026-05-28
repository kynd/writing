---
title: "Visualizing Distances 距離を視覚化する"
---
Let's visualize distances using GLSL. A black-and-white stripe pattern like a contour line is drawn based on the distance from the center of the screen. I will leave the technical details of GLSL to [the Book of Shaders](https://thebookofshaders.com/), but let’s pay attention only to the equation that defines the distance.

GLSLを使って距離を視覚化してみます。画面の中心からの距離を元に等高線のような白黒の縞模様を描きました。GLSLについての技術的な説明は [The Book of Shaders](https://thebookofshaders.com/?lan=jp) に譲るとして、ここでは距離を定義する式だけに注目しましょう。

In Euclidean space, points at the same distance from a given point form a circle. Remember that the formula for the Euclidean distance looked like this:

ユークリッド空間では、ある一点から等距離にある点を集めると円になります。ユークリッド距離の式を思い出しましょう。

<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>d</mi><mo>=</mo><msqrt><mrow><mo stretchy="false">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo>+</mo><mo stretchy="false">(</mo><msub><mi>y</mi><mn>1</mn></msub><mo>−</mo><msub><mi>y</mi><mn>2</mn></msub><msup><mo stretchy="false">)</mo><mn>2</mn></msup></mrow></msqrt></mrow><annotation encoding="application/x-tex">{d={\sqrt {(x_{1}-x_{2})^{2}+(y_{1}-y_{2})^{2}}}}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.24em;vertical-align:-0.305em;"></span><span class="mord"><span class="mord mathnormal">d</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord"><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.935em;"><span class="svg-align" style="top:-3.2em;"><span class="pstrut" style="height:3.2em;"></span><span class="mord" style="padding-left:1em;"><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7401em;"><span style="top:-2.989em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0359em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0359em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7401em;"><span style="top:-2.989em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span></span><span style="top:-2.895em;"><span class="pstrut" style="height:3.2em;"></span><span class="hide-tail" style="min-width:1.02em;height:1.28em;"><svg xmlns="http://www.w3.org/2000/svg" width="400em" height="1.28em" viewBox="0 0 400000 1296" preserveAspectRatio="xMinYMin slice"><path d="M263,681c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l0 -0
c4.7,-7.3,11,-11,19,-11
H40000v40H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M1001 80h400000v40h-400000z"></path></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.305em;"><span></span></span></span></span></span></span></span></span></span></span>

The above formula, written in GLSL, looks like this

上の公式をGLSLで書くとこのようになります。

```glsl
float distance = sqrt(pow(p0.x - p1.x, 2.0) + pow(p0.y - p1.y, 2.0));
```

[![](/images/visualizing-distances.png)](/images/visualizing-distances.png)

<div class="video-wrap"><iframe title="ShaderToy" src="https://www.shadertoy.com/embed/flycWV?gui=true&t=10&paused=true" frameborder="0" allowfullscreen></iframe></div>

Drawing stripes using the Manhattan distance in the same way will result in squares rotated by 45 degrees. Let's review the Manhattan Distance formula to confirm that any point on a side on the same square is certainly equidistant from the center.

マンハッタン距離を用いて同じように縞模様を描くと45度回転した正方形になります。マンハッタン距離の式を見直して、同じ正方形上の辺上にあるどの点も確かに中心から等距離にあることを確認してみましょう。

```glsl
float distance = abs(p0.x - p1.x) + abs(p0.y - p1.y);
```

[![](/images/visualizing-distances-1.png)](/images/visualizing-distances-1.png)

<div class="video-wrap"><iframe title="ShaderToy" src="https://www.shadertoy.com/embed/NtGyDV?gui=true&t=10&paused=true" frameborder="0" allowfullscreen></iframe></div>

Let's modify the formula for the Euclidean distance a bit: instead of squares, we'll use powers of 4, and instead of square root, we'll use 4th root (= powers of 1/4).

ユークリッド距離の式を少し書き換えてみましょう。2乗のかわりに4乗、平方根のかわりに4乗根（= 1/4乗）にしてみます。

<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>d</mi><mo>=</mo><mrow><mo stretchy="false">(</mo><mo stretchy="false">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub><msup><mo stretchy="false">)</mo><mn>4</mn></msup><mo>+</mo><mo stretchy="false">(</mo><msub><mi>y</mi><mn>1</mn></msub><mo>−</mo><msub><mi>y</mi><mn>2</mn></msub><msup><mo stretchy="false">)</mo><mn>4</mn></msup></mrow><msup><mo stretchy="false">)</mo><mrow><mn>1</mn><mi mathvariant="normal">/</mi><mn>4</mn></mrow></msup></mrow><annotation encoding="application/x-tex">{d={ ((x_{1}-x_{2})^{4}+(y_{1}-y_{2})^{4}})^{1/4}}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.138em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal">d</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord"><span class="mopen">((</span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">4</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0359em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0359em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">4</span></span></span></span></span></span></span></span></span></span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.888em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1/4</span></span></span></span></span></span></span></span></span></span></span></span></span>

Intriguingly, this ends up creating square-like shapes with rounded corners.

不思議なことに角が丸くなった正方形のような形ができます。

```glsl
float n = 4.0;
float distance = pow(pow(p0.x - p1.x, n) + pow(p0.y - p1.y, n), 1.0 / n);
```

[![](/images/visualizing-distances-2.png)](/images/visualizing-distances-2.png)

<div class="video-wrap"><iframe title="ShaderToy" src="https://www.shadertoy.com/embed/ftGBzD?gui=true&t=10&paused=true" frameborder="0" allowfullscreen></iframe></div>

The example below illustrates the Chebyshev distance, where the distance is determined by the greater absolute value difference between the x-coordinates and the y-coordinates. The same applies to the multidimensional case, where the distance is the largest absolute value of the difference between each component of the coordinates.

下の例はチェビシェフ距離と呼ばれるもので、x座標の差とy座標の差の絶対値のうち大きい方を距離とします。多次元の場合も同様で座標の各成分ごとの差の絶対値のうち最大のものを距離とします。

```glsl
float distance = max(abs(p0.x - p1.x), abs(p0.y - p1.y));
```

[![](/images/visualizing-distances-3.png)](/images/visualizing-distances-3.png)

<div class="video-wrap"><iframe title="ShaderToy" src="https://www.shadertoy.com/embed/NltfRn?gui=true&t=10&paused=true" frameborder="0" allowfullscreen></iframe></div>

# Voronoi
# ボロノイ

In computer graphics, there is a technique called the Voronoi partition that divides a plane into regions closest to a given set of points. With this method too, different results can be obtained by swapping the distance functions.

CGでよく用いられる、ボロノイ分割という手法がありますが、これは、平面をある点の集合のそれぞれに近い領域に分割するものです。これも距離関数を入れ替えることで異なる結果が得られます。

Familiar looking Voronoi partition using Euclidean distance

ユークリッド距離を用いたお馴染みのボロノイ分割

[![](/images/visualizing-distances-4.png)](/images/visualizing-distances-4.png)

<div class="video-wrap"><iframe title="ShaderToy" src="https://www.shadertoy.com/embed/ftdfRn?gui=true&t=10&paused=true" frameborder="0" allowfullscreen></iframe></div>

An example with Chebyshev distance instead of Euclidean distance

ユークリッド距離の替わりにチェビシェフ距離を用いた例

[![](/images/visualizing-distances-5.png)](/images/visualizing-distances-5.png)

<div class="video-wrap"><iframe title="ShaderToy" src="https://www.shadertoy.com/embed/NtdfRn?gui=true&t=10&paused=true" frameborder="0" allowfullscreen></iframe></div>

<div class="instagram-wrap"><blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/B6wROGen8K2/" data-instgrm-version="14" style="width:100%;max-width:540px;margin:0;border:none;border-radius:4px;padding:0;"></blockquote></div>

[Signed distance functions 符号付き距離関数](/sketching-with-math-and-quasi-physics/distance/signed-distance-functions)
