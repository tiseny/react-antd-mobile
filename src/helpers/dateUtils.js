/**
 * 将时间转换成对应的格式 yyyy-MM-dd hh:mm:ss
 * @param  {string} format 需要转化的格式
 * @param  {object} date   需要转换的时间
 * @return {string}        按照对应格式转换后的时间
 */
function dateToString(format,date) {
  date = date || new Date();
  return date.format(format);
}

/**
 * 将string转换成时间
 * @param  {string} date    需要转成的字符串
 * @param  {string} split   默认为 '-'，如果显示为‘/’可不传
 * @return {object}         返回时间对象 or 返回本身
 */
function stringToDate(date,split){
  split = split || '-';  
  return typeof date == 'string' ? new Date(date.replace('/'+split+'/g', "/")) : date;
}

Date.prototype.format = function(format) {
 	const date = {
    "M+": this.getMonth() + 1,
    "d+": this.getDate(),
    "h+": this.getHours(),
    "m+": this.getMinutes(),
    "s+": this.getSeconds(),
    "q+": Math.floor((this.getMonth() + 3) / 3),
    "S+": this.getMilliseconds()
  };
  if (/(y+)/i.test(format)) {
    format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  for (var k in date) {
    if (new RegExp("(" + k + ")").test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length == 1
            ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
    }
  }
  return format;
}

export {
  dateToString,
  stringToDate 
}