const getPages = (filterId = '') => {
  const pages = [
    {
      title: 'werk',
      path: '/'
    },
    // {
    //   title: 'Logo & Identity',
    //   path: '/#identity',
    //   category: 'logo & identity'
    // },
    // {
    //   title: 'User Interface',
    //   path: '/#ui',
    //   category: 'user'
    // },
    {
      title: 'about',
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
