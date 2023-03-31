/**
 * A function that formats a given time using the provided configuration or defaults.
 *
 * @param {number} time - The time in milliseconds to be formatted.
 * @param {Object} [config] - An optional configuration object to customize the formatting.
 *   @property {string} [config.timeZone] - The time zone to use for the formatted time. Defaults to the system time zone.
 *   @property {string} [config.month='short'] - The format to use for the month component of the formatted time.
 *   @property {string} [config.day='numeric'] - The format to use for the day component of the formatted time.
 *   @property {string} [config.hour='numeric'] - The format to use for the hour component of the formatted time.
 *   @property {string} [config.minute='numeric'] - The format to use for the minute component of the formatted time.
 *   @property {boolean} [config.hour12=false] - Whether to use a 12-hour clock for the formatted time.
 *
 * @returns {string} The formatted time string in the format specified by the configuration object.
 */

const formatTime = (
  time,
  config = {
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  }
) => {
  const localDate = new Date(time);
  return localDate.toLocaleString('en-AU', config);
};

export default formatTime;
