---
title: "Visualizing Graphs グラフの可視化"
---
In a mathematical sense, graphs are just a collection of nodes connected by edges, and how you draw them does not change the data model itself. But for people to read the data, the rendering has a huge impact.

数学的には、グラフはノードとそれらを結ぶ辺（edge）の集まりにすぎず、描き方を変えてもデータモデル自体は変わりません。しかし、人が読み取るうえでは、見た目（レンダリング）が与える影響はとても大きいです。

> 
> 
> “Graph” is an overloaded word. It can mean a plot of a function like <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>y</mi><mo>=</mo><mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi></mrow><annotation encoding="application/x-tex">y=ax+b</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">a</span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal">b</span></span></span></span>, or a graph in graph theory, which is a network made up of nodes and edges. This page focuses on the network version of a graph.
> 
> 「グラフ（graph）」という言葉には複数の意味があります。<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>y</mi><mo>=</mo><mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi></mrow><annotation encoding="application/x-tex">y=ax+b</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">a</span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal">b</span></span></span></span> のような関数の“グラフ（プロット）”を指すこともあれば、グラフ理論でいう、ノードと辺からなるネットワークを指すこともあります。このページではネットワークとしてのグラフに焦点を当てます。

# Types of graphs
# グラフの種類

The structure of the graph matters a lot for how you draw it.

グラフの構造は、描き方に大きく影響します。

In a basic graph, nodes don’t even have to be linked. You can have random islands with no way to get from one to the other. A connected graph is just a special case where every node has at least one path to every other node.

基本的なグラフでは、ノード同士が必ずしもつながっている必要はなく、互いに行き来できない島がランダムに存在することもあります。連結グラフは、すべてのノードが少なくとも 1 本の経路で他のノードへ到達できる特別な場合です。

Then you have trees, which are a subset of connected graphs but without any loops. That means there’s exactly one way to get from point A to point B.

木（ツリー）は、連結グラフのうちループ（閉路）がないもので、つまり A から B へ行く道がただ 1 通りしかありません。

A star graph is a special case of a tree where there is a single central node that connects to all other nodes, and there are no other connections. A ring graph is a graph where all the nodes have edges to exactly two nodes, making a single loop. A ring is connected, but it is not a tree.

スターグラフは、ツリーの特殊な形で、中心ノードがすべてのノードにつながり、それ以外の接続がない。リンググラフは、全てのノードがちょうど 2 つのノードとつながり、1つの輪（ループ）を作るグラフです。リングは連結ですが、ループがあるためツリーではありません。

> 
> 
> A family tree is not a tree in this sense. Can you see why?
> 
> 家系図は、この意味でのツリーではありません。なぜでしょう。

The demo below lets you generate different types of data structures and choose different layout methods to visualize them.

下のデモでは、さまざまな種類のデータ構造を生成し、それらを描くためのレイアウト手法を選ぶことができます。

<div class="codepen-wrap"><iframe title="CodePen" src="https://codepen.io/kynd/embed/yyVydXw?default-tab=result" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>

# Layout methods
# レイアウトの手法

## Force-Directed Layout
## 力学レイアウト

One thing to avoid when drawing a graph is letting too many nodes and edges overlap or cluster too tightly. We usually want to spread them out roughly evenly.

グラフを描くときはたいてい、ノードや辺が重なりすぎたり、狭い場所に密集しすぎたりしないよう、全体がだいたい均等に散らばるのが望ましいでしょう。

The force-directed layout does this by treating the graph as a physical system. Nodes act like charged particles that repel each other, while edges act like springs that pull connected nodes together until the system reaches a good balance.

力学（フォース）レイアウトでは、グラフを物理システムとして扱うことでこの問題を解決します。ノードは電荷を持つ粒子のように互いに反発し、エッジ（辺）はバネのように、つながったノード同士を引き寄せます。こうして全体が良いバランスに落ち着くまで動き続けます。

## Circular Layout
## 円形レイアウト

Nodes are placed at equal intervals along a circle. This is an obvious choice for a ring, though it can be inefficient for a large graph because it leaves too much empty space in the middle. This layout is more effective when you want to show connectivity between different groups without implying any hierarchy between them.

円形レイアウトでは、ノードを円周上に等間隔で配置します。リング構造に使うのは自然ですが、グラフが大きい場合は中央の空きが大きくなり、非効率になることもあります。このレイアウトは、すべてのノードを並列に扱い、階層関係を暗示せずにグループ同士のつながりを見たい場合に向いています。

## Hierarchical (Tree) Layout
## 階層（ツリー）レイアウト

This layout organizes data into a branching tree, typically starting from a single origin point and arranging nodes into ranks or levels based on their distance from the root.

階層（ツリー）レイアウトでは、データを枝分かれする木として整理します。通常は 1 つの起点から始めて、その根っこからの距離に応じてノードをレベルごとに配置します。

> 
> 
> For simplicity, this demo disables the tree layout unless the selected data is a tree or a star.
> 
> 簡単のため、このデモでは、選択したデータがツリーまたはスターでない場合、ツリーレイアウトを選べないようにしています。
> 
> In the real world, trees often have exceptions. For example, a reporting chain in a large company may include dotted-line relationships, where one person has multiple managers. This means it is not a tree in the strict sense, but we can still draw it as a tree with a few cross-links.
> 
> 現実のツリー構造には、例外が生じることがよくあります。たとえば大企業の組織図では、兼務などで、1人に複数の上長がいる場合があります。これは厳密にはツリーではありませんが、ツリーに横断する線を追加したものとして描くことはできます。

# Changing the perspective
# 視点を変える

The same graph structure can be drawn in different ways. Your choice of layout can represent different perspectives.

同じグラフ構造でも、描き方を変えることができます。どのレイアウトを選ぶかは、どんな視点を示したいかによります。

In the demo, the Force-Directed and Circular layouts are fluid. You can drag nodes to move them or change the order.

このデモの力学レイアウトと円形レイアウトでは、ノードをドラッグして位置を自由に動かしたり、順番を入れ替えたりできます。

One of the key aspects of visualization is having a Center of Focus. If you are drawing relationships between characters in a drama, you might put the main protagonist at the center. In a tree, the choice of root is also important (which species is the common ancestor, or who is the boss?).

可視化の重要なポイントの 1 つは、視点の中心を定めることです。たとえばドラマの登場人物の関係図なら、主人公を中央に置きたいでしょう。ツリーの場合も、どのノードをルートにするかが重要です（どの種が共通の祖先なのか、誰がボスなのか、など）。

This focal point is independent of the connection structure. Any node can be the center, the top, or the root, but the same graph can convey very different messages.

この中心点は接続構造そのものとは独立しています。どのノードを中心や最上部、あるいはルートとして選ぶかによって、同じグラフでも伝わるメッセージは大きく変わり得ます。
