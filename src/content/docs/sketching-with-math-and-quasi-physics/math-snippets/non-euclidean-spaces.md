---
title: "Non-Euclidean Spaces 非ユークリッド空間"
slug: non-euclidean-spaces
---
<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="bNBdqaX" data-user="kynd" data-preview="true"></p></div>

# Euclid and Parallel Postulate
# ユークリッドと平行線公準

Around 300 BC, Euclid wrote _Elements_ and built geometry from a small set of five basic rules, like you can draw a straight line between any two points.

紀元前300年ごろ、ユークリッドは「原論（Elements）」を書き、任意の2点の間には直線が引ける、といった5つの基本ルールから幾何学を組み立てました。

The fifth rule, the Parallel Postulate, is a little more complicated. It states that given a line and a point not on it, there is exactly one line through the point that will never meet the first line. Mathematicians thought this postulate was extraneous and could be derived from the other four rules, but in the 1800s, Gauss, Bolyai, and Lobachevsky proved the opposite. The fifth postulate is necessary to form Euclid’s geometry, but it can be replaced with other rules to create different kinds of spaces.

第5のルールである平行線公準は少し複雑で、1本の直線と、その上にない1点が与えられたとき、その点を通り、元の直線と決して交わらない直線がただ1本だけ引けるというものです。数学者たちは長い間、この公準が余分で、他の4つから導けるのではないかと考えていましたが、1800年代にガウス、ボヤイ、ロバチェフスキーらが、逆の結論を導き出しました。第5公準はユークリッド幾何学を成り立たせるために必要ですが、別の規則に置き換えることで、異なる種類の空間を作ることができるのです。

# Geodesics, Parallels, and Angles
# 測地線・平行線・角度

  
To understand these spaces, we must redefine what a straight line is. In curved space, the shortest path between two points is called a geodesic. How these geodesics behave defines the shape of the universe.  

これらの空間を理解するには、直線をどう定義するかを考え直す必要があります。曲がった空間では、2点間の最短経路を 測地線（geodesic） と呼びます。測地線の振る舞いが、その空間の形を特徴づけます。

## Euclidean Space (Zero Curvature)
## ユークリッド空間（曲率 0）

  
Euclidean space is a perfectly flat, infinite plane where parallel lines stay the same distance apart and never meet; any triangle made from three geodesics (straightest paths) always has interior angles that add up to 180°, and shapes can be scaled up or down without changing their angles.

ユークリッド空間は、完全に平らな無限平面です。平行線は常に一定の距離を保ち、決して交わりません。また、3本の測地線（真っ直ぐな線）で作る三角形の内角の和は必ず180°になり、図形は拡大・縮小しても角度が変わらず、相似が成り立ちます。

## Spherical Space (Positive Curvature)
## 球面空間（正の曲率）

  
Spherical space is the curved surface of a sphere. Imagine stretching a rubber band between two points on a globe; it traces the shortest path between them. This path lies along a great circle, which divides the sphere into two equal hemispheres.

球面空間は、球の表面のように曲がった空間です。地球儀の上で2点の間に輪ゴムをぴんと張ると、2点間の最短経路が描かれます。この経路は 大円（球をちょうど半分に分ける円）に沿って進みます。

Because all great circles eventually intersect, parallel lines don’t exist, and triangles formed by these geodesics have interior angles that sum to more than 180°. If you zoom in to a small region of the sphere, the sum is very close to 180°, reflecting that the surface is locally indistinguishable from a flat plane; as triangles get larger, their angle sums increase.

すべての大円はどこかで必ず交わるので、平行線は存在しません。また、測地線で作る三角形の内角の和は180°より大きくなります。球面のごく小さな領域を拡大すると、局所的には平面と区別がつかなくなり、内角の和は180°に非常に近くなりますが、三角形が大きくなるほど内角の和は大きくなります。

## Hyperbolic Space (Negative Curvature)
## 双曲空間（負の曲率）

  
Hyperbolic space curves outward like a saddle, so it has more room than a flat plane as you move away from a point. In this geometry, parallel lines don’t stay evenly spaced—they spread apart, and through a point off a line you can draw infinitely many distinct lines that never meet the original. Triangles made from geodesics have interior angles that always add up to < 180° because the space expands outward. Like spherical space, hyperbolic space behaves similarly to Euclidean space locally at very small scales, but the differences become more distinctive as you zoom out.

双曲空間は馬の鞍のように外側へ反る曲がり方をし、ある点から離れるほど、平らな平面よりも広い空間があるかのように振る舞います。この幾何では、平行線は等間隔を保てずに広がっていき、ある直線の外側の1点を通って、その直線と決して交わらない直線を無数に引けます。空間が外向きに膨らむため、測地線で作る三角形の内角の和は常に 180° 未満になります。球面空間と同じく、双曲空間もごく狭い範囲では局所的にユークリッド空間と同じように振る舞いますが、範囲が大きくなるにつれ違いは明らかになります。

# Projecting the Hyperbolic Space
# 双曲空間の投影

  
Visualizing a flat plane or a 3D sphere is intuitive but hyperbolic space is hard to imagine because you cannot embed a true hyperbolic plane into standard 3D Euclidean space without distorting or folding.

平面や3Dの球は直感的にイメージできますが、真の双曲平面は、歪みや折りたたみなしに通常の3Dユークリッド空間に埋め込めないので想像するのが困難です。

In our demo, we used the Poincaré Disk Model. This model takes an infinite hyperbolic universe and maps it onto the inside of a 2D circle of radius 1. This presentation preserves the angle but distorts the distance by compressing the space infinitely as you move close to the edge of the disc. Geodesics are drawn as circular arcs that meet the boundary of the disk at exactly 90-degree angles.

このデモではポアンカレ円板モデルを用いて、無限に広がる双曲空間を半径1の2次元円の内側に写します。このモデルは角度を保ちますが、円板の縁に近づくほど距離が無限に圧縮されるため、距離は歪みます。測地線は、円板の境界とちょうど90°で交わる円弧として描かれます。

## Panning in a Poincaré Disk
## ポアンカレ円板での視点移動

  
In our Euclidean space, we can express a point with $x$ and $y$ coordinates. In hyperbolic space, we can treat the 2D coordinates as complex numbers ($z = x + iy$) and define the distance between two points as:

ユークリッド空間では、点を $x$ と $y$ の座標で表せます。双曲空間では、2D 座標を複素数（$z = x + iy$）として扱い、2点間の距離を次のように定義できます：

$\displaystyle d = 2 \frac{\sqrt{dx^2 + dy^2}}{1 - (x^2 + y^2)}$

When we pan the view by an offset $a$, we apply the transformation below (Möbius transformation) to every point in the grid:

視点を $a$ だけずらすには、グリッド上のすべての点に次の変換（メビウス変換）を適用します：

$\displaystyle f(z) = \frac{z + a}{1 + \bar{a}z}$  

$z$ is the original point in the complex plane.  
$a$ is the pan amount (a complex vector) and $\bar{a}$ is the complex conjugate of the pan vector.

$z$ は複素平面上の元の点。  
$a$ は視点の移動量（複素ベクトル）で$\bar{a}$ はその複素共役。

  
This operation works like a fisheye lens: it shifts the center while ensuring the disk’s outer boundary never moves. As objects approach the edge, they shrink and flatten into the boundary.

この操作は魚眼レンズのように働きます。中心は移動しますが、円板の外周は決して動きません。物体は縁に近づくほど縮み、境界線に向かって押しつぶされるように見えます。

> 
> 
> Note that points can be expressed in different ways, even within the same space. For example, a point on a Euclidean plane can be represented with $x$ and $y$ coordinates, or with polar coordinates. A point on a sphere can be represented using longitude and latitude, or as $(x, y, z)$ coordinates in 3D space, etc. Similarly, a point on a hyperbolic plane can be expressed with $x$, $y$, and $z$ coordinates satisfying $x^2 + y^2 - z^2 = -1$. See also: [Bowls and Pringles お椀とプリングルス](/bowls-and-pringles)
> 
> 同じ空間の中でも、点はさまざまな方法で表せることに注意してください。たとえば、ユークリッド平面上の点は $x$ と $y$ の座標で表すこともできますし、極座標で表すこともできます。球面上の点も、経度・緯度で表すことも、3D 空間の $(x, y, z)$ 座標で表すこともできます。同様に、双曲平面上の点は $x^2 + y^2 - z^2 = -1$ を満たす $x$、$y$、$z$ 座標で表せます。あわせてこちらも参照：[Bowls and Pringles お椀とプリングルス](/bowls-and-pringles)
