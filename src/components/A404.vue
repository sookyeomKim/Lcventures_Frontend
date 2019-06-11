<template>
  <div class="main_role" id="main_role"
       :style="this.$parent.$data.mix_data.slide_mover"
       @click="$parent.$options.methods.only_close">

    <!-- Main Context on video wrap -->
    <div class="main_title">
      <h2>404 Error</h2>
    </div>

    <section class="section_1">

      <div class="lc_slogan">
        <span>페이지를 찾을 수 없습니다.</span>
      </div>

    </section>
    <!--section 1-->

  </div><!--Main role-->
</template>

<script>
  export default {
    name: 'a404',
    data: () => ({
      windowWidth: window.innerWidth,
    }),
    mounted () {
      /* Calculate browser width for handle video section */
      let that = this
      that.$nextTick(function () {
        window.addEventListener('resize', function (e) {
          that.windowWidth = window.innerWidth
        })
      })
    }
  }
</script>

<style lang="scss" scoped>

  /* section 1 start */
  .section_1 {
    width: 100%;
    background-color: #ffffff;
    text-align: center;
    color: #515151;
    font-family: Impact, sans-serif;
    z-index: 2000;
  }

  /* section 1 end */

  .lc_slogan {
    padding: 50px 0;
    background-color: #009da5;
    span {
      color: #fdfdfd;
      font-size: 38px;
      font-weight: bold;
      font-family: 'Nanums_regular', sans-serif;
      word-break: keep-all;
    }
  }
  @media (max-width: 835px) {
    .lc_slogan {
      span {
        font-size: 20px;
      }
    }
  }
</style>
