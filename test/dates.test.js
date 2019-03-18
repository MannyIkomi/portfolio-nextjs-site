import { convertEpochToDate } from './src/util/dates.js'

describe('Date Utils', () => {
  it('converts epoch number to date object', () => {
    console.log(convertEpochToDate(1494293226))
  })
})
