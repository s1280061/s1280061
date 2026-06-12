const quotes = [
  {
    id: 1,
    speaker: "Elon Musk",
    context: "SpaceX CEO / テスラ創業者 — 失敗とイノベーションについて",
    category: "テクノロジー",
    difficulty: "中級",
    english: "Failure is an option here. If things are not failing, you are not innovating enough. I think it's very important to have a feedback loop, where you're constantly thinking about what you've done and how you could be doing it better.",
    japanese: "ここでは失敗は選択肢の一つです。物事が失敗していないなら、あなたは十分なイノベーションをしていないということです。常に自分がしてきたことを振り返り、どうすればもっとうまくできるかを考え続けるフィードバックループを持つことが非常に重要だと思います。",
    grammar: [
      {
        point: "条件節（If + 現在形, 主節 + 現在形）",
        explanation: "「If things are not failing, you are not innovating enough.」は条件を表す表現です。If + 現在形, 主節 + 現在形 の形で、「もし〜なら、〜だ」という一般的な真実や法則を表します。",
        example: "例: If it rains, the ground gets wet.（雨が降れば、地面は濡れる）"
      },
      {
        point: "現在進行形の否定（are not + -ing）",
        explanation: "「are not failing」「are not innovating」はどちらも現在進行形の否定形です。ここでは進行中・継続中のプロセスを強調する使い方です。",
        example: "例: We are not making progress.（私たちは進展していない）"
      },
      {
        point: "関係副詞 where（場所・状況を表す）",
        explanation: "「a feedback loop, where you're constantly thinking ...」の where は関係副詞で、先行詞 feedback loop の内容を詳しく説明します。「〜という状況」と訳すと自然です。",
        example: "例: I need an environment where I can focus.（集中できる環境が必要だ）"
      }
    ],
    vocabulary: [
      { word: "failure",       reading: "フェイリャー",     pos: "名詞",      meaning: "失敗、不成功" },
      { word: "option",        reading: "オプション",       pos: "名詞",      meaning: "選択肢" },
      { word: "innovating",    reading: "イノベーティング", pos: "動詞(ing形)", meaning: "革新する" },
      { word: "feedback loop", reading: "フィードバックループ", pos: "名詞句",  meaning: "改善のための振り返りサイクル" },
      { word: "constantly",    reading: "コンスタントリー",  pos: "副詞",      meaning: "常に、絶え間なく" }
    ]
  },
  {
    id: 2,
    speaker: "Elon Musk",
    context: "火星移住・人類の未来について",
    category: "テクノロジー",
    difficulty: "上級",
    english: "I think it's possible for ordinary people to choose to be extraordinary. You want to be extra rigorous about making the best possible thing you can. Find everything that's wrong with it and fix it. Seek negative feedback, particularly from friends.",
    japanese: "普通の人が非凡であることを選ぶことは可能だと思います。できる限り最高のものを作ることに、特に厳格であろうとするべきです。それに何が問題かをすべて見つけ、修正してください。特に友人からの否定的なフィードバックを積極的に求めてください。",
    grammar: [
      {
        point: "形式主語構文（It is ... for ... to ...）",
        explanation: "「It is possible for ordinary people to choose ...」は形式主語構文です。本来の主語「for ordinary people to choose to be extraordinary」が長いため、文頭に it を置き、本当の主語を後ろに回しています。",
        example: "例: It is important for students to study hard.（学生が一生懸命勉強することは重要だ）"
      },
      {
        point: "命令文の連続（Find ... and fix it / Seek ...）",
        explanation: "「Find everything ... and fix it」「Seek negative feedback」は命令文です。動詞の原形から始まり、相手に直接行動を促します。アドバイスや指示を与える際によく使われる構文です。",
        example: "例: Study hard and never give up.（一生懸命勉強し、絶対に諦めるな）"
      },
      {
        point: "関係代名詞 that（everything that's wrong）",
        explanation: "「everything that's wrong with it」の that は関係代名詞で、先行詞 everything を修飾します。everything / something / anything の後には that が好まれます。",
        example: "例: Everything that glitters is not gold.（輝くものすべてが金ではない）"
      }
    ],
    vocabulary: [
      { word: "extraordinary", reading: "エクストラオーディナリー", pos: "形容詞", meaning: "非凡な、並外れた" },
      { word: "rigorous",      reading: "リゴラス",    pos: "形容詞", meaning: "厳格な、厳密な" },
      { word: "seek",          reading: "シーク",      pos: "動詞",   meaning: "積極的に求める、探し求める" },
      { word: "negative feedback", reading: "ネガティブフィードバック", pos: "名詞句", meaning: "否定的な意見・批判" },
      { word: "particularly",  reading: "パーティキュラリー", pos: "副詞", meaning: "特に、とりわけ" }
    ]
  },
  {
    id: 3,
    speaker: "Steve Jobs",
    context: "2005年 スタンフォード大学卒業式スピーチ",
    category: "人生",
    difficulty: "中級",
    english: "You can't connect the dots looking forward; you can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future. You have to trust in something — your gut, destiny, life, karma, whatever. This approach has never let me down, and it has made all the difference in my life.",
    japanese: "前を向いて点をつなぐことはできません。振り返ってのみ、点をつなぐことができるのです。だから、将来何らかの形で点がつながると信じなければなりません。何か——直感、運命、人生、カルマ、何でもいい——を信じなければなりません。このアプローチは私を裏切ったことがなく、私の人生においてすべての違いをもたらしました。",
    grammar: [
      {
        point: "分詞構文（looking forward / looking backwards）",
        explanation: "「looking forward」「looking backwards」は分詞構文で、「〜しながら」「〜する時」という付帯状況を表します。主語と be動詞が省略され、現在分詞で始まります。",
        example: "例: Walking in the park, I saw a bird.（公園を歩きながら、鳥を見た）"
      },
      {
        point: "have to（義務・必要性）",
        explanation: "「you have to trust」の have to は「〜しなければならない」という義務・必要性を表します。must よりも外部からの必要性を強調します。",
        example: "例: You have to believe in yourself.（自分自身を信じなければならない）"
      },
      {
        point: "現在完了形（has never let / has made）",
        explanation: "「has never let me down」「has made all the difference」は現在完了形です。過去から現在にわたる結果・経験を表します。never との組み合わせで「一度も〜したことがない」という意味になります。",
        example: "例: Hard work has never failed me.（努力は一度も私を裏切っていない）"
      }
    ],
    vocabulary: [
      { word: "connect the dots", reading: "コネクト ザ ドッツ", pos: "慣用句", meaning: "点と点をつなぐ（経験が後からつながること）" },
      { word: "trust",       reading: "トラスト",     pos: "動詞",   meaning: "信じる、信頼する" },
      { word: "gut",         reading: "ガット",       pos: "名詞",   meaning: "直感、本能（gut feeling = 直感）" },
      { word: "destiny",     reading: "デスティニー", pos: "名詞",   meaning: "運命、宿命" },
      { word: "let down",    reading: "レットダウン",  pos: "動詞句", meaning: "〜を失望させる、裏切る" },
      { word: "make a difference", reading: "メイクアディファレンス", pos: "慣用句", meaning: "大きな違いをもたらす" }
    ]
  },
  {
    id: 4,
    speaker: "Steve Jobs",
    context: "Think Different キャンペーン（1997年）",
    category: "モチベーション",
    difficulty: "中級",
    english: "Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules, and they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them.",
    japanese: "クレイジーな人たちに乾杯。はみ出し者たち。反逆者たち。問題を起こす人たち。四角い穴に丸い杭のような人たち。物事を違う角度から見る人たち。彼らはルールが好きではなく、現状に敬意を払いません。彼らを引用し、反論し、称賛したり、けなしたりすることもできます。ただ唯一できないのは、彼らを無視することです。",
    grammar: [
      {
        point: "「Here's to ...」（乾杯・賛辞の慣用表現）",
        explanation: "「Here's to the crazy ones」は「〜に乾杯」「〜に敬意を表して」という意味のイディオムです。Here's は Here is の短縮形で、乾杯や賛辞を表します。",
        example: "例: Here's to your success!（あなたの成功に乾杯！）"
      },
      {
        point: "be fond of（〜が好きである）",
        explanation: "「They're not fond of rules」の be fond of は「〜が好きである」という意味の表現です。like より少しフォーマルで、感情的な愛着を表します。",
        example: "例: She is very fond of classical music.（彼女はクラシック音楽がとても好きだ）"
      },
      {
        point: "列挙による強調（quote, disagree, glorify or vilify）",
        explanation: "「You can quote them, disagree with them, glorify or vilify them」は動詞を列挙することで対比と強調を生み出しています。glorify（称賛する）と vilify（けなす）は正反対の意味で対比されています。",
        example: "例: You can love it or hate it, but you can't deny it.（好きでも嫌いでもいい、でも否定はできない）"
      }
    ],
    vocabulary: [
      { word: "misfit",      reading: "ミスフィット",   pos: "名詞",   meaning: "はみ出し者、社会不適合者" },
      { word: "rebel",       reading: "レベル",         pos: "名詞",   meaning: "反逆者" },
      { word: "status quo",  reading: "ステータスクオ", pos: "名詞句", meaning: "現状（ラテン語由来）" },
      { word: "glorify",     reading: "グローリファイ", pos: "動詞",   meaning: "称賛する、美化する" },
      { word: "vilify",      reading: "ヴィリファイ",   pos: "動詞",   meaning: "けなす、中傷する" },
      { word: "ignore",      reading: "イグノア",       pos: "動詞",   meaning: "無視する" }
    ]
  },
  {
    id: 5,
    speaker: "Barack Obama",
    context: "第44代 米国大統領 / 大統領選キャンペーンスピーチ",
    category: "社会変革",
    difficulty: "中級",
    english: "Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for. We are the change that we seek. In the unlikely story that is America, there has never been anything false about hope.",
    japanese: "もし私たちが他の誰か、あるいは別の時を待つなら、変化は訪れません。私たちこそが、ずっと待ち望んでいた存在なのです。私たちこそが、求めている変化そのものです。ありそうもない物語であるアメリカにおいて、希望について偽りなものは一度もありませんでした。",
    grammar: [
      {
        point: "条件節 + will not（否定の未来）",
        explanation: "「Change will not come if we wait ...」は「〜するなら、〜はないだろう」という条件付きの否定未来です。will not + 動詞原形 で強い否定の未来を表します。",
        example: "例: Success will not come if you give up.（諦めれば成功は来ない）"
      },
      {
        point: "現在完了進行形（have been + -ing）",
        explanation: "「we've been waiting for」は現在完了進行形で、過去から現在まで継続してずっと待ち続けてきたことを表します。",
        example: "例: I've been studying English for 3 years.（3年間英語を勉強し続けています）"
      },
      {
        point: "there has never been（現在完了の否定）",
        explanation: "「there has never been anything false」は there is 構文の現在完了形です。has never been で「一度も〜はなかった（そして今もない）」という意味を表します。",
        example: "例: There has never been a better time to start.（始めるのに今以上の時はなかった）"
      }
    ],
    vocabulary: [
      { word: "seek",       reading: "シーク",     pos: "動詞",   meaning: "求める、探し求める" },
      { word: "unlikely",   reading: "アンライクリー", pos: "形容詞", meaning: "ありそうもない、起こりそうにない" },
      { word: "false",      reading: "フォールス",  pos: "形容詞", meaning: "偽りの、誤った" },
      { word: "hope",       reading: "ホープ",      pos: "名詞",   meaning: "希望" }
    ]
  },
  {
    id: 6,
    speaker: "Malala Yousafzai",
    context: "2013年 国連本部でのスピーチ",
    category: "教育",
    difficulty: "初級",
    english: "One child, one teacher, one book, one pen can change the world. Education is the only solution. Education first. Let us pick up our books and our pens. They are our most powerful weapons.",
    japanese: "一人の子ども、一人の教師、一冊の本、一本のペンが世界を変えることができます。教育こそが唯一の解決策です。教育を最優先に。本とペンを手に取りましょう。それらは私たちの最も強力な武器です。",
    grammar: [
      {
        point: "反復法（Anaphora）と列挙",
        explanation: "「One child, one teacher, one book, one pen」は同じ構造（one + 名詞）を繰り返す反復法（Anaphora）です。演説でリズムと強調のために使われる修辞技法です。",
        example: "例: One dream, one goal, one mission.（一つの夢、一つの目標、一つの使命）"
      },
      {
        point: "「Let us ...」（勧誘の命令文）",
        explanation: "「Let us pick up our books」は「〜しましょう」という勧誘を表す Let us の構文です。短縮形は Let's で、話し手と聞き手を含む行動への誘いかけです。",
        example: "例: Let us work together for a better future.（より良い未来のために共に働きましょう）"
      }
    ],
    vocabulary: [
      { word: "solution",  reading: "ソリューション",   pos: "名詞", meaning: "解決策" },
      { word: "education", reading: "エデュケーション", pos: "名詞", meaning: "教育" },
      { word: "pick up",   reading: "ピックアップ",      pos: "動詞句", meaning: "手に取る、拾い上げる" },
      { word: "weapon",    reading: "ウェポン",          pos: "名詞", meaning: "武器（比喩的にも使う）" }
    ]
  },
  {
    id: 7,
    speaker: "Nelson Mandela",
    context: "南アフリカ共和国 初代民主主義大統領",
    category: "教育",
    difficulty: "初級",
    english: "Education is the most powerful weapon which you can use to change the world. It always seems impossible until it's done. Do not judge me by my successes, judge me by how many times I fell down and got back up again.",
    japanese: "教育は、あなたが世界を変えるために使うことができる最も強力な武器です。何事も、成し遂げるまでは不可能に思えるものです。私の成功で私を評価しないでください。何度転んで、また立ち上がったかで評価してください。",
    grammar: [
      {
        point: "最上級（the most + 形容詞）",
        explanation: "「the most powerful weapon」は最上級の表現です。2音節以上の形容詞の前に the most を付けて「最も〜な」という意味を表します。",
        example: "例: She is the most talented person I know.（彼女は私が知る中で最も才能ある人だ）"
      },
      {
        point: "it seems ... until it's done（〜するまでは〜に思える）",
        explanation: "「It always seems impossible until it's done」は「〜するまでは不可能に見える」という表現です。until は「〜するまで（ずっと）」という継続を表す接続詞です。",
        example: "例: It seems difficult until you try.（やってみるまでは難しそうに見える）"
      },
      {
        point: "否定命令 + 肯定命令（Do not ... judge me / judge me by ...）",
        explanation: "「Do not judge me by my successes, judge me by how many times ...」は否定命令文と肯定命令文の対比です。Do not + 動詞原形 で「〜するな」という禁止を表します。",
        example: "例: Don't give up, keep going.（諦めるな、進み続けろ）"
      }
    ],
    vocabulary: [
      { word: "powerful",    reading: "パワフル",   pos: "形容詞", meaning: "強力な、力強い" },
      { word: "impossible",  reading: "インポッシブル", pos: "形容詞", meaning: "不可能な" },
      { word: "judge",       reading: "ジャッジ",   pos: "動詞",   meaning: "評価する、判断する" },
      { word: "fell down",   reading: "フェルダウン", pos: "動詞句(過去形)", meaning: "倒れた、転んだ（fall down の過去形）" },
      { word: "got back up", reading: "ゴットバックアップ", pos: "動詞句(過去形)", meaning: "立ち上がった（get back up の過去形）" }
    ]
  },
  {
    id: 8,
    speaker: "Bill Gates",
    context: "マイクロソフト共同創業者 / 慈善活動家",
    category: "ビジネス",
    difficulty: "中級",
    english: "It's fine to celebrate success, but it is more important to heed the lessons of failure. Success is a lousy teacher. It seduces smart people into thinking they can't lose. Your most unhappy customers are your greatest source of learning.",
    japanese: "成功を祝うことは素晴らしいですが、失敗から学ぶことの方がより重要です。成功は最悪の教師です。賢い人々を、自分は負けないと思わせるよう誘惑します。最も不満を持つ顧客こそが、あなたの最大の学びの源です。",
    grammar: [
      {
        point: "比較級（more important）",
        explanation: "「it is more important to heed ...」は比較級の表現です。more + 形容詞 で「より〜だ」という比較を表します。",
        example: "例: It is more important to listen than to speak.（話すより聞く方が重要だ）"
      },
      {
        point: "seduce ... into -ing（〜するよう誘惑する）",
        explanation: "「seduces smart people into thinking they can't lose」は seduce A into -ing で「AをだましてBさせる」という表現です。into + -ing の形で動作への誘導を表します。",
        example: "例: Don't let comfort seduce you into giving up.（快適さにだまされて諦めないようにしよう）"
      }
    ],
    vocabulary: [
      { word: "heed",      reading: "ヒード",      pos: "動詞",   meaning: "注意を払う、教訓を生かす" },
      { word: "lousy",     reading: "ラウジー",    pos: "形容詞", meaning: "最悪の、ひどい（口語）" },
      { word: "seduce",    reading: "シデュース",  pos: "動詞",   meaning: "誘惑する、そそのかす" },
      { word: "unhappy",   reading: "アンハッピー", pos: "形容詞", meaning: "不満な、不幸な" },
      { word: "source",    reading: "ソース",      pos: "名詞",   meaning: "源、情報源" }
    ]
  },
  {
    id: 9,
    speaker: "Jeff Bezos",
    context: "Amazon 創業者 / 宇宙企業 Blue Origin CEO",
    category: "ビジネス",
    difficulty: "上級",
    english: "If you double the number of experiments you do per year, you're going to double your inventiveness. I knew that if I failed I wouldn't regret that, but I knew the one thing I might regret is not trying. The framework I found, which made the decision incredibly easy, was what I called a 'regret minimization framework'.",
    japanese: "年間に行う実験の数を2倍にすれば、創造性も2倍になります。失敗しても後悔しないとわかっていましたが、後悔するかもしれない唯一のことは、挑戦しないことだとわかっていました。決断を信じられないほど簡単にしてくれたフレームワークを見つけました。それを私は「後悔最小化フレームワーク」と呼んでいます。",
    grammar: [
      {
        point: "If 節 + 未来（if you double ... you're going to）",
        explanation: "「If you double the number ..., you're going to double your inventiveness」は条件節で、be going to を使って結果の確実性を強調しています。will よりも確信度が高いニュアンスです。",
        example: "例: If you practice every day, you're going to improve quickly.（毎日練習すれば、すぐに上達するだろう）"
      },
      {
        point: "仮定法過去（I knew that if I failed I wouldn't regret）",
        explanation: "「if I failed I wouldn't regret that」は仮定法過去で、過去の仮定を表します。if + 過去形, would + 動詞原形 の形です。",
        example: "例: I knew that if I tried, I would succeed.（挑戦すれば成功すると分かっていた）"
      },
      {
        point: "関係代名詞 which（非制限用法）",
        explanation: "「The framework I found, which made the decision easy」の which は非制限用法の関係代名詞で、前の名詞 framework に補足情報を加えています。コンマの後に置かれ、「そしてそれは〜」と訳せます。",
        example: "例: I bought a new phone, which works perfectly.（新しい電話を買ったが、それは完璧に動く）"
      }
    ],
    vocabulary: [
      { word: "inventiveness",   reading: "インヴェンティブネス", pos: "名詞", meaning: "創造性、発明力" },
      { word: "regret",          reading: "リグレット",   pos: "動詞/名詞", meaning: "後悔する／後悔" },
      { word: "framework",       reading: "フレームワーク", pos: "名詞",   meaning: "枠組み、考え方の体系" },
      { word: "minimization",    reading: "ミニマイゼーション", pos: "名詞", meaning: "最小化" },
      { word: "incredibly",      reading: "インクレディブリー", pos: "副詞", meaning: "信じられないほど、非常に" }
    ]
  },
  {
    id: 10,
    speaker: "Jeff Bezos",
    context: "Amazon 創業者 — 顧客サービスと長期思考について",
    category: "ビジネス",
    difficulty: "中級",
    english: "The best customer service is if the customer doesn't need to call you, doesn't need to talk to you. It just works. We are stubborn on vision. We are flexible on details. In the long run, companies that focus on delighting customers will win.",
    japanese: "最高の顧客サービスとは、顧客があなたに電話する必要もなく、話す必要もない状態です。それはただ機能するのです。私たちはビジョンについては頑固です。詳細については柔軟です。長期的には、顧客を喜ばせることに集中する会社が勝ちます。",
    grammar: [
      {
        point: "否定の並列（doesn't need to ... doesn't need to）",
        explanation: "「doesn't need to call you, doesn't need to talk to you」は同じ構造を並べる反復法です。doesn't need to + 動詞原形 で「〜する必要がない」という意味です。",
        example: "例: He doesn't need to worry, doesn't need to rush.（彼は心配する必要もなく、急ぐ必要もない）"
      },
      {
        point: "対比構文（stubborn on vision / flexible on details）",
        explanation: "「We are stubborn on vision. We are flexible on details.」は短い文で対比を作る技法です。stubborn（頑固）と flexible（柔軟）という反意語を並べることで強いメッセージを伝えています。",
        example: "例: Be bold in dreams, be humble in actions.（夢は大きく、行動は謙虚に）"
      }
    ],
    vocabulary: [
      { word: "stubborn",    reading: "スタボン",      pos: "形容詞", meaning: "頑固な、強固な" },
      { word: "flexible",    reading: "フレキシブル",  pos: "形容詞", meaning: "柔軟な、融通がきく" },
      { word: "in the long run", reading: "インザロングラン", pos: "慣用句", meaning: "長期的には、結局のところ" },
      { word: "delight",     reading: "ディライト",    pos: "動詞",   meaning: "喜ばせる、楽しませる" }
    ]
  },
  {
    id: 11,
    speaker: "Oprah Winfrey",
    context: "メディア女王 / 慈善活動家 — 夢と人生について",
    category: "モチベーション",
    difficulty: "初級",
    english: "The biggest adventure you can take is to live the life of your dreams. You get in life what you have the courage to ask for. Create the highest, grandest vision possible for your life, because you become what you believe.",
    japanese: "あなたが取れる最大の冒険は、夢の人生を生きることです。人生においては、勇気を持って求めるものを手に入れられます。人生において可能な限り最高で壮大なビジョンを作りましょう。なぜなら、あなたは信じるものになるからです。",
    grammar: [
      {
        point: "関係代名詞の省略（The biggest adventure [that] you can take）",
        explanation: "「The biggest adventure you can take」は関係代名詞 that が省略されています。目的格の関係代名詞は日常英語でよく省略されます。",
        example: "例: The book [that] I read was amazing.（私が読んだ本は素晴らしかった）"
      },
      {
        point: "because 節（理由を表す）",
        explanation: "「because you become what you believe」の because は理由を表す接続詞です。what you believe は「あなたが信じるもの」という名詞節で、become の補語になっています。",
        example: "例: Study hard, because knowledge opens doors.（一生懸命勉強しよう、知識は扉を開くから）"
      }
    ],
    vocabulary: [
      { word: "adventure",  reading: "アドベンチャー",  pos: "名詞",   meaning: "冒険" },
      { word: "courage",    reading: "カレッジ",        pos: "名詞",   meaning: "勇気" },
      { word: "grandest",   reading: "グランデスト",    pos: "形容詞(最上級)", meaning: "最も壮大な（grand の最上級）" },
      { word: "vision",     reading: "ヴィジョン",      pos: "名詞",   meaning: "ビジョン、将来像" },
      { word: "believe",    reading: "ビリーブ",        pos: "動詞",   meaning: "信じる" }
    ]
  },
  {
    id: 12,
    speaker: "Oprah Winfrey",
    context: "ハーバード大学卒業式スピーチ（2013年）",
    category: "人生",
    difficulty: "中級",
    english: "Turn your wounds into wisdom. There is no such thing as failure. Failure is just life trying to move you in another direction. Every time you're standing at a crossroads, you have to be willing to take the path that's right for you, even if it's the harder choice.",
    japanese: "傷を知恵に変えなさい。失敗というものは存在しません。失敗とは、人生があなたを別の方向に動かそうとしているだけです。岐路に立つたびに、たとえそれが難しい選択であっても、自分にとって正しい道を選ぶ意志を持たなければなりません。",
    grammar: [
      {
        point: "命令文（Turn your wounds into wisdom）",
        explanation: "「Turn your wounds into wisdom」は命令文で、アドバイスや励ましを表します。turn A into B は「AをBに変える」という重要な表現です。",
        example: "例: Turn your passion into profit.（情熱を利益に変えなさい）"
      },
      {
        point: "There is no such thing as（〜というものは存在しない）",
        explanation: "「There is no such thing as failure」は「〜というものは存在しない」という強い否定の慣用表現です。such thing as の後に否定したい名詞を置きます。",
        example: "例: There is no such thing as a free lunch.（ただのランチなどというものは存在しない）"
      },
      {
        point: "be willing to（〜する意志がある）",
        explanation: "「you have to be willing to take the path」の be willing to は「〜する意志がある、〜することを厭わない」という表現で、能動的な意志を表します。",
        example: "例: You have to be willing to take risks.（リスクを取る意志を持たなければならない）"
      }
    ],
    vocabulary: [
      { word: "wound",       reading: "ウーンド",       pos: "名詞",   meaning: "傷、傷跡" },
      { word: "wisdom",      reading: "ウィズダム",     pos: "名詞",   meaning: "知恵、賢さ" },
      { word: "crossroads",  reading: "クロスロード",   pos: "名詞",   meaning: "岐路、分かれ道" },
      { word: "willing",     reading: "ウィリング",     pos: "形容詞", meaning: "〜する意志がある、喜んで〜する" },
      { word: "direction",   reading: "ダイレクション",  pos: "名詞",   meaning: "方向、方針" }
    ]
  },
  {
    id: 13,
    speaker: "Albert Einstein",
    context: "理論物理学者 — 想像力と知識について",
    category: "教育",
    difficulty: "中級",
    english: "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world. Logic will get you from A to B. Imagination will take you everywhere. The measure of intelligence is the ability to change.",
    japanese: "想像力は知識よりも重要です。知識には限界があります。想像力は世界を包み込みます。論理はAからBへ連れて行ってくれます。想像力はあなたをどこへでも連れて行ってくれます。知性の尺度は、変化する能力です。",
    grammar: [
      {
        point: "比較級（more important than）",
        explanation: "「Imagination is more important than knowledge」は比較級の文です。2つのものを比べて「〜より重要だ」と表現しています。than の後に比較対象が来ます。",
        example: "例: Experience is more valuable than theory.（経験は理論よりも価値がある）"
      },
      {
        point: "will（未来・法則）の対比",
        explanation: "「Logic will get you from A to B. Imagination will take you everywhere.」は will を使った対比です。短い2文で論理と想像力の違いを鮮やかに表現しています。",
        example: "例: Work will pay your bills. Passion will change your life.（仕事は請求書を払う。情熱は人生を変える）"
      }
    ],
    vocabulary: [
      { word: "imagination",  reading: "イマジネーション",  pos: "名詞",   meaning: "想像力" },
      { word: "knowledge",    reading: "ノレッジ",          pos: "名詞",   meaning: "知識" },
      { word: "encircle",     reading: "エンサークル",      pos: "動詞",   meaning: "〜を囲む、包み込む" },
      { word: "logic",        reading: "ロジック",          pos: "名詞",   meaning: "論理、理屈" },
      { word: "measure",      reading: "メジャー",          pos: "名詞",   meaning: "尺度、基準" },
      { word: "intelligence", reading: "インテリジェンス",  pos: "名詞",   meaning: "知性、インテリジェンス" }
    ]
  },
  {
    id: 14,
    speaker: "Winston Churchill",
    context: "第二次世界大戦中の英国首相 — 不屈の精神について",
    category: "モチベーション",
    difficulty: "上級",
    english: "Success is not final, failure is not fatal: it is the courage to continue that counts. If you're going through hell, keep going. Never give in, never give in, never, never, never — in nothing, great or small, large or petty — never give in except to convictions of honour and good sense.",
    japanese: "成功は最終ではなく、失敗は致命的ではありません。大切なのは、継続する勇気です。地獄の中にいるなら、進み続けなさい。決して屈するな、決して屈するな、決して、決して、決して——大きなことでも小さなことでも、重大なことでも些細なことでも——名誉と良識の確信以外には決して屈するな。",
    grammar: [
      {
        point: "強調構文（it is ... that counts）",
        explanation: "「it is the courage to continue that counts」は強調構文です。It is + 強調したい部分 + that + 残りの文 の形で、「大切なのは〜だ」という強調を表します。",
        example: "例: It is hard work that makes the difference.（違いをもたらすのは努力だ）"
      },
      {
        point: "反復法（Never give in × 3）",
        explanation: "「Never give in, never give in, never, never, never」は同じ表現を繰り返す反復法（Epizeuxis）です。チャーチルの演説の特徴で、聴衆に強い感情的インパクトを与えます。",
        example: "例: Never stop, never give up, never look back.（止まるな、諦めるな、振り返るな）"
      },
      {
        point: "except（〜を除いて）",
        explanation: "「never give in except to convictions of honour」の except は「〜を除いて」という意味の前置詞です。唯一の例外を示す表現です。",
        example: "例: I never miss class except when I'm sick.（病気の時以外は授業を休まない）"
      }
    ],
    vocabulary: [
      { word: "fatal",       reading: "フェイタル",   pos: "形容詞", meaning: "致命的な、命取りの" },
      { word: "courage",     reading: "カレッジ",     pos: "名詞",   meaning: "勇気" },
      { word: "counts",      reading: "カウンツ",     pos: "動詞",   meaning: "重要である（count = 重要だ）" },
      { word: "petty",       reading: "ペティ",       pos: "形容詞", meaning: "些細な、つまらない" },
      { word: "conviction",  reading: "コンヴィクション", pos: "名詞", meaning: "確信、信念" },
      { word: "honour",      reading: "オナー",       pos: "名詞",   meaning: "名誉（英国式スペル）" }
    ]
  },
  {
    id: 15,
    speaker: "Martin Luther King Jr.",
    context: "公民権運動指導者 — 「I Have a Dream」スピーチ（1963年）",
    category: "社会変革",
    difficulty: "中級",
    english: "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that. I have a dream that one day this nation will rise up and live out the true meaning of its creed: 'We hold these truths to be self-evident, that all men are created equal.'",
    japanese: "闇は闇を追い払うことができません。それができるのは光だけです。憎しみは憎しみを追い払うことができません。それができるのは愛だけです。私には夢があります。いつの日かこの国が立ち上がり、その信条の真の意味を実現するという夢です。「我々はこれらの真実を自明なものとして信じる。すなわち、すべての人は平等に創られていると。」",
    grammar: [
      {
        point: "対比・反復（cannot ... only ... can do that）",
        explanation: "「Darkness cannot drive out darkness; only light can do that」は対比の反復技法です。同じ構造を2回使い（darkness→light, hate→love）、各文の後に「only X can do that」で答えを示します。",
        example: "例: Fear cannot overcome fear; only courage can do that.（恐れは恐れを克服できない。できるのは勇気だけだ）"
      },
      {
        point: "I have a dream that ...（同格のthat節）",
        explanation: "「I have a dream that one day ...」の that は同格節を導く接続詞です。dream の内容を詳しく説明しています。that 以下全体が dream の内容です。",
        example: "例: I have a belief that everyone deserves a chance.（誰もがチャンスを得るべきだという信念がある）"
      },
      {
        point: "受動態（are created equal）",
        explanation: "「all men are created equal」は受動態で「すべての人は平等に創られた」という意味です。be + 過去分詞 の形です。米国独立宣言の有名な一節です。",
        example: "例: All people are born free.（すべての人は自由に生まれている）"
      }
    ],
    vocabulary: [
      { word: "drive out",   reading: "ドライブアウト",   pos: "動詞句", meaning: "追い払う、排除する" },
      { word: "rise up",     reading: "ライズアップ",     pos: "動詞句", meaning: "立ち上がる、立ち向かう" },
      { word: "creed",       reading: "クリード",        pos: "名詞",   meaning: "信条、信念" },
      { word: "self-evident",reading: "セルフエヴィデント", pos: "形容詞", meaning: "自明の、明らかな" },
      { word: "equal",       reading: "イコール",        pos: "形容詞", meaning: "平等な" }
    ]
  }
];
