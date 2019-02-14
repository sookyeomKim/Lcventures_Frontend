<template>
  <div class="floater" id="floater">
    <div class="back_panel">
      <div class="float_button">
        <router-link class="float_link" id="link" to="/consult" :style="Floated">
          <img src="./assets/common/talk_white_01.png" alt="Consult button image.">
          <p>문의하기</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Floater",
    methods: {
      Floated() {
        if (window.innerWidth > 835) {
          let marge = (window.innerHeight * 0.85 - 70)
          let scroll = document.body.scrollTop || document.documentElement.scrollTop
          let bottom = document.body.scrollHeight || document.documentElement.scrollHeight
          let limit = false
          if (scroll + window.innerHeight > bottom - 105) {
            limit = true
          } else {
            limit = false
          }
          if (scroll > marge && !limit) {
            this.$el.style.opacity = '1'
            this.$el.style.visibility = 'visible'
          } else {
            this.$el.style.opacity = '0'
            this.$el.style.visibility = 'hidden'
          }
        } else {
          let marge = (window.innerWidth - 70)
          let scroll = document.body.scrollTop || document.documentElement.scrollTop
          let bottom = document.body.scrollHeight || document.documentElement.scrollHeight
          let limit = false
          if (scroll + window.innerHeight > bottom - 150) {
            limit = true
          } else {
            limit = false
          }
          if (scroll > marge && !limit) {
            this.$el.style.opacity = '1'
            this.$el.style.visibility = 'visible'
          } else {
            this.$el.style.opacity = '0'
            this.$el.style.visibility = 'hidden'
          }
        }
      }
    },
    created() {
      this.$nextTick(function () {
        window.addEventListener('scroll', this.Floated)
      })
    },
    destroyed() {
      this.$nextTick(function () {
        window.removeEventListener('scroll', this.Floated)
      })
    }
  }
</script>

<style scoped lang="scss">
  .floater {
    position: fixed;
    // display: none;
    width: 100%;
    top: calc(90vh);
    margin: auto;
    z-index: 2800;
    pointer-events: none;
    transition: all 200ms ease-in-out;
    opacity: 0;
  }

  .back_panel {
    width: 100%;
    max-width: 1300px;
    margin: auto;
  }

  .float_button {
    text-align: right;
    margin: 0 auto;
    .router-link-exact-active {
      opacity: 0;
    }
  }

  .float_link {
    pointer-events: auto;
    position: relative;
    z-index: 9999;
    display: block;
    width: 200px;
    height: 35px;
    line-height: 33px;
    margin: 0 35px 0 auto;
    border: 1px solid #fdfdfd;
    background-color: rgba(65, 65, 65, 0.8);
    color: #fdfdfd;
    text-align: left;
    cursor: pointer;
    z-index: 9999;
    padding: 2px 5px;
    vertical-align: top;

    &:hover, &:active {
      background-color: rgba(25, 25, 25, 0.7);
      color: rgba(200, 200, 200, 0.8);
      transition: all 350ms cubic-bezier(.83, .01, .46, .86);
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
  }

</style>
