const LEVEL1_DATA = {
    id: 1, title: "雑談の基本マインド", icon: "💡",
    description: "雑談の意義を理解し、基本的な姿勢と始め方・終わらせ方を身につける",
    modules: [
        {
            id: 101, title: "雑談とは何か", duration: "12分",
            content: `
<h2>☕ 雑談とは何か — 雑談の意義と効果</h2>
<div class="info-box tip"><div class="info-box-title">💡 ポイント</div><p>雑談は「中身のない無駄話」ではありません。<strong>人間関係の潤滑油</strong>であり、信頼構築の第一歩です。</p></div>
<h3>🤔 雑談の定義</h3>
<p>雑談とは、特定の目的や結論を持たない<strong>カジュアルな会話</strong>のことです。ビジネスの商談でも恋愛でも、いきなり本題に入るよりも、まず雑談でウォームアップすることで場が和みます。</p>
<div class="visual-box"><div class="visual-box-title">雑談がもたらす5つの効果</div>
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:12px;padding:15px 0;">
<div style="background:#FFF7ED;border:2px solid #F97316;border-radius:12px;padding:16px;text-align:center;"><div style="font-size:1.5rem;">🤝</div><div style="font-weight:700;font-size:0.85rem;">信頼構築</div><div style="font-size:0.75rem;color:#666;">心の距離を縮める</div></div>
<div style="background:#FFF7ED;border:2px solid #F97316;border-radius:12px;padding:16px;text-align:center;"><div style="font-size:1.5rem;">😌</div><div style="font-weight:700;font-size:0.85rem;">緊張緩和</div><div style="font-size:0.75rem;color:#666;">場の空気を和らげる</div></div>
<div style="background:#FFF7ED;border:2px solid #F97316;border-radius:12px;padding:16px;text-align:center;"><div style="font-size:1.5rem;">💡</div><div style="font-weight:700;font-size:0.85rem;">情報収集</div><div style="font-size:0.75rem;color:#666;">相手を知る手がかり</div></div>
<div style="background:#FFF7ED;border:2px solid #F97316;border-radius:12px;padding:16px;text-align:center;"><div style="font-size:1.5rem;">🏢</div><div style="font-weight:700;font-size:0.85rem;">職場の潤滑油</div><div style="font-size:0.75rem;color:#666;">チームワーク向上</div></div>
<div style="background:#FFF7ED;border:2px solid #F97316;border-radius:12px;padding:16px;text-align:center;"><div style="font-size:1.5rem;">📈</div><div style="font-weight:700;font-size:0.85rem;">ビジネス成果</div><div style="font-size:0.75rem;color:#666;">商談の成功率UP</div></div>
</div></div>
<h3>😰 雑談が苦手な人の特徴</h3>
<table><tr><th>タイプ</th><th>特徴</th><th>克服のヒント</th></tr>
<tr><td>完璧主義タイプ</td><td>面白いことを言わなきゃと思いすぎる</td><td>雑談に「正解」はない。天気の話でOK</td></tr>
<tr><td>人見知りタイプ</td><td>何を話せばいいか分からない</td><td>質問する側に回れば楽になる</td></tr>
<tr><td>効率重視タイプ</td><td>雑談を時間の無駄と感じる</td><td>雑談は「投資」。信頼を貯金している</td></tr>
<tr><td>話しすぎタイプ</td><td>自分の話ばかりしてしまう</td><td>「聞く7：話す3」を意識する</td></tr></table>
<div class="info-box warning"><div class="info-box-title">⚠️ よくある誤解</div><p>「話し上手＝雑談上手」ではありません。雑談上手とは<strong>聞き上手</strong>のことです。相手に気持ちよく話してもらうことが最も大切です。</p></div>
<div class="compare-grid">
<div class="compare-card"><h4>❌ 雑談が苦手な人</h4><ul><li>自分が話さなきゃと焦る</li><li>沈黙を恐れる</li><li>面白い話題を探しすぎる</li><li>相手の話を聞いていない</li></ul></div>
<div class="compare-card"><h4>✅ 雑談が得意な人</h4><ul><li>相手に興味を持って聞く</li><li>沈黙も楽しめる</li><li>何気ない話題で十分と知っている</li><li>リアクションが豊か</li></ul></div>
</div>
<div class="info-box success"><div class="info-box-title">✅ このモジュールのまとめ</div><ul>
<li>雑談は<strong>人間関係の潤滑油</strong>であり、信頼構築の第一歩</li>
<li>雑談上手＝<strong>聞き上手</strong>。話す力より聞く力が大切</li>
<li>面白い話をする必要はない。<strong>天気の話でも立派な雑談</strong></li>
<li>雑談は「無駄」ではなく「投資」</li></ul></div>`,
            quiz: [
                { id: "q101_1", type: "choice", question: "雑談がもたらす効果として最も適切でないものはどれですか？", options: ["信頼関係の構築", "場の緊張緩和", "議論での論破", "情報収集"], answer: 2, explanation: "雑談の目的は信頼構築や緊張緩和であり、論破は雑談の効果ではありません。" },
                { id: "q101_2", type: "choice", question: "雑談上手な人の最大の特徴はどれですか？", options: ["面白い話ができる", "話題が豊富", "聞き上手である", "声が大きい"], answer: 2, explanation: "雑談上手の本質は聞き上手であることです。相手に気持ちよく話してもらうスキルが最も重要です。" },
                { id: "q101_3", type: "choice", question: "雑談に対する正しい認識はどれですか？", options: ["面白い話をしなければならない", "時間の無駄である", "結論が必要", "天気の話でも十分な雑談になる"], answer: 3, explanation: "雑談に面白さや結論は不要です。天気などの何気ない話題でも立派な雑談です。" }
            ]
        },
        {
            id: 102, title: "雑談の始め方 — 最初のひと言", duration: "10分",
            content: `
<h2>🎬 雑談の始め方 — 最初のひと言</h2>
<div class="info-box tip"><div class="info-box-title">💡 ポイント</div><p>雑談の始め方は<strong>「挨拶 + ひと言」</strong>が鉄則。難しく考えず、目の前の状況を言葉にするだけでOKです。</p></div>
<h3>🔑 挨拶 + ひと言の法則</h3>
<div class="steps">
<div class="step"><div class="step-num">1</div><div class="step-content"><strong>まず挨拶する</strong>「おはようございます」「お疲れ様です」「こんにちは」— まず声をかけること自体が大切。</div></div>
<div class="step"><div class="step-num">2</div><div class="step-content"><strong>ひと言を足す</strong>挨拶だけで終わらず、何かひと言加える。「今日は暑いですね」「その鞄おしゃれですね」「お昼どこで食べました？」</div></div>
<div class="step"><div class="step-num">3</div><div class="step-content"><strong>相手の反応を待つ</strong>ひと言投げたら、相手の返答を聞く。話が広がればラッキー、広がらなくてもOK。</div></div>
</div>
<h3>🌤 状況から始める5つのパターン</h3>
<table><tr><th>パターン</th><th>例文</th><th>使いやすい場面</th></tr>
<tr><td>天気</td><td>「今日めっちゃ寒くないですか？」</td><td>いつでも万能</td></tr>
<tr><td>場所・環境</td><td>「このカフェ初めてなんですけど、いい雰囲気ですね」</td><td>初めての場所</td></tr>
<tr><td>相手の変化</td><td>「髪切りました？似合ってますね」</td><td>顔見知り</td></tr>
<tr><td>共有体験</td><td>「さっきの会議、長かったですね〜」</td><td>職場・イベント後</td></tr>
<tr><td>持ち物</td><td>「そのスマホケースかわいいですね！」</td><td>初対面OK</td></tr></table>
<div class="scenario-box"><div class="scenario-box-title">💬 シナリオ：エレベーターで上司と一緒になった</div>
<p class="bad">❌ NG例：無言で気まずい沈黙…スマホを見るフリ</p>
<p class="good">✅ OK例：「お疲れ様です！今日は外回りですか？」→ 相手の状況に関心を示す</p>
<p class="good">✅ OK例：「お疲れ様です。今日あったかいですね〜」→ 天気は最強の万能ネタ</p></div>
<div class="info-box warning"><div class="info-box-title">⚠️ NGな始め方</div><ul>
<li>いきなりプライベートを聞く（「彼女いるんですか？」）</li>
<li>ネガティブな話題から入る（「最近疲れてません？顔色悪いですよ」）</li>
<li>唐突すぎる質問（「年収いくらですか？」）</li></ul></div>
<div class="info-box success"><div class="info-box-title">✅ このモジュールのまとめ</div><ul>
<li>雑談の始め方は<strong>「挨拶 + ひと言」</strong>が基本</li>
<li>目の前の<strong>状況を言葉にする</strong>だけで会話は始まる</li>
<li><strong>天気の話</strong>は万能。誰にでも使える最強の入り口</li>
<li>相手の反応を<strong>焦らず待つ</strong>ことが大切</li></ul></div>`,
            quiz: [
                { id: "q102_1", type: "choice", question: "雑談の始め方の基本法則はどれですか？", options: ["面白い話から入る", "挨拶 + ひと言", "質問攻めにする", "自己紹介から始める"], answer: 1, explanation: "雑談は「挨拶 + ひと言」が鉄則です。シンプルですが最も自然な始め方です。" },
                { id: "q102_2", type: "choice", question: "雑談の始め方としてNGなのはどれですか？", options: ["天気の話をする", "相手の持ち物を褒める", "いきなりプライベートを聞く", "共有体験に触れる"], answer: 2, explanation: "初対面や浅い関係でいきなりプライベートに踏み込むのはNGです。" },
                { id: "q102_3", type: "choice", question: "いつでも万能に使える雑談の話題はどれですか？", options: ["政治の話", "天気の話", "恋愛の話", "年収の話"], answer: 1, explanation: "天気の話は相手を選ばず、場所も選ばない万能の雑談ネタです。" }
            ]
        },
        {
            id: 103, title: "雑談の基本姿勢 — 聞き上手になる", duration: "10分",
            content: `
<h2>👂 雑談の基本姿勢 — 聞き上手になる</h2>
<div class="info-box tip"><div class="info-box-title">💡 ポイント</div><p>雑談で最も大切なのは<strong>「聞く力」</strong>。相手が「この人と話すと楽しい」と感じるのは、自分の話をよく聞いてもらえた時です。</p></div>
<h3>🎯 アクティブリスニングの5つの技術</h3>
<div class="visual-box"><div class="visual-box-title">聞き上手の5大スキル</div>
<div style="display:flex;justify-content:center;gap:8px;flex-wrap:wrap;padding:15px 0;">
<div style="background:#FFF7ED;border:2px solid #F97316;border-radius:12px;padding:16px;text-align:center;min-width:120px;"><div style="font-size:1.5rem;">😊</div><div style="font-weight:700;font-size:0.85rem;">表情</div><div style="font-size:0.75rem;color:#666;">穏やかな笑顔</div></div>
<div style="background:#FFF7ED;border:2px solid #F97316;border-radius:12px;padding:16px;text-align:center;min-width:120px;"><div style="font-size:1.5rem;">👀</div><div style="font-weight:700;font-size:0.85rem;">アイコンタクト</div><div style="font-size:0.75rem;color:#666;">適度に目を見る</div></div>
<div style="background:#FFF7ED;border:2px solid #F97316;border-radius:12px;padding:16px;text-align:center;min-width:120px;"><div style="font-size:1.5rem;">🙂</div><div style="font-weight:700;font-size:0.85rem;">うなずき</div><div style="font-size:0.75rem;color:#666;">リズミカルに</div></div>
<div style="background:#FFF7ED;border:2px solid #F97316;border-radius:12px;padding:16px;text-align:center;min-width:120px;"><div style="font-size:1.5rem;">💬</div><div style="font-weight:700;font-size:0.85rem;">あいづち</div><div style="font-size:0.75rem;color:#666;">バリエーション豊富に</div></div>
<div style="background:#FFF7ED;border:2px solid #F97316;border-radius:12px;padding:16px;text-align:center;min-width:120px;"><div style="font-size:1.5rem;">🔄</div><div style="font-weight:700;font-size:0.85rem;">オウム返し</div><div style="font-size:0.75rem;color:#666;">キーワードを繰り返す</div></div>
</div></div>
<h3>💬 あいづちのバリエーション</h3>
<table><tr><th>種類</th><th>例</th><th>効果</th></tr>
<tr><td>同意</td><td>「そうですよね」「わかります」</td><td>共感を示す</td></tr>
<tr><td>驚き</td><td>「えっ、本当ですか！」「マジですか！」</td><td>興味を示す</td></tr>
<tr><td>感心</td><td>「なるほど〜」「さすがですね」</td><td>相手を認める</td></tr>
<tr><td>促し</td><td>「それで？」「どうなったんですか？」</td><td>続きを引き出す</td></tr>
<tr><td>共感</td><td>「大変でしたね」「嬉しいですね」</td><td>感情に寄り添う</td></tr></table>
<h3>🔄 オウム返しの使い方</h3>
<div class="scenario-box"><div class="scenario-box-title">💬 オウム返しの実例</div>
<p>相手：「先週、沖縄に旅行してきたんです」</p>
<p class="good">✅ 「沖縄ですか！いいですね〜。何日間行ってたんですか？」（キーワード繰り返し＋質問）</p>
<p class="bad">❌ 「あ、そうですか」（素っ気ない → 会話が止まる）</p></div>
<div class="info-box success"><div class="info-box-title">✅ このモジュールのまとめ</div><ul>
<li>雑談の基本は<strong>聞くこと</strong>。聞く7：話す3が黄金比</li>
<li><strong>表情・うなずき・あいづち</strong>の3点セットで「聞いている」サインを送る</li>
<li>あいづちは<strong>バリエーション</strong>をつけて単調にならないように</li>
<li><strong>オウム返し+質問</strong>で自然に会話を広げられる</li></ul></div>`,
            quiz: [
                { id: "q103_1", type: "choice", question: "雑談での「聞く」と「話す」の理想的な比率はどれですか？", options: ["聞く3：話す7", "聞く5：話す5", "聞く7：話す3", "聞く9：話す1"], answer: 2, explanation: "雑談では「聞く7：話す3」が黄金比と言われています。相手に多く話してもらうことが大切です。" },
                { id: "q103_2", type: "choice", question: "オウム返しの正しい使い方はどれですか？", options: ["相手の話を全文そのまま繰り返す", "キーワードを繰り返して質問を添える", "相手の話を否定して自分の意見を言う", "無言でうなずくだけ"], answer: 1, explanation: "オウム返しはキーワードを拾って繰り返し、さらに質問を添えることで会話が自然に広がります。" },
                { id: "q103_3", type: "choice", question: "あいづちで「続きを引き出す」効果があるのはどれですか？", options: ["そうですよね", "なるほど〜", "それで？どうなったんですか？", "大変でしたね"], answer: 2, explanation: "「それで？」「どうなったんですか？」は相手に続きを促すあいづちで、会話を自然に引き出せます。" }
            ]
        },
        {
            id: 104, title: "雑談の終わらせ方", duration: "8分",
            content: `
<h2>👋 雑談の終わらせ方</h2>
<div class="info-box tip"><div class="info-box-title">💡 ポイント</div><p>雑談は<strong>始め方より終わらせ方が難しい</strong>。自然に切り上げるテクニックを持っておくと、気まずくならずに済みます。</p></div>
<h3>🎬 自然な切り上げ方 4パターン</h3>
<div class="steps">
<div class="step"><div class="step-num">1</div><div class="step-content"><strong>時間を理由にする</strong>「あ、そろそろ会議の時間なので！また話しましょう」— 最も自然で万能な方法。</div></div>
<div class="step"><div class="step-num">2</div><div class="step-content"><strong>感謝で締める</strong>「楽しかったです！ありがとうございます」— ポジティブな印象で終われる。</div></div>
<div class="step"><div class="step-num">3</div><div class="step-content"><strong>次につなげる</strong>「その話、今度もっと詳しく聞かせてください！」— 次回の会話のきっかけを作る。</div></div>
<div class="step"><div class="step-num">4</div><div class="step-content"><strong>まとめて終わる</strong>「いや〜、〇〇さんの話はいつも面白いですね！」— 相手を立てて締める。</div></div>
</div>
<h3>🚫 NGな終わらせ方</h3>
<div class="compare-grid">
<div class="compare-card" style="border-left:4px solid #EF4444;"><h4 style="color:#EF4444;">❌ NGパターン</h4><ul>
<li>唐突に無言で立ち去る</li><li>「あ、もういいです」</li><li>スマホを見始める</li><li>露骨に時計を見る</li></ul></div>
<div class="compare-card" style="border-left:4px solid #10B981;"><h4 style="color:#10B981;">✅ スマートな終わり方</h4><ul>
<li>「そろそろ行かなきゃ。またお話しましょう！」</li><li>「楽しかったです、ありがとうございます！」</li><li>「続きはまた今度！」</li><li>「お仕事頑張ってください！」</li></ul></div>
</div>
<div class="info-box success"><div class="info-box-title">✅ このモジュールのまとめ</div><ul>
<li>雑談は<strong>ダラダラ続けない</strong>。短くても好印象を残せる</li>
<li><strong>時間を理由</strong>にするのが最も自然な切り上げ方</li>
<li><strong>感謝の言葉</strong>で締めるとポジティブな余韻が残る</li>
<li><strong>「また話しましょう」</strong>で次につなげると関係が続く</li></ul></div>`,
            quiz: [
                { id: "q104_1", type: "choice", question: "雑談の自然な終わらせ方として最も適切なのはどれですか？", options: ["無言で立ち去る", "スマホを見始める", "時間を理由に感謝を伝えて切り上げる", "「もういいです」と言う"], answer: 2, explanation: "「そろそろ時間なので。楽しかったです！」のように、時間を理由にしつつ感謝を伝えるのが最も自然です。" },
                { id: "q104_2", type: "choice", question: "雑談を次につなげるのに有効なフレーズはどれですか？", options: ["もう話すことないですね", "その話、今度もっと聞かせてください", "あ、どうでもいい話でしたね", "忙しいので失礼します"], answer: 1, explanation: "「今度もっと聞かせてください」は次回の会話のきっかけを自然に作れるフレーズです。" },
                { id: "q104_3", type: "choice", question: "雑談の長さについて正しいのはどれですか？", options: ["長ければ長いほど良い", "必ず30分以上話すべき", "短くても好印象を残せる", "5分以下は失礼にあたる"], answer: 2, explanation: "雑談はダラダラ続ける必要はなく、短くても好印象を残すことができます。" }
            ]
        }
    ]
};
