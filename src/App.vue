<template>
  <div id="app">
    <transition name="page" mode="out-in">
    <router-view></router-view>  
    </transition>
  </div>
</template>

<script>

export default {
  name:"app",
}
</script>

<style>
#app {
  position: relative;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top:0;
  top:0px;
}

.page-enter-active {
  transition: all .8s;
  opacity: 1;
}
.page-leave-active {
  transition: all .8s;
  opacity: 1;
}
.page-enter, .page-leave-to{
  opacity: 0;
}

</style>
