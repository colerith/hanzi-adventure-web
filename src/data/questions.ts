export type QuizQuestion = {
  question: string
  options: string[]
  answer: string
}

export const grammarQuestions: QuizQuestion[] = [
  { question: '这是我 [ ] 妈妈。', options: ['的', '吗', '呢'], answer: '的' },
  { question: '你是学生 [ ]？', options: ['吗', '呢', '吧'], answer: '吗' },
  { question: '我很好，你 [ ]？', options: ['呢', '吗', '的'], answer: '呢' },
  { question: '太贵 [ ]，便宜点儿吧。', options: ['了', '吗', '的'], answer: '了' },
  { question: '我们走 [ ]！', options: ['吧', '吗', '呢'], answer: '吧' },

  { question: '今天天气 [ ] 好。', options: ['很', '太', '都'], answer: '很' },
  { question: '这个苹果 [ ] 大了！', options: ['太', '很', '也'], answer: '太' },
  { question: '我 [ ] 是老师，我是学生。', options: ['不', '没', '都'], answer: '不' },
  { question: '他是留学生，我 [ ] 是留学生。', options: ['也', '都', '很'], answer: '也' },
  { question: '我们 [ ] 是中国人。', options: ['都', '也', '很'], answer: '都' },

  { question: '我买一 [ ] 苹果。', options: ['斤', '本', '件'], answer: '斤' },
  { question: '他家有五 [ ] 人。', options: ['口', '个', '张'], answer: '口' },
  { question: '这是一 [ ] 汉语书。', options: ['本', '辆', '杯'], answer: '本' },
  { question: '那是一 [ ] 新车。', options: ['辆', '件', '张'], answer: '辆' },
  { question: '老师，我问您一 [ ] 问题。', options: ['个', '位', '本'], answer: '个' },
  { question: '这 [ ] 老师姓王。', options: ['位', '个', '名'], answer: '位' },
  { question: '我有一 [ ] 衣服是红色的。', options: ['件', '张', '辆'], answer: '件' },
  { question: '请给我一 [ ] 纸。', options: ['张', '本', '斤'], answer: '张' },
  { question: '我要喝一 [ ] 咖啡。', options: ['杯', '碗', '口'], answer: '杯' },
  { question: '食堂里，他吃了一 [ ] 米饭。', options: ['碗', '杯', '斤'], answer: '碗' },

  { question: '[ ] 是你的老师？', options: ['谁', '什么', '哪儿'], answer: '谁' },
  { question: '你叫 [ ] 名字？', options: ['什么', '谁', '几'], answer: '什么' },
  { question: '你在 [ ] 学习汉语？', options: ['哪儿', '什么', '谁'], answer: '哪儿' },
  { question: '今天星期 [ ]？', options: ['几', '多少', '什么'], answer: '几' },
  { question: '你们公司有 [ ] 员工？', options: ['多少', '几', '哪儿'], answer: '多少' },

  { question: '我 [ ] 中国人。', options: ['是', '在', '有'], answer: '是' },
  { question: '我的书 [ ] 桌子上。', options: ['在', '是', '有'], answer: '在' },
  { question: '你 [ ] 哥哥吗？', options: ['有', '是', '在'], answer: '有' },
  { question: '我明天 [ ] 北京。', options: ['去', '在', '是'], answer: '去' },
  { question: '我 [ ] 玛丽。', options: ['叫', '姓', '是'], answer: '叫' },

  { question: '你吃饭了 [ ]？', options: ['吗', '没有', '不'], answer: '吗' },
  { question: '你吃饭了 [ ]？', options: ['没有', '不', '吗'], answer: '没有' },
  { question: '你 [ ] 英国人还是美国人？', options: ['是', '在', '有'], answer: '是' },
  { question: '我没有自行车，他 [ ] 没有。', options: ['也', '都', '和'], answer: '也' },
  { question: '苹果和香蕉，我 [ ] 喜欢吃。', options: ['都', '也', '还'], answer: '都' },
  { question: '你的车是新的 [ ] 旧的？', options: ['还是', '或者', '和'], answer: '还是' },
  { question: '图书馆里 [ ] 人。', options: ['没有', '不有', '不是'], answer: '没有' },
  {
    question: '我 [ ] 学习汉语，[ ] 学习英语。',
    options: ['不但...而且...', '因为...所以...', '虽然...但是...'],
    answer: '不但...而且...',
  },
  { question: '他 [ ] 家看书呢。', options: ['在', '去', '是'], answer: '在' },
  { question: '我认识 [ ] 位老师。', options: ['这', '那', '哪'], answer: '这' },

  { question: '我买了一 [ ] 笔。', options: ['支', '张', '本'], answer: '支' },
  { question: '那 [ ] 医院很大。', options: ['家', '个', '所'], answer: '家' },
  { question: '我有一 [ ] 雨伞。', options: ['把', '件', '支'], answer: '把' },
  { question: '他有两个 [ ]。', options: ['弟弟', '口人', '朋友们'], answer: '弟弟' },
  { question: '我要两 [ ] 馒头。', options: ['个', '碗', '斤'], answer: '个' },
  { question: '一共二十 [ ] 钱。', options: ['块', '元', '人民币'], answer: '块' },
  { question: '他不 [ ] 忙，我也不 [ ] 忙。', options: ['太', '很', '都'], answer: '太' },
  { question: '你 [ ] 谁啊？', options: ['找', '是', '看'], answer: '找' },
  { question: '我 [ ] 朋友一起去商店。', options: ['和', '也', '都'], answer: '和' },
  { question: '我们班 [ ] 二十多个学生。', options: ['有', '是', '在'], answer: '有' },
]

export const dialogueQuestions: QuizQuestion[] = [
  {
    question: 'A: 你好！',
    options: ['B: 你好！', 'B: 再见。', 'B: 对不起。'],
    answer: 'B: 你好！',
  },
  {
    question: 'A: 对不起。',
    options: ['B: 没关系。', 'B: 谢谢你。', 'B: 不客气。'],
    answer: 'B: 没关系。',
  },
  {
    question: 'A: 苹果一斤多少钱？',
    options: ['B: 六块。', 'B: 太贵了。', 'B: 五个苹果。'],
    answer: 'B: 六块。',
  },
  {
    question: 'A: 你要几个苹果？',
    options: ['B: 我要三个。', 'B: 我要三斤。', 'B: 我要三辆。'],
    answer: 'B: 我要三个。',
  },
  {
    question: 'A: 你家有几口人？',
    options: ['B: 我家有四口人。', 'B: 我家有四个人。', 'B: 我家在北京。'],
    answer: 'B: 我家有四口人。',
  },
  {
    question: 'A: 这位是王老师。',
    options: ['B: 王老师，您好！', 'B: 他是王老师。', 'B: 我不认识他。'],
    answer: 'B: 王老师，您好！',
  },
  {
    question: 'A: 你去哪儿？',
    options: ['B: 我去银行取钱。', 'B: 我是学生。', 'B: 今天星期三。'],
    answer: 'B: 我去银行取钱。',
  },
  {
    question: 'A: 你的汉语老师是哪国人？',
    options: ['B: 他是中国人。', 'B: 他是汉语老师。', 'B: 他是男的。'],
    answer: 'B: 他是中国人。',
  },
  {
    question: 'A: 请问，这是你的书吗？',
    options: ['B: 对，这是我的一本书。', 'B: 对，这是我的一个书。', 'B: 这本书很好。'],
    answer: 'B: 对，这是我的一本书。',
  },
  {
    question: 'A: 你喝茶还是喝咖啡？',
    options: ['B: 我喝茶，谢谢。', 'B: 是的，我喝。', 'B: 我不忙。'],
    answer: 'B: 我喝茶，谢谢。',
  },
  {
    question: 'A: 你的车是什么颜色的？',
    options: ['B: 我的车是蓝色的。', 'B: 我的车很新。', 'B: 这是一辆车。'],
    answer: 'B: 我的车是蓝色的。',
  },
  {
    question: 'A: 今天星期几？',
    options: ['B: 今天星期五。', 'B: 今天很忙。', 'B: 明天见。'],
    answer: 'B: 今天星期五。',
  },
  {
    question: 'A: 你会说汉语吗？',
    options: ['B: 我会说一点儿。', 'B: 汉语不太难。', 'B: 我是学生。'],
    answer: 'B: 我会说一点儿。',
  },
  {
    question: 'A: 你学习什么？',
    options: ['B: 我学习汉语。', 'B: 我学习很好。', 'B: 我在北京学习。'],
    answer: 'B: 我学习汉语。',
  },
  {
    question: 'A: 认识你很高兴。',
    options: ['B: 认识你我也很高兴。', 'B: 不客气。', 'B: 没关系。'],
    answer: 'B: 认识你我也很高兴。',
  },
  {
    question: 'A: 王老师在吗？',
    options: ['B: 他不在，他在家呢。', 'B: 是，他是王老师。', 'B: 王老师很好。'],
    answer: 'B: 他不在，他在家呢。',
  },
  {
    question: 'A: 你要买几本书？',
    options: ['B: 我买两本书。', 'B: 我买两个书。', 'B: 我买两件书。'],
    answer: 'B: 我买两本书。',
  },
  {
    question: 'A: 先生，您换什么钱？',
    options: ['B: 我换人民币。', 'B: 我换一百。', 'B: 我去银行。'],
    answer: 'B: 我换人民币。',
  },
  {
    question: 'A: 那辆自行车是你的吗？',
    options: ['B: 不是，那辆是老师的。', 'B: 不是，那个是老师的。', 'B: 我的车是新的。'],
    answer: 'B: 不是，那辆是老师的。',
  },
  {
    question: 'A: 你的同学是哪国人？',
    options: ['B: 他是美国人。', 'B: 他是留学生。', 'B: 他是我的同学。'],
    answer: 'B: 他是美国人。',
  },
  {
    question: 'A: 你妈妈做什么工作？',
    options: ['B: 她是医生。', 'B: 她在医院。', 'B: 她工作很忙。'],
    answer: 'B: 她是医生。',
  },
  {
    question: 'A: 食堂在哪儿？',
    options: ['B: 在那儿，教学楼的旁边。', 'B: 我们去食堂吃饭。', 'B: 食堂的饭很好吃。'],
    answer: 'B: 在那儿，教学楼的旁边。',
  },
  {
    question: 'A: 你觉得语法难吗？',
    options: ['B: 我觉得语法不太难，听和说比较容易。', 'B: 我不学习语法。', 'B: 是的，我喜欢语法。'],
    answer: 'B: 我觉得语法不太难，听和说比较容易。',
  },
  {
    question: 'A: 这件衣服多少钱？',
    options: ['B: 八十块。', 'B: 这件衣服很好看。', 'B: 我要买一件。'],
    answer: 'B: 八十块。',
  },
  {
    question: 'A: 谢谢你！',
    options: ['B: 不客气。', 'B: 对不起。', 'B: 你好。'],
    answer: 'B: 不客气。',
  },
  {
    question: 'A: 你的箱子重不重？',
    options: ['B: 我的很重，这个黑的很重。', 'B: 我的箱子是新的。', 'B: 我没有箱子。'],
    answer: 'B: 我的很重，这个黑的很重。',
  },
  {
    question: 'A: 这是谁的照片？',
    options: ['B: 这是我的一张照片。', 'B: 这是我的一个照片。', 'B: 这是我的一本照片。'],
    answer: 'B: 这是我的一张照片。',
  },
  {
    question: 'A: 橘子怎么卖？',
    options: ['B: 八块钱一斤。', 'B: 橘子很好吃。', 'B: 这是橘子。'],
    answer: 'B: 八块钱一斤。',
  },
  {
    question: 'A: 你是老师吗？',
    options: ['B: 我不是老师，我是学生。', 'B: 是，我是老师。', 'B: 你是老师。'],
    answer: 'B: 我不是老师，我是学生。',
  },
  {
    question: 'A: 最近工作忙不忙？',
    options: ['B: 不太忙，您呢？', 'B: 我工作很好。', 'B: 我是经理。'],
    answer: 'B: 不太忙，您呢？',
  },
  {
    question: 'A: 你要一杯茶，还是要一杯咖啡？',
    options: ['B: 来一杯茶吧！', 'B: 来一瓶茶吧！', 'B: 是的，我要。'],
    answer: 'B: 来一杯茶吧！',
  },
  {
    question: 'A: 请问，您贵姓？',
    options: ['B: 我姓张。', 'B: 我叫张东。', 'B: 我是中国人。'],
    answer: 'B: 我姓张。',
  },
  {
    question: 'A: 你是哪国人？',
    options: ['B: 我是法国人。', 'B: 我说法语。', 'B: 我住在法国。'],
    answer: 'B: 我是法国人。',
  },
  {
    question: 'A: 这是什么药？',
    options: ['B: 这是中药。', 'B: 这是我的药。', 'B: 这药很贵。'],
    answer: 'B: 这是中药。',
  },
  {
    question: 'A: 你的自行车是新的还是旧的？',
    options: ['B: 是新的。', 'B: 是蓝色的。', 'B: 是一辆自行车。'],
    answer: 'B: 是新的。',
  },
  {
    question: 'A: 你有没有兄弟姐妹？',
    options: ['B: 我没有姐姐，只有两个弟弟。', 'B: 是的，我有。', 'B: 他们是学生。'],
    answer: 'B: 我没有姐姐，只有两个弟弟。',
  },
  {
    question: 'A: 你们公司有多少员工？',
    options: ['B: 大概有一百多个员工。', 'B: 我们公司很大。', 'B: 他们都是中国人。'],
    answer: 'B: 大概有一百多个员工。',
  },
  {
    question: 'A: 我可以看一下你的词典吗？',
    options: ['B: 当然可以，这本词典你拿去看吧。', 'B: 当然可以，这个词典你拿去看吧。', 'B: 这是一本词典。'],
    answer: 'B: 当然可以，这本词典你拿去看吧。',
  },
  {
    question: 'A: 明天你去不去图书馆？',
    options: ['B: 我不去，我要去银行。', 'B: 明天是星期六。', 'B: 图书馆有很多书。'],
    answer: 'B: 我不去，我要去银行。',
  },
  {
    question: 'A: 你爸爸在哪儿工作？',
    options: ['B: 他在一家外贸公司工作。', 'B: 他是经理。', 'B: 他工作不忙。'],
    answer: 'B: 他在一家外贸公司工作。',
  },
  {
    question: 'A: 你的手机号码是多少？',
    options: ['B: 对不起，我不知道。', 'B: 我的手机是新的。', 'B: 这是我的手机。'],
    answer: 'B: 对不起，我不知道。',
  },
  {
    question: 'A: 你要几碗米饭？',
    options: ['B: 我要一碗米饭。', 'B: 我要一个米饭。', 'B: 我要吃米饭。'],
    answer: 'B: 我要一碗米饭。',
  },
  {
    question: 'A: 那个箱子里是什么？',
    options: ['B: 都是一些日用品。', 'B: 那个箱子很重。', 'B: 那个箱子是黑色的。'],
    answer: 'B: 都是一些日用品。',
  },
  {
    question: 'A: 好久不见，最近怎么样？',
    options: ['B: 马马虎虎。', 'B: 我很忙。', 'B: 我是经理。'],
    answer: 'B: 马马虎虎。',
  },
  {
    question: 'A: 这位小姐是你的朋友吗？',
    options: ['B: 是的，她是我的一位朋友。', 'B: 是的，她是我的一张朋友。', 'B: 是的，她是我的一件朋友。'],
    answer: 'B: 是的，她是我的一位朋友。',
  },
]

export const pinyinQuestions: QuizQuestion[] = [
  {
    question: '“你好” 的拼音是 [ ]',
    options: ['nǐ hǎo', 'ní hǎo', 'nǐ hao', 'nǐ hāo'],
    answer: 'nǐ hǎo',
  },
  {
    question: '“老师” 的拼音是 [ ]',
    options: ['lǎo shī', 'lāo shī', 'lǎo sī', 'lǎo shí'],
    answer: 'lǎo shī',
  },
  {
    question: '“汉语” 的拼音是 [ ]',
    options: ['hànyǔ', 'hànyu', 'hányǔ', 'hànyù'],
    answer: 'hànyǔ',
  },
  {
    question: '“再见” 的拼音是 [ ]',
    options: ['zàijiàn', 'zàijian', 'zāijiàn', 'zàijiān'],
    answer: 'zàijiàn',
  },
  {
    question: '“谢谢” 的拼音是 [ ]',
    options: ['xièxie', 'xiēxie', 'xièxiè', 'xìexie'],
    answer: 'xièxie',
  },
  {
    question: '“不客气” 的拼音是 [ ]',
    options: ['bù kèqi', 'bú kèqi', 'bú kēqi', 'bú kèqì'],
    answer: 'bù kèqi',
  },
  {
    question: '“对不起” 的拼音是 [ ]',
    options: ['duìbuqǐ', 'duìbùqǐ', 'duibuqǐ', 'duìbuqi'],
    answer: 'duìbuqǐ',
  },
  {
    question: '“没关系” 的拼音是 [ ]',
    options: ['méi guānxi', 'méi guānxì', 'mèi guānxi', 'méi guànxi'],
    answer: 'méi guānxi',
  },
  {
    question: '“学校” 的拼音是 [ ]',
    options: ['xuéxiào', 'xuéxiāo', 'xúexiào', 'xuéxiǎo'],
    answer: 'xuéxiào',
  },
  {
    question: '“银行” 的拼音是 [ ]',
    options: ['yínháng', 'yīnháng', 'yínhāng', 'yíngháng'],
    answer: 'yínháng',
  },
  {
    question: '“邮局” 的拼音是 [ ]',
    options: ['yóujú', 'yóuju', 'yōujú', 'yóujù'],
    answer: 'yóujú',
  },
  {
    question: '“明天” 的拼音是 [ ]',
    options: ['míngtiān', 'míngtian', 'mǐngtiān', 'mīngtiān'],
    answer: 'míngtiān',
  },
  {
    question: '“今天” 的拼音是 [ ]',
    options: ['jīntiān', 'jìntiān', 'jīntian', 'jīntiǎn'],
    answer: 'jīntiān',
  },
  {
    question: '“工作” 的拼音是 [ ]',
    options: ['gōngzuò', 'gōngzuō', 'gōngzhuò', 'gōngzòu'],
    answer: 'gōngzuò',
  },
  {
    question: '“身体” 的拼音是 [ ]',
    options: ['shēntǐ', 'shēntī', 'shéntǐ', 'shentǐ'],
    answer: 'shēntǐ',
  },
  {
    question: '“忙” 的拼音是 [ ]',
    options: ['máng', 'māng', 'mǎng', 'màng'],
    answer: 'máng',
  },
  {
    question: '“难” 的拼音是 [ ]',
    options: ['nán', 'nǎn', 'lán', 'nàn'],
    answer: 'nán',
  },
  {
    question: '“爸爸” 的拼音是 [ ]',
    options: ['bàba', 'bābā', 'bǎba', 'bàbà'],
    answer: 'bàba',
  },
  {
    question: '“妈妈” 的拼音是 [ ]',
    options: ['māma', 'māmā', 'mǎma', 'màmā'],
    answer: 'māma',
  },
  {
    question: '“哥哥” 的拼音是 [ ]',
    options: ['gēge', 'gēgē', 'gěge', 'gège'],
    answer: 'gēge',
  },
  {
    question: '“弟弟” 的拼音是 [ ]',
    options: ['dìdi', 'dìdì', 'didi', 'dīdi'],
    answer: 'dìdi',
  },
  {
    question: '“妹妹” 的拼音是 [ ]',
    options: ['mèimei', 'mèimèi', 'meimei', 'mèimeī'],
    answer: 'mèimei',
  },
  {
    question: '“学” 的拼音是 [ ]',
    options: ['xué', 'xúe', 'xuē', 'xuě'],
    answer: 'xué',
  },
  {
    question: '“去” 的拼音是 [ ]',
    options: ['qù', 'qū', 'qǔ', 'qú'],
    answer: 'qù',
  },
  {
    question: '“喝” 的拼音是 [ ]',
    options: ['hē', 'hé', 'hè', 'hě'],
    answer: 'hē',
  },
  {
    question: '“茶” 的拼音是 [ ]',
    options: ['chá', 'chǎ', 'chà', 'cá'],
    answer: 'chá',
  },
  {
    question: '“钱” 的拼音是 [ ]',
    options: ['qián', 'qiǎn', 'qiàn', 'qiān'],
    answer: 'qián',
  },
  {
    question: '“请” 的拼音是 [ ]',
    options: ['qǐng', 'qīng', 'qìng', 'qíng'],
    answer: 'qǐng',
  },
  {
    question: '“坐” 的拼音是 [ ]',
    options: ['zuò', 'zuō', 'zuǒ', 'zhuò'],
    answer: 'zuò',
  },
  {
    question: '“进” 的拼音是 [ ]',
    options: ['jìn', 'jīn', 'jǐn', 'jìng'],
    answer: 'jìn',
  },
  {
    question: '“早上” 的拼音是 [ ]',
    options: ['zǎoshang', 'zǎoshāng', 'zǎoshan', 'zǎoshǎng'],
    answer: 'zǎoshang',
  },
  {
    question: '“下午” 的拼音是 [ ]',
    options: ['xiàwǔ', 'xiàwú', 'xiàwū', 'xiàwù'],
    answer: 'xiàwǔ',
  },
  {
    question: '“晚上” 的拼音是 [ ]',
    options: ['wǎnshang', 'wǎnshāng', 'wǎnshǎng', 'wǎnshàng'],
    answer: 'wǎnshang',
  },
  {
    question: '“同学” 的拼音是 [ ]',
    options: ['tóngxué', 'tóngxuè', 'tōngxué', 'tóngxúe'],
    answer: 'tóngxué',
  },
  {
    question: '“我” 的拼音是 [ ]',
    options: ['wǒ', 'wó', 'wò', 'wō'],
    answer: 'wǒ',
  },
  {
    question: '“你” 的拼音是 [ ]',
    options: ['nǐ', 'nī', 'nì', 'ní'],
    answer: 'nǐ',
  },
  {
    question: '“他” 的拼音是 [ ]',
    options: ['tā', 'tǎ', 'tà', 'tá'],
    answer: 'tā',
  },
  {
    question: '“她” 的拼音是 [ ]',
    options: ['tā', 'tǎ', 'tà', 'tá'],
    answer: 'tā',
  },
  {
    question: '“很” 的拼音是 [ ]',
    options: ['hěn', 'hēn', 'hèn', 'hén'],
    answer: 'hěn',
  },
  {
    question: '“白” 的拼音是 [ ]',
    options: ['bái', 'bǎi', 'bēi', 'bāi'],
    answer: 'bái',
  },
  {
    question: '“大” 的拼音是 [ ]',
    options: ['dà', 'dǎ', 'dā', 'dá'],
    answer: 'dà',
  },
  {
    question: '“不” 的拼音是 [ ]',
    options: ['bù', 'bú', 'bǔ', 'bū'],
    answer: 'bù',
  },
  {
    question: '“星期” 的拼音是 [ ]',
    options: ['xīngqī', 'xīngqí', 'xīngqi', 'xīngqì'],
    answer: 'xīngqī',
  },
  {
    question: '“几” 的拼音是 [ ]',
    options: ['jǐ', 'jī', 'jí', 'jì'],
    answer: 'jǐ',
  },
  {
    question: '“哪儿” 的拼音是 [ ]',
    options: ['nǎr', 'nār', 'nàr', 'nǎer'],
    answer: 'nǎr',
  },
  {
    question: '“那儿” 的拼音是 [ ]',
    options: ['nàr', 'nār', 'nǎr', 'nàer'],
    answer: 'nàr',
  },
  {
    question: '“寄信” 的拼音是 [ ]',
    options: ['jì xìn', 'jì xīn', 'jī xìn', 'jí xìn'],
    answer: 'jì xìn',
  },
  {
    question: '“取钱” 的拼音是 [ ]',
    options: ['qǔ qián', 'qū qián', 'qǔ qiān', 'qǔ qiǎn'],
    answer: 'qǔ qián',
  },
  {
    question: '“您” 的拼音是 [ ]',
    options: ['nín', 'nǐn', 'nìn', 'níng'],
    answer: 'nín',
  },
  {
    question: '“名字” 的拼音是 [ ]',
    options: ['míngzi', 'míngzī', 'míngzì', 'mīngzi'],
    answer: 'míngzi',
  },
]

export type MatchPair = {
  char: string
  meaning: string
}

// 基于《汉语教程》1-15课的词汇配对题库
export const lessonVocabData: MatchPair[] = [
  // 第一课-第三课基础词汇
  { char: '你', meaning: 'you (singular)' },
  { char: '好', meaning: 'good; fine' },
  { char: '你好', meaning: 'hello; how are you?' },
  { char: '一', meaning: 'one' },
  { char: '五', meaning: 'five' },
  { char: '八', meaning: 'eight' },
  { char: '大', meaning: 'big' },
  { char: '不', meaning: 'not' },
  { char: '口', meaning: 'mouth; classifier (in some contexts)' },
  { char: '白', meaning: 'white' },
  { char: '女', meaning: 'female' },
  { char: '马', meaning: 'horse' },
  { char: '妈妈', meaning: 'mum' },
  { char: '爸爸', meaning: 'dad' },
  { char: '哥哥', meaning: 'elder brother' },
  { char: '弟弟', meaning: 'younger brother' },
  { char: '妹妹', meaning: 'younger sister' },
  { char: '老师', meaning: 'teacher' },
  { char: '学生', meaning: 'student' },

  // 第四课-第六课日常词汇
  { char: '今天', meaning: 'today' },
  { char: '昨天', meaning: 'yesterday' },
  { char: '明天', meaning: 'tomorrow' },
  { char: '星期一', meaning: 'Monday' },
  { char: '星期二', meaning: 'Tuesday' },
  { char: '星期三', meaning: 'Wednesday' },
  { char: '星期四', meaning: 'Thursday' },
  { char: '星期五', meaning: 'Friday' },
  { char: '星期六', meaning: 'Saturday' },
  { char: '星期天', meaning: 'Sunday' },
  { char: '学校', meaning: 'school' },
  { char: '图书馆', meaning: 'library' },
  { char: '办公室', meaning: 'office' },
  { char: '银行', meaning: 'bank' },
  { char: '邮局', meaning: 'post office' },
  { char: '天安门', meaning: "Tian'anmen" },
  { char: '回家', meaning: 'to go back home' },
  { char: '去学校', meaning: 'to go to school' },
  { char: '打电话', meaning: 'to make a call' },
  { char: '寄信', meaning: 'to mail a letter' },
  { char: '取钱', meaning: 'to withdraw money' },

  // 第七课-第九课生活词汇
  { char: '中午', meaning: 'noon' },
  { char: '吃饭', meaning: 'to eat a meal' },
  { char: '米饭', meaning: 'cooked rice' },
  { char: '馒头', meaning: 'steamed bun' },
  { char: '包子', meaning: 'steamed stuffed bun' },
  { char: '饺子', meaning: 'dumpling' },
  { char: '面条儿', meaning: 'noodles' },
  { char: '鸡蛋', meaning: 'egg' },
  { char: '鸡蛋汤', meaning: 'egg soup' },
  { char: '啤酒', meaning: 'beer' },
  { char: '茶', meaning: 'tea' },
  { char: '咖啡', meaning: 'coffee' },
  { char: '牛奶', meaning: 'milk' },
  { char: '酸奶', meaning: 'yogurt' },
  { char: '食堂', meaning: 'dining hall' },
  { char: '水果', meaning: 'fruit' },
  { char: '苹果', meaning: 'apple' },
  { char: '橘子', meaning: 'tangerine' },
  { char: '香蕉', meaning: 'banana' },
  { char: '葡萄', meaning: 'grape' },
  { char: '西瓜', meaning: 'watermelon' },

  // 第十课-第十二课交际词汇
  { char: '请问', meaning: 'excuse me; may I ask' },
  { char: '贵姓', meaning: 'your surname (polite)' },
  { char: '名字', meaning: 'name' },
  { char: '哪国人', meaning: 'from which country' },
  { char: '中国人', meaning: 'Chinese person' },
  { char: '美国人', meaning: 'American person' },
  { char: '韩国人', meaning: 'Korean person' },
  { char: '日本人', meaning: 'Japanese person' },
  { char: '英国人', meaning: 'British person' },
  { char: '德国人', meaning: 'German person' },
  { char: '认识', meaning: 'to know; to get acquainted with' },
  { char: '高兴', meaning: 'glad; happy' },
  { char: '认识你很高兴', meaning: 'nice to meet you' },
  { char: '谢谢', meaning: 'thank you; thanks' },
  { char: '不客气', meaning: "you're welcome" },
  { char: '对不起', meaning: "I'm sorry" },
  { char: '没关系', meaning: "it doesn't matter" },
  { char: '电话', meaning: 'telephone' },
  { char: '电话号码', meaning: 'phone number' },
  { char: '手机', meaning: 'mobile phone' },

  // 第十三课-第十五课拓展词汇
  { char: '语言', meaning: 'language' },
  { char: '汉语', meaning: 'Chinese language' },
  { char: '英语', meaning: 'English language' },
  { char: '法语', meaning: 'French language' },
  { char: '日语', meaning: 'Japanese language' },
  { char: '韩国语', meaning: 'Korean language' },
  { char: '语法', meaning: 'grammar' },
  { char: '发音', meaning: 'pronunciation' },
  { char: '汉字', meaning: 'Chinese characters' },
  { char: '读书', meaning: 'to read a book' },
  { char: '写字', meaning: 'to write characters' },
  { char: '说话', meaning: 'to speak; to talk' },
  { char: '听力', meaning: 'listening comprehension' },
  { char: '留学生', meaning: 'international student' },
  { char: '同学', meaning: 'classmate' },
  { char: '同屋', meaning: 'roommate' },
  { char: '教授', meaning: 'professor' },
  { char: '经理', meaning: 'manager' },
  { char: '医生', meaning: 'doctor' },
  { char: '护士', meaning: 'nurse' },
]

export const matchPairs: MatchPair[] = lessonVocabData
