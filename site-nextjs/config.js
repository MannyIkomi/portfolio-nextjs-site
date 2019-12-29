export const CMS_URL = process.env.CMS_URL || 'http://localhost:1337'
export const PORT = parseInt(process.env.PORT, 10) || 3000

module.exports = {
  CMS_URL,
  PORT
}
