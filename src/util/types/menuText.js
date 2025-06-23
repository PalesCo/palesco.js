const { hi1, hi1Select, hi2, hi2Select } = require("../../SelectMenu/historyMenu");
const {
  vid1_1,
  vid1_1_1,
  vid1_1_2,
  vid1_1Select,
  vid1_1_1Select,
  vid1_1_2Select,
} = require("../../SelectMenu/interviews/vid1_1");
const { vid1_2, vid1_2_1, vid1_2Select, vid1_2_1Select } = require("../../SelectMenu/interviews/vid1_2");
const { main, history, videos, mainSelect, historySelect, videosSelect } = require("../../SelectMenu/mainsMenu");
const { vid1, vid1Select } = require("../../SelectMenu/videosMenu");

const menuText = {
    main:[main],
    history:[history],
    videos:[videos],
    hi1:[hi1],
    hi2:[hi2],
    vid1:[vid1],
    vid1_1:[vid1_1],
    vid1_1_1:[vid1_1_1],
    vid1_1_2:[vid1_1_2],
    vid1_2:[vid1_2],
    vid1_2_1:[vid1_2_1]
};
const menuSelect = {
    main:mainSelect,
    history:historySelect,
    videos:videosSelect,
    hi1:hi1Select,
    hi2:hi2Select,
    vid1:vid1Select,
    vid1_1:vid1_1Select,
    vid1_1_1:vid1_1_1Select,
    vid1_1_2:vid1_1_2Select,
    vid1_2:vid1_2Select,
    vid1_2_1:vid1_2_1Select
};

module.exports = {menuText,menuSelect};
