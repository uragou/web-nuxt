<template>
  <div class="home">
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

</style>
