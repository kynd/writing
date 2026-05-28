---
title: "Soft shadow ソフトシャドウ"
---
```glsl
// https://iquilezles.org/articles/rmshadows
float calcSoftshadow( in vec3 rayOrigin, in vec3 rayDirection, in float tmin, in float tmax )
{
    // bounding volume
    float tp = (0.8-rayOrigin.y)/rayDirection.y; 
    if( tp>0.0 ) tmax = min( tmax, tp );

    float result = 1.0;
    float t = tmin;
    for( int i=int(ZERO); i<24; i++ )
    {
		float distance = map( rayOrigin + rayDirection*t ).x;
        float shadowFactor = clamp(8.0*distance/t,0.0,1.0);
        result = min( result, shadowFactor );
        t += clamp( distance, 0.01, 0.2 );
        if( result<0.004 || t>tmax ) break;
    }
    result = clamp( result, 0.0, 1.0 );
    return result*result*(3.0-2.0*result);
}
```

This function casts a new ray from a point on the surfaces of the object in the direction of the light to see if the ray intersects with an object. If it does, that means the point is in the shadow of the object.

この関数は、オブジェクトの表面上の点から光源の方向に新しいレイを打ち出し、そのレイが他のオブジェクトと交差するかどうかをチェックします。交差する場合、その点はオブジェクトの影の中にあることになります。

[![](/images/soft-shadow.jpg)](/images/soft-shadow.jpg)

The “bounding volume” part calculates the distance for the ray to hit an imaginary ceiling above the objects. This is to stop the ray marching loop when the ray goes high enough to reach an area that has no objects. Compare this to the code where it finds the distance to the floor in the `raycast()` function ([Ray casting レイキャスティング](/sketching-with-math-and-quasi-physics/reading/rendering-process-overview/ray-casting)).

「bounding volume」の部分は、オブジェクトの上に天井があると想定して、レイがそれに当たるまでの距離を計算します。これは、レイがオブジェクトが存在しない領域にまで高く上がりすぎたときに、レイマーチングのループを停止するためです。`raycast()`関数で床までの距離を見つける部分のコードと比較してみてください（[Ray casting レイキャスティング](/sketching-with-math-and-quasi-physics/reading/rendering-process-overview/ray-casting)）。

```glsl
// bounding volume
float tp = (0.8-rayOrigin.y)/rayDirection.y; 
if( tp>0.0 ) tmax = min( tmax, tp );
```

The rest of the function is basically ray marching ([Ray Marching レイマーチング](/sketching-with-math-and-quasi-physics/projection-and-3d-rendering/ray-marching)), but there are a few differences specific to the calculation of the soft shadow.

関数の残りの部分は基本的にレイマーチング（[Ray Marching レイマーチング](/sketching-with-math-and-quasi-physics/projection-and-3d-rendering/ray-marching)）ですが、柔らかな影を描くための計算に特有のいくつかの違いがあります。

The first difference is `shadowFactor`. Instead of only checking if the ray directly hits an object, we consider how close it gets to nearby objects to adjust shadow strength. `shadowFactor` is calculated as the distance to the closest object divided by the ray’s traveled distance, which approximates an angular distance. A smaller value results in a darker shadow.

最初の違いは`shadowFactor`です。レイがオブジェクトに直接当たるかどうかだけをチェックするのではなく、近くのオブジェクトにどれだけ近づくかを考慮して影の強さを調整します。`shadowFactor`は、最も近いオブジェクトまでの距離をレイの進んだ距離で割って計算され、これは角距離の近似になっています。値が小さいほど、より濃い影になります。

The other difference is the distance we make the ray proceed. In normal ray marching, we would move the ray forward as far as possible to get to the object with shorter iterations. But that may end up skipping the point where the ray gets closest to an object without hitting it. To ensure we sample enough points in the space, `t += clamp( distance, 0.01, 0.2 );` constrains the distance the ray can go in each step. The numbers are just empirical so you can adjust them as needed.

もう一つの違いは、レイが進む距離です。通常のレイマーチングでは、より少ない反復回数でオブジェクトに届くように、可能な限りレイを進めます。しかし、これではレイがオブジェクトに衝突せずに最も接近する点をスキップしてしまう可能性があります。空間内で十分なポイントをサンプリングするために、`t += clamp( distance, 0.01, 0.2 );` でステップことにレイが進める距離を制限します。この数値は経験則によるものなので、必要に応じて調整することができます。

[![](/images/soft-shadow-1.jpg)](/images/soft-shadow-1.jpg)

You can see the following page to learn more about the soft shadowing techniques.

ソフトシャドウのテクニックについてさらに詳しく学ぶには、以下のページを見てください。

<div class="bookmark-card"><a href="https://iquilezles.org/articles/rmshadows/" target="_blank" rel="noopener" class="bookmark-link"><div class="bookmark-info"><div class="bookmark-title">Inigo Quilez</div><div class="bookmark-description">Articles on computer graphics, math and art</div><div class="bookmark-url"><img src="https://iquilezles.org/favicon.png" class="bookmark-favicon" alt="" onerror="this.style.display='none'"><span>https://iquilezles.org/articles/rmshadows/</span></div></div><img src="https://iquilezles.org/logo.jpg" class="bookmark-image" alt="" loading="lazy" onerror="this.style.display='none'"></a></div>

[Sky light 空からの光](/sketching-with-math-and-quasi-physics/reading/rendering-process-overview/sky-light)
