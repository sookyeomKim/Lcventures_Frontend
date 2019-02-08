<template>
  <!-- Header + Top Buttons -->
  <header class="header"
          :style="this.$parent.$data.mix_data.slide_mover" id="header" v-bind:style="handleScroll">
    <div class="header_wrap">
      <!-- Logo Area -->
      <div class="head_logo">
        <router-link class="head_logo_inner" to="/">
          <img src="./assets/common/lc_logo.png" alt="Lc ventures logo image">
        </router-link>
      </div>

      <!-- Top Buttons (Simple nav button) -->
      <!-- Float right. Stack elements invert ordered. -->
      <div v-if="windowWidth > 835" class="middle_menu">
        <div class="button_middle" @click="$parent.$options.methods.navi_delay">
          <router-link class="button_middle_inner" to="/members">MEMBERS</router-link>
        </div>
        <div class="button_middle" @click="$parent.$options.methods.navi_delay">
          <router-link class="button_middle_inner" to="/projects">PROJECT</router-link>
        </div>
        <div class="button_middle" @click="$parent.$options.methods.navi_delay">
          <router-link class="button_middle_inner" to="/company">COMPANY</router-link>
        </div>
        <div class="button_middle" @click="$parent.$options.methods.navi_delay">
          <router-link class="button_middle_inner" to="/">HOMPAGE</router-link>
        </div>
      </div>
      <!--Top button - middle menu-->

      <!-- Hamburger Menu Button -->
      <div v-else class="button_menu" id="button_menu" @click="$parent.$options.methods.slide_nav"></div>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'app-header',
    data: function () {
      return {
        windowWidth: window.innerWidth
      }
    },
    mounted() {
      let that = this
      this.$nextTick(function () {
        window.addEventListener('resize', function (e) {
          that.windowWidth = window.innerWidth
        })
      })
    },
    methods: {
      handleScroll(event) {
        if(this.windowWidth > 835) {
          let marge = (window.innerHeight * 0.85 - 70)
          let scroll = document.body.scrollTop || document.documentElement.scrollTop
          if (scroll > marge) {
            this.$el.style.background = 'rgba(0,0,0,0.7)'
          } else {
            this.$el.style.background = ''
          }
        } else {
          let marge = (this.windowWidth * 0.85 - 70)
          let scroll = document.body.scrollTop || document.documentElement.scrollTop
          if (scroll > marge) {
            this.$el.style.background = 'rgba(0,0,0,0.7)'
          } else {
            this.$el.style.background = ''
          }
        }
      },
    },
    created() {
      window.addEventListener('scroll', this.handleScroll)
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
  /* export */
</script>

<style lang="scss" scoped>
  /* Header Start (logo, button) */
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100% !important;
    //height: 100px;
    padding: 5px 0;
    /*margin-bottom: -50px;*/
    transition: all 350ms cubic-bezier(.83, .01, .46, .86);
    overflow: hidden;
    z-index: 9000;
  }

  .header_wrap {
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 10px;
  }

  .head_logo {
    position: fixed;
    /*width: 180px;*/
    width: 240px;
    height: 45px;
    float: left;
    vertical-align: top;
    line-height: 45px;
    text-align: center;
    font-size: 25px;
    color: #fdfdfd;
    z-index: 5000;
    //transition: all 350ms cubic-bezier(.83,.01,.46,.86);
    margin-top: 3px;
  }

  .head_logo_inner {
    display: block;
    width: 100%;
    height: 100%;
    color: #fdfdfd;
    border-radius: 4px;
    transition: all 350ms cubic-bezier(.83, .01, .46, .86);
    &:hover, &:active {
      background-color: rgba(25, 25, 25, 0.6);
    }
    img {
      margin-top: 12px;
    }
  }

  /* Center buttons */
  .button_middle {
    position: relative;
    width: 120px;
    height: 50px;
    line-height: 53px;
    text-align: center;
    float: right;
    z-index: 5000;
    right: 25px;
  }

  .button_middle_inner {
    position: fixed;
    color: #efefef;
    //font-weight: bold;
    margin-right: 15px;
    transition: all 350ms cubic-bezier(.83, .01, .46, .86);
    font-family: Impact, sans-serif;
    &:hover, &:active {
      color: #aeaeae;
    }
  }

  /* Hamburger Menu button */
  .button_menu:before {
    width: 100%;
    height: 100%;
    // content: '\2630';
    font-size: 35px;
    line-height: 53px;
    color: #fdfdfd !important;
  }

  .button_menu {
    position: relative;
    width: 50px;
    height: 50px;
    vertical-align: top;
    text-align: center;
    cursor: pointer;
    //margin-left: calc(100% - 100px);
    z-index: 5000;
    float: right;
    background-image: url('./assets/common/menu_btn.png');
    background-size: 85%;
    background-position: 50% 50%;
    &:hover:before, &:active {
      color: #aeaeae;
    }
  }

  header:after {
    content: '';
    display: block;
    clear: both;
  }

  /* Header End and Clear float */

  /*
  ===============================================
  Media query
  ===============================================
  */

</style>
