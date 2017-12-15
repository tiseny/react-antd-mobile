// 将对象转换成参数序列
export default function param(paramData) {

  const escape = window.encodeURIComponent;

  if(!paramData || typeof paramData !== 'object'){
    return ''
  }

  const params = Object.keys(paramData).map(key => {
    const val =  paramData[key];
    return `${escape(key)}=${val === undefined || val === null ? '' : escape(val)}`
  });
  
  return params.join('&');
}