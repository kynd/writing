---
title: "About Wave 波について"
---
Waves are everywhere. I suppose the word originally meant just waves on the water surface, like the ocean or a lake. However, there are many other things that exhibit characteristics of waves, such as sound, earthquakes, electromagnetic waves, and light. In terms of design and graphics, wavy shapes are one of the most common patterns and are often seen in fashion, architecture, and various art and craft pieces.

波はどこにでもあります。海や湖などの水面にできる波が言葉のもともとの意味だと思うのですが、音や、地震、電磁波、光など波としての性質を持ったものは色々あります。デザインやグラフィックスの観点でも波型は非常に一般的なパターンの1つで、ファッションや建築、アート作品や工芸品などでも良く見かけます。

[Wave 波](/sketching-with-math-and-quasi-physics/wave)

> 
> 
> This is an article to introduce various topics in [Sketching with Code](/sketching-with-math-and-quasi-physics), illustrating the relationships between them and adding more context to provide a sort of overview. The articles are not in order of difficulty. Please just jump to whichever one interests you.
> 
> これは [Sketching with Math and Quasi Physics](/sketching-with-math-and-quasi-physics) 上の様々なトピックについて、それぞれの間の関係や概要を示したり、新たな文脈を加えたりするためのページです。難易度順には並んでいないので、興味のある記事から自由に読んでみてください。

# Sine Wave
# サインカーブ

Mathematically, the sine wave is the most fundamental wave shape. It represents the position of a point on a unit circle as the center angle changes.

数学的には、サインカーブが最も基本的な波の形です。正弦波は中心角の変化によって変わる単位円上の点の位置を示してます。

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/mwbWwJ?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

A sine curve can be drawn as a result of a physical object following the [spring equation (Hooke's law,](/sketching-with-math-and-quasi-physics/wave/vibration-and-propagation) <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>F</mi><mo>=</mo><mo>−</mo><mi>k</mi><mi>x</mi></mrow><annotation encoding="application/x-tex">F=-kx</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">F</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7778em;vertical-align:-0.0833em;"></span><span class="mord">−</span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mord mathnormal">x</span></span></span></span>[)](/sketching-with-math-and-quasi-physics/wave/vibration-and-propagation). Basically, this means if you vibrate a thing attached to a spring and plot its position over time, you get a sine curve. It is fascinating that these seemingly very different methods result in the exact same curve, which indicates that there's something special about the sine curve (yes, it is).

サインカーブは、物体がバネ方程式（フックの法則、<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>F</mi><mo>=</mo><mo>−</mo><mi>k</mi><mi>x</mi></mrow><annotation encoding="application/x-tex">F=-kx</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">F</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7778em;vertical-align:-0.0833em;"></span><span class="mord">−</span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mord mathnormal">x</span></span></span></span>）に従って動く結果としても描くことができます。つまり、バネに物を取り付けて振動させ、その位置を時間とともにプロットすると、正弦曲線が得られます。一見まったく異なる方法から、同じ曲線が得られるのはとても面白く、サインカーブには、何か特別な意味があると感じさせられます（実際にそうです）

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/WOepdE?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

# Vibration and Propagation 振動と伝搬

Waves propagate and spread in space. Many waves are mechanical, meaning they are caused by physical materials pushing against each other. When you pluck a guitar string, it vibrates and pushes the air around, which pushes the air next to it, and so forth. Sound is propagated across a room as oscillations of air pressure this way. Earthquakes, ocean waves, etc., all belong to this category.

波は空間を伝わって広がります。多くの波は力学的なもので、物質同士が互いに押し合うことによって生じます。たとえばギターの弦を弾くと、弦が振動して周囲の空気を押し、その空気が隣の空気を押し、という連鎖が続きます。このようにして、音は空気圧の振動となって部屋中に伝わります。地震や海の波なども同類です。

[Direction of the waves 波の向き](/sketching-with-math-and-quasi-physics/wave/direction-of-the-waves)

[Vibration and Propagation 振動と伝搬](/sketching-with-math-and-quasi-physics/wave/vibration-and-propagation)

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/abGVKep?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

# Light 光

Electromagnetic waves are a different class of wave that needs no material medium at all. Electromagnetic waves have properties of both particles (photons) and waves. Light, radio, microwaves, X‑rays, etc. are the same phenomenon at different frequencies. What oscillates is simply the electric (**E**) and magnetic (**B**) fields themselves.

電磁波は違う種類の波で、物質的な媒質を全く必要としません。電磁波は粒子（光子）と波の両方の性質を持ち、光、電波、マイクロ波、X線などは周波数が異なるだけの同じ現象です。振動しているのは電場（Eフィールド）と磁場（Bフィールド）そのものです。

[What is light? 光とは何か](/sketching-with-math-and-quasi-physics/light/what-is-light)

Even without a medium, electromagnetic waves still obey the same wave physics, such as [reflection, refraction](/sketching-with-math-and-quasi-physics/light/reflection-and-refraction), interference, diffraction.

媒質がなくても、電磁波は[反射、屈折](/sketching-with-math-and-quasi-physics/light/reflection-and-refraction)、干渉、回折といった波動物理学の基本法則に従います。

> The concept of "wave" is an abstraction to capture these common characteristics between different things and phenomena. It’s not that they behave the same because they are waves, but we call them waves because they follow the same rules.
> 
> 「波」という概念は、異なる現象間の共通の特徴を捉えるための抽象化です。波だから同じように振る舞うのではなく、同じ法則に従うから波と呼ぶのです。

For example, electromagnetic waves are diffractive, meaning that they can go around behind obstacles just like waves on the surface of water. Thanks to diffraction (along with reflection and scattering) we can watch TV or use cellular phones even when there is an obstacle between the antenna and the devices.

例えば、電磁波には回折性があり、水面の波のように障害物の後に回り込むことができます。この回折（と反射や散乱）のおかげで、アンテナと機器の間に障害物があっても、テレビの視聴や携帯電話の使えるのです。

[What is light? 光とは何か](/sketching-with-math-and-quasi-physics/light/what-is-light)

[![](/images/about-wave.png)](/images/about-wave.png)

[GLSL demo](https://kynd.github.io/p5sketches/extra/wave_function/index.html)  

Electromagnetic waves between about 400–800 terahertz are what we normally think of as light, and they are visible to human eyes. Depending on the frequency of light, we see different colors. Understanding how different frequencies of light interact with objects before they reach our eyes is crucial for thinking about our vision and how we model these phenomena to create graphics.

およそ400から800テラヘルツの電磁波が普段、光だと考えているもので、人間の目で見ることができます。光は周波数によって、異なる色として知覚されます。光が目に届くまでの間の物体との関わりを理解するのは、視覚の仕組みについて考え、これらの現象をグラフィックスとして表すためのモデルを作る上で重要です。

[Spectrum and Cones スペクトルと錐体](/sketching-with-math-and-quasi-physics/colors-and-numbers/spectrum-and-cones)

[Light 光](/sketching-with-math-and-quasi-physics/light)

[![](/images/about-wave-1.png)](/images/about-wave-1.png)

# Seeing Sound Waves
# 音波を見る

Sound is also a wave. When you clap your hands, pluck a string, or hit a drum, it makes the air vibrate.

音も波の一種です。手を叩いたり、弦を弾いたり、太鼓を叩いたりすると、空気が振動します。

In the case of light, the frequency corresponds to the color. In sound, the frequency corresponds to the pitch, how high or low it sounds, and the amplitude affects the loudness.

光の場合は周波数が色に対応しますが、音の場合は周波数が音の高低（ピッチ）に、振幅が音の大きさに対応します。

"Seeing" the sound wave helps us understand the sound a lot. For example, you can see how different frequencies of sine waves sound, or how various sounds from different instruments look.

音波を「見る」ことによって、音をより深く理解できます。例えば、異なる周波数のサイン波の聞こえ方や、様々な楽器が生み出す音の波形を観察することができます。

[Sound visualization 音の視覚化](/sketching-with-math-and-quasi-physics/wave/sound-visualization)

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/yLZrBGJ?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/gOqypMj?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

# Numbers and Intervals 数と音程

Musical intervals are based on frequency ratios. [The equal temperament commonly used in Western music divides an octave evenly into 12 semitones.](/sketching-with-math-and-quasi-physics/wave/pitch-and-frequency) No matter where you start on the piano keyboard, the ratio of the frequency from one note to its right neighbor (e.g., C to C#) is <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>2</mn><mrow><mn>1</mn><mi mathvariant="normal">/</mi><mn>12</mn></mrow></msup></mrow><annotation encoding="application/x-tex">2^{1/12}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.888em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.888em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1/12</span></span></span></span></span></span></span></span></span></span></span></span>. With the semitone as a unit, we can think of the distance between notes as a simple number relationship.

音程は周波数の比率に基づいています。[西洋音楽で一般的に使用される平均律](/sketching-with-math-and-quasi-physics/wave/pitch-and-frequency)では、1オクターブを12の半音に均等に分割します。ピアノの鍵盤のどこから始めても、ある音から右隣の音（例えばCからC#）までの周波数の比率は<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>2</mn><mrow><mn>1</mn><mi mathvariant="normal">/</mi><mn>12</mn></mrow></msup></mrow><annotation encoding="application/x-tex">2^{1/12}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.888em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.888em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1/12</span></span></span></span></span></span></span></span></span></span></span></span>となります。半音を単位として考えることで、音と音の間の距離を単純な数の関係として捉えることができます。

Interestingly, we don’t experience pitch as just a straight line—it feels more like a spiral. For example, if you start at 440 Hz (the A note) and go up, you’ll eventually hit another A at 880 Hz at exactly double the frequency. It’s not the same sound, but we hear it as the same note, just in a higher octave.

面白いことに、私たちは音の高さを単純な直線としてではなく、螺旋のように感じます。例えば、440 Hz（A音）から上に向かうと、周波数がちょうど2倍の880 Hzで別のA音に到達します。これは違う音でありながら、私たちの耳には1オクターブ上がっただけの同じ音として認識されるのです。

[![](/images/about-wave.jpg)](/images/about-wave.jpg)

Upon these notes, we can construct different harmonies. It is all about ratio and relative relationships, and depending on how you lay them out vertically (play at the same time) or horizontally (play in sequence), you can evoke totally different feelings from the same sets of notes, or frequencies.

これらの音をもとに、様々なハーモニーが作り出せます。これは全て比率と相対的な関係の問題で、同じ音の組み合わせでも、縦方向（同時に音を鳴らす）や横方向（順番に音を鳴らす）の配置の仕方によって、まったく異なる感覚を引き出すことができます。

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/XWBXwgL?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

In the slightly more song-like example below, the chord (F major 9th) chord is repeated every second time. Notice how the same chord can sound different depending on the preceding chord.

下のもう少し曲っぽい例では、2回に1回同じコード（Fメジャー9th）が繰り返されています。直前のコードによって同じコードが違って聞こえる様子にも注目してみてください。

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/wvxGqmW?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

[Pitch and Frequency 音高と周波数](/sketching-with-math-and-quasi-physics/wave/pitch-and-frequency)

[Numbers and Intervals 数と音程](/sketching-with-math-and-quasi-physics/numbers-and-intervals)

[The secrets of sound (for kids)](/the-secrets-of-sound-for-kids)

# Timbre 音質

Other than the pitch and loudness, sound also has timbre, which is like the texture or color of a sound. That's how you can tell apart different sounds, like a bird chirping, car horns, or instruments like piano and trumpet.

音の高さや大きさに加えて、音には音色があります。これは音の質感や特徴のようなもので、鳥のさえずり、車のクラクション、ピアノやトランペットなどの楽器の音を聞き分けられるのは、この音色の違いによるものです。

Timbre comes from the fact that most of the sound don’t consists of a single frequency, but rather a mix of many different frequencies. And the balance between these different frequencies determines the timbre.

音色は、ほとんどの音が単一の周波数ではなく、様々な周波数が混ざり合ってできていることに由来します。これらの異なる周波数のバランスが音色を決定づけているのです。

Let’s take a guitar string as an example. When you pluck it, the string vibrates in many ways at once. The main pitch is called the fundamental frequency, but parts of the string also vibrate in smaller sections—halves, thirds, quarters, etc. These create harmonics or overtones, which are simple multiples of the base frequency.

ギターの弦を例に取りしょう。弦が出す音は1つの周波数だけではありません。弾かれると弦は一度に様々な形の振動を生み出します。主となる音の高さは基本周波数と呼ばれますが、弦の各部分も小さな区分（半分、3分の1、4分の1など）で振動していて、基本周波数の単純な倍数に当たる倍音や上音と呼ばれる音を鳴らします。

[![](/images/when-you-pluck-on-a-string-the-string-vibrate-with-multiple-1.jpg)](/images/when-you-pluck-on-a-string-the-string-vibrate-with-multiple-1.jpg)

When you pluck on a string, the string vibrate with multiple frequencies mixed at the same time. 弦を弾くと、複数の周波数が同時に混ざり合って振動します

We can visualize this too. In the demo below, you can see the shape of the wave changes as we add extra sine waves with different frequencies and amplitudes (the radius of the circle), in this case, getting closer to a so-called square wave.

これも視覚化することができます。下のデモでは、異なる周波数と振幅（円の半径）を持つサイン波を追加していくと波形が変化していく様子を見ることができます。この例では、いわゆる矩形波に近づいていきます。

[Sine waves and Additive Synthesis サイン波と加算合成](/sketching-with-math-and-quasi-physics/wave/sine-waves-and-additive-synthesis)

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/JJPWyz?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

> 
> 
> I wish I had added sound playback to these demos. I may try later. You can compare the sound of square wave vs. sine wave on this Wikipedia page:
> 
> デモに音声の再生機能もツケとおけばよかったと思います。後で試してみるかもしれません。矩形波とサイン波の音の違いはこのWikipediaページで比較できます。
> 
> 

<div class="bookmark-card"><a href="https://en.wikipedia.org/wiki/Square_wave_(waveform)" target="_blank" rel="noopener" class="bookmark-link"><div class="bookmark-info"><div class="bookmark-title">Square wave (waveform)</div><div class="bookmark-description">A square wave is a non-sinusoidal periodic waveform in which the amplitude alternates at a steady frequency between fixed minimum and maximum values, with the same duration at minimum and maximum. In an ideal square wave, the transitions between minimum and maximum are instantaneous.</div><div class="bookmark-url"><img src="https://en.wikipedia.org/static/apple-touch/wikipedia.png" class="bookmark-favicon" alt="" onerror="this.style.display='none'"><span>https://en.wikipedia.org/wiki/Square_wave_(waveform)</span></div></div><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Waveforms.svg/1200px-Waveforms.svg.png" class="bookmark-image" alt="" loading="lazy" onerror="this.style.display='none'"></a></div>

# Fourier Series
# フーリエ級数

This brings us to the favorite topic of synthesizing everything with sine waves. If you have an infinite set of sinusoidal waves, each with its own frequency, amplitude, and phase, you can synthesize any periodic pattern in theory. This idea is called the Fourier series for repeating patterns and the Fourier transform for ones that don’t.

これはサイン波であらゆるものを合成できるという、お馴染みのテーマにつながります。理論的には、それぞれ異なる周波数、振幅、位相を持つ無限個のサイン波があれば、どのような周期的なパターンでも合成することができます。この考え方は、繰り返しパターンについてはフーリエ級数、そうでないものについてはフーリエ変換と呼ばれています。

For example, an arbitrary shape, like an alphabet can be written as a Fourier series, or a series of waves.

例えば、アルファベットのような任意の形も、フーリエ級数、つまり波の組み合わせとして表現できます。

The Fourier transform is widely used in various fields such as sound processing, signal processing, and image compression. By applying Fourier transform to sound data, we can determine the amount of different frequencies contained within it. This lets us manipulate the data by reducing or increasing a certain range of frequencies.

フーリエ変換は、音声処理、信号処理、画像圧縮など、様々な分野で幅広く活用されています。音声データにフーリエ変換を適用すると、その中に含まれる異なる周波数の量を特定できます。これにより、特定の周波数帯域を減衰や増幅させてデータを操作することが可能になります。

[Sine waves and Additive Synthesis サイン波と加算合成](/sketching-with-math-and-quasi-physics/wave/sine-waves-and-additive-synthesis)

[Fourier Series フーリエ級数](/sketching-with-math-and-quasi-physics/fourier-series)

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/ZEmXaBO?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

# Navier-Stokes equations
# ナビエ・ストークス方程式⁠

The Navier-Stokes equations describe the properties and behavior of media such as water and air, including mass conservation, momentum conservation, and viscosity. This is a fundamental theory that explains how waves work in these media, but that's not all. In computer graphics, these equations are often used for fluid simulation. Understanding and simulating waves using the Navier-Stokes equations can be a fun and interesting research topic.

ナビエ・ストークス方程式は、質量の保存、運動量の保存、粘性といった、水や空気などの媒体の性質と挙動を記述します。ナビエ・ストークス方程式は、これらの媒体での波の動きを説明する基礎となり、またそれ以外の挙動もカバーしています。特にコンピューターグラフィックスの分野では、流体シミュレーションに広く活用されています。ナビエ・ストークス方程式を用いて波を理解したりシミュレーションしたりすると面白い研究課題になるでしょう。

[Fluid Simulation 流体シミュレーション](/sketching-with-math-and-quasi-physics/2d-feedback-systems/fluid-simulation)

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/jOXZXWB?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>
