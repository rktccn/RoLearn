<template>
  <div class="book">
    <div class="searchT">
      <input type="text" /><button class="searchT-submit">搜索</button>
      <div class="searchT-answer">大苏打撒旦啊实打实的阿斯顿阿斯顿</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.searchT {
  position: absolute;
  width: 220px;
  left: 20px;
  right: 20px;
  border: 1px solid #000;
  z-index: 999;
}

.searchT .searchT-submit {
  height: 100%;
  width: 30px;
  background-color: #fff;
  font-size: 12px;
}

.searchT-answer {
  border-top: 1px solid #000;
}
</style>