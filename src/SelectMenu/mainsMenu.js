const { MessageActionRow, MessageSelectMenu } = require("discord.js");
const mainSelect = new MessageSelectMenu()
    .setCustomId("main")
    .setPlaceholder("اختر شئ عن فلسطين")
    .setOptions([
      {
        label: "تاريخ فلسطين",
        value: "history",
        description: "معلومات عن تاريخ فلسطين",
        //emoji: "📜",
      },
      {
        label: "مقاطع فيديو",
        value: "videos",
        description: "وثائقي , يوتيوب فيديو, افلام , مقابلات.",
        //emoji: "📜",
      },
    ]);
const main = new MessageActionRow().setComponents(mainSelect);
const historySelect =   new MessageSelectMenu()
    .setCustomId("history")
    .setPlaceholder("اختر شئ لقراءة")
    .setOptions([
      {
        label: "ماقبل الميلاد",
        value: "hi1",
        description: "معلومات عن ماقبل ميلاد في فلسطين",
        //emoji: "📜",
      },
      {
        label: "مجازر القري",
        value: "hi2",
        description: "جميع المجازر الذي ارتكبها الكيان الصهيوني في فلسطين",
        //emoji: "📜",
      },
      {
        label: "الرجوع للقائمة الرئيسية",
        value: "main_return",
        description: "اعاده الاختيار من القائمة الرئيسية",
        emoji: "🔙",
      },
    ]);
const history = new MessageActionRow().setComponents(
historySelect
);
const videosSelect =   new MessageSelectMenu()
    .setCustomId("videos")
    .setPlaceholder("اختر شئ لرأيته")
    .setOptions([
      {
        label: "التاريخ الشفوي الفلسطيني",
        value: main.id,
        description: "مقابلات مجمعه علي مر السنين للفلسطينين",
        //emoji: "📜",
      },
      {
        label: "الرجوع للقائمة الرئيسية",
        value: "main_return",
        description: "اعاده الاختيار من القائمة الرئيسية",
        emoji: "🔙",
      },
    ])
const videos = new MessageActionRow().setComponents(videosSelect);


module.exports = {
  videos,videosSelect,
  history,historySelect,
  main,mainSelect
}