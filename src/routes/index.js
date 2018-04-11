import { redirect } from '../helpers/loginAuth';
import { baseAlias } from '../../config';

/**
 * root router
 */
export default {
  path: baseAlias || '/',
  component: require('../views').default,
  indexRoute: {
    component: require('../views/dashboard').default,
    onEnter: redirect(`${baseAlias}/dashboard`)
  },
  childRoutes: [
    require('./dashboard'),
    require('./shop'),
    require('./info'),
    require('./norights'),
    require('./404')
  ]
}
