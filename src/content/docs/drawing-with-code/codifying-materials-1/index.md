---
title: "Codifying materials (1)"
---
絵画には物質的な側面と人間の行為の側面がある。物質側について見てみよう。

Painting has a physical aspect and a human aspect. Let's look at the material aspect first.

[![](/images/codifying-materials-1.gif)](/images/codifying-materials-1.gif)

水彩のもつ、滲みやムラ、独特の色の混ざり方をコードで表現してみる。再現ではなくて、どちらかといえば表現だ。厳密なシミュレーションではなくて、どうしたらそれっぽくなるだろうと考えてみる。物理は便利な道具だけれどもゴールではない。

大雑把に絵の具を分解すると、色を出すための顔料とそれを包む媒体、水彩の場合は水と糊の働きをするアラビアゴムなどに分解できる。水が多ければ媒体の中に顔料が浮いて、自由に動ける、というか水に流されている状態。次第に水が乾くと動きが鈍くなり、最後には顔料が紙に固着する。

データを分けて、水の量と流れのデータ、水に浮いている顔料のデータ、紙に固着した顔料のデータに分けて動かしてみる。

Think about representing watercolor using code: its bleeding, unevenness, and the unique way the colors mix. I chose the word "represent" over "reproduce" since it is not a rigorous simulation, but rather an attempt to think about how to create the look I want. Physics is a useful tool, but it is not the goal here.

Roughly speaking, watercolor can be broken down into two components: the pigments that produce the color, and the medium that surrounds the pigments, in this case water and gum arabic, which acts as a glue. When there is plenty of water, the pigments can float in the medium and move freely, or rather, they are carried by the water. When the water dries, the movement slows down and the pigments stick to the surface.

[![](/images/codifying-materials-1.png)](/images/codifying-materials-1.png)

[![](/images/codifying-materials-1-1.gif)](/images/codifying-materials-1-1.gif)

[![](/images/codifying-materials-1-1.png)](/images/codifying-materials-1-1.png)

今度は水が少ない、粘り気のあるガッシュや、柔らかく溶いた油絵具みたいなものを想像してみよう。ひとまず溶剤を無視すると、紙の上に色が置かれていて、その上で筆を動かして引きずるようなモデルになる。

紙の上の色のデータ、筆先についた色のデータを用意する。筆は紙に色を置いていくのと同時にそこから色を拾うので、筆の方の色も変わっていく。このモデルは筆を動かす度の処理が重くて遅いのだが、先端の形や絵の具の混ざり具合を変えるとかなり色々な表情が出せるのでずっと使っている。

Now let's imagine something less watery, like a sticky gouache or soft oil paint. If we ignore solvents for the moment, the model would be about the color placed on paper and the brush dragging over it.

This model has the data for the color on the paper and the data for the color on the brush tip. The brush picks up the color from the paper at the same time as it places the color on the paper, so the color on the brush changes as well. This model is slow and heavy to process each time the brush moves, but I have been using it for a long time because it can produce various expressions by changing the shape of the tip and the way the paints mix.

[![](/images/codifying-materials-1-2.png)](/images/codifying-materials-1-2.png)

[![](/images/codifying-materials-1-2.gif)](/images/codifying-materials-1-2.gif)

[![](/images/codifying-materials-1-3.png)](/images/codifying-materials-1-3.png)

色を混ぜるだけでも色々な方法がある。例えばRGBで青と黄色を混ぜるとグレーに近い鈍い色になるのだが、異なるカラーモデルを使うと違った結果が得られる。例えばKubelka Munkという手法では顔料ごとの性質をシミュレートするので実際の絵の具や塗料に近い色になる。ただし物理的に正しいのが常にいいという訳ではないので、欲しい効果によって使い分ける。

There are various ways to mix colors even just using RGB. For example, mixing blue and yellow using RGB will result in a dull grayish color, but using different color models will yield different results. For example, the Kubelka-Munk method simulates the properties of each pigment and results in colors closer to actual paints. That being said, it is not always best to be physically accurate, so I use different methods depending on the desired effect.

[![](/images/codifying-materials-1-4.png)](/images/codifying-materials-1-4.png)

[![](/images/stella-epoca-by-sawako.jpg)](/images/stella-epoca-by-sawako.jpg)

[Stella Epoca by Sawako](https://12kmusic.bandcamp.com/album/stella-epoca)

[![](/images/on-citadel-of-erbil-krudistan-2022.gif)](/images/on-citadel-of-erbil-krudistan-2022.gif)

**On citadel of Erbil, Krudistan, 2022**

<div class="instagram-wrap"><blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/CEHfUGjnJ9j/" data-instgrm-version="14" style="width:100%;max-width:540px;margin:0;border:none;border-radius:4px;padding:0;"></blockquote></div>

絵の具は繰り返し重ねて描いたり、描いた後で手を加えることができる。描いて、ぼかして、描いて、ぼかして。これをアルゴリズムで表現すると、現実にはあり得ない速さで繰り返すことができる。結果、アナログとデジタルの中間みたいなアニメーションができる。

Paint can be layered repeatedly or altered after it has been placed. Paint, smear, blur and repeat. When this is coded with an algorithm, it can be repeated at a speed that is impossible in reality. The result is an animation that is somewhere between analog and digital.

[![](/images/codifying-materials-1-3.gif)](/images/codifying-materials-1-3.gif)

[![](/images/codifying-materials-1-5.png)](/images/codifying-materials-1-5.png)

VJなどではこの手法がとても活躍する。

This technique is very effective in VJ performances and similar occasions.

<div class="video-wrap"><iframe title="vimeo-player" src="https://player.vimeo.com/video/151103408" width="640" height="360" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" allowfullscreen></iframe></div>

### Next

[Codifying materials (2)](/drawing-with-code/codifying-materials-2)
