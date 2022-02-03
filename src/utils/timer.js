// /* eslint-disable import/prefer-default-export */
// /* eslint-disable consistent-return */
// /* eslint-disable no-restricted-syntax */
// const DATE_UNITS = {
//   day: 86400,
//   hour: 3600,
//   minute: 60,
//   second: 1,
// };
// const getSecondsDiff = (timestamp) => (Date.now() - timestamp) / 1000;

// const getUnitAndValueDate = (secondsElapsed) => {
//   const entries = Object.entries(DATE_UNITS);
//   for (const [unit, secondsInUnit] of entries) {
//     const match = secondsElapsed >= secondsInUnit || unit === 'hour';
//     if (match) {
//       const value = Math.floor(secondsElapsed / secondsInUnit) * -1;
//       return { value, unit };
//     }
//   }
// };

// const timeFormat = (mongoDate) => {
//   // console.log(mongoDate);
//   const jsTime = mongoDate.split('.')[0].split('T')[1].split(':');
//   const jsDate = mongoDate.split('.')[0].split('T')[0].split('-');
//   const jsSec = Number(jsTime[2]);
//   const jsMin = Number(jsTime[1]) * 60;
//   const jsHour = Number(jsTime[0]) * 60 * 60;
//   const jsTimeInSecs = jsSec + jsMin + jsHour; // 68400
//   const jsDay = Number(jsDate[2]) * 86400; // 259200
//   const jsMonth = Number(jsDate[1]) * 86400 * 30; // 5184000
//   const jsYear = Number(jsDate[0]) * 86400 * 30 * 12; // 62892288000
//   const jsDateInSecs = jsDay + jsMonth + jsYear;
//   const dateInSecs = jsTimeInSecs + jsDateInSecs;
//   // console.log('62,897,799,600');
//   // console.log(dateInSecs + 1970 * 86400 * 30 * 12);
//   return dateInSecs + 1970 * 86400 * 30 * 12 + 26 * 86400 + 86400 * 30;
// };
// const timeAgo = (timestamp, locale) => {
//   const rtf = new Intl.RelativeTimeFormat(locale);
//   const timeInSecons = timeFormat(timestamp);
//   const secondsElapsed = getSecondsDiff(timeInSecons);
//   const { value, unit } = getUnitAndValueDate(secondsElapsed);
//   return rtf.format(value, unit);
// };
// console.log(timeAgo);
