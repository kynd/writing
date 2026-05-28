---
title: "Backlight バックライト"
---
```glsl
// Back light contribution.
if (uBacklightEnabled) {
    float diffuse = clamp(dot(normal, normalize(vec3(0.5, 0.0, 0.6))), 0.0, 1.0) * clamp(1.0 - intersectionPoint.y, 0.0, 1.0);
    diffuse *= ambientOcclusion;
    lighting += color * 0.55 * diffuse * vec3(0.25, 0.25, 0.25);
}
```

This section calculates the contribution of the backlight. The backlight in this demo is a subtle white light coming from a horizontal direction (`vec3(0.5, 0.0, 0.6)`) to add nuance to the lighting. It’s essentially a simple diffuse lighting model (See: [Classic 3D Rendering 古典的 3D レンダリング](/sketching-with-math-and-quasi-physics/light/illuminating-objects/classic-3d-rendering)) with ambient occlusion applied, but it is further dimmed based on the distance of the point from the floor, creating the impression that light is subtly bouncing off the floor.

このセクションはバックライトの効果を計算します。このデモのバックライトは、照明にニュアンスを加えるために水平方向（`vec3(0.5, 0.0, 0.6)`）から来る弱い白色光です。これは基本的に単純な拡散光モデル（参照：[Classic 3D Rendering 古典的 3D レンダリング](/sketching-with-math-and-quasi-physics/light/illuminating-objects/classic-3d-rendering)）にアンビエントオクルージョンを適用したものですが、さらに床との距離に基づいて減光されており、光が床から穏やかに反射しているような印象を作り出しています。

```glsl
clamp(1.0 - intersectionPoint.y, 0.0, 1.0)
```

In the demo, try turning off everything except the backlight to observe its effect in isolation.

デモ上で Backlight 以外のすべてをオフにして、その効果を単独で確認してみましょう。

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/dyxzyjV?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

[Subsurface scattering サブサーフェススキャッタリング](/sketching-with-math-and-quasi-physics/reading/rendering-process-overview/subsurface-scattering)

[Rendering Process Overview レンダリングプロセスの概要](/sketching-with-math-and-quasi-physics/reading/rendering-process-overview)
