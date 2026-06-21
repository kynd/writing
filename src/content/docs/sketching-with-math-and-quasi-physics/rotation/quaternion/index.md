---
title: "Quaternion クォータニオン"
slug: quaternion
---
Quaternions are peculiar. They are something I'm happy to use if a tool offers them, and are fascinating to explore conceptually, but I wouldn't normally implement them myself except for learning purposes. They are like complex numbers in 4 dimensions that solve rotation by delving into imaginary dimensions. When available in your tool, they are actually very useful. They are free from gimbal lock, and can simplify the complex handling of rotation, or even let you blend multiple rotations. If all this sounds interesting, please proceed.

クォータニオンは奇妙なものです。ツールがサポートしていれば喜んで使うし、概念的にも非常に魅力的ですが、学習目的以外では自分で実装することはあまりありません。クォータニオンは4次元の複素数のようなもので、仮想の次元に潜り込むことで回転の問題を解くような代物です。使っているツールでサポートされているなら、クォータニオンは実際にとても便利です。ジンバルロックもなく、回転の複雑な処理を単純化したり、複数の回転をブレンドしたりもできます。これらが興味をそそるようなら、先に進んでください。

# History of numbers
# 数の歴史

This might seem like a detour, but let's take a look back at history. Humans have been expanding the concept of numbers for a long time. It probably began with natural numbers like 1, 2, 3, which naturally correspond to the number of items such as fruits or animals. The concept of zero, representing “nothing”, revolutionized the world, eventually leading to negative numbers that can represent debts or deficits. Ratios and rational numbers likely emerged from the need to measure things like weight, volume, length, etc. The discovery of irrational numbers, like the square root of 2, came as a big surprise to the Greeks, and they were afraid to reveal their findings.

遠回りに思えるかもしれませんが、歴史を振り返ってみましょう。人は長い間をかけて数の概念を広げてきました。おそらく始まりは1、2、3といった、果物や動物の数などに対応する自然数でしょう。「何もない」ことを表すゼロの概念は世界を革新し、次第に借金や赤字を表すことができる負の数も生まれました。比や有理数は、重量、容量、長さなどを測定する必要から生まれたのでしょう。ギリシャ人は2の平方根のような無理数に驚き、その発見が広まることを恐れました。

Mathematicians eventually encountered the square root of -1 in the 16th century, which led to the concept of imaginary and complex numbers. Every time new kind of numbers were discovered, they must have appeared abstract and unreal, as we can imagine from the names like 'irrational' and 'imaginary' (Though 'irrational' doesn't mean a lack of rationality, it means 'can't be expressed as a ratio'.). But these numbers have proven to be very powerful and interesting, both practically and conceptually. They are necessary for describing our world too, as in general relativity or quantum physics, and in that sense, they are quite substantial too.

やがて数学者たちは16世紀に-1の平方根を見つけ、虚数と複素数の概念を導き出します。新しい種類の数が発見されるたび、それらは抽象的で非現実的に見えたことでしょう。それは、Irrational やImaginary のような名前からも想像できます（ただし、Irrational は理性のないといった意味ではなく、比として表現できないという意味です）。しかし、これらの数は、実用的にも概念としても非常に強力で興味深いことが示されました。一般相対性理論や量子物理学のように、私たちの世界を説明するためにも必要なこれらの数は、その意味で非常に重要かつ実質的だと言えるでしょう。

Quaternions are a relatively recent addition to these different kinds of numbers in the 19th century. To understand them, it helps to start from complex numbers, a direct ancestor of quaternions.

クォータニオンは比較的新しく、19世紀にこれら様々な数の仲間に加わりました。これを理解するには、クォータニオンの直接の祖先である複素数から始めるのが良いでしょう。

# Complex numbers
# 複素数

The square root of a number is a value that, when squared, returns the original number, such as $\sqrt{4} = 2$. The square root of a positive number can be located on the number line as another real number (Usually, there are two real numbers that can be squared to give the same real number. They are distinguished as $\sqrt{n}$ and $-\sqrt{n}$.) But the square root of a negative number cannot be placed on a number line. For instance, there isn't a real number that squares to -1. This could have been a dead end, but mathematicians did what they do, to think 'what if'. What if such a number exists? How would it behave?

数の平方根は、2乗すると元の数になる値で、例えば$\sqrt{4} = 2$のようなものです。正の数の平方根は、実数として数直線上に配置することができます（通常、2乗すると同じ数になる実数は2つあり、$\sqrt{n}$と$-\sqrt{n}$として区別されます）。しかし、負の数の平方根は数直線上に配置することはできません。例えば、2乗すると-1になる実数は存在しません。行き止まりのように思えますが、数学者たちはいつものように考えました。 もしそんな数が存在するとしたら、それはどのように振る舞うのでしょう。

The number was given a name, “imaginary number” and a symbol $i$. $i = \sqrt{-1}$, that's the definition. Since it doesn't fit on the real number line, we imagine it on a separate, perpendicular imaginary number line. This lets us place square roots of negative numbers on this new axis. For example, $\sqrt{-2}$ is $\sqrt{2}i$, and $\sqrt{-16}$ is $4i$. This extends the number system one step further, literally to a new dimension.

その数には「虚数」という名前と $i$ という記号が与えられました。$i = \sqrt{-1}$ というのが定義です。これは実数の数直線上にはおけないので、もう1つ、垂直に交わる虚数の数直線を思い浮かべます。これで、負の平方根をこの新しい軸に配置できるようになりました。例えば、$\sqrt{-2}$ は $\sqrt{2}i$ で、$\sqrt{-16}$ は $4i$ です。これで数のシステムが文字通り新たな次元に拡張されます。

Let's consider these two number lines as axes on a plane. This plane, which has the real axis and the imaginary axis, is called the "complex plane". A point on this plane, represented by a combination of a real number and an imaginary number, is a “complex number”. Examples of complex numbers are $2 + 1i$, $\sqrt{2} - 2i.$ $0$, $-3$, or $1i$ are also considered complex numbers. They are just on either or both axes. Or in general, a complex number is of the form $a+bi$, where _a_ and _b_ are any real numbers.

この2つの数直線を平面上の軸と考えましょう。実数軸と虚数軸を持つこの平面は、「複素平面」と呼ばれます。この平面上の点は、実数と虚数の組み合わせで表される「複素数」です。例えば $2 + 1i$、$\sqrt{2} - 2i$ などは複素数です。$0$、$-3$、 $1i$ なども複素数と考えられ、どちらかまたは両方の軸の上に置かれます。一般に、複素数は $a+ bi$ の形をしていて、$ a$ と _$b $_ は任意の実数です。

Below is the graph plotting these numbers.

下はこれらの数字をプロットしたグラフです。

[![](/images/quaternion.png)](/images/quaternion.png)

<div></div>

At this point, you might be wondering where this is leading. Surprisingly, complex numbers can actually represent rotation. Let's start from $1$. Then multiply it by $i$, which is $1i$ or just $i$. Multiply it again by $i$, which is $-1$. If we repeat this, the next is $-i$, then it comes back to $1$... Doesn't this look like rotating a point by 90 degrees each step?

ここまできましたが、話はどこへ向かっているのでしょう。なんと複素数は実際に回転を表すことができます。$1$から始めて $i$ を掛けると $1i$ または単に $i$ になります。さらにもう一度 $i$ を掛けてみると、$-1$ になります。これを繰り返すと、次は $-i$、そして $1$ に戻ります。これはステップごとに90度、点を回転させているように見えないでしょうか。

[![](/images/quaternion-1.png "75")](/images/quaternion-1.png)

<div></div>

Here is one more example with a smaller step. If we start from 1 and continue multiplying by $\sqrt{3} / 2 + 1/2i = \cos(30^\circ) + i \sin(30^\circ)$, we get this graph (Try calculating by yourself!)

もっと小さなステップの例をもう1つ挙げてみましょう。1から始めて、$\sqrt{3} / 2 + 1/2i = \cos(30^\circ) + i \sin(30^\circ)$を掛け続けると、次のグラフができます（自分でも計算して見ましょう）。

[![](/images/quaternion-2.png "75")](/images/quaternion-2.png)

<div></div>

In general, a complex number that represents a rotation is $\cos(\theta) + i \sin(\theta)$. By multiplying this by a complex number, you can rotate it by $\theta$ on the complex plane. This is just one step away from [Euler's identity](https://en.wikipedia.org/wiki/Euler%27s_identity), $e^{i\pi} + 1 = 0$, which some people claim is the most beautiful formula. We could easily spend more time and words on this, but instead now we're finally moving onto quaternion!

一般的に、回転を表す複素数は $\cos(\theta) + i \sin(\theta)$ です。これを別の複素数に掛けると、その数を複素平面上で $\theta$ だけ回転させることができます。ここから [Eulerの恒等式](https://en.wikipedia.org/wiki/Euler%27s_identity)、最も美しい公式だと主張する人もいる $e^{i\pi} + 1 = 0$ まではほんの一歩です。この式についてはいくらでも深掘りできますが今は置いておいて、ついにクォータニオンに進むことにしましょう。

> 
> 
> These graphs are made with Python. You can find the [code here on Google Colab](https://colab.research.google.com/drive/1AnpOQRBQ3OCbxRCPODPVpd9PDwgvmy8-#scrollTo=bJ71O3-Y8qWn).  
> これらのグラフはPythonで作成しました。[コードはGoogle Colabにあります](https://colab.research.google.com/drive/1AnpOQRBQ3OCbxRCPODPVpd9PDwgvmy8-#scrollTo=bJ71O3-Y8qWn)。

# Quaternion
# クォータニオン

To recap, a complex number is of the form $a+bi$, where $i$ is the imaginary unit defined as $i^2=-1$. A complex number can be seen as a point on a 2D plane called the complex plane.

振り返ると複素数は $a+bi$ の形で、この $i$ は $i^2=-1$ と定義される虚数単位です。複素数は、複素平面と呼ばれる2D平面上の点として考えることができます。

Instead of just one imaginary unit, quaternions introduce three units $i$, $j$, and $k$ (in addition to the real unit $1$) They have the following relationships to each other.

クォータニオンは、ただ1つの虚数単位ではなく、（実数の単位1に加えて）$i$、$j$、$k$の3つの単位を導入します。これらには互いに以下の関係があります。

$$i^2 = j^2 = k^2 = ijk = -1$$

$$ij = -ji = k, \quad jk = -kj = i, \quad ki = -ik = j$$

And a quaternion is expressed as $a + bi + cj + dk$, where _$a$_, _$b$_, _$c$_, _$d$_, are real numbers.

クォータニオンは、$a + bi + cj + dk$と表わされ、ここで $a$、$b$、$c$、$d$ は実数です。

This is very fascinating, as these rules indicate that multiplying quaternions can move a point across different regions in 4D space, just like multiplying complex numbers does so in 2D space. But how could we actually use it in practice?

これらのルールはとても面白く、クォータニオンを掛け合わせると、複素数を掛けて2D空間で行ったように、4D空間の異なる領域に点を移動できることを示しています。しかし、実際にどのように使えるのでしょうか。

> 
> 
> As you can see from $ij = -ji$ and so on, quaternions are non-commutative, meaning the result will change if you change the order of operations.  
> $ij = -ji $ などから分かるように、クォータニオンは非可換、つまり計算の順序を入れ替えると結果が変わります。

Below is the demo of a quaternion in action. This looks identical to [the other demo with Rodrigues' rotation formula](/rotation-and-trigonometry), but it uses a quaternion behind the scenes. In fact, any rotation that can be expressed with Euler angles, Rodrigues’ formula (i.e., axis and angle), or a matrix can also be expressed by a quaternion.

下は、クォータニオンの動作のデモです。これは[ロドリゲスの回転公式を使った別のデモ](/rotation-and-trigonometry)と全く同じに見えますが、裏ではクォータニオンを使っています。実際にオイラー角やロドリゲスの公式（つまり、軸と角度）、または行列で表現できる回転は全て、クォータニオンでも表現できます。

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="ZEPeOaP" data-user="kynd" data-preview="true"></p></div>

The key part of this demo is the `Quaternion` class, which implements the basic operations of a quaternion.

このデモの中心になるのは、クォータニオンの基本的な操作を実装した`Quaternion`クラスです。

## Four coefficients
## 四つの係数

As you can see in the constructor, this class has four parameters, a, b, c, and d to capture the four coefficients for the real part, i, j, and k. A quaternion can express any rotation with just these four numbers.

コンストラクタを見れば分かるように、このクラスには実部、$i$、$j$、$k$ に対する4つの係数を格納するための4つのパラメーター、$a$、$b$、$c$、$d$ があります。クォータニオンはこれら4つの数字だけで任意の回転を表現できます。

```jsx
constructor(a = 1, b = 0, c = 0, d = 0) {
	this.a = a; // Real part
	this.b = b; // Coefficient of i
	this.c = c; // Coefficient of j
	this.d = d; // Coefficient of k
}
```

## Axis and angle to Quaternion
## 軸と角度からクォータニオンを作る

For example, the rotation about a normalized vector $\vec{u} = (u_x, u_y, u_z)$ as the axis by the angle $\theta$can be converted to a quaternion $q$ using the formula below.

たとえば、正規化されたベクトル $\vec{u} = (u_x, u_y, u_z)$ を軸とした角度 $\theta$ の回転は、以下の式を使ってクォータニオン $q$ に変換できます。

  
$$\alpha = \dfrac{\theta}{2}$$
$$q = \cos(\alpha) + u_x \cdot \sin(\alpha) \cdot i + u_y \cdot \sin(\alpha) \cdot j + u_z \cdot \sin(\alpha) \cdot k$$

This is implemented as the `setFromAxisAngle()` function.

これは`setFromAxisAngle()`関数として実装されています。

```jsx
setFromAxisAngle(axis, angle) {
    const normalizedAxis = axis.copy().normalize();
    const halfAngle = angle / 2;
    const sinHalfAngle = Math.sin(halfAngle);

    this.a = Math.cos(halfAngle);
    this.b = normalizedAxis.x * sinHalfAngle;
    this.c = normalizedAxis.y * sinHalfAngle;
    this.d = normalizedAxis.z * sinHalfAngle;
		return this;
}
```

## Multiplication
## 掛け算

To understand how to apply a quaternion, we need to learn how to multiply two quaternions. This is essentially the same as ordinary polynomial multiplication, but the difference is in the rules for multiplying the imaginary units $i$, $k$, and $j$. For example, if you multiply $i$ by $j$, it becomes $k$. With these rules in mind, try calculating step by step on your own to see if the following makes sense.

クォータニオンの適用方法を理解するには、まず2つのクォータニオンの掛け合わせる方法を学ぶ必要があります。基本的は普通の多項式の掛け算と同じですが、虚数単位 $i$、$k$、$j$ を掛けるルールに違いがあります。例えば、$i$ を $j$ に掛けると $k$ になります。これらのルールを頭に入れた上で、自分で手順を追って計算して下記が正しいか試してみましょう。

  
$$
\begin{aligned}
q \times r &= (q_a + q_bi + q_cj + q_dk)(r_a + r_bi + r_cj + r_dk) \\
&= (q_a r_a - q_b r_b - q_c r_c - q_d r_d) \\
&\quad + (q_a r_b + q_b r_a + q_c r_d - q_d r_c)i \\
&\quad + (q_a r_c - q_b r_d + q_c r_a + q_d r_b)j \\
&\quad + (q_a r_d + q_b r_c - q_c r_b + q_d r_a)k
\end{aligned}
$$  

This is what the `multiply()` function does.

これが `multiply()` 関数の行う内容です。

```jsx
multiply(quaternion) {
    return new Quaternion(
        this.a * quaternion.a - this.b * quaternion.b - this.c * quaternion.c - this.d * quaternion.d,
        this.a * quaternion.b + this.b * quaternion.a + this.c * quaternion.d - this.d * quaternion.c,
        this.a * quaternion.c - this.b * quaternion.d + this.c * quaternion.a + this.d * quaternion.b,
        this.a * quaternion.d + this.b * quaternion.c - this.c * quaternion.b + this.d * quaternion.a
    );
}
```

## Applying to a vector
## ベクトルに適用する

To apply a quaternion to a vector to rotate it, we can follow the following steps.  

ベクトルを回転させるためにクォータニオンを適用するには、下記の手順に従います。

### Convert the Vector to a Quaternion
### ベクトルをクォータニオンに変換する

First, convert the vector to rotate to a quaternion so that it can be multiplied with the quaternion that represents the rotation. If the vector to rotate is $\vec{v}$, it becomes a quaternion $v_q = 0 + \vec{v}_x i + \vec{v}_y j + \vec{v}_z k$.

まず、回転させるベクトルをクォータニオンに変換し、回転を表すクォータニオンと掛け合わせられるようにします。回転させるベクトルが $\vec{v}$ の場合、クォータニオンは $v_q = 0 + \vec{v}_x i + \vec{v}_y j + \vec{v}_z k$ になります。

### Find the conjugate of the rotation quaternion
### 回転クォータニオンの共役数を求める

We need something called the "conjugate" of the rotation quaternion. If the original rotation quaternion is $q = a + bi + cj + dk$, its conjugate is $q* = a - bi - cj - dk$, i.e., the original quaternion with the coefficients for $i$, $j$, k multiplied by -1.

回転クォータニオンの「共役数」と呼ばれる数が必要になります。元の回転クォータニオンが $q = a + bi + cj + dk$ の場合、その共役数は $q* = a - bi - cj - dk$ 、つまり元の i, j, k に -1をかけた物です。

### Multiply the Quaternions
### クォータニオンを掛け合わせる

Then we multiply these three quaternions we have. $Q_{rotated} = q \times v_q \times q*$

次に、これらの3つのクォータニオンを掛け合わせます。$Q_{rotated} = q \times v_q \times q*$

### Put it back to a vector
### ベクトルに戻す

Finally, we convert it back to a vector $(Q_{rotated}x, Q_{rotated}y, Q_{rotated}z)$. This is the desired rotated vector.

最後に、ベクトル $(Q_{rotated}x, Q_{rotated}y, Q_{rotated}z)$ に戻します。これが求めていた回転後のベクトルです。

And this function below is the code implementation of these steps.

これらのステップをコードで実装したのが下記の関数です。

```jsx
applyToVector(vector) {
    const vectorQuat = new Quaternion(0, vector.x, vector.y, vector.z);
    const conjugateQuat = new Quaternion(this.a, -this.b, -this.c, -this.d);
    const rotatedQuat = this.multiply(vectorQuat).multiply(conjugateQuat);
    return createVector(rotatedQuat.b, rotatedQuat.c, rotatedQuat.d);
}
```

# But why?
# なぜこんなことをするのか

This might seem too much for just rotating a vector. But once implemented, quaternions have some great advantages over other methods.

- **No Gimbal Lock**: Quaternions do not have the gimbal lock problem like [Euler angles](/rotation-and-trigonometry).
- **Efficiency**: Quaternions are more memory-efficient than a matrix (4 numbers vs 9 numbers), and operations are usually cheaper too. Once calculated, a quaternion can be applied to as many vectors as you want.
- **Interpolation and Concatenation**: Quaternions can be [interpolated](/interpolation-and-animation). This is really useful for transitioning between two orientations. Quaternions can also be concatenated, or merged together. If you want to apply multiple rotations, you can simply multiply the corresponding quaternions. The result can be stored as a single quaternion and reused.

ベクトルを回転させるだけにしては大袈裟に見えますが、いったん実装するとクォータニオンは他の方法に比べてとても良い点がいくつかあります。

- **ジンバルロックがない**：クォータニオンには、[オイラー角](/rotation-and-trigonometry)のようなジンバルロックの問題がありません。
- **効率性**：クォータニオンは行列よりもメモリ効率が良く（数値4つ、数値9つ）、計算も大抵は少なく済みます。また一度クォータニオンを計算したら、同じ変換を多くのベクトルに適用することができます。
- **補間と連結**：クォータニオンは[補間](/interpolation-and-animation)することができます。これは2つの向きの間を遷移するのにとても便利です。クォータニオンはまた、連結、または合体することもできます。複数の回転を適用したい場合は、単純に対応するクォータニオンを掛け合わせれば良いのです。掛け合わせた結果は1つのクォータニオンとして保存し、再利用することができます。

The last demo below shows the interpolation between quaternions. Move your mouse around to rotate the box between three different poses. The interpolation of quaternion, referred as slerp (spherical linear interpolation) is defined by the formula below. $t$ is the interpolation parameter between 0 and 1, and $\Omega$ is the angle between the quaternions, defined as $\cos(\Omega) = q_0 \cdot  q_1$ (the dot product of the quaternions). Slerp is implemented as `slerp()` in the demo.

下はこのページの最後となる、クォータニオンの補間のデモです。マウスを動かすと、ボックスを3つの異なる姿勢の間で回転できます。クォータニオンの補間は、slerp（球面線形補間 spherical linear interpolation）と呼ばれ、下の式で定義されます。 $t$ は0と1の間の補間パラメータで、$\Omega$ はクォータニオの角度を表し、$\cos(\Omega) = q_0 \cdot  q_1$（クォータニオンのドット積）と定義されます。slerp はデモの中で`slerp()`として実装されています。

$$q(t) = \dfrac{\sin((1 - t) \Omega)}{\sin(\Omega)} q_0 + \dfrac{\sin(t \Omega)}{\sin(\Omega)} q_1$$

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="gOEmgBX" data-user="kynd" data-preview="true"></p></div>

```jsx
const quatA = new Quaternion().setFromAxisAngle(createVector(0, 1, 0), 0);
const quatB = new Quaternion().setFromAxisAngle(createVector(0, 1, 0), PI);
const quatC = new Quaternion().setFromAxisAngle(createVector(0, 0, 1),  PI );

let quat = quatA;
quat = quat.slerp(quatB, mouseX / width);
quat = quat.slerp(quatC, mouseY / height);

points = points.map(p => quat.applyToVector(p));
```

# To learn more
# もっと学ぶために

That's it. This was quite complicated, but quaternions are really useful. I hope this page can help understanding them when you encounter them elsewhere (For example, [quaternions are a standard way to represent rotations in Unity](https://docs.unity3d.com/Manual/class-Quaternion.html) and other gaming engines). Beyond that, the idea of handling rotation in 4D itself is very intriguing. To learn more, you can search and find many documents, but they are mostly math-heavy. For someone more visually oriented, I recommend the page below. They have amazing visualizations of various concepts without compromising mathematical accuracy.

以上です。かなり複雑でしたが、クォータニオンは本当に便利です。他の場所でクォータニオンを見かけた時に、このページが助けになることを願っています（例えば、[クォータニオンはUnityで回転を表す標準的な方法で、](https://docs.unity3d.com/Manual/class-Quaternion.html)他の多くのゲームエンジンでも同様です）。便利なだけではなく、四次元で回転の扱うという考え方自体もとても刺激的です。もっと詳しく知りたければ検索でたくさんのドキュメントを見つけられますが、多くのページは数学的に難解です。ビジュアル指向の方には、下のページをお勧めします。このページでは様々な概念が、数学的な正確性を損なうことなく見事に映像化されています。

<div class="bookmark-card"><a href="https://eater.net/quaternions" target="_blank" rel="noopener" class="bookmark-link"><div class="bookmark-info"><div class="bookmark-title">Visualizing quaternions, an explorable video series</div><div class="bookmark-description">Explaining how quaternions, a four-dimensional number system, describe 3d rotation.</div><div class="bookmark-url"><img src="https://eater.net/favicon/apple-touch-icon.png" class="bookmark-favicon" alt="" onerror="this.style.display='none'"><span>https://eater.net/quaternions</span></div></div><img src="https://eater.net/media/intro.jpg" class="bookmark-image" alt="" loading="lazy" onerror="this.style.display='none'"></a></div>

<div class="video-embed"><iframe src="https://www.youtube.com/embed/zjMuIxRvygQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

It is also useful to look at a good implementation as an example. For instance, you can take a look at the [`ofQuaternion`](https://github.com/openframeworks/openFrameworks/blob/master/libs/openFrameworks/math/ofQuaternion.cpp) [class](https://github.com/openframeworks/openFrameworks/blob/master/libs/openFrameworks/math/ofQuaternion.cpp) in [openFrameworks](https://openframeworks.cc/).

良い実装の例を見るのも役に立ちます。例えば、[openFrameworks](https://openframeworks.cc/)の[`ofQuaternion`](https://github.com/openframeworks/openFrameworks/blob/master/libs/openFrameworks/math/ofQuaternion.cpp)[クラスを](https://github.com/openframeworks/openFrameworks/blob/master/libs/openFrameworks/math/ofQuaternion.cpp)見て見ましょう。
