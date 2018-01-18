<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <button @click="goBack">后退</button>
      <button @click="forward">前进</button>
      <button @click="goHome">返回首页</button>
    </div>
    <!--<div>-->
    <!--导航：-->
    <!--<router-link to="/">首页</router-link> |-->
    <!--<router-link to="/hi">Hi页面</router-link> |-->
    <!--<router-link :to="{name: 'hi1', params: {username: 'jsLi', id: 888}}">Hi页面1</router-link> |-->
    <!--<router-link to="/hi/hi2">Hi页面2</router-link> |-->
    <!--</div>-->
    <!--<p>{{$route.name}}</p>-->
    <br>
    <router-link to="/">Home</router-link>
    |
    <router-link to="/params/127/jsLi website is very good">Params</router-link>
    |
    <router-link to="/goHome">goHome</router-link>
    |
    <router-link to="/goParams/918/I like vue.js">goParams</router-link>
    |
    <router-link to="/hi1">hi1</router-link>
    |
    <router-link to="/jsLi">jsLi</router-link>
    |
    <router-link to="/home1">home1</router-link>
    |
    <router-link to="/123123">瞎写的</router-link>
    |
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    <!--<router-view name="left" style="float:left;width:50%;height: 300px;background-color: red;"></router-view>-->
    <!--<router-view name="right" style="float:left;width:50%;height: 300px;background-color: green;"></router-view>-->
  </div>
</template>

<script>
  export default {
    name: 'app',
    methods: {
      goBack(){
          this.$router.go(-1)
      },
      forward(){
        this.$router.go(1)
      },
      goHome(){
        this.$router.push('/')
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: opacity .5s;
  }

  .fade-leave {
    opacity: 1;
  }

  .fade-leave-active {
    opacity: 0;
    transition: opacity .5s;
  }
</style>
