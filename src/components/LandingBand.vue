<template>
  <div class="main_role" id="main_role"
       :style="this.$parent.$data.mix_data.slide_mover"
       @click="$parent.$options.methods.only_close">

    <div class="image_wrap" id="image_wrap">

      <section class="section_header">
        <img src="../assets/pages/landing/band/190611/header_bg.png" alt="LCVENTURES Band - header image"/>
        <div class="header_contents">
          <div class="header_logo">
            <router-link to="/">
              <img src="../assets/pages/landing/band/190611/header_logo.png" alt="LCVENTURES Band - header image"/>
            </router-link>
          </div>
          <div class="header_text">
            <router-link to="/">
              <img src="../assets/pages/landing/band/190611/header_text.png" alt="LCVENTURES Band - header image"/>
            </router-link>
          </div>
        </div>
      </section>

      <section class="section_1">
        <img src="../assets/pages/landing/band/190611/01.png" alt="LCVENTURES Band - landing image"/>
      </section>

      <section class="section_2">
        <img src="../assets/pages/landing/band/190611/02.jpg" alt="LCVENTURES Band - landing image"/>
      </section>

      <section class="section_3">
        <img src="../assets/pages/landing/band/190611/03.jpg" alt="LCVENTURES Band - landing image"/>
      </section>

      <section class="section_4">
        <img src="../assets/pages/landing/band/190611/04.png" alt="LCVENTURES Band - landing image"/>
        <div class="form_1">
          <a href="tel:070-8855-8390">
            <img src="../assets/pages/landing/band/190611/btn_01_phone.png" alt="LCVENTURES Band - landing phone button">
          </a>
          <a href="mailto:biz@lcventures.co.kr">
            <img src="../assets/pages/landing/band/190611/btn_02_email.png" alt="LCVENTURES Band - landing email button">
          </a>
        </div>
      </section>

      <!--<section class="section_footer">
        <img src="../assets/pages/landing/band/190611/05.jpg"/>
      </section>-->

    </div>

  </div><!--Main role-->
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
  #image_wrap {
    position: relative;
    width: 100%;
    min-width: 320px;
    max-width: 1100px;
    margin: 0 auto;
  }

  /* section start */
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
  /* section end */

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

  .form_1 {
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

</style>
