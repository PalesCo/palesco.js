const path = require("path");
const fs = require("fs");
const history = require("../Data/Text/history/history.json");
const { vid1 } = require("../Data/Text/Videos/interviews.json");
class DataPaleCo {
  get data() {
    const interviewPath = path.join(__dirname, "../Data/Picture/interviews");
    const pictureInterview = fs
      .readdirSync(interviewPath)
      .filter((file) => file.endsWith(".jpg"))
      .map((file) => file);
    return {
      json: {
        text: {
          history,
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
