const { MessageActionRow, MessageSelectMenu } = require("discord.js");
///mmm
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
        label: "ناشطين عن القضيه",
        value: "activists",
        description: "عرض جميع الناشطين عن القضيه",
        //emoji: "📜",
      },
      {
        label: "مشاهير",
        value: "famous",
        description: "مشاهير تحدثوا عن القضيه",
        //emoji: "📜",
      },
      {
        label: "مقاطع فيديو",
        value: "videos",
        description: "وثائقي , يوتيوب فيديو, افلام , مقابلات.",
        //emoji: "📜",
      },
      {
        label: "صور فلسطين",
        value: "videos",
        description: "السجل المجمع من صور فسطين في جميع عصورها",
        //emoji: "📜",
      },
      {
        label: "تبرع",
        value: "donation",
        description: "جميع طرق التبرع.",
        //emoji: "📜",
      },
      {
        label: "سجل الارقام",
        value: "lang_numbers",
        description: "فالنعبر باللغه الارقام",
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
        label: "مقابلات",
        value: "vid1",
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