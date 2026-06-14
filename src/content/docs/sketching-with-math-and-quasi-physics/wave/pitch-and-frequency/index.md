---
title: "Pitch and Frequency 音高と周波数"
slug: pitch-and-frequency
---
Sound is a vibration that travels through a medium such as a solid, liquid, or gas. Higher sound corresponds to higher **frequency** and lower sound corresponds to lower frequency. Frequency is often measured in hertz (Hz). One hertz means that an event is repeated once per second, or one cycle per second in the case of waves.

音は、固体、液体、気体などの媒体を伝わる振動です。高い音は高い周波数に対応し、低い音は低い周波数に対応します。周波数はヘルツ（Hz）という単位で測られます。1ヘルツは、ある事象が1秒間に1回繰り返されることを意味し、波の場合は1秒間に1回振動することを表します。

The note A, near the center of the piano and slightly to the right, is usually tuned to 440 Hz. Most music today is based on this A=440 Hz, although classical and other historical music may use different settings. A=440 is also registered as ISO 16.

ピアノの中央付近、少し右側にあるラ（A）の音は大抵440Hzに調律されます。クラシックや古典音楽では異なる設定が使われることもありますが、現代の音楽のほとんどはこのA=440Hzを基準にしています。A=440はISOにもISO 16として登録されています。

A note one octave higher doubles in frequency. If the frequency is tripled and lowered one octave, it is five degrees up or seven semitones up, i.e., E counting from A, or G counting from C. If you multiply the frequency by 5 and lower it by 2 octaves, it will be 3 degrees up or 4 semitones up, i.e., the note C# if you count from A and E if you count from C.

1オクターブ上の音は周波数が2倍になります。周波数を3倍にして1オクターブ下げると5度上、もしくは半音で7つ上、つまりAから数えるとEの音、Cから数えるとGの音になります。周波数を5倍にして2オクターブ下げると、3度上、もしくは半音で4つ上、つまりAから数えるとC#、ドから数えるとEの音になります。

The way how overlapping **pitches** sound is related to the ratio of frequencies, and in general, the simpler the relationship is, the less muddy it sounds (which is not good or bad by itself).

音程が重なった時の聞こえ方には、周波数の比が関係していて、一般にその関係が単純であればあるほど濁っていないように聞こえます（良し悪しには関係なく）。

[![](/images/pitch-and-frequency.png "50")](/images/pitch-and-frequency.png)

# Just Intonation
# 純正調

One of the tunings based on this simple whole number ratio is called just Intonation. As shown below, just Intonation is composed of notes with frequencies that can be expressed as simple fractional ratios from a certain reference note.

この単純な整数比に基づいた調律の1つが純正調です。純正調は下に示すようにある基準の音からシンプルな分数の比で表すことのできる周波数の音で構成されます。

Major 2nd（長2度）: $9/8= 3^2 / 2^3 $

Major 3rd（長3度）: $5/4= 5 / 2^2 $

Perfect 4th（完全4度）: $4/3= 1 / \cfrac {3} {2^2} $

Perfect 5th（完全5度）:  $3 / 2$

Major 6th（長6度）: $5 / 3 = \cfrac 5 4 \cdot \cfrac 4 3$

Major 7th（長7度）: $15 / 8 = \cfrac 5 4 \cdot \cfrac 3 2$

Octave（オクターブ）: $2 / 1$

With the [WebAudio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API), you can create waveforms and play sounds in real time in the browser.

[WebAudio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)を使うとブラウザ上でリアルタイムに波形を作り出して音を鳴らすことができます。

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="gRBveJ" data-user="kynd" data-preview="true"></p></div>

# Equal Temperament
# 平均律

While just Intonation sounds beautiful as long as it is played within a certain scale, problems arise when one tries to transpose it within a piece of music. For example, the interval from the major second to the major sixth in a certain key would be a perfect fifth, but the ratio between their frequencies is not 3/2 in just intonation.

純正調は一定の音階の中で演奏している限りは綺麗に音が響くのですが、曲の中で転調を行おうとすると問題が生じます。例えばある調の長2度の音から長6度の音までは完全5度になりそうですが、純正調ではその周波数の比は3/2にはなりません。

From C (or you can start from any note), 5 degrees up is G, 5 degrees up is D, 5 degrees up is A..., and it comes back to C again. This is a basic concept in music theory called the circle of fifths. For example, the five degrees relationships are important when thinking about chord progressions. Also, by looking at the sequence of notes on this circle, we can find notes in common scales (for example, the sequence from F to B has all the notes in C major scale).

Cから（どの音からはじめても良いのですが）5度上はG、その5度上はD、さらに5度上はAと上がっていくとぐるっと回って下のCに戻ってくることができます。これは五度圏（サークル・オブ・フィフス）と呼ばる音楽理論の基本的なコンセプトで、例えばコード進行を考えるときにはこの5度の関係が重要になります。またこの円の上連続する音の並びを見ると、一般的な音階に含まれる音を見つけることができます（例えばFからBまでの並びにはハ長調、Cメジャースケールの音が全て含まれています）。

[![](/images/pitch-and-frequency-1.png "50")](/images/pitch-and-frequency-1.png)

<div></div>

According to the calculation above, the fifth degree is 3x and the octave is 2x, so if you keep multiplying by 3, to the power of 12 ($3^{12}$), it should coincide with some octave higher ($2^n$) of the same note somewhere, but there is no integer $n$ that satisfies $3^{12}$ = ${2^n}$ . Trying to construct a scale using integer ratios will inevitably run into a discrepancy somewhere.

上の計算によれば5度は3倍、オクターブは2倍なので、3倍、3倍と続けて12乗すれば（$3^{12}$)どこかで同じ音の何オクターブか上（2$^n$）と一致するはずですが、$3^{12}$ = $2^n$ を満たす整数$n$はありません。整数比で音階を構成しようとするとどうしてもどこかでズレが生じてしまいます。

The twelve-tone equal temperament is one octave divided into twelve equal semitones. The frequency ratio of two adjacent tones is the 12th root of 2 ($2^{1/12} \approx1.059463$). The ratios between notes will not be simple, but instead the ratios will be exactly the same starting from any note, so that transposing or using chromatic notes intensely will not break the system.

12音平均律は、1オクターブを12個の半音に均等に分けたものです。隣り合う2つの音の周波数比は、2の12乗根（$2^{1/12} \approx1.059463$）になります。音の間の比はシンプルな値にはなりませんが、その代わりにどの音から始めても全く同じ比率が得られるので、転調したり半音階を多用しても破綻することがありません。

<div class="codepen-wrap"><p class="codepen" data-height="420" data-default-tab="result" data-slug-hash="EXdQEb" data-user="kynd" data-preview="true"></p></div>

[Sound visualization 音の視覚化](/sound-visualization)
