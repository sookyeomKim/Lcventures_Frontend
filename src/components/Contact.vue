<template>
  <div class="main_role" id="main_role"
       :style="this.$parent.$data.mix_data.slide_mover"
       @click="$parent.$options.methods.only_close">

    <input type="hidden" v-bind:value="where_am_i = 6">
    <!--
    <img class="main_image" src="../assets/pages/contact/contact.jpg" alt="page background image">
    -->

    <!-- Main Context on video wrap -->
    <div class="main_title">
      <h2>엘씨벤처스는 가까이에 있습니다.</h2>
    </div>


  </div>
</template>

<script>
  export default {
    name: 'contact'
  }
</script>

<style lang="scss" scoped>

</style>
