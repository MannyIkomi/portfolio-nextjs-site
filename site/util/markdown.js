require = require('esm')(module /*, options*/)
export const showdown = require('showdown')

export const converMarkdown = new showdown.Converter()

export default converMarkdown
