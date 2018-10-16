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

    <section class="section_first">
      <div><p>광고주의 성과를 최우선시 하는</p></div>
      <div><h3>Performance Agency</h3></div>
    </section>

    <section class="section_1">
      <div class="icon_wrapper">
        <div class="section_1_card">
          <img src="../assets/pages/projects/section_1/icon_1.png" alt="Digital image">
          <p class="card_text_first">Digital Performance</p>
          <div class="card_division"></div>
          <div class="card_text_second">
            <p>더 이상 디지털 마케팅은</p>
            <p>브랜딩과 퍼포먼스로 나뉘지 않습니다</p>
          </div>
          <div class="card_text_third">
            <p>퍼포먼스에 집중하는 전략과</p>
            <p>매니지먼트 시스템으로</p>
            <p>최상의 성과를 달성합니다.</p>
          </div>
        </div>
        <div class="section_1_card">
          <img src="../assets/pages/projects/section_1/icon_2.png" alt="Creative image">
          <p class="card_text_first">Unique Creative</p>
          <div class="card_division"></div>
          <div  class="card_text_second">
            <p>크리에이티브는 새로워야 하며,</p>
            <p>구매욕구를 자극할 전략이 필요합니다</p>
          </div>
          <div  class="card_text_third">
            <p>또한 고객의 반응을 수시로 체크하여</p>
            <p>지속적인 수정 및 반영이</p>
            <p>필요합니다.</p>
          </div>
        </div>
        <div class="section_1_card">
          <img src="../assets/pages/projects/section_1/icon_3.png" alt="Hand shake image">
          <p class="card_text_first">Next Step</p>
          <div class="card_division"></div>
          <div class="card_text_second">
            <p>비즈니스는 빠르게 변하고 있습니다</p>
          </div>
          <div class="card_text_third">
            <p>다양한 제휴사업의 경험과 네트워크로</p>
            <p>더 나은 비즈니스 방향을</p>
            <p>제시하고 함께 가겠습니다.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section_2">
      <div class="section_2_bg">
        <div class="section_2_contents">
          <div class="section_2_text_wrap"><p class="section_2_normal">엘씨벤처스에서는&nbsp;</p><p  class="section_2_special">다양한 광고제안</p><p class="section_2_normal">을</p></div>
          <div class="section_2_text_wrap last_wrap"><p class="section_2_special">한번에&nbsp;</p><p class="section_2_normal">받아 보실 수 있습니다</p></div>
          <div class="section_2_image_wrap">
            <img src="../assets/pages/projects/section_2/01.jpg" alt="marketing platform image 1">
            <img src="../assets/pages/projects/section_2/02.jpg" alt="marketing platform image 2">
          </div>
          <div class="section_2_image_wrap">
            <img src="../assets/pages/projects/section_2/03.jpg" alt="marketing platform image 3">
            <img src="../assets/pages/projects/section_2/04.jpg" alt="marketing platform image 4">
          </div>
        </div>
      </div>
    </section>

    <section class="section_3">
      <div class="section_3_contents">
        <div class="section_3_text_wrap"><p class="section_3_normal">엘씨벤처스만의&nbsp;</p><p class="section_3_special">최적화 된 맞춤전략</p><p class="section_3_normal">으로</p></div>
        <div class="section_3_text_wrap last_wrap"><p class="section_3_normal">광고관리에 문제가</p><p class="section_3_normal">없도록 하겠습니다</p></div>
        <div class="section_3_image_wrap">
          <img class="section_3_image" src="../assets/pages/projects/section_3/04_diagram.png" alt="LC ventures strategic image">
        </div>
      </div>
    </section>

    <section class="section_4">
      <ul class="projects_area" v-lazy-container="{ selector: 'img' }">

        <li class="project" v-for="(project, index) in project_list" :class="index % 2 === 0 ? 'even' : 'odd'">

          <div class="project_title_wrap">
            <span class="project_title" v-for="(title, index) in project.header"
                  :class="index % 2 === 0 ? 'even' : 'odd'">{{ title }}&nbsp;</span>
          </div>

          <div class="project_contents_wrap">
            <div class="project_table_wrap">
              <table class="project_table">
                <tr class="project_tr" v-for="(value, index) in project.description"
                    :class="index % 2 === 0 ? 'even' : 'odd'">
                  <td class="project_key">{{ value['title'] }}</td>
                  <td class="project_value">
                    <p v-for="list in value['contents']">・{{ list }}</p>
                  </td>
                </tr>
              </table>
            </div>

            <div class="project_image_wrap">
              <img v-show="project.src" class="project_image" :data-src="project.src" :alt="project.alt">
            </div>
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
      project_list: [
        {
          header: ['회원가입 증가는 물론 매출까지 동시에...', '일석이조!'],
          description: [
            {title: '광고주', contents: ['F사 (패션브랜드)']},
            {title: '광고목표', contents: ['온라인몰 매출증대', '유입수 및 회원가입 증대']},
            {title: '운영내용', contents: ['Facebook, Kakao, Targeting Gates 동시운영']},
            {title: '광고성과', contents: ['몰유입 550% 증가', '몰매출 2,500% 증가', '회원가입 2,500% 증가']}
          ],
          src: require('../assets/pages/projects/section_4/01.png'),
          alt: 'Project image 1'
        },
        {
          header: ['광고의 시작부터...', 'Step By Step~!!'],
          description: [
            {title: '광고주', contents: ['A사 (손해보험)']},
            {title: '광고목표', contents: ['다양한 매체를 통한 다량의 DB수집']},
            {title: '운영내용', contents: ['SA ・ DA ・ SNS 매체 운영', 'V3 ・ TNK ・ ZUM ・ 모비온 등 동시운영']},
            {title: '광고성과', contents: ['광고 초기성과에 비해 DB 수집율 200% 증가', '월 평균 300건의 DB 수집']}
          ],
          src: require('../assets/pages/projects/section_4/02.png'),
          alt: 'Project image 2'
        },
        {
          header: ['매체의 다각화...', '고정관념을 버리고 새로운!'],
          description: [
            {title: '광고주', contents: ['K사 (패션브랜드)']},
            {title: '광고목표', contents: ['워킹화인 SOX-V 바이럴 영상을 통해 구매 확보']},
            {title: '운영내용', contents: ['페이스북 광고 운영', '영상 조회, 구매 전환, 리타겟팅 캠페인을 구성']},
            {title: '광고성과', contents: ['영상 조회 캠페인 CPV 20원 / VTR 20.27%', '구매전환 캠페인 ROAS 504%', '리타겟팅 캠페인 ROAS 1,421%']}
          ],
          src: require('../assets/pages/projects/section_4/03.png'),
          alt: 'Project image 3'
        },
        {
          header: ['선택과 집중...', '시즌/비시즌 전략운영', '으로 효율개선!'],
          description: [
            {title: '광고주', contents: ['D사 (건강기능식품)']},
            {title: '광고목표', contents: ['CPA 30,000원 이하 다량의 DB 수집']},
            {title: '운영내용', contents: ['카카오광고 / 밴드 새글피드 광고 운영', '일 예산 500만원으로 목표 CPA에 맞춰 운영']},
            {title: '광고성과', contents: ['2017년 대비 DB유입수 2배 증가', '월 평균 6,000건의 DB 수집']}
          ],
          src: require('../assets/pages/projects/section_4/04.png'),
          alt: 'Project image 4'
        },
        {
          header: ['App 설치량의 부족... 효율매체 Test를 통한', '다운로드 증가!'],
          description: [
            {title: '광고주', contents: ['M사 (쇼핑몰)']},
            {title: '광고목표', contents: ['CPI 1,000원대 앱 설치 수량 다량 확보']},
            {title: '운영내용', contents: ['구글 UAC 캠페인 운영', '상품별 소재를 통해 CPI 1,000원대 유지']},
            {title: '광고성과', contents: ['평균 CPI 1,500원 (최저 CPI 600원)', '일 평균 3,000건 설치수 확보 (월 60,000 건)']}
          ],
          src: require('../assets/pages/projects/section_4/05.png'),
          alt: 'Project image 5'
        },
        {
          header: ['친구추가와 매출 증대를 목표로...', '상황에 맞는 이벤트 기획!'],
          description: [
            {title: '광고주', contents: ['ㄱ사 (공동구매 커뮤니티)']},
            {title: '광고목표', contents: ['소식받기 인원수 증대', '매출증가', '낮은 객단가']},
            {title: '운영내용', contents: ['정보성 컨텐츠 활용 (생활건강)', '카카오스토리 성과형 광고 집행']},
            {title: '광고성과', contents: ['집행일 (210일간) 동안 모집인원 136,185명', '(객 단가 1,346원)']}
          ],
          src: require('../assets/pages/projects/section_4/06.png'),
          alt: 'Project image 6'
        },
        {
          header: ['광고 형태의 변화... 기존 영역에서', '새로운 영역으로!'],
          description: [
            {title: '광고주', contents: ['Q사 (유통사)']},
            {title: '광고목표', contents: ['11번가 - CPT영역검토 및 전반적 광고영역 재조정 / 매출 상승', 'NAVER - 스마트스토어 매출 증대']},
            {title: '운영내용', contents: ['11번가 - 광고 분석을 통해 저효율 CPT영역 80%가량 OFF, 해당 광고비용 CPC영역으로 변환', 'NAVER - 기존 SA 광고에서 쇼핑검색 광고로 전면 교체']},
            {title: '광고성과', contents: ['11번가 - 유입량 2.3배 상승 / 매출 20% 상승', 'NAVER - 매출 8배 상승']}
          ],
          src: require('../assets/pages/projects/section_4/07.png'),
          alt: 'Project image 7'
        },
        {
          header: ['SNS 계정 활성화는 물론', '매출까지 동시에!'],
          description: [
            {title: '광고주', contents: ['M사 (고양이 쇼핑몰)']},
            {title: '광고목표', contents: ['SNS 팔로워 및 좋아요 수 증가', 'SNS를 통한 사이트 유입량 증가', '매출 증대']},
            {title: '운영내용', contents: ['페이스북 / 인스타그램 계정 운영', '페이스북 / 인스타그램 스폰서 광고 운영', '사이트 컨설팅을 통한 구매유도']},
            {title: '광고성과', contents: ['SNS 계정 활성화 및 팔로워 및 좋아요 수 증가', 'SNS를 통한 사이트 유입량 약 114% 증가', '사이트 매출 약 2.8배 증가']}
          ],
          src: require('../assets/pages/projects/section_4/08.png'),
          alt: 'Project image 8'
        },
        {
          header: ['일상속에서', '편안함 & 재미를 느끼게 하는 영상!'],
          description: [
            {title: '광고주', contents: ['E사 (패션 브랜드)']},
            {title: '기획의도', contents: ['바이럴영상 / 일상생활 속에서 남녀간의 상황을 보여주는 동시에 일상에서 편안하게 입을 수 있는 의상을 셀럽을 이용해 어필']},
            {title: '영상길이', contents: ['15초']},
            {title: '예산', contents: ['편당 500~600만원']}
          ],
          src: require('../assets/pages/projects/section_4/09_01.png'),
          alt: 'Project image 9-1'
        },
        {
          description: [
            {title: '광고주', contents: ['K사 (패션 브랜드)']},
            {title: '기획의도', contents: ['판매영상 / 웹드라마형식 / 아편바지에 중독된 남자와 말리는 여자간의 신경전을 스토리 형식으로 보여줌으로써 상품의 장점을 자연스럽게 전달']},
            {title: '영상길이', contents: ['41초']},
            {title: '예산', contents: ['편당 300~400만원']}
          ],
          src: require('../assets/pages/projects/section_4/09_02.png'),
          alt: 'Project image 9-2'
        },
        {
          header: ['국내 대기업과 함께 진행한', '연예인을 이용한 마케팅!'],
          description: [
            {title: '광고주', contents: ['엔터테인먼트사']},
            {title: '기획의도', contents: ['인기 아이돌을 이용한 굿즈 페이지 홍보를 위한 이미지 제작']},
            {title: '모델', contents: ['EXO / GOT7']},
          ],
          src: require('../assets/pages/projects/section_4/10_01.png'),
          alt: 'Project image 10-1'
        },
        {
          description: [
            {title: '광고주', contents: ['엔터테인먼트사']},
            {title: '기획의도', contents: ['신규 App 홍보 및 다운로드 증가를 위한 이미지 제작']},
            {title: '모델', contents: ['ikon']},
          ],
          src: require('../assets/pages/projects/section_4/10_02.png'),
          alt: 'Project image 10-2'
        },
      ]
    }),
    mounted() {
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

  .section_first, .section_1, .section_2, .section_3, .section_4 {
    width: 100%;
    background-color: #ffffff;
    text-align: center;
    color: #515151;
    font-family: Impact, sans-serif;
    z-index: 2000;
  }

  .section_first {
    background-color: #009da5;
    color: #fdfdfd;
    padding: 50px 0;
    div {
      p {
        display: inline-block;
        font-size: 18px;
      }
      h3 {
        font-size: 38px;
        margin: 5px 0;
      }
    }
  }

  @media (max-width: 835px) {
    .section_first {
      padding: 40px 0;
      div {
        p {
          font-size: 16px;
        }
        h3 {
          font-size: 30px;
        }
      }
    }
  }/* media */

  .section_1 {
    background-color: #fdfdfd;
  }

  .icon_wrapper {
    width: 100%;
    max-width: 1100px;
    margin: auto;
    padding: 50px 0;
    &:after {
      content: '';
      display: block;
      clear: both;
    }
  }

  .section_1_card {
    width: 33.33%;
    float: left;
    padding: 15px 0;
    border-right: 2px solid #c1c1c1;
    &:nth-last-child(1) {
      border: none;
    }
  }

  @media (max-width: 835px) {
    .section_1_card {
      width: 100%;
      border: none;
    }
  }/* media */

  .card_text_first {
    font-size: 24px;
    padding: 15px 0;
    color: #313131;
  }

  .card_text_second {
    color: #009da5;
    padding: 10px 0;
    font-size: 15px;
    line-height: 20px;
  }

  .card_text_third {
    font-size: 15px;
    line-height: 20px;
  }

  .card_division {
    height: 4px;
    width: 15%;
    background-color: #414141;
    margin: 5px auto;
  }

  .section_2 {
    width: 100%;
  }

  .section_2_bg {
    width: 100%;
    background-image: url('../assets/pages/projects/section_2/section_bg.jpg');
    background-size: cover;
    background-position: 50% 50%;
    background-attachment: fixed;
    padding: 50px 0;
  }

  @media (max-width: 835px) {
    .section_2_bg {
      background-attachment: unset;
    }
  }

  .section_2_contents {
    .section_2_text_wrap {
      font-size: 24px;
      line-height: 30px;
      .section_2_normal {
        display: inline-block;
        color: #fafafa;
      }
      .section_2_special {
        display: inline-block;
        color: #09c0c8;
        font-weight: bold;
      }
    }
    .last_wrap {
      padding-bottom: 35px;
    }
  }

  .section_2_image_wrap {
    width: 100%;
    max-width: 1100px;
    margin: auto;
    img {
      width: calc(48%);
      padding: 1%;
      transition: all 200ms ease-in-out;
      &:hover, &:active {
        transform: scale(1.02);
      }
    }
  }

  @media (max-width: 835px) {
    .section_2_contents {
      .section_2_text_wrap {
        font-size: 20px;
        line-height: 25px;
      }
      .last_wrap {
        padding-bottom: 30px;
      }
    }
    .section_2_image_wrap {
      img {
        width: calc(87%);
        padding: 1%;
      }
    }
  }/* media */

  .section_3 {
    background-color: #eafcfc;
  }

  .section_3_contents {
    padding: 50px 0;
    .section_3_text_wrap {
      font-size: 24px;
      line-height: 30px;
      .section_3_normal {
        display: inline-block;
      }
      .section_3_special {
        display: inline-block;
        color: #009da5;
        font-weight: bold;
      }
    }
    .last_wrap {
      padding-bottom: 40px;
    }
  }

  .section_3_image_wrap {
    width: 100%;
    max-width: 1100px;
    margin: auto;
    img {
      width: 60%;
    }
  }

  @media (max-width: 835px) {
    .section_3_contents {
      padding: 35px 0;
      .section_3_text_wrap {
        font-size: 20px;
        line-height: 25px;
      }
      .last_wrap {
        padding-bottom: 30px;
      }
    }

    .section_3_image_wrap {
      width: 100%;
      margin: auto;
      img {
        width: 85%;
      }
    }
  }/* media */

  .section_4 {
    width: 100%;
    padding-top: 40px;
    background-size: cover;
    font-family: 'Nanums_regular', sans-serif;
  }

  .projects_area {
    text-align: center;
    background-color: #ffffff;
    &:after {
      content: '';
      display: block;
      clear: both;
    }
  }

  .project {
    width: 100%;
    max-width: 1200px;
    max-height: 100%;
    padding: 40px 0;
    //border-radius: 10px;
    // max-width: 300px;
    overflow: hidden;
    transition: all 200ms ease-out;
    text-align: center;
    margin: auto;
    vertical-align: center;
    /*&:hover, &:active {
      transform: scale(1.01);
    }*/
    &.even {
      background-color: #ffffff;
    }
    &.odd {
      background-color: #f9f9f9;
    }
  }

  .project_title_wrap {
    padding-bottom: 25px;
    word-wrap: normal;
    word-break: keep-all;
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
  }

  @media (max-width: 835px) {
    .project_title_wrap {
      padding-top: 10px;
      padding-bottom: 20px;
      word-wrap: normal;
      word-break: keep-all;
      .project_title {
        font-size: 18px;
        font-weight: bold;
        &.odd {
          color: #009da5;
        }
        &.even {
          color: #212121;
        }
      }
    }
  }


  .project_contents_wrap {
    font-size: 0px;
    &:after {
      content: '';
      display: block;
      clear: both;
    }
    .project_table_wrap {
      display: inline-block;
      font-size: 16px;
      line-height: 20px;
      width: 50%;
      vertical-align: middle;
      padding: 1% 2%;
      .project_table {
        width: 100%;
        text-align: left;
        .project_tr {
          td {
            padding: 10px;
            vertical-align: top;
          }
          .project_key {
            width: 25%;
          }
          .project_value {

          }
          border-top: 2px solid #c1c1c1;
          border-bottom: 2px solid #c1c1c1;
          &.odd {
            background-color: #f0f0f0;
          }
          &.even {

          }
          .project_key {
            border-right: 2px solid #c1c1c1;
          }
        }
      }
    }
    .project_image_wrap {
      display: inline-block;
      text-align: center;
      vertical-align: middle;
      width: 50%;
      padding: 1% 2%;
      .project_image {
        width: 100%;
        max-height: 550px;
      }
    }
  }

  @media (max-width: 835px) {
    .project_contents_wrap {
      .project_table_wrap {
        font-size: 14px;
        line-height: 15px;
        width: 100%;
        vertical-align: middle;
        padding: 1% 10%;
        .project_table {
          width: 100%;
          text-align: left;
          .project_tr {
            td {
              padding: 10px;
              vertical-align: top;
            }
            .project_key {
              width: 25%;
            }
            .project_value {

            }
            border-top: 2px solid #c1c1c1;
            border-bottom: 2px solid #c1c1c1;
            &.odd {
              background-color: #f0f0f0;
            }
            &.even {

            }
            .project_key {
              border-right: 2px solid #c1c1c1;
            }
          }
        }
      }
      .project_image_wrap {
        text-align: center;
        vertical-align: middle;
        width: 100%;
        padding: 1% 2%;
        .project_image {
          width: 83%;
        }
      }
    }
  }





</style>
