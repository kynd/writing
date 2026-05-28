---
title: "Breakdown of the setCamera function setCamera関数の解説"
---
The `setCamera` function is designed to create a [transformation matrix](https://en.wikipedia.org/wiki/Transformation_matrix) that translates coordinates from **camera space** to **world space**.

> 
> 
> This function is simplified from the original, assuming the camera points in a relatively horizontal direction.

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

# How It Works

The function sets up the camera’s orientation using three vectors: forward, right, and up.

-   `forward`: The direction the camera is looking, calculated as the normalized vector from the camera position to the target.

-   `right`: The camera's right direction, calculated using the cross product of `forward` and a vector pointing upward (`vec3(0.0, 1.0, 0.0)`) .

-   `up`: The final upward direction, computed as the cross product of `right` and `forward` to ensure all three vectors are orthogonal.

Combining these three vectors, the function returns the final transformation matrix.

```glsl
return mat3(right, up, forward);
```
