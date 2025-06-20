const { MessageEmbed } = require("discord.js");
const { interviewEmbed } = require("../../embeds/embeds");
const menuText = require("../types/menuText");
const paresCustomId = require("./parseCustomId");
/**
 * @param {string} value 
 * @param {import("discord.js").User} user 
 * @returns {import("../../types/index").ArmInterface}
 */
function interArm(value,user) {
  const datas = paresCustomId(value);
  if (datas.isValid) {
    return {embeds: [new MessageEmbed().setDescription(datas.error).setColor('RED')],status:'fail-customId'}
  }
  if (value === "town_return") {
    const dataTown = interviewEmbed(
      "Town",
      { townV: `vid1_${datas.data.governorate}_${datas.data.town}`, gov: `vid1_${datas.data.governorate}` },
      user
    );
    if (dataTown.status === "fail") {
      return {
        embeds: [dataTown.embed],
        ephemeral: true,
        status:"fail-dataTown"
      };
    }
    return {
      embeds: [dataTown.embed],
      components: menuText[`vid1_${data.data.governorate}`],
      files: [],
      status:'good'
    };
  }
  const data = interviewEmbed(
    "Interviews",
    {
      gov: `vid1_${datas.data.governorate}`,
      townV: `vid1_${datas.data.governorate}_${datas.data.town}`,
      who: `vid1_${datas.data.governorate}_${datas.data.town}_${datas.data.who}`,
    },
    user
  );

  if (value) {
    if (data.status === "fail") {
      return {
        embeds: [data.embed],
        ephemeral: true,
        status:'fail-data'
      };
    }
    if (data.image) {
      return {
         embeds: [data.embed],
         components: menuText[`vid1_${datas.data.governorate}_${datas.data.town}`],
         files: [{
          attachment:data.imagePath,
          name:data.image.name
        }],
        status:'good'
       };
    } else {
      return {
      embeds: [data.embed],
      components: menuText[`vid1_${datas.data.governorate}_${datas.data.town}`],
      files: [],
      status:'good'
    };
    }
  }
}
module.exports = interArm;
