<template>
  <div class="main_role" id="main_role"
       :style="this.$parent.$data.mix_data.slide_mover"
       @click="$parent.$options.methods.only_close">

    <input type="hidden" v-bind:value="where_am_i = 7">
<!--
    <img class="main_image" src="../assets/pages/recruit/recruit.jpg" alt="page background image">
-->

    <!-- Main Context on video wrap -->
    <div class="main_title">
      <h2>엘씨벤처스에 지원해주세요</h2>
      <span>- R</span>
      <span>E</span>
      <span>C</span>
      <span>R</span>
      <span>U</span>
      <span>I</span>
      <span>T</span>
    </div>

    <section class="section_1">


    </section>

  </div>
</template>

<script>
  export default {
    name: 'recruit'
  }
</script>

<style lang="scss" scoped>
  .section_1 {
    display: block;
    perspective: 1000px;
  }


</style>
