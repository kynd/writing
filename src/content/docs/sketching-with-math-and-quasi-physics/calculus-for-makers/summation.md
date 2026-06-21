---
title: "Summation 総和"
slug: summation
---
The **summation** represented by Sigma ($\sum$) is essentially a repetition of addition. It may look complicated, but there’s nothing intimidating once you get used to it.

シグマ ($∑$) で表される総和は要は足し算の繰り返しです。複雑に見えますが、慣れてしまえば難しいことは何もありません。

$${\displaystyle {\begin{aligned}\sum _{x=1}^{10}x \end{aligned}}}$$

This represents the sum of $x$ as it increments from 1 to 10, or in other words, the sum of integers from 1 to 10.

これは、$x$を1から10まで1づつ増やしながら足し合わせたもの、つまり1から10までの整数の合計を表しています。

The notation with $\sum$ (Sigma) has two main components: the upper and lower limits. The lower limit below the sigma indicates the starting value, while the upper limit above is the ending value. To calculate this, start with the lower limit's value and increment it until you reach the upper limit, summing the values as you go.

$\sum$（シグマ）を使った書き方には、主に2つの要素があります。シグマの下にある下限は、開始値を示し、シグマの上にある上限は終了値を示します。これを計算するには、下限の値から始めて上限に到達するまで1づつ増やし、進むにつれて値を足していきます。

It is usually written in code using a `For` loop, which makes it easier to understand. For example, the expression above can be written as:

コードで書く場合は大抵 `For` 文だと思うとわかりやすいでしょう。例えば上の式は下のように書けます。

```jsx
let sum = 0;
for (let x = 1; x <= 10; x ++) { sum += x; }
```

Can you guess what the expression below means?

下の式は何を表しているでしょう。

$${\displaystyle {\begin{aligned}\frac {\sum _{x=1}^{n}x} n \end{aligned}}}$$

This is the sum of all numbers from 1 to n divided by $n$, which represents the average of all integers from 1 to $n$.

これは1から$n$までのすべての数値の合計をnで割ったもので、つまり1から$n$までのすべての整数の平均を表します。

$${\displaystyle {\begin{aligned} \sum _{i=1}^{82}Score_i \end{aligned}}}$$

The above is probably a total score a NBA team earned through out a season (assuming there are 82 games and $Score_i$ represents the score from $i$\-th game).

上の式は多分シーズン中にNBAチームが獲得したスコアの合計でしょう（1シーズン82試合として、$Score_i$は$i$番目の試合からのスコア）。

**Sigma notation** is simply a concise and precise way to write a sum of many terms.

シグマ記法は、単に多数の項の和を簡潔かつ正確に表現する方法なのです。

# Taylor expansion
# テイラー展開

Let's take a look at a little scarier-looking expression. This is called the Taylor expansion of the sine function, which shows that the sine function can be converted into a sum of polynomials. Generally, a Taylor expansion is the process of representing a function in this type of sum form. The reason for doing this is that the sum form can make the function easier to understand and manipulate in some cases.

もう少し恐ろしい見た目の式を見てみましょう。これはsin関数のテイラー展開と呼ばれるもので、sin関数が多項式の和の形に変換できることを示しています。テイラー展開とは一般に何かの関数をこんな和の形にすることで、なぜそんなことをするのかというと和の形の方が関数が理解しやすくなったり、扱いやすくなったりすることがあるからです。

$${\displaystyle {\begin{aligned} sin(x) = \sum _{n=1}^{\infin} \frac{(-1)^{(n+1)}}{(2n-1)!}x^{(2n-1)} \end{aligned}}}$$

When you see Sigma, start by assigning concrete values to the variable (in this case, $n$) and see what happens to the right term. When you calculate from $n=1$ to $n=5$, it looks like this. You can see a pattern and this should reduce some of the fear you might have had.

シグマを見たらまず変数（ここでは$n$）に具体的な値を入れて右の項がどうなるかを試してみましょう。$n=1$から$n=5$まで計算するとこうなります。パターンが見えてこれだけで大分怖さが減ったのではないでしょうか。

$${\displaystyle {\begin{aligned} \frac{1}{1!}x - \frac{1}{3!}x^3 + \frac{1}{5!}x^5 - \frac{1}{7!}x^7 + \frac{1}{9!}x^9 + ... \end{aligned}}}$$

> 
> 
> $n!$ is the product of all positive integers less than or equal to $n$. For example, $5!$ (five factorial) is $5×4×3×2×1=120$.  
> $n!$は、$n$以下のすべての正の整数の積です。例えば、$5!$（5の階乗）は、$5×4×3×2×1=120$です。

Let's see this in JavaScript. You can replace the original expression with a `for` loop. Since we can't repeat an infinite number of additions, we need to stop after a certain number of iterations.

Javascriptで書いてみます。もとの式を文字通り`for`文に丁寧に置き換えるだけです。無限回の足し算をすることはできないのである一定の回数で打ち切りにします。

```jsx
// Helper function to calculate factorial
function factorial(n) {
    let fact = 1;
    for(let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

// Taylor series approximation of sine function
function sinTaylorSeries(N) {
    return function(x) {
        let sum = 0;
        for(let n = 1; n <= N; n++) {
            let term = Math.pow(-1, n+1) * Math.pow(x, 2*n-1) / factorial(2*n-1);
            sum += term;
        }
        return sum;
    }
}

// Example usage
let N = 10; // 10 terms
let approxSin = sinTaylorSeries(N); // Returns a function
console.log(approxSin(Math.PI / 2)); // Should be close to 1
```

Now that we have this code, we can draw a graph. Visualization is the most powerful tool to make things intuitive. By changing the number of iterations, you can see how the result gradually approaches the sine function.

コードが書けたらグラフにしてみましょう。視覚化は直観的な理解のための最強のツールです。繰り返しの回数を変えると結果が少しずつsin関数に近づいていく様子が見られます。

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="jOQeQmE" data-user="kynd" data-preview="true"></p></div>

That's all for now. To recap, $\sum$ is a concise way of writing the sum of many terms. In most cases, you can translate it to a `for` loop very straightforwardly. And assigning concrete values to the variable and visualizing the sum step by step is a great way to understand what it does. You can see another example on the [Fourier Series page](/fourier-series).

いかがでしょう。$\sum$は多数の項の和を簡潔に表現する方法で、ほとんどの場合、`for`ループに簡単に変換できます。1ステップずつ、変数に具体的な値を入れたり、視覚化したりするのも理解の助けになります。[フーリエ級数のページ](/fourier-series)にも別の例があるので参考にしてください。

[Differentiation 微分](/differentiation)
