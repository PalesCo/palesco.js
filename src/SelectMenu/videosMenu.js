const { MessageActionRow, MessageSelectMenu } = require("discord.js");

const vid1Select =   new MessageSelectMenu()
    .setCustomId("vid1")
    .setPlaceholder("اختر المحافظه")
    .setOptions([
      {
        label: "بئر سبع",
        value: "vid1_1",
        description: "لا يوجد وصف",
        //emoji: "📜",
      },
      {
        label: "بيسان",
        value: "vid1_2",
        description: "لا يوجد وصف",
        //emoji: "📜",
      },
      {
        label: "الرجوع لقائمة الفيديوهات",
        value: "videos_return",
        description: "اعاده الاختيار من قائمة الفيديو",
        emoji: "🔙",
      },
    ]);
const vid1 = new MessageActionRow().setComponents(vid1Select);

module.exports = {
  vid1,vid1Select
};
