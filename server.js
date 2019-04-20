const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  // https://nextjs.org/docs#routing
  const server = express()
  const slug = /^[a-z0-9]+(?:-[a-z0-9]+)*$/
  const id = /^[0-9]*$/

  server.get(`/portfolio`, (req, res) => {
    console.log(`Portfolio Redirect`)
    return app.render(req, res, `index`)
  })

  server.get(`/portfolio/:slug`, (req, res) => {
    console.log(`portfolio/:slug`)
    return app.render(req, res, `portfolio`, { slug: req.params.slug })
  })

  // server.get(`/portfolio/:slug(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)`, (req, res) => {
  //   console.log(`REQ URL: `, req.originalUrl)
  //   const reqProject = req.params.slug[0]
  //   return app.render(req, res, `projectView`, { slug: reqProject })
  // })

  // server.get(`/portfolio/:id(/^[0-9]*$/)`, (req, res) => {
  //   console.log(`REQ URL: `, req.originalUrl)
  //   const reqProject = req.params.id[0]
  //   return app.render(req, res, `projectView`, { id: reqProject })
  // })

  server.get('*', (req, res) => {
    console.log(`all routes`)
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
