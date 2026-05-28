---
title: "Direction of the waves 波の向き"
---
<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/XWqzYvK?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

This is probably the most common shape when drawing a wave. This is called a sine curve and is a graphical representation of the sine function. Since the input values are moved over time <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>t</mi></mrow><annotation encoding="application/x-tex">t</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6151em;"></span><span class="mord mathnormal">t</span></span></span></span>, the equation looks like this:

波を描くときに一番普通なのはこんな形でしょう。これはサインカーブと呼ばれていてサイン関数をグラフにしたものです。 入力の値を時間<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>t</mi></mrow><annotation encoding="application/x-tex">t</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6151em;"></span><span class="mord mathnormal">t</span></span></span></span>と共に動かしているので式の形はこうなります。

<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>y</mi><mo>=</mo><mi>a</mi><mo>⋅</mo><mi>s</mi><mi>i</mi><mi>n</mi><mo stretchy="false">(</mo><mi>b</mi><mi>t</mi><mo>−</mo><mi>c</mi><mi>x</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">y = a\cdot  sin (bt - cx)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.4445em;"></span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">s</span><span class="mord mathnormal">in</span><span class="mopen">(</span><span class="mord mathnormal">b</span><span class="mord mathnormal">t</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">c</span><span class="mord mathnormal">x</span><span class="mclose">)</span></span></span></span>

```jsx
const y = a * sin(b * t - c * x);
```

Waves that oscillate perpendicular to the direction of advance are called transverse waves.

進行方向に対して垂直の向きに振動する波は横波と呼ばれます。

Waves that travel in the direction of their oscillations are called Longitudinal waves.

振動と同じ向きに進む波は縦波と呼びます。

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/abGVKep?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

You may have heard that earthquakes can be divided into longitudinal and transverse waves. For seismic waves, longitudinal waves are also called P(primary) waves and transverse waves are called S(secondary) waves. Longitudinal waves can travel through any material, including liquids and gases, by means of compression, while transverse waves can only travel through solids because the material must be connected in order for the force in the bending or shear direction to be transmitted. Sound is an example of longitudinal wave.

地震は縦波と横波に分けられるという話を聞いたことがあるかもしれません。地震波の場合、縦波はP（プライマリー）波、横波はS（セカンダリー）波とも呼ばれます。縦波は圧縮を通じて液体や気体などあらゆる物質を伝わりますが、曲げやせん断の方向の力が伝わるためには物質が繋がっている必要があるため、横波は固体しか伝わりません。音は縦波の一例です。

Not all waves are longitudinal or transverse. For example, ocean waves are a little more complex because the water moves in circles and ovals, as demonstrated below.

全ての波が縦波または横波というわけではありません。例えば、海の波はもう少し複雑です。水は下のデモのように、円や楕円を描く形で動きます。

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/zYjPLxo?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

The terms "longitudinal" and "transverse" are commonly used to describe physical waves. However, when discussing waves in graphics, such as gradients or waveforms, we are not limited by the constraints of physics. These graphical representations can resemble real phenomena in various ways or not at all. If you want, they can be scientifically accurate representations. For instance, it is possible to map the brightness of colors to the pressure of the air in a sound wave.

「縦波」と「横波」という用語は、物理的な波を表現するために使用されます。グラフィックスにおける波、例えばグラデーションや波の形について話す際には、物理に囚われる必要はありません。これらのグラフィック表現は、さまざまな具合で実際の現象に似たり似なかったりできますし、望むなら科学的に正確な表現にもなり得ます。例えば、音波の空気の圧力に色の明るさをマッピングすることが可能です。

[Vibration and Propagation 振動と伝搬](/sketching-with-math-and-quasi-physics/wave/vibration-and-propagation)
