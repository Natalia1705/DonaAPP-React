/* eslint-disable import/prefer-default-export */
/* eslint-disable consistent-return */
/* eslint-disable no-restricted-syntax */
import { DateTime } from 'luxon';

const DATE_UNITS = {
  day: 86400,
  hour: 3600,
  minute: 60,
  second: 1,
};
const getSecondsDiff = (timestamp) => (Date.now() - timestamp) / 1000;

const getUnitAndValueDate = (secondsElapsed) => {
  const entries = Object.entries(DATE_UNITS);
  for (const [unit, secondsInUnit] of entries) {
    const match = secondsElapsed >= secondsInUnit || unit === 'hour';
    if (match) {
      const value = Math.floor(secondsElapsed / secondsInUnit) * -1;
      return { value, unit };
    }
  }
};
export const timeAgo = (timestamp, locale) => {
  const rtf = new Intl.RelativeTimeFormat(locale);
  const timeInSecons = DateTime.fromISO(timestamp);
  const secondsElapsed = getSecondsDiff(timeInSecons);
  const { value, unit } = getUnitAndValueDate(secondsElapsed);
  return rtf.format(value, unit);
};
