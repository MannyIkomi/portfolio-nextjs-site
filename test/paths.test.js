// const createHref = (path, behanceSlug) => path + behanceSlug

// const projectLink = createHref(
//   this.menuPath,
//   this.createResourcePath(this.props.project.slug)
// ).toLowerCase()

describe('Path Utils', () => {
  it('creates a path from slug', () => {
    const createResourcePath = (behanceSlug = '') => {
      return '/' + behanceSlug
    }
    expect(createResourcePath('a-behance-slug')).toEqual('/a-behance-slug')
  })
})
