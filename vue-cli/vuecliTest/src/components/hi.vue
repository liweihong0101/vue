<template>
    <div>
      <h2>{{msg}}</h2>
      <router-view></router-view>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'hi',
        data () {
            return {
              msg: 'I am hi page!'
            }
        }
    }
</script>

<style scoped>

</style>
