<template>
  <div id="head">
      <img id="humberger" @click = "hum = !hum" src="./assets/humberger.png">
      <transition name="Vmenu"><ul v-show = "hum">
        <router-link class = "menu" name = "home" tag="li" to="/"><a>home</a></router-link>
        <router-link class = "menu" name = "contact" tag="li" to="/contact"><a>contact</a></router-link>
      </ul></transition>
  </div>
</template>

<script>
export default {
  name:"Vhead",
  data (){
    return{
      hum : false
    }
  },
}
</script>

<style>
#head{
    position: fixed;
    font-size: 20px;
    font-weight:700;
    color: black;
    margin: 5;
    padding: 0;
    z-index: 9999;
}

.Hclass{
  background-color: rgba(240, 248, 255, 0.7);
}

ul{
  position: relative;
  list-style-type: none;
  padding: 0px;
}
.menu{
  margin: 0px;
  padding: 20px;
}

#humberger{
  margin: 10px;
}

.Vmenu-enter-active,.Vmenu-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.Vmenu-enter, .Vmenu-leave-to{
  transform: translateX(10px);
  opacity: 0;
}

</style>
