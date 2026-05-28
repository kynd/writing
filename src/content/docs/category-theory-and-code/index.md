---
title: "Category Theory and Code 圏論とコード"
---
# About This Series
# このシリーズについて

So far I've tried reading several books on category theory, but I never quite got it. Here is why:

これまで圏論の本をいくつか読んでみましたが、自分には今ひとつピンと来ませんでした。なぜかというと、

1.  **The arguments are too abstract:** Concepts pile up without me being confident that my understanding is correct.

2.  **The concrete examples are too mathematical:** Without knowledge of other mathematical fields (like group theory or topology), it's hard to appreciate the benefits of applying category theory.

3.  **The limits of introductory books:** Many introductory books prioritize accessibility and stick to simple examples, which leaves the question "So what?" unresolved.

1.  **議論が抽象的すぎる：** 自分の理解が正しいのか自信が持てないまま、概念だけが積み上がっていく。

2.  **具体例が数学的すぎる：** 他の数学分野（群論や位相空間論など）の知識がないと、圏論を適用した時の有益性が実感しにくい。

3.  **入門書の限界：** 多くの入門書は、わかりやすさを優先して簡単な例に終始するため、かえって「それで、何が嬉しいの？」という疑問が解消されない。

So instead, I tried asking AI (Gemini) various questions to help my understanding, and in doing so, I realized that using programming code for concrete examples can be quite helpful.

そこで、理解を助けるためにAI（Gemini）にいろいろ質問をしてみたのですが、その中で具体的な例にプログラミングのコードを使うとかなり助けになることに気がつきました。

With code, we can discuss things more concretely, intuitively, and rigorously (for a certain kind of reader at least) without requiring advanced mathematical knowledge.

コードを使えば、高度な数学の知識を前提としなくても、（ある種の読者にとっては）より具体的で、直感的で、かつ厳密な議論が可能です。

In this series, I'll try compiling a code-based interpretation of category theory that I gained through dialogues with AI as a mathematics beginner.

このシリーズでは、数学初心者である私がAIとの対話を通じて得たコードによる圏論の解釈をまとめていきます。

> 
> 
> Since this is written by an amateur and AI, I can't guarantee the accuracy of the content. However, I hope it can serve as an entry point for those like me who are interested but don't know where to begin.
> 
> 素人とAIが書いてるので内容の正しさは保証しません。ですが、「興味はあるけれど、どこから踏み込めばいいかわからない」という自分と同じような方のための導入になれば幸いです。

# What is Category Theory?
# 圏論とは

Before diving into the details, let's think a bit about what category theory is and what makes it worthwhile. I'm still a beginner who just started learning, so I can't say things like "Learn this and thank me later”. But I hope I can still share what I feel is cool.

細かい内容に進む前に、圏論とは何で、その何が嬉しいのかを少し考えてみましょう。  
私はまだ勉強を始めたばかりの初心者なので、「これを学べば捗るよ！」みたいなことは言えませが、なんだか面白いなという感覚を共有できればと思います。

## Extracting Structure
## 構造の抽出

Have you ever had a moment while coding where you thought, "This feels similar to a structure I wrote somewhere else before"? For example, stacking filters in image processing and building a data transformation pipeline. Or constructing a music sequence.  
At first glance, they're code from completely different domains, yet there's something about the feel of combining things to create something new that's somehow shared. Category theory seems to be a discipline for extracting these common forms that transcend domains.

コードを書いていて、「これ、前にも別の場所で書いた構造に似ているな」と感じる瞬間はありませんか？  
例えば、画像処理のフィルタを積み重ねていく工程と、データの変換パイプラインを組むこと。あるいは、音楽のシークエンスを構築すること。  
一見すると全く違うジャンルのコードなのに、何かを組み合わせて、新しいものを作るという手触りがどこか共通している。圏論は、そんなジャンルを超えた共通の形を抽出するための学問だと言えそうです。

## The Joy of Abstraction
## 抽象化する楽しさ

Whether in programming or design, finding common patterns between different problems, organizing things, and searching for efficient solutions is incredibly important and enjoyable work.  
Many disciplines and technologies dissect their subjects into fine detail to examine "what they're made of (internal structure)." But category theory does the opposite—it raises the level of abstraction way up and looks only at "how the subject relates to the outside world." In other words, it defines subjects not by their own substance, but solely by their relationships with other things.

プログラミングでもデザインでも、違う問題の間に共通するパターンを見つけ、物事を整理したり効率的な解法を探したりすることは、とても重要で、そして楽しい作業です。  
多くの学問や技術は、対象を細かく分解して「それが何でできているか（内部構造）」を調べます。しかし、圏論はその逆で、ぐーっと抽象度を上げて、対象が「外の世界とどう関わっているか」だけを見ます。言い換えれば、対象をそれ自体の性質ではなく、他のものとの関係性だけで定義していくのです。

By discarding the details and seeing only the essential connections, various things that seemed discrete can now be discussed with the same simple principle and common language. Realizing that "in the end, this and that were the same thing" is the greatest reward and the most enjoyable point in learning category theory I feel like.

細部を切り捨てて、本質的なつながりだけを見ることで、バラバラに見えた色々なことが、同じ一つのシンプルな原理と共通の言葉で語れるようになる。  
「結局、これとあれは同じことだったんだ」と気づけること。それが、圏論を学ぶ上での一番の醍醐味であり、楽しいポイントなのかなと感じています。

# Index
# 目次

[Everything as an Arrow すべては矢印](/category-theory-and-code/everything-as-an-arrow)

[Category Basics 圏の基本](/category-theory-and-code/category-basics)

[Products, Coproducts, Universality and Duality 積、余積、普遍性と双対性](/category-theory-and-code/products-coproducts-universality-and-duality)

[Functor 関手](/category-theory-and-code/functor)

[Natural Transformation 自然変換](/category-theory-and-code/natural-transformation)

[Double Dual 二重双対](/category-theory-and-code/double-dual)

[Generics and Category Theory ジェネリクスと圏論](/category-theory-and-code/generics-and-category-theory)

[Category Theory and Functional Programming 圏論と関数型プログラミング](/category-theory-and-code/category-theory-and-functional-programming)

[Monads モナド](/category-theory-and-code/monads)
