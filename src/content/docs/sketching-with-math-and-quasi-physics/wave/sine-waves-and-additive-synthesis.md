---
title: "Sine waves and Additive Synthesis サイン波と加算合成"
slug: sine-waves-and-additive-synthesis
---
Let's look at the sine wave again. Plotting it this way makes the relationship to the trigonometric functions clearer.

もう一度サイン波を見てみましょう。このようにプロットすると、三角関数との関係が明確になります。

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="mwbWwJ" data-user="kynd" data-preview="true"></p></div>

Waves can be added together. Adding waves according to certain rules can create surprising geometric patterns. This is called **additive synthesis**.

波は足し合わせることができます。ある一定の規則に基づいて波を足し合わせると驚くような幾何学的なパターンが作れます。これは加算合成と呼ばれます。

These are special cases of what is called a [Fourier series](/fourier-series), expressed in the form of the following equation. If you look at the left part of the demos, you can see that there are multiple rotational motions with different radii and velocities adding up to create the waveform.

これらは下記の式の形で表される[フーリエ級数](/fourier-series)というものの特殊な場合になっています。デモの左側部分を見ると、半径と速度の異なる幾つもの回転運動が重なり合って波形を作り出していることがわかります。

${\displaystyle {\frac {a_{0}}{2}}+\sum _{k=1}^{\infty }(a_{k}\cos kx+b_{k}\sin kx)}$

## Square Wave 矩形波

${\displaystyle {\begin{aligned}x_{\text{square}}(t)&={\frac {4}{\pi }}\sum _{k=1}^{\infty }{\frac {\sin \left(2\pi (2k-1)ft\right)}{2k-1}}\\&={\frac {4}{\pi }}\left(\sin(2\pi ft)+{\frac {1}{3}}\sin(6\pi ft)+{\frac {1}{5}}\sin(10\pi ft)+\dots \right)\end{aligned}}}$

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="JJPWyz" data-user="kynd" data-preview="true"></p></div>

## Triangle Wave 三角波

${\displaystyle {\begin{aligned}x_{{\mathrm  {triangle}}}(t)&{}={\frac  {8}{\pi ^{2}}}\sum _{{k=1}}^{\infty }(-1)^{k}\,{\frac  {\sin \left(2\pi (2k+1)ft\right)}{(2k+1)^{2}}}\\&{}={\frac  {8}{\pi ^{2}}}\left(\sin(2\pi ft)-{1 \over 9}\sin(6\pi ft)+{1 \over 25}\sin(10\pi ft)-\cdots \right)\end{aligned}}}$

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="LLPWzo" data-user="kynd" data-preview="true"></p></div>

## Sawtooth Wave のこぎり波

$
{\displaystyle x_{\mathrm {sawtooth} }(t)={\frac {1}{2}}-{\frac {1}{\pi }}\sum _{k=1}^{\infty }{(-1)}^{k}{\frac {\sin(2\pi kft)}{k}}}$

${\displaystyle x_{\mathrm {reversesawtooth} }(t)={\frac {2}{\pi }}\sum _{k=1}^{\infty }{(-1)}^{k}{\frac {\sin(2\pi kft)}{k}}}$

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="zzOZPM" data-user="kynd" data-preview="true"></p></div>

[Pitch and Frequency 音高と周波数](/pitch-and-frequency)
