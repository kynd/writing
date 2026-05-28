---
title: "About Motion 動きについて"
---
One of the most fun parts of sketching with code is that it’s not static. Let’s draw both in space and time.

コードでスケッチするのが楽しい最大の理由の1つは、静止した表現に留まらないことです。空間と時間の両方を使って描いていきましょう。

> 
> 
> This is an article to introduce various topics in [Sketching with Code](/sketching-with-math-and-quasi-physics), illustrating the relationships between them and adding more context to provide a sort of overview. The articles are not in order of difficulty. Please just jump to whichever one interests you.
> 
> これは [Sketching with Math and Quasi Physics](/sketching-with-math-and-quasi-physics) 上の様々なトピックについて、それぞれの間の関係や概要を示したり、新たな文脈を加えたりするためのページです。難易度順には並んでいないので、興味のある記事から自由に読んでみてください。

# Newtonian Mechanics
# ニュートン力学

How do you move a thing? Just push it.  
物はどうすれば動くでしょうか。答えは、ただ押してみることです。

Sir Isaac Newton basically said that things stay at rest in the same position, or keep moving at the same velocity until you apply force to accelerate them. Position, velocity, acceleration, and force are the most fundamental concepts to understand physical motion. Emulating these concepts is extremely simple: frame by frame, just add force to acceleration to change it, then acceleration to velocity, then velocity to position.

アイザック・ニュートン卿は、物体についてこう述べました。力を加えて加速させない限り、物体は静止したままか、同じ速度で動き続けます。位置、速度、加速度、そして力は、物理的な運動を理解する上で最も基本的な概念です。これらの概念をエミュレートするのは驚くほど簡単です。フレームごとに、力を加速度に加えて変化させ、その加速度を速度に、そして速度を位置に加えていくだけです。

[Newtonian mechanics ニュートン力学](/sketching-with-math-and-quasi-physics/newton-and-vectors/newtonian-mechanics)

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/vbGNjx?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/zeqvaO?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/YzLJOgp?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

# Differentiation and Integration
# 微分と積分

Position, velocity, acceleration, and force are in relationships of differentiation and integration.

位置、速度、加速度、そして力は、微分と積分の関係にあります。

Differentiation is the rate of change, and integration is the accumulation of changes. For example, velocity is a quantity that describes how much position will change at a certain moment, and position is the result of velocity being applied and accumulated over time.

微分は変化の割合を表し、積分は変化の蓄積を表します。例えば、速度は特定の瞬間における位置の変化量を表す量であり、位置は速度に応じた変化が時間をかけて蓄積された結果です。

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/XWoMJRV?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

These subjects might have been annoying in math class. But the foundational ideas are quite simple, and luckily in sketching motion with code, you usually don't have to solve any equations, but instead can use a very rough approximation called numerical integration, which breaks down the changes into simple additions per small amount of time.

数学の時間のこれらの科目は頭が痛かったもしれませんが、基本的な考え方は実にシンプルです。さらに、コードで動きのスケッチをする際には、大抵の場合方程式を解く必要すらありません。代わりに数値積分という大まかな近似法が使えます。これは単に、変化を小さな時間単位での足し算に分解する方法です。

You probably have been using this method already without knowing it, for example, the Newtonian physics simulations above are based on a numerical approach instead of mathematically accurate methods.

実際、あなたは気付かないうちにこの方法を使っているでしょう。たとえば、先ほどのニュートン物理学のシミュレーションは、数学的に厳密な方法ではなく、この数値的なアプローチを用いています。

[Differentiation 微分](/sketching-with-math-and-quasi-physics/calculus-for-makers/differentiation)

[Integration 積分](/sketching-with-math-and-quasi-physics/calculus-for-makers/integration)

[![](/images/about-motion.png)](/images/about-motion.png)

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/Poxxoxv?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

[![](/images/about-motion-1.png)](/images/about-motion-1.png)

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/ExGwPKa?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

# Analytical Solutions and Numerical Approximation
# 解析的な解と数値的な近似

The proper way to solve differentiation and integrations by solving equations is called analytical solution. Then the approximation by dividing the changes over a small amount of time is called numerical approximation.

微分と積分を方程式で解く正統的な方法を解析的解法と呼びます。一方、変化を微小な時間で区切って近似する方法を数値的近似と呼びます。

As mentioned above, the latter is the most common and actually more useful in so many cases, but understanding the relationship between these two approaches is important since both have their own merits and drawbacks.

上で触れたように、後者の手法がより一般的で実用的ですが、それぞれ長所と短所があるので、この2つのアプローチの関係を理解することが重要となります。

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/XWqxxEd?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

The numeric approach is preferred not just because it’s easier, but because it’s also more flexible. Solving motion through equations is like predicting the future. Once solved, you know exactly what will happen at any moment. But it's often difficult or impossible to account for all variables. Even calculating the movement of three objects drawn by gravity becomes unpredictable. Any system involving external factors, like human interaction, cannot be determined in advance. Since the numeric approach calculates changes bit by bit (very often frame by frame), it is pretty easy to react to unpredictable changes by updating parameters in real time.

数値的アプローチが選ばれるのは、簡単だからという理由だけでなく、柔軟性があるからです。方程式で運動を解くのは、未来を予測するようなもので、解が得られればどの瞬間の状態も正確に把握できます。しかし、多くの場合、すべての変数を考慮することは難しか、不可能ですらあります。たとえば、重力で引き合う3つの物体の動きでさえ、予測はできません。さらに、人間が操作するなど外部要因が絡むシステムは、事前に決定することができません。一方、数値的アプローチは変化を少しずつ（多くの場合フレームごとに）計算するため、パラメータをリアルタイムで更新でき、予測不可能な変化にも柔軟に対応できます。

> 
> 
> The prediction of the gravitational motion of three objects, made popular by Cixin Liu's bestseller The Three-Body Problem, is called the Three-Body Problem. While solving the two-body problem (like the Earth and Moon) is relatively straightforward and has a neat, predictable solution, the three-body problem is usually chaotic and unpredictable.
> 
> 劉慈欣の大ヒット作「三体」で広く知られるようになった3つの物体の重力による運動の予測は、三体問題と呼ばれています。二体問題（地球と月のような）は比較的単純で、きれいな予測可能な解が得られますが、三体問題は通常、カオス的で予測不可能になります。

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/qmGOgB?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

A common drawback with numerical methods is their inaccuracy. Because these methods approximate smooth motion through discrete changes, the results can go slightly off from physically accurate motion. There are several ways to minimize this problem. The most popular approaches are called the Improved Euler method and [Runge-Kutta method](https://en.wikipedia.org/wiki/Runge%E2%80%93Kutta_methods) (the Euler method is actually a special case of Runge-Kutta).

数値的な手法の主な欠点は不正確さです。これらの手法は滑らかな動きを離散的な変化で近似するため、物理的に正確な動きからわずかにずれることがあります。この問題を最小限に抑えるための方法がいくつかあり、最も一般的なのは改良オイラー法と[ルンゲ・クッタ法](https://en.wikipedia.org/wiki/Runge%E2%80%93Kutta_methods)です（オイラー法はルンゲ・クッタ法の特殊なケースにあたります）。

[![](/images/about-motion-2.png)](/images/about-motion-2.png)

[![](/images/about-motion-3.png)](/images/about-motion-3.png)

[Continuous Time and Discrete Time 連続した時間とバラバラな時間](/sketching-with-math-and-quasi-physics/newton-and-vectors/continuous-time-and-discrete-time)

# Tween
# トゥイーン

Simulations are, by nature, hard to predict precisely, because that’s the point. They’re meant to create or mimic phenomena that can’t be fully described in advance. We simulate weather, for example, because we don’t know exactly what will happen.

シミュレーションは本質的に正確な予測が難しいものですが、シミュレーションの目的が本来、事前に完全に説明できない現象を作り出したり、模倣したりするためだからです。例えば、天気をシミュレーションするのは、実際に何が起こるかを知らないからです。

But this can be a problem when you want more direct control over how things move, where they end up, and when. Also sometimes, you may even want to break the laws of physics. Great animators and motion designers often exaggerate movement and timing, bending or ignoring realism to create something more expressive or impactful.

しかし、物体の動きや、最終的な位置、タイミングをより直接的にコントロールしたい場合にはこれが問題になります。時には、わざと物理法則に破りたいこともあるでしょう。優れたアニメーターやモーションデザイナーは、より表現力豊かでインパクトのある作品を生み出すために、あえて現実を無視したり歪めたりして、動きやタイミングを誇張することがよくあります。

A very common technique in motion design is called tweening, short for in-betweening. You start from defining a start and end state, then fill the intermediate frames by interpolating between them. The word comes from the days when animators hand-drew the frames that filled the gap between key poses (many still do — some expressions simply can't be captured any other way).

モーションデザインでよく使われる手法の一つに、トゥイーニング（tweening）があります。これはイン・ビトゥイーニング（in-betweening）の略で、始めと終わりの状態を決めて、その間のフレームを補間して埋めていく手法です。この言葉は、アニメーターがキーポーズの間を手描きで埋めていた時代に由来します（他の方法では表現できない動きがあるので、今でも手書きをする人は大勢います）。

In computer animation, we often use easing functions to control these transitions. Easing functions connect one value to another, changing the pace in between, like slowing in, speeding out, bouncing, etc. In motion design, you can think of an easing function as a kind of [mapping](/sketching-with-math-and-quasi-physics/mapping) between time and another value, such as position, scale, or opacity.

コンピューターによるアニメーションでは、こうした動きをコントロールするためにイージング関数がよく用いられます。イージング関数は、たとえば、ゆっくり始まって徐々に加速したり、跳ねるような動きを生み出したりと、ある値から別の値への変化の仕方を調整します。モーションデザインでは、イージング関数は時間と、位置やスケール、透明度といった値との間の対応付けとして考えることができます。

[Interpolation and Animation 補間とアニメーション](/sketching-with-math-and-quasi-physics/interpolation-and-animation)

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/qmLJeO?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

# Constraints 制約

Things don't just move freely in the real world. On Earth, everything is bound by gravity. Our body movement is constrained by the structure of bones and muscles, but this constraint is what lets us move around and lift things using our bones as levers.

現実の世界では、物体は自由に動くわけではありません。地球上では、すべてのものが重力に縛られています。私たちの体の動きは骨格と筋肉の構造によって制約されていますが、この制約があるからこそ、骨をてことして使って動き回ったり物を持ち上げたりすることができるのです。

Adding constraints to objects is a way to add reality to the motion.

物体に制約を与えると、動きにリアリティを加えられます。

Verlet Integration is a way to create simple physics simulations by connecting dots with sticks which constrains the distance between two points. Though simple, this technique is very flexible, and by combining multiple points and sticks, you can create various kinds of objects from rigid bodies to soft string-like objects.

ヴェレ法は、点と棒を組み合わせて2点間の距離を制約することで、簡単な物理シミュレーションを実現する手法です。単純ながら非常に柔軟な手法で、複数の点と棒を組み合わせることによって、剛体から柔らかな紐状の物体まで、様々な物体を作り出すことができます。

[Building Ragdolls ラグドールを作る](/sketching-with-math-and-quasi-physics/newton-and-vectors/building-ragdolls)

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/aWXVPZ?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/pPGdqX?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

To control movement more precisely and intentionally, you might want to study kinematics. Forward kinematics and inverse kinematics are common techniques used in robotics, games, and so on to describe the motion of jointed parts, such as mechanical arms or human bodies.

動きをより正確かつ意図的にコントロールしたい場合、キネマティクスの理解が役立ちます。フォワードキネマティクスとインバースキネマティクスは、ロボット工学やゲームなどの分野で広く使われている手法で、機械のアームや人体のような関節を持つ構造の動きを表現することができます。

[![](/images/about-motion.jpg)](/images/about-motion.jpg)

Both methods handle structures made of multiple segments and joints to connect them. Forward kinematics starts from the root of the connection and propagates the posture going forward to the end. You directly manipulate the rotation of each joint, and that will determine the overall movement.

どちらの手法も、複数のセグメントと関節から成る構造を用います。フォワードキネマティクスは、繋がりの根本（基点）から始めて、姿勢を端へと伝えていきます。それぞれ関節の回転を直接操作することにより、全体の動きが決まります。

[Kinematics キネマティクス](/sketching-with-math-and-quasi-physics/kinematics)

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/qBvBvLa?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

Inverse kinematics is more goal-driven. You define where you want the endpoint to be, then the algorithm figures out the rotation of each joint that makes the desired result happen.

インバースキネマティクスは、目標志向のアプローチで、最終点の位置を定義すると、アルゴリズムがその位置を実現するために必要なそれぞれの関節の回転角度を計算してくれます。

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/OJqNBNQ?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

[Kinematics キネマティクス](/sketching-with-math-and-quasi-physics/kinematics)

# Random Walker
# ランダムウォーカー

Motion of objects and life in the real world is often unpredictable, and you can always introduce some randomness to your design. The demo below shows four random walkers with different methods to generate random values. In real applications, you might want to combine more predictable methods like above with some randomness. Depending on your goal, play around and find a sweet spot.

現実世界の物体や生きものの動きは大抵予測できないものなので、動きの仕組みにランダムさを取り入れても良いでしょう。下は4つの異なるランダム値を生成する方法を使ったランダムウォーカーのデモです。実際の場面では、ここまで紹介したような予測可能な手法とランダムさを組み合わせた方が良いこともあるでしょう。目的に合わせて試して、良いバランスを見つけましょう。

[Taming Randomness ランダムさを手なづける](/sketching-with-math-and-quasi-physics/taming-randomness)

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/eWbPdK?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

# Camera in Motion
# カメラの動き

While we've explored how to move objects and characters, there's one more crucial but invisible actor to consider: the camera. How you frame the scene and position the viewpoint dramatically shapes the final result.

これまで物体やキャラクターの動かし方を見てきましたが、忘れてはならない目に見えないもう一つの主役がいます。それはカメラです。シーンの構図や視点の動かし方によって、最終的な結果は大きく変わります。

[Camera in Action 働くカメラ](/sketching-with-math-and-quasi-physics/camera-in-action)

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/OPJadKe?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

# Sketching with motion
# 動きとともに描く

When you sketch with motion, you’re not just placing things in space but you are giving them life in time. Whether you follow the rules of physics, break them for expressiveness, or invent your own systems, motion opens a lot possibilities for exploration and creativity. If you’re curious, keep experimenting and see where the next movement leads.

コードで動きをスケッチすると、単に空間に物を置くだけでなく、時間の中でより生き生きとした表現ができます。物理の法則に従ったり、表現のためにあえて破ったり、独自のシステムを作ったり。動きは、探究と創造の可能性を大きくに広げてくれます。興味が湧いたら、どんどん試して、その動きが向かう先を見てみましょう。

<div class="instagram-wrap"><blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DAhoSwyvHDQ/" data-instgrm-version="14" style="width:100%;max-width:540px;margin:0;border:none;border-radius:4px;padding:0;"></blockquote></div>
