const data = [
  {
    "id": 1001,
    "word": "cruel",
    "choices": [
      "厳しい",
      "もろい",
      "反対の",
      "残酷な"
    ],
    "correct": 3,
    "sentence": "He likes to play cruel jokes on his friends.",
    "jp": "彼は友人に残酷な冗談を言うのが好きだ。"
  },
  {
    "id": 1002,
    "word": "abuse",
    "choices": [
      "企業",
      "端",
      "観点",
      "乱用"
    ],
    "correct": 3,
    "sentence": "People in public office mustn't abuse their power.",
    "jp": "公職に就く人は権力を乱用してはいけない。"
  },
  {
    "id": 1003,
    "word": "thought",
    "choices": [
      "ソフトウェア",
      "考え",
      "悪徳",
      "締切"
    ],
    "correct": 1,
    "sentence": "I had a sudden thought and realized how to solve the problem.",
    "jp": "ふと考えが浮かび，問題を解決する方法に気づいた。"
  },
  {
    "id": 1004,
    "word": "diverse",
    "choices": [
      "多様な",
      "末期の",
      "反対の",
      "厳しい"
    ],
    "correct": 0,
    "sentence": "People from diverse backgrounds work for this company.",
    "jp": "この会社では多様な経歴の人が働いている。"
  },
  {
    "id": 1005,
    "word": "cope",
    "choices": [
      "ささやく",
      "捨てる",
      "対処する",
      "取り組む"
    ],
    "correct": 2,
    "sentence": "I have no idea how to cope with the increasing workload.",
    "jp": "増大する仕事量にどのように対処していいのかわからない。"
  },
  {
    "id": 1006,
    "word": "perspective",
    "choices": [
      "候補",
      "侵略",
      "観点",
      "悪徳"
    ],
    "correct": 2,
    "sentence": "We should consider the problem from a broader perspective.",
    "jp": "その問題はもっと広い視野で考えるべきだ。"
  },
  {
    "id": 1007,
    "word": "mindset",
    "choices": [
      "考え方",
      "宝くじ",
      "負傷",
      "会社"
    ],
    "correct": 0,
    "sentence": "If you don't change your mindset, you will never succeed.",
    "jp": "考え方を変えなければ成功はない。"
  },
  {
    "id": 1008,
    "word": "moreover",
    "choices": [
      "技術的に",
      "その結果",
      "一見",
      "さらに"
    ],
    "correct": 3,
    "sentence": "Moreover, many students now use tablets in class.",
    "jp": "さらに、多くの生徒が授業でタブレットを使うようになった。"
  },
  {
    "id": 1009,
    "word": "demonstrate",
    "choices": [
      "取り組む",
      "実演する",
      "ささやく",
      "広告する"
    ],
    "correct": 1,
    "sentence": "The salesperson demonstrated how the machine worked.",
    "jp": "その販売員は機械がどのように機能するかを実演した。"
  },
  {
    "id": 1010,
    "word": "approve",
    "choices": [
      "ふりをする",
      "ささやく",
      "賛成する",
      "取り組む"
    ],
    "correct": 2,
    "sentence": "I can't approve of his plan.",
    "jp": "彼の計画には賛成できない。"
  },
  {
    "id": 1011,
    "word": "defend",
    "choices": [
      "打ち負かす",
      "ささやく",
      "守る",
      "取り組む"
    ],
    "correct": 2,
    "sentence": "Many martial arts help you defend yourself in a dangerous situation.",
    "jp": "多くの格闘技は，危険な状況で自分自身を守るのに役立つ。"
  },
  {
    "id": 1012,
    "word": "democracy",
    "choices": [
      "マスメディア",
      "民主主義",
      "端",
      "側面"
    ],
    "correct": 1,
    "sentence": "Our country's democracy works, but it has a lot of problems.",
    "jp": "我が国の民主主義は機能しているが，多くの問題を抱えている。"
  },
  {
    "id": 1013,
    "word": "liberty",
    "choices": [
      "端",
      "自由",
      "ソフトウェア",
      "小売り"
    ],
    "correct": 1,
    "sentence": "The concept of liberty is very important in American politics.",
    "jp": "自由という概念はアメリカの政治において非常に重要だ。"
  },
  {
    "id": 1014,
    "word": "abandon",
    "choices": [
      "まき散らす",
      "取り組む",
      "ささやく",
      "捨てる"
    ],
    "correct": 3,
    "sentence": "Too many people abandon their pets in the park.",
    "jp": "ペットを公園に捨てる人が多すぎる。"
  },
  {
    "id": 1015,
    "word": "neglect",
    "choices": [
      "ささやく",
      "打ち負かす",
      "取り組む",
      "怠る"
    ],
    "correct": 3,
    "sentence": "Don't neglect your health when you are busy.",
    "jp": "忙しいときでも健康管理を怠ってはいけない。"
  },
  {
    "id": 1016,
    "word": "quiet",
    "choices": [
      "反対の",
      "厳しい",
      "静かな",
      "もろい"
    ],
    "correct": 2,
    "sentence": "The library is a nice quiet place to study.",
    "jp": "図書館は勉強するには静かでいいところだ。"
  },
  {
    "id": 1017,
    "word": "whisper",
    "choices": [
      "脅迫する",
      "訴える",
      "矛盾する",
      "ささやく"
    ],
    "correct": 3,
    "sentence": "The two students kept whispering to each other at the back of the classroom.",
    "jp": "２人の生徒が教室の後ろでひそひそ話を続けていた。"
  },
  {
    "id": 1018,
    "word": "capacity",
    "choices": [
      "小売り",
      "能力",
      "乱用",
      "侵略"
    ],
    "correct": 1,
    "sentence": "We all have the capacity for rational thought but sometimes fail to use it.",
    "jp": "私たちは誰でも理性的な思考能力を持っているが，時にそれを使いこなせないことがある。"
  },
  {
    "id": 1019,
    "word": "capable",
    "choices": [
      "違法の",
      "無実の",
      "できる",
      "厳しい"
    ],
    "correct": 2,
    "sentence": "He is capable of entering a top university if he works hard.",
    "jp": "彼は努力すれば一流大学に入ることができる。"
  },
  {
    "id": 1020,
    "word": "injury",
    "choices": [
      "逆説",
      "乱用",
      "負傷",
      "学期"
    ],
    "correct": 2,
    "sentence": "His leg injury is getting better slowly.",
    "jp": "彼の足のけがは徐々によくなってきている。"
  },
  {
    "id": 1021,
    "word": "vulnerable",
    "choices": [
      "無実の",
      "商業の",
      "傷つきやすい",
      "偽物"
    ],
    "correct": 2,
    "sentence": "Elderly people are more vulnerable to viruses than younger people.",
    "jp": "年配の人は若い人よりウイルスに弱い。"
  },
  {
    "id": 1022,
    "word": "fragile",
    "choices": [
      "もろい",
      "現実的な",
      "倫理的な",
      "反対の"
    ],
    "correct": 0,
    "sentence": "Every animal is part of this complex and fragile ecosystem.",
    "jp": "すべての動物がこの複雑でもろい生態系の一部だ。"
  },
  {
    "id": 1023,
    "word": "delicate",
    "choices": [
      "繊細な",
      "違法の",
      "偽物",
      "厳しい"
    ],
    "correct": 0,
    "sentence": "It is a very delicate flower and can die easily.",
    "jp": "それはとても繊細な花で，簡単に枯れてしまう。"
  },
  {
    "id": 1024,
    "word": "investigate",
    "choices": [
      "混同する",
      "取り組む",
      "自動化する",
      "調査する"
    ],
    "correct": 3,
    "sentence": "The police are investigating the crime.",
    "jp": "警察はその犯罪を捜査している。"
  },
  {
    "id": 1025,
    "word": "conclude",
    "choices": [
      "取り組む",
      "打ち負かす",
      "終える",
      "まき散らす"
    ],
    "correct": 2,
    "sentence": "She concluded the speech with a short thank-you message.",
    "jp": "彼女は短いお礼の言葉でスピーチを終えた。"
  },
  {
    "id": 1026,
    "word": "invasion",
    "choices": [
      "端",
      "侵略",
      "先駆者",
      "考え"
    ],
    "correct": 1,
    "sentence": "The invasion of our country is against international law.",
    "jp": "我が国への侵略は国際法に違反している。"
  },
  {
    "id": 1027,
    "word": "descendant",
    "choices": [
      "子孫",
      "問い合わせ",
      "企業",
      "相手"
    ],
    "correct": 0,
    "sentence": "He found out that he was a descendant of the King of England.",
    "jp": "彼は自分がイングランド王の子孫であることを知った。"
  },
  {
    "id": 1028,
    "word": "core",
    "choices": [
      "先駆者",
      "候補",
      "ソフトウェア",
      "中心"
    ],
    "correct": 3,
    "sentence": "Although it is a very large company, its core business is still car production.",
    "jp": "非常に大きな会社だが，中核事業はいまだに自動車製造だ。"
  },
  {
    "id": 1029,
    "word": "edge",
    "choices": [
      "端",
      "署名",
      "乱用",
      "締切"
    ],
    "correct": 0,
    "sentence": "Be careful! That glass is close to the edge of the table.",
    "jp": "気をつけて！ グラスがテーブルの端に近いよ。"
  },
  {
    "id": 1030,
    "word": "tip",
    "choices": [
      "先（端）",
      "ソフトウェア",
      "企業",
      "小売り"
    ],
    "correct": 0,
    "sentence": "I can't remember the word, but it is on the tip of my tongue.",
    "jp": "その言葉は思い出せないが，舌の先にはある〔すぐそこまで出かかっている〕。"
  },
  {
    "id": 1031,
    "word": "tough",
    "choices": [
      "残酷な",
      "末期の",
      "商業の",
      "厳しい"
    ],
    "correct": 3,
    "sentence": "It was a tough decision to leave the job.",
    "jp": "その仕事を辞めるのは厳しい決断だった。"
  },
  {
    "id": 1032,
    "word": "harsh",
    "choices": [
      "商業の",
      "理性的な",
      "厳しい",
      "正直な"
    ],
    "correct": 2,
    "sentence": "The region faces a harsh winter every year.",
    "jp": "その地域は毎年厳しい冬に見舞われる。"
  },
  {
    "id": 1033,
    "word": "firm",
    "choices": [
      "広告",
      "能力",
      "会社",
      "錠剤"
    ],
    "correct": 2,
    "sentence": "She joined a consulting firm after graduation.",
    "jp": "彼女は卒業後、コンサル会社に入社した。"
  },
  {
    "id": 1034,
    "word": "rigid",
    "choices": [
      "厳格な",
      "商業の",
      "反対の",
      "傷つきやすい"
    ],
    "correct": 0,
    "sentence": "Our education system is too rigid and focuses too heavily on tests.",
    "jp": "私たちの教育制度はあまりにも厳格で，過度にテストに重点を置いている。"
  },
  {
    "id": 1035,
    "word": "practical",
    "choices": [
      "実践的な",
      "末期の",
      "反対の",
      "できる"
    ],
    "correct": 0,
    "sentence": "He is very good at giving practical advice on life's problems.",
    "jp": "彼は人生の問題に対して実践的なアドバイスをするのが非常に得意だ。"
  },
  {
    "id": 1036,
    "word": "commit",
    "choices": [
      "ささやく",
      "取り組む",
      "約束する",
      "魅力がある"
    ],
    "correct": 2,
    "sentence": "He committed himself to helping the local community.",
    "jp": "彼は地域社会を助けると約束した。"
  },
  {
    "id": 1037,
    "word": "commission",
    "choices": [
      "締切",
      "広告",
      "相手",
      "依頼"
    ],
    "correct": 3,
    "sentence": "The artist received a lot of commissions from them.",
    "jp": "その画家は彼らからたくさんの仕事の依頼を受けた。"
  },
  {
    "id": 1038,
    "word": "donate",
    "choices": [
      "ささやく",
      "取り組む",
      "寄付する",
      "守る"
    ],
    "correct": 2,
    "sentence": "He donated a lot of money to charity.",
    "jp": "彼は慈善団体に多額のお金を寄付した。"
  },
  {
    "id": 1039,
    "word": "media",
    "choices": [
      "マスメディア",
      "企業",
      "運動",
      "相手"
    ],
    "correct": 0,
    "sentence": "The media enjoys too much power in my country.",
    "jp": "私の国ではマスメディアが過剰な権力を享受している。"
  },
  {
    "id": 1040,
    "word": "tackle",
    "choices": [
      "魅力がある",
      "まき散らす",
      "調査する",
      "取り組む"
    ],
    "correct": 3,
    "sentence": "It is very difficult to tackle the problem of child labor.",
    "jp": "児童労働の問題に取り組むのは非常に難しい。"
  },
  {
    "id": 1041,
    "word": "insert",
    "choices": [
      "挿入する",
      "制限する",
      "非難する",
      "ささやく"
    ],
    "correct": 0,
    "sentence": "Please insert your bank card into the machine.",
    "jp": "銀行のカードを機械に挿入してください。"
  },
  {
    "id": 1042,
    "word": "install",
    "choices": [
      "主張する",
      "インストールする",
      "ささやく",
      "守る"
    ],
    "correct": 1,
    "sentence": "I have installed the game software on my computer.",
    "jp": "コンピューターにゲームソフトをインストールした。"
  },
  {
    "id": 1043,
    "word": "attach",
    "choices": [
      "ささやく",
      "守る",
      "添付する",
      "矛盾する"
    ],
    "correct": 2,
    "sentence": "A copy of the photograph is attached to this email.",
    "jp": "写真1部をこのメールに添付します。"
  },
  {
    "id": 1044,
    "word": "strict",
    "choices": [
      "理性的な",
      "厳しい",
      "無実の",
      "残酷な"
    ],
    "correct": 1,
    "sentence": "There are many strict rules in the school.",
    "jp": "その学校にはたくさんの厳しい規則がある。"
  },
  {
    "id": 1045,
    "word": "restrict",
    "choices": [
      "ささやく",
      "制限する",
      "打ち負かす",
      "誇張する"
    ],
    "correct": 1,
    "sentence": "Access to the lounge is restricted to passengers with business class tickets.",
    "jp": "ラウンジの利用はビジネスクラスのチケットを持つ乗客に限られている。"
  },
  {
    "id": 1046,
    "word": "threaten",
    "choices": [
      "脅迫する",
      "尊敬する",
      "ささやく",
      "まねる"
    ],
    "correct": 0,
    "sentence": "The man threatened the shoppers with a knife.",
    "jp": "その男は買い物客をナイフで脅した。"
  },
  {
    "id": 1047,
    "word": "aspect",
    "choices": [
      "署名",
      "側面",
      "問い合わせ",
      "子孫"
    ],
    "correct": 1,
    "sentence": "The situation has taken on a new aspect.",
    "jp": "情勢は新しい局面を呈した。"
  },
  {
    "id": 1048,
    "word": "impression",
    "choices": [
      "相手",
      "先",
      "印象",
      "負傷"
    ],
    "correct": 2,
    "sentence": "What was your first impression of the US?",
    "jp": "アメリカの第一印象はどうでしたか。"
  },
  {
    "id": 1049,
    "word": "lottery",
    "choices": [
      "相手",
      "提唱者",
      "宝くじ",
      "観点"
    ],
    "correct": 2,
    "sentence": "He bought tickets for the national lottery.",
    "jp": "彼は国の宝くじのチケットを買った。"
  },
  {
    "id": 1050,
    "word": "commercial",
    "choices": [
      "繊細な",
      "商業の",
      "不誠実な",
      "正直な"
    ],
    "correct": 1,
    "sentence": "The movie was a commercial success because of the great acting.",
    "jp": "その映画は素晴らしい演技のおかげで商業的な成功を収めた。"
  },
  {
    "id": 1051,
    "word": "retail",
    "choices": [
      "学期",
      "錠剤",
      "端",
      "小売り"
    ],
    "correct": 3,
    "sentence": "Online retail has grown rapidly in recent years.",
    "jp": "近年、オンライン小売りは急速に拡大している。"
  },
  {
    "id": 1052,
    "word": "technically",
    "choices": [
      "技術的に",
      "その結果",
      "一見",
      "驚いたことに"
    ],
    "correct": 0,
    "sentence": "Our products are technically better than the older model.",
    "jp": "私たちの製品は技術的に旧型より優れている。"
  },
  {
    "id": 1053,
    "word": "dishonest",
    "choices": [
      "末期の",
      "反対の",
      "不誠実な",
      "もろい"
    ],
    "correct": 2,
    "sentence": "I regret having made a dishonest excuse.",
    "jp": "私は不誠実な言い訳をしたことを後悔している。"
  },
  {
    "id": 1054,
    "word": "candidate",
    "choices": [
      "候補",
      "民主主義",
      "企業",
      "端"
    ],
    "correct": 0,
    "sentence": "There are three candidates for the new position at our office.",
    "jp": "私たちの事務所の新しい役職には3人の候補者がいる。"
  },
  {
    "id": 1055,
    "word": "campaign",
    "choices": [
      "運動",
      "先駆者",
      "会社",
      "広告"
    ],
    "correct": 0,
    "sentence": "Social media is one of the most common election campaign tools.",
    "jp": "ソーシャルメディアは最もよくある選挙運動の道具の１つだ。"
  },
  {
    "id": 1056,
    "word": "assist",
    "choices": [
      "打ち負かす",
      "取り組む",
      "助ける",
      "まき散らす"
    ],
    "correct": 2,
    "sentence": "I have to assist the manager in preparing for the presentation.",
    "jp": "私は上司が発表の準備をするのを手伝わなければならない。"
  },
  {
    "id": 1057,
    "word": "aid",
    "choices": [
      "子孫",
      "自由",
      "支援",
      "評判"
    ],
    "correct": 2,
    "sentence": "The Japanese government provides a lot of aid to Asian countries.",
    "jp": "日本政府はアジア諸国に多くの支援を提供している。"
  },
  {
    "id": 1058,
    "word": "semester",
    "choices": [
      "先駆者",
      "学期",
      "締切",
      "提唱者"
    ],
    "correct": 1,
    "sentence": "You need to take this course during the first semester.",
    "jp": "最初の学期にはこのコースを取る必要がある。"
  },
  {
    "id": 1059,
    "word": "terminal",
    "choices": [
      "傷つきやすい",
      "厳しい",
      "末期の",
      "さまざまな"
    ],
    "correct": 2,
    "sentence": "The doctor specializes in terminal care.",
    "jp": "その医師は終末医療を専門としている。"
  },
  {
    "id": 1060,
    "word": "deadline",
    "choices": [
      "民主主義",
      "先",
      "依頼",
      "締切"
    ],
    "correct": 3,
    "sentence": "I was able to submit the report well before the deadline.",
    "jp": "私は締切よりもかなり前にレポートを提出することができた。"
  },
  {
    "id": 1061,
    "word": "inquiry",
    "choices": [
      "企業",
      "自由",
      "逆説",
      "問い合わせ"
    ],
    "correct": 3,
    "sentence": "Thank you for your inquiry about our product.",
    "jp": "当社の製品についてお問い合わせいただきありがとうございます。"
  },
  {
    "id": 1062,
    "word": "advertise",
    "choices": [
      "ふりをする",
      "ささやく",
      "取り組む",
      "広告する"
    ],
    "correct": 3,
    "sentence": "Many companies advertise on social media now.",
    "jp": "今では多くの企業がSNSで広告している。"
  },
  {
    "id": 1063,
    "word": "honest",
    "choices": [
      "できる",
      "厳しい",
      "無実の",
      "正直な"
    ],
    "correct": 3,
    "sentence": "To be honest, I am a little nervous.",
    "jp": "正直に言うと少し緊張している。"
  },
  {
    "id": 1064,
    "word": "honor",
    "choices": [
      "名誉",
      "非難",
      "面白さ",
      "ささやき"
    ],
    "correct": 0,
    "sentence": "It is an honor to finally meet you in person.",
    "jp": "ようやくあなたに直接お会いできて光栄です。"
  },
  {
    "id": 1065,
    "word": "reputation",
    "choices": [
      "考え方",
      "評判",
      "観点",
      "端"
    ],
    "correct": 1,
    "sentence": "The English professor has a great reputation among the students.",
    "jp": "その英国人教授は学生の間でとても評判がよい。"
  },
  {
    "id": 1066,
    "word": "innocent",
    "choices": [
      "さまざまな",
      "厳格な",
      "無実の",
      "傷つきやすい"
    ],
    "correct": 2,
    "sentence": "The police released the man when they realized he was innocent.",
    "jp": "警察は彼が無実であることがわかり釈放した。"
  },
  {
    "id": 1067,
    "word": "opponent",
    "choices": [
      "乱用",
      "相手",
      "中心",
      "マスメディア"
    ],
    "correct": 1,
    "sentence": "The player looked at his opponent and thought he would easily win.",
    "jp": "その選手は対戦相手を見て簡単に勝てると思った。"
  },
  {
    "id": 1068,
    "word": "illegal",
    "choices": [
      "傷つきやすい",
      "倫理的な",
      "厳しい",
      "違法の"
    ],
    "correct": 3,
    "sentence": "Some types of drugs are illegal in Japan.",
    "jp": "日本では一部に違法な薬もある。"
  },
  {
    "id": 1069,
    "word": "confuse",
    "choices": [
      "取り組む",
      "引っ込める",
      "混同する",
      "ささやく"
    ],
    "correct": 2,
    "sentence": "Don't confuse liberty with license.",
    "jp": "自由を勝手気ままと混同してはいけない。"
  },
  {
    "id": 1070,
    "word": "ad",
    "choices": [
      "広告",
      "侵略",
      "民主主義",
      "宝くじ"
    ],
    "correct": 0,
    "sentence": "I looked at the ads in the newspaper for a new apartment.",
    "jp": "私は新聞で新しいアパートの広告を見た。"
  },
  {
    "id": 1071,
    "word": "consequently",
    "choices": [
      "一見",
      "その結果",
      "さらに",
      "技術的に"
    ],
    "correct": 1,
    "sentence": "He stole money from the company so, consequently, he lost his job.",
    "jp": "彼は会社からお金を盗んだので，その結果職を失った。"
  },
  {
    "id": 1072,
    "word": "exaggerate",
    "choices": [
      "取り組む",
      "ささやく",
      "ふりをする",
      "誇張する"
    ],
    "correct": 3,
    "sentence": "I think this article exaggerates the dangers of social media.",
    "jp": "この記事はソーシャルメディアの危険性を誇張していると思う。"
  },
  {
    "id": 1073,
    "word": "advocate",
    "choices": [
      "錠剤",
      "提唱者",
      "署名",
      "宝くじ"
    ],
    "correct": 1,
    "sentence": "She is an advocate of equal educational opportunities.",
    "jp": "彼女は教育の機会均等の提唱者だ。"
  },
  {
    "id": 1074,
    "word": "pill",
    "choices": [
      "学期",
      "署名",
      "会社",
      "錠剤"
    ],
    "correct": 3,
    "sentence": "My elderly mother takes three pills a day for her medical condition.",
    "jp": "私の年老いた母は，病気のために1日に3錠の薬を飲んでいる。"
  },
  {
    "id": 1075,
    "word": "cure",
    "choices": [
      "取り組む",
      "ささやく",
      "治療する",
      "調査する"
    ],
    "correct": 2,
    "sentence": "This medicine can cure the disease if it is found early.",
    "jp": "その病気は早く見つかればこの薬で治療できる。"
  },
  {
    "id": 1076,
    "word": "heal",
    "choices": [
      "治る",
      "ささやく",
      "打ち負かす",
      "取り組む"
    ],
    "correct": 0,
    "sentence": "The wound will heal in a few days.",
    "jp": "その傷は数日で治るだろう。"
  },
  {
    "id": 1077,
    "word": "corporation",
    "choices": [
      "先駆者",
      "問い合わせ",
      "企業",
      "候補"
    ],
    "correct": 2,
    "sentence": "He works for a large international corporation in the city.",
    "jp": "彼は市内の大きな国際企業に勤めている。"
  },
  {
    "id": 1078,
    "word": "pioneer",
    "choices": [
      "先駆者",
      "運動",
      "自由",
      "端"
    ],
    "correct": 0,
    "sentence": "Our professor is a pioneer in the field of cloning.",
    "jp": "私たちの教授はクローン技術の分野の先駆者だ。"
  },
  {
    "id": 1079,
    "word": "assert",
    "choices": [
      "主張する",
      "実演する",
      "ささやく",
      "取り組む"
    ],
    "correct": 0,
    "sentence": "You need to assert yourself more in meetings.",
    "jp": "あなたは会議でもっと自己主張するべきだ。"
  },
  {
    "id": 1080,
    "word": "criticize",
    "choices": [
      "ささやく",
      "尊敬する",
      "批判する",
      "取り組む"
    ],
    "correct": 2,
    "sentence": "He criticized me for not handing in the report in time.",
    "jp": "彼は期限内にレポートを提出しなかったと私を批判した。"
  },
  {
    "id": 1081,
    "word": "accuse",
    "choices": [
      "ささやく",
      "取り組む",
      "打ち負かす",
      "訴える"
    ],
    "correct": 3,
    "sentence": "The woman accused the company of unfair treatment.",
    "jp": "その女性は不当な扱いで会社を訴えた。"
  },
  {
    "id": 1082,
    "word": "automate",
    "choices": [
      "対処する",
      "自動化する",
      "取り組む",
      "ささやく"
    ],
    "correct": 1,
    "sentence": "The factory plans to automate more of its work.",
    "jp": "その工場は作業のさらなる自動化を計画している。"
  },
  {
    "id": 1083,
    "word": "blame",
    "choices": [
      "助ける",
      "非難する",
      "取り組む",
      "ささやく"
    ],
    "correct": 1,
    "sentence": "My sister blamed me for making our parents angry.",
    "jp": "妹は両親を怒らせたことで私を責めた。"
  },
  {
    "id": 1084,
    "word": "scatter",
    "choices": [
      "怠る",
      "引っ込める",
      "まき散らす",
      "終える"
    ],
    "correct": 2,
    "sentence": "The child's toys lay scattered on the floor.",
    "jp": "子供のおもちゃが床に散乱していた。"
  },
  {
    "id": 1085,
    "word": "fake",
    "choices": [
      "末期の",
      "繊細な",
      "偽物",
      "商業の"
    ],
    "correct": 2,
    "sentence": "The picture I bought at the market was a fake.",
    "jp": "私が市場で買った絵は偽物だった。"
  },
  {
    "id": 1086,
    "word": "pretend",
    "choices": [
      "ささやく",
      "広告する",
      "ふりをする",
      "寄付する"
    ],
    "correct": 2,
    "sentence": "The man pretended to be listening to his wife.",
    "jp": "その男は妻の話を聞いているふりをした。"
  },
  {
    "id": 1087,
    "word": "imitate",
    "choices": [
      "打ち負かす",
      "まねる",
      "取り組む",
      "ささやく"
    ],
    "correct": 1,
    "sentence": "Researchers found that apes imitate the actions of humans.",
    "jp": "研究者たちは，類人猿が人間の行動をまねることを発見した。"
  },
  {
    "id": 1088,
    "word": "contradict",
    "choices": [
      "治療する",
      "取り組む",
      "ささやく",
      "矛盾する"
    ],
    "correct": 3,
    "sentence": "His explanation contradicts the facts.",
    "jp": "彼の説明は事実と矛盾している。"
  },
  {
    "id": 1089,
    "word": "contrary",
    "choices": [
      "倫理的な",
      "不誠実な",
      "もろい",
      "反対の"
    ],
    "correct": 3,
    "sentence": "Contrary to all his teachers' expectations, he passed the examination easily.",
    "jp": "すべての教師の予想に反して，彼は簡単に試験に合格した。"
  },
  {
    "id": 1090,
    "word": "paradox",
    "choices": [
      "子孫",
      "評判",
      "能力",
      "逆説"
    ],
    "correct": 3,
    "sentence": "“Everything I say is a lie” is a popular example of a paradox.",
    "jp": "「私の言うことはすべてうそだ」は逆説のよく知られた例だ。"
  },
  {
    "id": 1091,
    "word": "software",
    "choices": [
      "学期",
      "ソフトウェア",
      "署名",
      "端"
    ],
    "correct": 1,
    "sentence": "You can download the software for the printer from our website.",
    "jp": "プリンターのソフトウェアは当社のウェブサイトからダウンロードできます。"
  },
  {
    "id": 1092,
    "word": "signature",
    "choices": [
      "提唱者",
      "依頼",
      "学期",
      "署名"
    ],
    "correct": 3,
    "sentence": "Please put your signature at the bottom of the page.",
    "jp": "ページの一番下に署名をしてください。"
  },
  {
    "id": 1093,
    "word": "surprisingly",
    "choices": [
      "その結果",
      "技術的に",
      "一見",
      "驚いたことに"
    ],
    "correct": 3,
    "sentence": "Surprisingly, my friend arrived on time for the first time ever.",
    "jp": "驚いたことに，私の友人は初めて時間通りに到着した。"
  },
  {
    "id": 1094,
    "word": "beat",
    "choices": [
      "助ける",
      "取り組む",
      "打ち負かす",
      "怠る"
    ],
    "correct": 2,
    "sentence": "The champion easily beat the new player.",
    "jp": "チャンピオンは新人選手を簡単に打ち負かした。"
  },
  {
    "id": 1095,
    "word": "seemingly",
    "choices": [
      "その結果",
      "一見",
      "さらに",
      "技術的に"
    ],
    "correct": 1,
    "sentence": "The problem was seemingly simple, but it took hours to solve.",
    "jp": "その問題は一見簡単そうだったが、解くのに何時間もかかった。"
  },
  {
    "id": 1096,
    "word": "withdraw",
    "choices": [
      "ささやく",
      "引っ込める",
      "取り組む",
      "治療する"
    ],
    "correct": 1,
    "sentence": "She withdrew that suggestion as soon as she was criticized for it.",
    "jp": "批判されると，彼女はすぐにその提案を引っ込めた。"
  },
  {
    "id": 1097,
    "word": "ethical",
    "choices": [
      "倫理的な",
      "できる",
      "厳しい",
      "商業の"
    ],
    "correct": 0,
    "sentence": "Doctors must make ethical decisions in difficult cases.",
    "jp": "医師は難しい事例で倫理的な判断をしなければならない。"
  },
  {
    "id": 1098,
    "word": "rational",
    "choices": [
      "厳しい",
      "無実の",
      "理性的な",
      "もろい"
    ],
    "correct": 2,
    "sentence": "Try to be rational even though you are so angry.",
    "jp": "とても腹が立っても理性的であろうと努めなさい。"
  },
  {
    "id": 1099,
    "word": "vice",
    "choices": [
      "観点",
      "評判",
      "締切",
      "悪徳"
    ],
    "correct": 3,
    "sentence": "What is considered a vice differs from culture to culture.",
    "jp": "何が悪とみなされるかは文化によって異なる。"
  },
  {
    "id": 1100,
    "word": "appeal",
    "choices": [
      "ささやく",
      "取り組む",
      "魅力がある",
      "まき散らす"
    ],
    "correct": 2,
    "sentence": "The design appeals to younger users.",
    "jp": "そのデザインは若い利用者に魅力がある。"
  }
];
