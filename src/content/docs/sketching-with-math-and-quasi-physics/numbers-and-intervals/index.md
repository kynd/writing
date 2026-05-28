---
title: "Numbers and Intervals   数と音程"
---
[The equal temperament commonly used in Western music divides an octave evenly into 12 semitones.](/sketching-with-math-and-quasi-physics/wave/pitch-and-frequency) No matter where you start on the piano keyboard, the ratio of the frequency from one note to its right neighbor (e.g., C to C#) is <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>2</mn><mrow><mn>1</mn><mi mathvariant="normal">/</mi><mn>12</mn></mrow></msup></mrow><annotation encoding="application/x-tex">2^{1/12}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.888em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.888em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1/12</span></span></span></span></span></span></span></span></span></span></span></span>. With the semitone as a unit, we can think of the distance between notes as a simple number relationship.

[西洋音楽で一般的に使われる平均律は1オクターブを12個の半音に均等に分割します。](/sketching-with-math-and-quasi-physics/wave/pitch-and-frequency)ピアノの鍵盤はどこから始めても、ある音とその右隣の音（例えばドからド#）の周波数の比は<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>2</mn><mrow><mn>1</mn><mi mathvariant="normal">/</mi><mn>12</mn></mrow></msup></mrow><annotation encoding="application/x-tex">2^{1/12}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.888em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.888em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1/12</span></span></span></span></span></span></span></span></span></span></span></span>になります。この半音という単位を使うことで音と音との距離を単純な数の関係として考えることができます。

On this page, we will consider intervals between notes by focusing on number relationships rather than general music theory. Reading this probably won’t make you better at playing instruments or writing good music too much, but it may change the way you look at instruments and scores a little.

このページでは音程について、一般的な音楽理論よりも数の関係に注目して考えてみます。これを読んでも楽器が上手くなったり良い曲が書けたりはしないと思いますが、楽器や楽譜の見え方が少し変わるかもしれません。

> 
> 
> ここから先、音の名前の表記にはアルファベットを用います。Cがド、Dがレ…Gがソ、Aがラ、Bがシとなります。イロハニホヘトがABCDEFGに対応すると考えてもOKです。ハ長調はCメジャースケール、イ短調はAマイナースケールです。

Let’s begin with the C major scale, with only the white keys of the piano played in order from C. This scale has a number sequence of semitones between notes: 2, 2, 1, 2, 2, 2, 1. To make it easier to see that the notes are evenly spaced and circle back to the same note an octave above, we will visualize them in a circle.

まずはCメジャースケール、ピアノの白鍵だけをCから順番に弾いた音階から始めます。この音階は音と音との間の半音の数が2, 2, 1, 2, 2, 2, 1という数列になっています。音が均等な幅で並んでいて、一周するとオクターブ上の同じ音に戻ってくることが分かりやすいように、円の上に視覚化してみます。

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/bGjEdpM?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

# Diatonic Chords ダイアトニックコード

For each note from the C Major Scale as a starting note(root), add a note two steps away on the scale, then one at another two steps. The resulting chords are called diatonic chords of the C Major Scale.

Cメジャースケールからスタート地点となる1音を選び（ルート）、スケール上でその2つ隣、さらにその2つ隣の音を重ねます。こうしてできた和音をCメジャースケールのダイアトニックコードと呼びます。

If you look closely, there are only three combinations of the number of semitones: (4, 3), (3, 4), and (3, 3). Each of these is called a major chord, a minor chord, or a diminished (minor 5) chord.

よく見ると半音の数の組み合わせは (4, 3)、(3, 4)、(3, 3) の3パターンしかないことに気がつきます。それぞれをメジャーコード、マイナーコード、ディミニッシュ（マイナー5）コードと呼びます。

[![](/images/numbers-and-intervals.png)](/images/numbers-and-intervals.png)

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/poZgjov?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

To hear the different qualities of each, let's build them on the same C note. It is often said that major sounds joyful, minor sounds sad, and diminished sounds unstable. It is actually not that simple as it depends on what comes before and after, but you get the sense.

それぞれの特性の違いを聴くために、同じCの音の上で弾いてみましょう。メジャーは楽しく、マイナーは悲しく、ディミニッシュは不安定に聞こえると言われます。実際には前後の音に左右されるのですそんなに単純ではないのですが、感じは伝わるのではないでしょうか。

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/yLqeYzJ?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

Let’s listen to the chord progression based on Pachelbel's Canon. This is originally from the Baroque, but [the progression is still widely used in pop songs](https://www.youtube.com/watch?v=_PC6jwoHyOk). You can probably hear that each chord is adding a color to the song playing different roles against the chords next to it. Also diatonic chords are very easy to listen to since there is no note going off of the original scale. This progression might sound even a bit boring and mundane.

パッヘルベルのカノンを元にしたコード進行を聞いてみましょう。バロック時代の曲ですが、[現代のポップソングでもよく使われる進行です](https://www.youtube.com/watch?v=_PC6jwoHyOk)。それぞれのコードが、隣のコードに対して異なる役割を果たしながら、曲に彩りを添えています。ダイアトニックコードは、元のスケールから外れる音がないので、とても聴きやすく聞こえます。むしろありきたりで少し退屈にさえ聞こえるかもしれません。

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/YzjwBqW?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

A practical theory book would explain the functions of these chords in detail next, but we are going to derail from the path and stack the notes with different intervals.

実用的な理論書であれば、次にこれらの和音の機能を詳しく説明すると思うのですが、ここでは脱線して、異なる音程で音を重ねてみることにします。

# Quartal Chord
# 四度堆積和音

All the diatonic chords were built by skipping one note from the root (3 degrees steps). This time we will stack the note by skipping two (4 degrees steps) ([see this page for degrees](https://en.wikipedia.org/wiki/Degree_\(music\))).

ダイアトニックコードは全て1つ飛ばしの音程（3度）でしたが、今度は2つ飛ばし（4度）で重ねてみます（[度数についてはこちらを参照](https://ja.wikipedia.org/wiki/%E9%9F%B3%E5%BA%A6)）。

Counting by semitones, only the interval between F and B is 6, and everywhere else is 5.

半音で数えるとFとBの間だけが6、それ以外は全て5になります。

[![](/images/numbers-and-intervals-1.png)](/images/numbers-and-intervals-1.png)

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/abjdvxG?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

This harmony has a more ambiguous sound than the more “pop” diatonic chords. One of  the most iconic uses of quartal chords is in [Miles Davis’s "So what" with Bill Evans on piano](https://www.youtube.com/watch?v=zqNTltOGh5c), which marks a major turning point to introduce non-functional progression in jazz (though quartal chords were already widely used in classical music, which the band was clearly influenced by).

この和音は、より”ポップ”なダイアトニックコードに比べて、より曖昧な響きをもっています。四度堆積和音の最も象徴的な使用例は、[マイルス・デイヴィスがビル・エヴァンスをピアノに迎えた「So what」で](https://www.youtube.com/watch?v=zqNTltOGh5c)、非機能的な進行をジャズに導入する大きな転機となった作品です（ただし、クラシック音楽ではすでに四度堆積が広く使われており、バンドは明らかにその影響を受けています）。

Twelve and five are prime to each other. Repeating 5 semitone moves on the circle will cycle through all the notes and come back to the original note (ignoring octaves). Compare this to [the circle of fifths](/sketching-with-math-and-quasi-physics/wave/pitch-and-frequency).

12と5は互いに素です。円の上を半音5個ずつ移動していくと（オクターブを無視すれば）全ての音を巡回して元の音に戻ってきます。[サークルオブフィフス](/sketching-with-math-and-quasi-physics/wave/pitch-and-frequency)とも比べてみましょう。

<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>A</mi><mtext>  </mtext><mi mathvariant="normal">∣</mi><mtext>  </mtext><mi>D</mi><mtext>  </mtext><mi mathvariant="normal">∣</mi><mtext>  </mtext><mi>G</mi><mtext>  </mtext><mi mathvariant="normal">∣</mi><mtext>  </mtext><mi>C</mi><mtext>  </mtext><mi mathvariant="normal">∣</mi><mtext>  </mtext><mi>F</mi><mtext>  </mtext><mi mathvariant="normal">∣</mi><mtext>  </mtext><mi>A</mi><mi mathvariant="normal"></mi><mo stretchy="false">(</mo><mi>B</mi><mi mathvariant="normal"></mi><mo stretchy="false">)</mo><mtext>  </mtext><mi mathvariant="normal">∣</mi><mtext>  </mtext><mi>D</mi><mi mathvariant="normal"></mi><mo stretchy="false">(</mo><mi>E</mi><mi mathvariant="normal"></mi><mo stretchy="false">)</mo><mtext>  </mtext><mi mathvariant="normal">∣</mi><mtext>  </mtext><mi>G</mi><mi mathvariant="normal"></mi><mo stretchy="false">(</mo><mi>A</mi><mi mathvariant="normal"></mi><mo stretchy="false">)</mo><mtext>  </mtext><mi mathvariant="normal">∣</mi><mtext>  </mtext><mi>C</mi><mi mathvariant="normal"></mi><mo stretchy="false">(</mo><mi>D</mi><mi mathvariant="normal"></mi><mo stretchy="false">)</mo><mtext>  </mtext><mi mathvariant="normal">∣</mi><mtext>  </mtext><mi>F</mi><mi mathvariant="normal"></mi><mo stretchy="false">(</mo><mi>G</mi><mi mathvariant="normal"></mi><mo stretchy="false">)</mo><mtext>  </mtext><mi mathvariant="normal">∣</mi><mtext>  </mtext><mi>B</mi><mtext>  </mtext><mi mathvariant="normal">∣</mi><mtext>  </mtext><mi>E</mi><mtext>  </mtext><mi mathvariant="normal">∣</mi><mtext>  </mtext><mi>A</mi></mrow><annotation encoding="application/x-tex">A \;|\; D \;|\; G \;|\; C \;|\; F \;|\; A(B) \;|\; D(E) \;|\; G(A) \;|\; C(D) \;|\; F(G) \;|\; B \;|\; E \;|\; A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">A</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord">∣</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">D</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord">∣</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord mathnormal">G</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord">∣</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord mathnormal" style="margin-right:0.07153em;">C</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord">∣</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">F</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord">∣</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord mathnormal">A</span><span class="mord"></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.05017em;">B</span><span class="mord"></span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord">∣</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">D</span><span class="mord"></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.05764em;">E</span><span class="mord"></span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord">∣</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord mathnormal">G</span><span class="mord"></span><span class="mopen">(</span><span class="mord mathnormal">A</span><span class="mord"></span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord">∣</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord mathnormal" style="margin-right:0.07153em;">C</span><span class="mord"></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.02778em;">D</span><span class="mord"></span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord">∣</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">F</span><span class="mord"></span><span class="mopen">(</span><span class="mord mathnormal">G</span><span class="mord"></span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord">∣</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord mathnormal" style="margin-right:0.05017em;">B</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord">∣</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord mathnormal" style="margin-right:0.05764em;">E</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord">∣</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord mathnormal">A</span></span></span></span>

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/BaPjgwE?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

# Factoring an octave
# オクターブの因数分解

## Whole tone scale
## ホールトーンスケール

12 = 2 x 2 x 3, so an octave can be divided into equal intervals by 2, 3, 4, and 6 semitones.

12は2 x 2 x 3 なので、1オクターブは2、3、4、6の半音で均等に分けることができます。

Dividing an octave by two semitones results in a six-notes scale with a mysterious feeling called a whole tone. It evokes [Debussy,](https://www.youtube.com/watch?v=yEsipgSbKLk) or from Jazz, [Wayne Shorter’s “Juju”](https://www.youtube.com/watch?v=-l8pkVPYykE).

半音2つでオクターブを分けるとホールトーンという、不思議な感じがする6音の音階が得られます。[ドビュッシー](https://www.youtube.com/watch?v=yEsipgSbKLk)や、ジャズだと[ウェイン・ショーターの「Juju」](https://www.youtube.com/watch?v=-l8pkVPYykE)などが思い浮かびます。

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/WNKrOBw?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

## Diminished Chord
## ディミニッシュコード

Dividing by 3 semitones dissects the octave into four parts. If we stack the four notes three semitones apart from each other, we get a chord called the diminished seventh.

半音3つで割るとオクターブを4分割できます。半音3つづつ離れた4つの音をを重ねるとディミニッシュ7thというコードになります。

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/NWBxQGN?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

This chord sounds dissonant on its own, but when used to bridge between other chords, it makes very smooth transitions that you often find in Bossa nova and other chill music, like Lofi hop lately.

このコードは単体だと不協和に聞こえますが、他のコードの間を繋ぐように使うと非常に滑らかに聞こえます。ボサノバやまったり系の音楽、最近だとLofi hopなどでもよく耳にします（Jポップでもよく登場します）。

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/wvxMqgz?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

## Diminished Scale
## ディミニッシュスケール

Stacking two diminished chords with a semitone off from each other makes an eight-note scale called the diminished scale. Let's play it randomly like in an improvisation.

ディミニッシュコードを半音ずらして2つ重ねるとディミニッシュスケールという8音の音階が作れます。即興演奏風にランダムに鳴らしてみます。

> 
> 
> コンディミ、コンビネーションオブディミニッシュスケールという呼び方は日本だけで使われているようです。英語だと単にdiminished scale、またはhalf whole tone scale、特に半音が1、2、と並ぶものをドミナント7thの上で使う場合はdominant diminished scaleと呼んだりします。

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/WNKrEJE?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

## Augmented Chord
## オーギュメントコード

Now dividing the octave by 4 semitones, we get the augmented chord. You could think it as a chord built upon the whole tone scale, or on the augmented scale we see the next. This unsettling sound is the very first chord of [“Oh! Darling” by the Beatles](https://www.youtube.com/watch?v=yKN823UrUi0).

オクターブを半音4つで割ると、オーギュメントコードが得られます。ホールトーンスケールの上か、または次に見るオーギュメントスケールの上に作られたコードと考えることもできます。この不穏な音は、[ビートルズの「Oh! Darling」](https://www.youtube.com/watch?v=yKN823UrUi0)の冒頭のコードでもあります。

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/eYjJEdV?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

## Augmented Scale
## オーギュメントスケール

Stacking two augmented chords with a semitone off from each other makes the six-note augmented scale.

オーギュメントコードを半音ずらして2つ重ねるとオーギュメントスケールという6音の音階が作れます。

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/ZEjQZOX?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

## Tritone
## トライトーン

A set of two notes that are 6 semitones apart is called a tritone. This is said to be one of the most dissonant combinations, and the ratio of the frequencies is <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>2</mn><mrow><mn>6</mn><mi mathvariant="normal">/</mi><mn>12</mn></mrow></msup><mo>=</mo><msqrt><mn>2</mn></msqrt></mrow><annotation encoding="application/x-tex">2^{6/12} = \sqrt{2}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.888em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.888em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">6/12</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.04em;vertical-align:-0.1328em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.9072em;"><span class="svg-align" style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord" style="padding-left:0.833em;"><span class="mord">2</span></span></span><span style="top:-2.8672em;"><span class="pstrut" style="height:3em;"></span><span class="hide-tail" style="min-width:0.853em;height:1.08em;"><svg xmlns="http://www.w3.org/2000/svg" width="400em" height="1.08em" viewBox="0 0 400000 1080" preserveAspectRatio="xMinYMin slice"><path d="M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z"></path></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1328em;"><span></span></span></span></span></span></span></span></span>.

半音6つ分離れた2つの音の組み合わせはトライトーンと呼ばれます。最も不協和な組み合わせのひとつと言われ、周波数の比は<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>2</mn><mrow><mn>6</mn><mi mathvariant="normal">/</mi><mn>12</mn></mrow></msup><mo>=</mo><msqrt><mn>2</mn></msqrt></mrow><annotation encoding="application/x-tex">2^{6/12}= \sqrt{2} </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.888em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.888em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">6/12</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.04em;vertical-align:-0.1328em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.9072em;"><span class="svg-align" style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord" style="padding-left:0.833em;"><span class="mord">2</span></span></span><span style="top:-2.8672em;"><span class="pstrut" style="height:3em;"></span><span class="hide-tail" style="min-width:0.853em;height:1.08em;"><svg xmlns="http://www.w3.org/2000/svg" width="400em" height="1.08em" viewBox="0 0 400000 1080" preserveAspectRatio="xMinYMin slice"><path d="M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z"></path></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1328em;"><span></span></span></span></span></span></span></span></span>となります。

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/xxJZeWm?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

Creating tension with a tritone and then easing it with the next chord is one of the most important patterns in Western music. The most common example is from G7 (G B D F - the combination of B and F is the tritone) to C (C E G). The example below moves from A diminished 7th chord, which has two tritones, to C6.

This move from tension to relaxation is called "resolution" and for example we can say "The A dim7 resolves to C6".

トライトーンで緊張感を作り出し、それを次の和音で緩和するのは西洋音楽の重要なパターンのひとつです。最も一般的な例はG7（G B D F  - BとFの組み合わせがトライトーン）からC（C E G）への移動です。下の例ではトライトーンを2つ含むディミニッシュ7thコードからC6に移動してみます。

この緊張から緩和への流れを「解決」と呼び、例えば「A dim7からC6に解決する」といった言い方をします。

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/GRBoLmg?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

# Triad
# トライアド

The major, minor, diminished mentioned earlier, plus augmented chords are called triads (in some context, any combination of three notes is called a triad). They are simply combinations of three and four semitone intervals, but each has a completely different feeling.

序盤に出てきたメジャー、マイナー、ディミニッシュコードにオーギュメントコードを足してトライアド（三和音）と呼びます（場合によっては3つの音の組み合わせならなんでもトライアドと呼ぶこともあります）。半音3つと4つの音程を組み合わせただけですが、それぞれ全く表情が異なります。

-   (4, 4) Augmented オーギュメント

-   (4, 3) Major メジャー

-   (3, 4) Minor マイナー

-   (3, 3) Diminished ディミニッシュ

Sometimes it is helpful to [break down more complex chords into triads](https://www.youtube.com/watch?v=K7y1Bssd0f4) to understand them. Major 7th, minor 7th, etc. have been used in the examples without explanation . They can be broken down as follows, which sound like happy sad, and sad happy chords roughly speaking.

-   Major 7th (4, 3, 4) = major chord (4, 3) + minor chord (3, 4)

-   Minor 7th (3, 4, 3) = minor chord (3, 4) + major chord (4, 3)

[より複雑な和音をトライアドに分解する](https://www.youtube.com/watch?v=K7y1Bssd0f4)ことが理解の役に立つことがあります。上でメジャー7th、マイナー7thといったコードを説明なしに使いましたが、これらは下記のように分解でき、雑にいうとそれぞれ明るさの中に暗さ、暗さの中に明るさを持ったような響きがします。

-   メジャー7th (4, 3, 4) = メジャーコード (4, 3) + マイナーコード (3, 4)

-   マイナー7th (3, 4, 3) = マイナーコード (3, 4) + メジャーコード (4, 3)

[![](/images/numbers-and-intervals-2.png)](/images/numbers-and-intervals-2.png)

Let’s see some examples.

いくつか例をみてみましょう。

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/XWBXwgL?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

In the slightly more song-like example below, the chord (F major 9th) chord is repeated every second time. Notice how the same chord can sound different depending on the preceding chord.

下のもう少し曲っぽい例では、2回に1回同じコード（Fメジャー9th）が繰り返されています。直前のコードによって同じコードが違って聞こえる様子にも注目してみてください。

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/wvxGqmW?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

# Close both of my eyes
# 私の両目を閉じてください

We have seen how various sounds are created by simple rules and relationships of numbers. Let's look at one last example that seems to trying to defy regularity. This is the sequence of notes in Alban Berg's 1925 piece, "Schliesse mir die Augen beide (Close both of my eyes)”. It goes through all the 12 notes, and counting the distances between them (clockwise) we get (11, 8, 9, 10, 7, 6, 5, 2, 3, 4, 1). The same interval never appears twice.

単純な数の規則や関係によって様々なサウンドが作られる様子をみてきました。最後に1つ、規則性に抗うような例を見てみましょう。アルバン・ベルクによる1925年の曲「私の両目を閉じてください」の音列です。これは12音全てを経過する上に隣同士の距離を（右回りで）数えると（11, 8, 9, 10, 7, 6, 5, 2, 3, 4, 1）となり、同じ音程が2度と出現しないようになっています。

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/QWByXVb?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

(I read that) this piece is one of the first of the [12-tone technique](https://en.wikipedia.org/wiki/Twelve-tone_technique), and it shows an attempt to deviate from conventional music by capturing the relationship between notes with numbers. On the other hand, it is interesting that the first six notes seem to be in C major and the second six notes are in G major, which gives a sense of tonality.

この曲は[12音技法](https://ja.wikipedia.org/wiki/%E5%8D%81%E4%BA%8C%E9%9F%B3%E6%8A%80%E6%B3%95)の最初期のものだそうですが、音の関係を数で捉えることによって従来の音楽から逸脱しようとする試みが見て取れます。一方で前半6音はCメジャー、後半6音はGメジャーと調性が感じられる様になっているのが面白いところです。

[https://www.youtube.com/watch?v=UrBZQPqgqbM](https://www.youtube.com/watch?v=UrBZQPqgqbM)
