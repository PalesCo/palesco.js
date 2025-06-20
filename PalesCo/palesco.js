const { vid1Select } = require("../SelectMenu/videosMenu");
const {
  vid1_1Select,
  vid1_1_1Select,
  vid1_1_2Select,
} = require("../SelectMenu/interviews/vid1_1");
const {
  vid1_2Select,
  vid1_2_1Select,
} = require("../SelectMenu/interviews/vid1_2");
const {
  mainSelect,
  videosSelect,
  historySelect,
} = require("../SelectMenu/mainsMenu");
const { hi1, hi1Select } = require("../SelectMenu/historyMenu");
const { colors, main: mainJSON } = require("../JSON/embeds.json");
const { date } = require("../JSON/info.json");
const {
  mainEmbed,
  historyEmbed,
  videosEmbed,
  vid1Embed,
  hi1Embed,
} = require("../embeds/mainEmbeds");
const interArm = require("../util/function/interArm");
const goveArm = require("../util/function/goveArm");
const { menuText, menuSelect } = require("../util/types/menuText");
const { interviewEmbed, dataEmbed } = require("../embeds/embeds");
const DataPaleCo = require("./Data");

/**
 *
 */
class PalesCo extends DataPaleCo {

  /**
   * All SelectMenu
   * @returns {import('../types/index').SelectMenuData}
   */
  get selectmenu() {
    const vMain = mainSelect.options.map((s) => s.value);
    const vMainHistory = historySelect.options.map((s) => s.value);
    const vMainVideos = videosSelect.options.map((s) => s.value);

    //History
    const vHistory1 = hi1Select.options.map((s) => s.value);

    //Videos
    const vVid1 = vid1Select.options.map((s) => s.value);
    const vVid1_1 = vid1_1Select.options.map((s) => s.value);
    const vVid1_2 = vid1_2Select.options.map((s) => s.value);
    const vVid1_1_1 = vid1_1_1Select.options.map((s) => s.value);
    const vVid1_2_1 = vid1_2_1Select.options.map((s) => s.value);
    const vVid1_1_2 = vid1_1_2Select.options.map((s) => s.value);
    return {
      mains: {
        main: {
          row: menuText['main'],
          values: vMain,
          customId: mainSelect.customId,
        },
        history: {
          row: menuText['history'],
          values: vMainHistory,
          customId: historySelect.customId,
        },
        videos: {
          row: menuText['videos'],
          values: vMainVideos,
          customId: videosSelect.customId,
        },
      },
      history: {
        hi1: {
          row: menuText['hi1'],
          value: vHistory1,
          customId: hi1Select.customId,
        },
      },
      videos: {
        vid1: {
          row: menuText['vid1'],
          values: vVid1,
          customId: vid1Select.customId,

          vid1_1: {
            row: menuText['vid1_1'],
            values: vVid1_1,
            customId: vid1_1Select.customId,

            vid1_1_1: {
              row: menuText['vid1_1_1'],
              values: vVid1_1_1,
              customId: vid1_1_1Select.customId,
            },

            vid1_1_2: {
              row: menuText['vid1_1_2'],
              values: vVid1_1_2,
              customId: vid1_1_2Select.customId,
            },
          },

          vid1_2: {
            row: menuText['vid1_2'],
            values: vVid1_2,
            customId: vid1_2Select.customId,
            vid1_2_1: {
              row: menuText['vid1_2_1'],
              values: vVid1_2_1,
              customId: vid1_2_1Select.customId,
            },
          },
        },
      },
      /**
       * @param {string} text 
       * @returns {import("../types/index").GetSelectMenuInterface}
       */
      getSelectMenu(text) {
return {
    row: menuText[text],
    customId:menuSelect[text].customId,
    values:menuSelect[text].options.map((s) => s.value)
}
      }
    };
  }
  /**
   * All JSON Data
   * @returns {import("../types/index").JSONData}
   */
  get json() {
    return {
      colors,
      embed: {
        main: mainJSON,
      },
      info: {
        date,
      },
    };
  }
  /**
   * All Embed Data
   * @returns {import("../types/index").EmbedData}
   */
  get embeds() {
    return {
      mains: {
        main: mainEmbed,
        history: historyEmbed,
        videos: videosEmbed,
      },
      videos: {
        vid1: vid1Embed,
      },
      history: {
        hi1: hi1Embed,
      },
      interviewEmbed(embedType, data, user) {
return interviewEmbed(embedType,data,user);
      },
      embedCreateByObjAndValue(object,value,user) {
        return dataEmbed(object,value,user)
      }
    };
  }
  /**
  * Arm is functions get data for interview, and more.
  */
  get arm() {
    return {
        /**
 * @param {string} value 
 * @param {import("discord.js").User} user 
 */
        interview(value,user) {
           return interArm(value,user)
        },
        /**
 * @param {string} value 
 * @param {import("discord.js").User} user 
 */
        governorate(value,user) {
           return goveArm(value,user)
        }
    }
  }
}
module.exports = PalesCo;
