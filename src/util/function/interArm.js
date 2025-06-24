const { MessageEmbed } = require("discord.js");
const { interviewEmbed } = require("../../embeds/embeds");
const {menuText} = require("../types/menuText");
const paresCustomId = require("./parseCustomId");
/**
 * @param {string} value
 * @param {import("discord.js").User} user
 * @returns {import("../../types/index").ArmInterface}
 */
function interArm(value, user) {
  const datas = paresCustomId(value);
  if (datas.data.isValid === false) {
    return {
      embeds: [
        new MessageEmbed().setDescription(datas.data.error).setColor("RED"),
      ],
      status: "fail-customId",
    };
  }
  if (value === "town_return") {
    const dataTown = interviewEmbed(
      "Town",
      {
        townV: `vid1_${datas.interview.governorate}_${datas.interview.town}`,
        gov: `vid1_${datas.interview.governorate}`,
      },
      user
    );
    if (dataTown.status === "fail") {
      return {
        embeds: [dataTown.embed],
        ephemeral: true,
        status: "fail-dataTown",
      };
    }
    return {
      embeds: [dataTown.embed],
      components: menuText[`vid1_${datas.interview.governorate}`],
      files: [],
      status: "good",
    };
  } else {
    const data = interviewEmbed(
      "Interviews",
      {
        gov: `vid1_${datas.interview.governorate}`,
        townV: `vid1_${datas.interview.governorate}_${datas.interview.town}`,
        who: `vid1_${datas.interview.governorate}_${datas.interview.town}_${datas.interview.who}`,
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
      if (data.image) {
        return {
          embeds: [data.embed],
          components:
            menuText[
              `vid1_${datas.interview.governorate}_${datas.interview.town}`
            ],
          files: [
            {
              attachment: data.imagePath,
              name: data.image.name,
            },
          ],
          status: "good",
        };
      } else {
        return {
          embeds: [data.embed],
          components:
            menuText[
              `vid1_${datas.interview.governorate}_${datas.interview.town}`
            ],
          files: [],
          status: "good",
        };
      }
    }
  }
}
module.exports = interArm;
