import { convertEpochToDate } from '../src/util/dates'

describe('Date Utils', () => {
  const epoch1 = 1494293226
  const epoch2 = 1448896821
  it('converts behance epoch date to Date Object', () => {
    expect(convertEpochToDate(epoch1)).toEqual(
      new Date('2017-05-09T01:27:06.000Z')
    )
  })
  it('converts behance epoch date to Date Object', () => {
    expect(convertEpochToDate(epoch2)).toEqual(
      new Date('2015-11-30T15:20:21.000Z')
    )
  })
})
