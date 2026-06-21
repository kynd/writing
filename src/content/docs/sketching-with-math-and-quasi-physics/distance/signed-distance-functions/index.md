---
title: "Signed distance functions 符号付き距離関数"
slug: signed-distance-functions
---
**”Signed distance functions”**, or SDF sounds scary but it is not too crazy to understand. A SDF is a function that can tell you how far a point is from a surface of a shape, say a sphere (usually in Euclidean space)

「符号付き距離関数」（“Signed distance functions”、略してSDF）とは怖そうな名前ですが、実は割とシンプルです。SDFとは、ある点がある他の形の表面、例えば球面から（通常ユークリッド空間で）どのくらい離れているかを教えてくれる関数です。

For example the distance of a point from the surface of a sphere can be expressed as below where $p$ is the coordinate of the point, $c$ is the center of the sphere, and $r$ is the radius:

例えば、ある点が球の表面からどれくらい離れているかは、その点の座標を$p$、球の中心を$c$、半径を$r$とすると、次のように表すことができます。

$d = \sqrt{(p_{x}-c_{x})^{2} + (p_{y}-c_{y})^{2} + (p_{z}-c_{z})^{2}} - r$

This is very interesting because SDF is the technique used as basis for many mind-blowing 3D graphics demos with really small amount of code you often find on [ShaderToy](https://www.shadertoy.com/).

なぜこれが面白いかというと、SDFは[ShaderToy](https://www.shadertoy.com/)でよく見かける、短いコードで凄まじいクオリティの3Dグラフィックを実現するデモの背景にある技術だからです。

# 2D Demos
# 2Dデモ

The three demonstrations below use SDF to define different shapes and fill in the inside and outside of the shape with dots.

下の3つのデモではSDFを用いてそれぞれ異なる形を定義し、形の内側と外側を点で塗りつぶしています。

The size of the dot represents the distance from the shape's boundary (the smaller the closer). White dots represent the inside of the shape. Black dots are outside the shape.

点の大きさは、図形の境界線からの距離を表しています（小さいほど近い）。白い点はシェイプの内側を表します。黒い点は図形の外側にあります。

```jsx
function sdf(p, center, radius) {
    return Math.sqrt(Math.pow(p.x - center.x, 2) + Math.pow(p.y - center.y, 2)) - radius; // or use p5.Vector.dist()
}
```

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="mdLPVrE" data-user="kynd" data-preview="true"></p></div>

```jsx
function sdf(p, size, center) {
    const diff = p.copy().sub(center);
    return Math.max(Math.abs(diff.x) - size.x, Math.abs(diff.y) - size.y);
}
```

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="yLjOeMq" data-user="kynd" data-preview="true"></p></div>

```jsx
function sdf(p, size, center) {
    let diff = p.copy().sub(center);
    diff = rotate2d(diff, Math.PI * 0.25);
    return Math.max(Math.abs(diff.x) - size.x, Math.abs(diff.y) - size.y);
}
```

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="eYrZJBQ" data-user="kynd" data-preview="true"></p></div>

It will be fun to try coming up with your own new formulas and see what shapes you can draw with it. [Inigo Quilez's site](https://iquilezles.org/articles/distfunctions2d/) has great references of SDFs and functions for transforming and merging shapes.

自分で新しい式を考えて、どんな形が描けるか試してみるのも楽しいでしょう。[Inigo Quilez](https://iquilezles.org/articles/distfunctions2d/) のサイトには沢山のSDFや形を変形させたり合体させたりための関数の例があるので参考にしてください。

# 3D Demos
# 3Dデモ

Below are a couple of examples of rendering 3D shapes using SDF.

下記はSDFを使って3D描画を行なった例です。

[![](/images/signed-distance-functions.png)](/images/signed-distance-functions.png)

<div class="bookmark-card"><a href="https://www.shadertoy.com/view/cdlGWn" target="_blank" rel="noopener" class="bookmark-link"><div class="bookmark-info"><div class="bookmark-title">Shadertoy</div><div class="bookmark-description">Build shaders, share them, and learn from the best community.</div><div class="bookmark-url"><img src="https://www.shadertoy.com/img/favicon.ico" class="bookmark-favicon" alt="" onerror="this.style.display='none'"><span>https://www.shadertoy.com/view/cdlGWn</span></div></div><img src="https://www.shadertoy.com/media/shaders/cdlGWn.jpg" class="bookmark-image" alt="" loading="lazy" onerror="this.style.display='none'"></a></div>

[![](/images/signed-distance-functions-1.png)](/images/signed-distance-functions-1.png)

<div class="bookmark-card"><a href="https://www.shadertoy.com/view/4tlXzX" target="_blank" rel="noopener" class="bookmark-link"><div class="bookmark-info"><div class="bookmark-title">Shadertoy</div><div class="bookmark-description">Build shaders, share them, and learn from the best community.</div><div class="bookmark-url"><img src="https://www.shadertoy.com/img/favicon.ico" class="bookmark-favicon" alt="" onerror="this.style.display='none'"><span>https://www.shadertoy.com/view/4tlXzX</span></div></div><img src="https://www.shadertoy.com/media/shaders/4tlXzX.jpg" class="bookmark-image" alt="" loading="lazy" onerror="this.style.display='none'"></a></div>

<div></div>

For learning about how to draw 3D graphics using SDF, take a look at the following page and web sites.

SDFを使って3Dグラフィックを描く方法については下記のページとサイトをご覧ください。

[Projection and 3D Rendering プロジェクションと3Dレンダリング](/projection-and-3d-rendering)

-   [Ray Marching and Signed Distance Functions](https://jamie-wong.com/2016/07/15/ray-marching-signed-distance-functions/)

-   [wgld.org](http://wgld.org) （日本語）
