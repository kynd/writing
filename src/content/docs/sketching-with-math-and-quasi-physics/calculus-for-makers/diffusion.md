---
title: "Diffusion 拡散"
slug: diffusion
---
**Diffusion** is the concept that explains how a drop of food coloring spreads in a glass of water, how a room fills up with the smell of perfume, or how heat conducts through a material. It is the process by which something spreads out evenly in a space where it was not previously evenly distributed. It is also used in things like fluid simulations. Diffusion is defined using derivatives and can appear very complicated when expressed in equations. However, it can be approximated with a simple calculation that compares neighboring values.

拡散とは、食紅が水に広がっていく様子、部屋中に香水の匂いが充満していく様子、素材内で熱が伝っていく様子などを、不均一に分布した何かが時間の経過とともに均等に広っていく状況を説明する概念で流体のシミュレーションなどでも使われます。拡散は微分を使って定義され、数式で見ると非常にややこしく見えがちなのですが、隣り合う値同士を比べるだけの単純な計算で近似することができます。

# Simulate diffusion
# 拡散をシミュレートする

Imagine a metal wire that has the highest temperature at its center and the lowest at both ends. Heat conducts from areas of high to low temperature, and we will observe how the temperature spreads over time. We will sample multiple points that are evenly distributed along the wire. The demo below illustrates the temperature changes at each point. The x-axis represents position, and the y-axis represents temperature (Note that y-axis is not position. The wire can have any shape, whether straight or bent).

金属のワイヤーを思い浮かべましょう。ワイヤーの中央が最も温度が高く、両端の温度が最も低い状態です。熱は温度が低い場所から低い場所へと伝わっていくので、時間の経過とともに温度がどのように変化するかを観察します。ワイヤー上に等間隔で置かれた複数の点をサンプリングします。下のデモでは、各点での温度変化を見ることができます。x軸は位置を、y軸は温度を表します（y軸は位置ではないことに注意してください。ワイヤーは真っ直ぐでも曲がっていても構いません）。

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="YzdXpmG" data-user="kynd" data-preview="true"></p></div>

The temperature change at a given point depends on the temperatures of its neighboring points. If the neighbors are hotter, the temperature will increase; if they are colder, the temperature will decrease. The rate of change is proportional to the temperature difference. If we call the temperature of the $i$\-th point $u_i$, then the influence of the point to the left is proportional to$u_{i-1} - u_i$ and the influence of the point to the right is proportional to $u_{i+1} - u_i$.

ある点の温度変化は、その周辺の点の温度に依存します。周辺の点がより熱い場合、温度は上昇します。逆に、周辺の点がより冷たい場合、温度は下降します。変化率は温度差に比例します。$i$番目の点の温度を$u_i$とすると、左側の点の影響は $u_{i-1} - u_i$ に比例し、右側の点の影響は $u_{i+1} - u_i$ に比例します。

Based on this idea, we can write a code to update the $u$ for the next moment in time (frame) as follows:

この考え方を元に、次の時間（フレーム）のために$u$を更新する下のようなコードを書くことができます。

```jsx
u_new[i] = u[i] + alpha / (dx * dx) * (u[i+1] - 2*u[i] + u[i-1]);

// (u[i + 1] - u[i]) + (u[i-1] - u[i]) = (u[i+1] - 2*u[i] + u[i-1])
```

The constant `alpha` depends on the material's properties, while `dx` represents the distance between points. It takes into account the fact that the greater the distance, the more effort is required to conduct the same amount of heat.

定数 `alpha` は素材の特性に依存し、 `dx` は点の間の距離を表します。距離が大きいほど同じ量の熱を伝えるために必要な労力が増えることを表現しています。

> 
> 
> For the sake of simplicity, the demo assumes that the temperature of both ends remains constant.  
> 簡単にするため、デモでは両端の温度が一定であると仮定しています。

In this section, we divided the space into equal distance intervals and used a discrete approach with time measured in frames to make it easier for computers to handle. This can be thought of as an approximation of a more mathematically precise definition.

ここでは空間を一定の距離ごとに分割し、時間もフレームを単位とする離散的なアプローチを取ることでコンピュータに扱いやすいようにしました。これはより数学的に正確な定義を近似したものと考えることができます。

The more points we add, the more detailed and precise the simulation becomes. Try the demo below. If you click on the canvas, it will reset and randomize the initial conditions.

サンプリングする点を増やすほどシミュレーションはより詳細で正確になります。下のデモを試してみましょう。キャンバスをクリックすると、ランダムな状態にリセットすることができます。

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="JjwdWEO" data-user="kynd" data-preview="true"></p></div>

> 
> 
> However, in this demo using discrete (frame-by-frame) time, alpha / (dx \* dx) must be 0.5 or less. This is a limitation due to the simulation method and is called the stability criterion.  
> ただし、離散的な（フレームごとの）時間を用いたこのデモでは、alpha / (dx \* dx)は0.5以下でなければなりません。これはシミュレーション方法による制限で、安定性基準と呼ばれています。

# Diffusion in the continuous world
# 連続的な世界での拡散

In the real world, we can imagine an infinite number of points, and the distance between these points is infinitely small. We use the difference between these infinitely close points to calculate the rate of change. If you have read the page on [Differentiation](/differentiation), this concept should sound familiar to you. In fact, diffusion is defined upon derivatives in math.

現実世界では点は無数にあると考えることができ、その場合、点の間の距離は無限に小さくなります。この極めて近い点のどうしの差を用いて変化率を計算するわけですが、[微分](/differentiation)のページを読んでいれば、この考え方には覚えがあるでしょう。実際、数学において拡散は微分に基づいて定義されています。

You don’t need to learn the equations in this section to use the concept of diffusion in code. The discrete method explained above is usually sufficient. As explained on the [differentiation](/differentiation) page, it is often nearly impossible to apply the continuous equations directly. However, it would be useful to know the math if you are interested as this concept appears in many places as you explore physics simulations.

実際にはコードで拡散の概念を使うために、この節で説明する方程式を覚える必要はありません。大抵は上で見た離散的な方法で事足ります。[微分](/differentiation)のページで触れたように、連続的な式を直接使うのはほとんど不可能ですらあります。とはいえ、この概念は物理シミュレーションの世界のあちこちに顔を出すので、興味があれば数学についても知っておくと役に立つでしょう。

This is the equation of diffusion.

これが拡散の方程式です。

$$\dfrac{\partial u}{\partial t} = \alpha \dfrac{\partial^2 u}{\partial x^2}$$

The left-hand side, $\dfrac{\partial u}{\partial t}$, describes how $u$ changes over a small amount of time $t$. Here, $u$ represents the quantity we are looking at, such as temperature. The equation states that this change is proportional to the second derivative of $u$ with respect to position $x$. The constant $\alpha$ describes how quickly $u$ spreads. This value often depends on physical conditions, such as material conductivity.

左側の$\dfrac{\partial u}{\partial t}$は、$u$がわずかな時間の間にどれだけ変化するかを表しています。$u$は温度など観察の対象となる量を表します。この方程式は、この変化が位置$x$に関する$u$の2階微分に比例することを示しています。定数$\alpha$は、$u$がどのくらい速く広がるかを表します。この値は、物質の伝導率などの物理的な条件によって決まります。

What is a second derivative? It is obtained by taking the derivative of a function twice. For example, velocity is the derivative of position, which represents how the position changes over time. Acceleration is the derivative of velocity, or the second derivative of position, which represents \[the rate of change over time of \[the rate of change over time\] \] .

2階微分は、ある関数の微分を2回求めることで得られます。例えば、速度は位置の微分で、位置が時間とともにどのように変化するかを表します。加速度は速度の微分、すなわち位置の2階導関数であり、『時間に対する変化率」の時間に対する変化率』を表します。

The first derivative, $\dfrac{\partial u}{\partial x}$, describes the slope or rate of change of $u$ over position $x$. Remember the graph in the demo above, the steeper the slope, the greater this rate is. In the discrete approach, we calculated the differences between two sample points. This derivative corresponds to this idea. The only difference is that we are assuming an infinitely small distance between points.

1階の微分 $\dfrac{\partial u}{\partial x}$ は、位置$x$における$u$の傾きまたは変化率を表します。上のデモのグラフを思い出してください。傾斜が急なほど変化率は大きくなります。この微分は、離散的な方法で2つの点の間の差を計算したことに対応します。唯一の違いは、点と点の間の距離が無限小であると仮定していることです。

The second derivative, $\dfrac{\partial^2 u}{\partial x^2}$, describes how the slope changes as you move along the graph. This corresponds to the fact that we took into account the effect from both the left and right sides. In the discrete world, the rate of change of $u$ over time was proportional to the difference of differences over the position.

2階微分$\dfrac{\partial^2 u}{\partial x^2}$は、このグラフの上を移動するときの傾きの変化を表します。これは上で左側と右側の両方からの影響を考慮したことに対応します。離散的な世界では、時間の経過に伴う$u$の変化率は、位置の差の差に比例していました。

$(u_{i+1} - u_i)-(u_i - u_{i-1}) = u_{i + 1} - 2u_i + u_{i - 1}$

In the continuous world, the rate of change of $u$ over time $t$ is proportional to the \[derivative of \[the derivative of $u$ with respect to the position $x$\] with respect to the position $x$\]. Do you see the pattern?

連続的な世界では、時間$t$に関する$u$の変化率は、『「位置$x$に関する$u$の微分」の位置$x$に関する微分』にに比例します。対応するパターンが見て取れるでしょうか。

Many books and articles start with mathematically accurate equations involving second derivatives, but I find this approach sets a high bar for understanding such a simple idea that what matters is the difference in quantity, such as temperature, compared to the surroundings. Starting with the discrete method seems much more intuitive and practically useful. Check out the [2D Feedback Systems](/2d-feedback-systems) page for examples.  

多くの本や記事による拡散の説明、2階微分を含む数学的に正確な方程式から始めることで理解のハードルを上げてしまっている気がします。重要なのは温度など、注目する量の周囲との差である、というシンプルな点を掴むことで、それには離散的な方法から始める方がより直感的で実用的だと思います。[2次元フィードバックシステム](/2d-feedback-systems)のページに使用例があるので見てみましょう。

[2D Feedback Systems 2次元フィードバックシステム](/2d-feedback-systems)
