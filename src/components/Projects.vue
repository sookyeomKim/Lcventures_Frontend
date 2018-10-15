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
      <!--<h2>PROJECT</h2>-->
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
      <div><p>광고주의 성과를 최우선시 하는</p></div>
      <div><h3>Performance Agency</h3></div>
    </section>

    <section class="section_2">
      <img src="../assets/pages/projects/section_2/section_bg.jpg" alt="section background image">
    </section>

    <section class="section_3">

      <ul class="projects_area" v-lazy-container="{ selector: 'img' }">

        <li class="project" v-for="project in project_list">
          <div>
            <span class="project_title" v-for="(title, index) in project.title" :class="index % 2 === 0 ? 'even' : 'odd'">{{ title }}&nbsp;</span>
          </div>

          <table class="project_table">
            <tr class="project_tr" v-for="(value, key, index) in project.description" :class="index % 2 === 0 ? 'even' : 'odd'">
              <td class="project_key">{{ key }}</td>
              <td class="project_value">
                <p v-for="val in value">・{{ val }}</p>
              </td>
            </tr>
          </table>

          <img class="project_image" :data-src="project.src" :alt="project.alt">
        </li>

      </ul>

    </section>

  </div>
</template>

<script>
  export default {
    name: 'projects',
    data: () => ({
      project_list: [
        {
          title: ['회원가입 증가는 물론 매출까지 동시에...', '일석이조!'],
          description: {
            광고주: ['F사 (패션브랜드)'],
            광고목표: ['온라인몰 매출증대', '유입수 및 회원가입 증대'],
            운영내용: ['Facebook, Kakao, Targeting Gates 동시운영'],
            광고성과: ['몰유입 550% 증가', '몰매출 2,500% 증가', '회원가입 2,500% 증가']
          },
          src: require('../assets/pages/projects/section_4/01.png'),
          alt: 'project image 1'
        },
        {
          title: ['광고의 시작부터...', 'Step By Step~!!'],
          description: {
            광고주: ['A사 (손해보험)'],
            광고목표: ['다양한 매체를 통한 다량의 DB수집'],
            운영내용: ['SA ・ DA ・ SNS 매체 운영', 'V3 ・ TNK ・ ZUM ・ 모비온 등 동시운영'],
            광고성과: ['광고 초기성과에 비해 DB 수집율 200% 증가', '월 평균 300건의 DB 수집']
          },
          src: require('../assets/pages/projects/section_4/02.png'),
          alt: 'project image 2'
        },
        {
          title: ['매체의 다각화...', '고정관념을 버리고 새로운!'],
          description: {
            광고주: ['K사 (패션브랜드)'],
            광고목표: ['워킹화인 SOX-V 바이럴 영상을 통해 구매 확보'],
            운영내용: ['페이스북 광고 운영', '영상 조회, 구매 전환, 리타겟팅 캠페인을 구성'],
            광고성과: ['영상 조회 캠페인 CPV 20원 / VTR 20.27%', '구매전환 캠페인 ROAS 504%', '리타겟팅 캠페인 ROAS 1,421%']
          },
          src: require('../assets/pages/projects/section_4/03.png'),
          alt: 'project image 3'
        },
        {
          title: ['선택과 집중...', '시즌/비시즌 전략운영', '으로 효율개선!'],
          description: {
            광고주: ['D사 (건강기능식품)'],
            광고목표: ['CPA 30,000원 이하 다량의 DB 수집'],
            운영내용: ['카카오광고 / 밴드 새글피드 광고 운영', '일 예산 500만원으로 목표 CPA에 맞춰 운영'],
            광고성과: ['2017년 대비 DB유입수 2배 증가', '월 평균 6,000건의 DB 수집']
          },
          src: require('../assets/pages/projects/section_4/04.png'),
          alt: 'Project image 4'
        },
        {
          title: ['App 설치량의 부족... 효율매체 Test를 통한', '다운로드 증가!'],
          description: {
            광고주: ['M사 (쇼핑몰)'],
            광고목표: ['CPI 1,000원대 앱 설치 수량 다량 확보'],
            운영내용: ['구글 UAC 캠페인 운영', '상품별 소재를 통해 CPI 1,000원대 유지'],
            광고성과: ['평균 CPI 1,500원 (최저 CPI 600원)', '일 평균 3,000건 설치수 확보 (월 60,000 건)']
          },
          src: require('../assets/pages/projects/section_4/05.png'),
          alt: 'Project image 5'
        },
        {
          title: ['친구추가와 매출 증대를 목표로...', '상황에 맞는 이벤트 기획!'],
          description: {
            광고주: ['ㄱ사 (공동구매 커뮤니티)'],
            광고목표: ['소식받기 인원수 증대', '매출증가', '낮은 객단가'],
            운영내용: ['정보성 컨텐츠 활용 (생활건강)', '카카오스토리 성과형 광고 집행'],
            광고성과: ['집행일 (210일간) 동안 모집인원 136,185명', '(객 단가 1,346원)']
          },
          src: require('../assets/pages/projects/section_4/06.png'),
          alt: 'Project image 6'
        },
        {
          title: ['광고 형태의 변화... 기존 영역에서', '새로운 영역으로!'],
          description: {
            광고주: ['Q사 (유통사)'],
            광고목표: ['해야함'],
            운영내용: [''],
            광고성과: ['']
          },
          src: require('../assets/pages/projects/section_4/07.png'),
          alt: 'Project image 7'
        },
        {
          title: ['회원가입 증가는 물론 매출까지 동시에...', '일석이조!'],
          description: {
            광고주: ['패션브랜드'],
            광고목표: ['온라인몰 매출증대', '유입수 및 회원가입 증대'],
            운영내용: ['Facebook, Kakao, Targeting Gates 동시운영'],
            광고성과: ['몰유입 550% 증가', '몰매출 2,500% 증가', '회원가입 2,500% 증가']
          },
          src: require('../assets/pages/projects/section_4/01.png'),
          alt: 'first'
        },
        {
          title: ['회원가입 증가는 물론 매출까지 동시에...', '일석이조!'],
          description: {
            광고주: ['패션브랜드'],
            광고목표: ['온라인몰 매출증대', '유입수 및 회원가입 증대'],
            운영내용: ['Facebook, Kakao, Targeting Gates 동시운영'],
            광고성과: ['몰유입 550% 증가', '몰매출 2,500% 증가', '회원가입 2,500% 증가']
          },
          src: require('../assets/pages/projects/section_4/01.png'),
          alt: 'first'
        },
        {
          title: ['회원가입 증가는 물론 매출까지 동시에...', '일석이조!'],
          description: {
            광고주: ['패션브랜드'],
            광고목표: ['온라인몰 매출증대', '유입수 및 회원가입 증대'],
            운영내용: ['Facebook, Kakao, Targeting Gates 동시운영'],
            광고성과: ['몰유입 550% 증가', '몰매출 2,500% 증가', '회원가입 2,500% 증가']
          },
          src: require('../assets/pages/projects/section_4/01.png'),
          alt: 'first'
        },
        {
          title: ['회원가입 증가는 물론 매출까지 동시에...', '일석이조!'],
          description: {
            광고주: ['패션브랜드'],
            광고목표: ['온라인몰 매출증대', '유입수 및 회원가입 증대'],
            운영내용: ['Facebook, Kakao, Targeting Gates 동시운영'],
            광고성과: ['몰유입 550% 증가', '몰매출 2,500% 증가', '회원가입 2,500% 증가']
          },
          src: require('../assets/pages/projects/section_4/01.png'),
          alt: 'first'
        },
        {
          title: ['회원가입 증가는 물론 매출까지 동시에...', '일석이조!'],
          description: {
            광고주: ['패션브랜드'],
            광고목표: ['온라인몰 매출증대', '유입수 및 회원가입 증대'],
            운영내용: ['Facebook, Kakao, Targeting Gates 동시운영'],
            광고성과: ['몰유입 550% 증가', '몰매출 2,500% 증가', '회원가입 2,500% 증가']
          },
          src: require('../assets/pages/projects/section_4/01.png'),
          alt: 'first'
        }
      ]
    }),
    mounted () {
      // //catch backward redirect (it works)
      // (function(window, location) {
      //   history.replaceState(null, document.title, location.pathname+"#!/stealingyourhistory")
      //   history.pushState(null, document.title, location.pathname)
      //
      //   window.addEventListener("popstate", function() {
      //     if(location.hash === "#!/stealingyourhistory") {
      //       history.replaceState(null, document.title, location.pathname)
      //       setTimeout(function(){
      //         location.replace("https://naver.com")
      //       },0)
      //     }
      //   }, false)
      // }(window, location))
    }
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

  .section_1, .section_2, .section_3, .section_4 {
    width: 100%;
    background-color: #ffffff;
    text-align: center;
    color: #515151;
    font-family: Impact, sans-serif;
    z-index: 2000;
  }

  .section_1 {
    background-color: #009da5;
    color: #fdfdfd;
    padding: 50px 0;
    div {
      p {
        display: inline-block;
        font-size: 15px;
      }
      h3 {
        font-size: 38px;
        margin: 5px 0;
      }
    }
  }

  .section_2 {
    width: 100%;
  }

  .section_3 {
    width: 100%;
    background-size: cover;
    font-family: 'Nanums_regular', sans-serif;
  }

  .projects_area {
    text-align: center;
    padding: 0 2%;
    background-color: #ffffff;
    &:after {
      content: '';
      display: block;
      clear: both;
    }
  }

  .project {
    display: inline-block;
    width: 100%;
    padding: 0.5em;
    border-radius: 10px;
    // max-width: 300px;
    overflow: hidden;
    transition: all 200ms ease-out;
    text-align: center;
    margin: auto;
    vertical-align: center;
    &:hover, &:active {
      transform: scale(1.01);
    }
  }

  .project {
    width: 100%;
    max-width: 100%;
    max-height: 100%;
    &:after {
      content: '';
      display: block;
      clear: both;
    }
  }

  .project_title {
    font-size: 22px;
    font-weight: bold;
    &.odd {
      color: #009da5;
    }
    &.even {
      color: #212121;
    }
  }

  .project_table {
    width: 50%;
    float: left;
    .project_tr {
      border-top: 2px solid #c1c1c1;
      border-bottom: 2px solid #c1c1c1;
      .project_key {
        border-right: 2px solid #c1c1c1;
      }
    }
  }

  .project_image {
    width: 50%;
    float: left;
  }


</style>
