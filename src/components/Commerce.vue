<template>
  <div class="main_role" id="main_role"
       :style="this.$parent.$data.mix_data.slide_mover"
       @click="$parent.$options.methods.only_close">

    <!-- Main Context on video wrap -->
    <div class="main_title">
      <h2>프로젝트를 시작해 보세요</h2>
      <span>- C</span>
      <span>O</span>
      <span>M</span>
      <span>M</span>
      <span>E</span>
      <span>R</span>
      <span>C</span>
      <span>E</span>
    </div>

    <section class="section_2">
      <div class="section_2_bg">
        <div class="section_2_contents">
          <div class="section_2_text_wrap"><p class="section_2_normal">엘씨벤처스에서는&nbsp;</p><p  class="section_2_special">다양한 광고제안</p><p class="section_2_normal">을</p></div>
          <div class="section_2_text_wrap last_wrap"><p class="section_2_special">한번에&nbsp;</p><p class="section_2_normal">받아 보실 수 있습니다</p></div>
          <div class="section_2_image_wrap">
            <router-link to="/landing/band">
              <img src="../assets/pages/projects/section_2/01_1.jpg" alt="marketing platform image 1">
            </router-link>
            <img src="../assets/pages/projects/section_2/02.jpg" alt="marketing platform image 2">
          </div>
          <div class="section_2_image_wrap">
            <img src="../assets/pages/projects/section_2/03.jpg" alt="marketing platform image 3">
            <img src="../assets/pages/projects/section_2/04.jpg" alt="marketing platform image 4">
          </div>
        </div>
      </div>
    </section>

    <section>

    </section>

  </div>
</template>

<script>
    export default {
        name: "Commerce"
    }
</script>

<style lang="scss" scoped>
  .main_title {
    .table {
      position: relative;
      width: 320px;
      z-index: 500;
      padding: 20px 0 0 5%;
      div {
        padding: 4px 0;
        font-size: 17px;
      }
    }
  }

  .section_first, .section_1, .section_2, .section_3, .section_4 {
    width: 100%;
    background-color: #ffffff;
    text-align: center;
    color: #515151;
    font-family: Impact, sans-serif;
    z-index: 2000;
  }


  .section_2 {
    width: 100%;
  }

  .section_2_bg {
    width: 100%;
    background-image: url('../assets/pages/projects/section_2/section_bg.jpg');
    background-size: cover;
    background-position: 50% 50%;
    background-attachment: fixed;
    padding: 100px 0;
  }

  @media (max-width: 835px) {
    .section_2_bg {
      background-attachment: unset;
    }
  }

  .section_2_contents {
    .section_2_text_wrap {
      font-size: 24px;
      line-height: 30px;
      .section_2_normal {
        display: inline-block;
        color: #fafafa;
      }
      .section_2_special {
        display: inline-block;
        color: #09c0c8;
        font-weight: bold;
      }
    }
    .last_wrap {
      padding-bottom: 45px;
    }
  }

  .section_2_image_wrap {
    width: 100%;
    max-width: 1100px;
    margin: auto;
    img {
      width: calc(48%);
      padding: 1%;
      transition: all 200ms ease-in-out;
      &:hover, &:active {
        transform: scale(1.02);
      }
    }
  }

  @media (max-width: 835px) {
    .section_2_contents {
      .section_2_text_wrap {
        font-size: 20px;
        line-height: 25px;
      }
      .last_wrap {
        padding-bottom: 30px;
      }
    }
    .section_2_image_wrap {
      img {
        width: calc(87%);
        padding: 1%;
      }
    }
  }/* media */
</style>
