const interArm = require("../util/function/interArm");
const goveArm = require("../util/function/goveArm");
const createDiscordTimestamps = require("../util/function/createDiscordTimestamps");
const DataPaleCo = require("./Data");
const paresCustomId = require("../util/function/parseCustomId");
const { interviewEmbed,dataEmbed } = require("../embeds/embeds");
/**
 * This Class includes functions of PalesCo command.
 */
class PalesCo extends DataPaleCo {
  /** @returns {import("../types/index.ts").EmbedArm} */
  /**
   * Arm is functions...
   */
  get arm() {
    return {
      /**
       * @param {string} value
       * @param {import("discord.js").User} user
       */
      interview(value, user) {
        return interArm(value, user);
      },
      /**
       * @param {string} value
       * @param {import("discord.js").User} user
       */
      governorate(value, user) {
        return goveArm(value, user);
      },
      /**
       * @typedef {'1947/1/1'} PalesCoFormat
       * @typedef {'12:00'} PalesCoFormatTime
       * @param {PalesCoFormat} format - YYYY/MM/DD
       * @param {PalesCoFormatTime} [time] - HH:MM
       * @returns
       */
      timestamps(format, time) {
        return createDiscordTimestamps(format, time);
      },
      /**
       * @param {string} customId 
       * @returns {import("../types/index").CustomId}
       */
      customId(customId) {
return paresCustomId(customId)
      }
    };
  }
}
module.exports = PalesCo;
