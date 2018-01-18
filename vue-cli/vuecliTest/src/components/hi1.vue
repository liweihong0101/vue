<template>
    <div>
      <h2>{{msg}} + {{$route.params.username}} + {{$route.params.id}}</h2>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'hi1',
        data () {
            return {
              msg: 'I am hi1 page!'
            }
        }
    }
</script>

<style scoped>

</style>
