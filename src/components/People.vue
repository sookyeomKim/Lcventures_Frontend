<template>
  <div class="main_role" id="main_role"
       :style="this.$parent.$data.mix_data.slide_mover"
       @click="$parent.$options.methods.only_close">

    <input type="hidden" v-bind:value="where_am_i = 4">
    <!--
    <img class="main_image" src="../assets/pages/people/people.jpg" alt="page background image">
    -->

    <!-- Main Context on video wrap -->
    <div class="main_title">
      <h2>좋은 마케팅, 더 좋은 사람들</h2>
      <span>- M</span>
      <span>E</span>
      <span>M</span>
      <span>B</span>
      <span>E</span>
      <span>R</span>
      <span>S</span>
    </div>

    <section class="section_1">

      <div class="memberContainer">
        <div v-for="(item, index) in person_counter" class="memberWrap" :class="index % 2 === 0 ? 'even' : 'odd'">
          <ul> <!-- v-lazy-container="{ selector: 'img' }" -->
            <li v-for="member in item" class="memberList">
              <div class="member_team">- {{member.team}}</div>
              <div class="member_title">{{member.title}} / {{member.position}}</div>
              <img :src="member.src" :data-src="member.src" :alt="member.title">
            </li>
          </ul>
        </div>
      </div>

    </section>

  </div>
</template>

<script>
  export default {
    name: 'people',
    mounted () {
      /* Calculate browser width for handle video section */
      let that = this
      this.$nextTick(function () {
        window.addEventListener('resize', function (e) {
          that.windowWidth = window.innerWidth
          that.count = Math.floor(window.innerWidth * 0.96 / 300)
        })
      })
    },
    data: () => ({
      windowWidth: window.innerWidth,
      count: Math.floor((window.innerWidth * 0.96) / 300),
      image_sources: [
        {
          title: '권용무',
          team: '엘씨벤처스 (주)',
          position: '대표이사',
          src: require('../assets/pages/people/ymkwon.jpg')
        },
        {
          title: '이세호',
          team: '마케팅부',
          position: '부장',
          src: require('../assets/pages/people/shlee.jpg')
        },
        {
          title: '노일찬',
          team: '유통사업부',
          position: '부장',
          src: require('../assets/pages/people/icnho.jpg')
        },
        {
          title: '박우복',
          team: '유통사업부',
          position: '부장',
          src: require('../assets/pages/people/vertical_placeholder.png')
        },
        {
          title: '류진우',
          team: '마케팅부',
          position: '차장',
          src: require('../assets/pages/people/jwryu.jpg')
        },
        {
          title: '김홍식',
          team: '마케팅부',
          position: '차장',
          src: require('../assets/pages/people/hskim.jpg')
        },
        {
          title: '이효진',
          team: '마케팅부',
          position: '과장',
          src: require('../assets/pages/people/hjlee.jpg')
        },
        {
          title: '전준식',
          team: '마케팅부',
          position: '과장',
          src: require('../assets/pages/people/jsjeon.jpg')
        },
        {
          title: '이호원',
          team: '마케팅부',
          position: '과장',
          src: require('../assets/pages/people/hwlee.jpg')
        },
        {
          title: '하재륜',
          team: '마케팅부',
          position: '대리',
          src: require('../assets/pages/people/jrha.jpg')
        },
        {
          title: '공경환',
          team: '마케팅부',
          position: '대리',
          src: require('../assets/pages/people/khkong.jpg')
        },
        {
          title: '진승우',
          team: '마케팅부',
          position: '대리',
          src: require('../assets/pages/people/swjin.jpg')
        },
        {
          title: '최지현',
          team: '마케팅부',
          position: '대리',
          src: require('../assets/pages/people/jhchoe.jpg')
        },
        {
          title: '김민서',
          team: '마케팅부',
          position: '대리',
          src: require('../assets/pages/people/mskim.jpg')
        },
        {
          title: '김준형',
          team: '컨텐츠사업부',
          position: '대리',
          src: require('../assets/pages/people/jhkim.jpg')
        },
        {
          title: '이상아',
          team: '마케팅부',
          position: '대리',
          src: require('../assets/pages/people/vertical_placeholder.png')
        },
        {
          title: '이우준',
          team: '마케팅부',
          position: '대리',
          src: require('../assets/pages/people/wjlee.jpg')
        },
        {
          title: '김수겸',
          team: '개발사업부',
          position: '주임',
          src: require('../assets/pages/people/skkim.jpg')
        },
        {
          title: '장현정',
          team: '지원본부',
          position: '주임',
          src: require('../assets/pages/people/hjjang.jpg')
        },
        {
          title: '최소영',
          team: '유통사업부',
          position: '주임',
          src: require('../assets/pages/people/sychoe.jpg')
        },
        {
          title: '이로운',
          team: '마케팅부',
          position: '주임',
          src: require('../assets/pages/people/rwlee.jpg')
        },
        {
          title: '변두환',
          team: '마케팅부',
          position: '주임',
          src: require('../assets/pages/people/dhbeon.jpg')
        },
        {
          title: '이지은',
          team: '유통사업부',
          position: '주임',
          src: require('../assets/pages/people/jelee.jpg')
        },
        {
          title: '김성식',
          team: '컨텐츠사업부',
          position: '주임',
          src: require('../assets/pages/people/sskim.jpg')
        },
        {
          title: '박재현',
          team: '컨텐츠사업부',
          position: '사원',
          src: require('../assets/pages/people/jhpark.jpg')
        },
        {
          title: '여창훈',
          team: '컨텐츠사업부',
          position: '사원',
          src: require('../assets/pages/people/chyeo.jpg')
        },
        {
          title: '류동근',
          team: '개발사업부',
          position: '사원',
          src: require('../assets/pages/people/dgryu.jpg')
        },
        {
          title: '서혜인',
          team: '유통사업부',
          position: '사원',
          src: require('../assets/pages/people/hiseo.jpg')
        },
        {
          title: '유기환',
          team: '마케팅부',
          position: '사원',
          src: require('../assets/pages/people/khyou.jpg')
        },
        {
          title: '이수영',
          team: '지원본부',
          position: '사원',
          src: require('../assets/pages/people/sylee.jpg')
        },
        {
          title: '정순영',
          team: '마케팅부',
          position: '사원',
          src: require('../assets/pages/people/syjeoung.jpg')
        },
        {
          title: '김다연',
          team: '컨텐츠사업부',
          position: '사원',
          src: require('../assets/pages/people/dykim.jpg')
        },
        {
          title: '조미경',
          team: '컨텐츠사업부',
          position: '사원',
          src: require('../assets/pages/people/vertical_placeholder.png')
        }
      ]
    }),
    computed: {
      person_counter: function () {
        let shuffle = this.image_sources[Math.floor(Math.random() * this.image_sources.length)]
        let tempArry = []
        let resArry = []
        let count = this.count
        console.log(shuffle)
        for (let i = 0; i < this.image_sources.length; i++) {
          if (i !== 0 && i % count === 0) {
            resArry.push(tempArry)
            tempArry = []
            tempArry.push(this.image_sources[i])
            if (i + 1 === this.image_sources.length) {
              resArry.push(tempArry)
            }
          } else {
            tempArry.push(this.image_sources[i])
            if (i + 1 === this.image_sources.length) {
              resArry.push(tempArry)
            }
          }
        }
        return resArry
      } // person function
    } // computed
  }
</script>

<style lang="scss" scoped>

  .main_title {
    .table {
      position: relative;
      width: 320px;
      z-index: 500;
      padding: 20px 0 0 5%;
      div {
        padding: 4px 0;
        font-size: 17px;
      }
    }
  }

  /* Section Part */
  .section_1, .section_2, .section_3, .section_4 {
    width: 100%;
    padding: 50px 0;
    background-color: #ffffff;
    text-align: center;
    color: #515151;
    font-family: Impact, sans-serif;
    z-index: 2000;
    min-height: 700px;
  }

  .memberContainer {
    .memberWrap {
      width: 100%;
      padding: 10px 5%;
      ul {
        display: inline-block;
        .memberList {
          float: left;
          width: 255px;
          transition: all 200ms ease-in-out;
          position: relative;
          z-index: 1000;
          img {
            position: relative;
            max-width: 100%;
            max-height: 348px;
            min-width: 100%;
            min-height: 100%;
            top: -25px;
            z-index: 40;
            transition: all 200ms ease-in-out;
          }
          &:hover, &:active {
            position: relative;
            z-index: 2000;
            transform: scale(1.05);
            img {
              border-radius: 10px;
            }
          }
        }
      }
      &:after {
        content: " ";
        display: table;
        clear: both;
      }
      &.odd {
        text-align: right;
      }
      &.even {
        text-align: left;
      }
    }
  }

  .member_team {
    font-family: 'Nanums_regular', sans-serif;
    color: #019DA5;
    text-align: left;
    font-size: 16px;
    padding: 4px 2px;
  }

  .member_title {
    font-family: 'Nanums_regular', sans-serif;
    color: #414141;
    text-align: left;
    font-size: 17px;
    padding: 2px 10px;
    position: relative;
    z-index: 50;
  }

</style>
