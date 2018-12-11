<template>
  <!-- Video Area Started -->
  <div class="video_wrap" id="video_wrap"
       :style="this.$parent.$data.mix_data.slide_mover"
       @click="$parent.$options.methods.only_close">

    <!-- v-if -->
    <div class="video_basket" id="video_basket" v-if="windowWidth > 835">

      <!-- Youtube -->
      <iframe class="video" id="video" type="text/html"
              src="https://www.youtube.com/embed/bDmuCtaRcZM?&autoplay=1&loop=1&playlist=bDmuCtaRcZM&showinfo=0&fs=0&disablekb=1&vq=auto&controls=0&rel=0&iv_load_policy=3&mute=1&playsinline=1&modestbranding=1"
              allow="autoplay" frameborder="0" volume="0" allowfullscreen webkitallowfullscreen mozallowfullscreen>
      </iframe>

    </div>

    <!-- v-else -->
    <div class="video_basket_m" id="video_basket_m" v-else>
      <!-- Cover Image when replaced instead video -->

      <img class="video_cover" src="./assets/pages/home/m_main_banner.jpg" alt="Main Cover Image" />

      <!-- mobile square video (failed. unable autoplay video in mobile environment.) -->
      <!--
      <iframe class="video" id="video_m" type="text/html"
              src="https://www.youtube.com/embed/AWnAHBqNqG0?&autoplay=1&loop=1&playlist=bDmuCtaRcZM&showinfo=0&fs=0&disablekb=1&vq=auto&controls=0&rel=0&iv_load_policy=3&mute=1&playsinline=1&modestbranding=1"
              allow="autoplay" frameborder="0" volume="0" allowfullscreen webkitallowfullscreen mozallowfullscreen>
      </iframe>
      -->

    </div>

    <div class="guide_button">
      <div class="guide_inner">
        <router-link class="gtn" to="/consult">
          <img src="./assets/common/talk_white_01.png" alt="Consult button image.">
          <p>문의하기</p>
        </router-link>
        <div class="gtn payment_btn" href="#" @click="$parent.$options.methods.payment_open" v-if="windowWidth > 835">
          <img src="./assets/common/payment.png" alt="Payment image" class="payment_image">
          <p>결제하기</p>
        </div>
        <a class="gtn" :href="introduce" download="엘씨벤처스 - 회사소개" target="_blank">
          <img src="./assets/common/down_white_01.png" alt="Introduce file download button image.">
          <p>회사소개서 다운받기</p>
        </a>
      </div>
    </div>

    <div class="guide_to_scroll">
      <img class="down_img" src="./assets/common/scroll_down_01.png" alt="Scroll down image">
      <!--<img class="down_img" src="./assets/pages/home/home_scroll.png" alt="Scroll down image">-->
    </div>

  </div>

</template>

<script>
    export default {
      name: 'app-video',
      data: function () {
        return {
          windowWidth: window.innerWidth,
          introduce: require('./assets/common/files/180814_lcventures_introduce.pdf')
        }
      },
      mounted () {
        /* Calculate browser width for handle video section */
        let that = this
        this.$nextTick(function () {
          window.addEventListener('resize', function (e) {
            that.windowWidth = window.innerWidth
          })
        })
      }
    }
</script>

<style lang="scss" scoped>

  /* Video wrap -> Video basket -> Video(iFrame) */
  .video_wrap {
    position: absolute;
    width: 100%;
    height: 100vh;
    background: #000;
    top: 0; right: 0; bottom: 0; left: 0;
    overflow: hidden;
    z-index: 10;
    transition: all 350ms cubic-bezier(.83,.01,.46,.86);
  }

  .video_basket {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    background-color: black;
    opacity: 0.5;
    z-index: 30;
  }

  .video_basket_m {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    max-height: 100vh;
    pointer-events: none;
    background-color: black;
    opacity: 0.5;
    z-index: 30;
  }

  .video {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 20;
  }

  .video_cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    min-width: 100%;
    min-height: 100%;
    z-index: 30;
    background-size: cover;
    object-fit: cover;
  }

  /* Prepare mobile layout */
  @media (max-width: 835px) {
    .video_wrap {
      height: 100vw;
      max-height: 100vh;
    }
  }/*=*/

  /* Stretch Video */
  @media (min-aspect-ratio: 16/9) {
    .video_basket {
      height: 300%;
      top: -100%;
    }
  }/*=*/
  @media (max-aspect-ratio: 16/9) {
    .video_basket {
      width: 300%;
      left: -100%;
    }
  }/*=*/

  /*
  ===============================================
    Video End
  ===============================================
  */

  // Button area
  .guide_button {
    position: relative;
    top: calc(5% - 190px);
    z-index: 9000;
    .guide_inner {
      max-width: 1300px;
      margin: 0 auto;
      .gtn {
        position: relative;
        display: block;
        width: 200px;
        height: 35px;
        line-height: 33px;
        margin: 5px 35px 5px auto;
        border: 1px solid #fdfdfd;
        background-color: transparent;
        color: #fdfdfd;
        text-align: left;
        cursor: pointer;
        z-index: 9999;
        padding: 2px 5px;
        vertical-align: top;
        &:hover, &:active {
          background-color: rgba(25, 25, 25, 0.7);
          color: rgba(200,200,200, 0.8);
          transition: all 350ms cubic-bezier(.83,.01,.46,.86);
        }
        img {
          float: left;
          width: 30px;
          height: 30px;
          margin: 0 5px 0 0;
          vertical-align: top;
        }
        p {
          float: left;
          height: 35px;
          line-height: 31px;
        }
        &:after {
          content: '';
          display: block;
          clear: both;
        }
        .payment_image {
          padding: 6px 4px;
        }
      }
    }
  }

  @media (min-aspect-ratio: 16/9) and (min-width: 835px) {
    .guide_button {
      top: calc(-200% - 140px);
    }
  }/*=*/

  /* Down side arrow with animation */
  .guide_to_scroll {
    position: relative;
    display: block;
    width: 100%;
    top: calc(-145px);
    text-align: center;
    z-index: 8000;
  }

  @media (min-aspect-ratio: 16/9) {
    .guide_to_scroll {
      top: calc(-200% - 140px);
    }
  }

  .guide_text {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    padding: 0 5px !important;
    font-family: 'Nanums_regular', sans-serif;
    font-size: 16px;
    line-height: 20px;
    color: #fdfdfd;
  }
  .down_img {
    width: 50px;
    height: 40px;
    animation: down_there 1500ms infinite ease-in-out;
  }

</style>
