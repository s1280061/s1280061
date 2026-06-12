const quotes = [
  {
    id: 1,
    speaker: "Elon Musk",
    context: "SpaceX CEO / テスラ創業者",
    english: "Failure is an option here. If things are not failing, you are not innovating enough.",
    japanese: "ここでは失敗は選択肢の一つです。もし物事が失敗していないなら、あなたは十分なイノベーションをしていないということです。",
    grammar: [
      {
        point: "条件節（If + 現在形, 主節 + 現在形）",
        explanation: "「If things are not failing, you are not innovating enough.」は条件を表す表現です。If + 現在形, 主節 + 現在形 の形で、「もし〜なら、〜だ」という一般的な真実や法則を表します。",
        example: "例: If it rains, the ground gets wet.（雨が降れば、地面は濡れる）"
      },
      {
        point: "現在進行形の否定（are not + -ing）",
        explanation: "「are not failing」「are not innovating」はどちらも現在進行形の否定形です。ここでは進行中・継続中のプロセスを強調する使い方です。",
        example: "例: We are working on a new project.（私たちは新しいプロジェクトに取り組んでいる）"
      }
    ],
    vocabulary: [
      { word: "failure",    reading: "フェイリャー",      pos: "名詞",      meaning: "失敗、不成功" },
      { word: "option",     reading: "オプション",        pos: "名詞",      meaning: "選択肢" },
      { word: "innovating", reading: "イノベーティング",  pos: "動詞(ing形)", meaning: "革新する、イノベーションを起こす" },
      { word: "enough",     reading: "イナフ",            pos: "副詞/形容詞", meaning: "十分に、十分な" }
    ]
  },
  {
    id: 2,
    speaker: "Elon Musk",
    context: "人生の可能性について",
    english: "I think it's possible for ordinary people to choose to be extraordinary.",
    japanese: "普通の人が非凡であることを選ぶことは可能だと思います。",
    grammar: [
      {
        point: "形式主語構文（It is ... for ... to ...）",
        explanation: "「It is possible for ordinary people to choose ...」は形式主語構文です。本来の主語「for ordinary people to choose to be extraordinary」が長いため、文頭に it を置き、本当の主語を後ろに回しています。",
        example: "例: It is important for students to study hard.（学生が一生懸命勉強することは重要だ）"
      },
      {
        point: "不定詞の連続（to choose to be）",
        explanation: "「to choose to be extraordinary」は不定詞が連続しています。choose to do は「〜することを選ぶ」という意味で、choose の目的語に to不定詞を取ります。",
        example: "例: She chose to stay home.（彼女は家にいることを選んだ）"
      }
    ],
    vocabulary: [
      { word: "possible",      reading: "ポッシブル",          pos: "形容詞", meaning: "可能な、あり得る" },
      { word: "ordinary",      reading: "オーディナリー",      pos: "形容詞", meaning: "普通の、平凡な" },
      { word: "choose",        reading: "チューズ",            pos: "動詞",   meaning: "選ぶ、選択する" },
      { word: "extraordinary", reading: "エクストラオーディナリー", pos: "形容詞", meaning: "非凡な、並外れた" }
    ]
  },
  {
    id: 3,
    speaker: "Steve Jobs",
    context: "2005年 スタンフォード大学卒業式スピーチ",
    english: "You can't connect the dots looking forward; you can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future.",
    japanese: "前を向いて点をつなぐことはできません。振り返ってのみ、点をつなぐことができるのです。だから、将来何らかの形で点がつながると信じなければなりません。",
    grammar: [
      {
        point: "分詞構文（looking forward / looking backwards）",
        explanation: "「looking forward」「looking backwards」は分詞構文で、「〜しながら」「〜する時」という付帯状況を表します。主語と be動詞が省略され、現在分詞で始まります。",
        example: "例: Walking in the park, I saw a bird.（公園を歩きながら、鳥を見た）"
      },
      {
        point: "助動詞 will + somehow（未来への信頼）",
        explanation: "「will somehow connect」の will は未来への予測・意志を表します。somehow は「なんとかして」という副詞で、「将来きっとつながるだろう」というニュアンスを出しています。",
        example: "例: Things will work out eventually.（物事はいつかうまくいく）"
      }
    ],
    vocabulary: [
      { word: "connect",   reading: "コネクト",     pos: "動詞",   meaning: "つなぐ、結びつける" },
      { word: "dots",      reading: "ドッツ",       pos: "名詞(複)", meaning: "点（単数: dot）" },
      { word: "backwards", reading: "バックワーズ", pos: "副詞",   meaning: "後ろ向きに、振り返って" },
      { word: "trust",     reading: "トラスト",     pos: "動詞",   meaning: "信じる、信頼する" },
      { word: "somehow",   reading: "サムハウ",     pos: "副詞",   meaning: "なんとかして、何らかの形で" }
    ]
  },
  {
    id: 4,
    speaker: "Steve Jobs",
    context: "Think Different キャンペーン（1997年）",
    english: "Here's to the crazy ones. The misfits. The rebels. The troublemakers. The ones who see things differently.",
    japanese: "クレイジーな人たちに乾杯。はみ出し者たち。反逆者たち。問題を起こす人たち。物事を違う角度から見る人たち。",
    grammar: [
      {
        point: "「Here's to ...」（乾杯・賛辞の慣用表現）",
        explanation: "「Here's to the crazy ones」は「〜に乾杯」「〜に敬意を表して」という意味のイディオムです。Here's は Here is の短縮形で、乾杯や賛辞を表します。",
        example: "例: Here's to your success!（あなたの成功に乾杯！）"
      },
      {
        point: "体言止め・フラグメント（Fragment）",
        explanation: "「The misfits. The rebels. The troublemakers.」は動詞のない体言止めの文（Fragment）です。詩的・修辞的な演説でリズムと強調のために使われる技法です。",
        example: "例: Amazing people. Incredible stories.（素晴らしい人々。信じられない物語。）"
      }
    ],
    vocabulary: [
      { word: "misfit",       reading: "ミスフィット",    pos: "名詞", meaning: "はみ出し者、社会不適合者" },
      { word: "rebel",        reading: "レベル",          pos: "名詞", meaning: "反逆者、反乱者" },
      { word: "troublemaker", reading: "トラブルメーカー", pos: "名詞", meaning: "問題を起こす人、厄介者" },
      { word: "differently",  reading: "ディファレントリー", pos: "副詞", meaning: "違う方法で、異なる視点で" }
    ]
  },
  {
    id: 5,
    speaker: "Barack Obama",
    context: "第44代 米国大統領 / 大統領選キャンペーン",
    english: "Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for. We are the change that we seek.",
    japanese: "もし私たちが他の誰か、あるいは別の時を待つなら、変化は訪れません。私たちこそが、ずっと待ち望んでいた存在なのです。私たちこそが、求めている変化そのものです。",
    grammar: [
      {
        point: "条件節 + will not（否定の未来）",
        explanation: "「Change will not come if we wait ...」は「〜するなら、〜はないだろう」という条件付きの否定未来です。will not + 動詞原形 で強い否定の未来を表します。",
        example: "例: Success will not come if you give up.（諦めれば成功は来ない）"
      },
      {
        point: "現在完了進行形（have been + -ing）",
        explanation: "「we've been waiting for」は現在完了進行形で、過去から現在まで継続してずっと待ち続けてきたことを表します。have been + -ing の形です。",
        example: "例: I've been studying English for 3 years.（3年間英語を勉強し続けています）"
      }
    ],
    vocabulary: [
      { word: "change",     reading: "チェンジ",    pos: "名詞/動詞", meaning: "変化／変える" },
      { word: "seek",       reading: "シーク",     pos: "動詞",      meaning: "求める、探し求める" },
      { word: "wait for",   reading: "ウェイトフォー", pos: "動詞句", meaning: "〜を待つ" },
      { word: "some other", reading: "サムアザー",  pos: "形容詞句",  meaning: "他の誰か／何か" }
    ]
  },
  {
    id: 6,
    speaker: "Malala Yousafzai",
    context: "ノーベル平和賞受賞者 / 教育活動家",
    english: "One child, one teacher, one book, one pen can change the world. Education is the only solution.",
    japanese: "一人の子ども、一人の教師、一冊の本、一本のペンが世界を変えることができます。教育こそが唯一の解決策です。",
    grammar: [
      {
        point: "反復法（Anaphora）と列挙",
        explanation: "「One child, one teacher, one book, one pen」は同じ構造（one + 名詞）を繰り返す反復法（Anaphora）です。演説でリズムと強調のために使われる修辞技法です。",
        example: "例: One dream, one goal, one mission.（一つの夢、一つの目標、一つの使命）"
      },
      {
        point: "助動詞 can（可能性・能力）",
        explanation: "「can change the world」の can は「〜できる」という可能性・能力を表します。ここでは「変えることができる」という力強いメッセージを込めています。",
        example: "例: Education can open many doors.（教育は多くの扉を開くことができる）"
      }
    ],
    vocabulary: [
      { word: "solution",  reading: "ソリューション",  pos: "名詞",   meaning: "解決策、解答" },
      { word: "education", reading: "エデュケーション", pos: "名詞",   meaning: "教育" },
      { word: "only",      reading: "オンリー",        pos: "形容詞", meaning: "唯一の" },
      { word: "change",    reading: "チェンジ",        pos: "動詞",   meaning: "変える" }
    ]
  },
  {
    id: 7,
    speaker: "Nelson Mandela",
    context: "南アフリカ共和国 初代民主主義大統領",
    english: "Education is the most powerful weapon which you can use to change the world.",
    japanese: "教育は、あなたが世界を変えるために使うことができる最も強力な武器です。",
    grammar: [
      {
        point: "最上級（the most + 形容詞）",
        explanation: "「the most powerful weapon」は最上級の表現です。2音節以上の形容詞の前に the most を付けて「最も〜な」という意味を表します。",
        example: "例: She is the most talented person I know.（彼女は私が知る中で最も才能ある人だ）"
      },
      {
        point: "関係代名詞 which（物を先行詞とする）",
        explanation: "「which you can use to change the world」は関係代名詞節で、先行詞 weapon を修飾しています。which は物を指す関係代名詞です。",
        example: "例: This is the tool which helped me most.（これが最も役に立ったツールだ）"
      }
    ],
    vocabulary: [
      { word: "powerful",  reading: "パワフル",      pos: "形容詞", meaning: "強力な、力強い" },
      { word: "weapon",    reading: "ウェポン",      pos: "名詞",   meaning: "武器（比喩的に：手段・ツール）" },
      { word: "education", reading: "エデュケーション", pos: "名詞", meaning: "教育" },
      { word: "use",       reading: "ユーズ",        pos: "動詞",   meaning: "使う、利用する" }
    ]
  },
  {
    id: 8,
    speaker: "Bill Gates",
    context: "マイクロソフト共同創業者",
    english: "It's fine to celebrate success, but it is more important to heed the lessons of failure.",
    japanese: "成功を祝うことは素晴らしいですが、失敗から学ぶことの方がより重要です。",
    grammar: [
      {
        point: "比較級（more important than / it is more important to）",
        explanation: "「it is more important to heed ...」は比較級の表現です。more + 形容詞 で「より〜だ」という比較を表し、than 以下の比較対象（celebrate success）が文脈から省略されています。",
        example: "例: It is more important to listen than to speak.（話すより聞く方が重要だ）"
      },
      {
        point: "形式主語 It + to不定詞",
        explanation: "「It's fine to celebrate」「it is more important to heed」はどちらも形式主語構文です。It が仮の主語で、本当の主語は to以下の不定詞句です。",
        example: "例: It's easy to say but hard to do.（言うのは簡単だが、するのは難しい）"
      }
    ],
    vocabulary: [
      { word: "celebrate", reading: "セレブレイト", pos: "動詞", meaning: "祝う、称える" },
      { word: "heed",      reading: "ヒード",       pos: "動詞", meaning: "注意を払う、教訓を生かす" },
      { word: "lesson",    reading: "レッスン",     pos: "名詞", meaning: "教訓、授業" },
      { word: "failure",   reading: "フェイリャー", pos: "名詞", meaning: "失敗" }
    ]
  }
];
