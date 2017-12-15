/**
 * 获取url或者自定义字符串中的参数
 * 
 * @param {String} name 不传name则直接返回整个参数对象
 */
export default function getQuery(name) {
  const str = location.search.replace('?', '');
  const obj = {};
  const arr = str.split('&');
  const len = arr.length;

  if (len > 0) {
    for (let i = 0; i < len; i++) {
      const tempArr = arr[i].split('=');
      if (tempArr.length === 2) {
        obj[tempArr[0]] = tempArr[1];
      }
    }
  }

  return name ? obj[name] : obj;
}
