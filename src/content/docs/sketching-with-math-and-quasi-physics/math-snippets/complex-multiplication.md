---
title: "Complex Multiplication 複素数の掛け算"
slug: complex-multiplication
---
<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="PwGBJyX" data-user="kynd" data-preview="true"></p></div>

Complex numbers can be represented on a 2D plane much like a 2D vector or point. But unlike vectors, the two axes are not independent, and multiplying two complex numbers produces a rotation.

複素数は、2D平面上で2次元のベクトルや点のように表すことができます。ただしベクトルとは違い、2つの軸は独立ではなく、複素数どうしを掛け算すると回転が生まれます。

An easy way to build intuition is to see what happens when you multiply a number by $i$ repeatedly. For example:

これを直感的に理解するには、ある数に $i$ を繰り返し掛けてみると良いでしょう。

$1 \cdot i = i$

$i \cdot i = -1$

$-1 \cdot i = -i$

$-i \cdot i = 1$

Can you see how the point rotates by 90 degrees around the origin? The imaginary part of a complex number makes it spin.

原点の周りを90度ずつ回転しているのが見えるでしょうか。複素数の虚部は、回転する動きを生み出します。

# Cartesian form
# 直交座標

If we write the multiplication in Cartesian form:

この掛け算をデカルト座標（直交座標）の形で書くと下のようになります。

let $a = a_x + a_yi$ , $b = b_x + b_yi$

$ab = (a_x b_x) + (a_x b_y i) + (a_y b_x i) + (a_y b_y i^2)$

$= (a_x + a_yi)(b_x + b_yi)$

# Polar coordinates
# 極座標

But in polar coordinates, where points are described by their distance from the origin ($r$) and their angle ($\theta$), the relationship is very simple:

極座標を使って点を原点からの距離（$r$）と角度（$\theta$）で表すと、この関係はとてもシンプルになります。

$r_c = r_a \cdot r_b$

$\theta_c = \theta_a + \theta_b$

Try dragging the points $a$ and $b$ in the demo above to see the relationship.

上のデモで点 $a$ と $b$ をドラッグして、この関係を確かめてみましょう。

# Euler's Form
# オイラーの形

Using Euler’s formula can bridge these two ways of seeing complex numbers and write the relationship even simpler. The Euler’s formula looks like:

オイラーの公式を使うと、複素数を捉える2つの考え方を橋渡しでき、関係をよりシンプルに表せます。オイラーの公式は下のような形をしています。

$e^{i\theta} = \cos(\theta) + i\sin(\theta)$  

Using this, we can write any complex number $a$ in Euler's Form:  

これを使えば、どんな複素数 $a$ も**オイラーの形式**で書くことができます。

$a = r_a e^{i\theta_a}$  

When we multiply $a \cdot b$, the rules of exponents ($10^2 \cdot 10^3 = 10^5$) take over:  
$a \cdot b$ を掛け算すると、指数の法則（$10^2 \cdot 10^3 = 10^5$ のように肩の数字を足すルール）が適用されます。

$ab = (r_a e^{i\theta_a}) \cdot (r_b e^{i\theta_b}) = (r_a \cdot r_b) e^{i(\theta_a + \theta_b)}$

Compare this to the polar coordinate above to see that they are saying the same thing.

上の極座標と比べて、これらが同じことを表しているのを確かめましょう。
