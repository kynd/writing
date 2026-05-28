---
title: "Light and 2D Graphics 光と2Dグラフィックス"
---
Since the [page on 3D graphics](/sketching-with-math-and-quasi-physics/light/illuminating-objects) was very theoretical, this page is more casual and presents some ideas for applying simplified properties of light to graphics.

[3Dグラフィックのページ](/sketching-with-math-and-quasi-physics/light/illuminating-objects)が非常に理論的だったので、このページではもっとカジュアルに光の性質を単純化して2Dグラフィックスに応用するアイデアをいくつか紹介します。

# 2D Shadow
# 2次元の影

This demo is a two-dimensional application of the [ray-marching technique](https://jamie-wong.com/2016/07/15/ray-marching-signed-distance-functions/). You can check whether a location is in shadow by extending a line from that point to a light source and seeing if the line hits another object. Lighting in [Flatland](https://en.wikipedia.org/wiki/Flatland) may look like this.

このデモは[レイマーチングの手法](https://jamie-wong.com/2016/07/15/ray-marching-signed-distance-functions/)を2次元に応用したものです。ある場所が影になっているかはその点から光源に向けて線を伸ばし、線が他の物体にぶつかるかどうかで調べることができます。[フラットランド](https://ja.wikipedia.org/wiki/%E3%83%95%E3%83%A9%E3%83%83%E3%83%88%E3%83%A9%E3%83%B3%E3%83%89_\(%E6%9B%B8%E7%B1%8D\))の照明はきっとこんなふうに見えるのではないでしょうか。

[![](/images/you-can-check-whether-a-location-is-in-shadow-by-extending-a.png)](/images/you-can-check-whether-a-location-is-in-shadow-by-extending-a.png)

You can check whether a location is in shadow by extending a line from that point to a light source and seeing if the line hits another object.

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/ExezaYg?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

[https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3201a6f2-3f4c-4467-8fee-0e60877edf6d/m\_2\_1.mp4](Light%20and%202D%20Graphics%20%E5%85%89%E3%81%A82D%E3%82%B0%E3%83%A9%E3%83%95%E3%82%A3%E3%83%83%E3%82%AF%E3%82%B9/m_2_1.mp4)

A projection using 2D shadows. [NEORT++ 2022](https://two.neort.io/)

# Reflection
# 反射

This is the same demo seen on the [Reflection and Refraction](/sketching-with-math-and-quasi-physics/light/reflection-and-refraction) page, but without erasing the trails of the light.

これは[反射と屈折](/sketching-with-math-and-quasi-physics/light/reflection-and-refraction)のページで見たデモと同じものですが、光の軌跡を消さずに残すようにしました。

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/JjagXWp?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

# Refraction
# 屈折

The demonstration below uses Fresnel's equation to magnify polka dots only within a square. That's all there is to it, but don’t you see a transparent cube moving? The human brain seems to recognize space from the slightest hint. This is not a physically accurate rendering because it ignores the sides of the cube and many other things, but sometimes it is better to simplify drastically for graphic effect.

下のデモはフレネルの式を使って正方形の中だけ水玉模様を拡大しています。ただそれだけなのですが、透明な立方体が動いているように見えてこないでしょうか。人間の脳はちょっとしたヒントから空間を認識してしまうようです。立方体の側面を無視していたりので物理的に正確なレンダリングではないのですが、グラフィックの効果としては思い切って単純化した方が良いこともあります。

[![](/images/light-and-2d-graphics-2d.png)](/images/light-and-2d-graphics-2d.png)

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/eYLaPQK?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

# Normal map
# 法線マップ

When lighting an object, its brightness is largely affected by the direction of its surface (normal) and the direction of the light source. Conversely, if you have these two factors, it is possible to create a reasonably three-dimensional look. The demo below creates only the normal direction on a plane (in the `normal` function) without creating any 3D model, then applies [Lambertian reflections](/sketching-with-math-and-quasi-physics/light/illuminating-objects/classic-3d-rendering). Since no shadows are drawn, the result looks a little like trick art with a mysterious floating sensation. The method of having normal data on a plane is also used in games to create complex expressions with a small number of polygons.

物体に照明を当てる時の明るさは、その表面の向き（法線）と光源の向きに大きく左右されます。逆に言えば、これら2つがあれば、それなりに立体感のある表現をすることができます。下のデモでは、3Dモデルなしに法線の向きだけを平面上に作り出して（`normal`関数）、そこに[ランバート反射](/sketching-with-math-and-quasi-physics/light/illuminating-objects/classic-3d-rendering)だけを適用しています。影を描いていないため、不思議な浮遊感のあるトリックアートのような雰囲気になっています。平面に法線のデータを持たせる手法は、ゲームなどで少ないポリゴン数で複雑な表情を作りたい時にも使われています。

[![](/images/light-and-2d-graphics-2d-1.png)](/images/light-and-2d-graphics-2d-1.png)

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/PodvaRZ?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

This image is a zoomed-in version of an image exported for a [book cover](https://www.amazon.com/Beyond-Interaction-%E6%94%B9%E8%A8%82%E7%AC%AC3%E7%89%88-%E3%82%AF%E3%83%AA%E3%82%A8%E3%82%A4%E3%83%86%E3%82%A3%E3%83%96%E3%83%BB%E3%82%B3%E3%83%BC%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0%E3%81%AE%E3%81%9F%E3%82%81%E3%81%AEopenFrameworks%E5%AE%9F%E8%B7%B5%E3%82%AC%E3%82%A4%E3%83%89/dp/4802511795). The technique above was used to add the minuscule thickness of the paint.

この画像は[本の表紙](https://www.amazon.com/Beyond-Interaction-%E6%94%B9%E8%A8%82%E7%AC%AC3%E7%89%88-%E3%82%AF%E3%83%AA%E3%82%A8%E3%82%A4%E3%83%86%E3%82%A3%E3%83%96%E3%83%BB%E3%82%B3%E3%83%BC%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0%E3%81%AE%E3%81%9F%E3%82%81%E3%81%AEopenFrameworks%E5%AE%9F%E8%B7%B5%E3%82%AC%E3%82%A4%E3%83%89/dp/4802511795)のために書き出した画像を拡大したものです。絵の具の極僅かな厚みを表現するために上記の手法が使用されています。

[![](/images/light-and-2d-graphics-2d-2.png)](/images/light-and-2d-graphics-2d-2.png)

[![](/images/light-and-2d-graphics-2d-3.png)](/images/light-and-2d-graphics-2d-3.png)
