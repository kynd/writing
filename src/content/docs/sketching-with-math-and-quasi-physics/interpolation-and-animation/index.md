---
title: "Interpolation and Animation 補間とアニメーション"
slug: interpolation-and-animation
---
# Linear Interpolation
# 線形補間

In animation, it is a common practice to create movement by determining the beginning and ending positions and filling in the gaps between them. This method is called interpolation.

アニメーションでは始まりの位置と終わりの位置を決めてその間を補うことで動きを表現する手法がよく用いられます。これは補間と呼ばれます。

[![](/images/interpolation-and-animation.png)](/images/interpolation-and-animation.png)

<div></div>

Suppose that point $P$ moves from one point $A$ to another point $B$, and the variable $t$ is the ratio how much $P$ has moved between them. If $t = 0$, $P$ is in the same position as $A$. If $t = 1$, $P$ is in the same position as $B$, and if $t = 0.5$, $P$ is exactly at the midpoint between $A $ and $B$. This can be expressed as follows. $A$, $B$, and $P$ can be either numbers or vectors.

ある点$A$から別の点$B$まで点$P$が移動するとします。$P$の移動した割合を$t$という変数で表します。$t = 0$ なら$P$は$A$と同じ位置、$t = 1$ なら$P$は$B$と同じ位置、$t=0.5$ なら$P$はちょうど$A$と$B$の中点にいるという具合です。これは下記のように表せます。$A$, $B$, $P$ は数値でもベクトルでも構いません。

$P = (1 - t)\cdot A   + t \cdot B$

when $t$ changes at a constant rate as in this demonstration, it is called **linear interpolation**.

このデモのように$t$が等速度で変化する場合を線形補間と呼びます。

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="rNvQRjW" data-user="kynd" data-preview="true"></p></div>

# Easing functions
# イージング関数

We can make the animation more expressive by manipulating the way $t$ changes. For example, let's look at what happens if we square the value of $t$. This produces a movement that starts out slow and gradually accelerates.

$t$の変化を操作するとアニメーションに表情を持たせることできます。例えばtの値を2乗してみましょう。これだけでゆっくりとしたスタートから徐々に加速する動きができました。

```jsx
function powerInSquare(t) {
    t = max(0, min(t, 1));
    return pow(t, 2);
}
```

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="RwyvrmP" data-user="kynd" data-preview="true"></p></div>

We can think of various functions for changing the way values are interpolated. These are called **easing functions**. Let's plot some of the well-known examples.

値の補間方法を変えるための関数には様々なバリエーションが考えられます。これらの関数をイージング関数と呼びます。よく知られているものをいくつかグラフに描いてみましょう。

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="JNwmxj" data-user="kynd" data-preview="true"></p></div>

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="qmLJeO" data-user="kynd" data-preview="true"></p></div>

# Interpolating Interpolations
# 補間の補間

To sketch something more intricate, we can create interesting movements and shapes by further interpolating between points that are also moving with interpolations.

もっと複雑なスケッチを描きたければ、補間によって動く点どうしの間をさらに補間すると面白い動きや形を作ることができます。

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="qgZRaW" data-user="kynd" data-preview="true"></p></div>

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="bzpgra" data-user="kynd" data-preview="true"></p></div>

# Bezier curves
# ベジェ曲線

**Bezier curves** that you might be familiar with in drawing softwares such as Adobe Illustrator are actually made of (linear) interpolations. There are variations depending on how many interpolations are combined.

イラストレーターなどのドローイングソフトでお馴染みのベジェ曲線も実は（線形）補間を組み合わせた物です。補間をいくつ組み合わせるかによって種類があります。

[![](/images/interpolation-and-animation-1.png)](/images/interpolation-and-animation-1.png)

<div></div>

A linear Bézier curve is simply a straight line between two points, which can be defined as linear interpolation between two points.

線形ベジェ曲線は単に2点の間の直線のことで、その2点間の線形補間として定義できます。

$ {B}_{linear{P}_{0},{P}_{1}} (t)=(1-t){P}_{0}+t{P}_{1}
,\quad0\leq t\leq 1$

A quadratic Bézier curves can be defined as linear interpolation between corresponding points on two linear Bézier curves.

2次ベジエ曲線は、2本の線形ベジェ曲線上の対応する点間の線形補間として定義することができます。  
  
$ {B}_{quadratic  {P} _{0},  {P} _{1},  {P} _{2}} (t)=(1-t) {B}_{linear  {P} _{0} {P} _{1}}(t)+t {B}_{linear  {P} _{0},  {P} _{2}}(t),\quad0\leq t\leq 1$

And a cubic Bézier curves is linear interpolation between corresponding points on two quadratic Bézier curves.  

そして3次ベジエ曲線は、2本の2次ベジエ曲線上の対応する点間の線形補間です。

${B}_{cubic{ {P} _{0},  {P} _{1},  {P} _{2}, {P} _{3}}} (t)=(1-t) {B} _{quadratic  {P} _{0}, {P} _{1}, {P} _{2}}(t)+t {B} _{quadratic  {P} _{1}, {P} _{2}, {P} _{3}}(t)$

$ =(1-t)^{3} {P} _{0}+3(1-t)^{2}t {P} _{1}+3(1-t)t^{2} {P} _{2}+t^{3} {P} _{3}, \quad 0\leq t\leq 1$

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="bREZXv" data-user="kynd" data-preview="true"></p></div>

Although it may seem circular, defining an easing function using Bezier curves allows you to control the animation more freely.

循環する様ですが、ベジェ曲線を使ってイージング関数を定義するとより自由にアニメーションをコントロールできます。

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="ExpKxmZ" data-user="kynd" data-preview="true"></p></div>

# Coordination Motion
# 動きの協調

Easing can be used in combination to achieve a great variety of expressions. We could spend several chapters just exploring this topic, but for now I will just list a few examples.

イージングをうまく組み合わせることでより様々な表現を実現できます。この話はそれだけで何章か書けてしまいそうですが、とりあえずいくつかの例だけを並べておきます。

[![](/images/interpolation-and-animation.gif)](/images/interpolation-and-animation.gif)

<div></div>

This is an example in the [Motion ToolKit section](https://thebookofshaders.com/examples/?chapter=motionToolKit) I wrote for the Book of Shaders a long time ago. All the elements are moving independently with the easing functions introduced above, but by coordinating the timing and positions, they can appear to be related to the others.

これは遠い昔にBook of Shadersの[Motion Tool Kit](https://thebookofshaders.com/examples/?chapter=motionToolKit)のために書いた作例です。全ての要素は上で紹介したイージング関数よってバラバラに動いていますが、タイミングや位置の関係を工夫するとそれぞれの動きに関連があるように見せることもできます。

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="aWPQdO" data-user="kynd" data-preview="true"></p></div>

Little elements such as a small bounce and deformation can convey the weight and material of an object. Don't they look like a heavy material like metal on the left and a light rubber ball or some living creature on the right? I was a little slacking on the shape just morphing the circle into an oval, but you could be more creative, for example, to change the shape differently between the upper half and the lower half that is pressed onto the ground.

小さなバウンドや形の変形といったちょっとした要素で物の重さや材質を伝えることもできます。左は金属のような重い材質、右は軽いゴムボールか生き物のように見えないでしょうか。形の変化は手を抜いて円を楕円形に潰しているだけですが、上半分と下側の地面に押されている側で形を変えたりと、もっと工夫することができます。

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="gWZQMX" data-user="kynd" data-preview="true"></p></div>

This is an example of connecting line movements. I don’t remember the details, but it is an attempt to create complex-looking movements by just joining simple motifs of straight lines and arcs with the right timing.

これはいくつもの線の動きを繋げた作例です。細かいことは忘れましたが、直線と円弧の単純なモチーフをタイミングを合わせて繋ぎ合わせるだけで複雑そうな動きを作り出す試みです。
