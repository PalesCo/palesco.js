const { MessageEmbed } = require("discord.js");
const { main,colors } = require("../JSON/embeds.json");
///mmm
const mainEmbed = new MessageEmbed()
  .setTitle("PalesCo - باليسكو")
  .setDescription(`**اتحدث عن فلسطين**`)
  .setColor(colors)
  .setFooter(main.footer);
const historyEmbed = new MessageEmbed()
  .setTitle("تاريخ فلسطين")
  .setDescription(
    "**معلومات عامه وبسيطه عن تاريخ الارض لكي لا تمل من قراءتها \n-# لو عايز تتعمق المصادر موجوده في كل فقره**"
  )
  .setColor(colors)
  .setFooter(main.footer);
const videosEmbed = new MessageEmbed()
  .setTitle("مقاطع فيديو")
  .setDescription(
    "مقاطع فيديو(مقابلات مع فلسطينين , وثائقي عن القضيه , مقاطع يوتيوب , الخ) عن فلسطين متوفره علي هئية روابط وسهلة الوصول."
  )
  .setColor(colors)
  .setFooter(main.footer);
///sss
const hi1Embed = new MessageEmbed()
  .setTitle("ماقبل الميلاد")
  .setDescription("خمس فقرات و سادسها هو المصادر.")
  .setColor(colors)
  .setFooter(main.footer);
const vid1Embed = new MessageEmbed()
  .setTitle("مقابلات")
  .setDescription(
    "تم تقسيم المقابلات علي كل محافظة وادراج الاسماء-مقابله الروابط المتوفره. \n-# مصادر المقابلات في خانة المصادر"
  )
  .setColor(colors)
  .setFooter(main.footer);

module.exports = { mainEmbed, historyEmbed, hi1Embed, videosEmbed, vid1Embed };
