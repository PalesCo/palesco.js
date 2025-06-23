const { MessageActionRow, MessageSelectMenu } = require("discord.js");

///بيسان///
const vid1_2Select =   new MessageSelectMenu()
.setCustomId("vid1_2")
.setPlaceholder("اختر البلدة من بيسان")
.setOptions([
  {
    label: "عرب البواطي",
    value: "vid1_2_1",
    description: "لا يوجد وصف",
    //emoji: "📜",
  },
  {
    label: "عرب الصفا",
    value: "vid1_2_2",
    description: "لا يوجد وصف",
    //emoji: "📜",
  },
  {
    label: "البيرة",
    value: "vid1_2_3",
    description: "لا يوجد وصف",
    //emoji: "📜",
  },
  {
    label: "دنة",
    value: "vid1_2_4",
    description: "لا يوجد وصف",
    //emoji: "📜",
  },
  {
    label: "فرونه",
    value: "vid1_2_5",
    description: "لا يوجد وصف",
    //emoji: "📜",
  },
  {
    label: "جبول",
    value: "vid1_2_6",
    description: "لا يوجد وصف",
    //emoji: "📜",
  },
  {
    label: "جسر المجامع",
    value: "vid1_2_7",
    description: "لا يوجد وصف",
    //emoji: "📜",
  },
  {
    label: "كفر مصر",
    value: "vid1_2_8",
    description: "لا يوجد وصف",
    //emoji: "📜",
  },
  {
    label: "كوكب الهوا",
    value: "vid1_2_9",
    description: "لا يوجد وصف",
    //emoji: "📜",
  },
  {
    label: "المزار (البشاتوة)",
    value: "vid1_2_10",
    description: "لا يوجد وصف",
    //emoji: "📜",
  },
  {
    label: "الخنيزر",
    value: "vid1_2_11",
    description: "لا يوجد وصف",
    //emoji: "📜",
  },
  {
    label: "المرصص",
    value: "vid1_2_12",
    description: "لا يوجد وصف",
    //emoji: "📜",
  },
  {
    label: "قوميه",
    value: "vid1_2_13",
    description: "لا يوجد وصف",
    //emoji: "📜",
  },
  {
    label: "الساخنه",
    value: "vid1_2_14",
    description: "لا يوجد وصف",
    //emoji: "📜",
  },
  {
    label: "سيرين",
    value: "vid1_2_15",
    description: "لا يوجد وصف",
    //emoji: "📜",
  },
  {
    label: "الطيبه الزعبية (المرج)",
    value: "vid1_2_16",
    description: "لا يوجد وصف",
    //emoji: "📜",
  },
  {
    label: "ام عجره",
    value: "vid1_2_17",
    description: "لا يوجد وصف",
    //emoji: "📜",
  },
  {
    label: "خربة ام صابونة (عرب صقر)",
    value: "vid1_2_18",
    description: "لا يوجد وصف",
    //emoji: "📜",
  },
  {
    label: "يبلى",
    value: "vid1_2_19",
    description: "لا يوجد وصف",
    //emoji: "📜",
  },
  {
    label: "خربة الزاويه (البشاتوة)",
    value: "vid1_2_20",
    description: "لا يوجد وصف",
    //emoji: "📜",
  },
  {
    label: "الرجوع لقائمة المحافظات",
    value: "gov_return",
    description: "اعاده الاختيار من قائمة المحافظات",
    emoji: "🔙",
  },
])
const vid1_2 = new MessageActionRow().setComponents(vid1_2Select);
//عرب البواطي//
const vid1_2_1Select = new MessageSelectMenu()
    .setCustomId("vid1_2_1")
    .setPlaceholder("اختر احد المقابلات من بلدة عرب البواطي")
    .setOptions([
      {
        label: "محمد البواطي",
        value: "vid1_2_1_1",
        description: "لا يوجد وصف",
        //emoji: "🧾",
      },
      {
        label: "إبراهيم محمد البواطي",
        value: "vid1_2_1_2",
        description: "لا يوجد وصف",
        //emoji: "🧾",
      },
      {
        label: "الرجوع لقائمة البلدات",
        value: "town_return",
        description: "اعاده الاختيار من قائمة البلدات",
        emoji: "🔙",
      },
    ]);
const vid1_2_1 = new MessageActionRow().setComponents(vid1_2_1Select);

module.exports = { 
     vid1_2, ///محافظة بيسان
     vid1_2Select,
     vid1_2_1, //عرب البواطي
     vid1_2_1Select,
    };
