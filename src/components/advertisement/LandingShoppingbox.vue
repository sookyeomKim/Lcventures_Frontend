<template>
  <div class="main_role" id="main_role"
       :style="this.$parent.$data.mix_data.slide_mover"
       @click="$parent.$options.methods.only_close">

    <!-- Desktop wrap -->
    <div class="image_wrap_desktop" id="image_wrap_desktop">

      <section class="desktop_header">
      </section>

      <section class="desktop_main">
        <img class="desktop_main_img"
             src="../../assets/pages/landing/shoppingbox/180420/00_main/main_bg.png"
             alt="Introducing advertisement product.">

        <div class="contents">
          <img
            class="desktop_main_inner"
            src="../../assets/pages/landing/shoppingbox/180420/00_main/main_copy.png"
            alt="Introducing advertisement product.">
        </div>
      </section>

      <transition name="fade">
        <div class="active_wrap active_1">

          <section class="desktop_1">
            <img src="../../assets/pages/landing/shoppingbox/180420/01_pc/pc_bg.png"/>

            <div class="contents">
              <div class="content_1">
                <img src="../../assets/pages/landing/shoppingbox/180420/01_pc/pc_title.png"/>
              </div>
              <div class="content_2">
                <img src="../../assets/pages/landing/shoppingbox/180420/01_pc/pc_info.png"/>
              </div>
            </div>
          </section>

          <section class="desktop_2">
            <img src="../../assets/pages/landing/shoppingbox/180420/02_mo/mo_bg.png"/>

            <div class="contents">
              <div class="content_1">
                <img src="../../assets/pages/landing/shoppingbox/180420/02_mo/mo_title.png"/>
              </div>
              <div class="content_2">
                <img src="../../assets/pages/landing/shoppingbox/180420/02_mo/mo_info.png"/>
              </div>
            </div>
          </section>

          <section class="desktop_3">
            <img src="../../assets/pages/landing/shoppingbox/180420/03_recommend/recommend_bg.png"/>

            <div class="contents">
              <div class="content_1">
                <img src="../../assets/pages/landing/shoppingbox/180420/03_recommend/recommend_title.png"/>
              </div>

              <div class="content_2">
                <img src="../../assets/pages/landing/shoppingbox/180420/03_recommend/recommend_info.png"/>
              </div>
            </div>
          </section>

          <section class="desktop_4">
            <img src="../../assets/pages/landing/shoppingbox/180420/04_start/start_bg.png"/>

            <div class="contents">
              <div class="content_1">
                <img src="../../assets/pages/landing/shoppingbox/180420/04_start/start_title.png"/>
              </div>
            </div>
          </section>

          <section class="desktop_5">
            <img src="../../assets/pages/landing/shoppingbox/180420/05_management/management_bg.png"/>

            <div class="contents">
              <div class="content_1">
                <img src="../../assets/pages/landing/shoppingbox/180420/05_management/management_title.png"/>
              </div>
              <div class="content_2">
                <img src="../../assets/pages/landing/shoppingbox/180420/05_management/management_info.png"/>
              </div>
            </div>
          </section>

          <section class="desktop_6">
            <img src="../../assets/pages/landing/shoppingbox/180420/06_knowhow/knowhow_bg.png"/>

            <div class="contents">
              <div class="content_1">
                <img src="../../assets/pages/landing/shoppingbox/180420/06_knowhow/knowhow_title.png"/>
              </div>
            </div>
          </section>

          <section class="desktop_7">
            <!--<img src="../../assets/pages/landing/shoppingbox/180420/07_charge/charge_bg.png"/>-->

            <div class="contents">
              <div class="content_1">
                <img src="../../assets/pages/landing/shoppingbox/180420/07_charge/charge_title.png"/>
              </div>
              <div class="content_2">
                <img src="../../assets/pages/landing/shoppingbox/180420/07_charge/naver,kakao_front.png"/>
              </div>

              <div class="content_row">
                <div class="content_col col_1">
                  <a class="gtn" :href="resource.naver" download="엘씨벤처스 - 네이버 쇼핑박스 소개서" target="_blank">
                    <img src="../../assets/pages/landing/shoppingbox/180420/07_charge/naver_bt.png"/>
                  </a>
                </div>
                <div class="content_col col_2">
                  <a class="gtn" :href="resource.kakao" download="엘씨벤처스 - 카카오 쇼핑박스 소개서" target="_blank">
                    <img src="../../assets/pages/landing/shoppingbox/180420/07_charge/kakao_bt.png"/>
                  </a>
                </div>
              </div>

              <div class="content_3">
                <img src="../../assets/pages/landing/shoppingbox/180420/07_charge/naver,kakao_charge.png"/>
              </div>
              <div class="content_4">
                <img src="../../assets/pages/landing/shoppingbox/180420/07_charge/nate,zum_front.png"/>
              </div>

              <div class="content_row">
                <div class="content_col col_1">
                  <a class="gtn" :href="resource.nate" download="엘씨벤처스 - 네이트 쇼핑박스 소개서" target="_blank">
                    <img src="../../assets/pages/landing/shoppingbox/180420/07_charge/nate_bt.png"/>
                  </a>
                </div>
                <div class="content_col col_2">
                  <a class="gtn" :href="resource.zum" download="엘씨벤처스 - 줌 쇼핑박스 소개서" target="_blank">
                    <img src="../../assets/pages/landing/shoppingbox/180420/07_charge/zum_bt.png"/>
                  </a>
                </div>
              </div>

              <div class="content_5">
                <img src="../../assets/pages/landing/shoppingbox/180420/07_charge/nate,zum_charge.png"/>
              </div>
            </div>
          </section>

        </div>
      </transition>

      <!--<section class="desktop_inquiry">
        <img src="../../assets/pages/landing/band/290619/desktop/00_main/inquiry/inquiry_bg.png"/>

        <div class="contents">
          <div class="header">
            <img src="../../assets/pages/landing/kakao/190320/desktop/05_section/inquiry_font.png"/>
          </div>

          <div class="content_1">

            <div class="desktop_form_1">

              <div class="form_button">
                <a href="tel:070-8855-8390" @click="activation_analysis('desktop-phone')">
                  <img src="../../assets/pages/landing/kakao/190320/desktop/05_section/btn_tell_kakao.png"
                       alt="LCVENTURES Kakao - landing phone button">
                </a>
              </div>
              <div class="form_button">
                <a href="mailto:biz@lcventures.co.kr" @click="activation_analysis('desktop-email')">
                  <img src="../../assets/pages/landing/kakao/190320/desktop/05_section/btn_email_kakao.png"
                       alt="LCVENTURES Kakao - landing email button">
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>-->
    </div>
    <!-- /Desktop wrap -->

  </div>
  <!-- /Main role -->
</template>

<script>
  export default {
    name: 'LandingShoppingbox',

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
      },
      resource: {
        naver: require('../../assets/common/files/180814_lcventures_introduce.pdf'),
        kakao: require('../../assets/common/files/180814_lcventures_introduce.pdf'),
        nate: require('../../assets/common/files/180814_lcventures_introduce.pdf'),
        zum: require('../../assets/common/files/180814_lcventures_introduce.pdf'),
      },
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
    },
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
    position: relative;
    .contents {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      margin: 0 auto;

      .desktop_main_inner {
        width: 36%;
        margin: 8% auto 0;
      }
    }

    .main_button_wrap {
      width: 100%;
      position: absolute;
      bottom: 0;

      .main_buttons {
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

        .content_1 {
          width: 3%;
          margin: 2% auto 1%;
        }

        .content_2 {
          width: 58%;
          margin: 0 auto 0;
        }
      }
    }

    .desktop_2 {
      position: relative;

      .contents {
        position: absolute;
        width: 100%;
        top: 0;

        .content_1 {
          width: 3%;
          margin: 2% auto 2%;
        }

        .content_2 {
          width: 58%;
          margin: 0 auto 0;
        }
      }
    }

    .desktop_3 {
      position: relative;

      .contents {
        position: absolute;
        width: 100%;
        top: 0;

        .content_1 {
          width: 32%;
          margin: 3% auto 3%;
        }

        .content_2 {
          width: 54%;
          margin: 0 auto 0;
        }
      }
    }

    .desktop_4 {
      position: relative;

      .contents {
        position: absolute;
        width: 100%;
        top: 0;

        .content_1 {
          width: 45%;
          margin: 9.5% auto 0;
        }
      }
    }

    .desktop_5 {
      position: relative;

      .contents {
        position: absolute;
        width: 100%;
        top: 0;

        .content_1 {
          width: 43%;
          margin: 3% auto 5%;
        }

        .content_2 {
          width: 51%;
          margin: 0 auto 0;
        }
      }
    }

    .desktop_6 {
      position: relative;

      .contents {
        position: absolute;
        width: 100%;
        top: 0;

        .content_1 {
          width: 43%;
          margin: 4% auto 0;
        }
      }
    }

    .desktop_7 {
      position: relative;
      background-color: #1cc545;
      margin-top: -3%;

      .contents {
        // position: absolute;
        position: relative;
        width: 100%;
        // top: 0;

        .content_row {
          width: 51%;
          margin: 0 auto 0;

          .content_col {
            display: inline-block;
            width: 50%;
            padding: 0 6%;
          }
        }

        .content_1 {
          width: 36%;
          margin: 3% auto 4%;
          padding-top: 3%;
        }

        .content_2 {
          width: 45%;
          margin: 0 auto 1.5%;
        }

        .content_3 {
          width: 45%;
          margin: 1.5% auto 0;
          padding: 0 2% 0 4%;
        }

        .content_4 {
          width: 45%;
          margin: 1.5% auto 1.5%;
        }

        .content_5 {
          width: 45%;
          margin: 1.5% auto 0;
          padding: 0 2% 8% 2%;
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
