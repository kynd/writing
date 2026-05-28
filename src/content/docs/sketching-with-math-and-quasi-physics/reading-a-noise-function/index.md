---
title: "Reading a Noise Function"
---
On this page, we are going to read a simple noise function. Noise functions are one of the most common tools in computer graphics to create complex or realistic patterns like this landscape. Because they are so common, many tools and frameworks give us various implementations of noise functions for free, and we tend to take them for granted without having to understand how they work.

このページでは、シンプルなノイズ関数について解説していきます。ノイズ関数は、この風景のように複雑でリアルなパターンを生成するために使える、コンピューターグラフィックスの基本的なツールの1つです。その汎用性の高さから、多くのツールやフレームワークには様々なノイズ関数の標準で実装されていて、原理を理解しなくても当たり前のように使うことができます。

[Drawing Landscape](/sketching-with-math-and-quasi-physics/drawing-landscape)

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/ZYEVRGN?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

And, we have AI these days. About 50% of my code day-to-day is already written by AI, and I'm totally fine when I know what it is doing. I'm happy not to repeat boilerplate and stuff. But I feel a little anxiety when I use a piece of code I don't fully understand. Sometimes, it is useful to deep dive into something you don’t know and explore until you feel good.

さらに、最近はAIがあります。自分の場合、日常的なコードの50%くらいはすでにAIが書いていて、それが何をしているのか理解できる限り全く問題は感じません。定型的な作業などを繰り返さなくて良いのは幸せです。ですが完全に理解していないコードを使うときには、少し不安になります。時には、知らないことついて深く掘り下げて、納得いくまで探求することも役に立ちます。

For writing this page, I asked an AI to read the example and directly quote the explanations. AI can be a great tool to help you learn, rather than a black box that makes people dumb.

このページではAIにサンプルを読ませ、その説明を直接引用しました。AIは、人々を考えなくするブラックボックスではなく、学習を助ける優れたツールになり得りえます。

> 
> 
> This page (or all of my articles in general) is written for someone like me, who is more visually and scrappy prototyping oriented rather than a trained programmer or mathematician. If you have a computer science degree, this might not be for you.
> 
> このページ（他の記事も）は、コンピューターサイエンスの学位を持つような専門的な技術者や数学者ではなく、自分を含めた見た目やざっくりとしたプロトタイピングを優先する人向けに書かれています。コンピューターサイエンスの学位を持った人にはこのページはあまり参考にならないかもしれません。

# 1D noise function

This is our sample code (written by AI as well). It is a simple [value noise function](/sketching-with-math-and-quasi-physics/taming-randomness) that takes a float number as input and returns another float number.

これがサンプルコードです（これもAIが書きました）。これは単純な[バリューノイズ関数](/sketching-with-math-and-quasi-physics/taming-randomness)で、浮動小数点数を入力として受け取り、別の浮動小数点数を返します。

```glsl

float hash(float n)
{
    // Deterministic pseudo‑random number in [0,1)
    return fract(sin(n) * 43758.5453123);
}

float noise(float x)
{
    // Integer lattice points on either side of x
    float i0 = floor(x);
    float i1 = i0 + 1.0;

    // Fractional position within the cell
    float f  = fract(x);

    // Hash values at the two endpoints
    float a = hash(i0);
    float b = hash(i1);

    // Smoothstep weight for C¹ continuity
    float u = f * f * (3.0 - 2.0 * f);

    // Linear interpolation
    return mix(a, b, u);
}
```

The first step is to visualize the function. The demo below maps the horizontal axis to the range of `x=0.0` to `x=10.0`. The vertical axis, or the height of the white area, represents the return value in the range of 0.0 to 1.0.

まずは関数を可視化してみましょう。下のデモは、横軸が`x=0.0`から`x=10.0`の範囲に対応します。垂直軸、つまり白い領域の高さは、0.0から1.0の範囲での戻り値を表しています。

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/WbbBawy?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

# Lattice points
# 格子点

Let’s break it down. Ok AI, what are the first two lines doing.

分解して見ていきましょう。AIに、最初の2行が何をしているのか聞いてみます。

```glsl
    float i0 = floor(x);
    float i1 = i0 + 1.0;
```

> This lines are **splitting the input** `x` **into two adjacent integer lattice points** that define the “cell” `x` is inside.
> 
> Let’s say `x = 3.42`.
> 
> ```glsl
> i0 = floor(3.42); // → 3.0 (left end of the interval)
> i1 = i0 + 1.0;    // → 4.0 (right end of the interval
> ```
> 
> So `x` is somewhere between `i0 = 3` and `i1 = 4`.
> 
> この行は入力値の`x`を、その値を含む「セル」を定義する**隣接する2つの整数格子点に分割します**。
> 
> `x = 3.42`とした場合を例に見てみましょう。
> 
> ```glsl
> i0 = floor(3.42); // → 3.0 (区間の左端)
> i1 = i0 + 1.0;    // → 4.0 (区間の右端)
> ```
> 
> つまり`x`は`i0 = 3`と`i1 = 4`の間のどこかにあるということです。

In other words, `i0` is the integer number to the left of x and `i1` is to the right.

言い換えると、`i0`はxの左側にある整数の値で、`i1`は右側にある整数の値です。

It also helps to sketch on paper your understanding as you go.

理解を助けるために、紙にスケッチしながら進めていくと良いでしょう。

[![](/images/reading-a-noise-function.jpg)](/images/reading-a-noise-function.jpg)

# Fractional part
# 小数部分

> This line extracts the **fractional part** of `x`. In other words, it gives you how far `x` is between the two integer lattice points:
> 
> <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mi>r</mi><mi>a</mi><mi>c</mi><mi>t</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mi>x</mi><mo>−</mo><mi>f</mi><mi>l</mi><mi>o</mi><mi>o</mi><mi>r</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">fract(x)=x−floor(x)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mord mathnormal">a</span><span class="mord mathnormal">c</span><span class="mord mathnormal">t</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mord mathnormal" style="margin-right:0.01968em;">l</span><span class="mord mathnormal" style="margin-right:0.02778em;">oor</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span></span></span></span>
> 
> If `x = 3.42`:
> 
> ```glsl
> i0 = floor(3.42); // 3.0
> f  = fract(3.42); // 0.42
> ```
> 
> So `f = 0.42` tells you that `x` is **42% of the way** from `i0` to `i1`.
> 
> この行は`x`の**小数部分**を抽出します。つまり、2つの整数格子点の間での`x`の位置を示します：
> 
> <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mi>r</mi><mi>a</mi><mi>c</mi><mi>t</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mi>x</mi><mo>−</mo><mi>f</mi><mi>l</mi><mi>o</mi><mi>o</mi><mi>r</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">fract(x)=x−floor(x)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mord mathnormal">a</span><span class="mord mathnormal">c</span><span class="mord mathnormal">t</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mord mathnormal" style="margin-right:0.01968em;">l</span><span class="mord mathnormal" style="margin-right:0.02778em;">oor</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span></span></span></span>
> 
> `x = 3.42`の場合：
> 
> ```glsl
> i0 = floor(3.42); // 3.0
> f  = fract(3.42); // 0.42
> ```
> 
> つまり`f = 0.42`は、`x`が`i0`から`i1`までの間を**42%進んだ位置**にあることを示しています。

[![](/images/reading-a-noise-function-1.jpg)](/images/reading-a-noise-function-1.jpg)

# Hash
# ハッシュ

```glsl
    float a = hash(i0);
    float b = hash(i1);
```

> The `hash()` function in this code is a **simple pseudo-random number generator**.
> 
> It turns a float input `n` (usually an integer) into a **repeatable random-looking value between 0 and 1**.
> 
> 1.  `sin(n)` maps the number `n` to a float between –1 and 1, in a nonlinear way.
> 
> 2.  Multiply by a big constant (`43758.5453123`) to spread out the result—this gives a wide range of outputs.
> 
> 3.  `fract(...)` takes the fractional part, so the final value is between 0 and 1.  
>     
> 
> この`hash()`関数は**シンプルな疑似乱数生成器**です。`n`という浮動小数点数の入力（通常は整数）を、**0から1の間の再現可能な乱数のような値**に変換します。
> 
> 1.  `sin(n)`は数値`n`を非線形的に-1から1の間の浮動小数点数に変換します。
> 
> 2.  大きな定数（`43758.5453123`）を掛けることで結果を広く分散させ、幅広い出力値を得ています。
> 
> 3.  `fract(...)`は小数部分を取り出すので、最終的な値は0から1の間になります。

So it is basically a pseudo-random function. Then:

つまりこれは疑似的な乱数関数というわけです。

> These two lines:
> 
> ```glsl
> float a = hash(i0);
> float b = hash(i1);
> ```
> 
> generate **pseudo-random values at the two neighboring integer lattice points**—`i0` and `i1`—that surround the input `x`.
> 
> Let’s say your input is `x = 3.42`:
> 
> ```glsl
> i0 = floor(x);      // → 3.0
> i1 = i0 + 1.0;      // → 4.0
> ```
> 
> Then:
> 
> ```glsl
> a = hash(3.0);      // → random value at the left end of the cell
> b = hash(4.0);      // → random value at the right end of the cell
> ```
> 
> These values `a` and `b` are **not truly random**, but they _look_ random and are always the same for the same input. That’s because `hash()` is a **deterministic pseudo-random function**.

The AI rightly touched upon a very important point. The hash function returns exactly the same value for the same input. Because a shader runs its processes in parallel for each pixel, we want the return values of the functions to be consistent across all the processes.

AIはとても大事な点を指摘してくれました。ハッシュ関数は同一の入力に対して必ず同じ値を返します。シェーダーは各ピクセルで並列に処理を実行するため、すべての処理で関数の戻り値が一貫している必要があります。

[![](/images/reading-a-noise-function-2.jpg)](/images/reading-a-noise-function-2.jpg)

Here is the visualization of the `hash` function.

下は`hash`関数を可視化したものです。

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/RNNmEYa?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

# Smoothstep and C¹ continuity
# スムースステップとC¹連続性

```glsl
float u = f * f * (3.0 - 2.0 * f);
```

> This line computes a **smooth interpolation weight** using a **smoothstep function**.
> 
> This is a classic **cubic Hermite polynomial**, often called **smoothstep**:  
> 
> <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>u</mi><mo>=</mo><mn>3</mn><msup><mi>f</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><msup><mi>f</mi><mn>3</mn></msup></mrow><annotation encoding="application/x-tex">u = 3f^2 - 2f^3</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">u</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.0085em;vertical-align:-0.1944em;"></span><span class="mord">3</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1.0085em;vertical-align:-0.1944em;"></span><span class="mord">2</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">3</span></span></span></span></span></span></span></span></span></span></span>  
> 
> It maps the input `f` (from 0 to 1) to another number in \[0, 1\], but with **smoothed acceleration** at the ends. That means:
> 
> -   `u = 0` when `f = 0`
> 
> -   `u = 1` when `f = 1`
> 
> -   **Derivative is 0** at both ends → no sharp corners or sudden jump
> 
> If you just used `mix(a, b, f)` with a linear weight, the transition between `a` and `b` would be continuous but **not smooth**—you'd get noticeable slope changes.  
> 
> Using this `u` instead gives you **C¹ continuity**—both value and slope are smooth across intervals.
> 
> That’s why it’s widely used in **value noise**, **animation easing**, and **procedural shading**.
> 
> この行は**スムースステップ関数**を使用して**滑らかな補間の重み**を計算します。
> 
> これは**三次エルミート多項式**の典型的な例で、**スムースステップ**とも呼ばれています：
> 
> <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>u</mi><mo>=</mo><mn>3</mn><msup><mi>f</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><msup><mi>f</mi><mn>3</mn></msup></mrow><annotation encoding="application/x-tex">u = 3f^2 - 2f^3</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">u</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.0085em;vertical-align:-0.1944em;"></span><span class="mord">3</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1.0085em;vertical-align:-0.1944em;"></span><span class="mord">2</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">3</span></span></span></span></span></span></span></span></span></span></span>
> 
> この関数は入力値`f`（0から1の範囲）を\[0, 1\]の範囲の別の数値に変換しますが、両端で**加速度が滑らかに変化**します。つまり：
> 
> -   `f = 0`のとき`u = 0`
> 
> -   `f = 1`のとき`u = 1`
> 
> -   両端で**導関数が0**となる → 急激な変化や不連続な飛びがない
> 
> もし線形の重みで`mix(a, b, f)`を使用した場合、`a`と`b`の間の遷移は連続的ではあるものの**滑らかではなく**、傾きの変化が目立ってしまいます。
> 
> 代わりにこの`u`を使用することで**C¹連続性**が得られ、値と傾きの両方が区間全体で滑らかになります。
> 
> そのため、この関数は**バリューノイズ**、**アニメーションのイージング**、**プロシージャルシェーディング**で広く使用されています。

This is a visualization of the function. You can ask AI more about what C¹ continuity means, or the following page explains more about the concept of continuity.

下はこの関数を可視化したものです。C¹連続性の意味についてさらにAIに聞いても良いですし、連続性については下記のページでも少し解説しています。

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/LEEoMKE?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

# Linear interpolation
# 線形補間

The last part is just to [interpolate](/sketching-with-math-and-quasi-physics/interpolation-and-animation) the two random values with `u` to smoothly connect them.

最後の部分は、2つのランダムな値なめらかに繋げるために`u`を使って補間しているだけです。

```glsl
  return mix(a, b, u);
```

Here is the final picture of my understanding of the code.

下の図がコードについての最終的な理解を示したものです。

[![](/images/reading-a-noise-function-3.jpg)](/images/reading-a-noise-function-3.jpg)

How was it? I hope this gave you a small taste of what it's like to read and understand code. If you feel comfortable with the simple noise function, try reading this slightly more advanced version from [Drawing Landscape](/sketching-with-math-and-quasi-physics/drawing-landscape).

どうだったでしょう。コードの読み方について何か掴めたでしょうか。このシンプルなノイズ関数に慣れたら、[Drawing Landscape](/sketching-with-math-and-quasi-physics/drawing-landscape)から、もう少し進化したこのバージョンにも挑戦してみてください。

```glsl
vec3 noised(in vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    vec2 u = f * f * (3.0 - 2.0 * f); // smoothstep(f)
    vec2 du = 6.0 * f * (1.0 - f);    // derivative of smoothstep(f)

    float value = mix(a, b, u.x) +
                  (c - a) * u.y * (1.0 - u.x) +
                  (d - b) * u.x * u.y;

    float dx = (b - a) * du.x * (1.0 - u.y) +
               (d - c - b + a) * du.x * u.y;

    float dy = (c - a) * du.y * (1.0 - u.x) +
               (d - b - c + a) * du.y * u.x;

    return vec3(value, dx, dy);
}
```
