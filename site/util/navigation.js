const getPages = (filterId = '') => {
  const pages = [
    {
      title: 'werk',
      href: '/'
    },
    // {
    //   title: 'Logo & Identity',
    //   href: '/#identity',
    //   category: 'logo & identity'
    // },
    // {
    //   title: 'User Interface',
    //   href: '/#ui',
    //   category: 'user'
    // },
    {
      title: 'about',
      href: '/about'
    }
  ]

  return filterId
    ? pages.filter(page => {
        return page.id === filterId
      })
    : pages
}

export { getPages }
