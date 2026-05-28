---
title: "About Patterns パターンについて"
---
Humans are wired to spot patterns. Our ancestors survived by recognizing various footprints to avoid danger and find food, spots and dots on fur, rotational patterns of petals, cycles of the sun, moon, stars and repeating seasons, tides, and weather.

人間はパターンを見つけるようにできています。祖先たちは、様々な足跡を認識して危険を避けたり、食料を見つけたり、動物の毛皮の斑点や模様、花びらの回転パターン、太陽・月・星の周期、季節の移り変わり、潮の満ち引き、天候の変化などを理解したりして生き延びてきました。

Repeating patterns are fundamental to design and art. We see them everywhere, like in the repeating columns of ancient buildings, brick patterns, glass tiles on skyscrapers, and street pavements. Checkers, stripes, and other repeating motifs appear universally in decoration and textiles. Musicians create structure through rhythms, phrases, and chord cycles.

繰り返しのパターンはデザインや芸術の基本要素です。古代建築の柱列、レンガの模様、高層ビルのガラスタイル、街路の舗装など、周りにはパターンが溢れています。チェック柄、縞模様、その他の繰り返しのモチーフは装飾や織物に普遍的に見られ、音楽家たちはリズムや、フレーズ、コード進行を通じて音楽の構造を組み立てます。

Patterns are powerful vocabulary. Following patterns makes things predictable. It is often relaxing and comforting, but intense rhythm can also bring energy and even trance. Breaking a predictable rhythm creates tension, drawing people's attention, and going back and forth between tension and familiar patterns is a way to drive a song or a story.

パターンは力強い表現手段です。パターンに従うことで物事は予測可能となり、多くの場合、安らぎとリラックスをもたらす一方で、強烈なリズムはエネルギーや陶酔感を生み出すこともできます。予想通りのリズムを壊すことで生まれる緊張感によって注意を引いたり、緊張と馴染みのあるパターンを往復することが、楽曲や物語を展開させることができます。

> 
> 
> This is an article to introduce various topics in [Sketching with Code](/sketching-with-math-and-quasi-physics), illustrating the relationships between them and adding more context to provide a sort of overview. The articles are not in order of difficulty. Please just jump to whichever one interests you.
> 
> これは [Sketching with Math and Quasi Physics](/sketching-with-math-and-quasi-physics) 上の様々なトピックについて、それぞれの間の関係や概要を示したり、新たな文脈を加えたりするためのページです。難易度順には並んでいないので、興味のある記事から自由に読んでみてください。

# Repetition 繰り返し

At the basis of patterns is repetition. We recognize patterns because the same thing happens again and again.

パターンの基礎は繰り返しです。同じことが何度も起こるからこそ、私たちはパターンを認識できるのです。

There are many methods to create and handle repetitions mathematically and programmatically.

繰り返しを数学的にまたはプログラム的に作ったり扱う方法は数多くあります。

For example, modulo is basically a mathematical way of saying "count to <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>n</mi></mrow><annotation encoding="application/x-tex">n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">n</span></span></span></span> then go back to one and repeat," which is just dividing a number by another number and taking the remainder. This is common in everyday life, like the time on a clock or the days of a week, and is a basis for many repeating patterns, such as repeating tiles and musical rhythms below.

例えば、モジュロ（剰余演算）は「<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>n</mi></mrow><annotation encoding="application/x-tex">n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">n</span></span></span></span>まで数えて1に戻って繰り返す」ことを数学的に表す方法で、これは単にある数を別の数で割った余りを求めることです。これは時計の時刻や曜日のように、日常生活でよく目にします。

[![](/images/about-patterns.png)](/images/about-patterns.png)

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/PwwgbQx?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

This can be easily expanded to repetition of continuous values.

この考え方は、連続する値の繰り返しにも簡単に応用することができます。

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/zYXwvGv?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

[Repetition 繰り返し](/sketching-with-math-and-quasi-physics/patterns/repetition)

# Sine waves サイン波

The sine wave is another fundamental building block for repeating patterns. A mind-blowing fact is that with an infinite set of sinusoidal waves, each with its own frequency, amplitude, and phase, you can synthesize any pattern in theory. This idea is called the Fourier series for repeating patterns and the Fourier transform for ones that don’t. They are so universal and useful that you'll bump into them in many places, such as audio and signal processing, and a whole lot of physics.

サイン波は繰り返しパターンの基本的な構成要素の1つです。驚くべきことに、固有の周波数、振幅、位相を持つ無限個のサイン波を組み合わせると、理論上はどのようなパターンでも合成できます。繰り返しを持つパターンについてはフーリエ級数、そうでないものにはフーリエ変換を用いてこの原理が使えます。これらは非常に普遍的で実用的なため、音声処理、信号処理、そして物理学の様々な分野で活用されています。

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/zzOZPM?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

[Sine waves and Additive Synthesis サイン波と加算合成](/sketching-with-math-and-quasi-physics/wave/sine-waves-and-additive-synthesis)

[Fourier Series フーリエ級数](/sketching-with-math-and-quasi-physics/fourier-series)

# Tiling タイリング

Tiling is one of the most obvious visual patterns. By repeating the same elements in a space, or dividing a space based on some rules, we can create various interesting patterns that can continue forever.

タイリングは最も分かりやすい視覚的なパターンの1つです。空間内で同じ要素を繰り返したり、特定のルールに基づいて空間を分割したりすることで、無限に広がる多様な魅力的なパターンを生み出せます。

The patterns can be simple repetition of the same geometric shapes to something more unique and interesting like M. C. Escher’s drawings. There are patterns that are not exactly regular and predictable like Penrose tiles or Truchet tiles.

これらのパターンは、単純な幾何学模様の繰り返しから、M. C. エッシャーの作品のような独創的で魅力的なものまで及びます。ペンローズタイルやトルシェタイルのように、厳密な規則性や予測可能性を持たないパターンも存在します。

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/zYbVYWe?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/NWmpKNY?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

A Voronoi diagram is a method to create more organic patterns. Cells in Voronoi diagrams are all different, but humans can still see that they follow the same rules or a "pattern." Just like when you look through a microscope, no cells in nature are exactly the same, but we can intuitively see they are the same thing regardless.

ボロノイ図は、より自然で有機的なパターンを生み出す手法です。ボロノイの各セルは異なる形を持ちますが、人間はそれらが共通のルールや「パターン」に従っていることを認識できます。自然にある細胞を顕微鏡で観察するときのように、完全に同一のものは存在しませんが、私たちは直感的にそれらが同じ種類のものだと理解できるのです。

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/ZEZLQLo?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

# Rhythm
# リズム

Instead of dividing space, we can create musical rhythm by dividing time. Even within the same tempo and time signature, time can be divided differently, and the way you divide dictates the "feel" of the rhythm. Experienced musicians have a finely tuned resolution of time, meaning they can feel this division more granularly and accurately and precisely position their notes. Many players also adjust the timing slightly off from the exact timing naturally or intentionally to create add more nuances, such as heavy or bouncy rhythms.

空間の代わりに時間を分割すると音楽的なリズムを作り出せます。同じテンポと拍子記号で演奏していても、さまざまな仕方で時間を分割することができ、どのように分割するかがリズムの「感じ」を決定します。経験豊富なミュージシャンは時間に対して非常に高い解像度を身につけていて、この分割をより詳細かつ正確に感じ取り、狙い通りに音を配置することができます。演奏者の多くは、自然に、あるいは意図的に、正確なタイミングから微妙にずらすことで重厚な感じや弾んだ感じといったニュアンスを加えたりもします。

> 
> 
> Click on "Run Pen", then click one more time to play the sound.  
> 「Run Pen」をクリックした後もう一度クリックすると音が再生されます。

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/jOJLoRP?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

> 
> 
> Music has many layers of repetition beyond basic drum loops. From guitar riffs that stick in your head to rhythmic and melodic patterns of phrases, song structure is built by repeating different sections, such as verses, bridges, and choruses. There is so much more that I can write here that we can talk about.
> 
> 音楽には基本的なドラムループ以外にも、さまざまな層の繰り返しがあります。頭から離れないギターリフ、フレーズのリズムやメロディのパターン、そして楽曲構造は、バース、ブリッジ、コーラスといった異なるセクションの繰り返しで形作られています。音楽にはここに書けるよりもずっと多く語れることがあります。

# Randomness ランダムさ

Again, nothing follows a perfectly regular pattern. Randomness is a great tool that can help make our sketches more interesting and natural. Randomness is, by definition, hard to predict, but that doesn't mean it's uncontrollable. There are many different ways to "shape" randomness for your purpose.

繰り返しになりますが、完全に規則正しいパターンに従うものは存在しません。ランダムさは、スケッチをより面白く自然にするための優れたツールです。ランダムさは本質的に予測困難ですが、それは制御できないということではありません。目的に合わせてランダムさを「形作る」方法はたくさんあります。

Let’s take a die as an example. A single throw of a fair die is completely unpredictable. The probability for all possible results is equal. But if you throw it twice and sum the results, you will get more 7s than 12s. The more times you throw a die, the more the sum or average will converge to a certain expected value. This is called [the Law of Large Numbers](https://en.wikipedia.org/wiki/Law_of_large_numbers).

サイコロを例に考えてみましょう。公平なサイコロの1回の目は完全に予測不可能で、すべての目が同じ確率で出ます。しかし2回振って合計すると、12よりも7の方が出やすくなります。振る回数を重ねるほど、合計値や平均値は特定の期待値に近づいていきます。これは[大数の法則](https://en.wikipedia.org/wiki/Law_of_large_numbers)と呼ばれています。

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/vmvVNB?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

You can also apply some function to random results to adjust the distribution. For example, if you take a square of a random floating number from 0.0 to 1.0, you get this shape.

ランダムな結果を関数で加工して分布を調整することもできます。例えば、0.0から1.0の範囲のランダムな浮動小数点数を2乗すると、このような分布になります。

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/xdmybQ?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

Can you see the difference between these two cityscapes? These are made by using the exact same regular grid with two different functions that give them subtly different impressions.

この2つの街並みの違いがわかるでしょうか。この2つは同じ規則的なグリッドに異なる関数を適用して微妙に異なる印象になるように作られています。

In most cities, building heights in the suburbs show little variation because nearly everything is only a few stories tall. Downtown, though, the range is much wider. While many buildings are still modest in height, a handful of skyscrapers rise far above the rest. You can think of this as a “pattern” that can repeat across many cities.

都市の郊外では、ほとんどの建物が数階建てであるため、建物の高さにあまり変化が見られません。一方で、町の中心部では建物の高さに大きな幅があります。多くの建物はそこそこの高さを保っていますが、点在する高層ビルは周囲を圧倒する高さにまで達します。これは多くの都市に共通して見られる「パターン」と言えます。

[![](/images/height-random-1-0-1-1.png)](/images/height-random-1-0-1-1.png)

height = random(1) + 0.1

[![](/images/height-pow-random-1-4-0-1-1.png)](/images/height-pow-random-1-4-0-1-1.png)

height = pow(random(1), 4) + 0.1

[Taming Randomness ランダムさを手なづける](/sketching-with-math-and-quasi-physics/taming-randomness)

# Noise Functions
# ノイズ関数

Noise functions are methods to get randomly but continuously changing, like the up and down of terrain, the change of temperature, or the direction an animal wanders. These are all unpredictable, but unlike dice rolls, they look smoothly connected and values next to each other seem to be somehow related.

ノイズ関数は、地形の起伏、気温の変化、動物の移動経路といった、ランダムでありながら連続的に変化する値を生成する手法です。これらの変化は予測不可能ですが、サイコロの目とは異なり、滑らかにつながっており、近接する値には関連性が見られます。

There are many noise function algorithms, but most major ones share a simple idea of smoothly connecting random numbers. So the values are random, but if you pick a point close to another, they return relatively close values, and there is no abrupt jump, or discontinuity between them.

ノイズ関数のアルゴリズムには様々な種類がありますが、主要なものは「ランダムな数値を滑らかにつなぐ」という基本的なアイデアで共通しています。個々の値はランダムでありながら、ある点の近くを選ぶと似通った値が得られ、値と値の間に急激な変化や不連続性は発生しないようになっています。

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/PoeWgNx?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

Noise functions are often layered by adding them together at different scales to create a more natural look. Imagine a mountain range. From far away, you see its jagged silhouette. As you hike closer, you start to see smaller ridges, and up close, you notice every rock face has tiny cracks and ledges that are similar to larger forms. It is quite a common pattern in nature for things to repeat similar shapes at many levels of zoom. You can find this in rolling clouds, breaking waves, cracked desert ground, leaf veins, and the shape of coastlines.

より自然な見た目を作り出すため、ノイズ関数を異なるスケールで重ね合わせて使うことがよくあります。山脈を想像してみましょう。遠くから見るとギザギザとした輪郭が見え、近づくにつれてより小さな尾根が現れ、さらに近くでは岩肌に大きな形と似た小さな亀裂や段差があることに気づきます。このように様々な倍率で似たような形が繰り返されることは、自然界でよく見られるパターンです。渦を巻く雲、砕ける波、ひび割れた砂漠の地面、葉脈、海岸線の形などにも、この特徴を見ることができます。

[Reading a Noise Function](/sketching-with-math-and-quasi-physics/reading-a-noise-function)

[Drawing Landscape](/sketching-with-math-and-quasi-physics/drawing-landscape)

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/WNJxXZb?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/ZYEVRGN?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

# Fractal
# フラクタル

This common pattern is called fractal. A fractal is a pattern or shape that repeats the same structure at different scales, in such a way that a part of the shape resembles the whole, and a sub-part of a part resembles the larger part.

このような広く見られるパターンはフラクタルと呼ばれます。フラクタルは、異なるスケールで同じ構造を繰り返すパターンや形のことで、形の一部が全体と似た特徴を持ち、その一部の中の更に小さな部分も同様の特徴を示します。

[![](/images/about-patterns.jpg)](/images/about-patterns.jpg)

Layering of noise functions can be seen as a way to emulate the fractal nature of the real world with a finite number of computations (for example, the landscape demo above is made of 9 iterations of the same noise). Some mathematically defined fractals, such as the Mandelbrot set or Julia set, have literally infinite details.

ノイズ関数の重ね合わせは、有限回の計算で現実の世界が持つフラクタル的な性質を真似するための方法だと考えることができます（たとえば、上の風景のデモは同じノイズを9回重ねて作られています）。一方、マンデルブロ集合やジュリア集合といった数学的フラクタルは、文字通り無限の細部を持ちます。

[![](/images/julia-set-https-en-wikipedia-org-wiki-julia-set-media-fil.gif)](/images/julia-set-https-en-wikipedia-org-wiki-julia-set-media-fil.gif)

Julia set [https://en.wikipedia.org/wiki/Julia\_set#/media/File:JSr07885.gif](https://en.wikipedia.org/wiki/Julia_set#/media/File:JSr07885.gif)

[![](/images/mandelbrot-set-https-en-wikipedia-org-wiki-mandelbrot-set.gif)](/images/mandelbrot-set-https-en-wikipedia-org-wiki-mandelbrot-set.gif)

Mandelbrot set [https://en.wikipedia.org/wiki/Mandelbrot\_set#/media/File:Self-Similarity-Zoom.gif](https://en.wikipedia.org/wiki/Mandelbrot_set#/media/File:Self-Similarity-Zoom.gif)

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/WNWXRbR?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

## Pattern Recognition and Compression
## パターン認識と圧縮

The real world is messy with infinite detail. When we see or hear things for the first time as a baby, we can't make sense of them because they are like a raw stream of data with no structure. But as we keep experiencing similar things appear and occur, our brain starts to grasp patterns. We no longer track every speck of bark on a tree, but we just think "tree." This is a shortcut to let us deal with overwhelming complexity and act quickly.

現実世界は無限の細部を持つゴチャゴチャしています。赤ちゃんが初めて物を見たり聞いたりする時には、世界は構造のない生のデータの流れのようなもので、理解することができません。しかし、似たような物事を繰り返し経験するうちに、私たちの脳はパターンを把握し始めます。樹皮の細かな模様1つ1つを追うのではなく、単に「木」として認識するようになるのです。このショートカットによって脳は圧倒的な複雑さに対処し、素早く行動できるようになります。

It works the other way around, too. When information is missing, like in a blurry photo or garbled phone call, our brain tries filling the gaps with its library of familiar patterns.

この仕組みは逆の方向でも働きます。ぼやけた写真や途切れ途切れの電話のように情報が不完全な場合、脳は蓄積された馴染みのパターンを使って、その隙間を自然に埋めようとします。

[Resolution 解像度](/sketching-with-math-and-quasi-physics/resolution)

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/PoLZywR?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

Does this sounds like data compression? Yes, many technologies like ZIP, JPEG, or MP3 borrow the basically same trick. They hunt for repeated structure in data, toss the redundant bits, and keep a smaller blueprint. Decompressors rebuild the original (or close enough) by reading that blueprint plus a few rules, just like our brain filling in a pixelated image.

これはまるでデータ圧縮のように聞こえないでしょうか。実はその通りで、ZIP、JPEG、MP3などの多くの技術は、基本的に同じことをしています。データ内の繰り返し構造を見つけ出し、冗長な部分を取り除いて、よりコンパクトな設計図として保存します。解凍プログラムは、私たちの脳がピクセル化された画像を補完するように、その設計図とルールを基に、元のデータ（またはそれに近いもの）を再構築するのです。

> 
> 
> I wanted to study and write an article about information theory and data compression. I might, someday.
> 
> 情報理論とデータ圧縮についても勉強して記事を書きたいと思っています。いつか、きっと。

> 
> 
> And AI image generation. The foundational idea of diffusion models is to show the AI the process of adding noise to an image until it becomes unrecognizable, and have it learn the backward process to re-imagine plausible details of images from noise.  
> 
> そしてAIによる画像生成についても。拡散（diffusion）モデルの基本的な仕組みは、画像が認識不可能になるまでノイズを加えていく過程をAIに見せ、ノイズから画像の妥当な細部を再構築する逆過程を学習させることです。

## Getting In and Out of Patterns
## パターンに出入りする

"Pattern" is a broad word. We started from simple repetitions and reached our recognition of the noisy world.

「パターン」は幅広い概念です。私たちは単純な繰り返しから始めて、ノイズに満ちた世界の認識まで見てきました。

At a meta level, patterns what let us make sense of the world. They are so crucial for us to grasp and organize information. But at the same time, it is also important to remember that leaning to match on patterns can make us overlook the details that matter, sliding into stereotypes and snap judgments. We need to free ourselves from familiar patterns sometimes.

メタレベルで見ると、パターンは私たちが世界を理解するための手段です。情報を把握し整理する上で、パターンは不可欠な存在です。しかし同時に、パターンへの依存が強すぎると、重要な細部を見落とし、ステレオタイプや性急な判断に陥りやすいことにも注意が必要です。時には、慣れ親しんだパターンから意識的に離れることも大切です。

A fun and useful practice is to jump between levels. Spotting big patterns while appreciating the subtle differences, nuances, and noise without falling into excessive generalizations. Master that dance and you're using your built‑in compressor to its fullest, while staying aware of both its strengths and its traps. Yes I'm taking about both life and art.

異なるレベル間を行き来することは、楽しく実り多い実践となります。過度な一般化を避けながら、大きなパターンを見出し、同時に微妙な違いやニュアンス、ノイズを楽しむ。このダンスを習得できれば、人間の持つ圧縮機能をその強みと弱点を意識しながら、最大限に活用できます。これは人生にも物作りの技にも通じます。
