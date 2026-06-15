---
title: "Vector ベクトル"
slug: vector
---
# Vector as a collection of numbers
# 数の集まりとしてのベクトル

Draw a number line and place the number 0, or the origin, in the middle. To the right is the positive direction, and to the left is negative. A position on this line can be represented by a single real number.

数直線を描いて、真ん中に0、または原点を置きます。右がプラス、左がマイナス。直線上の位置は実数ひとつで表すことができます。

[![](/images/vector.png)](/images/vector.png)

<div></div>

Draw another number line vertically, orthogonal to the first one. Either direction is fine, but let's assume that the top is positive and the bottom is negative. With two real numbers, a point on a plane can be represented.

最初の数直線に直交するように、縦の数直線をもう一本引きます。向きはどちらでも良いのですが、上がプラス、下がマイナスとしましょう。実数が2つあれば平面上の点を表すことができます。

[![](/images/vector-1.png "75")](/images/vector-1.png)

<div></div>

By adding another line perpendicular to the first two number lines, we can now represent a point in three dimensions using three real numbers.

2本の数直線に直交する垂直線をもう一本引きます。実数が3つで3次元上の点が表せるようになりました。

[![](/images/vector-2.png "75")](/images/vector-2.png)

<div></div>

A vector is a tuple of several numbers put together like these, and each number in a vector is called a component.

このようにいくつかの数をひとまとめにしたものをベクトルと呼び、それぞれの数を成分と呼びます。

Vector is defined differently depending on the field, especially in mathematics, where we sometimes consider a more abstract [vector space](https://en.wikipedia.org/wiki/Vector_space).

ベクトルの定義や意味は分野によって異なっていて、特に数学ではもっと抽象的な[ベクトル空間](https://ja.wikipedia.org/wiki/%E3%83%99%E3%82%AF%E3%83%88%E3%83%AB%E7%A9%BA%E9%96%93)というものを考えたりします。

Vectors don’t always have to represent positions in space. For example, the RGB or HSB values of a color can also be thought of as a three-dimensional vector. Conversely, any data consisting of multiple numbers can be mapped to a space, or we can think of some kind of space they live. Colors mapped to a space is called a color space, and we can think about the distance or orientation between colors.

ベクトルが表すものは空間上の位置だけではありません。例えば色のRGBやHSBの値も3次元のベクトルだと考えることができます。逆にどんなものでも複数の数の組からなるデータであれば空間に対応させる、またはある種の空間を考えることができて、色を空間にマップしたものは色空間と呼ばれます。色と色の間の距離や向きを考えることもできます。

<div class="local-video-wrap"><video controls><source src="/videos/rgb2hsv.mov" type="video/mp4"><source src="/videos/rgb2hsv.mov" type="video/quicktime"></video></div>

**RGB 2 HSV conversion with grid**  
VerbaGleb, CC BY-SA 4.0 [https://creativecommons.org/licenses/by-sa/4.0](https://creativecommons.org/licenses/by-sa/4.0), via Wikimedia Commons

# Vector as an arrow
# 矢印としてのベクトル

A vector is often described as a quantity with direction and magnitude as well. We can think of a vector as an arrow, with the length of the arrow being the magnitude and each component being the projection of the arrow onto its respective axis. This is easier to understand when considering velocity, force, etc. Try clicking randomly on the canvas in the demo below.

ベクトルは向きと大きさをもった量と説明されることもあります。ベクトルを矢印のイメージで考えて、矢印の長さが大きさ、各成分は矢印をそれぞれの軸に投影したものになります。速度や力などを考えると、このイメージが理解しやすくなります。下のデモでキャンバスをランダムにクリックしてみてください。

[![](/images/vector-3.png "50")](/images/vector-3.png)

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="ExLpBXd" data-user="kynd" data-preview="true"></p></div>

(In [Euclidean space](/various-distances)) The magnitude of a vector is the square root of each component squared and added together. This is an extension of the Pythagorean theorem to multiple dimensions. This can be thought as the length of the diagonal of a rectangle, a cuboid, or an n-dimensional cuboid with each component as a side.

（[ユークリッド空間では](/various-distances)）ベクトルの大きさは各成分を2乗して足し合わせたものの平方根を取ります。ピタゴラスの定理を多次元に拡張した形です。成分を各辺とした長方形、直方体、n次元直方体の対角線の長さを求めるイメージです。

${|\vec{v}| ={\sqrt {x^{2}+y^{2}}}}$

${|\vec{v}|={\sqrt {x^2+y^2+z^2}}}$

${|\vec{v}|={\sqrt {x_1^2 + x_2^2 + x_3^2+ x_4^2 + + x_5^2+ ...}}}$

[![](/images/vector-4.png)](/images/vector-4.png)

# Vector Operations
# ベクトルの操作

Vectors can be added and subtracted. To calculate this, you can simply add or subtract corresponding components. This picture illustrates what it means spatially. Assuming vectors are arrows, if you follow $\vec{a}$, then $\vec{b}$, the vector from the starting point to where you end up is the $\vec{a} + \vec{b}$.

ベクトルは足し算や引き算ができます。単純に対応する成分どうしを足し引きします。このように絵に描くと空間的な意味もわかりやすいでしょう。ベクトルを矢印と考えて$\vec{a}$ 、それから $\vec{b}$に沿って進むと、出発点からその点までのベクトルが $\vec{a} + \vec{b}$ になります。

[![](/images/vector-5.png "50")](/images/vector-5.png)

<div></div>

$\vec{a} = (3, -1)$

$\vec{b} = (2, 2.5)$

$\vec{a} + \vec{b} = (3 + 2, -1 + 1.5) = (5, 1.5)$

A vectors can be also multiplied by a scalar. A scalar is a quantity that has no direction, which is just a number. You can double or halve the length of a vector, or multiply by any number. The calculation is simply to multiply all components by the same number.

ベクトルはスカラー倍にすることもできます。スカラーというのは向きを持たない量のことで、つまりただの数です。ベクトルの長さを2倍にしたり半分にしたり、好きな数を掛けることができます。計算としては全ての成分に同じ数を掛けるだけです。

[![](/images/vector-6.png "50")](/images/vector-6.png)

<div></div>

$\vec{a} = (3, 2)$

$2\vec{a} = (2 \cdot 3, 2 \cdot 2) = (6, 4)$

> 
> 
> For other operations, please take a look at [Vector operations](/vector-operations).  
> これ以外の操作については[ベクトルの操作](/vector-operations)をご覧ください。

[Newtonian mechanics ニュートン力学](/newtonian-mechanics)
