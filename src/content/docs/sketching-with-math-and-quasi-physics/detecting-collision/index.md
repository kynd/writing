---
title: "Detecting Collision 衝突判定"
slug: detecting-collision
---
A human can tell if two figures overlap or not at a glance. But it is difficult to solve this generally with a computer, and different problems often require different tricks.

2つの図形が重なっているかどうかは人間ならば一目でわかります。ところがこれをコンピュータで一般的に解くのは難しく、問題によって様々なトリックが必要になります。

Various methods of checking whether figures overlap is used to detect collision between objects in physics simulations and games. You may rely on the functions of existing tools and libraries in actual projects. But knowing the basics will not only help you understand these tools, but will also enable you to quickly implement only the functions you need yourself.

図形が重なっているかを調べる様々な手法は物理シミュレーションやゲームなどで物体同士の衝突判定に使われます。実際のプロジェクトでは既存のツールの機能やライブラリなどに頼ることも多いと思いますが、基本的なことを知っておくと、これらのツールを理解する役にたつだけでなく、自分で必要な機能だけを素早く実装できるようになります。

# Circles
# 円

One of the simplest is the circle-point collision detection. Since all points on the edge of a circle are at the distance of the radius from its center, checking if a certain point is inside a circle is just to check the distance between the point and the center of the circle.

Two circles are overlapping if the distance between their centers is equal to or less than the sum of their radii.

最も簡単なものの1つは円と点の衝突判定です。円は境界線上の全ての点が中心から半径の距離にあるので、ある点が円の内側にあるかどうかはその点と中心の距離を調べるだけで判定できます。

2つの円は、中心どうしの距離がそれぞれの半径の和に等しいか小さければ重なっていることになります。

$distance(A_{center},B_{center}) \leq A_{radius}+B_{radius}$

$\Rightarrow distance(A_{center},B_{center})-A_{radius}-B_{radius}\leq 0$

The distance between two points can be obtained by the following equation.

2点間の距離は下記の式で求められます。

${d={\sqrt {(x_{1}-x_{2})^{2}+(y_{1}-y_{2})^{2}}}}$

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="MorWPr" data-user="kynd" data-preview="true"></p></div>

# Line and circle
# 直線と円

To detect a collision between a circle and a straight line, we can find the distance between the center of the circle and the straight line and check whether it is equal to or less than the radius.

円と直線の衝突を検出するには、円の中心と直線との距離を求め、それが半径以下かどうかを調べれば良いでしょう。

The distance between the center of a circle and a line is the length of a perpendicular line drawn from the center down to the line. There can be different ways to find this length, but in this example, let’s form a right triangle by placing a couple of arbitrary points A and B on the line. If we call the center of the circle P, the length of the distance we want can be expressed by the following equation.

円の中心と直線の距離は、中心から直線に下ろした垂線の長さになります。この長さを求める方法は色々考えられますが、ここでは直線の上に適当に点 AとB を打って直角三角形を作ります。円の中心をPとすると求める距離は下記の式で表せます。

$distance=\|\overrightarrow{AP}\|\sin(\theta)=|(\overrightarrow{AP}_x\cdot \overrightarrow{AB}_y-\overrightarrow{AB}_x\cdot \overrightarrow{AP}_y)|/ \|\overrightarrow{AB}\|$

AP and AB are vectors and the angle between them is θ. The equation is transformed using a [two-dimensional version of cross product](/vector-operations).

APとABはベクトル、その間の角度がθです。[式の変形には二次元版のクロス積を使いました](/vector-operations)。

$\|\overrightarrow{a}\|\|\overrightarrow{b}\|\sin(\theta)={a}_x{b}_y-{b}_x {a}_y$

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="zzjMOO" data-user="kynd" data-preview="true"></p></div>

# Rectangles
# 長方形

Collisions of rectangles with sides parallel to the x and y-axes can be determined by comparing the coordinates of the left, right, top, and bottom.

辺がx軸、y軸に並行な長方形の衝突は左端、右端、上端、下端の座標を比べれば判定できます。

$x\textrm{-}axis: (A_{left}\leq B_{right})\;\wedge\;(A_{right}\geq B_{left})\;$

$y\textrm{-}axis:(A_{top}\leq B_{bottom})\wedge(A_{bottom}\geq B_{top})$

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="eRyYLV" data-user="kynd" data-preview="true"></p></div>

# Convex polygons
# 凸多角形

A convex polygon is a polygon that has no concavities, or to be more precise, a polygon such that the line segment connecting two points within the polygon is always contained within the polygon.

凸多角形とは凹んだところがない多角形、もう少し厳密にいうとその多角形の中の2点を結ぶ線分が必ずその多角形の内部に含まれるような多角形です。

[![](/images/detecting-collision.png "75")](/images/detecting-collision.png)

<div></div>

Similarly to rectangles, collision between convex polygons can be determined by examining the overlap using vectors perpendicular to each side of the polygon as axes.

凸多角形の間の衝突は、多角形の各辺に垂直なベクトルを軸として長方形の時と同様に重なりを調べることで判定できます。

[![](/images/detecting-collision-1.png "75")](/images/detecting-collision-1.png)

<div></div>

1.  Let one of the polygons be $A$ and the other $B$  
    どちらかの図形を$A$、もう一方を$B$とする  
    

2.  Select one edge of $A$ and let a vector perpendicular to that edge $\overrightarrow{a}$ be the axis.  
    $A$の一辺を選びその辺に垂直なベクトル$\overrightarrow{a}$を軸とする  
    

3.  Project all the vertices of $A$ onto $\overrightarrow{a}$ (calculate the dot product), and let $A_{min}$ be the minimum value and $A_{max}$ be the maximum value.  
    $A$の全ての頂点を$\overrightarrow{a}$に投影（内積を計算）し、最小の値を$A_{min}$、最大の値を$A_{max}$とする  
    

4.  Project all the vertices of B onto $\overrightarrow{a}$ (calculate the dot product), and let $B_{min}$ be the minimum value and $B_{max}$ be the maximum value.  
    Bの全ての頂点を$\overrightarrow{a}$に投影（内積を計算）し、最小の値を$B_{min}$最大の値を$B_{max}$とする  
    

5.  If $(A_{min} \leq B_{max}) \wedge (A_{max} \geq B_{min})$, then A and B overlap on the axis $\overrightarrow{a}$  
    $(A_{min} \leq B_{max}) \wedge (A_{max} \geq B_{min})$であればAとBは軸$\overrightarrow{a}$上で重なっている  
    

6.  Repeat 2-5 for all edges of $A$. If $A$ and $B$ overlap for all axes, then $A$ and $B$ are in collision.  
    Aの全ての辺に対し2-5を繰り返し、$A$と$B$が全ての軸に対して重なっていれば$A$と$B$は衝突している

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="GEyRXg" data-user="kynd" data-preview="true"></p></div>

Though only triangles are used in the example above, this method can be applied to any convex polygon. The collision detection of a concave polygon can be converted into a combination of convex polygons by dividing them with straight lines.

ここでは三角形を例に取りましたがこの手法は凸多角形であれば何角形でも適応できます。凹多角形の衝突判定は直線で分割することで凸多角形の組み合わせに変換することができます。
