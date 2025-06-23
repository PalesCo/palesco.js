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
const { hi1Select, hi2Select } = require("../SelectMenu/historyMenu");
const { menuText, menuSelect } = require("../util/types/menuText");

/**
 * THIS IS SELECTMENU: S
 */
class SelectMenuPalesCo {
  /**
   * All SelectMenu
   * @returns {import('../types/index').SelectMenuData}
   * @public
   */
  get selectmenu() {
    const vMain = mainSelect.options.map((s) => s.value);
    const vMainHistory = historySelect.options.map((s) => s.value);
    const vMainVideos = videosSelect.options.map((s) => s.value);

    //History
    const vHistory1 = hi1Select.options.map((s) => s.value);
    const vHistory2 = hi2Select.options.map((s) => s.value);

    //Videos
    const vVid1 = vid1Select.options.map((s) => s.value);
    const vVid1_1 = vid1_1Select.options.map((s) => s.value);
    const vVid1_2 = vid1_2Select.options.map((s) => s.value);
    const vVid1_1_1 = vid1_1_1Select.options.map((s) => s.value);
    const vVid1_1_2 = vid1_1_2Select.options.map((s) => s.value);
    const vVid1_2_1 = vid1_2_1Select.options.map((s) => s.value);
    return {
      mains: {
        main: {
          row: menuText["main"],
          values: vMain,
          customId: mainSelect.customId,
        },
        history: {
          row: menuText["history"],
          values: vMainHistory,
          customId: historySelect.customId,
        },
        videos: {
          row: menuText["videos"],
          values: vMainVideos,
          customId: videosSelect.customId,
        },
      },
      history: {
        hi1: {
          row: menuText["hi1"],
          value: vHistory1,
          customId: hi1Select.customId,
        },
        hi2: {
          row: menuText["hi2"],
          value: vHistory2,
          customId: hi2Select.customId,
        },
      },
      videos: {
        vid1: {
          row: menuText["vid1"],
          values: vVid1,
          customId: vid1Select.customId,

          vid1_1: {
            row: menuText["vid1_1"],
            values: vVid1_1,
            customId: vid1_1Select.customId,

            vid1_1_1: {
              row: menuText["vid1_1_1"],
              values: vVid1_1_1,
              customId: vid1_1_1Select.customId,
            },

            vid1_1_2: {
              row: menuText["vid1_1_2"],
              values: vVid1_1_2,
              customId: vid1_1_2Select.customId,
            },
          },

          vid1_2: {
            row: menuText["vid1_2"],
            values: vVid1_2,
            customId: vid1_2Select.customId,
            vid1_2_1: {
              row: menuText["vid1_2_1"],
              values: vVid1_2_1,
              customId: vid1_2_1Select.customId,
            },
          },
        },
      },
    };
  }
  /**
   * @param {string} text
   * @returns {import("../types/index").GetSelectMenuInterface}
   * @public
   */
  getSelectMenu(text) {
    return {
      row: menuText[text],
      customId: menuSelect[text].customId,
      values: menuSelect[text].options.map((s) => s.value),
    };
  }
  /**
   * @private - Not ready
   */
  returnSelectMenu() {}
}
module.exports = SelectMenuPalesCo;
