---
title: "Abstract, Introduction and Background 概要、序論と背景"
---
> 
> 
> [The original paper is available from arXiv](https://arxiv.org/abs/1706.03762). It's recommended to keep the original open as you follow along with this series.
> 
> [元の論文はarXivから入手できます](https://arxiv.org/abs/1706.03762)。このシリーズを読み進める際は、元の論文を開いておくことをお勧めします。

Let's begin with the abstract and introduction to understand what this paper is about. This is the first few sentence from the abstract.

概要（abstract）と序論（introduction）から始めて、この論文が何について書かれているのかを理解しましょう。これは概要の冒頭の数文です。

> The dominant sequence transduction models are based on complex recurrent or  
> convolutional neural networks that include an encoder and a decoder. The best  
> performing models also connect the encoder and decoder through an attention  
> mechanism. We propose a new simple network architecture, the Transformer,  
> based solely on attention mechanisms, dispensing with recurrence and convolutions  
> entirely.

> 主流な配列変換モデルは、エンコーダとデコーダを含む複雑な再帰型、あるいは畳み込みニューラルネットワークに基づいている。最も優れた性能を示すモデルは、アテンション機構を介してエンコーダとデコーダを接続している。本稿では、再帰や畳み込みを完全に排除し、アテンション機構のみに基づいた、シンプルで新しいネットワーク・アーキテクチャである Transformer を提案する。

Basically, they are claiming that their new architecture called Transformer is better than the other old and common architectures at the time.

つまりTransformer と呼ばれる新しいアーキテクチャが、当時の他の一般的なアーキテクチャよりも優れていると主張しています。

At a very high level, the model discussed here is a computer program that takes text as input and outputs another text. The task they are discussing in this paper is translation of relatively short text. The size and sophistication of the model is nothing comparable to AI models today, but this architecture became the foundation for the big leap.

大まかに言えば、ここで議論されているモデルは、テキストを入力として受け取り、別のテキストを出力するコンピュータプログラムです。この論文で扱われているタスクは、比較的短いテキストの翻訳です。モデルのサイズや洗練度は今日のAIモデルには及びませんが、このアーキテクチャは後の大きな発展の基礎となりました。

In the paper, they compare the new architecture with other common architectures at the time, RNN and CNN, and claim that the new architecture has significant advantages over them.

論文では、当時の主流だったRNNやCNNと新しいアーキテクチャを比較し、Transformerが大きな利点を持っていると主張しています。

The new architecture is "based solely on attention mechanisms," which is what we are going to spend the whole pages on. But before that, let's briefly talk through a few keywords necessary to understand the paper.

新しいアーキテクチャは「アテンション機構のみに基づいて」いて、これがこれから詳しく見ていく部分です。ですがその前に、論文を理解するために必要なキーワードをいくつか簡単に押さえておきましょう。

# Tokens
# トークン

Tokens are a foundational concept for nearly all modern text-processing algorithms. Tokens are the basic unit of text, such as a word, part of a word, or a punctuation mark that a model processes as an indivisible building block.

トークンは、現代のほぼすべてのテキスト処理アルゴリズムにおける基礎的な概念です。トークンはテキストの基本単位であり、単語、単語の一部、あるいは句読点などが、モデルが処理を行う際のそれ以上分割できない構成要素として扱われます。

Roughly speaking, it's not too off to think that a token represents a concept or a word, but they are not precisely words. Tokenization is more efficient than word-level processing because it allows models to handle less frequent or large compound words as a series of smaller tokens, or process languages that have less clear word separations such as Japanese.

大まかに言えば、トークンは概念や単語を表していると考えても大きくは間違っていませんが、正確には単語ではありません。トークン化は単語レベルの処理よりも効率的です。なぜなら、モデルが頻度の低い単語や大きな複合語を、より小さなトークンの連続として扱えるようになるため、あるいは日本語のような単語の区切りが明確でない言語を処理できるようになるためです。

# Embeddings
# 埋め込み

Texts are broken into tokens. But they are still sequences of characters that by themselves mean nothing to the computer model. Machine learning algorithms require continuous numerical values and gradients for both learning and prediction, and for that reason, the data that the models handle must be represented numerically.

テキストはトークンに分割されます。しかし、それらはまだ文字が並んだもので、それ自体ではコンピュータのモデルにとって何の意味も持ちません。機械学習のアルゴリズムは、学習と予測の両方において連続的な数値と勾配が必要なので、モデルが扱うデータは数値で表現されなければなりません。

Each token is mapped to a high-dimensional vector, like 512 dimensions. Think of this vector as a coordinate in a space where tokens float based on their semantic relationships: words with closer meanings sit near each other, while unrelated words are far apart. By representing language this way, the model can use calculus to calculate gradients, which tell it exactly how to adjust these numbers to improve understanding. During training, the model learns that similar concepts (like "dog" and "puppy") should have vectors close together in this mathematical space.

それぞれのトークンは、例えば512次元のような高次元のベクトルにマッピングされます。このベクトルを、トークンが意味の関係に基づいて浮かんでいる空間の座標と考えてみましょう。意味が近い単語は互いに近くに位置し、関連のない単語は遠く離れています。このように言語を表現することで、モデルは微積分を使って勾配を計算でき、理解を向上させるために数値をどう調整すればよいか正確にわかります。トレーニングを通じて、モデルは似たような概念（例えば「犬」と「子犬」）がこの数学的空間において近いベクトルを持つはずだということを学びます。

> Note that computers don't understand meaning the way humans do (or to be fair, we can't define what understanding really means). Instead, a token's position is determined by its relationship to other tokens.
> 
> コンピュータは人間のような方法で意味を理解しているわけではないことに注意しましょう（そもそも私たちには理解とは本当に何かを定義することはできません）。その代わり、トークンの位置は他のトークンとの関係によって決まります。
> 
> If two tokens consistently appear in similar contexts (surrounded by the same types of words), they likely have similar grammatical roles and meanings. If not, they're likely different. The algorithm repeats this calculation over numerous examples to position all tokens geometrically in the space. The high dimensionality ensures the space can capture relationships from various angles, even though we can't identify what each axis represents.
> 
> もし2つのトークンが一貫して似たような文脈（同じ種類の単語に囲まれている）に現れるなら、それらは似た文法的な役割と意味を持っている可能性が高いでしょう。そうでなければ、多分似ていないものです。アルゴリズムは大量の例に対してこの計算を繰り返し、すべてのトークンを空間内に幾何学的に配置します。高次元であることによって、人間には各軸が何を表しているかは特定できなくても、空間自体が様々な角度から関係性を捉えることができます。
> 
> If you're interested in the linguistics behind this, look up the [Distributional Hypothesis](https://www.google.com/search?q=Distributional+Hypothesis), often summarized as "you shall know a word by the company it keeps."
> 
> この背景にある言語学に興味があれば、「言葉の意味は、その周辺の単語によって知ることができる」と要約される、[分布仮説（Distributional Hypothesis）](https://www.google.com/search?q=Distributional+Hypothesis)について調べてみましょう。

# Recurrent Neural Networks (RNNs)
# 再帰型ニューラルネットワーク（RNN）

RNN is an architecture that, as the name suggests, processes text through a feedback loop. It reads the tokens one at a time, where the output of one step (a "hidden state" or memory) is fed back into the next. This is how it builds the context needed to understand each subsequent word.

RNNは、その名の通り、フィードバックループを通じてテキストを処理するアーキテクチャです。トークンを1つずつ読み込み、それぞれのステップの出力（「隠れ状態」またはメモリ）が次のステップに送り込まれます。これが、後続の各単語を理解するために必要な文脈を構築する仕組みです。

This makes sense, right? It seems to mimic how humans read text. But as the authors mention in the paper, this architecture has two major flaws.

これは人間がテキストを読む方法を模倣しているように見え、理にかなっているように思えます。しかし、論文で著者たちが指摘しているように、このアーキテクチャには2つの大きな欠陥があります。

-   **The Sequential Traffic Jam:** Because each step depends on the previous one, the model can't process words in parallel. This makes training incredibly slow on modern hardware.

-   **The Memory Fade:** In long sequences, the "memory" from the beginning of the text often gets diluted or lost by the time the model reaches the end.

-   **逐次処理による渋滞：**それぞれのステップが前のステップに依存するるため、モデルは単語を並列に処理できません。これにより、現代のハードウェアでのトレーニングが非常に遅くなります。

-   **記憶の減衰：**長いシーケンスでは、テキストの冒頭からの「記憶」が、モデルが末尾に到達する頃にはしばしば薄まったり失われたりします。

> Recurrent models typically factor computation along the symbol positions of the input and output sequences. Aligning the positions to steps in computation time, they generate a sequence of hidden states <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>h</mi><mi>t</mi></msub></mrow><annotation encoding="application/x-tex">h_t</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">h</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.2806em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">t</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span>, as a function of the previous hidden state <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>h</mi><mrow><mi>t</mi><mo>−</mo><mn>1</mn></mrow></msub></mrow><annotation encoding="application/x-tex">h_{t−1}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.9028em;vertical-align:-0.2083em;"></span><span class="mord"><span class="mord mathnormal">h</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">t</span><span class="mbin mtight">−</span><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2083em;"><span></span></span></span></span></span></span></span></span></span> and the input for position t. This inherently sequential nature precludes parallelization within training examples, which becomes critical at longer sequence lengths, as memory constraints limit batching across examples.

> 再帰型モデルは通常、入出力シーケンスの記号位置に沿って計算を計算を展開する。計算時間におけるステップに各位置を整列させ、前の隠れ状態 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>h</mi><mrow><mi>t</mi><mo>−</mo><mn>1</mn></mrow></msub></mrow><annotation encoding="application/x-tex">h_{t-1}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.9028em;vertical-align:-0.2083em;"></span><span class="mord"><span class="mord mathnormal">h</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">t</span><span class="mbin mtight">−</span><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2083em;"><span></span></span></span></span></span></span></span></span></span> と位置 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>t</mi></mrow><annotation encoding="application/x-tex">t</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6151em;"></span><span class="mord mathnormal">t</span></span></span></span> における入力の関数として、一連の隠れ状態 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>h</mi><mi>t</mi></msub></mrow><annotation encoding="application/x-tex">h_t</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">h</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.2806em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">t</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span> を生成する。この本質的に逐次的な性質は、訓練例内部での並列化を不可能にする。これはシーケンス長が長くなるにつれ、メモリの制約によってサンプルをまたいだバッチ処理が制限されるため、極めて深刻な問題となる。

# Convolutional Neural Networks (CNNs)
# 畳み込みニューラルネットワーク（CNN）

Convolutions are a mathematical operation where a kernel (a small matrix of weights) slides across the input data to produce a feature map. In text processing, this means the model looks through the text via small windows, computing a weighted sum of that token and its immediate neighbors. CNNs typically use multiple layers of convolution to process and abstract information like a pyramid.

畳み込みは、カーネル（重み付けの小さな行列）が入力データ上をスライドして特徴のマップを生成する数学的な演算です。これはテキストの処理では、モデルが小さな窓枠を通してテキストを見渡し、そのトークンと隣り合うトークンの重み付き和を計算する処理になります。CNNは通常、ピラミッドのように情報を処理して抽象化するので、複数層の畳み込みを用います。

This can be much faster than RNNs because they can process different parts of a sentence in parallel. But the paper points a significant flaw.

これは文の異なる部分を並列に処理できるのでRNNよりもはるかに高速になり得ますが、論文は重大な欠陥を指摘しています。

-   **Struggle with long-distance relationships:** For example, if the first word of a sentence defines the meaning of the last word, a CNN has to stack many layers like building a tall pyramid just to relate these words.

-   **長距離の関係の扱いが苦手：**例えば、文の最初の単語が最後の単語の意味を定義する場合、CNNはこれらの単語を関連付けるためだけに高いピラミッドを建てるように、多くの層を積み重ねる必要があります。

> In these models, the number of operations required to relate signals from two arbitrary input or output positions grows in the distance between positions, linearly for ConvS2S and logarithmically for ByteNet. This makes it more difficult to learn dependencies between distant positions.

> これらのモデルにおいて、任意の2つの入出力位置からの信号を関連付けるために必要な操作数は、位置間の距離に応じて、ConvS2Sでは線形的に、ByteNetでは対数的に増加する。このことは、離れた位置間の依存関係を学習することをより困難にする。

# Encoder and Decoder
# エンコーダーとデコーダー

The encoder and decoder are mechanisms commonly found in text-oriented models. They work as a pair: the encoder takes in the input, and the decoder generates the output. Different models use variations of this mechanism, but the basics remain the same.

エンコーダーとデコーダーは、テキストを処理するモデルで一般的に見られるメカニズムです。これらはペアで機能し、エンコーダーが入力を受け取り、デコーダーが出力を生成します。モデルによって異なるバリエーションが用いられますが、基本は同じです。

The encoder takes the input, for example, an English sentence as a series of tokens and encodes it into a representation (we'll discuss what this is later). The decoder takes this representation and generates the output. For example, if the model is for translation, the output would be a Japanese sentence as tokens.

エンコーダーは入力、例えば、トークンの配列として表された英語の文を受け取り、それをある形に符号化して表現します（これが何か後ほど説明します）。デコーダーはこの表現を受け取り、出力を生成します。例えば、翻訳用のモデルであれば、日本語の文がトークンの列として出力されます。

# How the Transformer is Better
# Transformerの優れた点

Now that we've looked at the key concepts, we can understand their claim about the merit of the new architecture more accurately. The authors argue that Transformer achieves three major breakthroughs:

主な概念について見たので、新しいアーキテクチャの利点に関する主張をより正確に理解できます。著者たちは、Transformerが3つの点で革新的だと主張しています。

## Parallelization
## 並列化

> The Transformer allows for significantly more parallelization.

> Transformerは、より大幅な並列化を可能にする。

In RNNs, you had to wait for token <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>A</mi></mrow><annotation encoding="application/x-tex">A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span></span></span></span> to finish before processing token <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>B</mi></mrow><annotation encoding="application/x-tex">B</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.05017em;">B</span></span></span></span>. The Transformer processes the entire sequence in a more parallelized manner, taking full advantage of modern GPU hardware and making training significantly faster.

RNNでは、トークン<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>B</mi></mrow><annotation encoding="application/x-tex">B</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.05017em;">B</span></span></span></span>を処理する前に、トークン<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>A</mi></mrow><annotation encoding="application/x-tex">A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span></span></span></span>の処理が完了するのを待つ必要がありました。Transformerはシーケンス全体をより並列化された方法で処理し、現代のGPUハードウェアを最大限に活用して、トレーニングを大幅に高速化します。

## Long-Range Dependencies
## 長距離依存関係

Unlike other models like ConvS2S or ByteNet, where the number of operations needed to relate two distant signals grows based on the distance between them, the Transformer requires only a constant number of operations. This makes it significantly easier for the model to understand dependencies between distant positions.

ConvS2SやByteNetなどのモデルでは、離れた2つの信号を関連付けるために必要な操作の数が、その距離に応じて増加しますが、Transformerは一定数の操作だけで済みます。そのため、離れた位置間の依存関係をモデルが理解することがずっと簡単になります。

## Higher Translation Quality
## 高品質な翻訳

> The Transformer... can reach a new state of the art in translation quality after being trained for as little as twelve hours on eight P100 GPUs.

> Transformerは、8台のP100 GPU上でわずか12時間のトレーニングを行うだけで、翻訳品質において新たな最高記録に到達できる。

As a proof of the concept, on the WMT 2014 English-to-German and English-to-French translation tasks, the Transformer established new state-of-the-art results, achieving higher scores (BLEU) with a much shorter training time than previous models.

理論の実証として、WMT 2014の英語からドイツ語、英語からフランス語への翻訳タスクでTransformerは記録を更新し、それまでのモデルよりもはるかに短いトレーニング時間で、より高いスコア（BLEU）を達成しました。

## Next

Next, we'll go through the architecture overview.

次は、アーキテクチャの概要を見ていきましょう。

[Architecture Overview アーキテクチャの概要](/sketching-with-math-and-quasi-physics/reading/architecture-overview)
