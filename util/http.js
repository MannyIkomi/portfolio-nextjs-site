import Axios from 'axios'

function graphqlQuery(queryString = '') {
  console.log('GRAPHQL QUERY:', queryString)

  const axiosGraphql = Axios.create({
    method: 'POST',
    baseURL: 'https://api.mannyikomi.com',
    // process.env.NODE_ENV === 'development'
    //   ? 'http://localhost:3001'
    //   : 'https://graphql-behance-api.herokuapp.com/',

    url: 'graphql',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  })
  return axiosGraphql({
    data: JSON.stringify({
      query: queryString
    })
  })
}

export default graphqlQuery
