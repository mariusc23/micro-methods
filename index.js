const { createError } = require('micro')

const allowMethods = methods => next => (req, res) => {
  if (methods.indexOf(req.method) === -1) {
    throw createError(405, 'Method Not Allowed')
  }
  return next(req, res)
}

module.exports = {
  allowMethods,
}
