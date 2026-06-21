---
title: "Derivation of the equations (by AI)"
slug: derivation-of-the-equations-by-ai
---
Here is the full, unabbreviated derivation of the equations of motion for a double pendulum using Lagrangian mechanics, written by AI (Gemini).

In physics and mathematics, the dot above a variable is Newton's notation for the time derivative. It is a shorthand way of saying how much this value is changing with respect to time.

-   $\theta$ (Theta): The Angle (Position).

-   $\dot{\theta}$ (Theta-dot): The Angular Velocity (How fast the angle is changing).1 This is the `a1_v` and `a2_v` in your JavaScript code.2

-   $\ddot{\theta}$ (Theta-double-dot): The Angular Acceleration (How fast the velocity is changing). This is the `a1_a` and `a2_a` that your `getAccelerations` function calculates.

# 1\. Coordinate Transformation

We define the positions $(x_1, y_1)$ and $(x_2, y_2)$ of the two masses in terms of the angles $\theta_1$ and $\theta_2$. We assume the $y$\-axis points downwards.

$x_1 = l_1 \sin \theta_1$

$y_1 = l_1 \cos \theta_1$

$x_2 = l_1 \sin \theta_1 + l_2 \sin \theta_2$

$y_2 = l_1 \cos \theta_1 + l_2 \cos \theta_2$

# 2\. The Lagrangian ($L$)

The Lagrangian is the difference between the Kinetic Energy ($T$) and the Potential Energy ($V$).

## Kinetic Energy ($T$):

Summing ${\displaystyle T = \frac{1}{2}mv^2}$ for both masses (where $v^2 = \dot{x}^2 + \dot{y}^2$):  
  
${\displaystyle  T = \frac{1}{2} m_1 l_1^2 \dot{\theta}_1^2 + \frac{1}{2} m_2 \left[ l_1^2 \dot{\theta}_1^2 + l_2^2 \dot{\theta}_2^2 + 2 l_1 l_2 \dot{\theta}_1 \dot{\theta}_2 \cos(\theta_1 - \theta_2) \right] }$

## Potential Energy ($V$):

Taking the pivot as the zero-energy reference:

  
$V = -(m_1 + m_2) g l_1 \cos \theta_1 - m_2 g l_2 \cos \theta_2$  

Lagrangian ($L = T - V$):

  
${\displaystyle L = \frac{1}{2}(m_1 + m_2)l_1^2\dot{\theta}_1^2 + \frac{1}{2}m_2l_2^2\dot{\theta}_2^2 + m_2l_1l_2\dot{\theta}_1\dot{\theta}_2\cos(\theta_1-\theta_2) + (m_1+m_2)gl_1\cos\theta_1 + m_2gl_2\cos\theta_2}$

## 3\. Euler-Lagrange Equations

To find the equations of motion, we solve the following for each angle $\theta_i$:

  
${\displaystyle  \frac{d}{dt} \left( \frac{\partial L}{\partial \dot{\theta}_i} \right) - \frac{\partial L}{\partial \theta_i} = 0}$  

Performing the partial derivatives and time derivatives leads to two coupled second-order differential equations:  

1.  $(m_1+m_2)l_1\ddot{\theta}_1 + m_2l_2\ddot{\theta}_2\cos(\theta_1-\theta_2) + m_2l_2\dot{\theta}_2^2\sin(\theta_1-\theta_2) + (m_1+m_2)g\sin\theta_1 = 0$

2.  $l_2\ddot{\theta}_2 + l_1\ddot{\theta}_1\cos(\theta_1-\theta_2) - l_1\dot{\theta}_1^2\sin(\theta_1-\theta_2) + g\sin\theta_2 = 0$

## 4\. Final Accelerations (Implementation Form)

By solving the above linear system for $\ddot{\theta}_1$ and $\ddot{\theta}_2$, we obtain the formulas used in the `getAccelerations` function:

  
Acceleration of the first arm ($\ddot{\theta}_1$):

  
${\displaystyle  \ddot{\theta}_1 = \frac{-g(2m_1+m_2)\sin\theta_1 - m_2g\sin(\theta_1-2\theta_2) - 2\sin(\theta_1-\theta_2)m_2( \dot{\theta}_2^2l_2 + \dot{\theta}_1^2l_1\cos(\theta_1-\theta_2) )}{l_1(2m_1+m_2-m_2\cos(2\theta_1-2\theta_2))}}$

Acceleration of the second arm ($\ddot{\theta}_2$):  
  
${\displaystyle  \ddot{\theta}_2 = \frac{2\sin(\theta_1-\theta_2) \left( \dot{\theta}_1^2l_1(m_1+m_2) + g(m_1+m_2)\cos\theta_1 + \dot{\theta}_2^2l_2m_2\cos(\theta_1-\theta_2) \right)}{l_2(2m_1+m_2-m_2\cos(2\theta_1-2\theta_2))} }$
