/* eslint-disable */
require('eventsource-polyfill')
const hotClient = require('webpack-hot-middleware/client?noInfo=false&reload=false')

// hotClient.subscribe(function (event) {
//   if (event.action === 'reload') {
//     window.location.reload()
//   }
// })