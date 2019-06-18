<template>
  <div class="main_role" id="main_role"
       :style="this.$parent.$data.mix_data.slide_mover"
       @click="$parent.$options.methods.only_close">

    <!-- Mobile wrap -->
    <div v-if="windowWidth < 920" class="image_wrap_mobile" id="image_wrap_mobile">

      <section class="mobile_header">
        <img src="../assets/pages/landing/band/190618/mobile/header_bg.png" alt="LCVENTURES Band - header image"/>

        <div class="header_contents">
          <div class="header_logo">
            <router-link to="/">
              <img src="../assets/pages/landing/band/190618/mobile/header_logo.png" alt="LCVENTURES Band - header image"/>
            </router-link>
          </div>
          <div class="header_text">
            <router-link to="/">
              <img src="../assets/pages/landing/band/190618/mobile/header_text.png" alt="LCVENTURES Band - header image"/>
            </router-link>
          </div>
        </div>

      </section>

      <section class="mobile_1">
        <img src="../assets/pages/landing/band/190618/mobile/01.png" alt="LCVENTURES Band - landing image"/>
      </section>

      <section class="mobile_2">
        <img src="../assets/pages/landing/band/190618/mobile/02.jpg" alt="LCVENTURES Band - landing image"/>
      </section>

      <section class="mobile_3">
        <img src="../assets/pages/landing/band/190618/mobile/03.jpg" alt="LCVENTURES Band - landing image"/>
      </section>

      <section class="mobile_4">
        <img src="../assets/pages/landing/band/190618/mobile/04.png" alt="LCVENTURES Band - landing image"/>
        <div class="mobile_form_1">
          <a href="tel:070-8855-8390">
            <img src="../assets/pages/landing/band/190618/mobile/btn_01_phone.png" alt="LCVENTURES Band - landing phone button">
          </a>
          <a href="mailto:biz@lcventures.co.kr">
            <img src="../assets/pages/landing/band/190618/mobile/btn_02_email.png" alt="LCVENTURES Band - landing email button">
          </a>
        </div>
      </section>

    </div>
    <!-- /Mobile wrap -->

    <!-- Desktop wrap -->
    <div v-else class="image_wrap_desktop" id="image_wrap_desktop">

      <section class="desktop_header">
        <img src="../assets/pages/landing/band/190618/desktop/header/header_bg.png" alt="LCVENTURES Band - header back ground image"/>
        <div class="header_contents">
          <div class="header_logo">
            <router-link to="/">
              <img src="../assets/pages/landing/band/190618/desktop/header/header_logo.png" alt="LCVENTURES Band - header image"/>
            </router-link>
          </div>
        </div>
      </section>

      <section class="desktop_1">
        <img src="../assets/pages/landing/band/190618/desktop/01/01_bg.png"/>

        <div class="logo">
          <router-link to="/">
            <img src="../assets/pages/landing/band/190618/desktop/01/01_logo.png"/>
          </router-link>
        </div>

        <div class="content">
          <img src="../assets/pages/landing/band/190618/desktop/01/01_font.png"/>
        </div>
      </section>

      <section class="desktop_2">
        <img src="../assets/pages/landing/band/190618/desktop/02/02_bg.png"/>
        <div class="content">
          <img src="../assets/pages/landing/band/190618/desktop/02/02_fontbox.png"/>
        </div>
      </section>

      <section class="desktop_3">
        <img src="../assets/pages/landing/band/190618/desktop/03/03_bg.png"/>
        <div class="content">
          <img src="../assets/pages/landing/band/190618/desktop/03/03_fontbox.png"/>
        </div>
      </section>

      <section class="desktop_4">
        <img src="../assets/pages/landing/band/190618/desktop/04/04_bg.png"/>
        <div class="content_1">
          <img src="../assets/pages/landing/band/190618/desktop/04/04_content.png"/>
        </div>
        <div class="content_2">
          <img src="../assets/pages/landing/band/190618/desktop/04/04_font.png"/>
        </div>
        <div class="desktop_form_1">
          <a href="tel:070-8855-8390">
            <img src="../assets/pages/landing/band/190618/mobile/btn_01_phone.png" alt="LCVENTURES Band - landing phone button">
          </a>
          <a href="mailto:biz@lcventures.co.kr">
            <img src="../assets/pages/landing/band/190618/mobile/btn_02_email.png" alt="LCVENTURES Band - landing email button">
          </a>
        </div>
      </section>

    </div>
    <!-- /Desktop wrap -->

  </div>
  <!-- /Main role -->
</template>

<script>
  export default {
    name: 'landing_band',
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
      this.landing_set()
    },
    methods: {
      landing_set () {
        this.$parent.$data.mix_data.video_flag = false
        this.$parent.$data.mix_data.header_flag = false
      }
    },
    beforeDestroy() {
      this.$parent.$data.mix_data.video_flag = true
      this.$parent.$data.mix_data.header_flag = true
    }
  }
</script>

<style lang="scss" scoped>

  /* Global section */
  section {
    position: relative;
    width: 100%;
    background-color: #ffffff;
    text-align: center;
    color: #515151;
    font-family: Impact, sans-serif;
    z-index: 2000;
    img {
      width: 100%;
    }
  }
  /* /Global section */

  /*
  ====================================================
  Mobile section
  ====================================================
  */

  /* Mobile wrap */
  #image_wrap_mobile {
    position: relative;
    width: 100%;
    min-width: 320px;
    max-width: 950px;
    margin: 0 auto;
  }
  /* /Mobile wrap */

  /* Header section mobile */
  .mobile_header {
    .header_contents {
      padding: 0 2%;
      font-size: 0;
      width: 100%;
      position: absolute;
      top: 0;
      margin-top: 1.5%;
      .header_logo {
        width: 50%;
        display: inline-block;
        vertical-align: middle;
        text-align: left;
        img {
          width: 19%;
        }
      }
      .header_text {
        width: 50%;
        display: inline-block;
        vertical-align: middle;
        text-align: right;
        img {
          width: 45%;
        }
      }
    }
  }
  /* /Header section mobile */

  /* Mobile form 1 */
  .mobile_4 {
    .mobile_form_1 {
      position: absolute;
      width: 100%;
      margin-top: -30%;
      a {
        position: relative;
        display: block;
        width: 70%;
        margin: 1% auto 0;
        border-radius: 10px;
        z-index: 100;
        &:hover {
          box-shadow: 0 0 10px 5px rgba(0,0,0,.3);
        }
      }
      img {
        position: relative;
        z-index: 50;
      }
    }
  }
  /* /Mobile form 1 */

  /*
  ====================================================
   /Mobile section
  ====================================================
  */

  /*
  ====================================================
  Desktop section
  ====================================================
  */

  #image_wrap_desktop {
    position: relative;
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
  }

  /* Header section */
  .desktop_header {
    .header_contents {
      padding: 0 2%;
      font-size: 0;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      // margin-top: 1.5%;
      .header_logo {
        position: relative;
        width: 60%;
        height: calc(100% - 7px);
        padding: 5px 0;
        display: inline-block;
        vertical-align: middle;
        text-align: left;
        img {
          width: unset;
          height: 100%;
        }
      }
      .header_text {
        position: relative;
        width: 50%;
        height: calc(100% - 7px);
        padding: 10px 0;
        display: inline-block;
        vertical-align: middle;
        text-align: right;
        img {
          width: unset;
          height: 100%;
        }
      }
    }
  }
  /* /Header section */

  .desktop_1 {
    position: relative;
    .logo {
      position: absolute;
      width: 25%;
      top: 10%;
      left: 50%;
      transform: translateX(-50%);
    }

    .content {
      position: absolute;
      width: 28%;
      top: 50%;
      right: 20%;
      transform: translateY(-50%);
    }
  }

  .desktop_2 {
    .content {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      img {
        position: relative;
        width: 65%;
        top: 50%;
        transform: translateY(-49%);
      }
    }
  }

  .desktop_3 {
    .content {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      img {
        position: relative;
        width: 65%;
        top: 50%;
        transform: translateY(-49%);
      }
    }
  }

  .desktop_4 {
    .content_1 {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      img {
        position: relative;
        width: 65%;
        top: 5%;
      }
    }
    .content_2 {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      img {
        position: relative;
        width: 13%;
        top: 65%;
      }
    }
    .desktop_form_1 {
      position: absolute;
      width: 100%;
      top: 73%;
      a {
        position: relative;
        display: block;
        width: 45%;
        margin: 1% auto 0;
        border-radius: 10px;
        z-index: 100;
        &:hover {
          box-shadow: 0 0 10px 5px rgba(0,0,0,.3);
        }
      }
      img {
        position: relative;
        z-index: 50;
      }
    }
  }

  /*
  ====================================================
   /Desktop section
  ====================================================
  */
</style>
