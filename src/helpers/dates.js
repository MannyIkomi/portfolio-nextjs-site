function convertEpochToDate(epoch) {
  return new Date(epoch * 1000)
}

// console.log(convertEpochToDate(1494374319))

export { convertEpochToDate }
