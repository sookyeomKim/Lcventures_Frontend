<template>
  <!-- Video Area Started -->
  <div class="video_wrap" id="video_wrap"
       :style="this.$parent.$data.mix_data.slide_mover"
       @click="$parent.$options.methods.only_close">
    <div class="video_basket" id="video_basket">

      <!-- Youtube -->

      <iframe v-if="windowWidth > 835" class="video" id="video" type="text/html"
              src="https://www.youtube.com/embed/bDmuCtaRcZM?&autoplay=1&loop=1&playlist=bDmuCtaRcZM&showinfo=0&fs=0&disablekb=1&vq=auto&controls=0&rel=0&iv_load_policy=3&mute=1"
              allow="autoplay" frameborder="0" volume="0" allowfullscreen webkitallowfullscreen mozallowfullscreen>
      </iframe>

      <!-- Vimeo -->
<!--
      <iframe v-if="windowWidth > 835" class="video" id="video"
              src="https://player.vimeo.com/video/221257502?autoplay=1&loop=1&color=ffffff&background=1&title=0&byline=0&portrait=0&controls=0"
              width="100%" height="100%" frameborder="0" volume="0" webkitallowfullscreen mozallowfullscreen allowfullscreen>
      </iframe>
-->
      <!-- Video file -->
<!--
      <video v-if="windowWidth > 835" class="video" id="video" loop autoplay>
        <source src="./assets/common/files/lc_sample.mp4" type="video/mp4">
        <p>Your browser does not support the video tag.</p>
      </video>
-->

      <!-- Cover Image when replaced instead video -->
      <img v-else class="video_cover" src="./assets/pages/home/unsplash2.jpg" alt="Main Cover Image" />

    </div>

    <div class="guide_to_scroll">
      <!--<p class="guide_text">엘씨벤처스 더 보기</p>-->
      <img class="down_img" src="./assets/common/scroll_down.png" alt="Scroll down image">
      <!--<img class="down_img" src="./assets/pages/home/home_scroll.png" alt="Scroll down image">-->
    </div>

    <div class="guide_button">
      <router-link class="gtn" to="/consult">
        <img src="./assets/common/talk_white.png" alt="Consult button image.">
        <p>문의하기</p>
      </router-link>
      <a class="gtn" href="./assets/common/files/aia_ppt.pptx" download>
        <img src="./assets/common/down_white.png" alt="Introduce file download button image.">
        <p>회사소개서 다운받기</p>
      </a>
    </div>

  </div>

</template>

<script>
    export default {
      name: 'app-video',
      data: function () {
        return {
          windowWidth: window.innerWidth
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
    z-index: 30;
    background-size: cover;
    object-fit: cover;
  }

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

  /* Down side arrow with animation */
  .guide_to_scroll {
    position: absolute;
    display: block;
    width: 100%;
    top: calc(100vh - 60px);
    text-align: center;
    z-index: 8000;
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
    /*width: 80px;
    height: 70px;*/
    /* If image color is black */
    filter: invert(1);
    animation: down_there 1500ms infinite ease-in-out;
  }

  .guide_button {
    position: absolute;
    top: calc(100vh - 160px);
    right: 5%;
    z-index: 9000;
    .gtn {
      position: relative;
      display: block;
      width: 200px;
      height: 35px;
      line-height: 33px;
      margin: 5px 0;
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
        filter: invert(1);
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
    }
  }
</style>
