const express = require('express')
const next = require('next')

const PORT = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  // https://nextjs.org/docs#routing
  const server = express()
  // const slug = /^[a-z0-9]+(?:-[a-z0-9]+)*$/
  // const id = /^[0-9]*$/
  server.get('/cms', (req, res) => {})

  server.get(`/projects`, (req, res) => {
    console.log(`Portfolio Redirect`)
    return app.render(req, res, `index`)
  })

  server.get(`/projects/:slug`, (req, res) => {
    console.log(`projects/:slug`)
    return app.render(req, res, `projects`, { slug: req.params.slug })
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(PORT, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${PORT}`)
  })
})
