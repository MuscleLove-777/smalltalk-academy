/* ============================================
   Level 6: 雑談マスターへの道
   ============================================ */
const LEVEL6_DATA = {
    id: 6,
    title: "雑談マスターへの道",
    icon: "🏆",
    description: "ビジネス雑談、異文化コミュニケーション、SNS活用、日々のトレーニングで雑談マスターを目指す",
    modules: [
        /* =========================================
           Module 601: ビジネス雑談 — 営業・商談・接待での雑談
           ========================================= */
        {
            id: 601,
            title: "ビジネス雑談 — 営業・商談・接待での雑談",
            duration: "12分",
            content: `
<h2>ビジネス雑談 — 営業・商談・接待での雑談</h2>
<p>ビジネスシーンでの雑談は、単なる世間話ではありません。<strong>信頼構築の戦略的ツール</strong>です。トップ営業パーソンや経営者ほど雑談を重視しており、商談の成否は「本題に入る前の雑談」で8割決まるとも言われています。</p>

<div class="info-box tip">
    <div class="info-box-title">💡 なぜビジネスに雑談が必要なのか？</div>
    <p>営業コンサルタントの調査によると、<strong>初回商談で雑談に5分以上費やした営業パーソンは、すぐに本題に入った場合と比較して成約率が約40%高い</strong>というデータがあります。雑談は「遠回り」ではなく、信頼関係構築への「近道」なのです。</p>
</div>

<h3>1. 信頼構築としての雑談</h3>
<p>ビジネス雑談には3つの戦略的な目的があります。</p>

<div class="visual-box">
    <div class="visual-box-title">🎯 ビジネス雑談の3つの目的</div>
    <table>
        <tr>
            <th>目的</th>
            <th>効果</th>
            <th>具体例</th>
        </tr>
        <tr>
            <td><strong>① アイスブレイク</strong></td>
            <td>緊張をほぐし、リラックスした雰囲気を作る</td>
            <td>「今日は暑いですね。こちらのオフィスは涼しくて助かります」</td>
        </tr>
        <tr>
            <td><strong>② ラポール形成</strong></td>
            <td>共通点を見つけて親近感を高める</td>
            <td>「御社のある〇〇エリア、実は私もよく行くんです」</td>
        </tr>
        <tr>
            <td><strong>③ 情報収集</strong></td>
            <td>相手の関心事やニーズを自然に把握する</td>
            <td>「最近の業界の動向、どう見ていらっしゃいますか？」</td>
        </tr>
    </table>
</div>

<h3>2. 商談前のウォームアップ — タイミングと話題</h3>

<div class="steps">
    <div class="step">
        <div class="step-num">1</div>
        <div class="step-content">
            <h3>到着〜着席（1〜2分）：環境ネタ</h3>
            <p>オフィスの雰囲気、立地、受付の対応など<strong>目の前にあるもの</strong>をネタにします。「素敵なオフィスですね」「駅から近くて便利な場所ですね」など。観察力を示しつつ、自然に会話を始められます。</p>
        </div>
    </div>
    <div class="step">
        <div class="step-num">2</div>
        <div class="step-content">
            <h3>名刺交換〜本題前（3〜5分）：共通点探し</h3>
            <p>出身地、趣味、前職など<strong>共通項</strong>を探ります。「名刺に〇〇大学と書いてありますが、実は私も…」のように自然に。ただし、プライベートに踏み込みすぎないよう注意。</p>
        </div>
    </div>
    <div class="step">
        <div class="step-num">3</div>
        <div class="step-content">
            <h3>本題への移行：ブリッジフレーズ</h3>
            <p>雑談から本題へのスムーズな移行が重要です。「ところで、本日は〇〇の件でお時間いただきまして…」「さて、早速ですが…」など、<strong>ブリッジとなる一言</strong>を用意しておきましょう。</p>
        </div>
    </div>
</div>

<h3>3. 業界ネタの仕入れ方</h3>
<p>ビジネス雑談で最も効果的な話題の一つが「業界ネタ」です。相手の業界に関心を持っていることを示すだけで、信頼度は格段に上がります。</p>

<div class="visual-box">
    <div class="visual-box-title">📰 業界ネタの情報ソース</div>
    <table>
        <tr>
            <th>ソース</th>
            <th>活用法</th>
            <th>おすすめ度</th>
        </tr>
        <tr>
            <td><strong>相手企業のプレスリリース</strong></td>
            <td>「先日発表された新サービス、拝見しました」</td>
            <td>◎（必須）</td>
        </tr>
        <tr>
            <td><strong>業界専門メディア</strong></td>
            <td>「〇〇業界では今△△がトレンドですよね」</td>
            <td>◎</td>
        </tr>
        <tr>
            <td><strong>相手のSNS・ブログ</strong></td>
            <td>「社長のブログ、いつも拝読しています」</td>
            <td>○（触れすぎ注意）</td>
        </tr>
        <tr>
            <td><strong>日経新聞・経済ニュース</strong></td>
            <td>「今朝の日経に御社の業界の記事が出ていましたね」</td>
            <td>○</td>
        </tr>
        <tr>
            <td><strong>展示会・セミナー情報</strong></td>
            <td>「先日の〇〇展示会には行かれましたか？」</td>
            <td>○</td>
        </tr>
    </table>
</div>

<div class="info-box warning">
    <div class="info-box-title">⚠️ ビジネス雑談のNG</div>
    <p><strong>① 政治・宗教・プロ野球の話</strong>：意見が分かれるテーマは避ける。特に初対面では鉄則。</p>
    <p><strong>② 競合他社の悪口</strong>：「A社さんは最近ダメですよね」のような発言は、自社の品格を下げる。</p>
    <p><strong>③ 調べればわかることを質問する</strong>：「御社は何をされている会社ですか？」は準備不足の証拠。</p>
    <p><strong>④ 雑談が長すぎる</strong>：商談の場での雑談は5分程度がベスト。長引くと「時間を奪う人」と思われる。</p>
</div>

<h3>4. 接待での雑談 — 3つの鉄則</h3>

<div class="compare-grid">
    <div class="compare-card">
        <h3>🍽️ 接待雑談の鉄則</h3>
        <ul>
            <li><strong>鉄則1：主役は相手</strong> — 相手が7割話すペースを作る</li>
            <li><strong>鉄則2：お店の話題を活用</strong> — 料理、お酒、雰囲気をきっかけに</li>
            <li><strong>鉄則3：仕事の話は相手から</strong> — 自分からビジネスの話を切り出さない</li>
        </ul>
    </div>
    <div class="compare-card">
        <h3>🚫 接待でのNG行動</h3>
        <ul>
            <li>自分や自社の自慢話ばかりする</li>
            <li>お酒の席で本音を引き出そうとする</li>
            <li>相手が断った後もお酒をすすめる</li>
            <li>翌日に接待の内容を社内で話す</li>
        </ul>
    </div>
</div>

<div class="scenario-box good">
    <h3>💬 良い例：商談前のウォームアップ</h3>
    <p>「御社のエントランスにある企業理念のパネル、拝見しました。『人と人をつなぐ』という言葉が印象的で。創業当時からこの理念なんですか？」<br>
    → 相手企業への関心を自然に示しつつ、相手が語りたくなる話題を振っている。</p>
</div>

<div class="scenario-box bad">
    <h3>💬 悪い例：準備不足の雑談</h3>
    <p>「えーと、御社は…何の事業をされてるんでしたっけ？」<br>
    → 事前準備の欠如が露呈し、「この人に任せて大丈夫か？」と不信感を抱かせる。</p>
</div>

<div class="info-box success">
    <div class="info-box-title">✅ ビジネス雑談の極意</div>
    <p>ビジネス雑談の極意は<strong>「準備8割、アドリブ2割」</strong>です。相手企業のWebサイト、ニュース、SNSを事前にチェックし、話題のストックを3つ以上用意しておきましょう。その上で、当日の相手の様子に合わせてアドリブで対応する。この「準備された自然体」が、プロの雑談力です。</p>
</div>
`,
            quiz: [
                {
                    id: "q601_1",
                    type: "choice",
                    question: "ビジネス雑談の3つの戦略的目的に含まれないものはどれですか？",
                    options: [
                        "アイスブレイク（緊張をほぐす）",
                        "ラポール形成（親近感を高める）",
                        "マウンティング（自社の優位性を示す）",
                        "情報収集（相手のニーズを把握する）"
                    ],
                    answer: 2,
                    explanation: "ビジネス雑談の3つの戦略的目的は「アイスブレイク」「ラポール形成」「情報収集」です。マウンティング（自社の優位性を示す）は目的に含まれておらず、むしろ信頼を損なうNG行動です。"
                },
                {
                    id: "q601_2",
                    type: "choice",
                    question: "商談前の雑談で、名刺交換から本題に入るまでの時間として最も適切なのはどれですか？",
                    options: [
                        "雑談はせず、すぐに本題に入るべき",
                        "3〜5分程度の共通点探しや軽い話題",
                        "15〜20分かけてじっくり相手を知る",
                        "30分以上の食事を兼ねた雑談"
                    ],
                    answer: 1,
                    explanation: "商談前の雑談は3〜5分程度が適切です。名刺交換後に共通点を探す程度の時間をかけ、ブリッジフレーズを使って本題にスムーズに移行します。長すぎると「時間を奪う人」と思われます。"
                },
                {
                    id: "q601_3",
                    type: "choice",
                    question: "ビジネス雑談の極意として本文で述べられている「準備とアドリブの比率」はどれですか？",
                    options: [
                        "準備2割、アドリブ8割",
                        "準備5割、アドリブ5割",
                        "準備8割、アドリブ2割",
                        "全てアドリブで対応するのがプロ"
                    ],
                    answer: 2,
                    explanation: "ビジネス雑談の極意は「準備8割、アドリブ2割」です。相手企業のWebサイト、ニュース、SNSを事前にチェックして話題を3つ以上用意し、当日は相手の様子に合わせてアドリブで対応する「準備された自然体」が理想です。"
                }
            ]
        },

        /* =========================================
           Module 602: 国際的な雑談 — 異文化コミュニケーション
           ========================================= */
        {
            id: 602,
            title: "国際的な雑談 — 異文化コミュニケーション",
            duration: "10分",
            content: `
<h2>国際的な雑談 — 異文化コミュニケーション</h2>
<p>グローバル化が進む現代、異なる文化背景を持つ人との雑談機会は増えています。日本の常識が世界の非常識になることも。<strong>文化による雑談の違い</strong>を理解し、誰とでも心地よい会話ができるスキルを身につけましょう。</p>

<div class="info-box tip">
    <div class="info-box-title">💡 スモールトークは世界共通のビジネススキル</div>
    <p>英語圏では雑談のことを<strong>「Small Talk」</strong>と呼び、ビジネスパーソンの必須スキルとされています。アメリカでは商談の前にスモールトークをしないのはむしろ「失礼」とされるほどです。文化を超えた雑談力は、グローバル人材の必須能力です。</p>
</div>

<h3>1. 文化による雑談の違い</h3>

<div class="visual-box">
    <div class="visual-box-title">🌍 国・地域別 雑談の特徴</div>
    <table>
        <tr>
            <th>国・地域</th>
            <th>雑談の特徴</th>
            <th>好まれる話題</th>
        </tr>
        <tr>
            <td><strong>日本</strong></td>
            <td>天気・季節の話題から入る。間接的な表現を好む</td>
            <td>天気、食べ物、旅行、趣味</td>
        </tr>
        <tr>
            <td><strong>アメリカ</strong></td>
            <td>フレンドリーでオープン。初対面でも積極的に話す</td>
            <td>週末の予定、スポーツ、映画、旅行</td>
        </tr>
        <tr>
            <td><strong>イギリス</strong></td>
            <td>天気の話が定番。皮肉やウィットを好む</td>
            <td>天気、ニュース、文化、旅行</td>
        </tr>
        <tr>
            <td><strong>中国</strong></td>
            <td>食事の話題が多い。関係構築（関係=グアンシ）を重視</td>
            <td>食事、家族、出身地、ビジネスの成功</td>
        </tr>
        <tr>
            <td><strong>中東</strong></td>
            <td>おもてなし文化。雑談を非常に長く楽しむ</td>
            <td>家族、健康、文化、相手の国への関心</td>
        </tr>
        <tr>
            <td><strong>北欧</strong></td>
            <td>パーソナルスペースを重視。短めの会話を好む</td>
            <td>自然、アウトドア、デザイン、テクノロジー</td>
        </tr>
    </table>
</div>

<h3>2. 異文化コミュニケーションでのタブー</h3>

<div class="info-box warning">
    <div class="info-box-title">⚠️ 世界共通のタブー話題</div>
    <p><strong>① 宗教</strong>：信仰は非常に個人的なテーマ。特にビジネスの場では絶対に避ける。</p>
    <p><strong>② 政治</strong>：政治的立場の表明は対立を生む。国際関係の微妙な問題は特に注意。</p>
    <p><strong>③ 収入・給料</strong>：多くの文化で収入を聞くのは失礼とされる。日本では比較的話題にしやすいが要注意。</p>
    <p><strong>④ 年齢・体重</strong>：欧米では特にセンシティブ。「おいくつですか？」は初対面で聞かない。</p>
    <p><strong>⑤ ネガティブな国際比較</strong>：「日本の方が優れている」のような比較は相手の文化への敬意を欠く。</p>
</div>

<div class="visual-box">
    <div class="visual-box-title">🚫 文化別・特に注意すべきタブー</div>
    <table>
        <tr>
            <th>国・地域</th>
            <th>特に避けるべき話題</th>
            <th>理由</th>
        </tr>
        <tr>
            <td><strong>アメリカ</strong></td>
            <td>人種、銃規制、中絶問題</td>
            <td>社会的に非常に分断されたテーマ</td>
        </tr>
        <tr>
            <td><strong>韓国</strong></td>
            <td>日韓の歴史問題、北朝鮮</td>
            <td>感情的になりやすいテーマ</td>
        </tr>
        <tr>
            <td><strong>中国</strong></td>
            <td>台湾・チベット問題、政治体制</td>
            <td>国家の核心的利益に関わるテーマ</td>
        </tr>
        <tr>
            <td><strong>インド</strong></td>
            <td>カースト制度、パキスタンとの関係</td>
            <td>根深い社会問題で安易な言及は失礼</td>
        </tr>
        <tr>
            <td><strong>中東</strong></td>
            <td>イスラエル問題、飲酒の話題</td>
            <td>宗教・政治が複雑に絡むテーマ</td>
        </tr>
    </table>
</div>

<h3>3. 英語での基本スモールトーク表現</h3>
<p>海外の方と英語で雑談する際に使える、シンプルで便利なフレーズを覚えておきましょう。</p>

<div class="visual-box">
    <div class="visual-box-title">💬 シーン別スモールトーク英語フレーズ</div>
    <table>
        <tr>
            <th>シーン</th>
            <th>英語フレーズ</th>
            <th>日本語訳</th>
        </tr>
        <tr>
            <td><strong>出会いの挨拶</strong></td>
            <td>How was your trip here?</td>
            <td>ここまでの移動はどうでしたか？</td>
        </tr>
        <tr>
            <td><strong>天気の話題</strong></td>
            <td>Beautiful weather today, isn't it?</td>
            <td>今日はいい天気ですね</td>
        </tr>
        <tr>
            <td><strong>週末の話題</strong></td>
            <td>Do you have any plans for the weekend?</td>
            <td>週末の予定はありますか？</td>
        </tr>
        <tr>
            <td><strong>相手の国への関心</strong></td>
            <td>I've always wanted to visit your country.</td>
            <td>ずっとあなたの国に行ってみたかったんです</td>
        </tr>
        <tr>
            <td><strong>食べ物の話題</strong></td>
            <td>Have you tried any local food yet?</td>
            <td>もう現地の料理は試しましたか？</td>
        </tr>
        <tr>
            <td><strong>話題の転換</strong></td>
            <td>By the way, how do you like living in Tokyo?</td>
            <td>ところで、東京での生活はいかがですか？</td>
        </tr>
        <tr>
            <td><strong>本題への移行</strong></td>
            <td>Well, shall we get down to business?</td>
            <td>さて、本題に入りましょうか</td>
        </tr>
    </table>
</div>

<div class="info-box formula">
    <div class="info-box-title">📐 英語スモールトークの基本公式</div>
    <p><strong>① 挨拶 + ② 共通の話題 + ③ 質問で相手に話してもらう + ④ リアクション</strong><br><br>
    例：「Hi, nice to meet you!（①） The weather is really nice today.（②） Have you been to Japan before?（③） Oh, really? That's great!（④）」<br>
    <strong>完璧な英語でなくてOK</strong>。笑顔と相手への関心があれば、多少の文法ミスは気になりません。</p>
</div>

<div class="scenario-box good">
    <h3>💬 良い例：異文化への敬意を示す雑談</h3>
    <p>「日本に来られて、何か驚いたことはありますか？ 私も海外に行くと文化の違いに驚くことが多くて、そういう発見って面白いですよね」<br>
    → 相手の視点に立ち、文化の違いをポジティブに捉えている。対等な関係を築ける。</p>
</div>

<div class="scenario-box bad">
    <h3>💬 悪い例：無意識な文化的失礼</h3>
    <p>「えっ、〇〇の国の人なんですか？ テレビで見たけど、あそこって危ないんでしょう？」<br>
    → ステレオタイプに基づく発言で、相手の母国を否定している。非常に失礼。</p>
</div>

<div class="info-box success">
    <div class="info-box-title">✅ 異文化雑談の心構え</div>
    <p>異文化コミュニケーションで最も大切なのは<strong>「知らないことを素直に認める姿勢」</strong>です。全ての文化を知っている必要はありません。「あなたの国のことをもっと教えてください」と率直に興味を示すことが、最高の雑談の入り口になります。<strong>好奇心と敬意</strong>があれば、言葉の壁は必ず乗り越えられます。</p>
</div>
`,
            quiz: [
                {
                    id: "q602_1",
                    type: "choice",
                    question: "異文化コミュニケーションにおける「世界共通のタブー話題」に該当しないものはどれですか？",
                    options: [
                        "宗教に関する話題",
                        "天気や季節に関する話題",
                        "収入や給料に関する話題",
                        "政治に関する話題"
                    ],
                    answer: 1,
                    explanation: "天気や季節に関する話題は世界共通のタブーではなく、むしろ多くの国で安全な雑談の入り口とされています。宗教、政治、収入・給料、年齢・体重、ネガティブな国際比較が世界共通のタブーです。"
                },
                {
                    id: "q602_2",
                    type: "choice",
                    question: "アメリカでのビジネスシーンにおけるスモールトークの位置づけとして、本文の説明に最も近いものはどれですか？",
                    options: [
                        "スモールトークは時間の無駄であり省略すべき",
                        "スモールトークをしないのはむしろ失礼とされるほど重要",
                        "スモールトークは日本独自の文化であり海外では不要",
                        "スモールトークは食事の場だけで行う"
                    ],
                    answer: 1,
                    explanation: "本文によると、アメリカでは商談の前にスモールトークをしないのは「失礼」とされるほど重要視されています。英語圏全般でスモールトークはビジネスパーソンの必須スキルとされています。"
                },
                {
                    id: "q602_3",
                    type: "choice",
                    question: "英語でのスモールトーク基本公式の正しい順序はどれですか？",
                    options: [
                        "質問 → リアクション → 挨拶 → 共通の話題",
                        "挨拶 → 共通の話題 → 質問で相手に話してもらう → リアクション",
                        "共通の話題 → 挨拶 → リアクション → 質問",
                        "リアクション → 質問 → 共通の話題 → 挨拶"
                    ],
                    answer: 1,
                    explanation: "英語スモールトークの基本公式は「① 挨拶 → ② 共通の話題 → ③ 質問で相手に話してもらう → ④ リアクション」の順です。まず挨拶で場を温め、共通の話題を出し、質問で相手に話してもらい、リアクションで会話を広げます。"
                }
            ]
        },

        /* =========================================
           Module 603: SNS時代の雑談力
           ========================================= */
        {
            id: 603,
            title: "SNS時代の雑談力",
            duration: "10分",
            content: `
<h2>SNS時代の雑談力</h2>
<p>Instagram、X（旧Twitter）、TikTok、YouTube——私たちはSNSを通じて日々膨大な情報に触れています。この情報の宝庫を<strong>雑談のネタ</strong>として活用する方法と、リアルとオンラインの雑談をうまく融合させるテクニックを学びます。</p>

<div class="info-box tip">
    <div class="info-box-title">💡 SNSは現代の「共通言語」</div>
    <p>総務省の調査によると、日本人のSNS利用率は<strong>80%以上</strong>。特に20〜40代ではほぼ全員が何らかのSNSを利用しています。つまり、SNSの話題は<strong>年齢・職業を超えた共通の話題</strong>になり得るのです。ただし、使い方を間違えると逆効果になることも。</p>
</div>

<h3>1. SNSネタの活用法</h3>

<div class="visual-box">
    <div class="visual-box-title">📱 SNS別・雑談ネタの活用法</div>
    <table>
        <tr>
            <th>SNS</th>
            <th>活用しやすいネタ</th>
            <th>雑談での切り出し方</th>
        </tr>
        <tr>
            <td><strong>X（旧Twitter）</strong></td>
            <td>トレンド、ニュース、面白いツイート</td>
            <td>「今Xでバズってるんですけど、〇〇って知ってます？」</td>
        </tr>
        <tr>
            <td><strong>Instagram</strong></td>
            <td>グルメ、旅行、おしゃれスポット</td>
            <td>「インスタで見たんですけど、〇〇のカフェが素敵で」</td>
        </tr>
        <tr>
            <td><strong>TikTok</strong></td>
            <td>トレンド動画、ライフハック、面白ネタ</td>
            <td>「TikTokで流行ってる〇〇チャレンジ、見ました？」</td>
        </tr>
        <tr>
            <td><strong>YouTube</strong></td>
            <td>How-to、ドキュメンタリー、エンタメ</td>
            <td>「YouTubeで面白い動画見つけたんですよ」</td>
        </tr>
        <tr>
            <td><strong>LINE</strong></td>
            <td>スタンプ、ニュースタブ、オープンチャット</td>
            <td>「最近のLINEスタンプ、面白いの多いですよね」</td>
        </tr>
    </table>
</div>

<h3>2. SNSネタを使う際の注意点</h3>

<div class="info-box warning">
    <div class="info-box-title">⚠️ SNSネタの5つの落とし穴</div>
    <p><strong>① フェイクニュースの拡散</strong>：SNSで見た情報を鵜呑みにして雑談で話すと、間違った情報を広めることになる。「〇〇らしいですよ」と伝聞形を使い、断定しない。</p>
    <p><strong>② 相手のSNSを詮索しすぎる</strong>：「昨日〇〇にいたでしょ？インスタで見たよ」は監視されているように感じさせる。「SNSで見たけど」と前置きを付ける程度にとどめる。</p>
    <p><strong>③ 世代間ギャップ</strong>：TikTokの話題を上の世代に振っても通じないことがある。相手のSNS利用状況を見極めてからネタを選ぶ。</p>
    <p><strong>④ 炎上ネタに触れる</strong>：誰かの炎上案件を雑談で持ち出すと、意見の対立や不快感を生む可能性がある。</p>
    <p><strong>⑤ 「いいね」の強要</strong>：「自分の投稿見てくれた？」「いいね押してよ」は雑談ではなく押しつけ。</p>
</div>

<h3>3. リアル雑談とオンライン雑談の融合</h3>

<div class="compare-grid">
    <div class="compare-card">
        <h3>🏢 リアル雑談の強み</h3>
        <ul>
            <li><strong>非言語情報</strong>が豊富（表情、声のトーン、距離感）</li>
            <li><strong>偶発的な出会い</strong>から会話が生まれる</li>
            <li>場の<strong>空気感</strong>を共有できる</li>
            <li>食事・飲み物を<strong>一緒に楽しめる</strong></li>
            <li><strong>信頼構築</strong>の効果が高い</li>
        </ul>
    </div>
    <div class="compare-card">
        <h3>💻 オンライン雑談の強み</h3>
        <ul>
            <li><strong>場所を選ばない</strong>（リモートワークでも可能）</li>
            <li><strong>テキストで記録</strong>が残る</li>
            <li><strong>画像・動画を即共有</strong>できる</li>
            <li><strong>時間の制約が少ない</strong>（非同期でも可）</li>
            <li><strong>内向的な人</strong>も参加しやすい</li>
        </ul>
    </div>
</div>

<div class="steps">
    <div class="step">
        <div class="step-num">1</div>
        <div class="step-content">
            <h3>オンラインで種をまき、リアルで花を咲かせる</h3>
            <p>SlackやTeamsでの「おすすめランチ情報」のような<strong>軽いオンラインの雑談</strong>が、リアルで会った時の「あの店行きました？」という会話につながります。オンラインとリアルを行き来することで雑談の循環が生まれます。</p>
        </div>
    </div>
    <div class="step">
        <div class="step-num">2</div>
        <div class="step-content">
            <h3>ビデオ通話での雑談タイム</h3>
            <p>リモートワークの会議では、開始前の<strong>2〜3分を雑談タイム</strong>に充てましょう。「週末何してました？」「最近ハマってるものありますか？」など。画面越しでも雑談は十分に機能します。</p>
        </div>
    </div>
    <div class="step">
        <div class="step-num">3</div>
        <div class="step-content">
            <h3>写真・動画を雑談のきっかけにする</h3>
            <p>スマホで撮った写真を見せながら「先週ここに行ったんですけど…」と話すのは、<strong>最も手軽で効果的な雑談の入り口</strong>です。視覚情報があると会話が具体的になり、相手も反応しやすくなります。</p>
        </div>
    </div>
</div>

<h3>4. 写真・動画を会話のきっかけにするコツ</h3>

<div class="visual-box">
    <div class="visual-box-title">📸 雑談に使える写真・動画のジャンル</div>
    <table>
        <tr>
            <th>ジャンル</th>
            <th>具体例</th>
            <th>会話の広がり方</th>
        </tr>
        <tr>
            <td><strong>グルメ</strong></td>
            <td>美味しかった料理、話題のお店</td>
            <td>「ここ行ったことありますか？」→ おすすめ交換に発展</td>
        </tr>
        <tr>
            <td><strong>旅行・お出かけ</strong></td>
            <td>旅先の風景、観光スポット</td>
            <td>「次はどこ行きたいですか？」→ 旅行トークに発展</td>
        </tr>
        <tr>
            <td><strong>ペット</strong></td>
            <td>犬・猫の写真や動画</td>
            <td>「可愛い！何歳ですか？」→ ペットトークは鉄板</td>
        </tr>
        <tr>
            <td><strong>面白ネタ</strong></td>
            <td>街中の面白い看板、偶然の産物</td>
            <td>「これ見てください（笑）」→ 笑いから会話がスタート</td>
        </tr>
        <tr>
            <td><strong>趣味</strong></td>
            <td>DIY作品、スポーツの瞬間</td>
            <td>「すごい！どうやったんですか？」→ 趣味の深掘りに</td>
        </tr>
    </table>
</div>

<div class="scenario-box good">
    <h3>💬 良い例：SNSネタの活用</h3>
    <p>「インスタで見つけたんですけど、駅前に新しくオープンしたパン屋さん、すごく美味しそうで。〇〇さん、パン好きでしたよね？ 今度行ってみません？」<br>
    → SNSの情報 + 相手の好みの記憶 + 次のアクションの提案。雑談から関係構築につながる。</p>
</div>

<div class="scenario-box bad">
    <h3>💬 悪い例：SNSネタのNG使い方</h3>
    <p>「〇〇さん、昨日インスタに彼女との写真載せてましたよね？ あの子誰ですか？」<br>
    → プライベートの詮索は不快感を与える。SNSで見たとしても触れるべきでない情報がある。</p>
</div>

<div class="info-box success">
    <div class="info-box-title">✅ SNS時代の雑談の鉄則</div>
    <p>SNSは雑談の<strong>「ネタ帳」</strong>として最強のツールです。ただし、<strong>「見た」と「話す」の間にフィルターを挟む</strong>ことが大切です。相手が公開している情報だからといって何でも話題にしていいわけではありません。「この話題を出したら相手は嬉しいか？不快か？」を一瞬で判断するセンスを磨きましょう。</p>
</div>
`,
            quiz: [
                {
                    id: "q603_1",
                    type: "choice",
                    question: "SNSネタを雑談で使う際の注意点として、本文で挙げられていないものはどれですか？",
                    options: [
                        "フェイクニュースを鵜呑みにして拡散しないこと",
                        "相手のSNSを詮索しすぎないこと",
                        "SNSを全く使っていない人には話題を振らないこと",
                        "炎上ネタに安易に触れないこと"
                    ],
                    answer: 2,
                    explanation: "本文で挙げられている注意点は「フェイクニュースの拡散」「相手のSNSを詮索しすぎない」「世代間ギャップ」「炎上ネタに触れない」「いいねの強要」の5つです。「SNSを使っていない人に話題を振らない」は挙げられていません。"
                },
                {
                    id: "q603_2",
                    type: "choice",
                    question: "リアル雑談とオンライン雑談の融合について、本文で推奨されている方法はどれですか？",
                    options: [
                        "リアル雑談は廃止し、全てオンラインに移行する",
                        "オンラインで軽い雑談の種をまき、リアルで会った時に発展させる",
                        "オンラインでは業務連絡のみにし、雑談はリアルだけで行う",
                        "リアルとオンラインは完全に分けて別々の話題にする"
                    ],
                    answer: 1,
                    explanation: "本文では「オンラインで種をまき、リアルで花を咲かせる」方法が推奨されています。SlackやTeamsでの軽い情報交換がリアルでの雑談につながり、オンラインとリアルを行き来する循環を作ることが効果的です。"
                },
                {
                    id: "q603_3",
                    type: "choice",
                    question: "写真・動画を雑談のきっかけにする際の利点として、本文で述べられているのはどれですか？",
                    options: [
                        "相手に自分の生活レベルをアピールできる",
                        "言葉だけよりも視覚情報があると会話が具体的になり相手も反応しやすい",
                        "写真を見せれば話す必要がなくなり楽ができる",
                        "SNSのフォロワーを増やすきっかけになる"
                    ],
                    answer: 1,
                    explanation: "本文では、スマホの写真を見せながら話すことは「最も手軽で効果的な雑談の入り口」であり、視覚情報があると会話が具体的になり相手も反応しやすくなると述べられています。"
                }
            ]
        },

        /* =========================================
           Module 604: 日々の雑談力トレーニング
           ========================================= */
        {
            id: 604,
            title: "日々の雑談力トレーニング",
            duration: "10分",
            content: `
<h2>日々の雑談力トレーニング</h2>
<p>雑談力はスポーツと同じで、<strong>日々のトレーニング</strong>で確実に上達します。このモジュールでは、毎日の習慣として取り入れられる雑談力アップの方法と、全6レベルの総まとめを行います。あなたの雑談マスターへの旅の仕上げです。</p>

<div class="info-box tip">
    <div class="info-box-title">💡 雑談力は「才能」ではなく「習慣」</div>
    <p>「話が上手い人は生まれつき」と思いがちですが、それは誤解です。<strong>雑談力はトレーニングで伸ばせるスキル</strong>です。プロのお笑い芸人も、日々のネタ仕込みと練習を欠かしません。毎日10分の習慣を3ヶ月続けるだけで、あなたの雑談力は別人レベルに変わります。</p>
</div>

<h3>1. 毎日のネタ仕込み習慣</h3>
<p>雑談上手な人は、常に「ネタのストック」を持っています。意識的にネタを仕入れる習慣を作りましょう。</p>

<div class="visual-box">
    <div class="visual-box-title">📅 1日のネタ仕込みルーティン</div>
    <table>
        <tr>
            <th>時間帯</th>
            <th>アクション</th>
            <th>所要時間</th>
            <th>得られるネタ</th>
        </tr>
        <tr>
            <td><strong>朝</strong></td>
            <td>ニュースアプリで見出しをチェック</td>
            <td>3分</td>
            <td>時事ネタ、トレンド</td>
        </tr>
        <tr>
            <td><strong>通勤中</strong></td>
            <td>周囲を観察する（新しいお店、季節の変化）</td>
            <td>—</td>
            <td>地域ネタ、季節ネタ</td>
        </tr>
        <tr>
            <td><strong>昼休み</strong></td>
            <td>SNSのトレンドを軽くチェック</td>
            <td>3分</td>
            <td>バズネタ、エンタメネタ</td>
        </tr>
        <tr>
            <td><strong>夕方</strong></td>
            <td>今日あった「ちょっとした出来事」を振り返る</td>
            <td>2分</td>
            <td>自分のエピソードネタ</td>
        </tr>
        <tr>
            <td><strong>夜</strong></td>
            <td>雑談日記に3行書く（後述）</td>
            <td>2分</td>
            <td>ネタの定着・蓄積</td>
        </tr>
    </table>
</div>

<div class="info-box formula">
    <div class="info-box-title">📐 ネタ仕込みの3ジャンル法則</div>
    <p>毎日<strong>3つのジャンル</strong>から1つずつネタをストックする習慣をつけましょう。<br>
    <strong>① 時事・ニュース</strong>（今日のトップニュース）<br>
    <strong>② 身の回り</strong>（自分が体験した出来事や発見）<br>
    <strong>③ エンタメ</strong>（テレビ、映画、音楽、グルメなど）<br><br>
    この3つがあれば、<strong>どんな相手とでも最低1つは共通の話題</strong>が見つかります。</p>
</div>

<h3>2. 雑談日記のつけ方</h3>
<p>「雑談日記」は、雑談力を飛躍的に伸ばす最強のツールです。毎晩たった3行書くだけでOK。</p>

<div class="steps">
    <div class="step">
        <div class="step-num">1</div>
        <div class="step-content">
            <h3>1行目：今日話したこと</h3>
            <p>今日誰とどんな雑談をしたかを簡潔に書きます。「同僚の田中さんと昼休みにドラマの話をした」のように。<strong>誰と・何を</strong>がわかればOKです。</p>
        </div>
    </div>
    <div class="step">
        <div class="step-num">2</div>
        <div class="step-content">
            <h3>2行目：うまくいった点 or 反省点</h3>
            <p>「相手が笑ってくれた」「話を広げられなかった」など、<strong>自己評価</strong>を1文で。良い点を見つけることで自信がつき、反省点を見つけることで改善が進みます。</p>
        </div>
    </div>
    <div class="step">
        <div class="step-num">3</div>
        <div class="step-content">
            <h3>3行目：明日使えそうなネタ</h3>
            <p>今日仕入れた情報や思いついた話題を1つメモします。「明日は〇〇さんに旅行の話を聞いてみよう」のように、<strong>明日の雑談プラン</strong>を立てると実行率が上がります。</p>
        </div>
    </div>
</div>

<div class="visual-box">
    <div class="visual-box-title">📓 雑談日記の記入例</div>
    <table>
        <tr>
            <th>日付</th>
            <th>① 今日話したこと</th>
            <th>② うまくいった/反省</th>
            <th>③ 明日のネタ</th>
        </tr>
        <tr>
            <td>3/1</td>
            <td>後輩の佐藤さんとコーヒーの話</td>
            <td>○ 佐藤さんの趣味を新発見できた</td>
            <td>駅前の新しいカフェの話を振る</td>
        </tr>
        <tr>
            <td>3/2</td>
            <td>上司と朝の挨拶＋天気の話</td>
            <td>△ 話が広がらなかった</td>
            <td>週末の天気→お出かけネタに展開</td>
        </tr>
        <tr>
            <td>3/3</td>
            <td>取引先の方と業界ニュースの話</td>
            <td>◎ 「よくご存知ですね」と褒められた</td>
            <td>相手のプレスリリースをチェック</td>
        </tr>
    </table>
</div>

<h3>3. お店の人との練習</h3>
<p>雑談力トレーニングの最高の練習場所は<strong>「お店」</strong>です。コンビニ、カフェ、居酒屋、美容院——日常的に行く場所で店員さんと一言交わす練習をしましょう。</p>

<div class="visual-box">
    <div class="visual-box-title">🏪 場所別・練習フレーズ</div>
    <table>
        <tr>
            <th>場所</th>
            <th>練習フレーズ</th>
            <th>難易度</th>
        </tr>
        <tr>
            <td><strong>コンビニ</strong></td>
            <td>「ありがとうございます」を笑顔で言う</td>
            <td>★☆☆（初級）</td>
        </tr>
        <tr>
            <td><strong>カフェ</strong></td>
            <td>「おすすめって何ですか？」と聞く</td>
            <td>★★☆（中級）</td>
        </tr>
        <tr>
            <td><strong>居酒屋</strong></td>
            <td>「この料理美味しいですね、何が入ってるんですか？」</td>
            <td>★★☆（中級）</td>
        </tr>
        <tr>
            <td><strong>美容院</strong></td>
            <td>「最近どんな髪型が流行ってますか？」</td>
            <td>★★★（上級）</td>
        </tr>
        <tr>
            <td><strong>タクシー</strong></td>
            <td>「この辺りで美味しいお店ってどこですか？」</td>
            <td>★★★（上級）</td>
        </tr>
    </table>
</div>

<div class="info-box tip">
    <div class="info-box-title">💡 練習のコツ</div>
    <p>最初から長い会話を目指す必要はありません。まずは<strong>「笑顔で一言」</strong>から始めましょう。コンビニで「ありがとうございます」を笑顔で言うだけでも立派なトレーニングです。慣れてきたら少しずつ言葉を増やしていきます。<strong>「量より質」ではなく「質より量」</strong>。とにかく回数を重ねることが上達の近道です。</p>
</div>

<h3>4. 全レベル総まとめ — 雑談マスターへのロードマップ</h3>

<div class="visual-box">
    <div class="visual-box-title">🗺️ 雑談アカデミー 全6レベル総覧</div>
    <table>
        <tr>
            <th>Level</th>
            <th>テーマ</th>
            <th>主要スキル</th>
            <th>キーワード</th>
        </tr>
        <tr>
            <td><strong>Lv1</strong></td>
            <td>雑談の基本</td>
            <td>挨拶、天気・季節の話題、共通点探し、話の広げ方</td>
            <td>アイスブレイク・第一印象</td>
        </tr>
        <tr>
            <td><strong>Lv2</strong></td>
            <td>話題の引き出し</td>
            <td>ネタ帳、木戸に立てかけし衣食住、時事ネタ、趣味の話</td>
            <td>話題のストック・引き出し力</td>
        </tr>
        <tr>
            <td><strong>Lv3</strong></td>
            <td>聞く力・質問力</td>
            <td>傾聴、オープンクエスチョン、相づち、リアクション</td>
            <td>傾聴・共感・質問力</td>
        </tr>
        <tr>
            <td><strong>Lv4</strong></td>
            <td>場面別の雑談術</td>
            <td>初対面、エレベーター、飲み会、オンライン会議</td>
            <td>TPO・場面適応力</td>
        </tr>
        <tr>
            <td><strong>Lv5</strong></td>
            <td>上級テクニック</td>
            <td>ユーモア、ストーリーテリング、沈黙の活用、信頼構築</td>
            <td>ユーモア・間・信頼</td>
        </tr>
        <tr>
            <td><strong>Lv6</strong></td>
            <td>雑談マスターへの道</td>
            <td>ビジネス雑談、異文化対応、SNS活用、日々のトレーニング</td>
            <td>実践・応用・継続</td>
        </tr>
    </table>
</div>

<div class="info-box warning">
    <div class="info-box-title">⚠️ 雑談力が伸びない人の共通点</div>
    <p><strong>① 学んだだけで実践しない</strong>：知識は行動に移してこそ価値がある。「明日1人に話しかける」から始める。</p>
    <p><strong>② 完璧を目指しすぎる</strong>：「面白いことを言わなきゃ」と構えすぎると話せなくなる。普通の会話で十分。</p>
    <p><strong>③ 失敗を恐れすぎる</strong>：話が噛み合わなくても、沈黙になっても、それは成長のチャンス。</p>
    <p><strong>④ 自分だけ変わろうとする</strong>：雑談は相手あってのもの。「うまく話す」より「相手を楽しませる」視点を持つ。</p>
</div>

<div class="info-box formula">
    <div class="info-box-title">📐 雑談力の成長公式</div>
    <p><strong>雑談力 = 知識 × 実践回数 × 振り返り</strong><br><br>
    このアカデミーで<strong>知識</strong>は十分に身につきました。あとは<strong>実践</strong>と<strong>振り返り</strong>を繰り返すだけです。<br>
    雑談日記を毎日つけ、1日1回は誰かに話しかけ、うまくいったことと改善点を記録する。<br>
    この<strong>3ステップを3ヶ月</strong>続ければ、あなたは確実に「雑談マスター」です。</p>
</div>

<div class="info-box success">
    <div class="info-box-title">✅ 雑談アカデミー卒業に向けて — 最終メッセージ</div>
    <p>ここまで全6レベルを学んでいただき、ありがとうございます。雑談力とは、突き詰めれば<strong>「相手に興味を持ち、相手の時間を豊かにしたいと思う気持ち」</strong>です。テクニックも大切ですが、その根底にある<strong>「あなたと話せて嬉しい」という気持ち</strong>こそが、最高の雑談を生み出します。</p>
    <p>さあ、明日から実践です。まずは身近な人に「おはようございます。今日はいい天気ですね」と声をかけることから始めてみてください。あなたの一言が、誰かの一日を少し明るくするかもしれません。<strong>雑談の力で、人間関係をもっと豊かに。</strong></p>
</div>
`,
            quiz: [
                {
                    id: "q604_1",
                    type: "choice",
                    question: "雑談日記の3行目に書くべき内容として、本文で推奨されているのはどれですか？",
                    options: [
                        "今日の天気と気温の記録",
                        "今日のニュースの要約",
                        "明日使えそうなネタや雑談プラン",
                        "今日食べたものの記録"
                    ],
                    answer: 2,
                    explanation: "雑談日記の3行は「① 今日話したこと → ② うまくいった点 or 反省点 → ③ 明日使えそうなネタ」です。3行目に明日の雑談プランを立てることで、実行率が上がります。"
                },
                {
                    id: "q604_2",
                    type: "choice",
                    question: "毎日のネタ仕込みで推奨されている「3ジャンル」の正しい組み合わせはどれですか？",
                    options: [
                        "政治・宗教・スポーツ",
                        "時事ニュース・身の回りの体験・エンタメ",
                        "仕事・家族・健康",
                        "天気・食べ物・趣味"
                    ],
                    answer: 1,
                    explanation: "ネタ仕込みの3ジャンル法則は「① 時事・ニュース（今日のトップニュース）② 身の回り（自分が体験した出来事や発見）③ エンタメ（テレビ、映画、音楽、グルメなど）」です。この3つがあればどんな相手とでも共通の話題が見つかります。"
                },
                {
                    id: "q604_3",
                    type: "choice",
                    question: "本文で紹介されている「雑談力の成長公式」として正しいものはどれですか？",
                    options: [
                        "雑談力 = 才能 × 環境 × 運",
                        "雑談力 = 語彙力 × 声の大きさ × 話す速度",
                        "雑談力 = 知識 × 実践回数 × 振り返り",
                        "雑談力 = テクニック × 場数 × 人脈"
                    ],
                    answer: 2,
                    explanation: "本文で紹介されている雑談力の成長公式は「雑談力 = 知識 × 実践回数 × 振り返り」です。アカデミーで知識を学んだ後は、実践と振り返り（雑談日記）を継続することで雑談マスターになれます。"
                }
            ]
        }
    ]
};
