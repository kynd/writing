---
title: "Discrete Mapping 離散的な写像"
slug: discrete-mapping
---
# Mapping elements
# 要素を対応させる

Mapping is defined in math as a rule that assigns each element from one set to an element in another set. It can be discrete, like assigning a character to another character ("A" → "α") or linking a Social Security number to a person. Or it can be a function like $y = ax + b$ that continuously transforms one value into another.

数学で写像（マッピング）とは、ある集合の各要素を別の集合の要素に対応させるルールとして定義されます。文字を別の文字に対応させる（「A」→「α」）、マイナンバーを個人に紐付けるといった離散的なものや、 $y = ax + b$といった関数のように、値を連続的に変換するものもあります。

[![](/images/discrete-mapping.jpg "75")](/images/discrete-mapping.jpg)

> 
> 
> 数学の本では写像と呼ぶのが一般的ですが、プログラミングなどコンピュータに関する場面では「マッピング」「マップする」という表現の方が多く使われます。写像とマップは同じ概念を指していますが、この関連性に気づかないまま使われることも少なくありません。このページでは、文脈に応じて写像とマッピングの両方を使いますが、同じ概念を指しています。

A literal example of discrete mapping is a substitution cipher. The idea is to replace characters with another set of characters or symbols so that only someone who knows the combination can read it. You might have played around with this in childhood, or read a Sherlock Holmes story, _The Adventure of the Dancing Men._

離散的な写像の具体的な例として代換式暗号があります。これは、文字を別の文字や記号に置き換えることで、組み合わせを知っている人だけが読めるようにする方法です。子供の頃にこれで遊んだことや、シャーロック・ホームズの「踊る人形」を読んだことがある方もいるでしょう。

The demo below generates a mapping from the 26 alphabet letters to another randomized set. You can click on the canvas to shuffle the cipher.

下のデモでは、26個のアルファベットを別のランダムな文字に対応させる写像を生成します。キャンバスをクリックすると暗号がシャッフルされます。

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="ZYzdzVL" data-user="kynd" data-preview="true"></p></div>

Set of all possible input values is called domain, and the set of all possible output values is called range. In this example, the domain and range are both the set of 26 alphabets.

可能な入力値のすべての集合を定義域、可能な出力値すべての集合を値域と呼びます。この例では、定義域と値域はどちらも26個のアルファベットの集合です。

Note that if you map more than two characters to the same character (e.g., A and B to Z), it becomes undecodable since you won't know which character Z should map back to. Also, you wouldn't want to have a character that maps from or to nothing. When every output has exactly one input, this mapping is called bijective.

複数の文字を同じ文字に対応させると（例：AとBをZに対応させる場合）、Zがどの文字に戻すべきか分からなくなるため、解読不可能になってしまいます。また、対応先がない文字があるのもまずいですね。全ての出力がただ1つの入力に対応する場合、この写像は全単射と呼ばれます。

### Injective Mapping
### 単射写像

A mapping is injective if each input maps to a unique output. No two inputs share the same output, but some outputs may be unused.

Example: If your domain is the 21 letters used in Italian (J, K, W, X, Y are only used for borrowed words), and the range is English 26 letters, 5 letters in the range will be unused.

写像が単射であるとは、入力それぞれが固有の出力に対応することを意味します。2つの入力が同じ出力を共有することはありませんが、使用されない出力が存在する可能性があります。

例：定義域がイタリア語で使用される21文字（J、K、W、X、Yは借用語にのみ使用）で、値域が英語の26文字である場合、値域の5文字は未使用となります。

### Surjective Mapping
### 全射写像

A mapping is surjective if every element in the output set has at least one corresponding input. The function covers the entire range, but multiple inputs can map to the same output.

Example: If your domain is German 30 letters including umlauts and ß, and the range is 26 alphabets, some German letters must share the same characters in English.

写像が全射であるとは、出力集合の各要素に対して少なくとも1つの入力が対応することを意味します。関数は値域全てをカバーしますが、複数の入力が同じ出力に対応することがあります。

例：定義域がウムラウトやßを含むドイツ語の30文字で、値域が26文字のアルファベットの場合、一部のドイツ語の文字は英語の同じ文字に対応することになります。

### Bijective Mapping
### 全単射写像

A mapping is bijective if it is both injective and surjective, meaning every output has exactly one input. This ensures reversibility, i.e., a function that can be undone.

Example: The same set of characters with no overlaps.

写像が全単射であるとき、その写像は、単射かつ全射であり、全ての出力にはちょうど1つの入力が対応します。これにより可逆性、つまり、関数の結果をもとに戻すことができることが保証されます。

例：重複のない同じ文字の集合。

# Hashing
# ハッシュ化

Simply mapping a character to another is not practically useful, as it is too weak as a cipher. Let's look at something used in reality. Hashing is a technique widely used in security, data integrity, and fast lookups, etc.

単に文字を別の文字に置き換える写像は、暗号として弱すぎて実用的ではありません。現実に使われている手法を見てみましょう。ハッシュ化は、セキュリティ、データの整合性の確認、検索の高速化などに広く使用されている技術です。

## What is a Hash?
## ハッシュとは

A hash function is a function that takes an input (any data, like text or a file) and produces a fixed-length output called a hash. Unlike direct mappings, hash functions are a one-way path, meaning given an input, they always produce the same hash, but no one can get the original input from the hash.

ハッシュ関数は、入力（テキストやファイルなど、あらゆるデータ）を受け取り、ハッシュと呼ばれる固定長の出力を生成する関数です。直接的な写像とは違いハッシュ関数は一方通行で、入力に対して常に同じハッシュを生成しますが、ハッシュから元の入力を復元することはできません。

This property is very useful. For example, a web service can store users' passwords as hashes instead of storing the original data and use them to verify when users try to log in. Even if someone steals the stored data, they cannot reproduce the passwords.

この特性はとても便利です。例えばWebサービスではユーザーのパスワードを元のデータとしてではなく、ハッシュとして保存し、ユーザーがログインする際の認証に使えます。たとえ誰かが保存されたデータを盗んでも、パスワードを復元することはできません。

Hashes are designed to be unique—not truly unique since they are usually shorter than the input, but practically unique enough. For example, a commonly used hash function called SHA-256 has $2^{256}$ possible values. Since this is an astronomically large number, the probability of two files having the same hash value is astronomically low (just for comparison, the number of atoms in the observable universe is about $10^{80} \approx 2^{265}$). Hashes are also designed to "avalanche," which means the output changes dramatically even with a tiny change in the input. This property makes hashes perfect for checking file integrity—you can simply compare the hashes to see if two files are identical. If someone changes even a single character, the hash will be completely different.

ハッシュは一意になるように設計されています。入力よりも短いため厳密には一意ではありませんが、実用上は十分な一意性があります。例えば、よく使われるSHA-256というハッシュ関数の可能な値は$2^{256}$個あります。これは天文学的に大きな数なので、2つのファイルが同じハッシュを持つ確率は天文学的に低くなります（比較のために、観測可能な宇宙の原子の数はおよそ$10^{80} \approx 2^{265}$です）。また、ハッシュは、入力を少し変えただけでも出力が大きく変わる、雪崩のような効果を持つように設計されています。この特性はファイルの整合性チェックに最適です。2つのファイルが同じかどうか確認するには、単にハッシュを比較すれば済みます。1文字でも変更があれば、ハッシュは完全に異なるものになります。

## A Simple Hash function
## シンプルなハッシュ関数

Let's try a very simple hash function using a polynomial rolling hash function. This is not as sophisticated or secure as SHA-256 (don't use this for protecting passwords), but you can get a feel for how it works.

多項式ローリングハッシュ関数を使ったとてもシンプルなハッシュ関数を試してみましょう。これはSHA-256ほど洗練されておらず安全性も高くないですが（パスワード保護には使わないように）、仕組みを理解する役に立ちます。

$H(s) = s_1 \times p^{(n-1)} + s_2 \times p^{(n-2)} + \dots + s_n \times p^0 \mod m$

-   $s_i $ are character codes,

-   $p$ is a prime number (e.g., 31),

-   $m$ is a large prime modulus (e.g., 1,000,000,009).

-   $s_i $ は文字コード、

-   $p$ は素数（例：31）、

-   $m$ は大きな素数の法（例：1,000,000,009）。

Try editing the text in the demo below and see how the hash changes unpredictably.

下のデモでテキストを編集して、ハッシュが予測できない仕方で変わるのを見てみましょう。

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="ZYEbwgo" data-user="kynd" data-preview="true"></p></div>
