import param from './param'
import { apiDomain } from '../../config'
/**
 * 
 * @param  {string} path
 * @param  {object} paramData
 * @return {string}        
 */
export default function getApiPath(path, paramData) {
  const requestParams = paramData || {};
  requestParams.t = (new Date()).getTime();

  let params = param(requestParams);

  if (params) {
    params = path.indexOf('?') === -1 ? `?${params}` : `&${params}`
  }

  return `${apiDomain}/${path}${params}`
}
