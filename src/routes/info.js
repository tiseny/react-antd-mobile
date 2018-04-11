module.exports = {
  path: 'info',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('../views/info').default)
    })
  }
}