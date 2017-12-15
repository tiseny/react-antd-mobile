module.exports = {
  path: 'setup',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('../views/setup').default)
    })
  }
}