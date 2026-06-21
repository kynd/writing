---
title: "The proof of the Euler Product Formula"
slug: the-proof-of-the-euler-product-formula
---
(Written by AI)

# Start with the full sum

  
$\displaystyle \zeta(s) = 1 + \frac{1}{2^s} + \frac{1}{3^s} + \frac{1}{4^s} + \frac{1}{5^s} + \dots$

# The sifting

  
Multiply the entire equation by $\displaystyle \frac{1}{2^s}$:

$\displaystyle \frac{1}{2^s}\zeta(s) = \frac{1}{2^s} + \frac{1}{4^s} + \frac{1}{6^s} + \dots$

  
Subtract this new equation from the original. This removes every term that is a multiple of 2:

$\displaystyle \left(1 - \frac{1}{2^s}\right)\zeta(s) = 1 + \frac{1}{3^s} + \frac{1}{5^s} + \frac{1}{7^s} + \dots$

# Repeat for every prime

  
Repeat the process for the next available number, 3:

$\displaystyle \left(1 - \frac{1}{3^s}\right)\left(1 - \frac{1}{2^s}\right)\zeta(s) = 1 + \frac{1}{5^s} + \frac{1}{7^s} + \frac{1}{11^s} + \dots$

  
Now all multiples of 2 and 3 are gone.

  
If you keep doing this for every prime number ($5, 7, 11, \dots$), every term on the right-hand side disappears except for 1.

$\displaystyle \dots \left(1 - \frac{1}{5^s}\right)\left(1 - \frac{1}{3^s}\right)\left(1 - \frac{1}{2^s}\right)\zeta(s) = 1$

# The result

  
To isolate $\zeta(s)$, move all those prime factors to the other side:

$\displaystyle \zeta(s) = \frac{1}{(1-2^{-s})} \cdot \frac{1}{(1-3^{-s})} \cdot \frac{1}{(1-5^{-s})} \dots$
