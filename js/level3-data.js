/* ============================================
   Level 3: 雑談を広げる技術
   ============================================ */
const LEVEL3_DATA = {
    id: 3,
    title: "雑談を広げる技術",
    icon: "🔄",
    description: "リアクション、質問力、共感、話題転換など、会話を自然に広げて盛り上げるための実践テクニックを学びます",
    modules: [
        {
            id: 301,
            title: "リアクション力 — 相手が話したくなる反応",
            duration: "12分",
            content: `
<h2>リアクションが会話を動かす</h2>
<p>雑談において、<strong>話す力</strong>以上に重要なのが<strong>リアクション力</strong>です。相手の話に対するあなたの反応次第で、相手が「もっと話したい」と思うか「話すのをやめよう」と思うかが決まります。優れたリアクションは、会話の潤滑油であり、相手の自己肯定感を高める効果があります。</p>

<div class="info-box tip">
<div class="info-box-title">ポイント</div>
リアクションは「聞いていますよ」「あなたの話に興味がありますよ」というメッセージです。適切なリアクションができれば、自分から話題を振るのが苦手でも会話上手になれます。
</div>

<h3>感嘆詞のバリエーションを増やそう</h3>
<p>日本語には豊富な感嘆詞があります。場面や感情に合わせて使い分けることで、リアクションの幅が一気に広がります。</p>

<div class="visual-box">
<div class="visual-box-title">場面別リアクションマップ</div>
<table>
<tr>
<th>場面・感情</th>
<th>感嘆詞の例</th>
<th>使い方のコツ</th>
</tr>
<tr>
<td><strong>驚き・感心</strong></td>
<td>「へぇ！」「ほぉ！」「えっ、そうなんですか！」</td>
<td>声のトーンを上げて、目を少し見開く</td>
</tr>
<tr>
<td><strong>納得・理解</strong></td>
<td>「なるほど！」「たしかに！」「あぁ、そういうことか！」</td>
<td>うなずきながら、ゆっくり発する</td>
</tr>
<tr>
<td><strong>称賛・尊敬</strong></td>
<td>「すごい！」「さすがですね！」「それは素晴らしい！」</td>
<td>笑顔を添えて、相手の目を見て</td>
</tr>
<tr>
<td><strong>共感・同意</strong></td>
<td>「わかります！」「それ、ありますよね！」「ですよね！」</td>
<td>表情をシンクロさせて、身を乗り出す</td>
</tr>
<tr>
<td><strong>意外性</strong></td>
<td>「マジですか！」「うそ！」「え、本当に？」</td>
<td>目を丸くして、少し声を大きく</td>
</tr>
</table>
</div>

<h3>表情とリアクションの組み合わせ</h3>
<p>言葉だけのリアクションは<strong>全体の7%</strong>しか伝わりません（メラビアンの法則）。表情・声のトーン・ボディランゲージを組み合わせることで、リアクションの効果は飛躍的に高まります。</p>

<div class="compare-grid">
<div class="compare-card">
<h4>😊 表情のポイント</h4>
<p>言葉より先に表情が動くのが自然なリアクションです。</p>
<ul>
<li><strong>驚きの時</strong>：眉を上げて目を見開く</li>
<li><strong>共感の時</strong>：穏やかな笑顔でうなずく</li>
<li><strong>残念な話の時</strong>：眉をひそめて口角を下げる</li>
<li><strong>面白い話の時</strong>：口角を上げて自然に笑う</li>
</ul>
</div>
<div class="compare-card">
<h4>🗣️ 声のトーンのポイント</h4>
<p>同じ「へぇ」でも声のトーンで全く印象が変わります。</p>
<ul>
<li><strong>高めの声</strong>：驚き・感動を伝える</li>
<li><strong>低めの声</strong>：深い納得・共感を伝える</li>
<li><strong>ゆっくり</strong>：感慨深さを伝える</li>
<li><strong>テンポよく</strong>：楽しさ・興奮を伝える</li>
</ul>
</div>
<div class="compare-card">
<h4>🤲 ボディランゲージのポイント</h4>
<p>身体の動きは言葉以上に「興味」を伝えます。</p>
<ul>
<li><strong>身を乗り出す</strong>：興味・関心を示す</li>
<li><strong>うなずき</strong>：理解・同意のサイン</li>
<li><strong>手のジェスチャー</strong>：感情の強調</li>
<li><strong>相手に体を向ける</strong>：傾聴の姿勢</li>
</ul>
</div>
</div>

<h2>大げさリアクション vs 適切なリアクション</h2>
<p>リアクションは大きければ良いわけではありません。<strong>場面と相手に合った適切な温度感</strong>が重要です。やりすぎると「わざとらしい」「バカにしている」と受け取られるリスクがあります。</p>

<div class="visual-box">
<div class="visual-box-title">リアクションの温度計 — 適切なレベルを見極める</div>
<table>
<tr>
<th>レベル</th>
<th>表現例</th>
<th>適する場面</th>
<th>注意点</th>
</tr>
<tr>
<td style="background:#d1fae5;text-align:center;"><strong>Lv1: 軽め</strong></td>
<td>「うんうん」「そうですよね」</td>
<td>日常の事実報告、経過説明</td>
<td>少なすぎると無関心に見える</td>
</tr>
<tr>
<td style="background:#dbeafe;text-align:center;"><strong>Lv2: 標準</strong></td>
<td>「へぇ、そうなんですね！」</td>
<td>ちょっとした発見、新しい情報</td>
<td>最も汎用性が高い</td>
</tr>
<tr>
<td style="background:#fef3c7;text-align:center;"><strong>Lv3: やや強め</strong></td>
<td>「えっ、すごいですね！」</td>
<td>成果報告、特別な経験談</td>
<td>本当に驚いた時に使う</td>
</tr>
<tr>
<td style="background:#fee2e2;text-align:center;"><strong>Lv4: 最大</strong></td>
<td>「マジですか！信じられない！」</td>
<td>本当に驚愕する出来事</td>
<td>多用するとわざとらしくなる</td>
</tr>
</table>
</div>

<div class="info-box warning">
<div class="info-box-title">やりがちなNG リアクション</div>
<ul>
<li><strong>オウム返しのみ</strong>：「へぇ」「うん」の繰り返しだけでは機械的に聞こえる</li>
<li><strong>全てに最大リアクション</strong>：何を話しても「えー！すごい！」だと信用を失う</li>
<li><strong>リアクションの遅れ</strong>：タイミングがずれると「聞いてなかった？」と思われる</li>
<li><strong>スマホを見ながら</strong>：どんなリアクション言葉も台無しになる</li>
</ul>
</div>

<h3>リアクション力を鍛える3つのステップ</h3>
<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>感嘆詞の引き出しを増やす</strong>
毎日1つずつ新しいリアクション表現を意識的に使ってみましょう。「へぇ」しか言えなかった人が「なるほど」「たしかに」を加えるだけで印象が変わります。
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>非言語リアクションを意識する</strong>
鏡の前やWeb会議の自分の映像で、自分がどんな表情でリアクションしているかチェックしましょう。無表情リアクションに気づくはずです。
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>リアクション＋ひと言を添える</strong>
「すごい！」で終わらず、「すごい！どのくらい練習されたんですか？」と一言添えることで、会話が自然に広がります。これが上級者のリアクションです。
</div>
</div>
</div>

<div class="scenario-box">
<div class="scenario-box-title">実践シナリオ：同僚が旅行の話をしてきたら</div>
<table>
<tr><th>レベル</th><th>リアクション例</th><th>効果</th></tr>
<tr><td><strong>初級</strong></td><td>「へぇ、いいですね」</td><td>会話がそこで終わりがち</td></tr>
<tr><td><strong>中級</strong></td><td>「え、沖縄ですか！いいなぁ！天気よかったですか？」</td><td>質問で会話が続く</td></tr>
<tr><td><strong>上級</strong></td><td>「沖縄！最高ですね！実は僕も去年行ったんですけど、海がきれいで感動しました。どのあたり行かれたんですか？」</td><td>共感＋自己開示＋質問で盛り上がる</td></tr>
</table>
</div>

<div class="info-box success">
<div class="info-box-title">まとめ</div>
リアクション力は才能ではなく<strong>スキル</strong>です。感嘆詞のバリエーション、表情・声・ボディランゲージの組み合わせ、場面に合った温度感の3つを意識するだけで、あなたの会話力は劇的に向上します。
</div>
`,
            quiz: [
                {
                    id: "q301_1",
                    type: "choice",
                    question: "メラビアンの法則によると、コミュニケーションにおいて言語情報（言葉そのもの）が占める割合はどのくらいですか？",
                    options: ["約55%", "約38%", "約7%", "約25%"],
                    answer: 2,
                    explanation: "メラビアンの法則では、コミュニケーションの影響は視覚情報（表情・仕草）が55%、聴覚情報（声のトーン）が38%、言語情報（言葉そのもの）が7%とされています。リアクションでは非言語の要素が非常に重要です。"
                },
                {
                    id: "q301_2",
                    type: "choice",
                    question: "リアクション力を高めるために最も効果的な方法はどれですか？",
                    options: ["常に最大レベルのリアクションをする", "リアクション＋ひと言（質問や自己開示）を添える", "相手の言葉をそのまま繰り返す", "できるだけ大げさな表情をつくる"],
                    answer: 1,
                    explanation: "リアクションに加えて質問や自己開示をひと言添えることで、会話が自然に広がります。常に最大リアクションはわざとらしく、単なるオウム返しは機械的に聞こえます。"
                },
                {
                    id: "q301_3",
                    type: "choice",
                    question: "NGリアクションとして当てはまらないものはどれですか？",
                    options: ["スマホを見ながらリアクションする", "場面に合わせてリアクションの強さを調整する", "全ての話に「えー！すごい！」と同じ反応をする", "「へぇ」「うん」だけを繰り返す"],
                    answer: 1,
                    explanation: "場面に合わせてリアクションの強さを調整するのは適切なリアクションです。スマホを見ながら、全てに同じ反応、単調な相づちだけはいずれもNGリアクションに該当します。"
                }
            ]
        },
        {
            id: 302,
            title: "質問で会話を深掘りする",
            duration: "10分",
            content: `
<h2>質問力が雑談の質を決める</h2>
<p>雑談が続かない最大の原因は「質問ができない」ことです。逆に言えば、<strong>適切な質問ができれば会話は無限に広がります</strong>。質問は相手に「あなたに興味があります」というメッセージを伝える最も効果的な手段です。</p>

<div class="info-box tip">
<div class="info-box-title">ポイント</div>
質問には「会話を広げる質問」と「会話を閉じる質問」があります。雑談では「広げる質問」を意識的に使うことが鍵です。
</div>

<h3>クローズド質問 vs オープン質問</h3>
<div class="compare-grid">
<div class="compare-card">
<h4>❌ クローズド質問（会話を閉じる）</h4>
<p>「はい/いいえ」や一言で答えられる質問。情報確認には有効ですが、雑談では会話が途切れやすくなります。</p>
<ul>
<li>「映画好きですか？」→「はい」（沈黙）</li>
<li>「昨日は忙しかったですか？」→「はい」（沈黙）</li>
<li>「出身は東京ですか？」→「いいえ」（沈黙）</li>
</ul>
</div>
<div class="compare-card">
<h4>✅ オープン質問（会話を広げる）</h4>
<p>5W1H（何を・なぜ・いつ・どこで・誰と・どうやって）で始まる質問。相手が自由に話せるため会話が広がります。</p>
<ul>
<li>「最近どんな映画を観ました？」→ 具体的な話へ</li>
<li>「昨日はどんな一日でしたか？」→ エピソードへ</li>
<li>「ご出身はどちらですか？」→ 地域の話題へ</li>
</ul>
</div>
</div>

<h2>掘り下げ質問の3大テクニック</h2>
<p>相手の回答に対してさらに掘り下げていくことで、表面的な会話から<strong>深い会話</strong>へと発展します。以下の3パターンを覚えましょう。</p>

<div class="visual-box">
<div class="visual-box-title">掘り下げ質問の3パターン</div>
<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px;text-align:center;">
<div style="background:#dbeafe;border-radius:12px;padding:20px;">
<div style="font-size:2rem;">🔍</div>
<strong style="color:#1e40af;font-size:1.1rem;">なぜ？（Why）</strong>
<p style="font-size:0.85rem;margin-top:8px;">動機・理由を聞く<br>「どうしてそう思ったんですか？」<br>「何がきっかけだったんですか？」</p>
</div>
<div style="background:#d1fae5;border-radius:12px;padding:20px;">
<div style="font-size:2rem;">⚙️</div>
<strong style="color:#059669;font-size:1.1rem;">どうやって？（How）</strong>
<p style="font-size:0.85rem;margin-top:8px;">過程・方法を聞く<br>「どうやって始めたんですか？」<br>「具体的にはどんな感じですか？」</p>
</div>
<div style="background:#fef3c7;border-radius:12px;padding:20px;">
<div style="font-size:2rem;">💭</div>
<strong style="color:#d97706;font-size:1.1rem;">どう感じた？（Feel）</strong>
<p style="font-size:0.85rem;margin-top:8px;">感情・感想を聞く<br>「その時どう思いました？」<br>「やってみてどうでしたか？」</p>
</div>
</div>
</div>

<h3>質問の連鎖で会話を広げる方法</h3>
<p>1つの質問で終わらず、<strong>質問を連鎖させる</strong>ことで会話はどんどん深まります。コツは相手の回答の中からキーワードを拾い、次の質問につなげることです。</p>

<div class="scenario-box">
<div class="scenario-box-title">実践例：質問の連鎖トーク</div>
<table>
<tr><th>ステップ</th><th>発言</th><th>テクニック</th></tr>
<tr><td><strong>きっかけ</strong></td><td>相手「最近ランニング始めたんですよ」</td><td>—</td></tr>
<tr><td><strong>Why</strong></td><td>あなた「おっ！何がきっかけで始めたんですか？」</td><td>動機を掘り下げ</td></tr>
<tr><td><strong>回答</strong></td><td>相手「健康診断でちょっと引っかかって…」</td><td>—</td></tr>
<tr><td><strong>Feel</strong></td><td>あなた「それは心配でしたね。走ってみてどうですか？」</td><td>共感＋感想を聞く</td></tr>
<tr><td><strong>回答</strong></td><td>相手「意外と気持ちいいんですよ、朝走ると」</td><td>—</td></tr>
<tr><td><strong>How</strong></td><td>あなた「朝！どのくらいの距離を走るんですか？」</td><td>具体的な方法を聞く</td></tr>
</table>
</div>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>回答のキーワードをキャッチする</strong>
相手の答えの中に必ず「次の質問の種」があります。固有名詞、感情表現、数字、場所など、気になったワードをすぐに拾いましょう。
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>3パターンを交互に使う</strong>
Why → How → Feel のように交互に使うと、同じパターンの繰り返しにならず自然に聞こえます。連続で「なぜ？なぜ？」と聞くと尋問のようになるので注意。
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>質問の合間にリアクションと自己開示を挟む</strong>
質問だけだとインタビューになってしまいます。「へぇ、それ分かります！実は僕も…」のように、リアクションと自己開示を挟むことで自然な会話になります。
</div>
</div>
</div>

<div class="info-box warning">
<div class="info-box-title">質問のNG例</div>
<ul>
<li><strong>尋問型</strong>：「なぜ？」「なぜ？」「なぜ？」と連続で問い詰める</li>
<li><strong>プライバシー侵害</strong>：年収、恋愛、家庭の事情に踏み込みすぎる</li>
<li><strong>自分語りの前振り</strong>：相手の答えを聞かず「自分もね…」と話し始める</li>
<li><strong>答えを誘導する質問</strong>：「やっぱり○○ですよね？」</li>
</ul>
</div>

<div class="info-box success">
<div class="info-box-title">まとめ</div>
質問力の基本は「オープン質問」「Why / How / Feel の掘り下げ」「キーワードキャッチからの連鎖」です。この3つを意識するだけで、「この人と話すと楽しい」と思われる雑談ができるようになります。
</div>
`,
            quiz: [
                {
                    id: "q302_1",
                    type: "choice",
                    question: "雑談で会話を広げるのに適した質問タイプはどれですか？",
                    options: ["「映画好きですか？」のようなクローズド質問", "「最近どんな映画を観ました？」のようなオープン質問", "「やっぱり映画は邦画ですよね？」のような誘導質問", "「映画は月に何本観ますか？」のような数値質問"],
                    answer: 1,
                    explanation: "オープン質問は相手が自由に話せるため、会話が広がりやすくなります。クローズド質問は「はい/いいえ」で終わりやすく、誘導質問は相手の本音を引き出しにくいです。"
                },
                {
                    id: "q302_2",
                    type: "choice",
                    question: "掘り下げ質問の3大パターンに含まれないものはどれですか？",
                    options: ["なぜ？（動機・理由を聞く）", "どうやって？（過程・方法を聞く）", "いくら？（金額・コストを聞く）", "どう感じた？（感情・感想を聞く）"],
                    answer: 2,
                    explanation: "掘り下げ質問の3大パターンは「なぜ？（Why）」「どうやって？（How）」「どう感じた？（Feel）」です。金額やコストを聞くのはプライバシーに踏み込みやすいため、雑談の掘り下げパターンには含まれません。"
                },
                {
                    id: "q302_3",
                    type: "choice",
                    question: "質問の連鎖トークで注意すべきことはどれですか？",
                    options: ["できるだけ多くの質問を連続でする", "質問の合間にリアクションや自己開示を挟む", "相手が答え終わる前に次の質問を準備する", "1つのテーマに絞って同じパターンの質問を繰り返す"],
                    answer: 1,
                    explanation: "質問だけを連続すると尋問やインタビューのようになってしまいます。質問の合間にリアクション（「へぇ！」）や自己開示（「自分も実は…」）を挟むことで、自然な双方向の会話になります。"
                }
            ]
        },
        {
            id: 303,
            title: "共感と自己開示で距離を縮める",
            duration: "10分",
            content: `
<h2>共感 — 相手の心に寄り添う技術</h2>
<p>雑談で「この人と話すと心地いい」と感じさせる最大の要因は<strong>共感</strong>です。共感とは、相手の気持ちや状況を理解し、それを言葉や態度で伝えることです。しかし共感にも<strong>レベル</strong>があり、深い共感ほど相手との距離が縮まります。</p>

<div class="info-box tip">
<div class="info-box-title">ポイント</div>
共感は「相手と同じ意見を持つこと」ではありません。「相手がそう感じている事実を受け止める」ことです。たとえ自分の意見が違っても共感は可能です。
</div>

<h3>共感の3つのレベル</h3>
<div class="visual-box">
<div class="visual-box-title">共感ピラミッド — 深さの3段階</div>
<div style="text-align:center;padding:20px;">
<div style="display:inline-block;width:160px;background:#fee2e2;border:2px solid #ef4444;border-radius:8px;padding:16px;margin:4px;">
<strong style="color:#dc2626;">Lv3: 価値観共感</strong><br>
<span style="font-size:0.8rem;">相手の信念・大切にしているものに共感</span>
</div>
<br>
<div style="display:inline-block;width:280px;background:#fef3c7;border:2px solid #f59e0b;border-radius:8px;padding:16px;margin:4px;">
<strong style="color:#d97706;">Lv2: 感情共感</strong><br>
<span style="font-size:0.8rem;">相手の感情（嬉しい・悲しい・怒りなど）に共感</span>
</div>
<br>
<div style="display:inline-block;width:400px;background:#d1fae5;border:2px solid #10b981;border-radius:8px;padding:16px;margin:4px;">
<strong style="color:#059669;">Lv1: 事実共感</strong><br>
<span style="font-size:0.8rem;">相手が経験した事実そのものに共感（一番やりやすい）</span>
</div>
</div>
</div>

<h3>各レベルの具体例</h3>
<div class="scenario-box">
<div class="scenario-box-title">場面：同僚が「子供の運動会で一等賞を取った」と話してきた</div>
<table>
<tr><th>共感レベル</th><th>リアクション例</th><th>効果</th></tr>
<tr>
<td><strong>Lv1: 事実共感</strong></td>
<td>「一等賞、すごいですね！」</td>
<td>事実を認める。距離感は変わりにくい</td>
</tr>
<tr>
<td><strong>Lv2: 感情共感</strong></td>
<td>「それは嬉しかったでしょう！親として誇らしいですよね」</td>
<td>感情に寄り添う。親近感が生まれる</td>
</tr>
<tr>
<td><strong>Lv3: 価値観共感</strong></td>
<td>「お子さんの頑張りをちゃんと見守っていらっしゃるんですね。素敵なお父さんですね」</td>
<td>相手の価値観を肯定。強い信頼が生まれる</td>
</tr>
</table>
</div>

<h2>自己開示 — 距離を縮める鍵</h2>
<p>自己開示とは、<strong>自分の経験・感情・考えを相手に伝える</strong>ことです。心理学では「自己開示の返報性」という法則があり、自分が開示すると相手も同じくらいの深さで自己開示してくれるようになります。</p>

<div class="visual-box">
<div class="visual-box-title">自己開示の返報性の仕組み</div>
<div style="display:flex;align-items:center;justify-content:center;gap:20px;padding:20px;flex-wrap:wrap;">
<div style="background:#dbeafe;border-radius:12px;padding:16px;text-align:center;min-width:180px;">
<div style="font-size:1.5rem;">🙋</div>
<strong>あなたの自己開示</strong><br>
<span style="font-size:0.85rem;">「実は僕も<br>料理にハマっていて…」</span>
</div>
<div style="font-size:2rem;">→</div>
<div style="background:#fef3c7;border-radius:12px;padding:16px;text-align:center;min-width:180px;">
<div style="font-size:1.5rem;">💡</div>
<strong>相手の心理</strong><br>
<span style="font-size:0.85rem;">「この人も話してくれた<br>自分ももっと話そう」</span>
</div>
<div style="font-size:2rem;">→</div>
<div style="background:#d1fae5;border-radius:12px;padding:16px;text-align:center;min-width:180px;">
<div style="font-size:1.5rem;">🤝</div>
<strong>関係が深まる</strong><br>
<span style="font-size:0.85rem;">お互いのことを<br>知り合える関係に</span>
</div>
</div>
</div>

<h3>適切な自己開示の深さ</h3>
<p>自己開示は深ければよいわけではありません。<strong>関係性の段階に応じた適切な深さ</strong>があります。</p>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>浅い自己開示（初対面〜）</strong>
好きな食べ物、趣味、出身地、最近見た映画など。リスクが低く、誰にでも話せる内容。「僕もコーヒー好きなんですよ」程度。
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>中程度の自己開示（顔見知り〜）</strong>
仕事の悩み、将来の目標、過去の失敗談など。ある程度の信頼関係がある相手に。「実は前の仕事では苦労して…」。
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>深い自己開示（親しい関係）</strong>
家族の問題、コンプレックス、人生の価値観など。親密な関係でのみ共有すべき内容。いきなり初対面では重すぎます。
</div>
</div>
</div>

<div class="compare-grid">
<div class="compare-card">
<h4>✅ 適切な自己開示</h4>
<ul>
<li>相手が話した内容と同じレベルの開示</li>
<li>失敗談や弱みを少し見せる（親しみが生まれる）</li>
<li>ポジティブな感情を共有する</li>
<li>「自分もこんな経験があって…」と共通点を示す</li>
</ul>
</div>
<div class="compare-card">
<h4>❌ 不適切な自己開示</h4>
<ul>
<li>初対面で重い悩みを打ち明ける</li>
<li>自慢話ばかりの自己開示</li>
<li>相手が求めていない情報を大量に話す</li>
<li>ネガティブな内容だけを開示し続ける</li>
</ul>
</div>
</div>

<div class="info-box warning">
<div class="info-box-title">自己開示の黄金比</div>
雑談における理想的なバランスは<strong>「相手7：自分3」</strong>です。相手の話をしっかり聞いた上で、3割程度の自己開示を挟むと心地よい会話になります。自己開示が多すぎると「自分の話ばかりする人」と思われてしまいます。
</div>

<h3>共感＋自己開示のコンボ技</h3>
<div class="scenario-box">
<div class="scenario-box-title">実践フレーズ集</div>
<table>
<tr><th>相手の話</th><th>共感＋自己開示の返し方</th></tr>
<tr><td>「最近忙しくて大変で…」</td><td>「わかります…！（共感）僕も先月納期が重なって、毎日終電でした（自己開示）。どうやって乗り越えてるんですか？（質問）」</td></tr>
<tr><td>「料理を始めたんです」</td><td>「いいですね！（リアクション）実は僕も自炊派で（自己開示）。何作ったんですか？（質問）」</td></tr>
<tr><td>「子供の受験が心配で」</td><td>「お気持ちすごくわかります（感情共感）。うちも去年受験だったんですが不安でしたね（自己開示）。どんな受験ですか？（質問）」</td></tr>
</table>
</div>

<div class="info-box success">
<div class="info-box-title">まとめ</div>
共感の3レベル（事実→感情→価値観）を意識し、自己開示の返報性を活用して距離を縮めましょう。「共感→自己開示→質問」のコンボを使いこなせば、初対面でも短時間で関係を深めることができます。
</div>
`,
            quiz: [
                {
                    id: "q303_1",
                    type: "choice",
                    question: "共感の3つのレベルのうち、最も深い共感はどれですか？",
                    options: ["事実共感（相手の経験した事実に共感する）", "感情共感（相手の感情に共感する）", "価値観共感（相手の信念・大切にしているものに共感する）", "行動共感（相手の行動に共感する）"],
                    answer: 2,
                    explanation: "最も深い共感は「価値観共感」です。相手の信念や大切にしている価値観に寄り添うことで、強い信頼関係を築くことができます。事実共感→感情共感→価値観共感の順に深くなります。"
                },
                {
                    id: "q303_2",
                    type: "choice",
                    question: "「自己開示の返報性」の説明として正しいものはどれですか？",
                    options: ["自分が多く話すほど相手は黙る傾向がある", "自分が自己開示すると相手も同程度の深さで自己開示してくれる", "初対面ではできるだけ深い自己開示をすべきである", "自己開示は常に相手より先にすべきである"],
                    answer: 1,
                    explanation: "自己開示の返報性とは、自分がある程度の深さで自己開示すると、相手もそれに応じた深さで自己開示を返してくれるという心理学的な法則です。これを活用することで自然に関係を深められます。"
                },
                {
                    id: "q303_3",
                    type: "choice",
                    question: "雑談における理想的な「聞く：話す」のバランスはどれですか？",
                    options: ["相手9：自分1", "相手7：自分3", "相手5：自分5", "相手3：自分7"],
                    answer: 1,
                    explanation: "雑談における理想的なバランスは「相手7：自分3」です。相手の話をしっかり聞いた上で3割程度の自己開示を挟むと、心地よい会話になります。聞きすぎるとインタビューに、話しすぎると自分語りになります。"
                }
            ]
        },
        {
            id: 304,
            title: "話題の転換テクニック",
            duration: "8分",
            content: `
<h2>話題転換 — 会話の流れをコントロールする</h2>
<p>雑談において、1つの話題が尽きた時や会話が停滞した時に<strong>スムーズに話題を変える</strong>スキルは非常に重要です。話題転換が上手な人は、会話に困ることがなく、いつでも場を盛り上げることができます。</p>

<div class="info-box tip">
<div class="info-box-title">ポイント</div>
話題転換は「唐突に変える」のではなく「自然に流れを変える」ことがコツです。急に違う話を始めると相手は混乱しますが、上手な転換は相手も気づかないうちに新しい話題に移っています。
</div>

<h3>自然な話題転換の3パターン</h3>
<div class="visual-box">
<div class="visual-box-title">話題転換テクニック一覧</div>
<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px;text-align:center;">
<div style="background:#dbeafe;border:2px solid #2563eb;border-radius:12px;padding:20px;">
<div style="font-size:2rem;">🔗</div>
<strong style="color:#1e40af;font-size:1.1rem;">連想パターン</strong>
<p style="font-size:0.85rem;margin-top:8px;">今の話題から自然に連想できるキーワードを使って新しい話題へ移行する</p>
</div>
<div style="background:#d1fae5;border:2px solid #10b981;border-radius:12px;padding:20px;">
<div style="font-size:2rem;">🌉</div>
<strong style="color:#059669;font-size:1.1rem;">ブリッジパターン</strong>
<p style="font-size:0.85rem;margin-top:8px;">「そういえば」「話は変わるんですけど」など接続フレーズを使って橋渡しする</p>
</div>
<div style="background:#fef3c7;border:2px solid #f59e0b;border-radius:12px;padding:20px;">
<div style="font-size:2rem;">📰</div>
<strong style="color:#d97706;font-size:1.1rem;">時事ネタ挿入パターン</strong>
<p style="font-size:0.85rem;margin-top:8px;">ニュース・季節・イベントなど、今この瞬間に共有できる話題を挿入する</p>
</div>
</div>
</div>

<h3>各パターンの実践例</h3>

<div class="scenario-box">
<div class="scenario-box-title">パターン1：連想パターンの具体例</div>
<table>
<tr><th>今の話題</th><th>連想キーワード</th><th>新しい話題への転換</th></tr>
<tr>
<td>「週末にカフェに行った」</td>
<td>カフェ → コーヒー → 朝の習慣</td>
<td>「コーヒーお好きなんですね！朝は必ずコーヒー飲む派ですか？」</td>
</tr>
<tr>
<td>「子供がサッカーを始めた」</td>
<td>サッカー → スポーツ → 運動</td>
<td>「お子さんアクティブですね！ご自身も何かスポーツされてますか？」</td>
</tr>
<tr>
<td>「出張で大阪に行った」</td>
<td>大阪 → 食べ物 → グルメ</td>
<td>「大阪いいですね！何かおいしいもの食べました？」</td>
</tr>
</table>
</div>

<div class="scenario-box">
<div class="scenario-box-title">パターン2：ブリッジパターンの接続フレーズ集</div>
<table>
<tr><th>フレーズ</th><th>自然さ</th><th>使い方</th></tr>
<tr><td>「そういえば」</td><td style="color:#059669;">★★★ 最も自然</td><td>前の話題と少し関連がある時に</td></tr>
<tr><td>「あ、そうだ」</td><td style="color:#059669;">★★★ 最も自然</td><td>思い出した風に切り出す時に</td></tr>
<tr><td>「ところで」</td><td style="color:#d97706;">★★☆ やや唐突</td><td>完全に話題を変えたい時に</td></tr>
<tr><td>「話は変わりますが」</td><td style="color:#dc2626;">★☆☆ フォーマル</td><td>ビジネスシーンで明示的に変える時に</td></tr>
</table>
</div>

<h2>沈黙の活用法</h2>
<p>多くの人は沈黙を恐れますが、<strong>沈黙は悪いものではありません</strong>。適度な沈黙は会話にリズムを生み出し、次の話題への自然な転換点になります。</p>

<div class="compare-grid">
<div class="compare-card">
<h4>✅ 良い沈黙</h4>
<ul>
<li><strong>余韻の沈黙</strong>：感動的な話の後にあえて黙る（共感が深まる）</li>
<li><strong>思考の沈黙</strong>：相手が考えている時に待つ（尊重を示す）</li>
<li><strong>転換の沈黙</strong>：話題が一段落した時の自然な間</li>
</ul>
</div>
<div class="compare-card">
<h4>❌ 悪い沈黙</h4>
<ul>
<li><strong>無関心の沈黙</strong>：相手の話に興味がなく反応しない</li>
<li><strong>気まずい沈黙</strong>：何を話していいかわからず固まる</li>
<li><strong>拒絶の沈黙</strong>：意図的に返事をしない</li>
</ul>
</div>
</div>

<div class="info-box warning">
<div class="info-box-title">沈黙が怖い時の対処法</div>
沈黙が3秒以上続いて気まずく感じたら、以下のどれかを試しましょう。
<ul>
<li>「そういえば…」で新しい話題に切り替える（ブリッジパターン）</li>
<li>周囲を見渡して見えるものについてコメントする（「この店、雰囲気いいですよね」）</li>
<li>相手に軽い質問を投げかける（「最近何かハマってることありますか？」）</li>
</ul>
</div>

<h2>会話のリズム</h2>
<p>心地よい雑談にはリズムがあります。音楽のように<strong>緩急（テンポの変化）</strong>があると、会話は自然で飽きにくくなります。</p>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>盛り上がりのパート（アップテンポ）</strong>
共通の趣味やお互いが興味のある話題で、テンポよく会話が進む部分。笑いや驚きのリアクションが増える。
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>落ち着きのパート（スローテンポ）</strong>
少し深い話や考えさせられる話題に移行する部分。ゆっくりうなずきながら聞く。沈黙があっても自然。
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>クロージングのパート</strong>
会話の締めくくり。「楽しかったです」「また話しましょう」とポジティブに終える。次の会話のきっかけを作る。
</div>
</div>
</div>

<div class="info-box success">
<div class="info-box-title">まとめ</div>
話題転換の3パターン（連想・ブリッジ・時事ネタ挿入）を使い分け、沈黙を恐れず活用し、会話にリズムを持たせましょう。これらのスキルが身につけば、どんな場面でも会話に困ることはなくなります。
</div>
`,
            quiz: [
                {
                    id: "q304_1",
                    type: "choice",
                    question: "自然な話題転換の3パターンに含まれないものはどれですか？",
                    options: ["連想パターン（今の話題から関連するキーワードで移行）", "ブリッジパターン（接続フレーズで橋渡し）", "反論パターン（今の話題を否定して新しい話題へ）", "時事ネタ挿入パターン（ニュースや季節の話題を挟む）"],
                    answer: 2,
                    explanation: "自然な話題転換の3パターンは「連想」「ブリッジ」「時事ネタ挿入」です。反論パターンは相手の話を否定することになるため、話題転換テクニックには含まれません。"
                },
                {
                    id: "q304_2",
                    type: "choice",
                    question: "沈黙について正しい認識はどれですか？",
                    options: ["沈黙は常に避けるべきである", "沈黙は会話の失敗を意味する", "適度な沈黙は会話にリズムを生み出す自然なもの", "沈黙が生じたら即座に自分の話を始めるべき"],
                    answer: 2,
                    explanation: "適度な沈黙は会話にリズムを生み出し、次の話題への自然な転換点になります。余韻の沈黙、思考の沈黙、転換の沈黙などは会話を豊かにする「良い沈黙」です。"
                },
                {
                    id: "q304_3",
                    type: "choice",
                    question: "ブリッジパターンの接続フレーズとして最も自然なのはどれですか？",
                    options: ["「話は変わりますが」", "「ところで」", "「そういえば」", "「全く関係ないんですけど」"],
                    answer: 2,
                    explanation: "「そういえば」は前の話題と少し関連があるように聞こえ、最も自然な話題転換のフレーズです。「話は変わりますが」はフォーマルすぎ、「ところで」はやや唐突、「全く関係ないんですけど」は唐突さを強調してしまいます。"
                }
            ]
        }
    ]
};
