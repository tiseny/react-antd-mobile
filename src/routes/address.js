module.exports = {
  path: 'address',
  indexRoute: {
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('../views/address/index').default)
      })
    }
  },
  childRoutes: [{
    path: 'index',
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('../views/address/index').default)
      })
    }
  }, {
    path: 'add(:/id)',
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('../views/address/addOrEdit').default)
      })
    }
  }]
}