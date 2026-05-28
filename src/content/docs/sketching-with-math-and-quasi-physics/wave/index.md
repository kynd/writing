---
title: "Wave 波"
---
Waves are everywhere. I suppose the word originally meant just waves on the water surface, like the ocean or a lake. However, there are many other things that exhibit characteristics of waves, such as sound, earthquakes, electromagnetic waves, and light. In terms of design and graphics, wavy shapes are one of the most common patterns and are often seen in fashion, architecture, and various art and craft pieces.

波はどこにでもあります。海や湖などの水面にできる波が言葉のもともとの意味だと思うのですが、音や、地震、電磁波、光など波としての性質を持ったものは色々あります。デザインやグラフィックスの観点でも波型は非常に一般的なパターンの1つで、ファッションや建築、アート作品や工芸品などでも良く見かけます。

[![](/images/konarski-cc0-via-wikimedia-commons-https-commons-wikimed.jpg)](/images/konarski-cc0-via-wikimedia-commons-https-commons-wikimed.jpg)

Konarski, CC0, via Wikimedia Commons [https://commons.wikimedia.org/wiki/File:Dachówka\_mnich\_mniszka.jpg](https://commons.wikimedia.org/wiki/File:Dach%C3%B3wka_mnich_mniszka.jpg)

In physics and mathematics, a wave is the propagation of a spatially distributed pattern of physical quantities. For example, the phenomenon in which highs and lows on the water surface traverse away is a wave. Light and radio waves are waves in this sense, but even when we know that, we never truly feel them as such. In the everyday sense, we tend to think that waves should be clearly visible patterns of repetitive shapes, like Bridget Riley's paintings.

物理学や数学では、波は物理量の空間分布パターンの伝播を指します。例えば水面の高低があって、それが遠くへ伝わっていく現象が波なわけです。その意味で光や電波は波なのですが、知識として知っていてもそれが波だと実感したことはないと思います。日常的な感覚だとブリジットライリーの作品のような繰り返す形のパターンがはっきり見えるものが波だという感じがします。

This is not that either is right or wrong, but it is helpful to understand the context and intent in which the word is used to avoid confusion. For the purpose of sketching with code, though, we don't need to strictly separate the two. We can appreciate anything that produces interesting results.

どちらが正しくてどちらが間違っているということはないのですが、言葉が使われている文脈や意図を理解することは混乱を避ける役に立ちます。とはいえコードで絵を描く目線からは、両者を厳密にわける必要はありません。面白い結果が出ればそれで良いのです。

[![](/images/shisma-cc-by-sa-4-0-https-creativecommons-org-licenses-by.png)](/images/shisma-cc-by-sa-4-0-https-creativecommons-org-licenses-by.png)

Shisma, CC BY-SA 4.0 [https://creativecommons.org/licenses/by-sa/4.0](https://creativecommons.org/licenses/by-sa/4.0), via Wikimedia Commons  
[https://commons.wikimedia.org/wiki/File:Japanese\_Wave\_Pattern.svg](https://commons.wikimedia.org/wiki/File:Japanese_Wave_Pattern.svg)

Let's review some basic terms related to waves in physics.

物理学で使う基本的な用語を確認しておきましょう。

[![](/images/wave.png)](/images/wave.png)

The maximum height of the wave, <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>a</mi></mrow><annotation encoding="application/x-tex">a</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">a</span></span></span></span> in the figure, is called amplitude, and the length of <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>b</mi></mrow><annotation encoding="application/x-tex">b</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal">b</span></span></span></span> is called wavelength. Or if the horizontal axis of the graph is time, <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>b</mi></mrow><annotation encoding="application/x-tex">b</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal">b</span></span></span></span> is the period, which is the time it takes for each  oscillation. Frequency is the number of oscillations per second, which is one second divided by the period, <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mo>=</mo><mn>1</mn><mi mathvariant="normal">/</mi><mi>T</mi></mrow><annotation encoding="application/x-tex">f = 1 /T</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">1/</span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span></span></span></span>, where <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>T</mi></mrow><annotation encoding="application/x-tex">T</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span></span></span></span> represents the period.

図の<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>a</mi></mrow><annotation encoding="application/x-tex">a</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">a</span></span></span></span>、波の最大の振れ幅は振幅（amplitude）、<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>b</mi></mrow><annotation encoding="application/x-tex">b</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal">b</span></span></span></span>の長さは波長（wavelength）と呼ばれます。横軸が時間であれば<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>b</mi></mrow><annotation encoding="application/x-tex">b</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal">b</span></span></span></span>は1回の振動にかかる時間、周期（period）になります。1秒間の振動の回数が周波数（frequency）で、周期をTとすると、これは1秒を周期で割ったもの <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mo>=</mo><mn>1</mn><mi mathvariant="normal">/</mi><mi>T</mi></mrow><annotation encoding="application/x-tex">f = 1 / T</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">1/</span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span></span></span></span> になります。

[Direction of the waves 波の向き](/sketching-with-math-and-quasi-physics/wave/direction-of-the-waves)

[Vibration and Propagation 振動と伝搬](/sketching-with-math-and-quasi-physics/wave/vibration-and-propagation)

[Sine waves and Additive Synthesis サイン波と加算合成](/sketching-with-math-and-quasi-physics/wave/sine-waves-and-additive-synthesis)

[Pitch and Frequency 音高と周波数](/sketching-with-math-and-quasi-physics/wave/pitch-and-frequency)

[Sound visualization 音の視覚化](/sketching-with-math-and-quasi-physics/wave/sound-visualization)
