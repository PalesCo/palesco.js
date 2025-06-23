//#region SelectMenu Data
import {
  EmbedFieldData,
  MessageActionRow,
  MessageAttachment,
  User,
} from "discord.js";

export interface GetSelectMenuInterface {
  row: MessageActionRow[];
  customId: string;
  values: string[];
}
export interface SelectMenuData {
  /**
   * By this function you can get select menu by customId
   */
  getSelectMenu(text: string): {
    row: MessageActionRow[];
    customId: string;
    values: string[];
  };
  /** 
  - All **main** SelectMenu's
  */
  mains: {
    /** 
    - This is the main.
    */
    main: {
      row: MessageActionRow[];
      values: string[];
      customId: string;
    };
    /** 
    - This is the history.
    */
    history: {
      row: MessageActionRow[];
      values: string[];
      customId: string;
    };
    /** 
    - This is the videos.
    */
    videos: {
      row: MessageActionRow[];
      values: string[];
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
      value: string[];
      customId: string;
    };
    /**
    - History Chapter 2 **'مجازر القري'**
     */
    hi2: {
      row: MessageActionRow[];
      value: string[];
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
      values: string[];
      customId: string;
      /**
    - Videos Chapter 1.1 **'مقابلات - محافظة بئر سبع'**
       */
      vid1_1: {
        row: MessageActionRow[];
        values: string[];
        customId: string;
        /**
    - Videos Chapter 1.1.1 **'مقابلات - محافظة بئر سبع - بلدة باطل'**
       */
        vid1_1_1: {
          row: MessageActionRow[];
          values: string[];
          customId: string;
        };
        /**
  - Videos Chapter 1.1.2 **'مقابلات - محافظة بئر سبع - بلدة بئر سبع'**
     */
        vid1_1_2: {
          row: MessageActionRow[];
          values: string[];
          customId: string;
        };
      };
      /**
    - Videos Chapter 1.2 **'مقابلات - بيسان'**
       */
      vid1_2: {
        row: MessageActionRow[];
        values: string[];
        customId: string;
        vid1_2_1: {
          row: MessageActionRow[];
          values: string[];
          customId: string;
        };
      };
    };
  };
}
//#endregion

//#region JSON Data

export interface JSONData {
  colors: string;
  embed: {
    main: {
      footer: string;
    };
  };
  info: {
    date: string;
  };
}
//#endregion

//#region Embed Data
import { MessageEmbed } from "discord.js";
export type EmbedType = "Interviews" | "Town" | "Governorate";
export type DataAll = {
  who?: string;
  gov?: string;
  townV?: string;
};
export type EmbedOptions = {
    description: string;
    title: string;
    fields?: EmbedFieldData[] | EmbedFieldData[][];
  
};

export interface InterviewEmbed {
    embed: MessageEmbed;
    status: "good" | "fail";
    image?: MessageAttachment;
    imagePath?: string;
  } ;


  //interviewEmbed(data:InterviewEmbedOptions) ;
  //createEmbedByData(data: EmbedOptions,user: User): MessageEmbed;

//#endregion

//#region Arm

type ArmStatus = "good" | "fail-data" | "fail-customId" | "fail-dataTown";
export interface ArmInterface {
  embeds: MessageEmbed[];
  status: ArmStatus;
  components: MessageActionRow[];
  files: [
    | {
        attachment: string;
        name: string;
      }
    | undefined
  ];
  ephemeral: boolean;
}
export interface CustomId {
  data: {
    isValid: boolean;
    error?: string;
    prefix: string;
    segments: string[];
    fullId: string;
    totalSegments: number;
  };
  interview?:{
    type: string;
    governorate: string | null;
    town: string | null;
    who: string | null;
  };
  isID(id: string): boolean;
}
//#endregion

//#region Util
type Time = number;
export interface Timetamps {
  /**=> 2 May 2000 12:00*/
  DEFAULT: `<t:${Time}>`;
  /**=> 05/02/2000*/
  SHORT_DATE: `<t:${Time}:d>`;
  /**=> May 2, 2000*/
  LONG_DATE: `<t:${Time}:D>`;
  /**=> 12:00 PM*/
  SHORT_TIME: `<t:${Time}:t>`;
  /**=> 12:00:00 PM*/
  LONG_TIME: `<t:${Time}:T>`;
  /**=> May 2, 2000 12:00 PM*/
  FULL: `<t:${Time}:f>`;
  /**=> Tuesday, May 2, 2000 12:00 PM*/
  FULL_WITH_WEEKDAY: `<t:${Time}:F>`;
  /**=> 25 years ago*/
  RELATIVE: `<t:${Time}:R>`;
}
//#endregion
