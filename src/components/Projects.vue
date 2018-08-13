<template>
  <div class="main_role" id="main_role"
       :style="this.$parent.$data.mix_data.slide_mover"
       @click="$parent.$options.methods.only_close">

    <input type="hidden" v-bind:value="where_am_i = 2">
<!--
    <img class="main_image" src="../assets/pages/projects/project.jpg" alt="page background image">
-->


    <!-- Main Context on video wrap -->
    <div class="main_title">
      <h2>우리의 발자취</h2>
      <span>- P</span>
      <span>R</span>
      <span>O</span>
      <span>J</span>
      <span>E</span>
      <span>C</span>
      <span>T</span>
      <span>S</span>
    </div>

    <section class="section_1">
      <h3 class="section_1_title">주요 프로젝트</h3>
    </section>

    <section class="section_2">

        <ul class="projects_area" v-lazy-container="{ selector: 'img' }">
          <li class="projects" v-for="source in image_sources">
            <div class="project_wrap">
              <img class="project" :data-src="source.src" :alt="source.title">
              <span>{{ source.title }}</span>
            </div>
          </li>
        </ul>

    </section>

  </div>
</template>

<script>
  export default {
    name: 'projects',
    data: () => ({
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
          title: '이우준',
          team: '마케팅부',
          position: '주임',
          src: require('../assets/pages/people/wjlee.jpg')
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
    })
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

  .section_1 {
    background-color: #ffffff;
    padding: 30px 30px 20px;
    .section_1_title {
      margin: 0;
      color: #313131;
    }
  }

  .section_2 {
    width: 100%;
    background-color: #737751;
    background-size: cover;
  }

  .projects_area {
    text-align: center;
    padding: 0 2%;
    border-radius: 5px;
    background-color: #ffffff;
    &:after {
      content: '';
      display: block;
      clear: both;
    }
  }

  .projects {
    display: inline-block;
    width: 100%;
    padding: 0.5em;
    border-radius: 10px;
    max-width: 300px;
    overflow: hidden;
    transition: all 200ms ease-out;
    text-align: center;
    margin: auto;
    vertical-align: center;
    &:hover, &:active {
      transform: scale(1.02);
    }
  }

  .project_wrap {
    height: 480px;
  }

  .project {
    border-radius: 10px;
    max-width: 100%;
    max-height: 100%;
  }

</style>
