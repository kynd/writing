---
title: "Riemann Circle Projection リーマン円周への射影"
slug: riemann-circle-projection
---
<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="myrjeGd" data-user="kynd" data-preview="true"></p></div>

Compactification is the process of embedding a space into a closed and bounded space.

コンパクト化とはある空間を、閉じていて有界な空間の中に埋め込む操作のことです。

In standard geometry, the real line $\mathbb{R}$ is infinite and open to positive and negative infinity. But what if we regard both infinities as the same thing? Imagine taking a piece of string (the real line) that is infinitely long, pull both ends and glue two infinite ends together at one point to make a circle.

通常の幾何学では、実数直線 $\mathbb{R}$ は無限に伸び、正負それぞれの無限遠へと開いています。ここで、正の無限遠と負の無限遠を同じものとみなしたらどうなるでしょう。無限に長いひも（実数直線）を思い浮かべ、両端を引っ張って同じ1点で貼り合わせ、円にしてしまうイメージです。

This demo shows how each point on the line can be mapped one-to-one onto the circle.

このデモでは、直線上の各点が円周上の点へ 1 対 1 に対応づけられる様子を示します。

Pick a point on the circle ($t$). Draw a straight line from one pole ($A$) through that point, and extend it until it intersects the real line ($s$). You can see that each $t$ corresponds to a single point on the compactified real line, with the other pole ($B$) corresponding to the glued point at infinity.

円周上の点（$t$）を1つ選びます。片方の極（$A$）からその点を通る直線を引き、実数直線と交わるまで延長します（$s$）。これにより、各 $t$ がコンパクト化された実数直線上のただ 1 つの点に対応することがわかります。もう一方の極（$B$）は、貼り合わせた無限遠の点に対応します。

As a bonus, the demo also shows where the line from $B$ to $t$ intersects the real line ($s_2$), which becomes the inverse of $s$ (i.e., $s_x$ = $1/s_{2x}$).

おまけとしてこのデモでは、$B$ から $t$へ引いた直線が実数直線と交わる位置（$s_2$）も表示しています。これは $s$ の逆数に対応します（つまり $s_x$ = $1/s_{2x}$）。

This concept can be extended to any dimension. For example, can you imagine a compactified 2D plane as a sphere? What about 3D space?

この考え方は、任意の次元へ拡張できます。たとえば2次元平面を球としてコンパクト化した様子を想像できるでしょうか。 3次元空間はどうなるでしょう。

More [Math Snippets](/math-snippets)
