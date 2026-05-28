---
title: "Cumulative Curves 積み重ねによる曲線"
---
Let's start with a very basic but powerful way of thinking about curves. One of the most common ways that curves occur in the physical world is through cumulative motion or buildup, meaning a point starts moving from one location and changes its course over time. This can include freehand drawing, paths followed by insects, animals, vehicles, and the growth patterns of plants and other organisms.

曲線について考える非常に基本的ながら強力な方法から始めましょう。物理的な世界で曲線が生まれる最も一般的な形の1つは、累積的な運動や蓄積、つまり何かがある地点から動き始め、時間とともにその進路を変えながら進んでいくことです。これにはフリーハンドの描画、昆虫、動物、車両が辿る経路、または植物や他の生物の成長パターンなどが含まれます。

Applying this to computer graphics, we can create infinite varieties of curves by tracing the movement of a point and defining how the direction (velocity) changes as it progresses.

この考え方をコンピュータグラフィックスに応用すると、点が進むにつれどのように向き（速度）を変化させるかを決め、その動きを追跡することで、無限の種類の曲線を作ることができます。

> 
> 
> Note that velocity here is a vector, which has both magnitude and orientation.  
> ここでの速度は、大きさ方向の両方を持つベクトルです。

# Cumulative Circle
# 積み重ねによる円

The demo below is a simple example of a point moving with a changing velocity. The velocity vector starts from pointing to the right and changes direction every frame at the same rate, resulting in an arc that eventually forms a circle.

下のデモは、移動するにつれ速度を変える点のシンプルな例です。速度のベクトルは最初は右を向いていて、フレームごとに同じ割合で向きを変えて行きます。これは結果として弧を描き、円を形作ります。

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/qBGjrBg?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

> 
> 
> It is technically impossible to create a perfectly smooth curve on a computer because it is digital. The example above moves the position by discrete steps, meaning the curve is an accumulation of very short line segments at the code level (see [Continuous Time and Discrete Time](/sketching-with-math-and-quasi-physics/newton-and-vectors/continuous-time-and-discrete-time)). On the screen, the line is a collection of tiny pixels. But for our purposes, it is good enough as long as it appears smooth.  
>   
> コンピュータはデジタルなので、完全に滑らかな曲線を作成することは技術的に不可能です。上記の例では、位置を離散的なステップで移動させています。つまり曲線はコード上では非常に短い線分の積み重ねとして表現されています（[連続的な時間とバラバラな時間](/sketching-with-math-and-quasi-physics/newton-and-vectors/continuous-time-and-discrete-time)を参照）。画面上での線は小さなピクセルの集合体になりますが、見た目に滑らかであればここでの目的には十分です。

# Cumulative Spiral
# 積み重ねによる螺旋

This example is similar to the circle but increases the magnitude of the velocity at a constant rate. The result is a beautiful spiral.

この例は円に似ていますが、速度の大きさが一定の割合で増加していきます。結果として美しい螺旋が描かれます。

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/abrwyvQ?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

# Random Walker
# ランダムウォーカー

Instead of changing the velocity at the same rate, randomizing the change with the `noise()` function makes it look like the path of an animal or insect moving around.

速度を一定の割合で変えるのではなく、`noise()`関数を使って変化をランダムにすると、動物や虫が動き回る道筋のように見えてきます。

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/xxNLObq?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

# Cumulative Parabola
# 積み重ねによる放物線

The next example simulates one of the most common curves in the physical world: a parabolic trajectory. An object shot into the air follows a parabolic path due to gravity (ignoring air resistance and other factors). This can be emulated by assigning an initial velocity to a point and updating the velocity to simulate gravity pulling the point downward.

次のデモは、物理の世界で最も一般的な曲線の1つである放物線の軌道をシミュレートします。空中に打ち上げられた物体は、（空気抵抗やその他の要因を無視すると）重力の影響で放物線をたどります。この様子は点に初速度を与え、下向きに働く重力を再現するために速度を更新していくことで再現できます。

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/RwmZaXM?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

All the demos above are based on the same principle: tracing the path of a point moved with a velocity that changes according to some rule or algorithm (even if it's random). Most curves in the physical world are created this way, since essentially, nothing in nature happens instantaneously. They are the result of the accumulation of physical forces or various phenomena over time.

上のデモはすべて同じ原理、つまりあるルールやアルゴリズム（たとえランダムであっても）に従って速度を変化させる点の軌跡を追跡することに基づいています。基本的に自然には何事も瞬時に起きることはないので、物理的な世界のほとんどの曲線はこの方法で生成されます。自然界の曲線は時間の経過とともに物理的な力や様々な現象が蓄積された結果なのです。

Take a look at another example from the [Newtonian Physics](/sketching-with-math-and-quasi-physics/newton-and-vectors/newtonian-mechanics) page below. In theory, you can draw any curve with cumulative method, though the complexity may vary. Try coming up with different example curves and see if you can express them with a changing velocity.

もうひとつ、[ニュートン物理学](/sketching-with-math-and-quasi-physics/newton-and-vectors/newtonian-mechanics)ページからの例を見てみましょう。複雑さに違いはあれど、理論的には、積み重ねの手法でどんな線でも描くことができます。さまざまな曲線の例を考えて、それらを速度の変化によって表現できるか試してみましょう。

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/qmGOgB?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

While the cumulative approach is versatile and flexible, it can sometimes be less optimal and harder to manage, especially when you know the desired shape in advance. In such instances, defining the curve mathematically using a parametric approach often works better. We will discuss this on the next page.

積み重ねによるアプローチは汎用的で柔軟ですが、特に望む形が事前にわかっている場合には、最適でなかったり、管理が難しくなったりもします。このような場合には、パラメータを用いて曲線を数学的に定義する方が上手くいくでしょう。これについては次のページで説明します。

[Parametric Approaches パラメトリックアプローチ](/sketching-with-math-and-quasi-physics/curves/parametric-approaches)
