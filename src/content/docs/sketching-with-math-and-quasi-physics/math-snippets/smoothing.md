---
title: "Smoothing スムージング"
slug: smoothing
---
<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="JoEyLxJ" data-user="kynd" data-preview="true"></p></div>

We often want to smooth things out—for example, when a digitally scanned 3D model contains noise. Two major techniques are Laplacian and Taubin smoothing.

デジタルスキャンした3Dモデルにノイズが乗っている時など、形状を滑らかにしたいことがよくあります。代表的な手法として Laplacian smoothing（ラプラシアン・スムージング） と Taubin smoothing（タウビン・スムージング） があります。

# Laplacian
# ラプラシアン

The Laplacian ($\Delta$) isn't specific to smoothing; it's a foundational concept in physics used to describe diffusion and equilibrium—for example, how heat spreads from a hot spot, or how turbulent flows stabilize in fluid dynamics.

ラプラシアン（$\Delta$）はスムージング専用の概念ではなく、物理学における拡散や平衡を記述する基本的な道具です。たとえば熱が広がる様子や、流体力学で乱れた流れが落ち着く過程などを表すのに使われます。

Despite the fancy name, the idea is simple: it measures the average difference between a point and its immediate surroundings.

名前は難しそうですが、考え方はシンプルで「ある点が、その近傍（周囲）と比べて平均的にどれだけズレているか」を測るものです。

To find the Laplacian of a vertex ($v_i$) on a line, look at its left neighbor ($v_{i-1}$) and right neighbor ($v_{i+1}$). Take their midpoint (average) and subtract the position of the vertex itself:

線上の頂点 $v_i$ のラプラシアンを考えるには、左隣 $v_{i-1}$ と右隣 $v_{i+1}$ を見ます。2点の中点（平均）を取り、そこから頂点自身の位置を引きます：

$$
\Delta v_i = \left( \dfrac{v_{i-1} + v_{i+1}}{2} \right) - v_i
$$

To smooth a line, move each vertex a small fraction ($\lambda$) along its Laplacian vector each frame.

線を滑らかにするには、各フレームで頂点をラプラシアン方向に少し（係数 $\lambda$）だけ動かします。

$$
v_i^{(new)} = v_i + \lambda \Delta v_i
$$

A major drawback of Laplacian smoothing is shrinkage. Because the method repeatedly averages positions, the shape tends to contract and can eventually collapse toward a single point.

ラプラシアン・スムージングの大きな欠点は、形状が縮んでしまうことです。繰り返し平均化する性質のため、全体が内側へ収縮し、最後には1点へ潰れてしまうこともあります。

# Taubin smoothing
# タウビン・スムージング

Taubin smoothing, introduced by Gabriel Taubin, addresses this problem. It acts like a low-pass filter: it removes small, jagged noise while preserving the overall (macro) volume of the shape. It has two steps:

- **The Shrink step:** Move vertices slightly inward using a small positive factor $\lambda$.
- **The Inflate step:** Recompute the Laplacian from the updated positions, then push vertices back outward using a negative factor $\mu$.

Gabriel Taubin によって提案された Taubin smoothing は、この縮み問題を軽減します。ローパスフィルタのように振る舞い、細かいギザギザ（高周波ノイズ）を取り除きつつ、形状の大まかな体積（マクロな形）を保ちやすいのが特徴です。手順は2段階です：

- **Shrink（縮める）:** 正の係数 $\lambda$ で頂点を少し内側へ動かす
- **Inflate（膨らませる）:** 更新後の位置でラプラシアンを再計算し、負の係数 $\mu$ で外側へ押し戻す

$$
v_i' = v_i + \lambda \Delta v_i
$$

$$
v_i^{(new)} = v_i' + \mu \Delta v_i'
$$

$\mu$ must be negative and have slightly larger magnitude than $\lambda$ (e.g., $\lambda = 0.33$, $\mu = -0.34$).

$\mu$ は負で、かつ $\lambda$ より絶対値がわずかに大きい必要があります（例：$\lambda = 0.33$, $\mu = -0.34$）。

# The demo
# デモ

The demo above compares the two methods. It starts with a Bézier curve perturbed with noise (Original), then shows how each smoothing method behaves.

上のデモではこの2 つの手法を比較しています。ノイズで歪ませたベジェ曲線（Original）から始めて、それぞれのスムージングがどのように振る舞うかを示します。

Taubin smoothing is great at preserving features, but it has a quirk: it can actually amplify sharp corners, pushing them out further than their original positions. Because the inflation step uses a slightly larger scale factor ($\mu$) to counteract the initial shrinkage across the whole shape, the math overshoots at points of high curvature, resulting in slightly sharpened or exaggerated peaks. You can observe this behavior in the demo as well.

Taubin smoothing は特徴を維持するのに優れていますが、急な角を元の位置よりも外側へ押し出し、強調してしまう癖があります。全体が縮むのを打ち消すために、膨らませるステップの係数（$\mu$）をわずかに大きく設定しているため、曲率の高い角の部分ではその押し戻しが強く働きすぎてしまい、結果として尖った部分が強調される挙動になります。デモでもこの挙動が見られます。
