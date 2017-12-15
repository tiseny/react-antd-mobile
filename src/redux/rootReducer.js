import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

// 用户
import user from './modules/user'


const rootReducer = combineReducers({
  user,                         // 用户
  //routing，这个Key值不能变，在redux-simple-router.syncHistory(history).listenForReplays(store)会用到
  routing
})

export default rootReducer
