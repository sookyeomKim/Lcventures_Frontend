<template>
  <!-- Video Area Started -->
  <main class="main_role" id="main_role"
        :style="this.$parent.$data.mix_data.slide_mover"
        @click="$parent.$options.methods.only_close">

    <!-- Main Context on video wrap -->
    <section class="section_0">
      <div class="main_title">
        <h2>사람・문화・공간</h2>
        <div class="division_bar"></div>
        <div class="table">
          <p>개성 넘치는 다양한 구성원들과, 복층으로 이루어진 색다른 회사 공간에서</p>
          <p>서로의 의견을 자유롭게 이야기하고, 각 부서간 원활하게 소통합니다.</p>
          <p>우리는 퍼포먼스와 동시에 사람을 가장 중요하게 생각합니다.</p>
        </div>
      </div>
    </section>

    <!-- Main Creative performance image (hidden. 2018.10.23) -->
    <!-- <section class="section_1">
      <img v-if="windowWidth > 835" class="home_image" src="../assets/pages/home/home_main.jpg"
           alt="LC ventures homepage start image.">
      <img v-else class="home_image" src="../assets/pages/home/home_main_m.jpg"
           alt="LC ventures mobile homepage start image">
    </section> -->

    <!-- Culture Image slide 1/4 -->
    <section class="section_2">
      <div class="culture_wrap">
        <div class="culture_img_wrap">
          <div class="culture_img">
            <ul>
              <transition-group :name="transition_name">
                <li class="slide_1" v-for="(image, index) in images_1" :key="index" v-if="slide_1_flag == (index+1)">
                  <img :src="image.src" :alt="image.title">
                </li>
              </transition-group>
            </ul>
            <div class="img_nav">
              <button class="prev_button" id="1-prev" @click="img_control($event)">
                <img src="../assets/pages/home/arrow_left_01.png" alt="Left button">
              </button>
              <button class="next_button" id="1-next" @click="img_control($event)">
                <img src="../assets/pages/home/arrow_right_01.png" alt="Right button">
              </button>
            </div>
            <div class="img_position">
              <p>{{ slide_1_flag }}/{{ slide_1_max }}</p>
            </div>
          </div>
          <!-- Belongs to circle layout -->
          <!-- <div class="img_border"></div> -->
        </div>
        <div class="culture_text">
          <div class="inner_title">
            <h4>OPEN MIND</h4>
            <p>우리는 개방적입니다</p>
          </div>
          <div class="division_bar_small"></div>
          <div class="inner_content">
            <p>복층으로 이루어진 색다른 공간에서</p>
            <p>우리는 서로의 의견을 자유롭게 이야기하고,</p>
            <p>각 부서간 원활하게 소통하며 일합니다.</p>
          </div>
        </div>
        <div class="side_text">
          <p>Work as open mind</p>
        </div>
      </div>
    </section>

    <!-- Culture Image slide 2/4 -->
    <section class="section_3">
      <div class="culture_wrap">
        <div class="culture_img_wrap">
          <div class="culture_img">
            <ul>
              <transition-group :name="transition_name">
                <li class="slide_2" v-for="(image, index) in images_2" :key="index" v-if="slide_2_flag == (index+1)">
                  <img :src="image.src" :alt="image.title">
                </li>
              </transition-group>
            </ul>
            <div class="img_nav">
              <button class="prev_button" id="2-prev" @click="img_control($event)">
                <img src="../assets/pages/home/arrow_left_01.png" alt="Left button">
              </button>
              <button class="next_button" id="2-next" @click="img_control($event)">
                <img src="../assets/pages/home/arrow_right_01.png" alt="Right button">
              </button>
            </div>
            <div class="img_position">
              <p>{{ slide_2_flag }}/{{ slide_2_max }}</p>
            </div>
          </div>
          <!-- Belongs to circle layout -->
          <!-- <div class="img_border"></div> -->
        </div>
        <div class="culture_text">
          <div class="inner_title">
            <h4>RESPECT</h4>
            <p>우리는 존중합니다</p>
          </div>
          <div class="division_bar_small"></div>
          <div class="inner_content">
            <p>나이와 직급에 상관없이</p>
            <p>모두에게 존댓말과 높임말을 사용합니다.</p>
            <p>동등한 위치에서 자신의 생각을 말하지만,</p>
            <p>스스로가 내린 결정의 책임감을 가지고 일합니다.</p>
          </div>
        </div>
        <div class="side_text">
          <p>Have sense of responsibility</p>
        </div>
      </div>
    </section>

    <!-- Culture Image slide 3/4 -->
    <section class="section_4">
      <div class="culture_wrap">
        <div class="culture_img_wrap">
          <div class="culture_img">
            <ul>
              <transition-group :name="transition_name">
                <li class="slide_3" v-for="(image, index) in images_3" :key="index" v-if="slide_3_flag == (index+1)">
                  <img :src="image.src" :alt="image.title">
                </li>
              </transition-group>
            </ul>
            <div class="img_nav">
              <button class="prev_button" id="3-prev" @click="img_control($event)">
                <img src="../assets/pages/home/arrow_left_01.png" alt="Left button">
              </button>
              <button class="next_button" id="3-next" @click="img_control($event)">
                <img src="../assets/pages/home/arrow_right_01.png" alt="Right button">
              </button>
            </div>
            <div class="img_position">
              <p>{{ slide_3_flag }}/{{ slide_3_max }}</p>
            </div>
          </div>
          <!-- Belongs to circle layout -->
          <!-- <div class="img_border"></div> -->
        </div>
        <div class="culture_text">
          <div class="inner_title">
            <h4>ENJOY</h4>
            <p>우리는 즐겁습니다</p>
          </div>
          <div class="division_bar_small"></div>
          <div class="inner_content">
            <p>날이 좋은 날에는,</p>
            <p>직원들과 함께 즉흥적으로 소풍을 떠납니다.</p>
            <p>벚꽃이 만개할 때는, 다같이 벚꽃놀이를 갑니다.</p>
            <p>연말에는 송년회를 열어</p>
            <p>한 해의 격려와 응원을 보내줍니다.</p>
          </div>
        </div>
        <div class="side_text">
          <p>Give encouragement to each other</p>
        </div>
      </div>
    </section>

    <!-- Culture Image slide 4/4 -->
    <section class="section_5">
      <div class="culture_wrap">
        <div class="culture_img_wrap">
          <div class="culture_img">
            <ul>
              <transition-group :name="transition_name">
                <li class="slide_4" v-for="(image, index) in images_4" :key="index" v-if="slide_4_flag == (index+1)">
                  <img :src="image.src" :alt="image.title">
                </li>
              </transition-group>
            </ul>
            <div class="img_nav">
              <button class="prev_button" id="4-prev" @click="img_control($event)">
                <img src="../assets/pages/home/arrow_left_01.png" alt="Left button">
              </button>
              <button class="next_button" id="4-next" @click="img_control($event)">
                <img src="../assets/pages/home/arrow_right_01.png" alt="Right button">
              </button>
            </div>
            <div class="img_position">
              <p>{{ slide_4_flag }}/{{ slide_4_max }}</p>
            </div>
          </div>
          <!-- Belongs to circle layout -->
          <!-- <div class="img_border"></div> -->
        </div>
        <div class="culture_text">
          <div class="inner_title">
            <h4>FREEDOM</h4>
            <p>우리는 자유롭습니다</p>
          </div>
          <div class="division_bar_small"></div>
          <div class="inner_content">
            <p>공식 업무 시간은 오전 9시30분으로</p>
            <p>여유롭게 아침을 시작합니다.</p>
            <p>업무 중 피곤함이 몰려올 때는,</p>
            <p>잠깐의 티타임으로 에너지를 얻습니다.</p>
            <p>우리는 매년 하계 휴가를 통해</p>
            <p>재충전의 시간을 보냅니다.</p>
          </div>
        </div>
        <div class="side_text">
          <p>Have time of recharge</p>
        </div>
      </div>
    </section>

    <!-- Backup for editing -->
    <!--    <section class="section_1">
      <div class="culture_wrap">
        <div class="culture_img_wrap">
          <div class="culture_img">
            <ul>
              <transition-group :name="transition_name">
                <li class="slide_1" v-for="(image, index) in images_1" :key="index" v-if="slide_1_flag == (index+1)">
                  <img :src="image.src" :alt="image.title">
                </li>
              </transition-group>
            </ul>
            <div class="img_nav">
              <button class="prev_button" id="1-prev" @click="img_control($event)">
                <img src="../assets/pages/home/arrow_left.png" alt="Left button">
              </button>
              <button class="next_button" id="1-next" @click="img_control($event)">
                <img src="../assets/pages/home/arrow_right.png" alt="Right button">
              </button>
            </div>
            <div class="img_position">
              <p>{{ slide_1_flag }}/{{ slide_1_max }}</p>
            </div>
          </div>
          <div class="img_border"></div>
        </div>
        <div class="culture_text">
          <div class="inner_title">
            <h4>OPEN MIND</h4>
            <p>우리는 개방적입니다</p>
          </div>
          <div class="division_bar_small"></div>
          <div class="inner_content">
            <p>복층으로 이루어진 색다른 공간에서</p>
            <p>우리는 서로의 의견을 자유롭게 이야기하고,</p>
            <p>각 부서간 원활하게 소통하며 일합니다.</p>
          </div>
        </div>
        <div class="side_text">
          <p>Work as open mind</p>
        </div>
      </div>
    </section>
    &lt;!&ndash;section 1&ndash;&gt;

    <section class="section_2">
      <div class="culture_wrap">
        <div class="culture_img_wrap">
          <div class="culture_img">
            <ul>
              <transition-group :name="transition_name">
                <li class="slide_2" v-for="(image, index) in images_2" :key="index" v-if="slide_2_flag == (index+1)">
                  <img :src="image.src" :alt="image.title">
                </li>
              </transition-group>
            </ul>
            <div class="img_nav">
              <button class="prev_button" id="2-prev" @click="img_control($event)">
                <img src="../assets/pages/home/arrow_left.png" alt="Left button">
              </button>
              <button class="next_button" id="2-next" @click="img_control($event)">
                <img src="../assets/pages/home/arrow_right.png" alt="Right button">
              </button>
            </div>
            <div class="img_position">
              <p>{{ slide_2_flag }}/{{ slide_2_max }}</p>
            </div>
          </div>
          <div class="img_border"></div>
        </div>
        <div class="culture_text">
          <div class="inner_title">
            <h4>RESPECT</h4>
            <p>우리는 존중합니다</p>
          </div>
          <div class="division_bar_small"></div>
          <div class="inner_content">
            <p>나이와 직급에 상관없이</p>
            <p>모두에게 존댓말과 높임말을 사용합니다.</p>
            <p>동등한 위치에서 자신의 생각을 말하지만,</p>
            <p>스스로가 내린 결정의 책임감을 가지고 일합니다.</p>
          </div>
        </div>
        <div class="side_text">
          <p>Have sense of responsibility</p>
        </div>
      </div>

    </section>
    &lt;!&ndash;section 2&ndash;&gt;

    <section class="section_3">

      <div class="culture_wrap">
        <div class="culture_img_wrap">
          <div class="culture_img">
            <ul>
              <transition-group :name="transition_name">
                <li class="slide_3" v-for="(image, index) in images_3" :key="index" v-if="slide_3_flag == (index+1)">
                  <img :src="image.src" :alt="image.title">
                </li>
              </transition-group>
            </ul>
            <div class="img_nav">
              <button class="prev_button" id="3-prev" @click="img_control($event)">
                <img src="../assets/pages/home/arrow_left.png" alt="Left button">
              </button>
              <button class="next_button" id="3-next" @click="img_control($event)">
                <img src="../assets/pages/home/arrow_right.png" alt="Right button">
              </button>
            </div>
            <div class="img_position">
              <p>{{ slide_3_flag }}/{{ slide_3_max }}</p>
            </div>
          </div>
          <div class="img_border"></div>
        </div>
        <div class="culture_text">
          <div class="inner_title">
            <h4>ENJOY</h4>
            <p>우리는 즐겁습니다</p>
          </div>
          <div class="division_bar_small"></div>
          <div class="inner_content">
            <p>날이 좋은 날에는,</p>
            <p>직원들과 함께 즉흥적으로 소풍을 떠납니다.</p>
            <p>벚꽃이 만개할 때는, 다같이 벚꽃놀이를 갑니다.</p>
            <p>연말에는 송년회를 열어</p>
            <p>한 해의 격려와 응원을 보내줍니다.</p>
          </div>
        </div>
        <div class="side_text">
          <p>Give encouragement to each other</p>
        </div>
      </div>

    </section>
    &lt;!&ndash;section 3&ndash;&gt;

    <section class="section_4">
      <div class="culture_wrap">
        <div class="culture_img_wrap">
          <div class="culture_img">
            <ul>
              <transition-group :name="transition_name">
                <li class="slide_4" v-for="(image, index) in images_4" :key="index" v-if="slide_4_flag == (index+1)">
                  <img :src="image.src" :alt="image.title">
                </li>
              </transition-group>
            </ul>
            <div class="img_nav">
              <button class="prev_button" id="4-prev" @click="img_control($event)">
                <img src="../assets/pages/home/arrow_left.png" alt="Left button">
              </button>
              <button class="next_button" id="4-next" @click="img_control($event)">
                <img src="../assets/pages/home/arrow_right.png" alt="Right button">
              </button>
            </div>
            <div class="img_position">
              <p>{{ slide_4_flag }}/{{ slide_4_max }}</p>
            </div>
          </div>
          <div class="img_border"></div>
        </div>
        <div class="culture_text">
          <div class="inner_title">
            <h4>FREEDOM</h4>
            <p>우리는 자유롭습니다</p>
          </div>
          <div class="division_bar_small"></div>
          <div class="inner_content">
            <p>공식 업무 시간은 오전 9시30분으로</p>
            <p>여유롭게 아침을 시작합니다.</p>
            <p>업무 중 피곤함이 몰려올 때는,</p>
            <p>잠깐의 티타임으로 에너지를 얻습니다.</p>
            <p>우리는 매년 하계 휴가를 통해</p>
            <p>재충전의 시간을 보냅니다.</p>
          </div>
        </div>
        <div class="side_text">
          <p>Have time of recharge</p>
        </div>

      </div>

    </section>
    &lt;!&ndash;section 4&ndash;&gt;-->

    <!-- !!## ##!! -->
    <!-- !!## Do not delete it. it exist for count image lists !!## -->
    <input type="hidden" v-bind:value="img_counter(images_1.length, images_2.length, images_3.length, images_4.length)">
    <!-- !!## Do not delete it. it exist for count image lists !!## -->
    <!-- !!## ##!! -->

  </main>
</template>

<script>
  export default {
    name: 'home',
    mounted() {
      /* Calculate browser width for handle video section */
      let that = this
      this.$nextTick(function () {
        window.addEventListener('resize', function (e) {
          that.windowWidth = window.innerWidth
        })
      })
    },
    data: function () {
      return {
        windowWidth: window.innerWidth,
        transition_name: 'next',
        /* Slider Images 1/4. title will be alt */
        images_1: [
          {
            title: 'Temporary Mind image 1',
            src: require('../assets/pages/home/image_1/1_1.jpg')
          },
          {
            title: 'Temporary Mind image 2',
            src: require('../assets/pages/home/image_1/2_1.jpg')
          }
        ],
        /* Slider Images 2/4. title will be alt */
        images_2: [
          {
            title: 'Respect image 1',
            src: require('../assets/pages/home/image_2/1_1.jpg')
          },
          {
            title: 'Respect image 2',
            src: require('../assets/pages/home/image_2/2_1.jpg')
          }
        ],
        /* Slider Images 3/4. title will be alt */
        images_3: [
          {
            title: 'Enjoy image 1',
            src: require('../assets/pages/home/image_3/1_1.jpg')
          },
          {
            title: 'Enjoy image 2',
            src: require('../assets/pages/home/image_3/2_1.jpg')
          },
          {
            title: 'Enjoy image 3',
            src: require('../assets/pages/home/image_3/3_1.jpg')
          },
          {
            title: 'Enjoy image 4',
            src: require('../assets/pages/home/image_3/4_1.jpg')
          }
        ],
        /* Slider Images 4/4. title will be alt */
        images_4: [
          {
            title: 'Freedom image 1',
            src: require('../assets/pages/home/image_4/1_1.jpg')
          },
          {
            title: 'Freedom image 2',
            src: require('../assets/pages/home/image_4/2_1.jpg')
          },
          {
            title: 'Freedom image 3',
            src: require('../assets/pages/home/image_4/3_1.jpg')
          },
          {
            title: 'Freedom image 4',
            src: require('../assets/pages/home/image_4/4_1.jpg')
          }
        ],
        /* Image count flags with init */
        /* Max = image length, flag is current position of image list */
        slide_1_max: 0,
        slide_1_flag: 1,

        slide_2_max: 0,
        slide_2_flag: 1,

        slide_3_max: 0,
        slide_3_flag: 1,

        slide_4_max: 0,
        slide_4_flag: 1
      }
    },
    methods: {
      /* Set Max flags as belongs to image lists */
      img_counter(slider1, slider2, slider3, slider4) {
        this.slide_1_max = slider1
        this.slide_2_max = slider2
        this.slide_3_max = slider3
        this.slide_4_max = slider4
      },
      /* Image slider offer controller */
      img_control: function (event) {
        switch (event.currentTarget.id) {
          case '1-prev' :
            this.sliding_1('decrease')
            break
          case '1-next' :
            this.sliding_1('increase')
            break
          case '2-prev' :
            this.sliding_2('decrease')
            break
          case '2-next' :
            this.sliding_2('increase')
            break
          case '3-prev' :
            this.sliding_3('decrease')
            break
          case '3-next' :
            this.sliding_3('increase')
            break
          case '4-prev' :
            this.sliding_4('decrease')
            break
          case '4-next' :
            this.sliding_4('increase')
            break
          default :
            break
        }
      },
      /* Actual function each of image slides. */
      sliding_1(option) {
        if (option === 'decrease' && this.slide_1_flag > 1) {
          this.transition_name = 'prev'
          this.slide_1_flag--
        } else if (option === 'increase' && this.slide_1_flag < this.slide_1_max) {
          this.transition_name = 'next'
          this.slide_1_flag++
        }
      },
      sliding_2(option) {
        if (option === 'decrease' && this.slide_2_flag > 1) {
          this.transition_name = 'prev'
          this.slide_2_flag--
        } else if (option === 'increase' && this.slide_2_flag < this.slide_2_max) {
          this.transition_name = 'next'
          this.slide_2_flag++
        }
      },
      sliding_3(option) {
        if (option === 'decrease' && this.slide_3_flag > 1) {
          this.transition_name = 'prev'
          this.slide_3_flag--
        } else if (option === 'increase' && this.slide_3_flag < this.slide_3_max) {
          this.transition_name = 'next'
          this.slide_3_flag++
        }
      },
      sliding_4(option) {
        if (option === 'decrease' && this.slide_4_flag > 1) {
          this.transition_name = 'prev'
          this.slide_4_flag--
        } else if (option === 'increase' && this.slide_4_flag < this.slide_4_max) {
          this.transition_name = 'next'
          this.slide_4_flag++
        }
      }
    }/* methods */
  }
  /* exports */
</script>

<style lang="scss" scoped>

  /* Creative performance image (hidden 2018.10.23) */
  /*.home_image {
    width: 100%;
    margin-bottom: -5px;
  }*/

  /* Culture image sections */
  .section_2, .section_3, .section_4, .section_5 {
    background-color: #ffffff;
    padding-top: 150px;
    font-family: Impact, sans-serif;
  }

  .section_5 {
    padding-bottom: 150px;
  }

  /* Actual main contents of each section */
  .culture_wrap {
    width: 100%;
    max-width: 1300px;
    padding: 0 10px;
    margin: 0 auto;
    text-align: center;
    &:after {
      content: '';
      clear: both;
      display: block;
    }
  }

  /* Only image slides part. */
  .culture_img_wrap {
    width: 60%;
    max-width: 763px;
    text-align: center;
    float: left;
    padding: 15px 0;
    &:after {
      content: '';
      clear: both;
      display: block;
    }
    .culture_img {
      position: relative;
      width: 100%;
      /* ##### for Circle layout ##### */
      // border-radius: 100%;
      // border: 8px solid #019da5;

      /* ##### padding bottom 83% = square // 62.5 = 16:10 ##### */
      // padding-bottom: 83%;
      padding-bottom: 62.5%;
      overflow: hidden;

      /* Culture section float init */
      float: left;
      z-index: 400;
      background-color: #fefefe;
      ul {
        width: 100%;
        li {
          position: absolute;
          top: 0;
          width: 100%;
          height: 100%;
          img {
            width: 100%;
            height: 100%;
            background-size: cover;
            object-fit: cover;
          }
        }
      }

      /* Transition animation Start */
      .next-enter-active,
      .next-leave-active {
        transition: all 700ms ease-in-out;
      }
      .next-enter {
        opacity: 0;
        transform: scale(0.8) translateX(100%);
        filter: brightness(1);
      }
      .next-leave, next-enter-to {
        opacity: 1;
        transform: scale(1) translateX(0%);
      }
      .next-leave-to {
        opacity: 0;
        transform: scale(1.2) translateX(-100%) translateY(-25%);
        filter: brightness(1);
      }

      .prev-enter-active,
      .prev-leave-active {
        transition: all 700ms ease-in-out;
      }
      .prev-enter {
        opacity: 0;
        transform: scale(0.8) translateX(-100%);
        filter: brightness(1);
      }
      .prev-leave, prev-enter-to {
        opacity: 1;
        transform: scale(1) translateX(0%);
      }
      .prev-leave-to {
        opacity: 0;
        transform: scale(1.2) translateX(100%) translateY(-25%);
        filter: brightness(1);
      }/* Transition animation End */

      /* Slider navigation button */
      .img_nav {
        position: absolute;
        width: 100%;
        height: 0;
        padding: 0 25px;
        top: calc(50% - 15px);
        &:after {
          content: '';
          clear: both;
          display: block;
        }
        .prev_button, .next_button {
          width: 40px;
          height: 40px;
          background-color: #009da5;
          border: 3px solid #ffffff;
          border-radius: 100%;
          opacity: 0.7;
          padding: 0;
          img {
            width: 100%;
            height: 100%;
            // filter: invert(1);
          }
          &:focus {
            outline: none;
          }
          &:hover, &:active {
            opacity: 1;
          }
          &:active {
            background-color: #717171;
            transition: all 100ms ease;
          }
        }
        .prev_button {
          float: left;
        }
        .next_button {
          float: right;
        }
      }

      /* Slider numberic navigation */
      .img_position {
        position: absolute;
        width: 100%;
        height: 30px;
        bottom: 5px;
        text-align: center;
        p {
          width: 60px;
          height: 30px;
          margin: 0 auto;
          line-height: 30px;
          font-size: 25px;
          color: #fefefe;
          background-color: rgba(50, 50, 50, 0.5);
          border-radius: 10px;
        }
      }
    } /* culture image */

    /* Belongs to circle layout */
    /*.img_border {
      position: relative;
      width: 50%;
      padding-bottom: 50%;
      border-radius: 120%;
      //135deg, #002778 25%, #ffffff 25%, #ffffff 50%, #002778 50%, #002778 75%, #ffffff 75%, #ffffff 100%
      background-image: linear-gradient(
          135deg, #019DA5 25%, #ffffff 25%, #ffffff 50%, #019DA5 50%, #019DA5 75%, #ffffff 75%, #ffffff 100%
      );
      background-size: 20px 20px;
      right: -48%;
      margin-top: 38%;
      z-index: 300;
    }*/

  }/* Culture image wrap */

  /* Horizon text area */
  .culture_text {
    width: 36%;
    float: left;
    text-align: left;
    // padding-left: 2%;
    padding-left: 2%;
    .inner_title {
      h4 {
        // font-size: 55px;
        font-size: 60px;
        font-weight: bold;
        margin: 0;
        //color: #d60c47;
        color: #019DA5;
      }
      p {
        font-family: 'Nanums_regular', sans-serif;
        // font-size: 23px;
        font-size: 31px;
        // padding-left: 10px;
      }
    }
    .division_bar_small {
      width: 50px;
      height: 2px;
      background-color: #212121;
      margin: 8px 4px 15px;
    }
    .inner_content {
      p {
        font-family: 'Nanums_regular', sans-serif;
        // font-size: 14px;
        font-size: 15px;
        line-height: 26px;
      }
    }
  }/* Culture text (Horizon text area) */

  /* Vertical text */
  .side_text {
    // width: 5%;
    width: 20px;
    float: left;
    // font-size: 34px;
    font-size: 27px;
    font-weight: bold;
    // padding-top: 45px;
    color: #000;
    p {
      transform: rotate(90deg);
      word-break: keep-all;
      /* Forced align vertically with ignored div  */
      white-space: nowrap;
    }
  }/* Slide text (Vertical text) */

  /* Overall section css end. */

  /* Culture section 2/4 */
  .section_3 {
    .culture_wrap {
      &:after {
        content: '';
        clear: both;
        display: block;
      }
      .culture_img_wrap {
        float: right;
        .culture_img {
          float: right;
          // border: 8px solid #019DA5;
        }
        /*.img_border {
          //45deg, #d60c47 25%, #ffffff 25%, #ffffff 50%, #d60c47 50%, #d60c47 75%, #ffffff 75%, #ffffff 100%
          background-image: linear-gradient(
              45deg, #019DA5 25%, #ffffff 25%, #ffffff 50%, #019DA5 50%, #019DA5 75%, #ffffff 75%, #ffffff 100%
          );
          right: 0;
        }*/
      }
      .culture_text {
        float: right;
        .inner_title {
          h4 {
            //color: #002778;
            color: #019DA5;
          }
        }
      }
      .side_text {
        float: right;
      }
    }
  } /* Culture section 2/4 end */

  .section_4 {
    /* Culture section 3/4 Follow section init */
  }

  /* Culture section 4/4 */
  .section_5 {
    .culture_wrap {
      &:after {
        content: '';
        clear: both;
        display: block;
      }
      .culture_img_wrap {
        float: right;
        .culture_img {
          float: right;
          // border: 8px solid #002778;
          // border: 8px solid #019DA5;
        }
        /*.img_border {
          //45deg, #d60c47 25%, #ffffff 25%, #ffffff 50%, #d60c47 50%, #d60c47 75%, #ffffff 75%, #ffffff 100%
          background-image: linear-gradient(
              45deg, #019DA5 25%, #ffffff 25%, #ffffff 50%, #019DA5 50%, #019DA5 75%, #ffffff 75%, #ffffff 100%
          );
          right: 0;
        }*/
      }
      .culture_text {
        float: right;
        .inner_title {
          h4 {
            //color: #002778;
            color: #019DA5;
          }
        }
      }
      .side_text {
        float: right;
      }
    }
  } /* Culture section 4/4 end */

  /* section 4 end */

  /*
  ===============================================
  Media query
  ===============================================
  */

  /* When width wide than 1300px */
  @media (min-width: 1300px) {
    .culture_text {
      .inner_title {
        h4 {
          font-size: 90px;
        }
        p {
          font-size: 45px;
        }
      }
      .inner_content {
        p {
          font-size: 18px;
        }
      }
    }

    .side_text {
      // width: 5%;
      width: 30px;
      padding: 0 25px;
      float: left;
      // font-size: 34px;
      font-size: 40px;
      font-weight: bold;
      // padding-top: 45px;
      color: #000;
      p {
        transform: rotate(90deg);
        word-break: keep-all;
        white-space: nowrap;
      }
    }
  }

  /* Mobile layout */
  @media (max-width: 835px) {
    .section_2, .section_3, .section_4, .section_5 {
      background-color: #ffffff;
      padding-top: 50px;
      font-family: Impact, sans-serif;
    }

    .section_5 {
      padding-bottom: 50px;
    }

    .culture {
      margin-bottom: 35px;
      img {
        width: 180px;
      }
    }
    .culture_img_wrap {
      width: 100%;
      float: unset;
      .culture_img {
        float: unset;
      }
    }
    .culture_text {
      width: 100%;
      text-align: center;
      float: unset;
      .division_bar_small {
        margin: 8px auto 15px;
      }
    }

    .side_text {
      display: none;
    }
  }


</style>
