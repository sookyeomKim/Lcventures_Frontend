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
          src: 'http://www.lcventures.net/lcv_payment.php'
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
    max-width: 700px;
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
    max-width: 700px;
    height: 70%;
    top: 50%;
    margin: 0 auto;
    transform: translateY(-50%);
    overflow: auto;
    background-color: rgba(255, 255, 255, 0.2);
  }

  .payment_frame {
    background-color: #ffffff;
    padding-top: 20px;
    width: 100%;
    height: 100%;
    overflow: auto;
  }

</style>
