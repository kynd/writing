---
title: "Complex Mappings 複素数のマッピング"
---
<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/yyaqGZQ?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

On the pages below, we saw how multiplication and exponentiation can create interesting motion by adding rotation and scaling.

下記のページでは、複素数の掛け算や累乗が回転と拡大を組み合わせた面白い動きを生み出す様子を見てきました。

[Complex Multiplication 複素数の掛け算](/sketching-with-math-and-quasi-physics/math-snippets/complex-multiplication)

[Complex Exponentiation 複素数の累乗](/sketching-with-math-and-quasi-physics/math-snippets/complex-exponentiation)

Rather than focusing on individual calculations, we can apply the same rules to every point as a function. This creates a mapping between two spaces, called a Complex Mapping.

個々の計算に注目する代わりに、同じルールを空間内のすべての点に関数として適用すると、2つの空間の間に対応関係が生まれます。これを複素写像（Complex Mapping）と呼びます。

  
By visualizing how grids and shapes are transformed by a complex function, we quickly build intuition for how the function behaves across the entire plane. It is fascinating to see how a simple algebraic rule like <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mo stretchy="false">(</mo><mi>z</mi><mo stretchy="false">)</mo><mo>=</mo><mn>1</mn><mi mathvariant="normal">/</mi><mi>z</mi></mrow><annotation encoding="application/x-tex">f(z) = 1/z</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.04398em;">z</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">1/</span><span class="mord mathnormal" style="margin-right:0.04398em;">z</span></span></span></span> can produce intricate shapes by folding and stretching the world.

グリッドやさまざまな図形が複素関数によってどのように変換されるかを視覚化すると、その関数が平面全体でどのように振る舞うかを直感的に理解できます。 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mo stretchy="false">(</mo><mi>z</mi><mo stretchy="false">)</mo><mo>=</mo><mn>1</mn><mi mathvariant="normal">/</mi><mi>z</mi></mrow><annotation encoding="application/x-tex">f(z) = 1/z</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.04398em;">z</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">1/</span><span class="mord mathnormal" style="margin-right:0.04398em;">z</span></span></span></span> のような単純な代数ルールが、世界を折りたたんだり引き伸ばしたりして入り組んだ形を作り出す様子は、とても興味深いものです。

In the demo above, select a starting shape and a complex function to see how it transforms the space. Try different combinations, or toggle Demo Mode to cycle through them all.

上のデモでは、元の図形と複素関数を選択して、空間がどのように変化するかを確認できます。さまざまな組み合わせを試して、直線が円や放物線に変わる様子を観察してみましょう。Demo Modeをオンにして、すべての組み合わせを順番に眺めることもできます。
