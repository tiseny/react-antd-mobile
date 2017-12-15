module.exports = {
  path: 'dashboard',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('../views/dashboard').default)
    })
  }
}