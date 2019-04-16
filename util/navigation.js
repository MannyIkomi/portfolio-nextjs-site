const getPages = (filterId = '') => {
  const pages = [
    {
      title: 'Logo & Identity',
      path: '/#identity',
      id: 'identity'
    },
    {
      title: 'User Interface',
      path: '/#ui',
      id: 'ui'
    },
    {
      title: 'Other Werk',
      path: '/#other',
      id: 'other'
    },
    // {
    //   title: 'Say Hello',
    //   path: '/contact'
    // },
    {
      title: 'About Me',
      path: '/about'
    }
  ]

  return filterId
    ? pages.filter(page => {
        return page.id === filterId
      })
    : pages
}

export { getPages }
