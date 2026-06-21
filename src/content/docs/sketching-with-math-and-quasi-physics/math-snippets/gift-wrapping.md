---
title: "Gift Wrapping ギフトラッピング"
slug: gift-wrapping
---
<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="QwGbegX" data-user="kynd" data-preview="true"></p></div>

We often want to understand the outer boundary of a complex dataset made of scattered points—for example, for collision bounds in games, obstacle simplification in robotics, service-zone design in logistics, and shape extraction in computer vision.

ゲームの当たり判定（衝突境界）、ロボットの障害物の単純化、物流のサービス範囲の設計、コンピュータビジョンでの形状抽出など、さまざまな場面で多数の点からなる複雑なデータの外形を知りたいことがあります。  
  
The Gift Wrapping algorithm, also known as Jarvis March, finds the convex hull of a set of points: the smallest polygon that encloses them.

ギフトラッピング法（Jarvis March）は、点の集まりをすっぽり包む最小の多角形である 凸包（convex hull） を求めるアルゴリズムです。

Imagine nails hammered into a board. Stretch a big rubber band around all of them, then let go. It snaps tight against the outermost nails. That rubber-band loop is the convex hull.

たくさんの釘を打ちつけた板を想像してみましょう。大きな輪ゴムを全部の釘の外側に引っかけて手を離すと、輪ゴムは一番外側の釘にピンと張りつきます。その輪ゴムの形が凸包です。

# The algorithm
# アルゴリズム

Start from a point that is guaranteed to be on the hull (often the leftmost point). Next, pick a tentative “next” point, then scan the remaining points one by one. For each point, if it lies to the left of the line from the current point to the tentative point, replace the tentative next point with that point. After all points have been checked, the remaining candidate is the next hull vertex. Repeat until you return to the start.

まず、凸包上にあることが確実な点（一般的には一番左の点）から始めます。次に「次の点」の仮の候補を1つ選び、残りの点を1つずつ調べます。現在の点から仮候補へ引いた直線に対して、ある点が左側に位置するなら、仮候補をその点に更新します。すべての点を確認し終えた時点で残っている候補が、次の凸包の頂点です。これを繰り返し、最初の点に戻ったら終了です。

We can use a cross product to determine whether a point lies to the left or right of the current directed edge.

外積を使えば、ある点が現在の点から仮候補へ向かう線に対して左右どちらにあるかを判定できます。

Let $A$ be the current hull point, $B$ be the current tentative “next” point, and $C$ be the point you are currently checking.

ここで、$A$ を現在の凸包上の点、$B$ を次の点の仮候補、$C$ を今チェックしている点とします。

$(B.x - A.x)(C.y - A.y) - (B.y - A.y)(C.x - A.x)$

value > 0: $C$ is to the left  
value < 0: $C$ is to the right  
value = 0: collinear

value > 0：$C$ は左側  
value < 0：$C$ は右側  
value = 0：一直線上

We replace the tentative next point whenever we find a point to the left.

左側に位置する点が見つかるたびに次の点の仮候補をその点に更新していきます。

The demo above shows this process in slow motion. The numbers next to the lines show the cross product value. As you get used to it, you can speed it up with the slider. Try it several times to get a feel for how it works.

上のデモでは、この手順をスローモーションで確認できます。線の横に表示されている数字は外積の値です。慣れてきたら、スライダーで速度を上げてみてください。何度か試して、仕組みを掴みましょう。
