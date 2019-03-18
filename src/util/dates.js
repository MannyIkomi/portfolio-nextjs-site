// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
const convertEpochToDate = (epoch = 1) => new Date(epoch * 1000)

export { convertEpochToDate }
