---
title: "Gaussian Elimination ガウスの消去法"
slug: gaussian-elimination
---
Gaussian elimination is a step-by-step method to solve systems of equations by first eliminating variables to leave just one and find its value, then working backward to find the remaining values. The name sounds intimidating, but this is basically what you probably learned in junior high school.

ガウスの消去法とは、連立方程式を解くために変数を1つだけ残すように消去し、その値を求めた後、残りの値を逆算する方法です。難しそうな名前ですが、中学校で習う方法と基本的に同じです。

Let's take a simple example. We have two equations, and we need to find the values of $x$ and $y$ that satisfy both of them.

簡単な例を見てみましょう。次の2つの式から始めて、両方を満たす$x$と$y$の値を求めます。

$2x + 3y = 7$  
$x + y = 3$

### Multiply an equation to align coefficients
### 掛け算で係数を揃える

We want to eliminate one of the variables. Let’s start from $x$. To do that, let’s make the coefficient of $x$ in the second equation match the first equation by multiplying the second equation by 2:

変数を1つ消しましょう。まず$x$から始めます。2番目の式の$x$の係数を1番目の式と同じにするために、2番目の式の両辺に2をかけます。

  
$2(x + y) = 2 \times3$  
$2x + 2y = 6$  

Now our system looks like this:

連立方程式は次のようになります。

  
$2x + 3y = 7$  
$2x + 2y = 6$

### Subtract equations to eliminate one variable
### 式を引き算して変数を1つ消す

Now, subtract the second equation from the first:

2番目の式を1番目の式から引きます。

  
$(2x + 3y) - (2x + 2y) = 7 - 6$

and we get the $y$ value:

$y$の値が求まります。

$y = 1$  

### Substitute back to find the other variable
### 代入してもうひとつの変数を求める

Now that we know $y = 1$, we substitute it back into one of the original equations:

$y = 1$が求められたので、これを元の式の1つに代入します。

  
$x + y = 3$  
$x + 1 = 3$  
$x = 2$  

So the final answer is:

答えは下のようになります。

  
$x = 2, y = 1$

Repeating the same process for each variable, this works for any number of variables as long as you have enough equations to eliminate all variables, leaving just one.

十分な数の方程式があれば、この手順をすべての変数に適用して、最後に1つの変数だけを残すことで、任意の数の変数を解くことができます。

> 
> 
> In general, to solve for $n$ variables, you need $n$ independent equations. If subtracting one equation from another makes all coefficients zero, that means those equations are essentially the same and count as just one equation.
> 
> 一般的に、$n$個の変数を解くためには$n$個の独立した式が必要です。ある式から別の式を引いたときにすべての係数がゼロになる場合、それらの方程式は実質同じで、1つの方程式として数えられます。

# Gaussian Elimination in Matrix Form
# ガウスの消去法を行列の形で書く

The same system of equation can be written as a matrix equation:

同じ連立方程式を行列の式として表すことができます。

$\begin{bmatrix} 2 & 3 \\ 1 & 1 \end{bmatrix}\begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 7 \\ 3 \end{bmatrix}$

or in augmented matrix form:

拡大係数行列として次のように表せます。

$\left[
\begin{array}{cc|c}
2 & 3 & 7 \\
1 & 1 & 3
\end{array}
\right]$

The numbers on the left side of the matrix represent the coefficients in the original equations, and eliminating a variable means making the coefficient zero. We multiply the second row by 2 so that its first coefficient matches the first row:  

行列の左側の値は元の方程式の係数を表し、変数を消去するには係数をゼロにします。最初の係数を1行目と合わせるために、2行目に2をかけましょう。

$\left[
\begin{array}{cc|c}
2 & 3 & 7 \\
2 & 2 & 6
\end{array}
\right]$

Then subtract the second row from the first row:

そして2行目を1行目から引きます。

$\left[
\begin{array}{cc|c}
2 & 3 & 7 \\
0 & 1 & 1
\end{array}
\right]$

From the second row we know that:

2行目から下の式が求まります。

$y = 1$

Then substituting $y = 1$ into the first row,

$y = 1$を1行目に代入すると、

$2x + 3(1) = 7$

$x = 2$

This is just a different way to write the exact same process.

これは同じプロセスを別の方法で書いただけです。

> 
> 
> In the matrix version of Gaussian elimination, you aim to transform the matrix into a so-called upper triangular form like the example below, where all elements below the diagonal are zero. You can see this in the demo below as well.
> 
> ガウス消去法の行列表現では、対角線より下のすべての要素をゼロにして下の例のような上三角行列と呼ばれる形に変換することを目指します。これは下のデモでも確認できます。  
> 
> $\begin{bmatrix}
a & b & c \\
0 & d & e \\
0 & 0 & f
\end{bmatrix}$

# Code implementation
# コードによる実装

The `solveLinearSystem(A, b)` from the RBF interpolation demo implements this process. Try reading the code comparing with the process we just went through.

RBF補間のデモの`solveLinearSystem(A, b)`関数はこのプロセスの実装です。ここまで説明した手順と照らし合わせながらコードを読んでみてください。

One thing that we didn’t do in the example above is to sort the equations, or the rows in the matrix. This is called partial pivoting. Basically what it does is to find the row with the largest absolute value in the current column and swaps rows to place that row at the top.

上の例では行なわなかった操作に、式や行列の行の並び替えがあります。これは部分ピボット選択（partial pivoting）と呼ばれます。基本的には、現在の列で最も絶対値が大きい行を見つけ、その行を一番上に持ってくるように行を入れ替えます。

This helps prevent numerical instability. Since computers have limited precision, dividing by small numbers (in `factor = M[k][i] / M[i][i]`) can introduce errors. The algorithm tries to avoid this as much as possible by calculating the large numbers first.

これは数値の不安定さを防ぐのに役立ちます。コンピュータの精度には限界があるため、小さな数での割り算（`factor = M[k][i] / M[i][i]`）は誤差が生じる可能性があります。このアルゴリズムは、できるだけこの問題を避けるために、大きな数を先に計算します。

```jsx

solveLinearSystem(A, b) {
  const n = A.length;
	// Create an augmented matrix M from A and b.
	const M = A.map((row, i) => [...row, b[i]]);

	// Gaussian elimination with partial pivoting.
  for (let i = 0; i < n; i++) {
    // Find the pivot row.
    let maxRow = i;
    for (let k = i + 1; k < n; k++) {
      if (Math.abs(M[k][i]) > Math.abs(M[maxRow][i])) {
        maxRow = k;
      }
    }
    // Swap the current row with the pivot row.
    [M[i], M[maxRow]] = [M[maxRow], M[i]];

    // Eliminate below.
    for (let k = i + 1; k < n; k++) {
      const factor = M[k][i] / M[i][i];
      for (let j = i; j <= n; j++) {
        M[k][j] -= factor * M[i][j];
      }
    }
  }

  // Back-substitution.
  const x = new Array(n).fill(0);
  for (let i = n - 1; i >= 0; i--) {
    x[i] = M[i][n] / M[i][i];
    for (let k = i - 1; k >= 0; k--) {
      M[k][n] -= M[k][i] * x[i];
    }
  }
  return x;
}
```

The demo below visualizes the process step by step. You can click on the button on the top to randomize the numbers.

下のデモはこのプロセスをステップごとに表示します。上にあるボタンをクリックすると数値がランダムに変わります。

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="GgRmeoW" data-user="kynd" data-preview="true"></p></div>
