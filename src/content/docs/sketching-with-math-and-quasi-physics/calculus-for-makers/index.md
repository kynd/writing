---
title: "Calculus for Makers作るための微積分"
---
In "making" things, be it cool graphics, simulations, or tangible objects, mathematical concepts often play crucial roles. However, when you encounter topics like differentiation, integration, and diffusion, they might seem daunting, bringing back memories of complex equations and rigorous proofs. Seriously, when I see those formulas on the Wikipedia pages, they are just overwhelming.

グラフィックスやシミュレーション、物理的なオブジェクトなど、何かしらものを作る際には、数学の概念がよく重要になります。しかし微分、積分、拡散などの話題に出くわすと、複雑な方程式や厳密な証明を思い出して怯んでしまうこともあるでしょう。実際、Wikipediaのページでそれらの数式を見ると、圧倒されてしまいます。

The goal here is to introduce them from a different angle than ordinary math books. Especially for the purpose of creating things on a computer, you don't necessarily need to dive deep into their theoretical intricacies. More often than not, numerical methods, usually just combinations of basic additions and loops come to our rescue, providing good enough approximation and simplifying representation of these concepts.

ここでは、通常の数学の教科書とは異なる視点からこれらの概念を紹介しようと思います。特にコンピュータを使ってものを作るためには、必ずしも複雑な理論に深入りする必要はありません。ほとんどの場合、基本的な足し算とループの組み合わせだけで、これらの概念を十分な精度でシンプルに表現できます。

In these articles, we will discuss summation, differentiation, integration, and diffusion, trying to demystify these concepts with demos and examples. We will prioritize using the concepts to create something, rather than on their rigor, so that if you come across them, you can translate them into simple code that works.

下の記事では、総和、微分、積分、拡散についてデモや例を使ってこれらの概念を説明します。厳密さよりも、これらの概念を見かけた時にシンプルでちゃんと動くコードに変換できることを優先します。

# Summation
# 総和

The summation represented by Sigma ($\\sum$) is essentially a repetition of addition. It is commonly expressed using a simple loop in code. Summation is highly useful for approximating integrals, as we will discuss later, and for other concepts like Fourier series.

シグマ (<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo>∑</mo></mrow><annotation encoding="application/x-tex">∑</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mop op-symbol small-op" style="position:relative;top:0em;">∑</span></span></span></span>) で表される総和は要は足し算の繰り返しで、コードでは大抵単純なループを使って表現できます。総和は下で取り上げる積分や、他にもフーリエ級数などを近似する時に活躍します。

[Summation 総和](/sketching-with-math-and-quasi-physics/calculus-for-makers/summation)

# Differentiation
# 微分

Differentiation is a very important concept in dealing with motion, shape, and simulating physics. It is about finding the rate of change and the slope of a graph for a given function. When handling differentiation on a computer, it is often more practical to use numerical approximation or "numerical differentiation," which involves using the difference between values. Math textbooks may not touch upon this, but it is a useful technique to treat differentiation as subtraction. In fact, this technique is used in various applications, possibly without you even realizing it.

微分とはある関数の変化の割合、グラフの傾きを求めることで、動きや形を扱ったり物理のシミュレーションをする上で非常に重要な概念です。コンピュータで微分を扱うときには厳密な数式の変形ではなく、「数値微分」という数値の差を用いた近似の方が実用的なことが多くあります。微分を見たら引き算にしてしまえ、というのは数学の本には書いてないけれど、実は様々な場所で使われている（多分あなたも知らずに既に使っている）重要なテクニックです。

[Differentiation 微分](/sketching-with-math-and-quasi-physics/calculus-for-makers/differentiation)

# Integration
# 積分

Integration is the inverse of differentiation, where it calculates the result from the rate of change, such as finding the change of position over a certain time from a function representing velocity. Using summation, integration can be approximated using a loop of addition. The Euler method, often used in games and animations (adding velocity to position for each frame), can also be considered as an approximation of integration using repeated addition.

積分は微分の逆の概念で、変化の割合からその結果、例えば速度を表す関数から一定時間分の位置の変化を求めることです。積分は総和を使って足し算のループとして近似することができます。ゲームやアニメーションでよく使われるオイラー法（フレームごとに速度を位置に足し合わせる手法）も足し算の繰り返しによる積分の近似と考えることができます。

[Integration 積分](/sketching-with-math-and-quasi-physics/calculus-for-makers/integration)

# Diffusion
# 拡散

Diffusion is the concept that explains how a drop of food coloring spreads in a glass of water, how a room fills up with the smell of perfume, or how heat conducts through a material. It is the process by which something spreads out evenly in a space where it was not previously evenly distributed. It is also used in things like fluid simulations. Diffusion is defined using derivatives and can appear very complicated when expressed in equations. However, it can be approximated with a simple calculation that compares neighboring values.

拡散とは、食紅が水に広がっていく様子、部屋中に香水の匂いが充満していく様子、素材内で熱が伝っていく様子などを、不均一に分布した何かが時間の経過とともに均等に広っていく状況を説明する概念で流体のシミュレーションなどでも使われます。拡散は微分を使って定義され、数式で見ると非常にややこしく見えがちなのですが、隣り合う値同士を比べるだけの単純な計算で近似することができます。

[Diffusion 拡散](/sketching-with-math-and-quasi-physics/calculus-for-makers/diffusion)
