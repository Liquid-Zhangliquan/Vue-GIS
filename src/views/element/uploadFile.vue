<template>
  <div class="newSeo">
    <div class="newSeo-main">
      <div class="pc-left" id="pc-left">
        <div class="pc-list">
          <button @click="testFun">测试公共方法</button>
          <button @click="leftNavHidden('pc-left','pc-right')">改变</button>
        </div>
      </div>
      <div class="pc-right" id="pc-right">
        <div class="pc-list">you</div>
      </div>
    </div>

  </div>
</template>

<script>
  import axios from "axios";
  export default {
    data() {
      return {
        name: "文件上传",
      };
    },
    methods: {

    }
  };
</script>

<style lang="scss" scoped="">
  @import "@/assets/scss/element/upload.scss";
</style>