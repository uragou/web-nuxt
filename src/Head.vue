<template>
  <div id="head" v-bind:class= "{actmenu:hum}">
      <img id="humberger" @click = "hum = !hum" src="./assets/humberger.png">
      <ul v-show = "hum" >
        <router-link class = "menu" name = "home" tag="li" to="/"><a>home</a></router-link>
        <router-link class = "menu" name = "contact" tag="li" to="/contact"><a>contact</a></router-link>
      </ul>
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
  text-align: center;
  padding: 0px;
}
.menu{
  margin: 0px;
  padding: 20px;
}

.actmenu{
  background-color: blueviolet;
  width: 20%;
  height: 100%;

}

#humberger{
  margin: 10px;
}


</style>
