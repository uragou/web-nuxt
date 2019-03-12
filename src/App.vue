<template>
  <div id="app">
    <transition name="page" mode="out-in"><keep-alive>
    <router-view></router-view>  
    </keep-alive></transition>
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
  transition: all .3s ease;
}
.page-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.page-enter, .page-leave-to{
  transform: translateX(10px);
  opacity: 0;
}

</style>
