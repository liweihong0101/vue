<template>
  <div>
    <h2>{{msg}}</h2>
    <p>newsId:{{$route.params.newsId}}</p>
    <p>newsTitle:{{$route.params.newsTitle}}</p>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return {
        msg: 'params pages'
      }
    },
    beforeRouteEnter: (to, from, next) => {
      console.log('已经准备进入params模版！');
      next()
    },
    beforeRouteLeave: (to, from, next) => {
      console.log('已经准备离开params模版！');
      next()
    }
  }
</script>
