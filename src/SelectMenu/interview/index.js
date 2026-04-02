const { MessageActionRow, MessageSelectMenu } = require("discord.js");
const { main, governorates } = require("../../Data/Text/Videos/interviews");
let mainOptions = [
  {
    label: "",
    value: "",
    description: "",
  },
];
mainOptions = mainOptions.shift();
main.governorates.forEach((id) => {
  const data = governorates[id];
  mainOptions.push({
    label: `محافظة ${data.name}`,
    value: id,
    description: `التاريخ الشفوي لمحافظة ${data.name}`,
  });
});
const mainMenu = new MessageSelectMenu()
  .setCustomId(main.id)
  .setPlaceholder(main.description)
  .setOptions(mainOptions);
const mainRow = new MessageActionRow().setComponents(mainMenu);






