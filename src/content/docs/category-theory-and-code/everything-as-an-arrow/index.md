---
title: "Everything as an Arrow すべては矢印"
slug: everything-as-an-arrow
---
# Defining Objects by Relationships
# 対象を関係で定義する

Usually, when we try to understand something, we describe things by listing their properties. For example, water is a molecule composed of hydrogen and oxygen, you can drink it, it solidifies at 0 degrees, and so on.

私たちは普段、何かを理解しようとするとき、その性質を列挙することで物事を記述しようとします。例えば水とは、水素と酸素が結びついた分子で、飲むことができて、0度で固体になり、といった具合です。

In category theory, rather than looking at individual things concretely, we try to grasp the whole picture abstractly by a particular relationship among many things. For example, let's take the relationship of "being an ingredient for."

圏論では一つのものを具体的にみるのではなく、沢山のものどうしのあるひとつの関係に注目することで、全体を抽象的に捉えようとします。例えば「材料になる」という関係について考えてみましょう。

-   Limestone → Cement

-   Cement → Concrete

-   Water → Concrete

-   Water → Bread

-   Flour → Bread

-   Yeast → Bread

For example, making concrete requires water and cement, and cement requires limestone. Making bread also requires water, along with flour, yeast, and other ingredients. Let's write out these relationships with arrows.

例えばコンクリートを作るには水とセメントが必要で、セメントを作るには石灰石が要ります。パンを作るのにも水が必要で、他には小麦粉やイーストなどが入ります。この関係を矢印で書いてみましょう。

-   石灰石 → セメント

-   セメント → コンクリート

-   水 → コンクリート

-   水 → パン

-   小麦粉 → パン

-   イースト → パン

[![](/images/source-4.png "75")](/images/source-4.png)

[Source](https://colab.research.google.com/drive/1PLr74pG4RC8qYrXjMoTF4IIA7eqESEeY#scrollTo=pEMytpMuEt22)

This diagram was made with Python's graphviz library. You can find the [source code](https://colab.research.google.com/drive/1PLr74pG4RC8qYrXjMoTF4IIA7eqESEeY#scrollTo=pEMytpMuEt22) on Google Colab.

この図はPythonのgraphviz ライブラリを使って描きました。Google Colab に[ソース](https://colab.research.google.com/drive/1PLr74pG4RC8qYrXjMoTF4IIA7eqESEeY#scrollTo=pEMytpMuEt22)を置いておきます。

```python
import graphviz

# Create a directed graph
dot = graphviz.Digraph(comment='Material Category')

# Define Nodes (Objects)
nodes = ['Limestone', 'Cement', 'Concrete', 'Water', 'Flour', 'Yeast', 'Bread']
for node in nodes:
    dot.node(node)

# Define Edges (Morphisms)
dot.edge('Limestone', 'Cement')
dot.edge('Cement', 'Concrete')
dot.edge('Water', 'Concrete')
dot.edge('Water', 'Bread')
dot.edge('Flour', 'Bread')
dot.edge('Yeast', 'Bread')

dot.render('material_category', format='png')
dot
```

# Points and Arrows
# 点と矢印

To express this "relationship," category theory begins with just two tools.

-   **Objects**: The things themselves. Since we don't care about their concrete attributes, they are represented as mere points.

-   **Morphisms**: Arrows extending from point to point. They represent a specific relationship. Within a single category, all arrows represent the same relationship.

この「関係」を表現するために、圏論ではたった2つの道具から始めます。

-   **対象（Object）**： 対象となるものたち。ただし具体的な属性は気にしないのでただの点として表される。

-   **射（Morphism）**： 点から点へ伸びる矢印。ある特定の関係を表す。ひとつの圏の中では全ての矢印は同じ関係を表す。

What's important here is that even without looking inside of the point called "water" (like its molecular structure), we can learn much about what it is simply by observing its position within this diagram. In the world of category theory, identity is determined not by internal content but by how it relates to the outside.

ここで重要なのは、「水」という点の内部（分子構造など）を一切見なくても、この図の中での立ち位置を見れば、それが何であるかについて多くを知ることができることです。圏論の世界では、正体は中身ではなく外との関わり方で決まります。

# Ordered Sets
# 順序集合

  
Let's look at a little more mathematical example. An ordered set is a collection where there is a rule between elements about "which comes first or equal." Here, arrows are the relationship "$\le$ (less than or equal to)." For instance, if we think of the world of numbers $\{1, 2, 3\}$ as a category, the arrows would look like as below.

もう少し数学らしい例を見てみましょう。順序集合とは、要素の間に「どちらが先か、あるいは等しいか」というルールがある集まりのことです。ここでは、矢印は「$\le$（以下である）」という関係です。例えば、数字の $\{1, 2, 3\}$ という世界を圏として捉えると、矢印は以下のようになります。

$1 \to 2 \to 3$

In this world, arrows don't mean "ingredients" but rather "size comparison." But in a diagram, we can draw it with just points and arrows, the same as in the ingredients example. Whether it's alphabetical order, height order, or regardless of the number of elements (even infinite), these sets can all be arranged in a single line, and there's a relationship where if $A \to B$ and $B \to A$, then $A = B$. This is called a total order.

この世界では、矢印は「材料」ではなく「大きさの比較」を意味しています。しかし、図（ダイアグラム）としては、材料の例と同じように点と矢印だけで描けます。アルファベット順、背の順、要素の数に関係なく（無限でも良い）これらの集合はすべて一直線に並べることができ、$A \to B$ かつ $B \to A$ ならば、$A = B$ であるという関係があります。これを全順序（Total Order）と呼びます。

There are also cases where not all elements have an ordering relationship with each other, but some do. For example, the inclusion of sets or the divisibility of numbers have a unique direction when any two elements are related. This is called a partial order, and unlike a total order, it becomes a picture with branches when pictured as a diagram. A total order can also be thought of as a partial order where there is no branching, i.e., any two elements are comparable.

全ての要素どうしには順序がつかなくてもある特定の組み合わせには順序がつく場合があります。例えば集合の包含関係や整除関係は任意の2つの要素に関係があれば一意に向きが決まります。これを半順序（Partial Order）と呼び、図を書くと全順序と違い枝分かれのある絵になります。全順序は半順序でかつ枝分かれがない、つまり任意の2つの要素が比較可能な場合とも言えます。

## Power Set with Inclusion Relation
## 包含関係による集合の集合（べき集合）

Consider collecting all subsets of a certain set (for example, $\{a, b, c\}$). When we define the arrows as the inclusion relation ($\subseteq$), it becomes an ordered set.

-   **Objects:** $\emptyset, \{a\}, \{b\}, \{a, b\} \dots$

-   **Morphisms:** $A \subseteq B$ then $A \to B$

ある集合（例えば $\{a, b, c\}$）のすべての部分集合を集めたものを考えます。このとき、矢印の意味を包含関係（$\subseteq$）と定義すると順序集合になります。

-   **点（対象）：** $\emptyset, \{a\}, \{b\}, \{a, b\} \dots$

-   **矢印（射）：** $A \subseteq B$ ならば $A \to B$

## Divisibility Relation整除関係

In the set of natural numbers, we define arrows as "$x$ divides $y$ ($x | y$)." instead of the usual size comparison ($1 \le 2 \le 3$).

-   $2 \to 4$ (2 divides 4)

-   $2 \to 6$ (2 divides 6)

-   $3 \to 6$ (3 divides 6)

-   No arrow between 2 and 3 (because they do not divide each other)

自然数の集合において、通常の大小比較（$1 \le 2 \le 3$）ではなく、「$x$ が $y$ を割り切れる（$x | y$）」ことを矢印の定義にします。

-   $2 \to 4$ （2は4を割り切る）

-   $2 \to 6$ （2は6を割り切る）

-   $3 \to 6$ （3は6を割り切る）

-   2と3の間に矢印はない（互いに割り切れないため）

As an exercise, let's write the inclusion relations of all subsets of the set $A = \{1, 2, 3\}$ in Python.

練習として集合 $A = \{1, 2, 3\}$ の全ての部分集合の包含関係をPythonで書いてみましょう。

[![](/images/source-5.png "50")](/images/source-5.png)

[Source](https://colab.research.google.com/drive/1PLr74pG4RC8qYrXjMoTF4IIA7eqESEeY#scrollTo=pEMytpMuEt22)

```tsx
import itertools
import graphviz
from IPython.display import display

def get_subsets(s):
    """Generates all subsets (the power set) of a set."""
    subsets = []
    for r in range(len(s) + 1):
        for combo in itertools.combinations(s, r):
            subsets.append(set(combo))
    return subsets

# Define set A
A = {1, 2, 3}
all_subsets = get_subsets(list(A))

# Initialize Graphviz Digraph
# 'rankdir=BT' makes it a Hasse diagram (Bottom-to-Top)
dot = graphviz.Digraph(comment='Subset Lattice of {1, 2, 3}')
dot.attr(rankdir='BT') 

# Create nodes
# We use a string representation of the sorted set as the unique ID
for s in all_subsets:
    node_id = str(sorted(list(s)))
    label = str(set(s)) if s else '∅'
    dot.node(node_id, label)

# Create edges for the subset relationship (Morphisms)
# We only draw immediate subsets to keep the Hasse diagram clean.
for s1 in all_subsets:
    for s2 in all_subsets:
        # If s1 is a subset of s2 and s2 has exactly one more element
        if s1.issubset(s2) and len(s2) == len(s1) + 1:
            dot.edge(str(sorted(list(s1))), str(sorted(list(s2))))

# Render and Display
# format='png' ensures it generates a clean image file in your Colab filespace
dot.render('subset_lattice', format='png', cleanup=True)
display(dot)
```

> 
> 
> In category theory, the category of all sets is one of the most fundamental and important categories, and it is called **Set** in bold type. The objects of **Set** are all sets, and the morphisms are all mappings (functions) from sets to sets. What makes **Set** powerful is the fact that any mapping from set to set—or in programming, whether it's a simple calculation, a complex simulation, or a sophisticated algorithm—as long as it "returns a unique output for a given input," it must exist somewhere in **Set** as a "morphism."
> 
> 圏論においてはすべての集合の圏が最も基本的かつ重要な圏の1つで、太文字の **Set** と言う名前で呼ばれています。**Set** の対象はすべての集合で射は集合から集合へのすべての写像（関数）です。**Set** が強力なのは、集合から集合への写像、プログラムで言えばどんなに簡単な計算から、複雑なシミュレーション、高度なアルゴリズムを思いついたとしても、それが「入力に対して一意に出力を返す」ものである限り、**必ず Set** の中のどこかに「射」として存在している、という点にあります。

# Propositions and Proofs
# 命題と証明

As another example, let's see the arrows as "logical proof (implies)."

-   **A:** Is an equilateral triangle

-   **B:** Has three equal angles

-   **C:** Has two equal angles (property of isosceles triangles)

-   **D:** Has equal base angles

-   **E:** Has an axis of symmetry

もうひとつの例として、矢印を「論理的な証明（ならば）」だと考えてみます。

-   **A：** 正三角形である

-   **B：** 三つの角が等しい

-   **C：** 二つの角が等しい（二等辺三角形の性質）

-   **D：** 底角が等しい

-   **E：** 対称軸を持つ

These are connected by arrows representing mathematical proofs.

-   $A \to B$ (obvious from the definition)

-   $A \to C$ (if three angles are equal, then naturally two angles are also equal)

-   $B \to D$ (once the angle sizes are determined, the relationship of base angles is also determined)

-   $C \to D$ (from the isosceles triangle theorem)

-   $C \to E$ (an isosceles triangle is symmetric about the angle bisector of the apex angle)

これらは数学的な証明という矢印で結ばれます。

-   $A \to B$ （定義より明らか）

-   $A \to C$ （三つの角が等しければ、当然2つの角も等しい）

-   $B \to D$ （角の大きさが決まれば、底角という関係も決まる）

-   $C \to D$ （二等辺三角形の定理より）

-   $C \to E$ （二等辺三角形は頂角の二等分線で対称である）

[![](/images/source-6.png "75")](/images/source-6.png)

[Source](https://colab.research.google.com/drive/1PLr74pG4RC8qYrXjMoTF4IIA7eqESEeY#scrollTo=pEMytpMuEt22)

# The Axioms of Categories
# 圏の公理

By the way, did you notice that in all the examples above, if there is a morphism $A \to B$ and a morphism $B \to C$, then $A \to C$ also holds? For example, if limestone is a material for cement, and cement is a material for concrete, then limestone is a material for concrete. Also, for every object, we can think of a morphism to itself, like 1 $\le$ 1 (this may seem odd for materials, but if you think of concrete as containing concrete as a component, it represents something natural: doing nothing—simply using concrete as is.).

ところで上の例では全て$A \to B$ という射と $B \to C$ という射があるなら、必ず $A \to C$ も言えることに気がついたでしょうか。例えば、石灰石がセメントの材料で、セメントがコンクリート材料であれば、石灰石はコンクリートの材料です。また全ての対象に対して 1 $\le$ 1 というように自分自身への射を考えることができます（材料の場合は違和感があるかもしれませんが、コンクリートはコンクリートを構成要素として含むと考えれば、これは何もしない、コンクリートをそのままコンクリートとして使うという当たり前のことを表しています）。

There are only two rules (axioms) for constructing a category.

1.  Morphisms are composable  
    When there is $A \to B$ (morphism $f$) and $B \to C$ (morphism $g$), their composition $A \to C$ (morphism $g \circ f$) exists.

2.  Identity morphisms exist  
    For every object $A$, there must be an “arrow that does nothing” to itself, $id_A: A \to A$.

圏（Category）を構成するためのルール（公理）は、実はたった2つしかありません。

1.  射の合成 (Composition) ができる  
    $A \to B$（射 $f$）と $B \to C$（射 $g$）があるとき、それらを合成した $A \to C$（射 $g \circ f$）という矢印が必ず存在する。

2.  恒等射 (Identity) がある  
    すべての対象 $A$ に対して、自分自身へ戻る「なにもしない矢印」$id_A: A \to A$ が必ず存在する。

> 
> 
> The notation $g \circ f$ may seem backwards, but you can remember it by thinking of $g$ and $f$ as functions, like $g(f())$.
> 
> $g \circ f$ という書き方は順番が逆に思えるかもしれませんが、$g$と$f$を関数だと思って$g(f())$なのだと考えると覚えられるでしょう。

# What Abstraction Can Help us See
# 抽象度を上げると何が見えるか

We've looked at several examples: materials, order, and proofs in geometry. To reiterate, in category theory we ignore concrete details and focus only on the relationships indicated by morphisms, treating things as essentially the same if they have the same arrow structure. For example, if there is some unknown proposition X that has exactly the same pattern of incoming and outgoing arrows as an isosceles triangle, then that X can be treated as "essentially equivalent to an isosceles triangle."  

材料、順序、そして幾何学の証明といくつかの例をみてきました。繰り返しになりますが圏論では具体的なものは無視して、射によって示される関係だけに注目し、矢印の構造が同じであれば実質的に同じものとして扱います。例えば、もしある未知の命題 X があって、それが二等辺三角形と全く同じ矢印の出入りを持っているなら、その X は実質的に「二等辺三角形と同等なもの」として扱えます。

In fact, all the examples given above—the category of materials, total orders, partial orders, and the category of propositions and proofs—are all partial orders, and in that sense can be considered to have the same properties.

実は上に挙げた全ての例、材料の圏、全順序、半順序、命題と証明の圏は全て半順序になっていて、その意味で同じ性質を持つと考えられます。

> 
> 
> Strictly speaking, if the category of materials contains loops (e.g., wood → paper, paper → recycled paper), that category is called a preorder. Every partially ordered set is a preordered set, but the converse does not hold.
> 
> 厳密にいうともし材料の圏がループを含むなら（例えば木材 → 紙、紙 → 古紙）その圏は前順序と呼ばれます。全ての半順序集合は前順序集合ですがその逆は成り立ちません。

Even without knowing the contents, if the behavior within the network is the same, we regard them as the same thing. The interest and essence of category theory lies in finding common patterns among seemingly different things by looking at arrows, and being able to make claims based on those patterns.

中身を知らなくても、ネットワークの中での振る舞いさえ同じなら、それは同じものだとみなす。矢印を見ることによって一見異なるものの間に共通のパターンを見つけ、何かを主張できるようになることが圏論の面白さであり本質です。

In the following pages, let's look more deeply at the structure of these arrows (morphisms).

続くページではこの矢印（射）の構造についてより深くみていきましょう。

> 
> 
> After hearing the discussion so far, some of you may be thinking, "Isn't that just a graph?" Indeed, these diagrams with points and arrows are graphs.
> 
> However, there is a crucial difference in focus between category theory and graph theory.
> 
> -   **Graph theory**: excels at analyzing "the shape of the network itself," such as the number of connections and density.
> 
> -   **Category theory**: excels at working with mathematical structures, such as rules for combining arrows to form new arrows and identifying shared patterns across different networks.
> 
> The differences become clearer as you learn various concepts such as "composition" on the following pages.
> 
>   
> ここまでの話を聞いて、「それは単なるグラフではないか？」と思った方もいるかもしれません。実際、これらの点と矢印のダイアグラムはグラフです。
> 
> しかし、圏論とグラフ理論には、決定的な関心の違いがあります。
> 
> -   **グラフ理論**：つながりの数や密度など、ネットワークそのものの形を分析するのが得意。
> 
> -   **圏論**：矢印を合成して新しい矢印を作るというルールや、別のネットワークとの共通点を探す、数学的な構造を扱うのが得意。
> 
> 続くページで合成などの様々な概念を学ぶと、より違いがはっきりとわかるようになります。

[Category Basics 圏の基本](/category-basics)
