---
title: "Signed distance functions 符号付き距離関数"
---
“Signed distance functions”, or SDF sounds scary but it is not too crazy to understand. A SDF is a function that can tell you how far a point is from a surface of a shape, say a sphere (usually in Euclidean space)

「符号付き距離関数」（“Signed distance functions”、略してSDF）とは怖そうな名前ですが、実は割とシンプルです。SDFとは、ある点がある他の形の表面、例えば球面から（通常ユークリッド空間で）どのくらい離れているかを教えてくれる関数です。

For example the distance of a point from the surface of a sphere can be expressed as below where <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>p</mi></mrow><annotation encoding="application/x-tex">p</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">p</span></span></span></span> is the coordinate of the point, <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>c</mi></mrow><annotation encoding="application/x-tex">c</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">c</span></span></span></span> is the center of the sphere, and <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>r</mi></mrow><annotation encoding="application/x-tex">r</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span></span></span></span> is the radius:

例えば、ある点が球の表面からどれくらい離れているかは、その点の座標を<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>p</mi></mrow><annotation encoding="application/x-tex">p</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">p</span></span></span></span>、球の中心を<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>c</mi></mrow><annotation encoding="application/x-tex">c</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">c</span></span></span></span>、半径を<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>r</mi></mrow><annotation encoding="application/x-tex">r</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span></span></span></span>とすると、次のように表すことができます。

<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>d</mi><mo>=</mo><msqrt><mrow><mo stretchy="false">(</mo><msub><mi>p</mi><mi>x</mi></msub><mo>−</mo><msub><mi>c</mi><mi>x</mi></msub><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo>+</mo><mo stretchy="false">(</mo><msub><mi>p</mi><mi>y</mi></msub><mo>−</mo><msub><mi>c</mi><mi>y</mi></msub><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo>+</mo><mo stretchy="false">(</mo><msub><mi>p</mi><mi>z</mi></msub><mo>−</mo><msub><mi>c</mi><mi>z</mi></msub><msup><mo stretchy="false">)</mo><mn>2</mn></msup></mrow></msqrt><mo>−</mo><mi>r</mi></mrow><annotation encoding="application/x-tex">d = \sqrt{(p_{x}-c_{x})^{2} + (p_{y}-c_{y})^{2} + (p_{z}-c_{z})^{2}} - r</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal">d</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.24em;vertical-align:-0.3231em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.9169em;"><span class="svg-align" style="top:-3.2em;"><span class="pstrut" style="height:3.2em;"></span><span class="mord" style="padding-left:1em;"><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">p</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">x</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord"><span class="mord mathnormal">c</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">x</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7401em;"><span style="top:-2.989em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">p</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.03588em;">y</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2861em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord"><span class="mord mathnormal">c</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.03588em;">y</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2861em;"><span></span></span></span></span></span></span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7401em;"><span style="top:-2.989em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">p</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.04398em;">z</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord"><span class="mord mathnormal">c</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.04398em;">z</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7401em;"><span style="top:-2.989em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span></span><span style="top:-2.8769em;"><span class="pstrut" style="height:3.2em;"></span><span class="hide-tail" style="min-width:1.02em;height:1.28em;"><svg xmlns="http://www.w3.org/2000/svg" width="400em" height="1.28em" viewBox="0 0 400000 1296" preserveAspectRatio="xMinYMin slice"><path d="M263,681c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l0 -0
c4.7,-7.3,11,-11,19,-11
H40000v40H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M1001 80h400000v40h-400000z"></path></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3231em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span></span></span></span>

This is very interesting because SDF is the technique used as basis for many mind-blowing 3D graphics demos with really small amount of code you often find on [ShaderToy](https://www.shadertoy.com/).

なぜこれが面白いかというと、SDFは[ShaderToy](https://www.shadertoy.com/)でよく見かける、短いコードで凄まじいクオリティの3Dグラフィックを実現するデモの背景にある技術だからです。

# 2D Demos

The three demonstrations below use SDF to define different shapes and fill in the inside and outside of the shape with dots.

下の3つのデモではSDFを用いてそれぞれ異なる形を定義し、形の内側と外側を点で塗りつぶしています。

The size of the dot represents the distance from the shape's boundary (the smaller the closer). White dots represent the inside of the shape. Black dots are outside the shape.

点の大きさは、図形の境界線からの距離を表しています（小さいほど近い）。白い点はシェイプの内側を表します。黒い点は図形の外側にあります。

```jsx
function sdf(p, center, radius) {
    return Math.sqrt(Math.pow(p.x - center.x, 2) + Math.pow(p.y - center.y, 2)) - radius; // or use p5.Vector.dist()
}
```

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/mdLPVrE?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

```jsx
function sdf(p, size, center) {
    const diff = p.copy().sub(center);
    return Math.max(Math.abs(diff.x) - size.x, Math.abs(diff.y) - size.y);
}
```

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/yLjOeMq?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

```jsx
function sdf(p, size, center) {
    let diff = p.copy().sub(center);
    diff = rotate2d(diff, Math.PI * 0.25);
    return Math.max(Math.abs(diff.x) - size.x, Math.abs(diff.y) - size.y);
}
```

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/eYrZJBQ?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

It will be fun to try coming up with your own new formulas and see what shapes you can draw with it. [Inigo Quilez's site](https://iquilezles.org/articles/distfunctions2d/) has great references of SDFs and functions for transforming and merging shapes.

自分で新しい式を考えて、どんな形が描けるか試してみるのも楽しいでしょう。[Inigo Quilez](https://iquilezles.org/articles/distfunctions2d/) のサイトには沢山のSDFや形を変形させたり合体させたりための関数の例があるので参考にしてください。

# 3D Demos

Below are a couple of examples of rendering 3D shapes using SDF.

下記はSDFを使って3D描画を行なった例です。

[![](/images/signed-distance-functions.png)](/images/signed-distance-functions.png)

<div class="video-wrap"><iframe title="ShaderToy" src="https://www.shadertoy.com/embed/cdlGWn?gui=true&t=10&paused=true" frameborder="0" allowfullscreen></iframe></div>

[![](/images/signed-distance-functions-1.png)](/images/signed-distance-functions-1.png)

<div class="video-wrap"><iframe title="ShaderToy" src="https://www.shadertoy.com/embed/4tlXzX?gui=true&t=10&paused=true" frameborder="0" allowfullscreen></iframe></div>

For learning about how to draw 3D graphics using SDF, take a look at the following page and web sites.

SDFを使って3Dグラフィックを描く方法については下記のページとサイトをご覧ください。

[Projection and 3D Rendering プロジェクションと3Dレンダリング](/sketching-with-math-and-quasi-physics/projection-and-3d-rendering)

-   [Ray Marching and Signed Distance Functions](https://jamie-wong.com/2016/07/15/ray-marching-signed-distance-functions/)

-   [wgld.org](http://wgld.org) （日本語）
