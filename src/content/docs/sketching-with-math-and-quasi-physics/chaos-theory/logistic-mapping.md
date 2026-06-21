---
title: "Logistic Mapping ロジスティック写像"
slug: logistic-mapping
---
[Chaos Theory カオス理論](/chaos-theory)

Let's look at a very simple example called the logistic map. What this equation does is simply update the value of $x$ at each iteration by multiplying the previous step by $r$ and $(1 - x)$.

ロジスティック写像と呼ばれるとてもシンプルな例をみてみましょう。この式が行うのは、繰り返しごとに$x$の値を前のステップに $r$ と $(1 - x)$を掛けたものに更新するだけです。

$x_{n+1} = r x_n (1 - x_n)$

```jsx
// Parameter r:
// If 2.0, converges to a single point (order)
// If 3.2, oscillates between two values (periodic)
// If 3.9, exhibits unpredictable behavior (chaos)

let r = 3.9;
let x = 0.5; // Initial value
for (let i = 0; i < 50; i++) {
	// This is the nonlinear update equation that simultaneously performs "stretching" and "folding"
	x = r * x * (1 - x);
	console.log(x.toFixed(4)); // Display the change in value
}
```

With just this logic, depending on the value of $r$, you can get a sequence that looks very random. You can find [a sample here](https://codepen.io/kynd/pen/jErqqGB?editors=0110) that displays the values directly, but to visualize the behavior more intuitively, let's use a technique called the Cobweb plot.

これだけのロジックですが、$r$ の値によっては非常にランダムに見える数列が得られます。値を直接表示したものは[ここにサンプル](https://codepen.io/kynd/pen/jErqqGB?editors=0110)を置いておきますが、より視覚的に挙動を見るために、Cobweb plot という手法を使ってみましょう。

In the Cobweb plot, we map the current value $x_n$ on the x-axis to the next value $x_{n+1}$ on the y-axis, then project that result back to the diagonal $y=x$ to find the new starting point. The faint horizontal lines are auxiliary lines that return the end of the plot to the next starting point on the diagonal. When drawn this way, we can clearly see the feedback loop where the value of $x$ jumps around relative to a certain curve (the Logistic Curve). Try changing the value of `r` to see how the behavior changes.

Cobweb plot では現在の$x$の値($x_{n}$)をx軸に、次の$x$の値($x_{n+1}$)をy軸にマッピングし、その結果を対角線$y=x$に投影して新しい出発点を見つけます。薄く描かれた水平線はプロットの終端を対角線上の次の出発点に戻す補助線です。このように表示すると、$x$ の値があるカーブ（Logistic Curve）を基準にして飛び回るフィードバックループがはっきりとみて取れます。`r` の値を変更して動きがどう変わるかを試してみましょう。

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="XJKdNqY" data-user="kynd" data-preview="true"></p></div>

In the Cobweb plot, we observed the changes in $x$ when $r$ was fixed at a specific value, but now let's see how the overall behavior changes when we vary $r$.

Cobweb plot では $r$ を特定の値に固定した時も $x$ の変化を見ましたが、今度は $r$ を変化させた時に全体の動きがどう変わるかを見てみましょう。

In the demo below, $r$ is plotted on the horizontal axis and $x$ on the vertical axis, plotting the settled values of $x$ after the initial transients have died out. This reveals the destination of the system for each $r$.

下のデモでは $r$ を横軸、$x$ を縦軸にプロットし、初期の過渡状態が収まった後に落ち着いた $x$ の値をプロットしています。これにより、それぞれの $r$ に対するシステムの行き先が明らかになります。

In the logistic map, when $r$ is a small value, $x$ converges to a single stable solution, but beyond a certain point it bifurcates into two branches, then four branches, and so on. This is called **period-doubling** **bifurcation**.

ロジスティック写像では $r$ が小さい値の場合は $x$ が安定した一つの解に収束しますが、ある点を境に二本、四本…と枝分かれしていきます。これを周期倍分岐と呼びます。

Around $r \approx 3.57$, the bifurcations occur infinitely fast, and the system enters a state that appears completely random. This is the chaotic region.

$r \approx 3.57$ を超えたあたりで、枝分かれは無限に速くなり、完全にランダムに見える状態になります。ここがカオス領域です。

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="VYjaPzj" data-user="kynd" data-preview="true"></p></div>

What's interesting is that even within this chaos, periodic windows (white gaps) occasionally appear. In the midst of disorder, periodicity suddenly reemerges. If you zoom in on the white window sections, you can see a self-similar (fractal) structure, where the same structure as the entire figure appears in miniature.

面白いのは、このカオスの中にも、時折白い隙間（周期的窓）が現れることです。混沌とした世界の中に、突然に周期性が復活します。白い窓の部分を拡大してみると、図全体と同じ構造がそこにミニチュアとして現れる[自己相似（フラクタル）構造](/fractal)が見られます。

# What is randomness?
# ランダムさとは

We've been using the phrase "appears random" somewhat casually, but to analyze chaos, it's helpful to define randomness mathematically. On the next page, we'll examine the concept of randomness from the perspective of information theory.

ここまで「ランダムに見える」という言葉を何となく使ってきましたが、カオスの性質を分析するにはランダムさを数学的に扱えるように定義することが役立ちます。次のページでは情報理論の観点からランダムさという概念について詳しくみていきます。

[What is Randomness? ランダムさとは](/what-is-randomness)

