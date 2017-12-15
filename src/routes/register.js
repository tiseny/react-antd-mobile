module.exports = {
  path: 'register',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('../views/register').default)
    })
  }
}
