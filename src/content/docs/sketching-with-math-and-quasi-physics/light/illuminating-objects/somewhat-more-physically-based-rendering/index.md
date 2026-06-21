---
title: "(Somewhat more) Physically based rendering 物理的に（もう少し）正しいレンダリング"
slug: somewhat-more-physically-based-rendering
---
> 
> 
> The page was originally based on a primer of PBR (**Physically Based Rendering**) using Unity as the primary example. However, since I found that almost all of the main concepts are explained in detail in implementable forms on [LearnOpenGL.com](https://learnopengl.com/PBR/Theory), I have rewritten the page so that you can run all the samples in a browser. As a result, this page has become pretty much a visual summary of what I have learned from [LearnOpenGL.com](http://learnopengl.com/). Most of what is written on this page is also described in more detail in the links.  
>   
> このページの元になったプレゼンテーションは主にUnityを例にPBR(Physically based rendering)を説明するものでしたが、ほとんどの主要な概念が[LearnOpenGL.com](https://learnopengl.com/PBR/Theory)で実装可能な形で詳細に説明されているのを見つけたので、ブラウザで全てのサンプルが実行できるように書き直しました。結果として、このページは自分がLearnOpenGL.comから学んだことのビジュアルなまとめのようになってしまいました。ここに書かれていることのほとんどはリンク先にもより詳しく書かれています。

Let’s learn about the nature of light by learning more physically accurate rendering techniques. Here we will use [LearnOpenGL.com](https://learnopengl.com/PBR/Theory)'s implementation as a reference so that we can run it in real time in the browser. The details of the implementation are described in the linked page, so the emphasis here is on learning the basic concepts.

より物理的に正確なレンダリング手法を学ぶことで、光の性質について学びましょう。ここではブラウザ上でリアルタイムに動かせるように [LearnOpenGL.com](https://learnopengl.com/PBR/Theory) の実装を参考にします。実装の詳細はリンク先で細かく説明されているので、ここでは基本的な考え方を説明することに重きを置きます。

<div class="bookmark-card"><a href="https://learnopengl.com/PBR/Theory" target="_blank" rel="noopener" class="bookmark-link"><div class="bookmark-info"><div class="bookmark-title">LearnOpenGL - Theory</div><div class="bookmark-description">Learn OpenGL . com provides good and clear modern 3.3+ OpenGL tutorials with clear examples. A great resource to learn modern OpenGL aimed at beginners.</div><div class="bookmark-url"><img src="https://learnopengl.com/favicon.ico" class="bookmark-favicon" alt="" onerror="this.style.display='none'"><span>https://learnopengl.com/PBR/Theory</span></div></div></a></div>

[Filament](https://google.github.io/filament/documentation/)'s page is also a very helpful resource.

[Filament](https://google.github.io/filament/documentation/) のページも参考になります。

<div class="bookmark-card"><a href="https://google.github.io/filament/Filament.html" target="_blank" rel="noopener" class="bookmark-link"><div class="bookmark-info"><div class="bookmark-title">Physically Based Rendering in Filament</div><div class="bookmark-url"><span>https://google.github.io/filament/Filament.html</span></div></div></a></div>

# Environment Light
# 環境光

On [the page about classic methods](/classic-3d-rendering), we built a simple model assuming only point light sources and uniform ambient light. In a real environment, light comes from all directions with varying colors and intensities. Light from the sun or from lighting is scattered in the atmosphere or reflected off the surface of an object, then reflected back onto another object, and so on, until the space is filled with light.

[古典的な手法についてのページ](/classic-3d-rendering)では、点光源と均一な環境光だけを想定して単純なモデルを構築しました。実際の環境では光はあらゆる方向からやってきます。太陽や照明から出た光が大気で散乱したり物体の表面で反射し、さらにその光が別の物体に反射し、と繰り返し空間は光に満たされます。

[![](/images/somewhat-more-physically-based-rendering.png)](/images/somewhat-more-physically-based-rendering.png)

<div></div>

In high-quality 3D rendering, a technique generally called ray tracing is used to simulate actual phenomena as closely as possible by following the trajectory of light particles. The higher the accuracy, the more calculations are required, so rendering takes longer.

高品質な3Dレンダリングでは、一般にレイトレーシングと呼ばれる技術を用い、光の粒子の軌跡を忠実に追いかけることで実際の現象を可能な限り再現します。精度が高いほど計算量が多くなるため、レンダリングに時間がかかります。

For simplicity, we will focus on a single sphere placed in the center of the screen. Let's assume that reflections and scattering among other objects have already occurred, and consider only the light coming toward that object. From the point of view of an object, we can think of all surrounding objects as light sources, and the direction from the object determines what kind of light is coming. This light will reflect off the surface of the object, and you will only see the light that happens to be coming into your eyes.

ここでは単純化のため、画面の中央に置かれた球体一個に注目することにします。他の物体の間の反射や散乱は既に起こったものとし、その物体に向かってくる光だけを考えましょう。ある物体から見ると周囲にある全ての物体が光源だと考えることができ、その物体からの向きによってその方向からどんな光が向かってくるかが決まります。この光が物体の表面で反射し、偶然目に飛び込んできた光だけが見えることになります。

[![](/images/somewhat-more-physically-based-rendering-1.png "50")](/images/somewhat-more-physically-based-rendering-1.png)

<div></div>

If we further narrow our field of view and focus on a point $p$ on the sphere, we can consider a small hemispherical world as shown in the picture below. From this hemisphere, various lights are directed toward point $p$. The actual light sources are farther away, but from this point of view, only the direction, color, and intensity of the light are important. How each light reflects and is visible to the eye depends on the orientation of the surface (normal $\vec{N}$) and its properties, as well as the direction of the eye that perceives the light.

さらに視野を狭めて球面上の一点$p$に注目すると下の絵のような小さな半球状の世界を考えることができます。この半球からは点$p$に向けて様々な光が向かってきます。実際の光源はもっと遠くにあるのですが、この点から見れば向きと光の色、強さだけが重要です。それぞれの光がどのように反射し、目に見えるかは表面の向き（法線$\vec{N}$）とその性質、そして光を捉える目の方向に関わっています。

We cannot calculate all the light coming from the hemisphere, but we can approximate it by taking a sufficient number of samples. Calculating the reflection of the light toward the direction of the eye($\omega_0$) for each sample direction of light $\omega_1, \omega_2$... and taking the average is the basis of the method from here on.

半球から向かってくる光を全て計算することはできませんが、十分な数のサンプルをとって近似することはできます。サンプルする光の向き$\omega_1, \omega_2$…ごとに物体による目の向き($\omega_0$)に対する反射を計算し、平均を取るのがここから先の手法の基本になります。

The function that determines the proportion of light reflected at a point _$p$_ from the direction $w_1$ to the direction of the eye $w_0$ is called the bidirectional reflectance distribution function (**BRDF**).

ある点$p$における光の向き$w_1$から目の向き$w_0$に反射する光の割合を求める関数を双方向反射率分布関数（bidirectional reflectance distribution function - BRDF）と呼びます。

[![](/images/somewhat-more-physically-based-rendering-2.png)](/images/somewhat-more-physically-based-rendering-2.png)

> 
> 
> BRDF does not always appear as a single function in the implementation. It is often split into diffuse and specular components, and/or blended into the part of the code that processes light from various directions together. If you are curious about a theoretical equation, refer to the [Rendering equation](https://en.wikipedia.org/wiki/Rendering_equation) on Wikipedia.  
>   
> BRDFが実際に1つの関数として実装の中に出てくるとは限りません。多くの場合はディフューズとスペキュラーに分割されたり、様々な方向からの光をまとめて処理するコードの一部として全体に溶け込んでいたりします。理論的な式が気になる方はWikipediaの[Rendering equation](https://en.wikipedia.org/wiki/Rendering_equation)のページも見てください。

# The physics of the material
# 物質の性質

Next, let's examine the objects themselves. As we learned in [Specular reflections and diffuse light](/specular-reflections-and-diffuse-light), there are two types of materials: conductors and dielectrics. Conductors have no diffuse light, and their specular reflection is colored, while dielectrics have diffuse light, and their specular reflection is not colored. In many models, this property is represented by a parameter called `metallic`, which usually takes values from 1 to 0. Strictly speaking, a material is either a conductor or a dielectric, but intermediate values are also used to reproduce mixed states, such as a metal with a thin layer of paint.

環境の次は描かれる物自体に目を向けてみましょう。[鏡面反射と拡散光](/specular-reflections-and-diffuse-light)のページで見たように物質には導体（Conductor）と誘電体 （Dielectric）があり、導体は拡散光（ディフューズ）がなく鏡面反射（スペキュラー）に色がつく、誘電体には拡散光があり、鏡面反射に色が付かないという特徴があります。多くのモデルではこの性質を1から0の値をとる `metallic` というパラメータで表します。厳密には物質は導体か誘電体かのどちらかなのですが、塗料を薄く塗った金属といった混合状態を再現するのに中間の値も使われます。

[![](/images/somewhat-more-physically-based-rendering.jpeg "50")](/images/somewhat-more-physically-based-rendering.jpeg)

[![](/images/somewhat-more-physically-based-rendering-1.jpeg "50")](/images/somewhat-more-physically-based-rendering-1.jpeg)

<div></div>

Almost any object has fine irregularities (micro-facets) on its surface, and the rougher the surface, the more scattered or blocked the reflected light will be. Think of the demonstration below as a magnified illustration of the situation. As the irregularities are actually invisibly fine-grained, this is usually processed statistically. The parameter that describes this is usually called `roughness`.

ほぼ全ての物体には表面に細かな凹凸（マイクロファセット）があり、表面が粗いほど反射光が散乱したり遮られたりします。下のデモはこの様子を拡大したものだと考えてください。凹凸は目に見えないくらい細かく無数にあるので実際には統計的に処理します。表面の粗さを表すパラメータは大抵 `roughness` と呼ばれます。

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="NWLmmqV" data-user="kynd" data-preview="true"></p></div>

# Energy Conservation
# エネルギーの保存

Another physically important point is the law of conservation of energy. Unless the object itself is emitting light, the sum of outgoing light, i.e., the sum of diffuse and specular components, is always less than the incoming light (some of the light energy is absorbed and becomes heat).

もう1つ物理的に重要な点にエネルギー保存の法則があります。物体自体が発光していない限り出ていく光、つまりディフューズ成分とスペキュラー成分の和は入射光よりも必ず少なくなります（光のエネルギーの一部は吸収されて熱になります）。

# Diffuse Light
# ディフューズ（拡散光）

We will start with the diffuse component here because it is simpler. We will use Lambert's model, as described in the [Classical Methods page](/classic-3d-rendering), as the BRDF for the diffuse component. If you are interested, the [Filament page](https://google.github.io/filament/Filament.html#materialsystem/diffusebrdf) touches on other models used by Disney and the Unreal Engine.

ディフューズ成分の方が簡単なのでこちらから始めます。ディフューズ成分はBRDFとして[古典的な手法のページ](/classic-3d-rendering)で説明したランバートのモデルを使います。[Filamentのページ](https://google.github.io/filament/Filament.html#materialsystem/diffusebrdf)にはDisneyやUnreal Engineで使われているモデルも紹介されているので興味があれば参考にしてください。

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="mdGvzgq" data-user="kynd" data-preview="true"></p></div>

> 
> 
> With this sampling method, the smaller the angle of incidence, the shorter the distance between the points. To compensate for this, the `irradiance` function in the demo below multiplies each sample by `sin(theta)`. This is only technical because it depends on the sampling method. What's important is that the sampling results reflect light from all directions as evenly as possible.  
>   
> このサンプリングの方法では入射角が小さいほど点と点の間隔が短くなってしまいます。これを補正するために下のデモの`irradiance`関数では`sin(theta)`を掛けて補正をしています。これはサンプリングの仕方次第なので本質的ではありません。大事なのはサンプリングの結果ができる限り全ての方向からの光を均等に反映していることです。

The demo below shows a red ball rendered only with the diffuse component. The bottom part is darker because the blue ambient light combined with the color of the red object makes it look blackish. It looks a little flat since it is illuminated from all directions. Let's see how it changes with the specular component added.

下のデモは赤いボールをディフューズ成分だけでレンダリングしています。下の方が暗いのは青い環境光と赤い物体の色がかけ合わさって黒っぽく見えるからです。全方向から光が当たっているので少しフラットな印象ですがここにスペキュラー成分を入れるとどうなるか見ていきましょう。

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="wvENRYo" data-user="kynd" data-preview="true"></p></div>

> 
> 
> [LearnOpenGL.com](https://learnopengl.com/PBR/IBL/Diffuse-irradiance) introduces a technique to reduce runtime processing by using an HDR (High Dynamic Range) image as the source of environment light, sampling it in advance, and writing it to a separate texture. To simplify the code, the demo below generates the environment light in the `env` function and samples it in real-time.  
>   
> [LearnOpenGL.com](https://learnopengl.com/PBR/IBL/Diffuse-irradiance)では環境光のソースとしてHDR（High Dynamic Range）の画像を用いて予めサンプリングを行って別のテクスチャに書き込んで置くことで実行時の処理を軽くする手法が紹介されています。ここではコードをシンプルにするため環境光は`env`関数の中でリアルタイムに生成してサンプリングしています。

# Specular Reflection
# スペキュラー（鏡面反射）

## Specular BRDF
## スペキュラーのBRDF

For the specular component, a model called Cook-Torrance is often used as a BRDF, and it looks like the equation below.

スペキュラー成分のBRDFでよく使われるのはCook-Torranceというモデルで下記の式で表されます。

$$\dfrac{DFG}{4(\omega_0 \cdot n)(\omega_i \cdot n)}$$

The denominator is determined by the direction of the line of sight ($\omega_0$), the direction of the light source ($\omega_i$), and the normal ($n$). Let's look at what $D$, $F$, and $G$ do in the numerator.

分母は視線の向き（$\omega_0$)、光源の向き（$\omega_i$）、法線（n）によって決まります。分子の$D$、$F$ 、$G$が何をしているか見てみましょう。

### D(normal distribution function)

$D$ is the normal distribution function, indicating how well the fine irregularities (micro-facets) align with the orientation of the halfway vector (the vector halfway between the direction of the light and the direction of the viewpoint). This is the same concept as seen on the [classical rendering](/classic-3d-rendering) page, and the results are very similar. In the demo below, moving the mouse left or right changes the **roughness** of the surface.

$D$はNormal distribution function と呼ばれます。表面の細かな凹凸の向きがどれだけ、halfway vector（光源の方向と視点の方向の中間に当たるベクトル）の向きとそろっているを表します。これは[古典的レンダリングのページ](/classic-3d-rendering)で見たのと同じコンセプトで、結果もよく似ています。下のデモでは左右にマウスを動かすことで表面の粗さ（roughness）が変化します。

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="QWVoEJW" data-user="kynd" data-preview="true"></p></div>

### G(geometry function)

$G$ is the geometry function, which represents the effect of micro-facets casting shadows around. Notice how the rougher the surface becomes (move the mouse to the right), the darker the area where the light hits the surface from the side becomes.

$G$はgeometry functionで表面の凹凸が周りに影を落とす効果を再現します。下のデモで表面が粗くなる（マウスを右に動かす）ほど光が斜めから当たる部分が暗くなるのを見てください。

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="oNPVLVq" data-user="kynd" data-preview="true"></p></div>

### F(fresnel equation)

$F$ is the Fresnel equation that we covered on the [Reflection and Refraction](/reflection-and-refraction) page. It determines the amount of light that is specularly reflected based on the angle of incidence and refractive indices. To make it easier to observe the effect, the demo below shows both cases with and without a background.

$F$は反射と[屈折のページ](/reflection-and-refraction)で見たフレネルの式です。入射角と屈折率から鏡面反射する光の割合を求めます。効果が分かりやすいよう、下のデモでは背景がある場合とない場合をそれぞれ表示しています。

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="yLxZZeq" data-user="kynd" data-preview="true"></p></div>

# Combining with Diffuse
# ディフューズと合わせる

The demo below shows a model that combines specular and diffuse lighting, illuminated by four point lights. The concepts explained above are reflected quite directly in the code. Try following the functions one by one. Moving the mouse left or right changes the `roughness`, and up or down changes the `metallic` and the material color.

下のデモはスペキュラーとディフューズを合わせたモデルを4つの点光源で照らしたものです。上で説明した概念がかなりダイレクトにコードに反映されているのでひとつひとつ関数を追って見ましょう。マウスを左右に動かすと `roughness` が、上下に動かすと `metallic` とマテリアルの色の値が変化します。

Fresnel's equation can also be used to find the total amount of specular components. To get the percentage of the diffuse component, subtract the specular component from 1.

フレネルの式はスペキュラー成分の総量を求めるのに使うこともできます。スペキュラー成分を1から引いたものがディフューズ成分の割合になります。

```glsl
vec3 F    = fresnelSchlick(max(dot(H, V), 0.0), F0);
vec3 kS = F; // Specular
vec3 kD = vec3(1.0) - kS; // Diffuse
kD *= 1.0 - metallic; // Reduce the diffuse component according to the metallic parameter
```

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="bGxJyZo" data-user="kynd" data-preview="true"></p></div>

## Sampling the environment light
## 環境光のサンプリング

To reflect environment light, we need to sample a wide range of light, as is the case with diffusion.

環境光を反映するにはディフューズの時と同じく広い範囲の光をサンプリングする必要があります。

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="BaOOyBY" data-user="kynd" data-preview="true"></p></div>

In the [LearnOpenGL.com](https://learnopengl.com/PBR/Theory) implementation, a function called `ImportanceSampleGGX` is responsible for adjusting the sampling according to the roughness of the surface, which uses the Hammersley point set. This may sound quite incomprehensible, so let's visualize it. This is only a technical detail, and other techniques can be used. The important thing to remember is that the rougher the surface, the blurrier the reflected image will appear.

[LearnOpenGL.com](https://learnopengl.com/PBR/Theory)の実装では、表面の粗さに応じてサンプリングを調整するために`ImportanceSampleGGX`という関数が使用されています。この関数では、[Hammersley point set](https://mathworld.wolfram.com/HammersleyPointSet.html)が使用されています。何を言っているのかわからないので、視覚化してみましょう。これはあくまで技術的なディテールであるため、他の手法を使用することもできます。重要なのは、粗い表面ほど反射した像がボケて見えるということです。

> 
> 
> If you encounter something incomprehensible in computer graphics or other fields, try breaking down only that part. If it is a function, visualizing it in a graph or some other graphical form can be a great way to understand it.  
>   
> 他の分野でもそうですが、コンピュータグラフィクスでは何かわからないものに出合ったらまずその部分だけを取り出して考えてみましょう。関数であればグラフなどで視覚化すると直感的に理解する助けになります。

The Hammersley point set can be used to generate points scattered as evenly as possible across the plane, as demonstrated below.

Hammersley point setを使うと下のデモのように平面上にできるだけ均等に散らばった点を生成することができます。

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="gOdqqmW" data-user="kynd" data-preview="true"></p></div>

In `importanceSampleGGX`, these points are laid out on a hemisphere based on the `roughness` value. The smaller the roughness, the more concentrated the points are, while the larger the roughness, the more evenly spread out the points become.

`importanceSampleGGX`ではこれらの点を`roughness`の値によって半球上にレイアウトしています。roughnessが小さいほど点が中央に集まり、大きければ広く均等に拡散する様子がわかります。

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="QWVYYRz" data-user="kynd" data-preview="true"></p></div>

[![](/images/somewhat-more-physically-based-rendering-3.png "75")](/images/somewhat-more-physically-based-rendering-3.png)

<div></div>

The demo below reflects this. The $D$, $G$, and $F$ functions are mixed up and might be harder to follow since the roughness is taken into account at the time of sampling, but the basic idea is the same.

これを反映したものが下のデモです。サンプリングの時点でroughnessが考慮されているので、上の$D$、$G$、$F$の関数が混ぜ合わさったようになり読みにくいかもしれませんが基本的な考え方は同じです。

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="RwYqGyK" data-user="kynd" data-preview="true"></p></div>

This page has become quite technical; there is endless stuff to learn as new methods are constantly being developed in the field of 3D and game development. In many cases, you will be able to rely on features implemented in tools and libraries, but even in those cases, I hope this page provides some intuition on what is happening.

このページは、かなり技術的な内容になってしまいました。3Dやゲーム開発の分野では常に新しい手法が開発されており、学ぶことは無限にあります。多くの場合はツールやライブラリに実装された機能を頼ることができると思いますが、その場合でも、このページが何が起こっているのかを理解する助けになればと思います。

[Light and 2D Graphics 光と2Dグラフィックス](/light-and-2d-graphics)
