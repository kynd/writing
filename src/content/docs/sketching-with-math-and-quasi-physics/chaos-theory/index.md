---
title: "Chaos Theory カオス理論"
---
[![](/images/chaos-theory.png)](/images/chaos-theory.png)

コードを用いた数学的表現に興味がある人なら、一度はローレンツ・アトラクターを描いたことがあるかもしれません。簡単なコードから複雑で美しい形が生まれるのを見るのは楽しいものです。しかし、写経を終えた後、わかったようなわからないような気分のままその先へ進む道を見失ってしまったことはないでしょうか。

If you're interested in creative coding and mathematics, you've likely rendered a Lorenz attractor at least once. There's a distinct joy in seeing complex, organic beauty emerge from a few lines of code. However, after the initial excitement of "copy-pasting" wears off, you might find yourself in a state of limbo—understanding the how but not the why, unsure of where to take these forms next.

This series aims not only to run existing code based on chaos, but also to explore the underlying ideas and essential mechanisms, helping you learn various concepts and sparking new ideas.

このシリーズではカオスに基づいた既存のコードを実行するだけでなく、その背景にあるアイデアや本質的な仕組みの部分に踏み込むことで、様々な概念を学んだり、新しいアイデアを考えるヒントになることを目指します。

# What is Chaos? カオスとは何か

Chaos is not merely complexity. It is unpredictable order arising from the recursion of simple rules. It refers to phenomena that follow deterministic rules, yet extremely small differences in initial conditions are exponentially amplified through recursive feedback, making long-term behavior unpredictable.

カオスとは単に複雑なものではなく、単純なルールの再帰が生む、予測不能な秩序を指します。  
決定論的なルールに従いながらも、初期値の極めてわずかな差が再帰的なフィードバックによって指数関数的に増幅され、長期的にはその挙動が予測不能になる現象のことです。

  
Let's consider examples from nature. Planetary motion between two bodies is a highly stable system. We can accurately predict Mars's position 10 years from now using equations—no step-by-step simulation needed. If our observations are slightly off, the prediction will also be slightly off, staying within a small range.

自然界の例で考えてみましょう。例えば惑星の運動（2体間）は非常に安定した系です。現在の火星の位置から10年後の位置を、数式によって一発で正確に予測できます。観測誤差がわずかなら、予測結果のズレもわずかな範囲に留まります。

Weather, on the other hand, is a prime example of a highly complex system with intertwined nonlinear interactions.  
Slight deviations in initial conditions are exponentially magnified over time—the butterfly effect—making long-term forecasting extremely difficult. While planetary motion can be predicted directly using simple equations, weather offers no such shortcut. It must be simulated step by step from the current state. If you want an accurate result, you have no choice but to wait for the system to actually run—for time to pass.

一方で、天気は非線形な相互作用が絡み合う、非常に複雑な系の代表例です。  
初期条件のわずかなズレが時間の経過とともに指数関数的に拡大されるため（バタフライ・エフェクト）、長期予報は極めて困難になります。また、惑星の運動がシンプルな方程式の解として未来を先取りできるのに対し、天気は今の状態から一歩ずつ愚直にシミュレーションする以外に予測の方法がありません。正確な結果を知りたければ、その系を実際に動かしてみる（＝時間が経過する）のを待つしかないのです。

If we believe that the natural world at large scale (not at the scale of quantum physics) follows deterministic laws of physics, most things in the world are chaotic. Even planetary motion, which we cited above as a stable system, begins to exhibit chaotic properties like weather when it becomes a three-body problem involving three or more celestial bodies. In reality, there are countless celestial bodies, so macroscopically all orbits are chaotic. It's just that in the case of our solar system, the sun's mass is so overwhelmingly large that we can obtain sufficiently accurate results even while ignoring the influence of other bodies.

自然界が（量子物理学のスケールではなく）大きなスケールでは決定論的な物理法則に従っていると信じるならば、世の中の大抵のものはカオスです。上に安定した系の例として挙げた惑星の運動も、天体が3つ以上関わる三体問題になると、天気と同じくカオスの性質を帯び始めます。現実には無数の天体があるので巨視的には全ての軌道はカオスなのですが、太陽系の場合は太陽の質量が圧倒的に大きいので他の天体の影響を無視しても十分正しい結果が得られるだけなのです。

> 
> 
> This is a broadly correct explanation (I think), but mathematically there is a more rigorous definition. We'll touch on the concept in more detail later on.
> 
> これは大まかには正しい（と思う）説明ですが、数学的にはもっと厳密な定義があります。後の方でもう少し詳しい概念に触れます。

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/emzWpMd?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

While much of the chaos in the real world arises from the mutual interference of numerous, or countless elements, this series deals with examples where relatively simple equations give rise to chaos.

現実世界のカオスの多くは数多く、あるいは無数の要素の相互干渉から生まれるのに対して、このシリーズでは比較的シンプルな数式がカオスを生み出す例を扱います。

But the boundary between the two is not as distant as we might think. Even in phenomena where infinite variables are intertwined, like weather, it is known that in systems where energy flows according to consistent laws, the behavior of the entire system can remarkably condense into just a few dominant variables. Concise equations like the Lorenz attractor can be seen as specimens that extract the essence lurking in the depths of vast natural phenomena.

しかし、両者の境界は私たちが思うほど遠くはありません。天気のように無限の変数が絡み合う現象であっても、エネルギーが一定の法則で流れる系では、驚くべきことにシステム全体の挙動が数個の支配的な変数へと凝縮されることが知られています。ローレンツ・アトラクターのような簡潔な数式は、いわば巨大な自然現象の奥に潜むエッセンスを抽出した標本だとも言えます。

[Logistic Mapping ロジスティック写像](/sketching-with-math-and-quasi-physics/chaos-theory/logistic-mapping)

[What is Randomness? ランダムさとは](/sketching-with-math-and-quasi-physics/chaos-theory/what-is-randomness)

[Stretch and Fold 引き伸ばしと折り畳み](/sketching-with-math-and-quasi-physics/chaos-theory/stretch-and-fold)

[Strange Attractor ストレンジアトラクター](/sketching-with-math-and-quasi-physics/chaos-theory/strange-attractor)

[Physical Chaos 物理的なカオス](/sketching-with-math-and-quasi-physics/chaos-theory/physical-chaos)

[(Extra) Math on Chaos（さらに）カオスの数学](/sketching-with-math-and-quasi-physics/chaos-theory/extra-math-on-chaos)

<table class="matrix-table"><tbody><tr><td>FAQs Mini</td><td></td></tr><tr><td>License? Can I use the contents?</td><td>Yes, please! Anything from personal to educational. I'd appreciate if you can let me know where you have used them, but it's not required. Assume CC BY 4.0 unless otherwise noted. Use at your own responsibility. Read more</td></tr><tr><td>ライセンス? コンテンツを他で使っても良い？</td><td>はい、ぜひ。個人使用から教育目的まで、どのような用途でもOKです。使った場所を知せてもらえると嬉しいですが、必須ではありません。特に明記がない限り、CC BY 4.0ライセンスが適用されます。ご利用は自己責任で。詳しく</td></tr><tr><td>How can I follow the updates?</td><td>Follow me on Bluesky, Threads or other one.</td></tr><tr><td>アップデートはどこで確認できますか？</td><td>Bluesky、Threads、その他でフォローしてください。</td></tr><tr><td>Is there an index page?</td><td>Yes, here.</td></tr><tr><td>目次はありますか？</td><td>はい、ここです。</td></tr></tbody></table>
