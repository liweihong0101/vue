/*
一、排序
*/

// 数字排序（从小到大）
function sortNumberAsc_li(a, b) {
  return a - b;
}

// 数字排序（从大到小）
function sortNumberDsc_li(a, b) {
  return b - a;
}

//数组对象方法排序:
function sortByKey_li(array,key){
    return array.sort(function(a,b){
      var x=a[key];
      var y=b[key];
      return ((x<y)?-1:((x>y)?1:0));
   });
}
