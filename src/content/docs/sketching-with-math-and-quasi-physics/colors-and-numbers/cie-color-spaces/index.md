---
title: "CIE Color spaces CIE色空間"
slug: cie-color-spaces
---
# CIE XYZ color space
# CIE XYZ色空間

The CIE color spaces were the first to quantitatively link the relationship between visible light stimuli and colors perceived by humans.

可視光による刺激と、人間が知覚する色との関係を初めて定量的に結びつけたのがCIE色空間です。

The CIE RGB color space and CIE XYZ color space were defined by the International Commission on Illumination (CIE) in 1931. These are numbers that are independent of specific devices, etc., and can represent all colors that the average human can perceive.

CIE RGB色空間とCIE XYZ色空間は1931年に国際照明委員会 (CIE)により定義されました。これらは特定のデバイスなどに依存しない数値で、平均的な人間が知覚できる全ての色を表すことができます。

As the name suggests, RGB directly expresses the distribution of the three primary colors, which is more intuitive, but it has the [drawback that negative values must be used for the range of colors that could not be reproduced in their experiments](https://en.wikipedia.org/wiki/CIE_1931_color_space#CIE_RGB_color_space), and XYZ was defined to work around this.

RGBは名前の通り三原色の配分を直接表すものでこちらの方が直感的なのですが、[実験で再現できなかった色の範囲を表すのにマイナスの値を用いる必要があるという欠点](https://ja.wikipedia.org/wiki/CIE_1931_%E8%89%B2%E7%A9%BA%E9%96%93#CIE_RGB%E8%89%B2%E7%A9%BA%E9%96%93)があり、それを避けるためにXYZが定義されました。

X, Y, and Z can be thought of as the magic three primary colors that do not exist in reality but can be mixed to reproduce any color. RGB and XYZ can be linearly transformed into each other.

X、Y、Zは現実には存在しない、混ぜることでどんな色でも再現できる魔法の3原色と考えることができます。RGBとXYZは互いに線形変換することができます。

The demo below draws the XYZ color space as a cube. It is for reference only, as a large range of colors are not representable on a computer display.

下のデモはXYZ色空間を立方体として描いてみたものです。かなりの範囲がディスプレイでは表現不可能な色になってしまうためあくまで参考程度に。

[![](/images/cie-color-spaces-cie.png "50")](/images/cie-color-spaces-cie.png)

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="ZYzaggx" data-user="kynd" data-preview="true"></p></div>

The correspondence between the XYZ values and their stimuli to the L, M, and S cones can be represented as below. Z only relates to the S cone, but X and Y are a mixture of stimuli to multiple cones.

XYZの値とL、M、Sそれぞれの錐体への刺激への対応は下記のように表されます。ZはS錐体だけに関係していますが、XとYは複数の錐体への刺激が混ざっていることが分かります。

$\begin{bmatrix}X \\ Y \\ Z\end{bmatrix} = \begin{bmatrix} 1.91020 & -1.11212 & 0.20191 \\ 0.37095 &  0.62905 & 0         \\ 0         &  0         & 1.00000 \end{bmatrix} \begin{bmatrix}L \\ M \\ S\end{bmatrix}$

# CIE xyY color space
# CIE xyY色空間

  
A variant of XYZ color space called xyY is often used too. This can be converted from XYZ with a simple calculations.

XYZを変形したxyYという色空間もよく使われます。これはXYZから簡単な計算で変換することができます。

$$x = \dfrac{X}{X+Y+Z}$$

$$y = \dfrac{Y}{X+Y+Z}$$

$Y =$ The Y value of XYZ as it is.

YはXYZのYの値をそのまま用いる。

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="raBpBBK" data-user="kynd" data-preview="true"></p></div>

The colors are now more clearly separated on the plane created by x and y than in the original XYZ. Y appears to correspond simply to luminance.

元のXYZよりも、xとyが作る面上に色がはっきり別れるようになりました。Yはシンプルに輝度（luminance）に対応している様に見えます。

If we cut out only the area that can be displayed on a monitor (or more precisely the [range of sRGB](/various-color-models)) and look it down from above (Y-axis), it looks like this.

ここからモニター上で表示できる範囲（厳密には[sRGBの範囲](/various-color-models)）だけを切り出して真上（Y軸）方向から見下ろすとこうなります。

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="KwPZPKX" data-user="kynd" data-preview="true"></p></div>

You may have seen a diagram like the one below that illustrates the color gamut of a display or other device. The triangle in the center is the range that can be reproduced in [sRGB](/various-color-models), and the rounded shape around it is the entire color gamut humans can perceive. This diagram is actually drawn in the xyY color space. In this way, the XYZ and xyY color spaces are often used as the basis for defining other color spaces and models.

ディスプレイなどの色域（gamut）を説明する下のような図を見たことがあるかもしれません。中央の三角形が[sRGB](/various-color-models)で再現できる範囲で、その周りの丸まった形が人間が知覚できる色域の全体です。この図は実はxyY色空間で描かれているのです。このようにXYZやxyY色空間は他の色空間やカラーモデルを定義するための基礎としてよく用いられます。

[![](/images/https-commons-wikimedia-org-wiki-file-cie-chart-with-srgb.png "75")](/images/https-commons-wikimedia-org-wiki-file-cie-chart-with-srgb.png)

[https://commons.wikimedia.org/wiki/File:Cie\_Chart\_with\_sRGB\_gamut\_by\_spigget.png](https://commons.wikimedia.org/wiki/File:Cie_Chart_with_sRGB_gamut_by_spigget.png)

This video has a great visualization of the relationship between XYZ and RGB on a device.

XYZとデバイス上のRGBの対応はこのビデオが分かりやすかったです。

<div class="video-wrap"><iframe width="560" height="315" src="https://www.youtube.com/embed/x0-qoXOCOow" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>

[Various Color Models 様々なカラーモデル](/various-color-models)
