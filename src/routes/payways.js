module.exports = {
  path: 'payways',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('../views/payways').default)
    })
  }
}