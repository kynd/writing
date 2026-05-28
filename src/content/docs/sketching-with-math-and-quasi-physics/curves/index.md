---
title: "Curves 曲線"
---
Curves are the norm on Earth. Nature doesn't have many straight lines. Almost nothing goes straight, except for light. Curves are obviously a very essential tool for sketching. However, unlike straight lines, which can be defined with just two points and a linear formula, curves have infinite possibilities and are much harder to handle. There have been many different methods of defining or drawing curves, each with its own advantages, disadvantages, and constraints. We will look through several examples of these methods that are commonly used in computer graphics and design.

地球の上では曲線が標準です。直線は自然の中にはあまり存在せず、光をのぞいて直進するものもほとんどありません。当然ながら曲線はスケッチにおいて非常に重要ですが、2点と線形の方程式で定義できる直線に対して曲線には無限の可能性があるため、扱いがはるかに難しくなります。曲線を定義したり描画するためには様々な方法があり、それぞれに、利点、欠点や制約があります。ここでは、コンピュータグラフィックスやデザインで一般的に使用される方法をいくつか見ていきます。

# Cumulative Curves
# 積み重ねによる曲線

One of the most common ways that curves occur in the physical world is through cumulative motion or buildup, meaning a point starts moving from one location and changes its course over time. This can include freehand drawing, paths followed by insects, animals, vehicles, and the growth patterns of plants and other organisms.

物理的な世界で曲線が生まれる最も一般的な形の1つは、累積的な運動や蓄積、つまり何かがある地点から動き始め、時間とともにその進路を変えながら進んでいくことです。これにはフリーハンドの描画、昆虫、動物、車両が辿る経路、または植物や他の生物の成長パターンなどが含まれます。

Applying this to computer graphics, we can create infinite varieties of curves by tracing the movement of a point and defining how the direction (velocity) changes as it progresses.

この考え方をコンピュータグラフィックスに応用すると、点が進むにつれどのように向き（速度）を変化させるかを決め、その動きを追跡することで、無限の種類の曲線を作ることができます。

[Cumulative Curves 積み重ねによる曲線](/sketching-with-math-and-quasi-physics/curves/cumulative-curves)

# Parametric Approach
# パラメトリックアプローチ

While the [cumulative approach is straightforward and versatile in theory](/sketching-with-math-and-quasi-physics/curves/cumulative-curves), it is often not the best for many practical use cases where you want more precise control over the overall shape and details, such as in drawing or design tools.

[積み重ねによるアプローチ](/sketching-with-math-and-quasi-physics/curves/cumulative-curves)は理論上は素直で汎用的ですが、描画ツールやデザインツールなど、実際の利用シーンで、全体の形や細部をより正確に制御したい場面では必ずしも最適ではありません。

These tools usually adopt parametric approaches. In the parametric approach, a shape or curve is defined mathematically using one or more parameters. By varying these parameters, you can generate points that make up the shape. For example, if the parameter is called <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>t</mi></mrow><annotation encoding="application/x-tex">t</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6151em;"></span><span class="mord mathnormal">t</span></span></span></span>, you can get all the points from beginning to end by moving <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>t</mi></mrow><annotation encoding="application/x-tex">t</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6151em;"></span><span class="mord mathnormal">t</span></span></span></span> within a certain range.

これらのツールは大抵、パラメトリックなアプローチが用いられます。パラメトリックアプローチでは、形状や曲線は1つまたは複数のパラメータを使用して数学的に定義され、これらのパラメータを変化させることで、形状を構成する点を生成します。例えばパラメータを <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>t</mi></mrow><annotation encoding="application/x-tex">t</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6151em;"></span><span class="mord mathnormal">t</span></span></span></span> とすると、この <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>t</mi></mrow><annotation encoding="application/x-tex">t</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6151em;"></span><span class="mord mathnormal">t</span></span></span></span> を <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">[</mo><mn>0</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">]</mo></mrow><annotation encoding="application/x-tex">[0, 1]</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">[</span><span class="mord">0</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">1</span><span class="mclose">]</span></span></span></span>といった一定の範囲内で変化させることで、始めから終わりまでのすべての点を取得することができます。

[Parametric Approaches パラメトリックアプローチ](/sketching-with-math-and-quasi-physics/curves/parametric-approaches)

# Bézier and Spline
# ベジェとスプライン

A spline curve is a mathematically defined curve that smoothly passes through or is close to a series of control points. It is like a big family, and there are many variations including Bézier curves, B-spline curves, NURBS (Non-Uniform Rational B-Splines), Cardinal Splines, Catmull-Rom Splines, Hermite Splines, etc.

スプライン曲線は、滑らかに一連の制御点を通過するか、またはその近くを通過するように数学的に定義された曲線です。これは大きなファミリーのようなもので、例えば、ベジェ曲線、Bスプライン曲線、NURBS（Non-Uniform Rational B-Splines）、カーディナルスプライン、Catmull-Rom スプライン、エルミートスプラインなどに様々なバリエーションがあります。

[Bézier and Spline ベジェとスプライン](/sketching-with-math-and-quasi-physics/curves/be)

# Controlling Curves
# 曲線のコントロール

We have explored different ways of defining and drawing curves, but we haven't discussed the quality of curves much. Curves can have various visual characteristics. For example, some curves might look more organic and natural, while others might appear more geometric and mechanical. How can we create these different looks of curves?

ここまで曲線を定義し描画する様々な方法を見てきましたが、曲線の質についてはあまり議論してきませんでした。曲線には多様な見た目の特徴があります。例えば曲線には有機的で自然に見えるものも、より幾何学的で機械的に見えるものもあります。これらの異なる曲線の見た目はどうしたら作れるのでしょうか。

[Controlling curves 曲線のコントロール](/sketching-with-math-and-quasi-physics/curves/controlling-curves)
