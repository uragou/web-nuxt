<template>
  <div class="home">
    <div class= "maindis">
      <img id = "logo" src="../assets/Flogo.png"/>
    </div>
    <div class= "cont">
      <h2>こんにちは！浦郷の勉強用Vue.jsだよ！</h2>
      初見さんいらっしゃい！
      キリ番とかはないでーす！
      <h2>コンテンツコンテンツ</h2>
      <p>コンテンツコンテンツコンテンツコンテンツコンテンツコンテンツ</p>
      <h2>コンテンツコンテンツ</h2>
      <p>コンテンツコンテンツコンテンツコンテンツコンテンツコンテンツ</p>
      <h2>コンテンツコンテンツ</h2>
      <p>コンテンツコンテンツコンテンツコンテンツコンテンツコンテンツ</p>
      <h2>コンテンツコンテンツ</h2>
      <p>コンテンツコンテンツコンテンツコンテンツコンテンツコンテンツ</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.home{
  position: relative;
  background-color: aqua;
}

.cont{
  position: relative;
}

.maindis{
  position: relative;
  background-image: url("../assets/god.jpg");
  background-position:center;
  height: 100vh;
}

#logo{
  position: absolute;
  bottom: 10%;
  width: 50%;
}

</style>
