---
title: "Stretch and Fold 引き伸ばしと折り畳み"
slug: stretch-and-fold
---
[Chaos Theory カオス理論](/chaos-theory)

Let's look back at the logistic mapping formula. There are vital concepts hidden in this—stretch and fold.

ロジスティック写像の式を振り返ってみましょう。ここには引き伸ばしと折り畳みという重要な概念が隠されています。

$x_{n+1} = r x_n (1 - x_n)$

-   The Stretch ($r x_n$): It takes the position from the previous state ($x_n$) and stretches the space by multiplying it. In this process, the slight difference in $x$ gets exaggerated by $r$ exponentially through iterations (if $r > 1$).

-   The Fold: Multiplying by ($1-x_n$) brings the $x$ back to the \[0, 1\] range.

-   引き伸ばし（$r x_n$）：前の状態の位置（$x_n$）を取り、それを掛け算することで空間を引き伸ばします。このプロセスにおいて、$x$のわずかな差異が反復を通じて$r$によって指数関数的に拡大されます（$r > 1$の場合）。

-   折り畳み：（$1-x_n$）を掛けることで、$x$を \[0, 1\] の範囲に戻します。

The demo below breaks down how the **stretching** and **folding** moves the $x$ back and forth.

下のデモは、引き伸ばしと折り畳みがどのように$x$を揺り動かすかを分解して見せます。

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="QwEGXWb" data-user="kynd" data-preview="true"></p></div>

This mechanism is not just a quirk of Logistic Mapping. It is actually the universal engine behind every chaotic system in the universe. In the study of dynamical systems, this is known as the Smale Horseshoe map logic where a space gets stretched like a rubber band then bent into a U shape to fit within the original range.

このメカニズムは、ロジスティック写像だけの特異な性質ではなく、実はあらゆるカオス系を支える普遍的な仕組みです。これは力学系の研究においては、空間がゴムバンドのように引き伸ばされ、その後U字型に曲げられて元の範囲内に収められるスメールの馬蹄写像のロジックとして知られています。

Another common analogy is to think of a chaotic system as a Baker kneading dough. Imagine there is a little poppy seed mixed in a dough. The baker stretches the dough out then fold it back over itself. When the baker repeats this process, the poppy seed moves around and it is impossible to predict where it is going to end up even though the process itself is quite simple.

もう1つのよくある比喩は、カオス系をパン職人が生地をこねるようなものだと考えることです。生地の中に小さなケシの実が混ざっているところを考えます。パン職人は生地を引き伸ばし、折り返します。パン職人がこのプロセスを繰り返すと、ケシの実は動き回り、プロセス自体はとてもシンプルなのに、最終的にどこに行き着くかを予測することは不可能になります。

> 
> 
> [More detailed definition of the horseshoe map is here](https://en.wikipedia.org/wiki/Horseshoe_map). Logistic map and strange attractors we'll see later are kinds of the horseshoe map. There also is a specific mathematical concept called [baker's map](https://en.wikipedia.org/wiki/Baker%27s_map), which is also a kind of horseshoe mapping, but you can read the above paragraph as a mere metaphor too. Also, there are chaotic systems like the three-body problem that do not belong to the horseshoe map category.
> 
> [馬蹄写像のより詳細な定義はこちら](https://en.wikipedia.org/wiki/Horseshoe_map)。ロジスティック写像や、後で見るストレンジアトラクターは馬蹄写像の一種です。また、[パン職人写像](https://en.wikipedia.org/wiki/Baker%27s_map)と呼ばれる特定の数学的概念もあり、これも馬蹄写像の一種ですが、上の段落はただの比喩として読んでも大丈夫です。また、三体問題のようにカオスでも馬蹄写像に属さないものもあります。

# Stretching
# 引き伸ばし

Stretching magnifies the minute differences contained in the initial conditions. As time progresses, the information density (precision) required to predict the future within the same error margin grows exponentially. Chaos offers no "computational shortcuts"—to know the future, one must execute every intermediate step.

引き伸ばしは、初期状態に含まれる微小な差異を拡大します。時間が経過するにつれて、同じ誤差範囲内で未来を予測するために必要な情報密度(精度)が指数関数的に増大します。カオスには計算上のショートカットが存在しません。未来を知るためには、すべての中間ステップを実行しなければならないのです。

In natural systems like weather forecasting, where all aspects of the initial conditions cannot be fully observed, this manifests as the emergence of new information. On the other hand, in digital systems like the logistic map, all numerical values are strictly defined. Yet we still feel unpredictable surprise (information-theoretic surprise) there because in chaotic systems, the only way to know the result is to execute the process itself without any shortcuts whatsoever.

気象予報のように、初期状態のすべてを観測しきれない自然界の系では、新しい情報の発生として現れます。一方で、ロジスティック写像のようなデジタルな系では、すべての数値は厳密に定義されています。それでも私たちがそこに予測不能な驚き(情報理論的なサプライズ)を感じるのは、カオス系において結果を知るための唯一の方法は、そのプロセスを一切のショートカットなしに実行すること以外にないからです。

# Precision and Predictability
# 精度と予測可能性

カオスが情報を生み出すということを予測の精度の観点からも見てみましょう。

線形の系、例えばごく単純な $y = aT + b$ であればどんな先の未来であっても100%予測できる、つまり時間が経っても得られる情報はゼロになります。

カオスの系の場合、時間が経つほど同じ精度で未来を予測するために必要な情報量が増えてきます。ある未来の時刻 $T$ において、状態を誤差 $\epsilon$ 以内で予測したいとしよう。

-   $T=1$ のとき: 初期値を $1/100$ の精度（約7ビット）で知っていれば十分かもしれません。

-   $T=10$ のとき: 引き延ばしによって誤差が拡大するため、同じ精度を保つには初期値を $1/1,000,000$ の精度（約20ビット）で知っておく必要があります。

  
つまり、予測したい未来が遠くなればなるほど、初期状態に対して要求される情報量（コスト）が指数関数的に跳ね上がるのです。

# Folding
# 折り畳み

But without folding, a chaotic system is not complete. You only have an explosion. Folding is what keeps the system bounded. It is also critical for folding to ensure the non-linearity of the system.

しかし、折り畳みがなければ、カオス系は完成しません。単なる爆発になっています。折り畳みが、系を一定の範囲に保ってくれるのです。系の非線形性を保証するためにも、折り畳みは非常に重要です。

In the case of the logistic map $x_{n+1} = rx_n(1-x_n)$, having another $x_n$ in $(1-x_n)$ makes it quadratic, which creates the parabola shape we saw in the cobweb plot.

ロジスティック写像 $x_{n+1} = rx_n(1-x_n)$ の場合、$(1-x_n)$ の中にもう一つ $x_n$ があることで二次式になり、これが Cobweb plot で見た放物線の形を作り出します。

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="XJKdNqY" data-user="kynd" data-preview="true"></p></div>

If you simply wanted to keep values within a certain range, a linear (straight-line) equation like $rx/4$ would suffice. But no matter how complex a linear system may appear, it fundamentally cannot generate diversity. Linear systems ultimately either converge to a single point, diverge to infinity, or fall into monotonous repetition and will never produce new information.

単に数値を一定の範囲内に収めるだけであれば、$rx/4$ のような線形（直線的）な式でも可能です。しかし、線形なシステムはどれほど複雑に見えても、本質的には「多様性」を生み出すことができません。線形な系は結局のところ、一点に収束するか無限に発散、あるいは単調な反復に陥るだけで、新しい情報を生み出すことはないのです。

Folding ensures nonlinearity and triggers the mixing of information. Because folding often causes multiple past trajectories to merge into a single present state, the system becomes irreversible. This continuous cycle of tearing and merging allows the system to sustain non-periodic dynamics without ever repeating the same state.

折り畳みは非線形性を保証し、情報の混合を引き起こします。折り畳みはしばしば複数の過去の軌道を単一の現在の状態に収束させるため、系は不可逆的になります。この引き裂きと融合の連続的なサイクルによって、系は同じ状態を決して繰り返すことなく、非周期的なダイナミクスを維持し続けることができるのです。

# Thinking in Terms of Mappings
# 写像として考える

Though somewhat redundant, rephrasing what was stated above in the language of mappings might help grasp the concept from a different angle. Let's take the logistic map as an example.

少し冗長ですが、上に述べたことを写像の言葉で言い直してみると、別の角度からイメージを掴む助けになるかもしれません。ロジスティック写像を例に考えてみましょう。

Each step of the logistic map is a mapping from the set of real numbers $[0, 1]$ to $[0, 1]$. Since these are real numbers, this set contains infinitely many elements. When selecting a starting point from here, a significant gap emerges between the point actually being determined and our ability to describe its value. Humans cannot fully grasp an infinitely continuing decimal (the deep digits of the initial value). Or remember that [in the previous page when calculating information content, we divided values into small finite boxes](/what-is-randomness). For the observer, capturing information requires a resolution that exceeds a certain mesh size.

ロジスティック写像のステップは、実数の集合 $[0, 1]$ から $[0, 1]$ への写像です。実数なので、この集合には無限個の要素があります。ここからスタート地点を選ぶとき、実際に点が決まることと、その値を記述できることの間には大きなギャップが生まれます。無限に続く小数（初期値の深い桁）を人間が最後まで把握することはできません。[または前のページで情報量を計算するときに、値を小さな有限個の箱に分けたこと](/what-is-randomness)を思い出してください。観測する側にとって、情報を捉えるにはある大きさの網目を超える解像度が必要なのです。

By the way, this mapping is mathematically continuous—meaning it transforms smoothly while preserving connections between adjacent points. (Strictly speaking, for any neighborhood $V$ of the destination $f(x)$ of a point $x$, one can appropriately choose a neighborhood $U$ of $x$ such that all points within that range map into $V$). This means that in the near future, the destinations of two nearby points will settle in roughly similar places.

ところでこの写像は数学的に連続、つまり、隣り合う点とのつながりを保ったまま滑らかに変化します。（厳密に言えば、ある点 $x$ の行き先である $f(x)$ の任意の近傍 $V$ に対して、$x$ の近傍 $U$ を適切に選べば、その範囲内のすべての点が $V$ の中に収まるように写像できる）。これは、すぐ近くにある2点の行き先は、近い未来であればだいたい似たところに落ち着くことを意味しています。

But in chaotic systems, stretching and folding are repeated while maintaining this continuity.

しかし、カオスの系では、この連続性を保ったまま引き伸ばしと折り畳みが繰り返されます。  

Stretching magnifies minute differences. In the logistic map, the distance between adjacent points is amplified according to the slope (derivative) at that location. Through this amplification, the information in fine digits that had been hidden below the mesh and uncapturable rises up to observable scales.

引き伸ばしは、微細な差異を拡大します。ロジスティック写像の場合、隣り合った点の間の距離はその地点の傾き（微分係数）に応じて拡大されます。この拡大によって、それまで網目の下に隠れていて捉えられなかった微細な桁の情報が、観測可能な大きさへと浮上してきます。

On the other hand, this mapping is surjective but not injective, i.e., no matter where you start, there's always a destination, but overlaps occur where multiple different states arrive at the same destination. Remember that the graph of the logistic map has a parabolic shape. Since two different $x$ values map to the same $y$, it's impossible to uniquely reverse-calculate the past state from the current state.

一方で、この写像は全射ですが単射ではありません。つまり、どこからスタートしても必ず行き先がありますが、異なる複数の状態から同じ行き先へ辿り着くダブりが発生します。ロジスティック写像のグラフが放物線になっていることを思い出してください。異なる2つの $x$ が同じ $y$ へ写るため、現在の状態から過去の状態を一意に逆算することはできません。

Here, information about past history is lost. While the total information capacity of the system remains unchanged, as new information gushes out from fine digits, old information is erased through overlaps. This is the metabolism of information in chaos.

ここで、過去の履歴という情報が失われていることになります。系全体の情報容量が変わらない中、新しい情報が微細な桁から噴き出してきた分、古い情報がダブりによって消去されていく。これがカオスにおける情報の代謝です。

The unpredictability and surprise of chaos doesn't stem merely from previously invisible digits becoming visible. When fine-scale information surfaces, the point is that you can't know what form it will take through the nonlinear force of folding. You cannot simply project the current situation into the future like predicting the position of a car traveling at constant speed. This sense of information appearing in transformed guise is what creates interesting outcomes.

カオスの予測不可能性や驚きの元は、単に見えていなかった桁が見えるようになるだけではありません。微細な情報が表に出てくるとき、それが折り畳みの非線形の力によって、どのような姿で現れるか分からない点にあります。一定の速度で走る車の位置を予測するように、現在の状況をそのまま未来に投影することができない。この情報が化けて出る感じが、面白い結果を生み出すポイントになります。

# Strange Attractors
# ストレンジアトラクター

On the next page, we will look at more visually interesting examples from the family of strange attractors.

次のページでは、より面白い見た目をした、ストレンジアトラクターの仲間の例を見ていきます。

[Strange Attractor ストレンジアトラクター](/strange-attractor)

