const getPages = (filterId = '') => {
  const values = [
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
      title: 'Other Works',
      path: '/#other',
      id: 'other'
    },
    {
      title: 'Say Hello',
      path: '/contact'
    },
    {
      title: 'About Me',
      path: '/about'
    }
  ]

  return filterId
    ? values.filter(item => {
        return item.id === filterId
      })
    : values
}

export { getPages }
