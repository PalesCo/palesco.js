const path = require("path");
const fs = require("fs");
const { hi1 } = require("../Data/Text/history/history.json");
const { hi2 } = require("../Data/Text/history/towns.json");
const { vid1 } = require("../Data/Text/Videos/interviews.json");
const ES = require("./ES");
const { colors, main: mainJSON } = require("../JSON/embeds.json");
const { date } = require("../JSON/info.json");

class DataPaleCo extends ES {
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

  get data() {
    const interviewPath = path.join(__dirname, "../Data/Picture/interviews");
    const pictureInterview = fs
      .readdirSync(interviewPath)
      .filter((file) => file.endsWith(".jpg"))
      .map((file) => file);
    return {
      json: {
        text: {
          history: {
            hi1,
            hi2,
          },
          video: {
            interview: vid1,
          },
        },
        picture: {
          interview: pictureInterview,
        },
      },
    };
  }
}
module.exports = DataPaleCo;
