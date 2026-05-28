---
title: "Codifying materials (2)"
---
油絵具には立体的な質感もある。筆の跡やペインティングナイフによる厚塗り。記憶にあるのは、美術館のようにコントロールされた光よりも、暗い廊下やアトリエの外に置かれたキャンバス。朝や夕方に斜めから光が当たっていると物質感が際立って、描かれている絵とは関係なく面白かったりする。

Oil paint also has a three-dimensional texture. Brush marks and thick coats made with a painting knife. What I remember is a canvas placed in a dark corridor or outside a studio rather than in controlled light as in a museum. When the light hits from the side in the morning or evening, the sense of materiality stands out making it look interesting regardless of the drawn picture.

[![](/images/codifying-materials-2.png)](/images/codifying-materials-2.png)

[![](/images/codifying-materials-2-1.png)](/images/codifying-materials-2-1.png)

3D CGではお馴染みの手法だが、これらの画像は色の配置を表すカラーマップと、表面からの高さを表すハイトマップという2つのデータで表現されていて、それをレンダリングすると立体感のある画像ができる。

コンピュータで凸凹を作り出すには、それを数式で表せるか考える。例えば簡単なサインカーブから始める。白いところが高い場所、暗いところが低い場所を表す。これをレンダリングすると右のような凸凹の形ができる。

These images are represented by two pieces of data, a color map that represents the arrangement of colors and a height map that represents the height from the surface. This is a very common method in 3D CG which, when rendered, can create a three-dimensional illusion.

To create the up and down on a computer, we can think about how the shape can be created with mathematical equations. Let's start with a simple sine curve for example. White areas represent high areas and dark areas represent low areas. When this is rendered, it would look like a wavy surface to the right.

[![](/images/codifying-materials-2-2.png)](/images/codifying-materials-2-2.png)

[![](/images/codifying-materials-2-3.png)](/images/codifying-materials-2-3.png)

サインカーブの代わりに、ランダムだが連続的な数値を返すノイズ関数を関数を使ってみる。

Instead of a sine curve, let's try using a noise function that returns random but continuous numbers.

[![](/images/codifying-materials-2-4.png)](/images/codifying-materials-2-4.png)

次の例では点と点との間を等距離に分けるボロノイ分割という手法を用いた。角を丸めたりノイズを加えてやるとかなり質感が出る。角を丸めたり尖らせたりするための関数も色々考えられて、それぞれ味わいがある。

The following example uses a method called Voronoi segmentation, which divides the space between points into equal distances. Rounding the corners and adding noise gives the image a much more textured look. There are various functions for rounding and sharpening the corners, each of which has its own flavor.

[![](/images/codifying-materials-2-5.png)](/images/codifying-materials-2-5.png)

[![](/images/codifying-materials-2-6.png)](/images/codifying-materials-2-6.png)

[![](/images/codifying-materials-2-7.png)](/images/codifying-materials-2-7.png)

[![](/images/codifying-materials-2-8.png)](/images/codifying-materials-2-8.png)

[![](/images/codifying-materials-2.gif)](/images/codifying-materials-2.gif)

砂のような液体のような不思議な質感のアニメーション。絵の具から出発したけれど絵の具とは違う、現実にありそうで存在しない物質ができた。現実の再現を目的にしてるわけではないので、これはこれで成功。自分の道具箱に新しい素材が加わった。

Animation with a mysterious texture like sand or liquid. Starting from paints, this ended up in a substance different from paints that does not seem to exist in reality. I would consider this a success because the goal is not necessarily to reproduce reality. I just got a new material added to my toolbox.

<div class="video-wrap"><iframe title="vimeo-player" src="https://player.vimeo.com/video/407444970" width="640" height="360" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" allowfullscreen></iframe></div>

こうして作った新しい素材で描いた絵を描いてみる。油絵のようでもあり、古くなって剥がれ落ちた壁画のような質感や、レリーフや半立体作品のようなものもできる。普通の3DツールやCAD、よくある数学的なアルゴリズムだけでは出ないような質が作れる。

Pictures painted with the new material created in this process. They can look like oil paintings, old murals breaking down, or semi-3D reliefs. The method can create different qualities that are difficult for ordinary 3D tools, CAD, or common mathematical algorithms to produce.

[![](/images/codifying-materials-2-9.png)](/images/codifying-materials-2-9.png)

[![](/images/codifying-materials-2-10.png)](/images/codifying-materials-2-10.png)

[![](/images/codifying-materials-2-11.png)](/images/codifying-materials-2-11.png)

レンダリングには自分で書いたシェーダを用いた。通常は複雑なディティールを生成して影を計算するとレンダリングに時間がかかるが、描画する範囲をキャンバスの上下数センチくらいの世界に制限することで、リアルタイムで表示できるよう高速化できた。ライブパフォーマンスにも使える。

I  wrote my own shaders for rendering. Normally, generating complex details and calculating shadows takes time to render, but by limiting the area to be rendered to a few centimeters above and below the canvas, I was able to speed up the process and display the image in real time so that it can be applied to live performances.

[![](/images/codifying-materials-2-1.gif)](/images/codifying-materials-2-1.gif)

<div class="bookmark-card"><a href="https://www.creativeapplications.net/sound/expressions-paint-and-pixel-matiere-at-micro-scale/" target="_blank" rel="noopener" class="bookmark-link"><div class="bookmark-info"><div class="bookmark-title">Expressions - Paint and pixel matière at micro-scale</div><div class="bookmark-description">Created by Kynd in collaboration with Yu Miyashita (Sound), 'Expressions' is a series of artworks exploring the physicality of thick and bold paint-like dynamic constructs that emerge from illuminated digital space revealing an intricate play of shapes, light and shadow.</div><div class="bookmark-url"><img src="https://www.creativeapplications.net/wp-content/uploads/2015/03/CAN_sitelogo-55171182v1_site_icon-256x256.png" class="bookmark-favicon" alt="" onerror="this.style.display='none'"><span>https://www.creativeapplications.net/sound/expressions-paint-and-pixel-matiere-at-micro-scale/</span></div></div><img src="https://www.creativeapplications.net/wp-content/uploads/2020/04/expressions_WIP5.jpg" class="bookmark-image" alt="" loading="lazy" onerror="this.style.display='none'"></a></div>

物理のシミュレーションや科学の実験のような方法でものを作ることもある。例えばナビエ・ストークスの方程式を元にした割と真面目（だけど非現実的な）流体シミュレーションや、あるいは架空の化学反応をシミュレーションするような方法。

Sometimes I build things in the fashion of a physics simulation or a scientific experiment. For example, these are a relatively proper (but unrealistic) fluid simulation based on Navier-Stokes equations, and a simulation of chemical reaction between fictitious substances.

[![](/images/codifying-materials-2-2.gif)](/images/codifying-materials-2-2.gif)

[![](/images/codifying-materials-2-12.png)](/images/codifying-materials-2-12.png)

こんな感じで実験を続けていると道具箱に新しい素材が増えてくる。

More I experiment, the more new materials get added to my toolbox.

### Next

[Codifying human (1)](/drawing-with-code/codifying-human-1)
