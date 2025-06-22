const { MessageActionRow, MessageSelectMenu } = require("discord.js");
const hi1Select = new MessageSelectMenu()
    .setCustomId("hi1")
    .setPlaceholder("ماقبل الميلاد.")
    .setOptions([
      {
        label: "العصور الحجريه و النحاسية",
        value: "hi1_1",
        description: "قبل 3000 ق.م",
        //emoji: "📜",
      },
      {
        label: "الهجرات الكبرى وتأسيس الحضارة الكنعانية",
        value: "hi1_2",
        description: "3000–1200 ق.م",
        //emoji: "📜",
      },
      {
        label: "الغزوات والصراعات",
        value: "hi1_3",
        description: "1250–586 ق.م",
        //emoji: "📜",
      },
      {
        label: "الحقبة الفارسية والهلنستية ",
        value: "hi1_4",
        description: "539–63 ق.م",
        //emoji: "📜",
      },
      {
        label: "أصل تسمية 'فلسطين'",
        value: "hi1_5",
        description: "اصل التسمية التاريخيه",
        //emoji: "📜",
      },
      {
        label: "الخلاصة",
        value: "hi1_f",
        description: "الهوية العربية المتجذرة",
        //emoji: "📜",
      },
      {
        label: "الرجوع لقائمة التاريخ",
        value: "history_return",
        description: "اعاده الاختيار من قائمة التاريخ",
        emoji: "🔙",
      },
      {
        label: "المصادر والمراجع",
        value: "hi1_source",
        description: "المصادر المستخدمه في الفقرات",
        //emoji: "🔙",
      },
    ]);
const hi1 = new MessageActionRow().setComponents(hi1Select);
const hi2Select = new MessageSelectMenu()
    .setCustomId("hi2")
    .setPlaceholder("اختر الحدث")
    .setOptions([
      {
        label: "االطنطورة",
        value: "hi2_1",
        description: "تاريخ الحدث",
        //emoji: "📜",
      },
    ]);
const hi2 = new MessageActionRow().setComponents(hi2Select);

module.exports = { hi1,hi1Select,hi2,hi2Select };
