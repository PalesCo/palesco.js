//#region SelectMenu Data
import {
  mainSelect,
  historySelect,
  videosSelect,
} from "../SelectMenu/mainsMenu";
import { hi1Select } from "../SelectMenu/historyMenu";
import { vid1_1Select,vid1_1_1Select,vid1_1_2Select } from "../SelectMenu/interviews/vid1_1";
import { EmbedFieldData, MessageActionRow, MessageAttachment, User } from "discord.js";
import { vid1Select } from "../SelectMenu/videosMenu";
import { vid1_2_1Select, vid1_2Select } from "../SelectMenu/interviews/vid1_2";
//Main
const vMain = mainSelect.options.map((s) => s.value);
const vMainHistory = historySelect.options.map((s) => s.value);
const vMainVideos = videosSelect.options.map((s) => s.value);
type valuesMain = typeof vMain;
type valuesMainHistory = typeof vMainHistory;
type valuesMainVideos = typeof vMainVideos;

//History
const vHistory1 = hi1Select.options.map((s) => s.value);
type valuesHistory1 = typeof vHistory1;

//Videos
const vVid1 = vid1Select.options.map((s) => s.value);
type valuesVid1 = typeof vVid1;
//
const vVid1_1 = vid1_1Select.options.map((s) => s.value);
const vVid1_1_1 = vid1_1_1Select.options.map((s) => s.value);
const vVid1_1_2 = vid1_1_2Select.options.map((s) => s.value);
type valuesVid1_1 = typeof vVid1_1;
type valuesVid1_1_1 = typeof vVid1_1_1;
type valuesVid1_1_2 = typeof vVid1_1_2;
//
const vVid1_2 = vid1_2Select.options.map((s) => s.value);
const vVid1_2_1 = vid1_2_1Select.options.map((s) => s.value);
type valuesVid1_2 = typeof vVid1_2;
type valuesVid1_2_1 = typeof vVid1_2_1;

export interface GetSelectMenuInterface {
  row:MessageActionRow[];
  customId:string;
  values:string[];
}
export interface SelectMenuData {
  /**
   * By this function you can get select menu by customId
   */
  getSelectMenu(text:string): {
    row:MessageActionRow[];
    customId:string;
    values:string[];
  }
  /** 
  - All **main** SelectMenu's
  */
  mains: {
    /** 
    - This is the main.
    */
    main: {
      row: MessageActionRow[];
      values: valuesMain;
      customId: string;
    };
    /** 
    - This is the history.
    */
    history: {
      row: MessageActionRow[];
      values: valuesMainHistory;
      customId: string;
    };
    /** 
    - This is the videos.
    */
    videos: {
      row: MessageActionRow[];
      values: valuesMainVideos;
      customId: string;
    };
  };
  /**
  - All History SelectMenu's
   */
  history: {
    /**
    - History Chapter 1 **'قبل الميلاد'**
     */
    hi1: {
      row: MessageActionRow[];
      value: valuesHistory1;
      customId: string;
    };
  };

  /**
  - All Videos SelectMenu's
   */
  videos: {
    /**
    - Videos Chapter 1 **'مقابلات'**
     */
    vid1: {
      row: MessageActionRow[];
      values: valuesVid1;
      customId: string;
      /**
    - Videos Chapter 1.1 **'مقابلات - محافظة بئر سبع'**
       */
    vid1_1: {
      row: MessageActionRow[];
      values: valuesVid1_1;
      customId: string;
      /**
    - Videos Chapter 1.1.1 **'مقابلات - محافظة بئر سبع - بلدة باطل'**
       */
    vid1_1_1: {
      row: MessageActionRow[];
      values: valuesVid1_1_1;
      customId: string;
    };
    /**
  - Videos Chapter 1.1.2 **'مقابلات - محافظة بئر سبع - بلدة بئر سبع'**
     */
        vid1_1_2: {
          row: MessageActionRow[];
          values: valuesVid1_1_2;
          customId: string;
        };
      };
      /**
    - Videos Chapter 1.2 **'مقابلات - بيسان'**
       */
      vid1_2: {
        row: MessageActionRow[];
        values: valuesVid1_2;
        customId: string;
        vid1_2_1: {
          row: MessageActionRow[];
          values: valuesVid1_2_1;
          customId: string;
        };
      };
    };
  };
}
//#endregion


//#region JSON Data

export interface JSONData {
  colors:string;
  embed:{
    main:{
      footer:string
    }
  },
  info:{
    date:string
  }
}
//#endregion






//#region Embed Data
import { MessageEmbed } from "discord.js";
type EmbedType = 'Interviews' | 'Town' | 'Governorate';
type DataAll = {
  who?:string,
  gov?:string,
  townV?:string
};
type ObjectA = {
value:{
  description:string;
  title:string;
  fields:EmbedFieldData[] | EmbedFieldData[][]
}
}
export interface EmbedData {
mains:{
  main:MessageEmbed;
  history: MessageEmbed;
  videos: MessageEmbed;
};
videos:{
  /**
   * This is Embed of **'مقابلات'**
   */
  vid1:MessageEmbed;
}
history:{
  /**
   * This is Embed of **'قبل الميلاد'**
   */
  hi1:MessageEmbed;
}
interviewEmbed(embedType:EmbedType, data:DataAll, user:User): {
  embed: MessageEmbed;
  status: 'good' | 'fail';
  image?: MessageAttachment;
  imagePath?: string;
}
embedCreateByObjAndValue(object:ObjectA,value:string,user:User): MessageEmbed
}
//#endregion






//#region Arm
type ArmStatus = "good" | "fail-data" | "fail-customId" | "fail-dataTown"
export interface ArmInterface {
  embeds: MessageEmbed[];
  status:ArmStatus;
  components?: MessageActionRow[];
  files?: [{
    attachment:string,
    name:string
  }];
  ephemeral?: boolean;

}
//#endregion