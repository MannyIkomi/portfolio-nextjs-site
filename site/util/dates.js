// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
export const convertEpochToDate = (epoch = 1) => new Date(epoch * 1000)

export const naturalDate = (month = 0, day = 0, year = 0) => {
  const monthIndex = month - 1
  return new Date(year, monthIndex, day)
}

export const formatDate = (formatOptions = {}, date = new Date()) => {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
  // converts date object to specified format
  const customFormat = new Intl.DateTimeFormat('default', formatOptions).format(
    date
  )
  return customFormat
}
export const getWeekday = (option = '') => {
  // weekday
  // The representation of the weekday. Possible values are:
  // "long" (e.g., Thursday)
  // "short" (e.g., Thu)
  // "narrow" (e.g., T). Two weekdays may have the same narrow style for some locales (e.g. Tuesday's narrow style is also T).

  const format = { weekday: option }
  return formatDate(format, new Date())
}
export const getDay = (option = '') => {
  // day
  // The representation of the day. Possible values are:
  // "numeric" (e.g., 1)
  // "2-digit" (e.g., 01)
  const format = { day: option }
  return formatDate(format, new Date())
}
export const getMonth = (option = '') => {
  // month
  // The representation of the month. Possible values are:
  // "numeric" (e.g., 2)
  // "2-digit" (e.g., 02)
  // "long" (e.g., March)
  // "short" (e.g., Mar)
  // "narrow" (e.g., M). Two months may have the same narrow style for some locales (e.g. May's narrow style is also M).

  const format = { month: option }
  return formatDate(format, new Date())
}
export const getYear = (option = '') => {
  // year
  // The representation of the year. Possible values are:
  // "numeric" (e.g., 2012)
  // "2-digit" (e.g., 12)

  const format = { year: option }
  return formatDate(format, new Date())
}

// export {
//   convertEpochToDate,
//   formatDate,
//   getWeekday,
//   getDay,
//   getMonth,
//   getYear,
//   naturalDate
// }
