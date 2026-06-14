---
title: "Breakdown of the setCamera function setCamera関数の解説"
slug: breakdown-of-the-setcamera-function-setcamera
---
The `setCamera` function is designed to create a [transformation matrix](https://en.wikipedia.org/wiki/Transformation_matrix) that translates coordinates from **camera space** to **world space**.

`setCamera` 関数は、**カメラ空間**から**ワールド空間**へ座標を変換するための変換行列を作ることを目的としています。

> 
> 
> This function is simplified from the original, assuming the camera points in a relatively horizontal direction.
> 
> この関数は、カメラがおおむね水平な方向を向いているという前提で、元の実装を簡略化したものです。

```glsl
mat3 setCamera(in vec3 cameraPosition, in vec3 cameraTarget)
{
    vec3 forward = normalize(cameraTarget - cameraPosition);
    vec3 right = cross(forward, vec3(0.0, 1.0, 0.0));
    vec3 up = cross(right, forward);
    return mat3(right, up, forward);
}
```

# Parameters

`cameraPosition`: The position of the camera in the world space.  
`cameraTarget`: The point in space that the camera is looking at.

`cameraPosition`: ワールド空間におけるカメラの位置。  
`cameraTarget`: カメラが注視している空間上の点。

# How It Works

The function sets up the camera's orientation using three vectors: forward, right, and up.

-   `forward`: The direction the camera is looking, calculated as the normalized vector from the camera position to the target.

-   `right`: The camera's right direction, calculated using the cross product of `forward` and a vector pointing upward (`vec3(0.0, 1.0, 0.0)`).

-   `up`: The final upward direction, computed as the cross product of `right` and `forward` to ensure all three vectors are orthogonal.

この関数は、forward / right / up の3つのベクトルを使ってカメラの向きを定義します。

-   `forward`: カメラの視線方向。カメラ位置からターゲットへのベクトルを正規化して求めます。

-   `right`: カメラの右方向。`forward` と、上方向を指すベクトル（`vec3(0.0, 1.0, 0.0)`）の外積で求めます。

-   `up`: 最終的な上方向。`right` と `forward` の外積で求め、3つのベクトルが直交するようにします。

Combining these three vectors, the function returns the final transformation matrix.

これら3つのベクトルをまとめて、最終的な変換行列（向きの基底）を返します。

```glsl
return mat3(right, up, forward);
```
