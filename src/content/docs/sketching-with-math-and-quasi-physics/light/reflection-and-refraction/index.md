---
title: "Reflection and Refraction 反射と屈折"
slug: reflection-and-refraction
---
When light hits an object, some of it penetrates the object while the rest is reflected.

光は何か物体に当たると一部は中に進んで行き、残りは反射します。

# Reflection
# 反射

When light is reflected, the angle of incidence and the angle of reflection, i.e., $θ_1$ and $θ_2$ in the drawing below, are equal.

光が反射するときには入射角と反射角、つまり下の絵で$θ_1$と$θ_2$が等しくなります。

[![](/images/reflection-and-refraction.png "50")](/images/reflection-and-refraction.png)

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="qgjjQj" data-user="kynd" data-preview="true"></p></div>

To express this with vectors, let a [vector](/vector-operations) $\vec{i}$ represent the direction of the original light and $\\vec{n}$ represent the direction of the surface of the object (normal). The direction of the reflected light $\vec{r}$ can be expressed by the following equation.

これをベクトルで表現する場合、もとの光の向きを[ベクトル](/vector-operations) $\vec{i}$、物体の表面の向き（法線）を$\vec{n}$とすると、反射した光の向き$\vec{r}$ は下記の式で表せます。

$$\vec{r}=\vec{i}-\dfrac{2\vec{i}\cdot \vec{n}}{\left\|\vec{n}\right\|^2}\vec{n}$$

Let's break it down on a drawing. You can subtract the [projection](/vector-operations) of $\vec{i}$ onto $\vec{n}$ ($\vec{a}$) twice from the original light vector $\vec{i}$ to obtain the reflection vector $\vec{r}$. Because the triangle formed by $\vec{i}$ and $\vec{a}$ is congruent to the triangle formed by $\vec{r}$ and $\vec{a}$, the angle of incidence and the angle of reflection are equal.

図解してみてみましょう。もとの光のベクトル$\vec{i}$から、$\vec{i}$ を $\vec{n}$ に[投影したもの](/vector-operations)（$\vec{a}$）を2回引くと反射ベクトル $\vec{r}$が得られます。$\vec{i}$と$\vec{a}$が作る三角形と$\vec{r}$と$\vec{a}$が作る三角形は合同なので入射角と反射角が等しくなります。

[![](/images/reflection-and-refraction-1.png)](/images/reflection-and-refraction-1.png)

<div></div>

You can simplify this by [normalizing](/vector-operations) $\vec{n}$ first.

先に $\vec{n}$ を[正規化](/vector-operations)しておくと式が簡単になります。

  
$\vec{a} = (\vec{i}\cdot \hat{n})\hat{n}$

${\vec{r}=\vec{i}- 2(\vec{i}\cdot \hat{n})\hat{n}}$

The demo below draws the path of light reflected between randomly placed mirrors. It is also quite interesting visually.

下のデモは鏡をランダムに配置してその間を反射する光の軌跡を描いたものですが、グラフィックとしてもかなり面白いものになりました。

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="VgWrpb" data-user="kynd" data-preview="true"></p></div>

Parallel rays reflected on a parabolic mirror converge at a single focal point. Parabolic antennas use this property to collect radio waves.

放物線型の鏡で平行な光を反射させると、1つの焦点に集まります。パラボラアンテナはこの性質を利用して電波を集める仕組みになっています。

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="bzRROZ" data-user="kynd" data-preview="true"></p></div>

# Refraction
# 屈折

Light that goes into an object is usually absorbed and becomes heat, but if the material is highly transparent such as water and glass, it continues on and passes through to the other side.

物体の中に進んだ光は大抵吸収されて熱になりますが、水やガラスなど透明度の高い物質の場合はそのまま進んで反対側まで通り抜けていきます。

When light enters or leaves a different medium, for example from air to water or from water to air, its direction changes. This is called **refraction**. A straw standing on a glass of water appears bent because of refraction.

例えば空気から水へ、水から空気へと、光が異なる媒体に入ったり出たりするとき、その方向が変わります。これを屈折といいます。水の入ったコップに立てたストローが曲がって見えるのは屈折が原因です。

[![](/images/observing-refracting-popsicle-sticks-at-a-science-workshop-f.png)](/images/observing-refracting-popsicle-sticks-at-a-science-workshop-f.png)

Observing refracting popsicle sticks at a science workshop for kids.

If the angle of incidence is $\theta_1$, the angle of refraction is $\theta_2$, the speed of light in medium 1 is $s_1$, and the speed in medium 2 is $s_2$, the following relationship exists between them.

入射角を$\theta_1$、屈折角を$\theta_2$、媒質1の中の光の速さを$s_1$、媒質2の中の速さを$s_2$とすると、これらの間には次の関係があります。

${\sin \theta_{i} \over {\sin \theta_{r}}} = {s_{1} \over s_{2}}$

[![](/images/reflection-and-refraction-2.png "50")](/images/reflection-and-refraction-2.png)

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="exRegO" data-user="kynd" data-preview="true"></p></div>

The speed of light is fastest in a vacuum and slows down in other mediums. When we talk about refraction, this ratio of speed is called the refractive index. The ratio of the speed in a vacuum to the speed in a given material is called the absolute refractive index. In 3D graphics it is also often called IOR (**index of refraction**). For example, the IOR of water is about 1.33, which means that in water, light travels at 1/1.33 of its speed in a vacuum. Since the speed of light in the atmosphere is about the same as in a vacuum, when light travels from air to water $S_1 \over S_2$ in the above equation becomes 1.33 ($1 \over 1/1.33$). [This page lists the values for various materials](https://pixelandpoly.com/ior.html).

光の速さは真空中が最も早く、他の媒体の中では遅くなります。屈折のことを考える場合はこの速さの比のことを屈折率と呼びます。真空中の光の速度と、ある物質の中を光が進む速度の比を絶対屈折率と呼びます。3DグラフィクスではIOR（Index of refraction)と呼ばれることも多いようです。例えば水のIORは約1.33で、大気中の光の速度は真空とほぼ同じなので、これは水の中では光は真空中の1/1.33の速さで進むという意味です。空気から水の光が進むときに上の式の$S_1 \over S_2$が1.33（$1 \over 1/1.33$) になります。[このぺージには様々な物質の一覧があります](https://pixelandpoly.com/ior.html)。

Reflection and refraction are related to the property of light as a wave called Huygens' law. Take a look at these Khan Academy videos.

反射と屈折にはホイヘンスの原理という光の波としての性質が関係しています。このKhan Academyのビデオをみてみましょう。

<div class="video-embed"><iframe src="https://www.youtube.com/embed/N3levs4TzTA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

# Fresnel equations
# フレネルの式

Reflection and refraction occur simultaneously when light hits an object. With [Fresnel equations](https://en.wikipedia.org/wiki/Fresnel_equations), you can find the ratio of the amount of light reflected to the amount of light refracted. Because the original equations are a little complex, a formula called Schlick's approximation is often used in computer graphics. $\theta$ is the angle of incidence and $n_1$ and $n_2$ are the IORs of the two substances.

光が物体に当たる時には反射と屈折が同時に発生します。[フレネルの式](https://ja.wikipedia.org/wiki/%E3%83%95%E3%83%AC%E3%83%8D%E3%83%AB%E3%81%AE%E5%BC%8F)を用いると、この反射する光と屈折する光の量の割合を求められます。元々の式はやや複雑なのでコンピュータグラフィックスではSchlickの近似と呼ばれる式がよく用いられます。$\theta$が入射角、$n_1$と$n_2$は2つの物質のIORです。

$F(\theta) = F_0 + (1 - F_0)(1-cos \theta)^5$

$$F_0 = \left(\dfrac{n_1 - n_2}{n_1 + n_2}\right)^2$$

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="VwGgdOW" data-user="kynd" data-preview="true"></p></div>

The demo shows that as the angle of incidence increases, ie., as the light becomes closer to parallel to the surface of the object, the reflection component suddenly becomes larger. This is why the water appears to be more transparent close to your feet, while the distant surface mirrors the scenery on the other side more when looking at a lake or a swimming pool. The same occurs with other materials such as plastic and metal, and the edges of objects appear to have more reflection of the background.

デモで見ると入射角が大きくなる、つまり光が物の表面に対して並行に近くなるにつれて急に反射成分が大きくなるのがわかります。湖やプールの水面を見た時に、足元は水底が透過して見えるのに、遠くの水面には向こう岸の景色が反射が見えるのはこの原理による物です。プラスチックや金属など他の物質でも同じことが起きて、物体の縁にはより背景が写り込んで見えます。

[![](/images/fresnel-lake-by-stablediffusion-2-1.jpeg)](/images/fresnel-lake-by-stablediffusion-2-1.jpeg)

Fresnel, lake by StableDiffusion 2.1

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="ExerppX" data-user="kynd" data-preview="true"></p></div>

Next, we will discuss the relationship between light and matter and the 3D rendering techniques based on this relationship.

次は光と物質の関係、またその関係に基づいた3Dレンダリングの手法について触れます。

[Illuminating objects 物体を照らす](/illuminating-objects)
