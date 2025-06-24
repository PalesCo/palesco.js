const { MessageEmbed, MessageAttachment } = require("discord.js");
const { main,colors } = require("../JSON/embeds.json");
const path = require("path");
const obj = require("../Data/Text/Videos/interviews.json");
/**
 * @typedef {import("discord.js").User} User
 * @param {import('../types/index').EmbedOptions} data 
 * @param {User} user
 */

function dataEmbed(data, user) {

  const embed = new MessageEmbed()
  .setAuthor(user.tag, user.avatarURL())
  .setColor(colors)
  .setFooter({ text: main.footer });
  if (!data.title | !data.description) {
    embed.setTitle("NO TITLE").setDescription("No description")
  } else {
    embed.setTitle(data.title).setDescription(data.description)
  }
    if (data.fields) embed.setFields(data.fields);
    return embed;
  
}

/**
 * @typedef {{who:string,gov:string,townV:string} | undefined} DataAll
 * @typedef {'Interviews' | 'Town' | 'Governorate'} EmbedType
 * @param {EmbedType} embedType
 * @param {DataAll} data
 * @param {User} user
 */
function interviewEmbed(embedType, data, user) {
  const embed = new MessageEmbed()
    .setAuthor({name:user.tag, iconURL:user.avatarURL({ dynamic: true })})
    .setFooter({ text: main.footer })
    .setColor("RED");
  if (!data || !data.gov) {
    embed.setDescription("لم يتم توفير معلومات المحافظة");
    return { embed, status: "fail" };
  }
  const gove = obj.vid1[data.gov];
  if (!gove) {
    embed.setDescription("المحافظة غير موجودة في البيانات");
    return { embed, status: "fail" };
  }

  if (embedType === "Governorate") {
    embed.setTitle(gove.name).setDescription(gove.description);
    return { embed, status: "good" };
  }

  if (!data.townV) {
    embed.setDescription("لم يتم توفير معلومات البلدة");

    return { embed, status: "fail" };
  }
  const town = gove[data.townV];
  if (!town) {
    embed.setDescription("البلدة غير موجودة في البيانات");
    return { embed, status: "fail" };
  }

  if (embedType === "Town") {
    embed.setTitle(town.name).setDescription(town.description);
    return { embed, status: "good" };
  }

  if (!data.who) {
    embed.setDescription("لم يتم توفير معلومات المقابلة");
    return { embed, status: "fail" };
  }
  const inter = town[data.who];
  if (!inter) {
    embed.setDescription("المقابلة غير موجودة في البيانات");
    return { embed, status: "fail" };
  }

  if (embedType === "Interviews") {
    embed
      .setTitle(inter.who)
      .setURL(inter.source)
      .setDescription(`مقابله مع **${inter.who}** من **${town.name}**`)
      .setFields([
        {
          name: "تاريخ المقابله",
          value: inter.interviewDate,
        },
        {
          name: "قام بالمقابلة",
          value: inter.doTheInterview,
        },
        {
          name: "الميلاد",
          value: `**${inter.who} من مولايد ${inter.date}**`,
        },
        {
          name: "مدة المقابله",
          value: inter.interviewTime,
        },
        {
          name: "المقابله",
          value: `**روابط المقابلات المتوفره: ${inter.interviewLinks}**`,
        },
      ]);
    if (inter.hasImage) {
      const imagePath = path.join(__dirname, `../${inter.image}`);
      const image = new MessageAttachment(imagePath, `${inter.who}.jpg`);
      embed.setImage(`attachment://${inter.who}.jpg`);
      return { embed, image, imagePath, status: "good" };
    }
    return { embed, status: "good" };
  }
}

module.exports = { dataEmbed, interviewEmbed };
