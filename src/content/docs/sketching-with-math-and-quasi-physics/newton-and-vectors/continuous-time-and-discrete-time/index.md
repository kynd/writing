---
title: "Continuous Time and Discrete Time 連続した時間とバラバラな時間"
slug: continuous-time-and-discrete-time
---
# Analytical Solutions
# 解析的な解

Suppose there is a ball moving with velocity $(15, 15)$ at the origin $(0, 0)$. If the acceleration due to gravity is (0, -9.8), what will the trajectory look like?

原点$（0, 0）$に速度$（15, 15）$で移動するボールがあるとします。重力による加速度を$（0, -9.8）$とすると、このボールはどんな軌跡を描くでしょうか。

If $v_0$ is the initial velocity, $a$ is the acceleration, the velocity $v_t$ at the time $t$ is

初速度を$v0$、加速度を$a$とすると時刻$t$における速度$v$は、

$v_t = v_0 + at$

[Integrating](/integration) this, the position $p_t$ of the ball at the time $t$ is:

これを[積分する](/integration)と時刻tにおけるボールの位置$p_t$は下記のようになります。

$$p_t = v_0 t + \dfrac{1}{2}at^2$$

Solving a problem in this way so that the values can be calculated at once is called "solving analytically”. In this case, the position of the ball at any time (even in the past) can be obtained with a single calculation as long as $t$ is determined.

このように値を一度に計算できるように問題を解くことを「解析的に解く」と呼びます。この場合はどの時刻（過去でさえも）のボールの位置でも$t$さえ決まれば計算1回で求めることができます。

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="KKRGGvj" data-user="kynd" data-preview="true"></p></div>

# Discrete time
# バラバラな時間

Not all problems can be solved analytically. In fact, if the situation becomes even slightly more complicated, or if uncertainties such as user manipulation or random values are introduced, solving the problem analytically becomes quite difficult or impossible, or even when it's possible, too wasteful.

全ての問題が解析的に解けるとは限りません。実際にはちょっとでも状況が複雑になったり、ユーザの操作やランダムな値など不確定要素が入ると解析的に解くのは難しいか、不可能、またはできても無駄が多すぎになります。

Many simulations divide time into small steps and calculate the next state sequentially at each step. For example, a simulation may divide a second into 60 steps. It would have the initial state defined, then calculate the next state after 1/60, then next… This is called “discrete-event simulation”.

多くのシミュレーションでは時間を細かなステップに分割して、ステップごとに逐次的に次の状態を計算する方法が用いられます。 1秒を60分割して、初期状態から1/60秒後の状態を計算する。その状態から次の1/60秒後の状態を計算する。といった具合です。この手法はDiscrete-event simulationと呼ばれます。日本語で決まった訳語があるのかはわかりません。

With this approach, calculations can be performed by repeating simple operations, as in the example on the Newtonian physics page, and it is relatively easy to handle situations that change in the middle.

この考え方だと、ニュートン物理のページの例のように単純な操作の繰り返しで計算ができ、途中で状況が変わるような場合も比較的簡単に対応できます。

[Newtonian mechanics ニュートン力学](/newtonian-mechanics)

On the other hand, this method inevitably has some inaccuracy due to the very fact that time is divided into pieces. Take a look at the example below.

一方でこの方法は時間をバラバラに分割している分どうしても誤差が発生します。下の例を見てください。

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="XWqxxEd" data-user="kynd" data-preview="true"></p></div>

# Improved Euler method
# 修正オイラー法

The method of simply adding up each step is called the Euler method, which predicts the future by assuming that the amount of change at one point in time does not change until the next step.

ステップごとに単純に足し合わせを行う方法はオイラー法と呼びます。この方法ではある時点での変化量が次のステップまで変化しないものと仮定します。

In the example above, the error is caused by approximating velocity as a straight line when it is actually gradually changing over time.

上の例の場合、実際には徐々に変化し続ける速度を真っ直ぐな直線として近似してしまうことで誤差が生じています。

[![](/images/continuous-time-and-discrete-time.png)](/images/continuous-time-and-discrete-time.png)

<div></div>

A technique called the Improved Euler method calculates the amount of change(velocity in this example) in the next step ahead of time and averages it with the current amount of change to predict the future. In the image below, $v_t$ is the current velocity and $v_{t+1}$ is the velocity of the next step calculated by the Euler method. Averaging these two gives a more accurate prediction.

修正オイラー法という手法では、次のステップの変化量（この例では速度）を先読みして計算して、現在の変化量との平均を取ります。下の画像の$v_t$は現在の速度、$v_{t+1}$はオイラー法で計算した次のステップの速度です。この2つを平均するとより精度の高い予測が得られます。

[![](/images/continuous-time-and-discrete-time-1.png)](/images/continuous-time-and-discrete-time-1.png)

```jsx
// BEFORE
position.add(velocity.copy().mult(t));
velocity.add(acceleration.copy().mult(t));

// AFTER
const nextVelocity = p5.Vector.add(velocity, acceleration.copy().mult(t)); 
position.add(p5.Vector.add(velocity, nextVelocity).mult(0.5 * t));
velocity = nextVelocity;
```

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="rNvqQyz" data-user="kynd" data-preview="true"></p></div>

The improved Euler method is also called the second-order [Runge-Kutta method](https://en.wikipedia.org/wiki/Runge%E2%80%93Kutta_methods). For higher accuracy, the fourth-order Runge-Kutta method (RK4) is often used. The basic idea is the same: it calculates the multiple predictions of the amount of change in future to acquire the (weighted) average of them. The modified Euler method is second-order because it uses the average of two predictions, while the RK4 method is fourth-order because it uses four.

修正オイラー法は2次の[ルンゲ・クッタ法](https://ja.wikipedia.org/wiki/%E3%83%AB%E3%83%B3%E3%82%B2%EF%BC%9D%E3%82%AF%E3%83%83%E3%82%BF%E6%B3%95)とも呼ばれています。より高い精度を求める場合には4次のルンゲ・クッタ法（RK4）がよく用いられますが基本的な考えは同じで、未来の時点の変化量を複数回予想してその（荷重）平均を取ります。修正オイラー法は2つの予想の平均を使うので2次、RK4は4つの予想値を使うので4次という訳です。

# Elapsed time
# 経過時間

In case of programs that run in real time, such as games and live performances, the next step is usually calculated for each drawing update. But these steps are not always called at a constant pace. Although a target value can be set, such as 60 or 120 frames per second, we can not rely on that as the actual processing will be heavy or any interruptions will occur.

リアルタイムで動くプログラム、ゲームやライブパフォーマンスなどの場合、大抵は描画の更新ごとに次のステップを計算することになりますが、このステップが一定のペースで呼び出されるとは限りません。秒間60フレームや120フレームなどある目標値は設定できますが、実際には処理が重くなったり割り込みが発生したりするのでこれを頼りにすることはできません。

In such cases, errors and discrepancies can be reduced by calculating the elapsed time between frames. For example, when we are adding up vectors, the elapsed time ($t_e$) from the previous frame can be multiplied to the adding vector in this way:

この場合はフレームごとの経過時間を計算して処理を行うことで誤差や違和感を減らすことができます。例えば、ベクトルの足し算をする部分で前のフレームからの経過時間（$t_e$）を掛け算します。

$position_{t+1} = position_t + velocity_t * t_e$

The universal gravitation demo below uses this process:

下の万有引力のデモではこのような処理をしています。

```jsx
let ellapsedMsec =  window.performance.now() - prevNow;
  prevNow = window.performance.now();
  updateSimulation(ellapsedMsec / 1000);
  ...
```

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="qmGOgB" data-user="kynd" data-preview="true"></p></div>

Since this process is essential for games, Unity, for example, has [Time.deltaTime](https://docs.unity3d.com/ScriptReference/Time-deltaTime.html) from the beginning.

ゲームではこの処理は必須なので、例えばUnityには[Time.deltaTime](https://docs.unity3d.com/ScriptReference/Time-deltaTime.html)が初めから用意されています。

# Human perception of time and motion
# 動きと時間の知覚

Throughout this discussion, we have primarily focused on accuracy, but accuracy is not always necessary or important. As you can see in old Disney and Warner Bros animations, it is possible to create very appealing expressions by deliberately omitting or exaggerating movement. When the resolution of information is low, the human brain is designed to supplement what is missing.

このページでは、主に精度に関する話を取り上げましたが、常に正確さが必要だったり重要だとは限りません。昔のディズニーやワーナーのアニメーションのように、わざと動きを省略したり誇張したりすることで、非常に魅力的な表情を作ることもできます。情報の解像度が低くければ、人間の脳は足りないものを補うようにできています。

The relationship between time division and motion perception is a fascinating topic. The temporal resolution of the human eye is said to be 50ms to 100ms (there are various theories), and light flashing faster than that simply appears to glow all the time, or a movie with 24 frames per second appears to be moving smoothly, rather than a series of discrete pictures.

時間の分割と動きの認知の関係はとても面白いトピックです。人間の目の時間分解能は50msから100msと言われていて（諸説あり）それ以上の速さで点滅する光は単純にずっと光っているように見えたり、秒間24コマの映画はバラバラの絵の連続ではなくて物が滑らかに動いているように見えます。

However, this doesn't mean that humans can't perceive anything beyond that; 60fps video games appear to be smoother than 24fps movies, and the delay in VR (which is probably more of a delay in response to human movement than fps) can cause motion sickness.

ではそれ以上の動きが人間に知覚できないかというとそうでもなくて、60fpsのゲームは24fpsの動画よりもヌルヌル動いて見えるし、VRの遅延（これは多分fpsよりも人間の動きに対する反応の遅れ）が酔いを生じさせることもあります。

It's always good to know various methods and choose the best one for your purpose.

様々な手法を知った上で、常に自分の目的に最適な手法を探すのが良いでしょう。

[Building Ragdolls ラグドールを作る](/building-ragdolls)
