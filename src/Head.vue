<template>
  <div id="head">
    <div id="humberger"  @click = "hum = !hum">ー<br>ー<br>ー</div>
    <transition name= "amenu" mode="out-in">
      <div id="acthead" v-if= "hum" key= "act">
        <ul id = "actmenu">
          <router-link class = "menu" name = "home" tag="li" to="/"><a>home</a></router-link>
          <router-link class = "menu" name = "contact" tag="li" to="/contact"><a>contact</a></router-link>
        </ul>
      </div>
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

#actmenu{
  top:10%;
}

#acthead{
  position: fixed;
  background-color: aqua;
  width: 15%;
  height: 100%;
  margin: 5;
  padding: 0;
  z-index: 2000;
}

#head{
  position: fixed;
  text-align: center;
  font-size: 20px;
  font-weight:700;
  margin: 5;
  padding: 0;
  z-index: 1000;
}


#humberger{
  border-radius: 50%; 
  position: fixed;
  background-color:azure;
  cursor: default;
  text-align:center;
  padding: 20px;
  line-height: 15px;
  font-size: 60px;
  z-index: 3000;
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