<template>
    <div class="contact">
      <h2>浦郷への連絡手段</h2>
      <p>twitter : <a href="https://twitter.com/uragouR" target="_blank">@uragouR</a></p>
      <p>はてなブログ : <a href="https://uragou.hatenablog.com/" target="_blank">ステーキの戯言</a></p>
      <button @click= "limited">有限なボタン</button>
    </div>
</template>

<script>
export default {
  name: 'contact',
  methods:{
    limited:function(){
      for(let lop = 1;lop <= 10; lop ++){
        alert("有限 "+ lop + "/10");
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.contact{
  position: relative;
}
</style>
