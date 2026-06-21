---
title: "Newtonian mechanics ニュートン力学"
slug: newtonian-mechanics
---
Let’s use basic Newtonian mechanics and vectors to move things around.

基礎的なニュートン力学とベクトルを使ってものを動かしてみます。

# Position
# 位置

To move an object, we first need a position. A position can be represented as a vector from the origin.

物を動かすにはまず位置が必要です。位置は原点からのベクトルとして表すことができます。

A position cannot be represented as a vector unless the origin and the direction of the axis are determined. The same position can be represented by different vectors if the reference point is different. Do we look at it from the perspective of the main character or from the camera's point of view? Two steps forward and four steps to the right from where you are now, or 300m north-northwest from Tokyo Tower, etc.

原点と軸の向きが決まらなければベクトルで位置を表すことはできません。同じ位置でも基準が異なれば違うベクトルで表されます。主人公目線で見るか、カメラからの位置で考えるか、今いる場所から前に2歩、右に4歩、東京タワーから北北西に300m、などなど。同じ点でも違う方法で言い表すことができます。

In the demo below, the origin is placed in the center, the x-axis goes from left to right and the y-axis goes from bottom to top. You can move the position by clicking on the screen.

下のデモでは原点を中央に置いて左右にx軸、上下にy軸を取ります。画面をクリックすると位置を動かすことができます。

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="zeqvRg" data-user="kynd" data-preview="true"></p></div>

# Velocity
# 速度

Now we have a position. But it is not very realistic if it moves instantaneously to another point. To move a point gradually, we need information about how the position changes with respect to time. The amount of change in position is called “velocity” and can be represented by another vector.

位置が決まっても、それが別の地点に瞬時に移動するのはあまり現実的ではありません。点を徐々に移動させるには、時間に対して位置がどう変化するかについての情報が必要です。位置の変化量を「速度」と呼び、別のベクトルで表現することができます。

This concept of _amount of change_ is very important when dealing with any changing value. If this was a math or physics textbook, we would be diving deeper into calculus, but let's ditch it for now.

この変化量という概念は、変化する値を扱うときに非常に重要です。これが数学や物理の教科書であれば、微積分を深く掘り下げるところですが、今は置いておきましょう。

> 
> 
> If you are interested, please take a look at [Calculus for Makers](/calculus-for-makers).  
> 興味があれば、[作るための微積分](/calculus-for-makers)を読んでください。

Velocity is a vector and has direction and magnitude (the amount without  direction is called "speed"). For example, if the velocity of a point is (60, 30), it means that the point will move 60 units along the x-axis and 30 units along the y-axis during a unit of time (say 1 second).

速度はベクトルで、方向と大きさを持ちます（向きを考えない量は「速さ」と呼びます）。例えば、点の速度が(60, 30)であれば、単位時間（例えば1秒）の間にx軸方向に60単位、y軸方向に30単位移動することを意味します。

If your simulation is running at 30 fps (frames per second - 30 updates per second), then 1/30 of (60, 30) would be added to the position vector every frame.

シミュレーションが30fps（frame per second - 1秒間に30回更新される）で実行されていれば、1フレームごとに(60, 30)の1/30を位置のベクトルに足すことになります。

Let's watch this in a demo. You can click on the canvas to set a new velocity towards the mouse.

これをデモで見てみましょう。キャンバス上をクリックするとマウスに向かって新しい速度を設定することができます。

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="vbGNjx" data-user="kynd" data-preview="true"></p></div>

Just a note, but this "add every frame" operation is a rather crude approximation; in the real world, things change more continuously. I will explain this a bit more in the next page.

ちなみにこの「毎フレームごとに足す」という操作はかなり雑な近似で、現実の世界ではもっと連続的に物事が変化します。この点については次のページでちょっと説明します。

[Continuous Time and Discrete Time 連続した時間とバラバラな時間](/continuous-time-and-discrete-time)

# Acceleration
# 加速

Now we have a moving point. But it only moves at the same speed along a straight line, which is referred to as “uniform linear motion”. To change the motion, we need to provide another amount of change relative to the velocity. This is called “acceleration”, which can also be expressed as a vector, and can be added to the velocity at each frame to change the motion.

点が動くようになりましたが、真っ直ぐ同じ速さで動くだけであまり面白くありません。これは等速直線運動と呼ばれます。動きを変化させるには、速度に対する変化量を用意する必要があります。これは加速度と呼ばれ、やはりベクトルで表すことができ、毎フレームごとに速度に足し合わせることで動きを変化させることができます。

In the demo below, acceleration is applied toward the mouse position. As the velocity gradually changes, the point now flies drawing a curve.

下のデモではマウスの位置に向かって加速度が加わります。速度が次第に変化するので、点が曲線を描いて飛ぶようになりました。

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="zeqvaO" data-user="kynd" data-preview="true"></p></div>

We have discussed three different vectors so far. To quickly recap, they were:

-   Position vector

-   Velocity vector, which is the amount of change in the position vector

-   Acceleration vector, which is the amount of change in the velocity vector

3つのベクトルが出てきました。整理するとこうなります

-   位置ベクトル

-   速度ベクトル = 位置ベクトルの変化量

-   加速度ベクトル = 速度ベクトルの変化量

# Force and Mass
# 力と質量

To get something accelerated, we need a force. Force can also be expressed as a vector, but force is not the amount of change in acceleration. It is the acceleration multiplied by the object's mass; conversely, acceleration is force divided by mass. In other words, when you push something with a force, it will accelerate slowly if it is heavy, and more quickly if it is light. The formula goes like this:

加速度を得るためには力が必要になります。力もベクトルで表現できますが、力は加速度の変化量ではなくて、加速度に物体の質量を掛けたもの、逆にいうと力を質量で割ったものが加速度になります。何かをある力で押した時に、その物体が重ければゆっくり加速するし、軽ければもっと早く加速するということを現した式がこうなります。

$$a = \dfrac{f}{m}$$

$a$ is acceleration, $f$ is force, and $m$ represents mass.

$a$は加速度、$f$は力を表し、$m$は質量を表します。

In the next demo, the larger point has sixteen times the mass of the smaller point. You can see how the smaller point accelerates more quickly even when the forces are applied to the both in the same way.

次のデモでは大きい点は小さい点の16倍の質量を持っています。同じように力を加えても小さい点の方がより早く加速する様子を見ることができます。

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="YzLJOgp" data-user="kynd" data-preview="true"></p></div>

## Gravity
## 重力

Gravity is a downward force that causes an object to fall. Since the force of gravity acts uniformly on objects regardless of their mass, the acceleration due to gravity is constant for all objects, approximately $9.8 m/s^2$ on Earth. If you are not familiar with the unit $m/s^2$, it is $m/s$ (meters per second), which represents the magnitude of velocity(or speed), divided by a second one more time. $1 m/s^2$ means that the velocity changes $1 m/s$ every second.

重力は物体が落下するときに下向きに働く力です。重力の大きさは物体の質量に比例するので、どんな物体でも加速度は一定になり、地球上ではおよそ$9.8m/s^2$になります。$m/s^2$という単位は見慣れないかもしれませんが速度の大きさを表す$m/s$（メートル毎秒）をさらに秒で割ったもので$1m/s^2$は一秒ごとに速度が$1m/s$変化することを表します。

Let's drop an apple honoring the anecdote of Sir Isaac Newton. See how position, velocity, and acceleration change over time.

ニュートンの逸話にちなんでリンゴを落してみましょう。位置、速度、加速度それぞれが時間と共にどのように変化するかを見てください。

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="xdNwao" data-user="kynd" data-preview="true"></p></div>

# Universal gravitation
# 万有引力

Earth's gravity is just one manifestation of the universal gravitational force that acts between all objects. All objects are attracted to each other, and the magnitude of this attraction is expressed by the following equation.

地球の重力は、全ての物体間に働く万有引力の一つの例に過ぎません。全ての物体の間にはお互いを引き寄せる力が働きその大きさは下記の式で表されます。

${\displaystyle F=G{\frac {m_{1}m_{2}}{r^{2}}}\ }$

$m_1$ and $m_2$ are the masses of the respective objects, $r$ is the distance between them, and $G$ is a constant called the gravitational constant. The force is proportional to the masses and inversely proportional to the square of the distance, so the heavier the objects, the stronger the force, and the further the distance, the weaker the force.

$m_1$と$m_2$はそれぞれの物体の質量、$r$は距離、$G$は重力定数と呼ばれる定数です。質量に比例して距離の2乗に反比例するので、物体が重いほど力が強くなり、距離が離れるほど力が弱くなります。

On a celestial body such as the Earth, only the downward falling force is perceived as gravity, since that body is usually much heavier than everything else around. Note that the word "gravity" can refer to both this specific downward force and the universal force between all objects depending on the context.

地球などの天体の上では大抵その天体が他のものよりも圧倒的に重いので下向きに落ちる力だけが重力として感じられます。「重力」という言葉は文脈によって、下向きの力や全ての物体間に働く力のどちらを指すのかが変わるので注意が必要です。

The demo below is a simple simulation of the universal gravitation force acting between objects with different masses.

下のデモは質量の異なる物体の間に働く万有引力の簡単なシミュレーションです。

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="qmGOgB" data-user="kynd" data-preview="true"></p></div>

We are not astronomers. Our simulations don’t have to follow the reality. For example, we can create matter that repels each other, or a world where the gravity is not inversely proportional to the square of the distance. Let’s see what you can make.

我々は天文学者ではないのでシミュレーションが現実に即していなくても一向に構いません。例えばお互いに反発しあう物質や、引力が距離の2乗に反比例しない世界を作ることもできます。

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="jOxQbKM" data-user="kynd" data-preview="true"></p></div>

You can of course add randomness to the movement. The movement of these ribbons in this video was created by tracing the points pulled by gravity and adding random forces to them.

もちろん動きにランダムさを加えても良いでしょう。このビデオの中のリボンの動きは重力で引かれる点にノイズによる力を加えて作りました。

<div class="video-wrap"><iframe title="vimeo-player" src="https://player.vimeo.com/video/102100106" width="640" height="360" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" allowfullscreen></iframe></div>

[Continuous Time and Discrete Time 連続した時間とバラバラな時間](/continuous-time-and-discrete-time)
