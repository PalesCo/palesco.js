const {
  PalesCo,
  DataPalesCo,
  SelectMenuPalesCo,
  EmbedPalesCo,
} = require("./index");
const palesco = new PalesCo();
const palescoSM = new SelectMenuPalesCo();
const palescoEmbed = new EmbedPalesCo();
const palescoData = new DataPalesCo();

const arm = palesco.arm;
const data = palescoData.data;
const selectmenu = palescoSM.selectmenu;
const embed = palescoEmbed.embeds;
//Arm
console.log(
  arm.customId("vid1_1_1"),
 'isID: ',arm.customId("vid1_1_1").isID('vid1_1_2'),
  arm.governorate("vid1_1_1_1", {
    tag: "null",
    avatarURL() {
      return "null";
    },
  }),
  arm.timestamps("1958/5/20"),
  arm.interview("vid1_1_2_10", {
    tag: "null",
    avatarURL() {
      return 'null';
    },
  })
);
console.log(
    data.json.picture,
    data.json.text
);
console.log(
new SelectMenuPalesCo().getSelectMenu('vid1_1'),
selectmenu.mains,
selectmenu.history,
selectmenu.videos);
console.log(
    embed.mains,
    embed.history,
    embed.videos
);