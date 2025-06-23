/**
* @returns {import("../../types/index").Timetamps}
*/
function createDiscordTimestamps(dateString, timeString = '12:00') {
  const [year, month, day] = dateString.split('/').map(Number);
  const [hours, minutes] = timeString.split(':').map(Number);
  
  const dateObj = new Date(Date.UTC(year, month - 1, day, hours, minutes));

  const unixTimestamp = Math.floor(dateObj.getTime() / 1000);
  
  return {
    DEFAULT: `<t:${unixTimestamp}>`,
    SHORT_DATE: `<t:${unixTimestamp}:d>`,
    LONG_DATE: `<t:${unixTimestamp}:D>`,
    SHORT_TIME: `<t:${unixTimestamp}:t>`,
    LONG_TIME: `<t:${unixTimestamp}:T>`,
    FULL: `<t:${unixTimestamp}:f>`,
    FULL_WITH_WEEKDAY: `<t:${unixTimestamp}:F>`,
    RELATIVE: `<t:${unixTimestamp}:R>`
  };
}
module.exports = createDiscordTimestamps;