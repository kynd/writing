---
title: "Rendering Process Overview レンダリングプロセスの概要"
---
Let's break down the `render()` function. Although it's a large function, we can divide it into several key parts. Before diving into the details, let's examine the overall structure.

`render()`関数を分解してみましょう。大きな関数ですが、いくつかの主要な部分に分けて考えられます。詳細に入る前に、全体の構造を見てみましょう。

```glsl
vec3 render(in vec3 cameraPosition, in vec3 rayDirection, in vec3 rayDirectionXOffset, in vec3 rayDirectionYOffset)
{ 
    // Background color, with darkening based on the y-component of the ray direction.
    vec3 color = vec3(0.7, 0.7, 0.9) - max(rayDirection.y, 0.0) * 0.3;

    // Raycast to find intersection with the scene.
    vec2 raycastResult = raycast(cameraPosition, rayDirection);
    float distanceToSurface = raycastResult.x;
    float materialId = raycastResult.y;

    // Check if the ray hit something in the scene.
    if (materialId > -0.5)
    {
        vec3 intersectionPoint = cameraPosition + distanceToSurface * rayDirection;
        vec3 normal = (materialId < 1.5) ? vec3(0.0, 1.0, 0.0) : calcNormal(intersectionPoint);
        vec3 reflectionDirection = reflect(rayDirection, normal);

        // Base color, influenced by the material type.
        color = 0.2 + 0.2 * sin(materialId * 2.0 + vec3(0.0, 1.0, 2.0));
        float specularStrength = 1.0;
        
        // Check if the hit was on a plane and calculate texture-based color.
        if (materialId < 1.5)
        {
            ...
        }

        // Ambient occlusion and lighting calculations.
        float ambientOcclusion = uAOEnabled ? calcAO(intersectionPoint, normal) : 1.0;
        
        vec3 lighting = vec3(0.0);

        // Sunlight contribution.
        if (uSunlightEnabled) {
	        ...
        }
        
        // Sky light contribution.
        if (uSkyEnabled) {
	        ...    
        }
        
        // Back light contribution.
        if (uBacklightEnabled) {
	        ...
        }

        // Subsurface scattering effect.
        if (uSubsurfaceEnabled) {
	        ...
        }

        // Combine all lighting contributions.
        color = lighting;

        // Blend the result with the background color based on distance.
        color = mix(color, vec3(0.7, 0.7, 0.9), 1.0 - exp(-0.0001 * distanceToSurface * distanceToSurface * distanceToSurface));
    }

    // Return the final color, clamped between 0.0 and 1.0.
    return clamp(color, 0.0, 1.0);
}
```

# Ray casting
# レイキャスティング

The `raycast` function processes the ray for the current pixel and returns two pieces of information: the distance to the object the ray is intersecting and the ID of the material of the object. In this demo, each shape has its own color assigned, and the `materialId` represents the color.

`raycast`関数は現在のピクセルに対するレイを処理し、2つの情報 - レイが交差するオブジェクトまでの距離と、オブジェクトのマテリアルのIDを返します。このデモでは、それぞれの形に色が割り当てられ、`materialId`がその色を表しています。  

```glsl
vec2 raycastResult = raycast(cameraPosition, rayDirection);
float distanceToSurface = raycastResult.x;
float materialId = raycastResult.y;
```

If the ray hit an object (`if (materialId > -0.5)`), the position where it hit the object (`intersectionPoint`), the direction of the surface at the point (`normal`), and the direction of the ray reflected on the surface (`reflectionDirection`) are calculated in the following lines.

レイがオブジェクトに当たった場合（`if (materialId > -0.5)`）、オブジェクトに当たった位置（`intersectionPoint`）、その点での表面の方向（法線 - `normal`）、そして表面で反射したレイの方向（`reflectionDirection`）が以下の行で計算されます。

`(materialId < 1.5)` checks if the object was the floor. If true, the normal points straight up (`vec3(0.0, 1.0, 0.0)`), otherwise it is calculated in the `calcNormal()` function.

`(materialId < 1.5)`はオブジェクトが床かどうかをチェックします。もしtrueなら、法線は真上を指し（`vec3(0.0, 1.0, 0.0)`）、そうでなければ`calcNormal()`関数で計算されます。

```glsl
vec3 intersectionPoint = cameraPosition + distanceToSurface * rayDirection;
vec3 normal = (materialId < 1.5) ? vec3(0.0, 1.0, 0.0) : calcNormal(intersectionPoint);
vec3 reflectionDirection = reflect(rayDirection, normal);
```

See the following page for the details of the ray casting function.

レイキャスティング関数の詳細については、次のページをご覧ください。

[Ray casting レイキャスティング](/sketching-with-math-and-quasi-physics/reading/rendering-process-overview/ray-casting)

Then, refer to the following page for details on normal calculation.

次に、法線の計算の詳細については、以下のページを参照してください。

[Normal calculation 法線の計算](/sketching-with-math-and-quasi-physics/reading/rendering-process-overview/normal-calculation)

# Material colors
# マテリアルの色

Based on the material ID, the actual color is calculated in the following line. Though it's called an ID, it's just a float value used as a parameter for this line, which creates different colors based on the value.

マテリアルのIDに基づいて、実際の色が以下の行で計算されます。IDと呼ばれていますが、実は単にこの行のパラメータとして使用される浮動小数点の値で、この値を元に異なる色を計算します。

```glsl
color = 0.2 + 0.2 * sin(materialId * 2.0 + vec3(0.0, 1.0, 2.0));
```

Then there is another section in `if (materialId < 1.5) {…}`. This part calculates the color for the checkerboard pattern of the floor based on the `intersectionPoint`.

次に、 `if (materialId < 1.5) {…}` の中に別のセクションがあります。この部分は`intersectionPoint` を元に、床のチェック模様の色を計算します。

[Drawing the checker pattern チェック模様を描く](/sketching-with-math-and-quasi-physics/reading/rendering-process-overview/drawing-the-checker-pattern)

# Lighting
# ライティング

The remainder of the function calculates the lighting effects, breaking them down by different sources and components. Look at the following pages for details of each step.

関数の残りの部分では、光源や要素ごとに分解してライティングの効果を計算します。それぞれのステップの詳細については、以下のページを見てください。

[Sunlight 太陽光](/sketching-with-math-and-quasi-physics/reading/rendering-process-overview/sunlight)

[Soft shadow ソフトシャドウ](/sketching-with-math-and-quasi-physics/reading/rendering-process-overview/soft-shadow)

[Sky light 空からの光](/sketching-with-math-and-quasi-physics/reading/rendering-process-overview/sky-light)

[Ambient occlusion アンビエントオクルージョン](/sketching-with-math-and-quasi-physics/reading/rendering-process-overview/ambient-occlusion)

[Backlight バックライト](/sketching-with-math-and-quasi-physics/reading/rendering-process-overview/backlight)

[Subsurface scattering サブサーフェススキャッタリング](/sketching-with-math-and-quasi-physics/reading/rendering-process-overview/subsurface-scattering)

[Atmospheric Perspective 空気遠近法](/sketching-with-math-and-quasi-physics/reading/rendering-process-overview/atmospheric-perspective)
