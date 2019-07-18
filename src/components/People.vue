<template>
  <div class="main_role" id="main_role"
       :style="this.$parent.$data.mix_data.slide_mover"
       @click="$parent.$options.methods.only_close">

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
              <img :src="key_to_url(member.src)"
                   :data-src="key_to_url(member.src)"
                   :alt="member.title + ' ' + member.position + '님'"
              >
              <div class="barrier"></div>
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
    mounted() {
      /* Calculate browser width for handle video section */
      let that = this
      this.$nextTick(function () {
        window.addEventListener('resize', function (e) {
          that.windowWidth = window.innerWidth
          that.count = Math.floor(window.innerWidth * 0.96 / 300)
        })
      })
      /* Sort randomly image sources */
      let arr = this.image_sources
      let n = arr.length
      let temp = []
      for (let i = 0; i < n - 1; i++) {
        /* The following line removes one random element from arr */
        /* and pushes it onto tempArr */
        temp.push(arr.splice(Math.floor(Math.random() * arr.length), 1)[0])
      }
      /* Push the remaining item onto tempArr */
      temp.push(arr[0])
      arr = temp
      this.image_sources = arr
    },
    data: () => ({
      windowWidth: window.innerWidth,
      count: Math.floor((window.innerWidth * 0.96) / 300),
      image_sources: [
        {
          title: '김수겸',
          team: '개발팀',
          position: '대리',
          src: 'skkim'
        },
        {
          title: '류동근',
          team: '개발팀',
          position: '사원',
          src: 'dgryu'
        },
        {
          title: '권용무',
          team: '엘씨벤처스 (주)',
          position: '대표',
          src: 'ymkwon'
        },
        {
          title: '이세호',
          team: '마케팅본부',
          position: '부장',
          src: 'shlee'
        },
        {
          title: '김홍식',
          team: '마케팅본부',
          position: '차장',
          src: 'hskim'
        },
        {
          title: '이효진',
          team: '마케팅본부',
          position: '차장',
          src: 'hjlee'
        },
        {
          title: '이호원',
          team: '마케팅본부',
          position: '차장',
          src: 'hwlee'
        },
        {
          title: '하재륜',
          team: '마케팅본부',
          position: '과장',
          src: 'jrha'
        },
        {
          title: '공경환',
          team: '마케팅본부',
          position: '과장',
          src: 'khkong'
        },
        {
          title: '진승우',
          team: '마케팅본부',
          position: '과장',
          src: 'swjin'
        },
        {
          title: '김민서',
          team: '마케팅본부',
          position: '대리',
          src: 'mskim'
        },
        {
          title: '이상아',
          team: '마케팅본부',
          position: '대리',
          src: 'salee'
        },
        {
          title: '이우준',
          team: '마케팅본부',
          position: '대리',
          src: 'wjlee'
        },
        {
          title: '장현정',
          team: '경영지원팀',
          position: '대리',
          src: 'hjjang'
        },
        {
          title: '이로운',
          team: '마케팅본부',
          position: '주임',
          src: 'rwlee'
        },
        {
          title: '변두환',
          team: '마케팅본부',
          position: '대리',
          src: 'dhbeon'
        },
        {
          title: '박재현',
          team: '영상제작팀',
          position: '대리',
          src: 'jhpark'
        },
        {
          title: '여창훈',
          team: '영상제작팀',
          position: '대리',
          src: 'chyeo'
        },
        {
          title: '이수영',
          team: '경영지원팀',
          position: '주임',
          src: 'sylee'
        },
        {
          title: '조미경',
          team: '디자인팀',
          position: '사원',
          src: 'mkjo'
        },
        {
          title: '조우석',
          team: '마케팅본부',
          position: '사원',
          src: 'wsjo'
        },
        {
          title: '박정수',
          team: '마케팅본부',
          position: '사원',
          src: 'jspark'
        },
        {
          title: '이주현',
          team: '마케팅본부',
          position: '사원',
          src: 'jhlee'
        },
        {
          title: '오주은',
          team: '마케팅본부',
          position: '사원',
          src: 'jeoh'
        },
        {
          title: '전현정',
          team: '디자인팀',
          position: '주임',
          src: ''
        },
        {
          title: '유정훈',
          team: '마케팅본부',
          position: '사원',
          src: ''
        },
        {
          title: '장민경',
          team: '디자인팀',
          position: '사원',
          src: ''
        },
      ]
    }),
    methods: {
      key_to_url(key) {
        let url = ''
        if (key) {
          url = 'https://cf.lcventures.net/assets/images/people/' + key + '.jpg'
        } else {
          url = 'https://cf.lcventures.net/assets/images/people/default.png'
        }
        return url
      }
    },
    computed: {
      person_counter: function () {
        let tempArry = []
        let resArry = []
        let width = this.windowWidth
        let count = this.count

        if (width > 1300) {
          // Limit maximum value of images in each line
          count = 4
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
        } else {
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
    padding: 65px 0;
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
      max-width: 1300px;
      margin: 0 auto;
      padding: 65px 2%;

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

          .barrier {
            width: 100%;
            position: absolute;
            height: 380px;
            z-index: 50;
            top: 0;
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
    cursor: default;
  }

  .member_title {
    font-family: 'Nanums_regular', sans-serif;
    color: #414141;
    text-align: left;
    font-size: 17px;
    padding: 2px 10px;
    position: relative;
    z-index: 50;
    cursor: default;
  }

</style>
