---
title: "Galton Pegboards ガルトン・ボード"
slug: galton-pegboards
---
<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="MYjBwwN" data-user="kynd" data-preview="true"></p></div>

Galton Pegboards is a device invented by Sir Francis Galton to demonstrate the Central Limit Theorem, which states that if you take large enough, independent samples from almost any population, the distribution of their averages will tend to settle into a [Normal Distribution](/taming-randomness), or the familiar bell shape.

ガルトン・ボード（Galton Pegboards）は、フランシス・ガルトン卿が中心極限定理（Central Limit Theorem）を示すために考案した装置です。中心極限定理とは、ほぼどんな母集団からでも、十分に大きく独立な標本を十分な数だけ取ると、それらの平均の分布が（おなじみの釣鐘型をした）[正規分布](/taming-randomness)に近づく、というものです。

Each time a marble hits a peg, it has a 50/50 chance of going left or right. Because each bounce is independent, a marble’s path is a Random Walk. If you track how many times it bounces right ($k$) over N pegs (that is, how many marbles end up in the k-th bin, counting from zero), you are looking at a Binomial Distribution.

ビー玉はピンに当たるたびに、50/50の確率で左か右へ進みます。各跳ね返りは互いに独立しているため、ビー玉の経路はランダムウォーク（Random Walk）になります。N個のピンを通過する間に右へ跳ねた回数を$k$とすると（つまり、0から数えてk番目の枠に入るビー玉の数を数えると）、結果は二項分布（Binomial Distribution）になります。

$\displaystyle{P(k) = \binom{N}{k} p^k (1-p)^{N-k}}$

Here, $\displaystyle{\binom{N}{k} = \frac{N!}{k!(N-k)!}}$ is the number of paths to reach the k-th bin.

For example, to reach the leftmost bin, the marble must bounce left at every peg, so there is only one path. To reach the 4th bin ($k=3$), it must bounce right three times, but those bounces can happen at any point along the way, so there are multiple possible paths.

ここで、$\displaystyle{\binom{N}{k} = \frac{N!}{k!(N-k)!}}$ は、k番目のビンに到達する経路の数を表します。

例えば、最も左の枠に入るには、すべてのピンで左に進む必要があるため、経路は1通りしかありません。4番目の枠（$k=3$）に入るには右へ3回進む必要がありますが、その3回は途中のどのタイミングで起きても構わないので可能な経路は複数あります。

$p$ is the probability of turning right. So $p^k (1-p)^{N-k}$ is the probability that the marble makes the number of turns we want: $k$ to the right and $N-k$ to the left. If we assume $p$ is 50/50 (0.5), we can simplify this term to $(\frac{1}{2})^N$, which means the result is based solely on the binomial coefficients.

$p$ は右へ曲がる確率で、 $p^k (1-p)^{N-k}$ は、望む回数だけ曲がる確率（右へ$k$回、左へ$N-k$回）を表します。もし $p$ が50/50（0.5）だとすると、この項はシンプルに $(\frac{1}{2})^N$ となるので、結果は二項係数だけで決まることになります。

Thinking about this in reverse, the fact that many things in the real world roughly follow a normal distribution suggests that the world is the accumulation of many random-like decisions. Biologically, the chance of getting a certain gene is largely random. People make decisions for reasons, but deviations from the average can be treated as almost random if you take large enough samples. (Note that this doesn’t explain how the average is determined. It only explains how things can deviate from the average.)

逆に言えば、現実世界の多くのものが概ね正規分布に従うということは、世界が「ランダムに近い」決定の積み重ねで成り立っていることを示唆します。生物学的には、ある遺伝子を受け取る確率はかなりランダムです。人は理由を持って意思決定しますが、十分に大きな標本を取れば、平均からのズレはほとんどランダムとして扱えます。（ただし、これは平均がどのように決まるかを説明するものではありません。中心極限定理が示すのは、平均からどのようにずれるかだけです。）

More [Math Snippets](/math-snippets)
