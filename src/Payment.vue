<template>
  <div v-if="this.$parent.$data.mix_data.payment_flag.frame" class="modal_cover" @click="$parent.$options.methods.payment_close()">

    <div class="frame_header">
        <!--<span class="frame_close">-->
          <img class="menu_close_image" src="./assets/common/close_btn.png" alt="Navigation close button">
        <!--</span>-->
    </div>

    <div class="iframe_wrapper">

      <iframe
        class="payment_frame"
        :src="iframe.src"
        frameborder="0"
      ></iframe>

    </div>

  </div>
</template>

<script>
    export default {
      name: "payment",
      data:() => ({
        iframe: {
          src: 'https://www.youtube.com/embed/bDmuCtaRcZM?&autoplay=1&loop=1&playlist=bDmuCtaRcZM&showinfo=0&fs=0&disablekb=1&vq=auto&controls=0&rel=0&iv_load_policy=3&mute=1&playsinline=1&modestbranding=1'
        }
      })
    }
</script>

<style scoped>

  .modal_cover {
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
    cursor: pointer;
  }

  .frame_header {
    position: relative;
    width: 50%;
    min-width: 300px;
    height: 30px;
    top: 15%;
    text-align: right;
    border-radius: 5px 5px 0 0;
    background-color: #efefef;
    margin: 0 auto;
  }

  .menu_close_image {
    width: 25px;
    margin: 3px 5px 0 0;
  }

  .iframe_wrapper {
    position: relative;
    width: 50%;
    min-width: 300px;
    height: 70%;
    top: 50%;
    margin: 0 auto;
    transform: translateY(-50%);
    overflow: auto;
    background-color: rgba(255, 255, 255, 0.2);
  }

  .payment_frame {
    width: 100%;
    height: 100%;
  }

</style>
