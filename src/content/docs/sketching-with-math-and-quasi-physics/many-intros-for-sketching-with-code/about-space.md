---
title: "About Space  空間について"
---
We think we naturally know what space is, but do we really? In an everyday sense, space feels like a void for objects and matter to fill. We are all in space and move within space. It seems like a backdrop that exists independently of everything inside it.

空間とは何か、私たちは当然知っていると思いがちです。でも、本当にそうでしょうか。日常生活では、空間は物体や物質が存在するための空虚なものとして感じられます。私たちは皆、空間の中に存在し、その中を移動しています。空間は、その中にあるすべてから独立した、いわば背景のようなものなのです。

> 
> 
> This is an article to introduce various topics in [Sketching with Code](/sketching-with-math-and-quasi-physics), illustrating the relationships between them and adding more context to provide a sort of overview. The articles are not in order of difficulty. Please just jump to whichever one interests you.
> 
> これは [Sketching with Math and Quasi Physics](/sketching-with-math-and-quasi-physics) 上の様々なトピックについて、それぞれの間の関係や概要を示したり、新たな文脈を加えたりするためのページです。難易度順には並んでいないので、興味のある記事から自由に読んでみてください。

# Absolute space and relative space
# 絶対空間と相対空間

That's what Newton thought too. He wrote:

"Absolute space, in its own nature, without regard to anything external, remains always similar and immovable."

But Newton also thought that even if absolute space exists, it is practically inconceivable to us. Where in the absolute are we? We'd never know. So he continues:

"Relative space is some movable dimension or measure of the absolute spaces; which our senses determine by its position to bodies."

ニュートンもそう考え、こう書いています。

「絶対空間は、それ自体の本性において、外部の何ものにも依存せず、常に同一で不動である。」

しかし彼は、たとえ絶対空間が存在したとしても、人間には実際に把握できないとも考えていました。我々が絶対空間の中のどこにいるのかは誰にもわかりません。ニュートンはこう続けます。

「相対空間とは、絶対空間のある種の可動的な次元または尺度であり、私たちの感覚が物体との位置関係によってそれを定めるものである。」

What he is saying is that we can only measure position relative to something. When we walk, we know we move relative to the ground, or the Earth. The revolution of the Earth is the movement relative to the Sun. Then the Sun or the solar system moves relative to the galaxy. From a relativistic perspective, both geocentrism and heliocentrism can be seen as correct in their own reference frames, but neither is absolutely correct. It's just that heliocentrism provides a much simpler model for the motion of planets.

つまり我々には何かに対する相対的な位置しか測ることができないと言っているのです。人が歩くとき、地面つまり地球に対して相対的に動いていることはわかります。地球の公転は太陽に対する相対的な運動です。そして太陽や太陽系は銀河に対して相対的に動いています。相対的に見ると、天動説も地動説も、それぞれの基準となる枠組みの中では正しいと言えますが、どちらも絶対的に正しいわけではありません。ただ、惑星の運動を説明するモデルとしては、太陽中心説の方がはるかに単純です。

> 
> 
> However, there is a huge gap between those who only believe in geocentrism and those who discovered heliocentrism, or dogmatists and inquirers. “[Orb - on the movement of earth](https://www.netflix.com/title/81765022)” is a great historical fiction on this topic.  
> 天動説だけを信じる者と地動説を発見した者、教条主義者と探究者の間には大きな隔たりがあります。「[チ。-地球の運動について-](https://ja.wikipedia.org/wiki/%E3%83%81%E3%80%82-%E5%9C%B0%E7%90%83%E3%81%AE%E9%81%8B%E5%8B%95%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6-)」はこのトピックについての最高の歴史フィクションです。

# Drawing on a 2D canvas
# 2Dキャンバスに描く

We want to draw stuff on a computer. To do that, we need to have three things: an origin (a reference point to measure the position relatively from), axes along which we measure distances, and a unit to define what distance corresponds to a number 1.  
コンピューターで何かを描くには、3つの要素が必要です。原点（相対的な位置を測るための基準点）、距離を測る軸、そして数値の1が示す距離を定義する単位です

In theory, you can pick them freely, but most software has its own default coordinate system. For 2D drawing, like Photoshop, Illustrator, Figma, P5.js, and openFrameworks, the origin is usually the top-left corner of a canvas, and axes are horizontal (x) and vertical (y). The unit is usually a pixel or the device unit. For example, on a Retina display Mac, 1 point corresponds to 2 or 3 (or other numbers depending on your settings) physical pixels. This factor is set so that the numbers you choose appear about the same size perceptually regardless of the actual resolution of the device.

これらは理屈の上では自由に選べますが、ほとんどのソフトウェアはそれぞれデフォルトの座標系を持っています。Photoshop、Illustrator、Figma、P5.js、openFrameworksなどでは、2D描画の原点は大抵キャンバスの左上隅にあり、軸は水平（x）と垂直（y）方向です。単位は一般的にピクセルまたはデバイスユニットを使います。例えば、RetinaディスプレイのMacでは、1ポイントは2から3、設定によって他の数の物理的なピクセルに相当します。この換算によって、デバイスの実際の解像度に関係なく、選択した数値が視覚的に同じ大きさに見えるよう調整されているのです。

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/vEYRKGd?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

> 
> 
> A bit more about “perceptually the same size” : for example, text of size “14” is usually rendered smaller on mobile devices than on a laptop, and much bigger on a TV, because these devices are designed to be seen from different viewing distances. There is no perfect formula for this, but most manufacturers converge in the same range, so you don't have to worry too much about each device separately.
> 
> 「知覚的に同じ大きさ」についてもう少し説明します。例えば、サイズが「14」のテキストは、モバイルデバイスではラップトップより小さく、テレビではかなり大きく表示されます。これは、各デバイスを見るユーザの距離の違いを考慮した設計になっているためです。完璧な計算式は存在しませんが、メーカーの多くが似たような範囲の値に落ち着いているため、個々のデバイスについて心配する必要はありません。

I said "default" because in many cases, you can manipulate the space, or rather the coordinate system. In design tools, you can drag the canvas and zoom in and out. Programming frameworks often provide methods to translate, scale and rotate the space, such as p5.js's translate(), scale(), rotate() functions, or you can write your own functions to process the coordinates. You can also skew the space. Axes are usually selected to cross at 90° but this isn't necessary. As long as they are independent, meaning they are not parallel, you can express a position uniquely by selecting one value for each of the axes.

「デフォルト」という言葉を使ったのは、多くの場合、空間や座標系を自由に操作できるからです。デザインツールではキャンバスをドラッグしたり拡大縮小したりでき、コーディングのフレームワークでは、p5.jsのtranslate()、scale()、rotate()関数のように、空間を平行移動、拡大縮小、回転させるメソッドが用意されています。座標を処理する関数を自分で書いて空間を歪めることもできます。軸は通常90°で交わりますが、これも必須ではありません。軸が平行でない（つまり独立している）限り、各軸に1つの値を選ぶことで位置を一意に表現できます。

The demo below from the [Mapping 写像](/sketching-with-math-and-quasi-physics/mapping) page demonstrates affine transformation, which is a simple method to enable these kinds of coordinate transformations.

下の[Mapping 写像](/sketching-with-math-and-quasi-physics/mapping)ページからのデモはアフィン変換という、このような座標変換を行うシンプルな手法の例です。

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/PwYraqe?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

[Mapping 写像](/sketching-with-math-and-quasi-physics/mapping)

# Newtonian mechanics in 2D
# 2次元のニュートン力学

Once you have a coordinate system, you can move things around in this space. Newtonian physics is the perfect starting point.

座標系があれば、空間の中でものを動かすことができます。ニュートン力学は、その出発点として完璧です。

In Newtonian physics, you start from a position, then apply velocity to move it, and apply acceleration to change the velocity. All of these are expressed by vectors, which is basically just a few numbers (called components) put together. Expressing them as vectors makes it much easier to handle them, as opposed to manipulating the values per axis, and there are several very useful operations defined for vectors that you cannot avoid because they're too good.

ニュートン力学では位置から始めて、速度を適用して動かし、加速度を適用して速度を変化させます。これらはすべてベクトルで表現され、ベクトルとは基本的には（成分と呼ばれる）複数の値を組み合わせたものです。軸ごとに値を操作するのではなく、ベクトルとして表現することで、扱いがはるかに簡単になります。また、ベクトルには非常に便利な演算が定義されていて、便利すぎて避けては通れないほどです。

[Newton and Vectors ニュートンとベクトル](/sketching-with-math-and-quasi-physics/newton-and-vectors)

[Vector Operations ベクトルの操作](/sketching-with-math-and-quasi-physics/vector-operations)

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/xdNwao?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/YzLJOgp?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

# 3D Graphics
# 3Dグラフィックス

Of course, what comes after 2D is 3D. Moving up one dimension is just simple. You define a position is a vector with 3 components instead of 2. Do the same for the velocity, acceleration, etc. as long as they are defined as vectors, the math stays basically the same.

もちろん、2Dの次は3Dです。次元を1つ上げるのは簡単です。位置を定義する際に、2つのではなく3つの成分を持つベクトルを使います。速度や加速度なども同様で、ベクトルとして定義されるている限り、数学的な扱いは基本的に同じです。

What is different, and can be a lot more challenging, is rendering. Because your canvas is 2D, you cannot just place things defined in a 3D space on it. You need to translate the points in 3D space to 2D space somehow. This is called projection, which dates back to the 15th century during Brunelleschi's time.

異なる部分、そしてより大きな課題なのがレンダリングです。キャンバスは2Dなので、3D空間で定義されたものはそのまま置けません。3Dの点を2Dになんとかして翻訳する必要があります。これをプロジェクション（投影）と呼び、15世紀のブルネレスキの時代にまで遡る技法です。

[Projection and 3D Rendering プロジェクションと3Dレンダリング](/sketching-with-math-and-quasi-physics/projection-and-3d-rendering)

<div class="instagram-wrap"><blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/C0QSVPLLtmA/" data-instgrm-version="14" style="width:100%;max-width:540px;margin:0;border:none;border-radius:4px;padding:0;"></blockquote></div>

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/rNPeRWX?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

Also, to make things look 3D, lighting or shading (basically the same thing — you add light to the scene, which creates shade too) plays an important role. Without light and shade, a sphere would look like just a circle. Shadows casting from one object onto another will clarify their spatial relationship.

また3Dらしく見せるためには、ライティングやシェーディング（基本的に同じことで、シーンに光を加えれば影も生まれます）が重要です。光と影がなければ、球は単なる円のように見えてしまいます。物体から別の物体に落ちる影は、位置の関係をわかりやすく示してくれます。

[Light 光](/sketching-with-math-and-quasi-physics/light)

> 
> 
> It is your choice of style though. You can choose to draw your scene flat and cartoonish.
> 
> とはいえスタイルの選択は自由です。漫画っぽくフラットでに描画することもできます。

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/RwYqGyK?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

# Higher dimensions
# 高次元の空間

You can go up to higher dimensions. No matter how much you go up, vectors will help you keeping the math the same.

より高次元の空間に行くこともできます。どれだけ次元を上げても、ベクトルを使えば数学的な扱いは同じままです。

[![](/images/square-from-the-flatland-meeting-with-sphere-to-find-the-exi.png)](/images/square-from-the-flatland-meeting-with-sphere-to-find-the-exi.png)

Square from the flatland meeting with Sphere to find the existence of the higher dimension  
フラットランドのスクエア氏がが球体と出会い、高次元の存在を知る場面

Thinking about higher dimensions not usually for graphics, but any data that can be represented with multiple numeric parameters are thought as a vector in multi dimensional space, with each parameter corresponding to a single axis. Then you can apply familiar concepts and operations to the data, such as addition, multiplication, calculating distance and angle, etc.

高次元の空間はグラフィックスではあまり使用しませんが、複数の数値パラメータを持つデータは多次元空間のベクトルとして扱うことができ、それぞれのパラメータを1つの軸に対応させることができます。こうすれば、加算、乗算、距離や角度の計算といった馴染みのある概念や演算をデータに適用できるようになります。

In fact, large language models (LLM) represent concepts like "dog," "human," "run," "happy," etc. as points in a mega-multidimensional space (like, 3072 dimensions), and you can do math between them to, for example, measure conceptual distance or similarity between two words or sentences. Getting familiar with this is critical for understanding how current AI models work.

実際、大規模言語モデル（LLM）は「犬」「人間」「走る」「幸せ」といった概念を超多次元空間（例えば3072次元）上の点として表し、その間で演算を行うことで、2つの単語や文章の間の概念的な距離や類似性を測ります。これは現在のAIモデルの仕組みを把握する上でとても重要です。

[Dimensions 次元](/sketching-with-math-and-quasi-physics/dimensions)

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/vYqqGmP?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

# Color Spaces
# 色空間

Colors can be represented with a series of numbers, such as R, G, and B. So they are vectors, and they live in a space. In fact, people have invented many different spatial models to represent colors "accurately" for different purposes. Imagining the relationship of colors spatially helps grasping them holistically and intuitively. Changing the hue is rotation, brightening is ascending, etc. Each different color model organizes colors differently, offering different mental models. Choosing the right model for your purpose can be critical for making your work easy and look good.

色はR、G、Bなどの数値の組み合わせで表現できます。つまり、色はベクトルとして空間の中に存在しているのです。実際、人々は様々な目的に合わせて色を「正確に」表現するための異なる空間モデルを生み出してきました。色の関係を空間的にイメージすることで、色全体を直感的に把握できます。たとえば、色相を変えるのは回転として、色を明るくするのは上昇として捉えられます。それぞれの色モデルは独自の方法で色を整理し、異なる視点を提供します。効率よく作業をして良い結果を得るには、目的に合った適切なモデルを選ぶことが重要です。

[Colors and Numbers 色と数値](/sketching-with-math-and-quasi-physics/colors-and-numbers)

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/XJrVrKx?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

# Distances
# 距離

In a space, you can measure distances between points. The most common way is the Euclidean distance, which is basically the length of the straight line between two points.

空間内では、点と点の間の距離を測ることができます。最も一般的な方法はユークリッド距離で、これは基本的に2点間を結ぶ直線の長さのことです。

> 
> 
> In math, there are various kinds of spaces and some of them don’t have the concept of distance.
> 
> 数学には様々な種類の空間があり、その中には距離の概念を持たないものもあります。

[![](/images/about-space.png)](/images/about-space.png)

But that is not the only distance we care about. How do you measure the distance from Tokyo to São Paulo? What you want is probably not a straight line distance between two points, but a curved length along the surface of the Earth. This is called [spherical geometry](https://en.wikipedia.org/wiki/Spherical_geometry). How about a checkerboard? How do you measure distances between two squares? Perhaps the number of moves it takes?

しかし、距離はそれだけではありません。東京からサンパウロまでの距離はどのように測るでしょう。おそらく、2点間の直線距離ではなく、地球の表面に沿った曲線の長さを知りたいと思うでしょう。これは[球面幾何学](https://en.wikipedia.org/wiki/Spherical_geometry)と呼ばれています。チェッカーボードはどうでしょう。2つのマス目の間の距離をどのように測りますか。必要な移動回数でしょうか。

[Various distances さまざまな距離](/sketching-with-math-and-quasi-physics/distance/various-distances)

[![](/images/about-space-1.png)](/images/about-space-1.png)

The concept of distance becomes important in various cases, for example in finding the shortest path to move characters along in game design, or dividing territories based on the distances.

距離の概念は、ゲームデザインにおけるキャラクターの最短経路の探索や、領域を距離によって分けたりなど、様々な場面で重要になります。

[Visualizing Distances 距離を視覚化する](/sketching-with-math-and-quasi-physics/distance/visualizing-distances)

[![](/images/about-space-2.png)](/images/about-space-2.png)

In computer graphics, functions that returns the distance from a point to the surface of object, called signed distance functions, or SDF are often used for 3D rendering.

コンピューターグラフィックスでは、点からオブジェクトの表面までの距離を返す関数（符号付き距離関数、またはSDFと呼ばれる）が3Dレンダリングによく使用されます。

[Signed distance functions 符号付き距離関数](/sketching-with-math-and-quasi-physics/distance/signed-distance-functions)

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/mdLPVrE?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

# So what is space?
# で、空間とは

So, what is space, after all? The answer depends. For most of our purposes when sketching something with code, Newtonian or Euclidean spaces provide the most intuitive and familiar way of thinking about space — flat, predictable, and measurable with straightforward distances and angles.  

結局のところ、空間とは何なのでしょう。答えは状況次第です。コードでスケッチするなら、多くの場合ニュートンやユークリッド的な空間が、平坦で予測可能、単純な距離と角度で測ることのできる、最も直感的で馴染深いものとして扱えます。

But this is neither the only space nor the true shape of space.

しかし、これは唯一の空間でもなければ、空間の真の姿でもありません。

It’s not the true shape of space because [Einstein’s general relativity](https://en.wikipedia.org/wiki/General_relativity) describes spacetime as a curved, four-dimensional manifold. Meanwhile, [quantum physics](https://en.wikipedia.org/wiki/Quantum_mechanics) reveals that at the smallest scales, space and time behave in probabilistic, discontinuous, and often counterintuitive ways. Scientists have shown that our naive, everyday understanding of space and time breaks down at both the micro and macro scales.

空間の真の形ではないのは、[アインシュタインの一般相対性理論](https://en.wikipedia.org/wiki/General_relativity)が時空間を曲がった4次元多様体として記述しているためです。同時に、[量子力学](https://ja.wikipedia.org/wiki/%E9%87%8F%E5%AD%90%E5%8A%9B%E5%AD%A6)は、極小スケールでは、空間や時間が本質的に確率的で不連続な性質を持つことを示しています。科学者たちは、私たちの日常的な空間と時間の理解が、ミクロとマクロの両スケールにおいて成り立たないことを実証してきました。

It’s not the only space because mathematicians have been generalizing and expanding the concept of "space." [Riemannian geometry](https://en.wikipedia.org/wiki/Riemannian_geometry) broadens the idea of geometry to include uniform and non-uniform curved spaces, including Euclidean, spherical, hyperbolic, and other geometries we touched upon in the distance discussion above.

唯一の空間ではないのは、数学者たちが「空間」の概念を一般化し、発展させてきたからです。[リーマン幾何学](https://en.wikipedia.org/wiki/Riemannian_geometry)は幾何学の概念を拡張し、ユークリッド幾何学、球面幾何学、双曲線幾何学などこのページで触れたその他の幾何学を含む均一な空間から非均一で曲がった空間までを扱うことができます。

Space isn’t even just about distance or geometry. [Topology](https://en.wikipedia.org/wiki/Topology) focuses on how shapes are connected, regardless of size or distance. Mathematics even defines spaces that aren’t intuitively spatial at all, like the space of all polynomials of a certain degree, where the focus is on the coefficients rather than the shape or a curve.

空間は距離や形だけの問題にとどまりません。[トポロジー](https://en.wikipedia.org/wiki/Topology)は、大きさや距離に関係なく、形がどのように繋がっているかに注目します。数学は、直感的な空間的概念を全く持たない空間も定義します。例えば、ある次数の多項式全体の空間では、形や曲線などではなく係数に注目します。

If you’re interested, go forward and explore these fascinating concepts.

興味があれば、これらの魅力的な概念についてもっと調べてみましょう。
