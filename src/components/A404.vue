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

      <div class="division_bar"></div>

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

  .main_title {
    .table {
      position: relative;
      width: 320px;
      z-index: 500;
      /*padding: 20px 0 0 5%;*/
      padding: 20px 0 0 10px;
      div {
        padding: 4px 0;
        font-size: 17px;
      }
    }
  }

  /* section 1 start */
  .section_1, .section_2, .section_3, .section_4 {
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
    .division_bar {
      width: 60px;
      height: 2px;
      background-color: #fdfdfd;
      margin: 10px auto 15px;
    }
    .slogan_wrap {
      display: inline-block;
      font-family: 'Nanums_regular', sans-serif;
      color: #fdfdfd;
      font-size: 15px;
      padding: 0 4px;
    }
  }
  @media (max-width: 835px) {
    .lc_slogan {
      span {
        font-size: 20px;
      }
    }
  }

  .logo_explain {
    padding: 100px 0;
    text-align: center;
    &:after {
      content: '';
      display: block;
      clear: both;
    }
  }

  .logo_floor_1 {
    img {
      width: 95%;
      max-width: 950px;
      padding: 0 0 20px;
    }
  }

  .logo_floor_2 {
    font-family: 'Nanums_regular', sans-serif;
    font-size: 16px;
    padding: 4px 0;
    p {
      display: inline-block;
      padding: 3px 2px;
    }
  }

  .history {
    position: relative;
    background-color: #eafcfc;
    padding: 20px 0;
  }

  .history_image {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    min-width: 1200px;
    margin: auto;
  }
  @media (min-width: 1700px) {
    .history_image {
      left: unset;
      transform: unset;
      width: 100%;
      max-width: 1600px;
    }
  }
  .history_image_m {
    width: 100%;
  }

  .map_wrap {
    padding: 100px 0;
  }

  .daum_map {
    position: relative;
    width: 92%;
    max-width: 1300px;
    height: 480px;
    margin: auto;
  }

  .map_info {
    width: 92%;
    max-width: 1300px;
    min-height: 25px;
    color: #fdfdfd;
    font-size: 17px;
    background-color: rgba(25,25,25,0.9);
    margin: 0 auto;
    padding: 5px 2px;
  }
</style>
