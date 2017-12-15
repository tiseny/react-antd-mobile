module.exports = {
  path: '*',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('../views/errors/NotFoundPage').default)
    })
  }
}
