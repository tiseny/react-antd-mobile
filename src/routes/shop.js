module.exports = {
  path: 'shop',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('../views/shop').default)
    })
  }
}