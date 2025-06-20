const { MessageActionRow, MessageSelectMenu } = require("discord.js");

///بئر سبع///
const vid1_1Select =   new MessageSelectMenu()
    .setCustomId("vid1_1")
    .setPlaceholder("اختر البلدة من بئر سبع")
    .setOptions([
      {
        label: "الباطل",
        value: "vid1_1_1",
        description: "لا يوجد وصف",
        //emoji: "📜",
      },
      {
        label: "بئر سبع",
        value: "vid1_1_2",
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

const vid1_1 = new MessageActionRow().setComponents(vid1_1Select);

//الباطل//
const vid1_1_1Select =   new MessageSelectMenu()
    .setCustomId("vid1_1_1")
    .setPlaceholder("اختر الشخص لعرض معلومات عن المقابله")
    .setOptions([
      {
        label: "سليمان زبيدات",
        value: "vid1_1_1_1",
        description: "لا يوجد وصف",
        //emoji: "📜",
      },
      {
        label: "الرجوع لقائمة البلدات",
        value: "town_return",
        description: "اعاده الاختيار من قائمة البلدات",
        emoji: "🔙",
      },
    ]);
const vid1_1_1 = new MessageActionRow().setComponents(vid1_1_1Select);

//بئر سبع//
const vid1_1_2Select = new MessageSelectMenu()
.setCustomId("vid1_1_2")
.setPlaceholder("اختر الشخص لعرض معلومات عن المقابله")
.setOptions([
  {
    label: "مسلم وجيه بسيسو",
    value: "vid1_1_2_1",
    description: "لا يوجد وصف",
    //emoji: "📜",
  },
  {
    label: "عطا الوحيدي",
    value: "vid1_1_2_2",
    description: "لا يوجد وصف",
    //emoji: "📜",
  },
  {
    label: "حسان ومحمد أبو جرار",
    value: "vid1_1_2_3",
    description: "لا يوجد وصف",
    //emoji: "📜",
  },
  {
    label: "عبد المجيد أبو سعيد",
    value: "vid1_1_2_4",
    description: "لا يوجد وصف",
    //emoji: "📜",
  },
  {
    label: "فرح أبو محفوظ",
    value: "vid1_1_2_5",
    description: "لا يوجد وصف",
    //emoji: "📜",
  },
  {
    label: "محمد وسليمان الجمرة",
    value: "vid1_1_2_6",
    description: "لا يوجد وصف",
    //emoji: "📜",
  },
  {
    label: "إبراهيم الدقس",
    value: "vid1_1_2_7",
    description: "لا يوجد وصف",
    //emoji: "📜",
  },
  {
    label: "محمد أبو فرحان",
    value: "vid1_1_2_8",
    description: "لا يوجد وصف",
    //emoji: "📜",
  },
  {
    label: "محمد أبو رواع",
    value: "vid1_1_2_9",
    description: "لا يوجد وصف",
    //emoji: "📜",
  },
  {
    label: "عبدالله السلايمه",
    value: "vid1_1_2_10",
    description: "لا يوجد وصف",
    //emoji: "📜",
  },
  {
    label: "واصل أبو جابر/جبارات",
    value: "vid1_1_2_11",
    description: "لا يوجد وصف",
    //emoji: "📜",
  },
  {
    label: "إبراهيم أبو الخير",
    value: "vid1_1_2_12",
    description: "لا يوجد وصف",
    //emoji: "📜",
  },
  {
    label: "سليمان محمد مسامح ابو مسامح",
    value: "vid1_1_2_13",
    description: "لا يوجد وصف",
    //emoji: "📜",
  },
  {
    label: "الرجوع لقائمة البلدات",
    value: "town_return",
    description: "اعاده الاختيار من قائمة البلدات",
    emoji: "🔙",
  },
])
const vid1_1_2 = new MessageActionRow().setComponents(vid1_1_2Select);

module.exports = { 
    vid1_1, ///محافظة بئر سبع
    vid1_1Select,
    vid1_1_1, // بلدة الباطل
    vid1_1_1Select,
    vid1_1_2, // بلدة بئر سبع
    vid1_1_2Select,
  };
