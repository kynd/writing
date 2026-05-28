---
title: "Atmospheric Perspective 空気遠近法"
---
```glsl
color = mix(color, vec3(0.7, 0.7, 0.9), 1.0 - exp(-0.0001 * distanceToSurface * distanceToSurface * distanceToSurface));
```

The final step in the rendering process is atmospheric perspective, which fades objects' colors into the background as they move further from the viewpoint. In this line, the color is blended with a pale blue (`vec3(0.7, 0.7, 0.9)`) based on the `distanceToSurface`. This is also very subtle, but it does contribute to creating the impression of the world is vast and open.

レンダリングプロセスの最後のステップは空気遠近法で、視点から遠ざかるにつれてオブジェクトの色を背景に溶け込ませます。この行では、`distanceToSurface`に基づいて、色を淡い青色（`vec3(0.7, 0.7, 0.9)`）とブレンドします。これもとても控えめな効果ですが、世界が広く開放的に見える雰囲気を作り出しています。

In the demo, try toggling the atmospheric perspective on and off. If you increase the strength of the effect, it can look more like mist or fog. See what happens if you change the `-0.0001` inside the `exp` function.

デモ上で、Atmospheric perspective のオン/オフを切り替えてみてください。効果の強さを上げると、霧のように見えるようになります。`exp`関数内の`-0.0001`を変更すると、どうなるか試してみましょう。

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/dyxzyjV?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>
