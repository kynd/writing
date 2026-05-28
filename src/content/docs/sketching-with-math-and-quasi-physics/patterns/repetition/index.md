---
title: "Repetition 繰り返し"
---
At the basis of patterns is repetition. We recognize patterns because the same thing happens again and again. What "the same" means can vary to a great extent though. Sometimes it's as simple as counting numbers, 1, 2, 3, 1, 2, 3. If you think about how your days go, or seasons; no two days are exactly the same, but there is a clear sense of repetition and patterns. Some patterns are even more abstract. For example, many stories from folklore to Star Wars episodes follow similar patterns. Christopher Booker argued there are [s](https://en.wikipedia.org/wiki/The_Seven_Basic_Plots)[even basic plots in his book](https://en.wikipedia.org/wiki/The_Seven_Basic_Plots).

パターンの大元には繰り返しがあります。人は同じことが何度も起こるのとパターンを認識するのです。しかし、この「同じ」が持つ意味には、非常に大きな幅があります。1, 2, 3, 1, 2, 3と数を数えるように単純な場合もあるでしょう。一方、日々の過ごし方や季節について考えたると、2つの日がまったく同じことはないのに、そこには明確な繰り返しとパターンの感覚があります。もっと抽象的なパターンもあります。たとえば、民間伝承からスターウォーズのエピソードまで、多くの物語には繰り返される類似のパターンがあります。Christopher Bookerは彼の本の中で[基本的な物語のプロットには7種類ある](https://en.wikipedia.org/wiki/The_Seven_Basic_Plots)と主張しました。

What we will look at on this page are the numerical and mathematical ways of creating repetitions that you can use to sketch in code, starting from the very basic 1, 2, 3, example.

このページでは、基本的な1, 2, 3の例に始まり、コードを用いたスケッチに使える、数値的、数学的に繰り返しを作り出す方法を見ていきます。

# Modulo モジュロ

You can use modulo to create a repeating sequence of numbers. Modulo is basically a mathematical way of saying "count to <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>n</mi></mrow><annotation encoding="application/x-tex">n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">n</span></span></span></span> then go back to one and repeat". Think of a drum pattern in which the kick drum strikes every four beats, or the days of the week that repeat every seven days. Repeating numbers can represent different things.

繰り返しの数列を作るにはあなたはモジュロが使えます。モジュロは簡単にいうと「<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>n</mi></mrow><annotation encoding="application/x-tex">n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">n</span></span></span></span>まで数えたら1に戻り繰り返す」ことを数学的に表す方法と言えます。4拍ごとのキックドラムが鳴るドラムパターンや、曜日が7日ごとに繰り返す様子を思い浮かべてください。繰り返す値はさまざまなものを表現することができます。

To calculate a modulo, you can divide a number with another number and take the remainder.

モジュロを計算するには、ある数を別の数で割り、その余りを取ります。

<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>4</mn><mspace></mspace><mspace width="0.6667em"></mspace><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">d</mi></mrow><mtext> </mtext><mtext> </mtext><mn>2</mn><mo>=</mo><mn>0</mn></mrow><annotation encoding="application/x-tex">4 \mod 2 = 0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">4</span><span class="mspace allowbreak"></span><span class="mspace" style="margin-right:0.6667em;"></span></span><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord"><span class="mord"><span class="mord mathrm">mod</span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">2</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span>

<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>5</mn><mspace></mspace><mspace width="0.6667em"></mspace><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">d</mi></mrow><mtext> </mtext><mtext> </mtext><mn>4</mn><mo>=</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">5 \mod 4 = 1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">5</span><span class="mspace allowbreak"></span><span class="mspace" style="margin-right:0.6667em;"></span></span><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord"><span class="mord"><span class="mord mathrm">mod</span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">4</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span>

<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>17</mn><mspace></mspace><mspace width="0.6667em"></mspace><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">d</mi></mrow><mtext> </mtext><mtext> </mtext><mn>7</mn><mo>=</mo><mn>3</mn></mrow><annotation encoding="application/x-tex">17 \mod 7 = 3</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">17</span><span class="mspace allowbreak"></span><span class="mspace" style="margin-right:0.6667em;"></span></span><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord"><span class="mord"><span class="mord mathrm">mod</span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">7</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">3</span></span></span></span>

You can also imagine it as a circle like a clock. Instead of a number line extends towards infinity, you circle around and return to the same point after <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>n</mi></mrow><annotation encoding="application/x-tex">n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">n</span></span></span></span> steps. The modulo operation relates two numbers based on their division remainder. For instance, the days of the week operate in mod 7. You can say that 8 and 15 are equivalent modulo 7, which means that the 8th and 15th of the same month fall on the same day of the week. Or, the keys on a piano are in mod 12, which means if you go up or down from a certain note (let's say C), you come to the same note after 12 half-note steps. In $a \\mod n$, $a$ is called the "dividend" and $n$ is called the "modulus".

時計のような円を思い浮かべてもようでしょう。無限に向かって伸びていく数直線ではなく、<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>n</mi></mrow><annotation encoding="application/x-tex">n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">n</span></span></span></span>ステップ後に同じ点に戻る円を考えます。モジュロ演算は2つの数値を、割り算の余りに基づいて関連付けます。例えば、週の曜日は mod 7 です。mod 7では8 と15 が同じ値になりますが、これは、同じ月の8日と15日が同じ曜日になることを意味します。ピアノの鍵盤はmod 12で、これはある音（例えばド）から初めて上か下に進むと半音12個で同じ音に戻ってくることを表します。

<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>a</mi><mspace></mspace><mspace width="0.6667em"></mspace><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">d</mi></mrow><mtext> </mtext><mtext> </mtext><mi>n</mi></mrow><annotation encoding="application/x-tex">a \mod n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">a</span><span class="mspace allowbreak"></span><span class="mspace" style="margin-right:0.6667em;"></span></span><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord"><span class="mord"><span class="mord mathrm">mod</span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">n</span></span></span></span>の<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>a</mi></mrow><annotation encoding="application/x-tex">a</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">a</span></span></span></span>は「被除数」と呼ばれ、<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>n</mi></mrow><annotation encoding="application/x-tex">n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">n</span></span></span></span>は「除数」と呼ばれます。

> 
> 
> 数学の本では、mod 7で8と15が同じ値になることを「8と15は7を法として等しい」、「7の方では8と15は等しい」などと言います。

[![](/images/repetition.png)](/images/repetition.png)

In Javascript, you can use `%` for modulo. For example, <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>4</mn><mspace></mspace><mspace width="0.6667em"></mspace><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">d</mi></mrow><mtext> </mtext><mtext> </mtext><mn>2</mn></mrow><annotation encoding="application/x-tex">4 \mod 2</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">4</span><span class="mspace allowbreak"></span><span class="mspace" style="margin-right:0.6667em;"></span></span><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord"><span class="mord"><span class="mord mathrm">mod</span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">2</span></span></span></span> can be written as `4 % 2`.

JavaScriptでは、`%`を使用ってモジュロを計算できます。例えば、<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>4</mn><mspace></mspace><mspace width="0.6667em"></mspace><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">d</mi></mrow><mtext> </mtext><mtext> </mtext><mn>2</mn></mrow><annotation encoding="application/x-tex">4 \mod 2</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">4</span><span class="mspace allowbreak"></span><span class="mspace" style="margin-right:0.6667em;"></span></span><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord"><span class="mord"><span class="mord mathrm">mod</span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">2</span></span></span></span>は`4 % 2`と書けます。

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/PwwgbQx?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

> 
> 
> Be careful that `%` is not exactly the same as modulo. `**%**` returns negative results for negative input numbers; for example, while <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>5</mn><mspace></mspace><mspace width="0.6667em"></mspace><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">d</mi></mrow><mtext> </mtext><mtext> </mtext><mn>2</mn></mrow><annotation encoding="application/x-tex"> 5 \mod 2</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">5</span><span class="mspace allowbreak"></span><span class="mspace" style="margin-right:0.6667em;"></span></span><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord"><span class="mord"><span class="mord mathrm">mod</span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">2</span></span></span></span> is 1 in math, `**-5 % 2**` returns `**-1**`. To work around this, you can either add a multiple of the modulus to the dividend to ensure it is positive, or add the modulus to the result if the initial result is negative.  
>   
> 厳密には`％`はモジュロと異なるので注意してください。`％`は負の入力に対して負の値を返します。たとえば、数学では <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>5</mn><mspace></mspace><mspace width="0.6667em"></mspace><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">d</mi></mrow><mtext> </mtext><mtext> </mtext><mn>2</mn></mrow><annotation encoding="application/x-tex">5 \mod 2</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">5</span><span class="mspace allowbreak"></span><span class="mspace" style="margin-right:0.6667em;"></span></span><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord"><span class="mord"><span class="mord mathrm">mod</span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">2</span></span></span></span> は1ですが、`-5 ％ 2`は `-1`を返します。被除数に除数の倍数を足して正の値にするか、結果が負の場合に除数を足すことでこれを修正することができます。

The demo below arranges different modulos in order from mod 1, mod 2, to mod 3, etc. The cells with a value of 0 are filled in black.

以下のデモでは、mod 1、mod 2、mod 3などの異なるモジュロを順番に並べて、値が0のセルを黒で塗りつぶされています。

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/NWmbeQz?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

The demo from the [resolution page](/sketching-with-math-and-quasi-physics/resolution) uses modulo to create repeating drum patterns. Click on the canvas to toggle between different beats.

[解像度のページ](/sketching-with-math-and-quasi-physics/resolution)のデモでは、ドラムパターンの繰り返すためにモジュロを使っています。キャンバスをクリックするとビートを切り替えることができます。

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/jOJLoRP?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

# Repetition of Continuous Numbers 連続する値の繰り返し

The modulo is a great way for creating a repetition of discrete numbers. Then a natural next step would be to think of a continuous version of the idea. A simple way to do this is by taking the fractional part of a continuously increasing number. In Javascript this can be easily implemented as below.

モジュロは、離散的な数の繰り返しを作る方法でした。自然な流れとして、この考え方を連続的な値に当てはめてみましょう。簡単な方法は、連続的に増加する数値の小数部分を取ることです。Javascriptでは、以下のように簡単に実装できます。

```jsx
function fract(x) {
    return x - Math.floor(x);
}
```

or in mathematical notation, you can write this as:

数学の記法では下のように書くことができます。

<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi><mo>−</mo><mo stretchy="false">⌊</mo><mi>x</mi><mo stretchy="false">⌋</mo></mrow><annotation encoding="application/x-tex">x - \lfloor x \rfloor</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">⌊</span><span class="mord mathnormal">x</span><span class="mclose">⌋</span></span></span></span>

With this function, you can obtain a series of repeating numbers between 0 and 1 (0 ≤ x < 1) at any

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/zYXwvGv?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

. If you want a different range, you can easily adjust it by multiplying the number to scale, or adding a number to shift. Take a look at the graph below to see what this does.

この関数を使用すると、任意の

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/zYXwvGv?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

で0から1までの（0 ≤ x < 1）の値を繰り返す数列が得られます。異なる範囲の値が必要なら、掛け算を用いて拡大縮小したり、足し算を使って範囲をずらすなど簡単に調整できます。この手法で何ができるか、下のグラフで実際に見てみましょう。

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/zYXwvGv?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

This may not very look interesting by itself, but the point is that you can use these repeating numbers as a basis to create more complex shapes and patterns. For example, you can apply different [easing function](/sketching-with-math-and-quasi-physics/interpolation-and-animation) to deform the shape of the slopes.

これだけだと対して面白くないかもしれませんが、重要なのはこの繰り返しの数が、より複雑な形状やパターンを作る基として使えることです。例えば、様々な[イージング関数](/sketching-with-math-and-quasi-physics/interpolation-and-animation)を用いてスロープの形を変形できます。

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/poBPjbX?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

And wrap it around a shape, for example a circle.

これを何かの形、例えば円の周りに巻きつけてみましょう。

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/gOyWamK?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

You can use various functions to create different shapes, or use the data to drive anything, such as the gradient of colors or motion. Below are some additional examples of functions that you can use for deformation.

さまざまな関数を使って異なる形を作成したり、色のグラデーションやアニメーションなど、どんなものにもデータを当てはめることで、様々な応用が考えられます。下は変形に使える関数の追加の例です。

[![](/images/repetition-1.png)](/images/repetition-1.png)

> 
> 
> These functions are illustrated for the range between - 1 and 1, while `fract()` returns the value of 0 ≤ x < 1. But you can easily map the number with `(x - 0.5) * 2` or, in general, to any range between `a` and `b` with `a + x * (b - a)`.  
> これらの関数は-1から1の範囲で描かれていますが、`fract()`が返す値は 0 ≤ x < 1 です。 式`x * 2 - 1`を使うとこれを簡単にマッピングできます。より一般には、`a`から`b`の任意の範囲に対して、`a + x * (b - a)`が使えます。

# Sine waves サイン波

Another way to create a repeating pattern of continuous numbers is to use the sine function. We have seen many examples talking about wave and sound (wave is one of the most canonical example of a pattern we see in nature)

連続した値の反復パターンを作るには、サイン関数を使うこともできます。これについては、波や音について調べる際に多くの例を取り上げました（波は自然界で見られるパターンの最も典型的な例の一つです）。

[Sine waves and Additive Synthesis サイン波と加算合成](/sketching-with-math-and-quasi-physics/wave/sine-waves-and-additive-synthesis)

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/mwbWwJ?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

The example below uses the sine function to draw a 2D pattern. It multiplies two sine waves along the x-axis and y-axis, then applies another sine function to threshold the value. This makes the pattern oscillate between a solid checker pattern and a blurry gradient.

下の例では、サイン関数を用いて2次元のパターンを描いています。x軸とy軸に沿って2つのサイン波を掛け合わせ、その後に別のサイン関数を出力のための閾値として適用します。これによりパターンははっきりとしたチェック模様とぼんやりしたグラデーションの間を行ったり来たりします。

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/VwNbvXQ?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

After all, what you get from these methods are just sequences of repeating numbers, and there are infinite possibilities about how to use them. Be creative and explore different ideas.

究極のところ、これらの方法は繰り返しの数列り出すだけなので、使い道にはについては無限の可能性があります。創造力を持って様々なアイデアを試してみましょう。

Just as examples, try thinking about how you could use visualize and animate following motifs.

例えば、下のモチーフをどのように視覚化したり、アニメーションできるか考えてみましょう。

-   A stop-frame animation or a character that repeats finite frames

-   A heartbeat with a line that rhythmically pulsates

-   A day-to-night cycle of the sky

-   Kaleidoscopic graphics that repeat patterns around the center

-   A wallpaper pattern that consists of multiple tiles

-   数フレームを繰り返すだけのコマ撮りキャラクターアニメーション

-   リズミカルに脈打つ心電図のライン

-   昼と夜を繰り返す空

-   中心軸の周りにパターンを繰り返す万華鏡のようなグラフィック

-   複数のタイルで構成される壁紙のパターン

On the next page, we will explore how to repeat shapes or divide a space into shapes to create graphical patterns.

次のページでは、形を繰り返したり、空間を形状に分割してグラフィカルなパターンを作成する方法について見ていきます。

[Tiling タイリング](/sketching-with-math-and-quasi-physics/patterns/tiling)
