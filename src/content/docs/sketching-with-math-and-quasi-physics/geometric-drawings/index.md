---
title: "Geometric Drawings 幾何学ドローイング"
---
Geometric drawings, especially those made using only basic tools such as rulers and compasses, are not only powerful as a means of proof or explanation, but also have a unique charm for just watching and admiring.

幾何学的な作図、特に定規やコンパスといった基本的な道具だけで描かれた図形は、証明や説明の手段としてだけでなく、ただ見ているだけでも独特の魅力があります。

[![](/images/the-first-six-books-of-the-elements-of-euclid-oliver-byrne.jpg)](/images/the-first-six-books-of-the-elements-of-euclid-oliver-byrne.jpg)

**The First Six Books of the Elements of Euclid - Oliver Byrne**

[![](/images/geometric-drawings.gif)](/images/geometric-drawings.gif)

It is easy to draw line segments, circles, etc. in various environments including HTML canvas. However, it is not so easy to draw figures like those in geometry textbooks. Even a simple operation such as drawing a circle around the intersection of two straight lines requires a bit of calculation. The ability to draw a picture and the ability to handle geometry mathematically are two different things. Of course, there are many well-designed libraries out there, but it is also a good learning experience to implement basic functions by yourself. Well it was at least for myself.

HTML Canvasを始めとする様々な環境では簡単に線分や円を描くことができます。ところが幾何学の教科書に出てくるような図形を描くのは意外と難しくて、2直線の交点を中心に円を描くといったシンプルな操作にもちょっとした計算が必要になります。絵を描く機能と数学的に図形を扱う機能は別物なのです。もちろん世の中にはよく出来たライブラリがたくさんあるのですが、自分で基本的な機能を実装してみるのも良い勉強になります（なりました）。

> 
> 
> This page deals only with the two-dimensional [Euclidean space](/sketching-with-math-and-quasi-physics/distance). If you don’t understand this sentence, you can safely ignore it for now.  
>   
> このページでは2次元の[ユークリッド空間](/sketching-with-math-and-quasi-physics/distance)だけを扱います。この注釈の意味が分からなければ無視して大丈夫です。

# Straight lines
# 直線

Let’s first look at straight lines. In geometry, a straight line has no thickness and extends infinitely in both directions. In the real world, you cannot draw a line that extends infinitely or has no thickness, but in mathematics, we deal with ideal, rigorously defined concepts. We need to distinguish between those two.

まずは直線について考えてみましょう。幾何学における直線は太さを持たず、両方向に無限に伸びる図形です。現実の世界では無限に伸びる線や太さを持たない線を描くことはできません が数学では理想的で厳密な概念を扱います。この2つを区別しましょう。

A straight line can be defined by two points or one point and the direction of the line. These two are the same thing, since two points determine the direction from one point to the other.

直線は2つの点か、1つの点と線の向きが決まれば定義できます。点が2つあれば1つの点からもう1つの点への向きが決まるのでこの2つは同じことです。

[![](/images/geometric-drawings.png)](/images/geometric-drawings.png)

The equation of a line is <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi><mi>y</mi><mo>+</mo><mi>c</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding="application/x-tex">ax + by + c = 0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">a</span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">b</span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">c</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span>. Although <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>y</mi><mo>=</mo><mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi></mrow><annotation encoding="application/x-tex">y = ax + b</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">a</span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal">b</span></span></span></span> might be more common and show the slope and intercept better, the former is more versatile since the latter doesn’t work well for a line parallel to the y-axis. The latter can be easily derived from the former.

直線の方程式は <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi><mi>y</mi><mo>+</mo><mi>c</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding="application/x-tex">ax + by + c = 0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">a</span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">b</span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">c</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span> です。<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>y</mi><mo>=</mo><mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi></mrow><annotation encoding="application/x-tex">y = ax + b</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">a</span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal">b</span></span></span></span> の方がよく見かけるし傾きと切片がはっきりわかるのですが、y軸に並行な直線を定義するのにいまいちなので前者を用います。後者は前者から簡単に導くことができます。

Below is a scrappy Line class in Javascript with those concepts above in mind. Although Javascript does not allow multiple constructors, you can call a function like `new ine().fromTwoPoints(...)` to mock constructor override. With this class, a straight line can be 　created in four different ways.

こんなことを考えながらLineクラスを雑にJavascriptで書いてみます。Javascriptではコンストラクタを複数定義することはできませんが、`new Line().fromTwoPoints(...)`のように関数を呼び出せばそれっぽいことができます。このクラスでは4種類の方法で直線を定義することができます。

> 
> 
> Scrappy - This example ignores the error handling, such as invalid arguments and floating point errors.  
> 雑に - この例では不正な引数や浮動小数点に関連する誤差などのエラーの処理を無視しています。

```jsx
class Line {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  fromTwoPoints(p0, p1) {
    let dx = p1.x - p0.x;
    let dy = p1.y - p0.y;
    this.a = dy;
    this.b = -dx;
    this.c = dx * p0.y - dy * p0.x;
    return this;
  }

  fromPointAndAngle(p0, angle) {
    let p1 = {x: p0.x + cos(angle), y: p0.y + sin(angle)};
    return this.fromTwoPoints(p0, p1);
  }

  fromPointAndVector(p0, v) {
    let p1 = {x: p0.x + v.x, y: p0.y + v.y};
    return this.fromTwoPoints(p0, p1);
  }
}
```

Since the definitions alone are useless, let's add a few functions. First, we can test if the line intersects with another line just by comparing slopes. With the definition, ax + by + c = 0, the slope is the ratio of <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>a</mi></mrow><annotation encoding="application/x-tex">a</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">a</span></span></span></span> and <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>b</mi></mrow><annotation encoding="application/x-tex">b</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal">b</span></span></span></span>.

定義だけでは役に立たないのでいくつか機能を加えていきます。まずは2直線の交差判定。無限に伸びる直線は平行でない限りいつかどこかで交わるので傾きを比べるだけです。<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi><mi>y</mi><mo>+</mo><mi>c</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding="application/x-tex">ax + by + c = 0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">a</span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">b</span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">c</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span> で定義された直線の場合、傾きは<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>a</mi></mrow><annotation encoding="application/x-tex">a</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">a</span></span></span></span>と<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>b</mi></mrow><annotation encoding="application/x-tex">b</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal">b</span></span></span></span>の比になります。

```jsx
intersects(o) {
	return this.a * o.b - o.a * this.b != 0.0; 
	// or this.a / this.b != o.a / o.b
}
```

The next is a function to find the intersection of two lines. [I found this formula by searching for "intersection of two lines"](https://www.geeksforgeeks.org/point-of-intersection-of-two-lines-formula/). It can be derived from the ax + by + c = 0 above, but I'll leave the proof to the link.

次に2直線の交点を求める関数を実装します。[「intersection of two lines」で検索したらこの式が見つかりました](https://www.geeksforgeeks.org/point-of-intersection-of-two-lines-formula/)。上のax + by + c = 0を元に導けるのですが証明はリンク先に譲ります。2本の線が平行な場合はundefinedを返すようにします。

_**<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>P</mi><mi>o</mi><mi>i</mi><mi>n</mi><mi>t</mi><mi>o</mi><mi>f</mi><mi>I</mi><mi>n</mi><mi>t</mi><mi>e</mi><mi>r</mi><mi>s</mi><mi>e</mi><mi>c</mi><mi>t</mi><mi>i</mi><mi>o</mi><mi>n</mi><mo stretchy="false">(</mo><mi>x</mi><mo separator="true">,</mo><mi>y</mi><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><mo stretchy="false">(</mo><msub><mi>b</mi><mn>1</mn></msub><mo>×</mo><msub><mi>c</mi><mn>2</mn></msub><mo>−</mo><msub><mi>b</mi><mn>2</mn></msub><mo>×</mo><msub><mi>c</mi><mn>1</mn></msub><mo stretchy="false">)</mo><mi mathvariant="normal">/</mi><mo stretchy="false">(</mo><msub><mi>a</mi><mn>1</mn></msub><mo>×</mo><msub><mi>b</mi><mn>2</mn></msub><mo>−</mo><msub><mi>a</mi><mn>2</mn></msub><mo>×</mo><msub><mi>b</mi><mn>1</mn></msub><mo stretchy="false">)</mo><mo separator="true">,</mo><mo stretchy="false">(</mo><msub><mi>c</mi><mn>1</mn></msub><mo>×</mo><msub><mi>a</mi><mn>2</mn></msub><mo>−</mo><msub><mi>c</mi><mn>2</mn></msub><mo>×</mo><msub><mi>a</mi><mn>1</mn></msub><mo stretchy="false">)</mo><mi mathvariant="normal">/</mi><mo stretchy="false">(</mo><msub><mi>a</mi><mn>1</mn></msub><mo>×</mo><msub><mi>b</mi><mn>2</mn></msub><mo>−</mo><msub><mi>a</mi><mn>2</mn></msub><mo>×</mo><msub><mi>b</mi><mn>1</mn></msub><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">Point of Intersection (x, y) = ((b_1×c_2 − b_2×c_1)/(a_1×b_2 − a_2×b_1), (c_1×a_2 − c_2×a_1)/(a_1×b_2 − a_2×b_1))</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">P</span><span class="mord mathnormal">o</span><span class="mord mathnormal">in</span><span class="mord mathnormal">t</span><span class="mord mathnormal">o</span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mord mathnormal" style="margin-right:0.07847em;">I</span><span class="mord mathnormal">n</span><span class="mord mathnormal">t</span><span class="mord mathnormal">ersec</span><span class="mord mathnormal">t</span><span class="mord mathnormal">i</span><span class="mord mathnormal">o</span><span class="mord mathnormal">n</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">((</span><span class="mord"><span class="mord mathnormal">b</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">c</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">b</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal">c</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span><span class="mord">/</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">b</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal">b</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">c</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">c</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span><span class="mord">/</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">b</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal">b</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">))</span></span></span></span>**_

```jsx
getIntersectionPoint(o) {
    let d = this.a * o.b - o.a * this.b;
    if (d == 0.0) { return undefined; }
    let x = (this.b * o.c - o.b * this.c) / d;
    let y = (o.a * this.c - this.a * o.c) / d;
    return createVector(x, y);
}
```

Lastly, this is a function to draw this line on the screen. Since an infinitely long line can’t be drawn in reality, it creates virtual lines at the top, bottom, left, and right of the drawing area, and determines the ends of the line by finding its intersection with these straight lines. There may be a better way but this seems to work anyway.

最後にこの直線を画面に描画する関数です。無限に長い線は引けないので描画範囲の上下左右に仮想の直線を引き、その直線との交点を求めることで描画する線の両端を決めるようにしました。もう少し良い方法があるかもしれません。

```jsx
draw(rect) {
    if (!rect) { rect = {x:0, y:0, w:width, h:height}}
		const l = rect.x, r = rect.x + rect.w, t = rect.y, b = rect.y + rect.h;
    let l0, l1;
    if (abs(this.a) > abs(this.b)) {
      l0 = new Line().fromTwoPoints({x:l, y:b}, {x:r, y:b});
      l1 = new Line().fromTwoPoints({x:l, y:b}, {x:r,   y:b});
    } else {
        l0 = new Line().fromTwoPoints({x:l, y:b}, {x:l, y:b});
      l1 = new Line().fromTwoPoints({x:r, y:b}, {x:r, y:b});
    }

    let p0 = this.getIntersectionPoint(l0);
    let p1 = this.getIntersectionPoint(l1);
    line(p0.x, p0.y, p1.x, p1.y);
}
```

This demonstrates randomly moving lines and their intersections.

ランダムに動く線とその交点を表示するデモです。

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/jOxwVxr?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

This is a demonstration of two rotating lines and the trace of their intersections. It is amazing to see how an asymmetrical spiral pattern is created from regularly moving straight lines.

回転する2本の直線とその交点の軌跡を描くデモです。規則的に動く直線から非対称な渦巻き模様のようなものが作られる様子が不思議です。

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/XWqgNYz?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

# Line segments
# 線分

[![](/images/geometric-drawings-1.png)](/images/geometric-drawings-1.png)

The next is line segments. A line segment is a piece or part of a line having two endpoints.

次は線分です。線分とは、2つの端点を持つ直線の一部分です。

```jsx
class LineSegment {

 constructor(x0, y0, x1, y1) {
    this.p0 = createVector(x0, y0);
    this.p1 = createVector(x1, y1);
  }

  fromTwoPoints(p0, p1) {
    this.p0 = p0;
    this.p1 = p1;
    return this;
  }
}
```

For later convenience, let’s write a function that extends a line segment to construct a straight line.

後で便利なので、線分を延長して直線を作る関数も用意します。

```jsx
toLine() {
    return new Line().fromTwoPoints(this.p0, this.p1);
}
```

The next step is to detect intersections. First, we create an intersection decision between a line segment and a straight line. A straight line divides a plane into two regions. If the two ends of a line segment are in different regions, the segment intersects the line.

次は交差判定ですが、まずは線分と直線の交差判定を作ります。直線は平面を2つの領域に分割します。この時、ある線分の両端が異なる領域にあればその線分は直線と交差します。

[![](/images/geometric-drawings-2.png)](/images/geometric-drawings-2.png)

Which region a point <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>p</mi></mrow><annotation encoding="application/x-tex">p</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">p</span></span></span></span> lies in with respect to the line dividing the plane can be determined by if the value when substituting the coordinates of point <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>p</mi></mrow><annotation encoding="application/x-tex">p</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">p</span></span></span></span> into the equation of the line is positive or negative. Click on different points on the canvas in the sample below.

ある点<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>p</mi></mrow><annotation encoding="application/x-tex"> p</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">p</span></span></span></span>が平面を分割する直線に対してどちらの領域に存在するかは、直線の方程式に点<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>p</mi></mrow><annotation encoding="application/x-tex">p</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">p</span></span></span></span>の座標を代入した値の正負で判定ができます。下のサンプルで色々な場所をクリックしてみましょう。

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/KKRyvYB?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

Whether two line segments A and B intersect can be determined by repeating the line and line segment intersection test twice.

-   Line segment A converted to a line and line segment B

-   Line segment B converted to a line and line segment A

2つの線分AとBが交差するかどうかは線分と直線の交差テストを2回繰り返せば判定できます。

-   線分Aを直線に変換したものと線分B

-   線分Bを直線に変換したものと線分A

If two line segments are found to intersect, their intersection is the intersection of those transformed into lines.

2つの線分が交差することがわかれば、その交点はそれぞれを直線に変換したものの交点になります。

```jsx
intersects(o) {
  if (o instanceof Line) {
    let t0 = o.a * this.p0.x + o.b * this.p0.y + o.c;
    let t1 = o.a * this.p1.x + o.b * this.p1.y + o.c;
    return t0 * t1 < 0; // minus only when t0 and t1 have different signs
  } else if (o instanceof LineSegment) {
    return this.intersects(o.toLine()) && o.intersects(this.toLine());
  }
  return undefined;
}

getIntersectionPoint(o) {
  if (o instanceof Line) {
    if (!this.intersects(o)) { return undefined; }
    return o.getIntersectionPoint(this.toLine());
  } else if (o instanceof LineSegment) {
    if (!this.intersects(o)) { return undefined; }
    return o.toLine().getIntersectionPoint(this.toLine());
  }
  return undefined;
}
```

This demonstrates randomly moving line segments and their intersections.

ランダムに動く線分とその交点を表示するデモです。

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/qmLJVe?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

# Circle
# 円

A circle can be defined with a center and radius, a center and one point on the circumference, or three points on the circumference. How to determine a circle with three points is a bit complicated. Below is a Youtube link I found.

円は中心と半径、中心と円周上の1点、または円周上の3点があれば定義できます。3点で円を決める方法はちょっと複雑なのでYoutubeのリンクを貼っておきます。

[https://www.youtube.com/watch?v=4yCyWCGKiYY](https://www.youtube.com/watch?v=4yCyWCGKiYY)

```jsx
class Circle {
  constructor(x, y, radius) {
    this.center = createVector(x, y);
    this.radius = radius;
  }

  fromCenterAndRadius(center, radius) {
    this.center = center;
    this.radius = radius;
    return this;
  }

  fromCenterAndPoint(center, p) {
    this.center = center;
    this.radius = center.dist(p);
    return this;
  }

  fromThreePoints(p0, p1, p2) {
    let x = ((p0.y - p2.y) * (p0.y * p0.y - p1.y * p1.y + p0.x * p0.x - p1.x * p1.x)
                    - (p0.y - p1.y) * (p0.y * p0.y - p2.y * p2.y + p0.x * p0.x - p2.x * p2.x))
                    / (2 * (p0.y - p2.y) * (p0.x - p1.x)
                    - 2 * (p0.y - p1.y) * (p0.x - p2.x));

    let y = ((p0.x - p2.x) * (p0.x * p0.x - p1.x * p1.x + p0.y * p0.y - p1.y * p1.y)
                    - (p0.x - p1.x) * (p0.x * p0.x - p2.x * p2.x + p0.y * p0.y - p2.y * p2.y))
                    / (2 * (p0.x - p2.x) * (p0.y - p1.y) - 2 * (p0.x - p1.x) * (p0.y - p2.y));
    this.center = createVector(x, y);
    this.radius = this.center.dist(p0);
    return this;
  }
}
```

Let’s define intersections of a circle and a line or line segment. The part that calculates the `d` is the intersection test, and the circle and line have two interceptions if `d > 0`, just one if `d == 0`, or none if `d < 0`.

円と直線、線分の交点も定義しておきます。`d` の求める部分が交差テストになっていて、直線と円は `d > 0` であれば2点、`d == 0` であれば1点で交差し、`d < 0` であれば交差なしになります。

```jsx
getIntersectionPoints(o) {
    let points = [];
    if (o instanceof Line) {
      let l = o.a * o.a + o.b * o.b;
      let k = o.a * this.center.x + o.b * this.center.y + o.c;
      let d = l * this.radius * this.radius - k * k;
      if (d > 0) {
        let ds = sqrt(d);
        let apl = o.a / l;
        let bpl = o.b / l;
        let xc = this.center.x - apl * k;
        let yc = this.center.y - bpl * k;
        let xd = bpl*ds;
        let yd = apl*ds;
        points.push(createVector(xc - xd, yc + yd));
        points.push(createVector(xc + xd, yc - yd));
      } else if (d == 0) {
        points.push(createVector(this.center.x - o.a / l, this.center.y - o.b * k / l));
      }
    } else if (o instanceof LineSegment) {
      let l = o.toLine();
      let temp = [];
      temp = this.getIntersectionPoints(l, this);
      for (let i = 0; i < temp.length; i ++) {
        let d0 = (o.p0.copy().sub(o.p1)).dot(temp[i].copy().sub(o.p1));
        let d1 = (o.p1.copy().sub(o.p0)).dot(temp[i].copy().sub(o.p0));
        if (d0 >= 0 && d1 >= 0) points.push(temp[i]);
      }
    }
    return points;
  }
```

This is a demonstration of drawing a circle based on three random points.

ランダムな3点を元に円を描くデモです。

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/pPqxaV?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

# Circle, Triangle and various centers
# 円と三角形、様々な中心

Now that we have line, line segment, and circle, it’s time to make drawings as if we were using a ruler and compass.

The diagrams showing the relationship between circles and triangles are very to look at in Euclid's Elements. Triangles have many different centers, and the [Encyclopedia of Triangle Centers](https://faculty.evansville.edu/ck6/encyclopedia/ETC.html) has 51,475 different centers registered as of July 15, 2022. I don't know what that means to be honest, but let’s draw some typical ones for fun.

直線と線分、円ができたので、定規とコンパスを使うように色々な作図をしてみましょう。

円と三角形の関係を示した図はユークリッドの原論の中でも見ていて楽しいものです。三角形には様々な中心があり、[Encyclopedia of Triangle Centers](https://faculty.evansville.edu/ck6/encyclopedia/ETC.html)には2022年7月15日の時点で、51,475種類の中心が登録されているそうです。ちょっと何を言っているのかわかりませんがいくつか代表的なものを描いてみます。

Here are a few new functions to find a perpendicular line from a point to a straight line, the midpoint and perpendicular bisector of a line segment.

ある点から直線への垂線、線分の中点と垂直二等分線を求める機能を追加しておきます。

```jsx
// Line
getPerpendicular(p) {
  return new Line(this.b, -this.a, this.a * p.y - this.b * p.x);
}

// Line segment
getBisection() {
  let o = this.getMidPoint();
  return this.toLine().getPerpendicular(o);
}

getMidPoint() {
  return this.p0.copy().add(this.p1).mult(0.5);
}
```

### Circumcircle and Circumcenter
### 外接円と外心

**Circumcircle:** The circle that passes through three vertices of a triangle.

**Circumcenter:** The center of the circumcircle. The intersection of the perpendicular bisectors of a triangle.

**外接円:** 三角形の3つの頂点を通過する円。

**外心:** 外接円の中心。三角形の各辺の垂直二等分線の交点でもあります。

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/xdNwBv?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

### Incircle and Incenter
### 内接円と内心

**Incircle:** The circle tangent to the three sides of a triangle.

**Incenter:** The center of the incircle. The intersection of angle bisectors of a triangle.

**内接円:** 三角形の3辺に接する円。

**内心:** 内接円の中心。三角形の各角の二等分線の交点。

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/LyopoV?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

### Excircles and Excenters
### 傍接円と傍心

**Excircle:** The circle tangent to one of a triangle's sides and to the extensions of the other two.

**Excenter:** The center of an excircles. Points where the external angle bisectors of a triangle intersect.

**傍接円:** 三角形の辺の1つと、他の2つの辺の延長線に接する円。

**傍心:** 傍接円の中心。三角形の外角の二等分線が交差する点。

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/dWEGYX?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

### Orthocenter
### 垂心

The intersection of the altitudes drawn from the vertices of the triangle to the opposite sides.

三角形の3つの頂点から対辺に引いた三本の垂線の交点。

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/gWJPax?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

### Centroid
### 重心

The arithmetic mean position of all the points in a shape. The centroid of a triangle is the intersection of its three medians.

ある図形内のすべての点の平均。三角形の重心は3つの中線の交点です。

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/qmGbbO?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

# Other drawings
# その他

Source of the GIF image at the beginning of this article

冒頭のGIF画像のソース

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/xrOMbO?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

A few drawings based on geometry.

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/WjLazX?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/vmvVrG?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/MmZPXq?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

### Reuleaux Triangle
### ルーローの三角形

A Reuleaux triangle can rotate within a square while touching all four sides of a square.This actually has little to do with the other examples on this page, but I'm leaving it here just because it looks geometric and fun.

ルーローの三角形は、正方形の4辺すべてに接したまま回転することができます。　実はこれは他の例とはあまり関係がないのですが、幾何学的でかつ楽しいのでここに残しておきます。

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/NjVxxM?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>
