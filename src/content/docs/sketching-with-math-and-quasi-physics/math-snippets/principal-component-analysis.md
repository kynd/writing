---
title: "Principal Component Analysis 主成分分析"
slug: principal-component-analysis
---
Principal Component Analysis (PCA) is a technique used to simplify complex datasets.

主成分分析（PCA）は、複雑なデータセットをシンプルにするための手法です。

Datasets we often encounter in data analysis, such as genetics, marketing, or face recognition, are represented by many variables. You can think of them as points in a high-dimensional space. Because it is difficult to understand and process such complex data, we often want to reduce the dimensionality by projecting the data onto a lower-dimensional space.  

データ分析で扱うデータは、遺伝子、マーケティング、顔認識などのように、多くの場合、数多くの変数で表された、高次元空間における点の集まりとして捉えることができます。こうした複雑なデータは理解や処理が難しいため、より低い次元の空間に射影して「次元を減らす」ことがよく行われます。  

Imagine a cloud of points in 3D space. If you view them from a single viewpoint and trace them onto paper or glass, you create a picture of the points on a 2D plane. To make the data easier to interpret, you would want to choose an angle that best captures the main characteristics of the distribution. We can debate what “best” means, but a common approach is to find the angle where the projected points are most spread out.

3次元空間に、雲のように散らばった点の集まりを想像してください。これを1つの視点から眺め、紙やガラスに写し取ると、点は2D平面上の図になります。データを解釈しやすくするには、分布の主な特徴を最もよく捉える角度を選びたいはずです。「何が最良か」は議論の余地がありますが、よく用いられるのは、写し取った点が最もばらばらに広がる角度を探すことです。

This is the basic idea of PCA. It finds the most important (principal) direction (component) that best captures the data.

この、データを表現するうえで最適な方向（主成分）を見つけることが、PCAの基本的なアイデアです。

# The Math of Projection
# 射影の数式

To understand the math, let’s think about points on a 2D plane that we project onto a line.

数式で理解するために、2D 平面上の点を 1 本の直線へ射影する状況を考えます。

$p_i$ is a data point, and $v$ is a unit vector representing the direction of the line. The projection of $p_i$onto the line is given by:

$p_i$ をデータに含まれる点、$v$ を直線の向きを表す単位ベクトルとします。$p_i$ を直線に射影すると次のように表されます。

$\tilde{p}_i = (p_i \cdot v)v$  

The variance of the projected points is the average of the squared values (assuming the data is centered at zero):

射影された点の分散は（データが 0 を中心にしていると仮定すると）、値を 2 乗したものの平均になります。  

$\displaystyle \text{Variance} = \frac{1}{N} \sum_{i=1}^{N} (p_i \cdot v)^2 = v^T C v$  

where $C$ is the covariance matrix of the data. $\mu_x$ and $\mu_y$ are the averages of $x$ and $y$ components of the points.

ここで $C$ はデータの共分散行列です。$\mu_x$ と $\mu_y$ はそれぞれ、点の $x$ 成分と $y$ 成分の平均です。

$C = \begin{bmatrix} \text{var}(x) & \text{cov}(x,y) \\ \text{cov}(y,x) & \text{var}(y) \end{bmatrix}$

$$\text{cov}(x,y) = \dfrac{1}{N} \sum (x_i - \mu_x)(y_i - \mu_y)$$

This seems like a lot, but the first part, $\displaystyle \text{Variance} = \frac{1}{N} \sum_{i=1}^{N} (x_i \cdot v)^2$, is essentially the definition of variance. Writing it as $v^T C v$ is just a compact way to compute the same quantity without looping over every point. If you look closely at the $\text{cov}$ equation, you might notice it looks like a dot product, averaged over all the points.

複雑に見えますが、前半の $\displaystyle \text{Variance} = \frac{1}{N} \sum_{i=1}^{N} (x_i \cdot v)^2$ は本質的に分散の定義そのものです。これを $v^T C v$ と書くのは、各点を1つずつループせずに同じ量を計算するための、コンパクトな表現に過ぎません。$\text{cov}$ の式をよく見ると、全ての点にわたって平均を取った内積のような形になっていることにも気づくかもしれません。

The demo illustrates this concept. Drag to rotate the line and see how the variance changes. Click “OPTIMIZE” to find the best angle. Try randomizing the points several times to build intuition.

下のデモはこの考え方を可視化したものです。直線をドラッグして回転させ、分散の変化を観察しましょう。“OPTIMIZE” を押すと最適な角度を見つけることができます。ランダムなデータで繰り返し試して、直感的に理解することを目指しましょう。

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="dPOypvw" data-user="kynd" data-preview="true"></p></div>

> I've heard there's some confusion with standard linear regression. Although both can look like drawing a straight line through a cloud of points, their goals are different. Linear regression is a **predictor**: it treats $y$ as the target and estimates it from $x$, minimizing only the *vertical* distance between the points and the line. PCA is a **summarizer**: to find the best angle to look at the data, it rotates the line to find the angle where the data is most spread out.
>
> 標準的な線形回帰と混同している人を見かけました。どちらも点の雲の中に直線を引くように見えますが、目的が異なります。線形回帰は予測のための手法で、$y$ を目的変数として $x$ から推定し、点と直線の**縦方向**の距離のみを最小化します。一方、PCA は要約のための手法で、データを最もよく表す角度を見つけるために直線を回転させ、投影されたデータの広がりが最大になる向きを探します。
