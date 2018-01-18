<template>
  <div>
    <h2>{{msg}}</h2>
    <hr>
    <h3>{{$store.state.a.count}}</h3>
    <p>
      <button @click="add(5)">+</button>
      <button @click="reduce">-</button>
    </p>
    <p>
      <button @click="addAction(5)">+</button>
      <button @click="reduceAction">-</button>
    </p>
  </div>
</template>

<script type="text/ecmascript-6">
  import store from '@/vuex/store'
  import {mapState, mapMutations, mapGetters, mapActions} from 'vuex'
  export default {
    data(){
      return {
        msg: 'hello vuex'
      }
    },
    computed: {
        count(){
            return this.$store.state.count
        }
    },
//    computed: mapState({
//        count:(state)=>{
//            return state.count
//        }
//    }),
//    computed: {
//      ...mapState(['count']),
////      count(){
////          return this.$store.getters.count;
////      }
////      ...mapGetters(['count'])
//    },
//    methods: mapMutations(['add','reduce']),
    methods: {
      ...mapMutations(['add','reduce']),
      ...mapActions(['addAction','reduceAction'])
    },
    store
  }
</script>
