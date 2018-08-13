<template>
  <div class="main_role" id="main_role"
       :style="this.$parent.$data.mix_data.slide_mover"
       @click="$parent.$options.methods.only_close">
    <!--
    <img class="main_image" src="../assets/pages/about/about_low.jpg" alt="page background image">
-->

    <!-- Main Context on video wrap -->
    <div class="main_title">
      <h2>LCVENTURES</h2>
      <span>- C</span>
      <span>O</span>
      <span>M</span>
      <span>P</span>
      <span>A</span>
      <span>N</span>
      <span>Y</span>
      <div class="table">
        <div>- 회사소개</div>
        <div>- 로고</div>
        <div>- 연혁</div>
        <div>- 조직도</div>
        <div>- 오시는길</div>
      </div>
    </div>

    <section class="section_1">

      <div class="lc_slogan">

        <!--
        <span class="slogan_1">Creative </span>
        <span class="slogan_2">+ </span>
        <span class="slogan_3">Performance</span>
        -->

        <span>급변하는 디지털시대의 혼돈 속에서 우리는 어떤 모습일까요?</span>

        <div class="division_bar"></div>

        <!--
        <p>엘씨벤처스는 매번 새로운 크리에이티브에 도전하고 있습니다.</p>
        <p>이를 토대로 엘씨벤처스의 브랜드 가치를 높여 국내 경쟁력을 확보하겠습니다.</p>
        -->

        <p>우리는 디지털 미디어의 변화에 빠르게 적응하고, 대응하고, 리드합니다.</p>
        <p>변화를 두려워 하지 않는 자세, 능동적이고 창의적인 행동들이 모여 엘씨벤처스를 이룹니다.</p>
        <p>삶을 윤택하게 만드는 기술,</p>
        <p>함께 만들어갑시다.</p>

      </div>
      <div class="division_bar"></div>

    </section>
    <!--section 1-->

    <section class="section_2">

      <div class="logo_explain">
        <div class="logo_floor_1">
          <img src="../assets/pages/about/logo_type.jpg" alt="LC Ventures logo type image.">
        </div>
        <div class="logo_floor_2">
          <p>카메라의 초점을 맞추는 형태의 테두리는 엘씨벤처스의 집중력과 팀워크를 나타내며</p>
          <p>테두리의 위, 아래, 양옆으로 트여 있는 부분은 클라이언트와의 원활한 커뮤니케이션을 뜻하기도 합니다.</p>
          <p>또한 지나치게 두껍지도 않고 얇지도 않은 적당한 선의 두께는 엘씨벤처스 직원들의 변함없는 열정과 끈기를 나타냅니다.</p>
          <p>엘씨벤처스 심볼은 마케팅기업다운 디자인적인 세련미와 심플함을 놓치지 않고 표현 했습니다.</p>
        </div>
      </div>

    </section>
    <!--section 2-->

    <section class="section_3">

      <div class="history">

        <div class="center_line"></div>

        <div class="history_floor">
          <div class="contents_wrap">
            <div class="inner_image right"></div>
            <div class="inner_text right">
              <ul>
                <li>KAKAO 프리미엄 공식대행사 선정</li>
                <li>Google C-Level 파트너 선정</li>
                <li>SK Planet 디자인외주사 선정</li>
              </ul>
            </div>
          </div>
          <div class="dummy"></div>
        </div>

        <div class="history_floor">
          <div class="dummy"></div>
          <div class="contents_wrap">
            <div class="inner_image left"></div>
            <div class="inner_text left">
              <div>
                <p>지원본부 확장</p>
                <p>영상제작 Team</p>
                <ul>
                  <li>Facebook Agency Directory 광고대행사 선정</li>
                  <li>SK communications 공식대행사 선정</li>
                  <li>SK Planet 공식대행사 선정</li>
                  <li>Yellow mobile 공식대행사 선정</li>
                  <li>Taboola 공식대행사 선정</li>
                </ul>
                <ul>
                  <li>KAKAO 광고 성과측정 프로그램</li>
                  <li>업무자동화 프로그램</li>
                  <li>DB추출 프로그램</li>
                  <li>인스타그램 자동 팔로워 증가 프로그램</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="history_floor">
          <div class="contents_wrap">
            <div class="inner_image right"></div>
            <div class="inner_text right">Image will be better</div>
          </div>
          <div class="dummy"></div>
        </div>

        <div class="history_floor">
          <div class="dummy"></div>
          <div class="contents_wrap">
            <div class="inner_image left"></div>
            <div class="inner_text left">Image will be better</div>
          </div>
        </div>

        <div class="history_floor">
          <div class="contents_wrap">
            <div class="inner_image right"></div>
            <div class="inner_text right">Image will be better</div>
          </div>
          <div class="dummy"></div>
        </div>

      </div>

    </section>
    <!--section 3-->

    <section class="section_4">

      <div class="map_wrap">
        <vue-daum-map class="daum_map"
          :appKey="appKey"
          :center.sync="center"
          :level.sync="level"
          :mapTypeId="mapTypeId"
          :libraries="libraries"
          @load="onLoad"
          @center_changed=""
          @zoom_start=""
          @zoom_changed=""
          @bounds_changed=""
          @click=""
          @dblclick=""
          @rightclick=""
          @mousemove=""
          @dragstart=""
          @drag=""
          @dragend=""
          @idle=""
          @tilesloaded=""
          @maptypeid_changed=""
        >
        </vue-daum-map>
        <div class="map_info">서울 성동구 뚝섬로 1길 25 한라에코밸리 206호</div>
      </div>

    </section>
    <!--section 4-->

  </div><!--Main role-->

</template>

<script>
  import VueDaumMap from 'vue-daum-map'

  export default {
    name: 'about',
    data: () => ({
      windowWidth: window.innerWidth,
      // eslint-disable-next-line
      // Kakao Js app key
      appKey: 'c7907ca3d547898728698e99b7c45d01',
      // Starting Latitude, Longitude
      center: {lat: 37.543907, lng: 127.046351},
      // Zoom level
      level: 2,
      // Map type
      mapTypeId: VueDaumMap.MapTypeId.NORMAL,
      // Add library
      libraries: [],
      // Map object. Access after map loaded.
      map: null
    }),
    methods: {
      // If map load completed, run load event.
      onLoad (map) {
        this.map = map
      }
    },
    mounted () {
      /* Calculate browser width for handle video section */
      let that = this
      this.$nextTick(function () {
        window.addEventListener('resize', function (e) {
          that.windowWidth = window.innerWidth
        })
      })
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

  /* section 1 start */
  .section_1, .section_2, .section_3, .section_4 {
    width: 100%;
    background-color: #ffffff;
    text-align: center;
    color: #515151;
    font-family: Impact, sans-serif;
    z-index: 2000;
  }

  /* section 1 end */

  .lc_slogan {
    padding: 50px 0;
    background-color: #009da5;
    span {
      color: #fdfdfd;
      font-size: 38px;
      font-weight: bold;
      font-family: 'Nanums_regular', sans-serif;
    }
    .division_bar {
      width: 60px;
      height: 2px;
      background-color: #fdfdfd;
      margin: 10px auto 15px;
    }
    p {
      font-family: 'Nanums_regular', sans-serif;
      color: #fdfdfd;
      font-size: 15px;
    }
  }

  .logo_explain {
    padding: 50px 0;
    text-align: center;
    &:after {
      content: '';
      display: block;
      clear: both;
    }
  }

  .logo_floor_1 {
    img {
      width: 95%;
      max-width: 950px;
      padding: 20px 0;
    }
  }

  .logo_floor_2 {
    font-family: 'Nanums_regular', sans-serif;
    font-size: 16px;
    padding: 4px 0;
    p {
      padding: 3px 10px;
    }
  }

  .history {
    position: relative;
    background-color: #e5fafb;
    padding: 20px 0;
  }

  .center_line {
    position: absolute;
    width: 4px;
    height: calc(100% - 40px);
    top: 20px;
    left: 50%;
    background-color: #009da5;
    border-radius: 5px;
  }

  .history_floor {
    width: 90%;
    margin: 0 auto;
    &:after {
      content: '';
      display: block;
      clear: both;
    }
  }

  .contents_wrap {
    width: 50%;
    vertical-align: top;
    float: left;
    &:after {
      content: '';
      display: block;
      clear: both;
    }
  }

  .dummy {
    width: 50%;
    height: 200px;
    vertical-align: top;
    float: left;
  }

  .inner_text {
    height: 100%;
    float: left;
    margin: 10px 5%;
  }

  .inner_image {
    width: 180px;
    height: 180px;
    margin: 0 5%;
    background-color: #009da5;
    float: left;
    border-radius: 50%;
  }

  .right {
    float: right;
    text-align: right;
  }
  .left {
    float: left;
    text-align: left;
  }

  .map_wrap {
    padding: 20px 0;
  }

  .daum_map {
    position: relative;
    width: 92%;
    height: 480px;
    margin: auto;
  }

  .map_info {
    width: 92%;
    min-height: 25px;
    color: #fdfdfd;
    font-size: 17px;
    background-color: rgba(25,25,25,0.9);
    margin: 0 auto;
    padding: 5px 2px;
  }
</style>
