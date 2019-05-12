import Axios from 'axios'

function graphqlQuery(queryString = '') {
  const axiosGraphql = Axios.create({
    method: 'POST',
    baseURL:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:3001'
        : process.env.API_URL,

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
