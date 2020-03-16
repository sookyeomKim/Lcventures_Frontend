<template>
  <div class="main_role" id="main_role"
       :style="this.$parent.$data.mix_data.slide_mover"
       @click="$parent.$options.methods.only_close">

    <!-- Mobile wrap -->
    <div v-if="windowWidth < 920" class="image_wrap_mobile" id="image_wrap_mobile">

      <section class="mobile_header">
        <!--<img src="../../assets/pages/landing/band/190618/mobile/header_bg.png" alt="LCVENTURES Band - header image"/>

        <div class="header_contents">
          <div class="header_logo">
            <router-link to="/">
              <img src="../../assets/pages/landing/band/190618/mobile/header_logo.png"
                   alt="LCVENTURES Band - header image"/>
            </router-link>
          </div>
          <div class="header_text">
            <router-link to="/">
              <img src="../../assets/pages/landing/band/190618/mobile/header_text.png"
                   alt="LCVENTURES Band - header image"/>
            </router-link>
          </div>
        </div>-->

      </section>

      <section class="mobile_main">
        <img class="mobile_main_img"
             src="../../assets/pages/landing/band/290619/mobile/00_main/mobile_main.jpg"
             alt="Introducing band advertisement product.">

        <div class="main_button_wrap">
          <div class="main_buttons">
            <button type="button" class="desktop_button"
                    @click="main_activation(1)"
                    @mouseover="main_button('in', 1)"
                    @mouseleave="main_button('out', 1)">
              <img v-if="page.activated == 1 || page.hover == 1"
                   src="../../assets/pages/landing/band/290619/mobile/00_main/btn/btn_on01.png"
                   alt="Social button on">
              <img v-else
                   src="../../assets/pages/landing/band/290619/mobile/00_main/btn/btn_off01.png"
                   alt="Social button off">
            </button>
            <button type="button" class="desktop_button"
                    @click="main_activation(2)"
                    @mouseover="main_button('in', 2)"
                    @mouseleave="main_button('out', 2)">
              <img v-if="page.activated == 2 || page.hover == 2"
                   src="../../assets/pages/landing/band/290619/mobile/00_main/btn/btn_on02.png"
                   alt="Feed button on">
              <img v-else
                   src="../../assets/pages/landing/band/290619/mobile/00_main/btn/btn_off02.png"
                   alt="Feed button">
            </button>
            <button type="button" class="desktop_button"
                    @click="main_activation(3)"
                    @mouseover="main_button('in', 3)"
                    @mouseleave="main_button('out', 3)">
              <img v-if="page.activated == 3 || page.hover == 3"
                   src="../../assets/pages/landing/band/290619/mobile/00_main/btn/btn_on03.png"
                   alt="Display button on">
              <img v-else
                   src="../../assets/pages/landing/band/290619/mobile/00_main/btn/btn_off03.png"
                   alt="Display button">
            </button>
          </div>
        </div>

      </section>

      <transition name="fade">
        <div class="active_wrap active_1" v-if="page.activated == 1" key="active_1">

          <section class="mobile_1">
            <img src="../../assets/pages/landing/band/290619/mobile/01_social/social_01.png"/>
          </section>

          <section class="mobile_2">
            <img src="../../assets/pages/landing/band/290619/mobile/01_social/social_02.jpg"/>
          </section>

          <section class="mobile_3">
            <img src="../../assets/pages/landing/band/290619/mobile/01_social/social_03.png"/>
          </section>

        </div>

        <div class="active_wrap active_2" v-if="page.activated == 2" key="active_2">

          <section class="mobile_1">
            <img src="../../assets/pages/landing/band/290619/mobile/02_native/01.jpg"/>
          </section>

          <section class="mobile_2">
            <img src="../../assets/pages/landing/band/290619/mobile/02_native/02.jpg"/>
          </section>

          <section class="mobile_3">
            <img src="../../assets/pages/landing/band/290619/mobile/02_native/03.jpg"/>
          </section>

        </div>

        <div class="active_wrap active_3" v-if="page.activated == 3" key="active_3">

          <section class="mobile_1">
            <img src="../../assets/pages/landing/band/290619/mobile/03_display/01.jpg"/>
          </section>

          <section class="mobile_2">
            <img src="../../assets/pages/landing/band/290619/mobile/03_display/02.jpg"/>
          </section>

          <section class="mobile_3">
            <img src="../../assets/pages/landing/band/290619/mobile/03_display/03.jpg"/>
          </section>

        </div>
      </transition>


      <section class="mobile_inquiry">
        <img src="../../assets/pages/landing/band/290619/mobile/00_main/inquiry/inquiry_bg.png"/>

        <div class="contents">
          <!--<div class="header">
            <img src="../../assets/pages/landing/band/290619/mobile/00_main/inquiry/inquiry_font.png"/>
          </div>-->

          <div class="content_1">

            <div class="desktop_form_1">

              <div class="form_button">
                <a href="tel:070-8855-8390" @click="activation_analysis('mobile-phone')">
                  <img src="../../assets/pages/landing/band/290619/mobile/00_main/inquiry/btn_tell.png"
                       alt="LCVENTURES Band - landing phone button">
                </a>
              </div>
              <div class="form_button">
                <a href="mailto:biz@lcventures.co.kr" @click="activation_analysis('mobile-email')">
                  <img src="../../assets/pages/landing/band/290619/mobile/00_main/inquiry/btn_email.png"
                       alt="LCVENTURES Band - landing email button">
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
    <!-- /Mobile wrap -->

    <!-- Desktop wrap -->
    <div v-else class="image_wrap_desktop" id="image_wrap_desktop">

      <section class="desktop_header">
        <!--<img class="header_bar_img"
             src="../../assets/pages/landing/band/290619/desktop/00_main/top_bar.png"
             alt="Header back ground image"/>

        <div class="header_contents">
          <div class="header_logo">
            <router-link to="/">
              <img class="header_logo_img"
                   src="../../assets/pages/landing/band/290619/desktop/00_main/top_logo.png"
                   alt="Header image - LCVENTURES"/>
            </router-link>
          </div>
        </div>-->

      </section>

      <section class="desktop_main">
        <img class="desktop_main_img"
             src="../../assets/pages/landing/band/290619/desktop/00_main/main_bg.png"
             alt="Introducing band advertisement product.">

        <div class="main_button_wrap">
          <div class="main_buttons">
            <button type="button" class="desktop_button"
                    @click="main_activation(1)"
                    @mouseover="main_button('in', 1)"
                    @mouseleave="main_button('out', 1)">
              <img v-if="page.activated == 1 || page.hover == 1"
                   src="../../assets/pages/landing/band/290619/desktop/00_main/btn/btn_on01.png"
                   alt="Social button on">
              <img v-else
                   src="../../assets/pages/landing/band/290619/desktop/00_main/btn/btn_off01.png"
                   alt="Social button off">
            </button>
            <button type="button" class="desktop_button"
                    @click="main_activation(2)"
                    @mouseover="main_button('in', 2)"
                    @mouseleave="main_button('out', 2)">
              <img v-if="page.activated == 2 || page.hover == 2"
                   src="../../assets/pages/landing/band/290619/desktop/00_main/btn/btn_on02.png"
                   alt="Feed button on">
              <img v-else
                   src="../../assets/pages/landing/band/290619/desktop/00_main/btn/btn_off02.png"
                   alt="Feed button">
            </button>
            <button type="button" class="desktop_button"
                    @click="main_activation(3)"
                    @mouseover="main_button('in', 3)"
                    @mouseleave="main_button('out', 3)">
              <img v-if="page.activated == 3 || page.hover == 3"
                   src="../../assets/pages/landing/band/290619/desktop/00_main/btn/btn_on03.png"
                   alt="Display button on">
              <img v-else
                   src="../../assets/pages/landing/band/290619/desktop/00_main/btn/btn_off03.png"
                   alt="Display button">
            </button>
          </div>
        </div>

      </section>

      <transition name="fade">
        <div class="active_wrap active_1" v-if="page.activated == 1" key="active_1">

          <section class="desktop_1">
            <img src="../../assets/pages/landing/band/290619/desktop/01_social/01/social_bg01(1920x948).png"/>

            <div class="contents">
              <div class="header">
                <img src="../../assets/pages/landing/band/290619/desktop/01_social/01/social_font01(615x213).png"/>
              </div>
              <div class="content_1">
                <img src="../../assets/pages/landing/band/290619/desktop/01_social/01/social_box01(1068x545).png"/>
              </div>
            </div>
          </section>

          <section class="desktop_2">
            <img src="../../assets/pages/landing/band/290619/desktop/01_social/02/social_bg02(1920x1631).png"/>
            <div class="contents">
              <div class="header">
                <img src="../../assets/pages/landing/band/290619/desktop/01_social/02/social_font02.png"/>
              </div>
              <div class="content_1">
                <img src="../../assets/pages/landing/band/290619/desktop/01_social/02/social_box02(984x1259).png"/>
              </div>
            </div>
          </section>

          <section class="desktop_3">
            <img src="../../assets/pages/landing/band/290619/desktop/01_social/03/social_bg03(1920x808).png"/>

            <div class="contents">

              <div class="header">
                <img src="../../assets/pages/landing/band/290619/desktop/01_social/03/social_font03.png"/>
              </div>

              <div class="content_1">
                <img src="../../assets/pages/landing/band/290619/desktop/01_social/03/social_box03.png"/>
              </div>

            </div>

          </section>

        </div>

        <div class="active_wrap active_2" v-if="page.activated == 2" key="active_2">

          <section class="desktop_1">
            <img src="../../assets/pages/landing/band/290619/desktop/02_native/01/native_bg01.png"/>

            <div class="contents">
              <div class="header">
                <img src="../../assets/pages/landing/band/290619/desktop/02_native/01/native_font01.png"/>
              </div>
              <div class="content_1">
                <img src="../../assets/pages/landing/band/290619/desktop/02_native/01/native_box01.png"/>
              </div>
            </div>
          </section>

          <section class="desktop_2">
            <img src="../../assets/pages/landing/band/290619/desktop/02_native/02/native_bg02.png"/>
            <div class="contents">
              <div class="header">
                <img src="../../assets/pages/landing/band/290619/desktop/02_native/02/native_font02.png"/>
              </div>
              <div class="content_1">
                <img src="../../assets/pages/landing/band/290619/desktop/02_native/02/native_box02.png"/>
              </div>
            </div>
          </section>

          <section class="desktop_3">
            <img src="../../assets/pages/landing/band/290619/desktop/02_native/03/native_bg03.png"/>

            <div class="contents">

              <div class="header">
                <img src="../../assets/pages/landing/band/290619/desktop/02_native/03/native_font03.png"/>
              </div>

              <div class="content_1">
                <img src="../../assets/pages/landing/band/290619/desktop/02_native/03/native_box03.png"/>
              </div>

            </div>

          </section>

        </div>

        <div class="active_wrap active_3" v-if="page.activated == 3" key="active_3">

          <section class="desktop_1">
            <img src="../../assets/pages/landing/band/290619/desktop/03_display/01/display_bg01.png"/>

            <div class="contents">
              <div class="header">
                <img src="../../assets/pages/landing/band/290619/desktop/03_display/01/display_font01.png"/>
              </div>
              <div class="content_1">
                <img src="../../assets/pages/landing/band/290619/desktop/03_display/01/display_box01.png"/>
              </div>
            </div>
          </section>

          <section class="desktop_2">
            <img src="../../assets/pages/landing/band/290619/desktop/03_display/02/display_bg02.png"/>
            <div class="contents">
              <div class="header">
                <img src="../../assets/pages/landing/band/290619/desktop/03_display/02/display_font02.png"/>
              </div>
              <div class="content_1">
                <img src="../../assets/pages/landing/band/290619/desktop/03_display/02/display_box02.png"/>
              </div>
            </div>
          </section>

          <section class="desktop_3">
            <img src="../../assets/pages/landing/band/290619/desktop/03_display/03/display_bg03.png"/>

            <div class="contents">

              <div class="header">
                <img src="../../assets/pages/landing/band/290619/desktop/03_display/03/display_font03.png"/>
              </div>

              <div class="content_1">
                <img src="../../assets/pages/landing/band/290619/desktop/03_display/03/display_box03.png"/>
              </div>

            </div>

          </section>

        </div>
      </transition>
      <section class="desktop_inquiry">
        <img src="../../assets/pages/landing/band/290619/desktop/00_main/inquiry/inquiry_bg.png"/>

        <div class="contents">
          <div class="header">
            <img src="../../assets/pages/landing/band/290619/desktop/00_main/inquiry/inquiry_font.png"/>
          </div>

          <div class="content_1">

            <div class="desktop_form_1">

              <div class="form_button">
                <a href="tel:070-8855-8390" @click="activation_analysis('desktop-phone')">
                  <img src="../../assets/pages/landing/band/290619/desktop/00_main/inquiry/btn_tell.png"
                       alt="LCVENTURES Band - landing phone button">
                </a>
              </div>
              <div class="form_button">
                <a href="mailto:biz@lcventures.co.kr" @click="activation_analysis('desktop-email')">
                  <img src="../../assets/pages/landing/band/290619/desktop/00_main/inquiry/btn_email.png"
                       alt="LCVENTURES Band - landing email button">
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>
    </div>
    <!-- /Desktop wrap -->

  </div>
  <!-- /Main role -->
</template>

<script>
  export default {
    name: 'landing_kakao',
    data: () => ({
      windowWidth: window.innerWidth,
      page: {
        activated: 1,
        hover: 0,
        button: {
          desk_1: 'on',
          desk_2: 'off',
          desk_3: 'off',
        }
      }
    }),
    mounted() {
      /* Calculate browser width for handle video section */
      let that = this
      that.$nextTick(function () {
        window.addEventListener('resize', function (e) {
          that.windowWidth = window.innerWidth
        })
      })
      this.landing_set()

      // 28 June 2019 installed
      this.install_analysis_script('naver')
    },
    methods: {
      install_analysis_script(option) {
        if (option === 'naver') {
          let naver_script = document.createElement('script')
          naver_script.setAttribute('src', '//wcs.naver.net/wcslog.js')
          document.head.appendChild(naver_script)
        }
      },
      activation_analysis(option) {
        let _nasa = {}
        _nasa['cnv'] = wcs.cnv('4', option)
        console.log('Naver analysis script is activated by', option)
      },
      main_activation(number) {
        this.page.activated = number
        this.page.hover = 0
      },
      main_button(option, number) {
        if (option == 'in') {
          this.page.hover = number
        } else if (option == 'out') {
          this.page.hover = 0
        }
      },
      landing_set() {
        this.$parent.$data.mix_data.video_flag = false
        // this.$parent.$data.mix_data.header_flag = false
      }
    },
    beforeDestroy() {
      this.$parent.$data.mix_data.video_flag = true
      // this.$parent.$data.mix_data.header_flag = true
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
    font-size: 0;
    z-index: 2000;

    img {
      width: 100%;
    }
  }

  .active_wrap {
    position: relative;
    width: 100%;
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
    width: 100%;
    height: 60px;
    // margin-bottom: -1%;
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

  .mobile_main {
    .mobile_main_img {
      // position: relative;
    }

    .main_button_wrap {
      width: 100%;
      position: absolute;
      bottom: 0;

      .main_buttons {
        /*position: relative;*/
        width: 100%;
        margin: 0 auto;
        padding: 0 5px;

        .desktop_button {
          position: relative;
          width: 33.3%;
          margin: 0 auto;
          border: none;
          background: transparent;
          cursor: pointer;
          padding: 0 5px;

          img {
            position: relative;
            top: 0;
            left: 0;
          }
        }
      }
    }
  }

  .mobile_inquiry {
    position: relative;

    .contents {
      position: absolute;
      width: 100%;
      top: 0;

      .header {
        width: 10%;
        margin: 0 auto 0;
      }

      .content_1 {
        width: 85%;
        margin: 33% auto 0;

        .desktop_form_1 {
          position: relative;

          .form_button {
            display: inline-block;
            width: 50%;
          }
        }
      }
    }
  }


  /*
  ===========
  Active 1
  ===========
  */
  .active_1 {
    .mobile_1 {
      position: relative;

      .contents {
        position: absolute;
        width: 100%;
        top: 0;

        .header {
          width: 32%;
          margin: 6.6% auto 0;
        }

        .content_1 {
          width: 55.6%;
          margin: 3.9% auto 0;
        }
      }
    }

    .mobile_2 {
      position: relative;

      .contents {
        position: absolute;
        width: 100%;
        top: 0;

        .header {
          width: 17.9%;
          margin: 6.6% auto 0;
        }

        .content_1 {
          width: 50%;
          margin: 4.4% auto 0;
        }
      }
    }

    .mobile_3 {
      position: relative;

      .contents {
        position: absolute;
        width: 100%;
        top: 0;

        .header {
          width: 17.8%;
          margin: 7% auto 0;
        }

        .content_1 {
          width: 50%;
          margin: 3.8% auto 0;
        }
      }
    }
  }

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
    max-width: 1920px;
    margin: 0 auto;
  }

  /* Header section */
  .desktop_header {
    width: 100%;
    height: 60px;

    .header_bar_img {
      position: absolute;
      left: 0;
      top: 0;
    }

    .header_contents {
      font-size: 0;
      width: 50%;
      height: 100%;
      position: relative;
      top: 0;
      margin: 0 auto;

      .header_logo {
        position: relative;
        width: 5.3%;
        padding: 5px 0;
        vertical-align: middle;

        img {
          min-width: 100%;
          min-height: 100%;
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
          width: 20%;
        }
      }
    }
  }

  /* /Header section */

  .desktop_main {
    .desktop_main_img {
      // position: relative;
    }

    .main_button_wrap {
      width: 100%;
      position: absolute;
      bottom: 0;

      .main_buttons {
        /*position: relative;*/
        width: 50%;
        margin: 0 auto;

        .desktop_button {
          position: relative;
          width: 33.3%;
          margin: 0 auto;
          border: none;
          background: transparent;
          cursor: pointer;
          padding: 0 2px;

          img {
            position: relative;
            top: 0;
            left: 0;
          }
        }
      }
    }
  }

  .desktop_inquiry {
    position: relative;

    .contents {
      position: absolute;
      width: 100%;
      top: 0;

      .header {
        width: 10%;
        margin: 0 auto 0;
      }

      .content_1 {
        width: 50%;
        margin: 3.6% auto 0;

        .desktop_form_1 {
          position: relative;

          .form_button {
            display: inline-block;
            width: 50%;
          }
        }
      }
    }
  }

  /*
  ===========
  Active 1
  ===========
  */
  .active_1 {
    .desktop_1 {
      position: relative;

      .contents {
        position: absolute;
        width: 100%;
        top: 0;

        .header {
          width: 32%;
          margin: 6.6% auto 0;
        }

        .content_1 {
          width: 55.6%;
          margin: 3.9% auto 0;
        }
      }
    }

    .desktop_2 {
      position: relative;

      .contents {
        position: absolute;
        width: 100%;
        top: 0;

        .header {
          width: 17.9%;
          margin: 6.6% auto 0;
        }

        .content_1 {
          width: 50%;
          margin: 4.4% auto 0;
        }
      }
    }

    .desktop_3 {
      position: relative;

      .contents {
        position: absolute;
        width: 100%;
        top: 0;

        .header {
          width: 17.8%;
          margin: 7% auto 0;
        }

        .content_1 {
          width: 50%;
          margin: 3.8% auto 0;
        }
      }
    }
  }

  /*
  ===========
  Active 2
  ===========
  */
  .active_2 {
    .desktop_1 {
      position: relative;

      .contents {
        position: absolute;
        width: 100%;
        top: 0;

        .header {
          width: 29.8%;
          margin: 6.6% auto 0;
        }

        .content_1 {
          width: 39.4%;
          margin: 3.9% auto 0;
        }
      }
    }

    .desktop_2 {
      position: relative;

      .contents {
        position: absolute;
        width: 100%;
        top: 0;

        .header {
          width: 17.8%;
          margin: 6.6% auto 0;
        }

        .content_1 {
          width: 50%;
          margin: 4.4% auto 0;
        }
      }
    }

    .desktop_3 {
      position: relative;

      .contents {
        position: absolute;
        width: 100%;
        top: 0;

        .header {
          width: 17.8%;
          margin: 7% auto 0;
        }

        .content_1 {
          width: 50%;
          margin: 3.8% auto 0;
        }
      }
    }
  }

  /*
  ===========
  Active 3
  ===========
  */
  .active_3 {
    .desktop_1 {
      position: relative;

      .contents {
        position: absolute;
        width: 100%;
        top: 0;

        .header {
          width: 24.6%;
          margin: 6.6% auto 0;
        }

        .content_1 {
          width: 50%;
          margin: 3.9% auto 0;
        }
      }
    }

    .desktop_2 {
      position: relative;

      .contents {
        position: absolute;
        width: 100%;
        top: 0;

        .header {
          width: 25%;
          margin: 6.6% auto 0;
        }

        .content_1 {
          width: 42.9%;
          margin: 4.4% auto 0;
        }
      }
    }

    .desktop_3 {
      position: relative;

      .contents {
        position: absolute;
        width: 100%;
        top: 0;

        .header {
          width: 24.8%;
          margin: 7% auto 0;
        }

        .content_1 {
          width: 50%;
          margin: 3.8% auto 0;
        }
      }
    }

    .desktop_4 {
      position: relative;

      .contents {
        position: absolute;
        width: 100%;
        top: 0;

        .header {
          width: 10%;
          margin: 0 auto 0;
        }

        .content_1 {
          width: 50%;
          margin: 3.6% auto 0;

          .desktop_form_1 {
            position: relative;

            .form_button {
              display: inline-block;
              width: 50%;
            }
          }
        }
      }
    }
  }

  /*
  ====================================================
   /Desktop section
  ====================================================
  */
</style>
