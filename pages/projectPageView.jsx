import React from 'react'
import axios from 'axios'

const Project = props => {
  return
}

const axiosGraphql = axios.create({
  method: 'POST',
  baseURL: 'http://localhost:3001',
  url: 'graphql',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})

Project.getInitialProps = async () => {
  try {
    const response = await axiosGraphql({
      data: JSON.stringify({
        query: `{
          projects {
            id
            name
            description
            slug
            covers {
              original
              size_404
              size_808
            }
          }
        }`
      })
    })
    const { projects } = await response.data.data
    return { projects }
  } catch (err) {
    console.error(err.error)

    return {
      projects: [
        {
          id: '75805377',
          name: 'An Empire of Shattered Glass',
          description:
            'Short Story Collection Book Cover\nhttp://www.readshortfiction.com/2017/09/an-empire-of-shattered-glass-by-gunnar-de-winter/',
          slug: 'An-Empire-of-Shattered-Glass',
          covers: {
            original:
              'https://mir-s3-cdn-cf.behance.net/projects/original/72f45c75805377.Y3JvcCwxMTgyLDkyNSwxMDIsNzk.png',
            size_404:
              'https://mir-s3-cdn-cf.behance.net/projects/404/72f45c75805377.Y3JvcCwxMTgyLDkyNSwxMDIsNzk.png',
            size_808:
              'https://mir-s3-cdn-cf.behance.net/projects/808/72f45c75805377.Y3JvcCwxMTgyLDkyNSwxMDIsNzk.png'
          }
        }
      ]
    }
  }
}
export default Project
