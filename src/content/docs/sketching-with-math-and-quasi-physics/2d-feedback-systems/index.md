---
title: "2D Feedback Systems 2次元フィードバックシステム"
---
Most physics simulations are based on the idea that if the state of a system at a particular moment can be represented as data, the next state can be calculated from that data. The next state is computed based on the data, which updates the data, and the process repeats. These types of systems are called feedback systems, as they form a loop where the system's output feeds back into its input.

ほとんどの物理シミュレーションは、ある瞬間のシステムの状態をデータとして表現できれば、そのデータを使って次の状態を計算できるという考えに基づいています。データを元に次の状態を計算し、その結果を元に次の状態を計算し、と繰り返すのです。この種のシステムはフィードバックシステムと呼ばれ、システムの出力を入力に戻っていくループを形成します。

We briefly mentioned feedback on the image processing page. Here, we will take a closer look at it from a simulation perspective. In the Image Processing page, it was stated as follows:

[画像処理のページ](/sketching-with-math-and-quasi-physics/image-processing/deformation-and-feedback)でフィードバックについて軽く触れましたが、ここではシミュレーションの観点からより掘り下げてみたいと思います。画像処理のページでは下記のように述べました。

> In the context of image processing, feedback refers to the recursive application of an effect to its output. The following demo uses the basically same effect as the sine function example above, with a slight modification to reduce the amount of translation per step. The only big difference is that instead of using the original image as input, it captures the result of the effect and uses the deformed image as input for the next frame.

> 画像処理の分野では、フィードバックはある種の画像処理をその出力に再帰的に適用することを指します。下のデモでは、上のサイン関数の例と基本的に同じエフェクトを使用しています（ステップごとの移動量を減らすように少しだけ変更を加えています）。唯一の大きな違いは、元の画像を入力として使用する代わりに、エフェクトの結果をキャプチャして変形した画像を次のフレームの入力として使用していることです。

What's interesting is that in computers, images are just data - usually just a big array of numbers that represent the distribution of (color) values in a space. There isn't a clear boundary between processing images and simulating some chemical or physical phenomena. It essentially depends on your interpretation of what these numbers represent.

面白いことに、コンピュータでは画像は単なるデータで、通常は空間内の（色の）値の分布を表すただの大きな数字の配列です。画像の処理と、化学や物理現象のシミュレーションとの間には明確な境界線はありません。基本的にはこれらの数値をどう解釈するか次第なのです。

By considering an image not as an image itself, but for example as a distribution of chemicals in a solution, you can create a feedback system that simulate changes in the state of that space.

画像を画像としてではなく、ある二次元空間の状態、例えば溶液の中の化学物質の分布の割合だと考えると、その空間の状態変化をシミュレートするフィードバックシステムが作れます。

# Reaction-diffusion model
# 反応拡散モデル

Reaction-diffusion models are mathematical models used to describe the behavior and interplay of reactions and diffusion in various systems, such as in chemical and biological processes. They combine the effects of chemical reactions and diffusion to see how patterns change over time and space. Because these models can create complex patterns that are beyond imagination from simple rules, it is often used in the context of computer graphics and generative art as well.  
  
反応拡散（Reaction-diffusion）モデルは、化学や生物学的なプロセスなど様々なシステムの振る舞いや、反応と拡散の相互作用を記述するために使われる数学モデルです。 化学反応と拡散の効果を組み合わせて、パターンが時間と空間にわたってどのように変化するかを調べます。簡単なルールから思ってもみないような複雑なパターンを形成することができるので、コンピュータグラフィックスやジェネラティブアートの文脈でもよく用いられます。

[Reaction-diffusion model 反応拡散モデル](/sketching-with-math-and-quasi-physics/2d-feedback-systems/reaction-diffusion-model)

# Fluid Simulation
# 流体シミュレーション

Fluid simulation is a great example of simulating natural phenomena using a feedback system. It approximates complex phenomena represented by equations that are very challenging to solve by breaking them down into multiple relatively simple steps of approximations, resulting in intricate and elegant motion.

流体シミュレーションはフィードバックシステムを用いた自然現象のシミュレーションの良い例です。解くことが非常に難しい方程式で表された現象を、複数の比較的シンプルなステップに分解して近似することで、複雑で美しい動きを作り出すことができます。

[Fluid Simulation 流体シミュレーション](/sketching-with-math-and-quasi-physics/2d-feedback-systems/fluid-simulation)
