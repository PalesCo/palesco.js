const { interviewEmbed, dataEmbed } = require("../embeds/embeds");
const mains = require("../Data/embeds/embeds.json");
const history = require("../Data/embeds/history.json");
const videos = require("../Data/embeds/videos.json");

class EmbedPalesCo {
  /**
   * That is Title, Description of embed.
   * NOTE: For main embed only
   */
  get embeds() {
    return {
      mains,
      history,
      videos,
    };
  }
  /**
@private - not ready
*/
  returnEmbed() {}
  /**
   *
   * @param {import("../types/index").EmbedType} embedType
   * @param {import("../types/index").DataAll} data
   * @param {import("discord.js").User} user
   * @returns {import("../types/index").InterviewEmbed}
   * @public
   */
  interviewEmbed(embedType, data, user) {
    return interviewEmbed(embedType, data, user);
  }
  /**
   * @param {import("../types/index").EmbedOptions} data
   * @param {import("discord.js").User} user
   * @returns {import("discord.js").MessageEmbed}
   * @public
   */
  createEmbedByData(data, user) {
    return dataEmbed(data, user);
  }
}
module.exports = EmbedPalesCo;
