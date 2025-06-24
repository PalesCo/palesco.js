const { interviewEmbed } = require("../../embeds/embeds");
const menuText = require("../types/menuText");
const paresCustomId = require("./parseCustomId");
/**
 *
 * @param {string} value
 * @param {import("discord.js").User} user
 * @returns {import("../../types/index").ArmInterface}
 */
function goveArm(value, user) {
  const datas = paresCustomId(value);
  if (datas.data.isValid === false) {
    return {
      embeds: [
        new MessageEmbed().setDescription(datas.data.error).setColor("RED"),
      ],
      status: "fail-customId",
    };
  }
  if (value === "gov_return") {
    const d = interviewEmbed(
      "Governorate",
      { gov: `vid1_${datas.interview.governorate}` },
      user
    );
    return {
      embeds: [d.embed],
      components: menuText[`vid1_${datas.interview.governorate}`],
      files: [],
      status: "good",
    };
  } else {
    const data = interviewEmbed(
      "Town",
      {
        gov: `vid1_${datas.interview.governorate}`,
        townV: `vid1_${datas.interview.governorate}_${datas.interview.town}`,
      },
      user
    );
    if (value) {
      if (data.status === "fail") {
        return {
          embeds: [data.embed],
          ephemeral: true,
          status: "fail-data",
        };
      }
      return {
        embeds: [data.embed],
        components: menuText[value],
        files: [],
        status: "good",
      };
    }
  }
}
module.exports = goveArm;
