---
title: "Complex Exponentiation 複素数の累乗"
slug: complex-exponentiation
---
<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="GgjBMaP" data-user="kynd" data-preview="true"></p></div>

If [complex multiplication](/complex-multiplication) is a spin and a stretch, then Complex Exponentiation ($a^b$) is a spiral.

複素数の掛け算が回転と伸縮だとすれば、複素数の累乗（$a^b$）は螺旋になります。

Let’s start with simple examples using positive integer exponents. When we calculate $a^2$ or $a^3$, we apply the spin-and-stretch repeatedly. Each multiplication scales the magnitude and adds to the angle. You can picture this as tracing a spiral path. If we use real numbers as exponents, the spiral becomes continuous.

まずは、正の整数指数の簡単な例から始めましょう。$a^2$ や $a^3$ を計算するときは、回転と伸縮を繰り返し適用しています。掛け算のたびに大きさは拡大・縮小し、角度は加算されます。これは、螺旋状の軌跡をたどるイメージで捉えられます。指数を実数にすると、その螺旋は連続になります。

# Complex exponent formula
# 複素数の累乗の公式

Extending this to complex exponents is a little mind-boggling. It is not intuitive to picture what it means to raise a number to a complex power. [Euler’s formula](/complex-multiplication) helps here as well.

これを複素数指数にまで拡張すると、少し（あるいはかなり）頭が混乱します。数を複素数乗するとはどういう意味かを直感的に思い描くのは難しいです。ここでもオイラーの公式が助けになります。

By definition, the natural logarithm ($\ln$) and the exponential function ($e^x$) are inverses of each other. This means that any positive number $x$ can be rewritten as:

定義より、自然対数（$\ln$）と指数関数（$e^x$）は互いに逆関数です。つまり、任意の正の数 $x$ は次のように書き換えられます：

$x = e^{\ln(x)}$

If we replace $x$ with our base $a$, we get:

$x$ を底 $a$ に置き換えると、次のようになります：

$a = e^{\ln(a)}$

So $a^b$ can be written as:

$a^b$ は次のように書けます：

$a^b = \left( e^{\ln(a)} \right)^b = e^{b \cdot \ln(a)}$

# Applying the formula
# 公式を適用する

This form works very nicely with complex numbers as well. Here is how you can use it.

この形は複素数に対してもとても都合よく働きます。以下がその使い方です。

First, we convert the base $a$ into its polar form ($r_a$ and $\theta_a$)

まず、底 $a$ を極形式（$r_a$ と $\theta_a$）に変換します。

**Magnitude (**$r_a$**):** $\sqrt{a_x^2 + a_y^2}$

**Angle (**$\theta_a$**):** $\operatorname{atan2}(a_y, a_x)$

Then the logarithm of $a$ is:

すると、$a$ の対数は次のようになります：

$\ln(a) = \ln(r_a) + i\theta_a$

So the exponent in the formula is:

したがって、公式の指数部分は次のようになります：

$b \cdot \ln(a) = (b_x + b_yi) \cdot (\ln(r_a) + i\theta_a)$

**Real Part (**$R$**):** $b_x \ln(r_a) - b_y \theta_a$

**Imaginary Part (**$I$**):** $b_x \theta_a + b_y \ln(r_a)$

Plugging this back into the formula

これを公式に戻して代入すると：

$c = e^{R+iI} = e^R \cdot e^{iI} = e^R \cdot (\cos(I) + i\sin(I))$

# Intuition
# 直感的に捉える

If you look at $R$ and $I$ above, you can see how both parts are intertwined in complex exponentiation. The real part ($R$), which controls size, is not just affected by the real part of the exponent ($b_x$). It is also shrunk or grown by the angle of the base ($a$) multiplied by the imaginary part of the exponent ($b_y$). The imaginary part ($I$), which controls spin, is not just affected by the angle of the base. It is also rotated by the size of the base ($\ln r_a$).

$R$ と $I$ を見ると、複素数の累乗ではこの2つが絡み合っていることが分かります。サイズを決める実部（$R$）は、指数の実部（$b_x$）だけで決まるのではありません。底（$a$）の角度に指数の虚部（$b_y$）を掛けたものによっても縮んだり大きくなったりします。同様に、回転を決める虚部（$I$）は底の角度だけでなく、底の大きさ（$\ln r_a$）によっても回転（位相）が変わります。

In the demo, try moving $a$ and $b$ to see this in action. To help, it draws the spiral from the original base, interpolating the exponent from $1 + 0i$ (which does nothing) to the selected value of $b$.

デモでは、$a$ と $b$ を動かして挙動を確認してみてください。補助として、元の底から螺旋を描き、指数を $1 + 0i$（何もしない）から選択した $b$ の値へ補間しながら表示しています。
