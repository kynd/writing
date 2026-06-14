---
title: "Normal calculation 法線の計算"
slug: normal-calculation
---
```glsl
// https://iquilezles.org/articles/normalsSDF
vec3 calcNormal( in vec3 pos )
{
#if 0
    vec2 e = vec2(1.0,-1.0)*0.5773*0.0005;
    return normalize( e.xyy*map( pos + e.xyy ).x + 
					  e.yyx*map( pos + e.yyx ).x + 
					  e.yxy*map( pos + e.yxy ).x + 
					  e.xxx*map( pos + e.xxx ).x );
#else
    // inspired by tdhooper and klems - a way to prevent the compiler from inlining map() 4 times
    vec3 n = vec3(0.0);
    for( int i=0; i<4; i++ )
    {
        vec3 e = 0.5773*(2.0*vec3((((i+3)>>1)&1),((i>>1)&1),(i&1))-1.0);
        n += e*map(pos+0.0005*e).x;
      //if( n.x+n.y+n.z>100.0 ) break;
    }
    return normalize(n);
#endif    
}
```

This function calculates the normal vector, which represents the direction of the surface at a given point. Here, we assume that `pos` is the point where the ray intersects the surface.

この関数は法線ベクトルを計算します。法線ベクトルは、与えられた点における面の向きを表します。ここでは、`pos`がレイがオブジェクトの面と交差する点であると仮定しています。

We looked at a version of this concept on the [3D Rendering with Ray Marching レイマーチングによる3Dレンダリング](/3d-rendering-with-ray-marching) page. The basic idea is the same. The function samples several points around the ray intersection and uses the distance to the closest surface at each point to determine the gradient. This [gradient](/differentiation) points in the direction of the steepest increase in distance, which also represents the surface normal direction.

この考え方の例の1つを [3D Rendering with Ray Marching レイマーチングによる3Dレンダリング](/3d-rendering-with-ray-marching)のページで取り上げました。基本的な考え方は同じです。この関数は、レイが交差する点の周りでいくつかの点をサンプリングし、各点から最も近い表面までの距離を使って[勾配](/differentiation)を決定します。この勾配は、距離が最も急激に増加する方向を指し、同時に表面の法線方向も表します。

Instead of sampling 6 points along the x, y, and z axes, this function samples 4 points in a tetrahedral pattern. This configuration gives an evenly distributed sampling pattern to reduce bias in any direction. The value `0.5773` is an approximation of $1/\sqrt{3}$, which ensures that the offset points are at a unit length from `pos`.

x軸、y軸、z軸に沿って6点をサンプリングする代わりに、この関数は正四面体のパターンで4点をサンプリングします。この配置により、どの方向にもバイアスがかからないように均等に分布したサンプリングが得られます。`0.5773`という値は $1/\sqrt{3}$ の近似値で、オフセットされた点が`pos`から単位距離の位置にあることを保証します。

$$\sqrt{\left(\frac{1}{\sqrt{3}}\right)^2 + \left(\frac{1}{\sqrt{3}}\right)^2 + \left(\frac{1}{\sqrt{3}}\right)^2} = 1$$

This unit length is then scaled by `0.0005`, so that each offset point is at `0.0005` units away from `pos`.

この距離に`0.0005`を掛けているので、オフセットされた各点は`pos`から`0.0005`単位離れた位置になります。

There are two parts to this code:

-   The first section (between `#if 0` and `#else`) is disabled but is easier to understand for learning purposes.

-   The second section that is enabled is functionally the same but uses a loop to calculate the offsets at runtime. This prevents the compiler from inlining `map()` four times, which may optimize the performance (depending on the compiler).

このコードには2つの部分があります：

-   `#if 0`と`#else`の間の最初のセクションは無効化されていますが、学習のためにはこちらの方がわかりやすいでしょう。

-   有効になっている2番目のセクションは機能的には同じですが、実行時にオフセットを計算するためにループを使っています。（コンパイラ次第ですが）これにより、コンパイラが`map()`関数を4回インライン展開するのを防ぎ、パフォーマンスを最適化できます。

> 
> 
> I actually don't know about compilation process at all. I'm simply repeating the comment in the code.
> 
> 実は、コンパイルプロセスについては全く知りません。単にコード内のコメントを繰り返しているだけです。

For more details, take a look at this article by the original author of the shader.

詳細については、このシェーダーの原作者による記事をご覧ください。

<div class="bookmark-card"><a href="https://iquilezles.org/articles/normalsSDF/" target="_blank" rel="noopener" class="bookmark-link"><div class="bookmark-info"><div class="bookmark-title">Inigo Quilez</div><div class="bookmark-description">Articles on computer graphics, math and art</div><div class="bookmark-url"><img src="https://iquilezles.org/favicon.png" class="bookmark-favicon" alt="" onerror="this.style.display='none'"><span>https://iquilezles.org/articles/normalsSDF/</span></div></div><img src="https://iquilezles.org/logo.jpg" class="bookmark-image" alt="" loading="lazy" onerror="this.style.display='none'"></a></div>

[Rendering Process Overview レンダリングプロセスの概要](/rendering-process-overview)
