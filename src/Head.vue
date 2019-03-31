<template>
  <div id="head">
    <transition name= "amenu" mode="out-in">
      <div id="acthead" v-if= "hum" key= "act">
        <div id="humberger"  @click = "hum = !hum">ー<br>ー<br>ー</div>
        <ul>
          <router-link class = "menu" name = "home" tag="li" to="/"><a>home</a></router-link>
          <router-link class = "menu" name = "contact" tag="li" to="/contact"><a>contact</a></router-link>
        </ul>
      </div>
      <div id="humberger"  @click = "hum = !hum" v-else key = "hid">ー<br>ー<br>ー</div>
    </transition>
    
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
  text-align: center;
  font-size: 20px;
  font-weight:700;
  margin: 5;
  padding: 0;
  z-index: 9999;
}

#acthead{
  position: fixed;
  background-color: blueviolet;
  width: 15%;
  height: 100%;
  margin: 5;
  padding: 0;
  z-index: 9999;
}

ul{
  position: relative;
  list-style-type: none;
  text-align: center;
  padding: 0px;
}
.menu{
  margin: 0px;
  padding: 20px;
}

#humberger{
  cursor: default;
  margin: 10px 30px;
  line-height: 15px;
  font-size: 60px;
}


.amenu-enter-active{
  transition-property: all;
  transition-duration: 0.6s;
  transition-timing-function: linear;
}
.amenu-leave-active{
  transition: opacity .5s;
}

.amenu-enter{
  transform: translateX(-200px);
  opacity: 0;
}

.amenu-leave-to{
  opacity: 0;
}
</style>