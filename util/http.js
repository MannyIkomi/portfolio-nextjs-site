import Axios from 'axios'

function graphqlQuery(queryString = '') {
  const axiosGraphql = Axios.create({
    method: 'POST',
    baseURL: 'http://localhost:3001',
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
