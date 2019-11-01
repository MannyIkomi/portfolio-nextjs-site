import {
  convertEpochToDate,
  getDay,
  getMonth,
  getWeekday,
  formatDate,
  naturalDate,
  getYear
} from '../util/dates'

describe('Epoch Date Converter', () => {
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

describe('Human Date Converter', () => {
  describe('Natural Date', () => {
    // UNIT
    it('returns a new Date object, abstracting the month index', () => {
      expect(naturalDate(3, 18, 2019)).toEqual(
        new Date('2019-03-18T04:00:00.000Z')
      )
    })
  })
  describe('Format Date current Date by Default', () => {
    // UNITS
    // https://github.com/boblauer/MockDate
    const MockDate = require('mockdate')
    MockDate.set('2019-3-22')

    it('spells out the current day of the week by default', () => {
      expect(formatDate({ weekday: 'long' })).toEqual('Friday')
    })
    it('gets the numeric day of the week by default', () => {
      expect(formatDate({ day: 'numeric' })).toEqual('22')
    })
    it('spells out the current month of the year by default', () => {
      expect(formatDate({ month: 'long' })).toEqual('March')
    })
    it('gets the 4 digit year by default', () => {
      expect(formatDate({ year: 'numeric' })).toEqual('2019')
    })
  })
  describe('Format Supplied Date Object', () => {
    it('spells out the current day of the week given a Date object', () => {
      // UNIT
      // Months in date objects are 0 based new Date(2019, 2, 19) = 3/19/19
      expect(formatDate({ weekday: 'long' }, new Date(2019, 2, 19))).toEqual(
        'Tuesday'
      )
    })
  })

  // Can the format date by curried?
  // naturalize the default options? i.e getMonth = (options = 'long') => March
  // naturalize the default options? i.e getDay = (options = 'numeric') => 18
  // naturalize the default options? i.e getYear = (options = 'numeric') => 2019

  // describe('Convert Behance API Epoch Date using composition', () => {
  //   // INTEGRATION
  //   it('')
  // })
})
