---
title: "Various Color Models 様々なカラーモデル"
slug: various-color-models
---
## RGB on devices
## デバイス上でのRGB

The values we usually use on devices and in coding can be thought of as a specific range that can be reproduced on the actual device cut out from the XYZ color space.

デバイス上やコーディングで普段使う数値は、XYZ色空間から実際の機器で再現できる特定の範囲を切り出したものと考えることができます。

When expressing color with numbers, it is crucial to understand what they represent. If CIE RGB and XYZ are absolute values independent from devices, the RGB values that we normally use are local values set for each device.

色を数値で表す際にはその値が何を表しているのかを理解することが重要です。CIE RGBやXYZが機器に左右されない、ある意味絶対的な数値だとすれば、普段使うRGBは機器ごとに設定されたローカルな値です。

If we map the darkest color (black), brightest color (white), and the purest red, green, and blue that a device can represent to XYZ values, we get a hexahedron in the XYZ color space. All 8 vertices — black, white, red, green, blue, magenta, cyan, and yellow — are needed, though magenta, cyan, and yellow can be calculated from the other colors.

あるデバイスが表現できる最も暗い色（黒）、明るい色（白）、最も純粋な赤、緑、青をXYZの値に対応させると、XYZ色空間の中に六面体ができます（頂点が8つ必要ですが、残りのマゼンタ、シアン、イエローは他の色から計算することができます）。

[![](/images/various-color-models.png)](/images/various-color-models.png)

<div></div>

Technically we can crop any range, but we don't want the results to vary from device to device. Standards such as sRGB and AdobeRGB define which range of XYZ the RGB values correspond (or should correspond) to. If a device uses sRGB, it means that the RGB values on the device are adjusted to be as close as possible to the XYZ values defined by the standard.

どんな範囲を切り取ることもできますがデバイスによって結果がバラバラだと困るので、sRGBやAdobeRGBなどの標準によってRGBの値がXYZのどの範囲に相当する（べき）かが定義されています。あるデバイスがsRGBを採用しているということは、そのデバイス上でのRGB値が標準で定められたXYZの値にできる限り近づくよう調整されているということです。

If devices are set to use a different standards, or if they are not calibrated correctly, a same set of RGB values will produce different colors.

RGB値が同じでもデバイスが違う標準を使うように設定されていたり、正しくカリブレーションされていなければ違う色が出力されることになります。

Most devices use the sRGB created in 1996 or similar color space. Many of modern devices can actually display much wider ranges of colors, but they seem to default to the older standard for compatibility.

多くのデバイスは1996年に作られたsRGBかそれに近い色空間を使っています。現在のデバイスの多くはもっと広い範囲の色を表示できるのですが、互換性のために古い標準をデフォルトとしているようです。

If we cut out the range of sRGB from the XYZ cube, it looks like this.

sRGBの範囲をXYZの立方体から切り出すとこんな感じになります。

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="dPbJbyB" data-user="kynd" data-preview="true"></p></div>

Seeing this as a cube, it looks like this.  

これを立方体として捉えるとこうなります。

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="wBwpwBo" data-user="kynd" data-preview="true"></p></div>

[![](/images/various-color-models-1.png)](/images/various-color-models-1.png)

<div></div>

sRGB and XYZ can be converted as follows.

sRGBとXYZは下記のように変換できます。

$\begin{bmatrix}R \\ G \\ B\end{bmatrix} = \begin{bmatrix} 3.2404542 & -1.5371385 & -0.4985314 \\ -0.9692660 &  1.8760108 & 0.0415560         \\ 0.0556434         &  -0.2040259         & 1.0572252 \end{bmatrix} \begin{bmatrix}X \\ Y \\ Z\end{bmatrix}$

$\begin{bmatrix}X \\ Y \\ Z\end{bmatrix} = \begin{bmatrix} 0.4124564 & 0.3575761 & 0.1804375 \\ 0.2126729 & 0.7151522 & 0.0721750 \\ 0.0193339 & 0.1191920 & 0.9503041 \end{bmatrix} \begin{bmatrix}R \\ G \\ B\end{bmatrix}$

Since sRGB is gamma-corrected, when moving to XYZ, the values must be converted to linear values before applying the formula above. [Let me delegate the explanation to Wikipedia](https://en.wikipedia.org/wiki/SRGB#Transfer_function_\(%22gamma%22\)) since it can be pretty long.

sRGBはガンマ補正がかかっているので、XYZに変換する場合は上の式を適用する前にリニアな値に変換する必要があります。説明は長くなるので[Wikipediaにリンクしておきます](https://en.wikipedia.org/wiki/SRGB#Transfer_function_\(%22gamma%22\))。

Strictly speaking, the conversion looks like this for each RGB value.

厳密にやるとRGBの各値について下記の様になります。

$C_{sRGB} = \begin{cases} 12.92 C_{linear} (C_{linear} \le 0.0031308) \\ 1.055 C_{linear} ^ {1/2.4}(C_{linear} &gt; 0.0031308) \end{cases}$

$$C_{linear} = \begin{cases}
\dfrac{C_{sRGB}}{12.92}, & \text{if } C_{sRGB} \leq 0.04045 \\
\left(\dfrac{C_{sRGB} + 0.055}{1.055}\right)^{2.4}, & \text{if } C_{sRGB} > 0.04045
\end{cases}$$

They are often approximated by the following equations (I used this one on the demos on this page).

下記の式で近似することも多い様です（このページのデモではこちらを使っています）。

$C_{sRGB} = C_{linear}^{1/2.2}$

$C_{Linear} = C_{sRGB}^{2.2}$

You can find conversions between XYZ and other various RGB standards here.

XYZと様々なRGBとの変換はここに一覧がまとまっています。

<div class="bookmark-card"><a href="http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html" target="_blank" rel="noopener" class="bookmark-link"><div class="bookmark-info"><div class="bookmark-title">Welcome to Bruce Lindbloom's Web Site</div><div class="bookmark-description">Interesting things for digital imaging and color science.</div><div class="bookmark-url"><img src="http://www.brucelindbloom.com/favicon.ico" class="bookmark-favicon" alt="" onerror="this.style.display='none'"><span>http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html</span></div></div></a></div>

# Munsell color system
# マンセル表色系

While RGB is direct and convenient because it matches the device mechanism, it is not the most straightforward way to describe colors. It is often not very easy to imagine what color an RGB value represents.

RGBはデバイスの仕組みと一致しているので直接的で便利ですが、色を説明する方法としてはあまり分かりやすいとはいえません。RGBの数値からそれがどんな色かを想像するのは簡単とは限りません。

Let's look at the Munsell color system as an example of a more intuitive expression, though it is not a color system used on computers. The Munsell color system is based on a model published in 1905 by the American painter and educator Albert Munsell.

より直感的な表現の例として、コンピュータで使う表色系ではありませんがマンセル表色系をみてみましょう。マンセル表色系はアメリカの画家で教育者でもあるアルバート・マンセルが1905年に発表したモデルが元になっています。

The system expresses a color in terms of three attributes: hue (such as red, blue, and green), value (lightness), and chroma (vividness or purity of the color), and is still widely used today.

色を色相（赤、青、緑など色の系統）、明度（明るさ）、彩度（鮮やかさ、色の純粋さ）という3つの属性で表す仕組みで、現在でも幅広く使われています。

[![](/images/https-commons-wikimedia-org-wiki-file-munsell-1943-color-s.png)](/images/https-commons-wikimedia-org-wiki-file-munsell-1943-color-s.png)

[https://commons.wikimedia.org/wiki/File:Munsell\_1943\_color\_solid\_cylindrical\_coordinates\_gray.png](https://commons.wikimedia.org/wiki/File:Munsell_1943_color_solid_cylindrical_coordinates_gray.png)

In this figure, the vertical axis corresponds to lightness, the distance from the center to chroma, and the center angle to hue. Since the system is designed to match the visual sensation and the numerical value as much as possible, it does not have a simple cylindrical shape like the HSV we will look at in the next section, and there are gaps here and there. For example, pure blue appears much darker than white, so there is no blue with both high value and chroma. On the other hand, pure yellow is found in a much brighter position.

この図では上下が明度、中心からの距離が彩度、中心角が色相に当たります。見た目の感覚と数値ができるだけ一致するように作られているのでこの次に見るHSVのように単純な円筒形にはならずあちこち欠けている場所があります。例えば純粋な青は白に比べてかなり暗く見えるので、明度と彩度両方が高い青は存在しません。一方で純粋な黄色はかなり明るい位置にあるのが分かります。

# HSV

HSV or HSB (Hue, Saturation, Value/Brightness) and HSL (Hue, Saturation, Lightness) reproduce this concept of hue, saturation (similar to chroma), and lightness in a form that can be converted relatively easily from RGB. There are variations in how brightness is handled. Here we will look at HSV represented by following formulas.

この色相、彩度、明度という考え方をRGBから比較的簡単に変換できる形で再現したのがHSVまたはHSB（Hue, Saturation, Value/Brightness）やHSL（Hue, Saturation, Lightness）です。明るさの値をどう扱うかでバリエーションがあるのですが、ここでは下記の式で表されるHSVを代表にします。

H circles around in 360 degrees from red as zero, then in the order yellow, green, cyan, blue, and magenta. V and S are usually expressed as values in the \[0-1\] or \[0-100\] range. In the formulas below, each RGB value and V and S are in the 0-1 value range.

Hは赤をゼロとして黄色、緑、シアン、青、マゼンタの順に360度で一周します。VとSは大抵 \[0-1\] か \[0-100\] の範囲の値で表されます。下記の式ではRGBの各値とV、Sは0-1を値域とします。

## Hue
## 色相

$M = \max(R, G, B)$

$m = \min(R, G, B)$

$C = \operatorname{range}(R, G, B) = M - m$

$$H' = \begin{cases}
\text{undefined}, & \text{if } C = 0 \\
\dfrac{G - B}{C} \mod 6, & \text{if } M = R \\
\dfrac{B - R}{C} + 2, & \text{if } M = G \\
\dfrac{R - G}{C} + 4, & \text{if } M = B
\end{cases}$$

$H = 60^\circ \times H'$

## Value/Brightness
## 明度/明るさ

$V = \max(R, G, B) = M$

## Saturation
## 彩度

$$S_V = \begin{cases} 0, & \text{if } V = 0 \\ \dfrac{C}{V}, & \text{otherwise} \end{cases}$$

[![](/images/various-color-models-2.png "50")](/images/various-color-models-2.png)

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="wBwpwag" data-user="kynd" data-preview="true"></p></div>

While HSV is pretty useful for drawing a rainbow color wheel, it does not reflect differences in saturation and lightness by hue as does the Munsell color system. It tends to deviate from human perception, for example, even if the value is the same, the apparent brightness varies considerably depending on the hue.

HSVは虹色のカラーホイールを描くのに便利ですが、マンセル表色系のように色相による彩度や明度の違いを反映していません。そのため例えば明度の値が同じでも色相によって見た目の明るさがかなり異なるなど、人間の感覚とずれる部分もかなりあります。

# CIE LAB (L\*a\*b\*)

CIE LAB is a color space established in 1976 by CIE that has defined [XYZ color space](/cie-color-spaces), and like XYZ, it is device-independent. CIE LAB describes colors in terms of brightness (L\*) and red/green (a\*) and yellow/blue (b\*) hue values.

CIE LABは[XYZ色空間](/cie-color-spaces)を作ったCIEによって1976年に制定された色空間です。XYZと同じくデバイスに依存しない色空間で、明るさ (L\*) と赤/緑 (a\*) と黄/青 (b\*) の色相値で色を記述します。

Like the Munsell color system, the L\* values correspond well to the brightness that humans see. It is also perceptually more even, i.e., changes in color values match well with the changes in color as perceived by humans.

マンセル表色系のようにL\*の値が人間が見た目の明るさとよく一致し、また知覚的により均等、つまり色の値の変化と、人間が知覚する色の変化が等しく感じられるようになっています。

[![](/images/various-color-models-3.png "50")](/images/various-color-models-3.png)

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="XJrVrKx" data-user="kynd" data-preview="true"></p></div>

See the pages below for CIE LAB and XYZ conversions.

CIE LABとXYZの変換は下記のページを参照してください。

[XYZ to Lab - Bruce Lindbloom](http://www.brucelindbloom.com/Eqn_XYZ_to_Lab.html)

[Lab to XYZ - Bruce Lindbloom](http://www.brucelindbloom.com/Eqn_Lab_to_XYZ.html)

The cube above is not accurate because CIELAB includes colors beyond the range that can be displayed on a screen or even perceived by humans. The area within sRGB is shown below.

CIELABは画面で表示できる範囲や人間が知覚できる範囲を超えた色を含んでいるので、上の立方体は正確ではありません。sRGBに含まれる範囲は下の様になります。

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="dPbJbpb" data-user="kynd" data-preview="true"></p></div>

[Computing Colors 色を計算する](/computing-colors)

# OKLCH

As of June 2026, [OKLCH](https://bottosson.github.io/posts/oklab/) (2020) is one of the best choices for perceptually accurate color work. Built on CIE L\*a\*b\*, it uses a cylindrical representation: L is perceptual lightness, C is chroma (saturation), and H is the hue angle. OKLCH addresses classic CIE issues by helping ensure that adjusting lightness or saturation doesn't distort the perceived hue. It's also natively supported in CSS, for example: `color: oklch(65% 0.18 250);`.

2026年6月現在、知覚に沿って色を扱うための最も有力な選択肢のひとつは、[OKLCH](https://bottosson.github.io/posts/oklab/)（2020）です。CIE L\*a\*b\* をベースにした円筒座標表現で、L は知覚的な明度、C は彩度（クローマ）、H は色相角を表します。このモデルは古来からのCIE系の課題を緩和し、明度や彩度を調整しても見た目の色相が崩れにくくなります。CSSでもネイティブに利用でき、たとえば `color: oklch(65% 0.18 250);` のように書けます。

Another strong option is Google's [HCT](https://m3.material.io/blog/science-of-color-design) (Hue, Chroma, Tone) model, which can offer even tighter perceptual accuracy but is much more computationally expensive. OKLAB and OKLCH are recommended for high-performance use cases (including fragment shaders), while HCT is better suited to scenarios where computation is less frequent, such as GUIs.

もうひとつの有力な選択肢として、Googleの[HCT](https://m3.material.io/blog/science-of-color-design)（Hue, Chroma, Tone）モデルがあります。より厳密な知覚的一致を得られる場合がありますが、計算コストは高めです。OKLAB と OKLCHは（フラグメントシェーダ等を含む）高パフォーマンス用途に向き、HCTはGUIなど計算頻度が低い場面に向いています。

The demos below show OKLCH as a 3D space and as a 2D mapping. In the 2D demo, hue is on the horizontal axis, luminosity on the vertical axis, and the maximum available chroma is chosen for each point.

下のデモは、OKLCHを3D空間として表示したものと、2Dにマッピングしたものを紹介します。2Dデモでは横軸に色相、縦軸に明度を取り、各地点で取りうる最大の彩度を選んで可視化しています。

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="YPNGZML" data-user="kynd" data-preview="true"></p></div>

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="PwWGmPg" data-user="kynd" data-preview="true"></p></div>

下の画像は、[Material Color Utility](https://github.com/material-foundation/material-color-utilities)（[NPMにもあります](https://www.npmjs.com/package/@material/material-color-utilities)）を使い、上のOKLCHデモと同じ手法でHCTモデルを可視化したものです。

![HCT](/images/hct.png)
