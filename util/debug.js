export const prettyJson = (object = {}, msg = '') =>
  console.log(msg, JSON.stringify(object, null, 2))
