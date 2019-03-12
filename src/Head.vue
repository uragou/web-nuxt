<template>
  <div id="head">
      <img id="humberger" src="./assets/humberger.png">
      <ul>
        <router-link class = "menu" name = "home" tag="li" to="/"><a>home</a></router-link>
        <router-link class = "menu" name = "contact" tag="li" to="/contact"><a>contact</a></router-link>
      </ul>
  </div>
</template>

<script>
export default {
  name:"head",
}
</script>

<style>
#head{
    position: fixed;
    font-size: 20px;
    font-weight:700;
    color: black;
    margin: 0;
    padding: 5;
    z-index: 9999;
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

</style>
