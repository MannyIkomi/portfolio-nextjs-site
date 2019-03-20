import { getPages } from '../util/navigation'

// describe('Path Utils', () => {
//   it('creates a path from slug', () => {
//     const createResourcePath = (behanceSlug = '') => {
//       return '/' + behanceSlug
//     }
//     expect(createResourcePath('a-behance-slug')).toEqual('/a-behance-slug')
//   })
// })

describe('Page Navigation Factory', () => {
  it('returns an array by default', () => {
    expect(Array.isArray(getPages())).toBe(true)
  })
  it('filters for a specific object', () => {
    expect(getPages('ui')).toEqual([
      {
        path: '/#ui',
        title: 'User Interface',
        id: 'ui'
      }
    ])
  })
})
