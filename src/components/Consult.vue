<template>
  <div class="main_role" id="main_role"
       :style="this.$parent.$data.mix_data.slide_mover"
       @click="$parent.$options.methods.only_close">

    <input type="hidden" v-bind:value="where_am_i = 8">

    <!-- Main Context on video wrap -->
    <div class="main_title">
      <h2>항상 고객과 함께 합니다</h2>
      <span>- C</span>
      <span>O</span>
      <span>N</span>
      <span>S</span>
      <span>U</span>
      <span>L</span>
      <span>T</span>
      <div class="table">
        <div>우리와 프로젝트를 시작해 보세요</div>
      </div>
    </div>

    <section class="section_1">
      <div class="input_wrap first">
        <div class="input_label">이름</div>
        <input type="text" class="name fill" v-model="in_name" placeholder="본인의 이름을 입력해주세요">
      </div>
      <div class="input_wrap">
        <div class="input_label">직책</div>
        <input type="text" class="position fill" v-model="in_position" placeholder="본인의 직책을 입력해주세요">
      </div>
      <div class="input_wrap">
        <div class="input_label">소속</div>
        <input type="text" class="company fill" v-model="in_company" placeholder="본인의 회사명 또는 소속 기관을 입력해주세요">
      </div>
      <div class="input_wrap">
        <div class="input_label">이메일</div>
        <input type="text" class="email fill" v-model="in_email" placeholder="연락받을 이메일 주소를 입력해주세요">
      </div>
      <div class="input_wrap">
        <div class="input_label">전화번호</div>
        <input type="text" class="phone fill" v-model="in_phone" placeholder="연락받을 전화번호를 입력해주세요">
      </div>
      <div class="input_wrap block">
        <div class="input_label">설명</div>
        <textarea class="describe fill area" v-model="in_desc" placeholder="무엇을 도와드릴까요?"></textarea>
      </div>
      <div class="input_wrap block">
        <div class="input_label">첨부파일</div>
        <input type="file" class="file" placeholder="file" @change="add_file()" multiple>
        <input type="button" class="delete" value="파일 삭제" @click="remove_file">
      </div>
<!--
      <div>
        <input type="checkbox" class="check">
        <span class="check_label">정보제공에 동의합니다.</span>
      </div>
-->
      <div>
        <input type="button" class="submit" value="문의하기" @click="submit_form()">
      </div>
    </section>

  </div>
</template>

<script>
  export default {
    name: 'consult',
    data: () => ({
      in_name: '류동근',
      in_position: '사원',
      in_company: '엘씨벤처스',
      in_email: 'dg-jayse.ryu@outlook.com',
      in_phone: '01046311322',
      in_desc: '뷰로 사이트를 만들어요',
      file: []
    }),
    methods : {
      add_file() {
        let file_data = event.target.files[0]
        this.fileNames = file_data.name
        console.log(this.fileNames)
        console.log(file_data)
      },
      remove_file() {
        console.log('4')
      },
      submit_form() {
        console.log('2')
      }
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

  .section_1, .section_2, .section_3 {
    width: 100%;
    padding: 50px 4%;
    background-color: #ffffff;
    text-align: center;
    color: #515151;
    font-family: Impact, sans-serif;
    z-index: 2000;
  }

  .section_1 {
    .input_wrap {
      padding: 8px;
    }
    .input_label {
      font-family: 'Nanums_regular', sans-serif;
      font-size: 14px;
      color: #019DA5;
      text-align: left;
      margin-top: 20px;
    }
    .check_label {
      font-family: 'Nanums_regular', sans-serif;
      font-size: 14px;
      color: #c1c1c1;
      float: left;
    }
    .check {
      width: 25px !important;
      float: left;
    }

    input, textarea {
      font-family: 'Nanums_regular', sans-serif;
      font-size: 13px;
      width: 100%;
      &:focus {
        outline: none;
      }
      padding: 5px 10px;
    }

    .fill{

      border: none;
      border-bottom: 1px solid #ededed;
    }

    .area {
      min-height: 200px;
      padding: 10px 10px;
      resize: vertical;
    }
    .delete {
      border: 1px solid #c1c1c1;
      border-radius: 5px;
      background-color: #fefefe;
      color: #ef2739;
      font-weight: bold;
      margin: 10px 0;
      cursor: pointer;
      transition: all 200ms ease-in-out;
      &:hover, &:active {
        border: 1px solid #fefefe;
        background-color: #ff788a;
        color: #fefefe;
      }
    }
    .submit {
      border: 1px solid #ffffff;
      border-radius: 5px;
      background-color: #019DA5;
      color: #efefef;
      font-weight: bold;
      margin: 10px 0;
      cursor: pointer;
      transition: all 200ms ease-in-out;
      &:hover, &:active {
        background-color: #01AEB7;
      }
    }

    &:after {
      content: '';
      display: block;
      clear: both;
    }
  }


  /*
  ===============================================
  Media query
  ===============================================
  */
  @media (min-width: 836px) {
    .section_1 {
      .input_wrap {
        width: 45%;
        display: inline-block;
      }
      .first {
        width: 45%;
        display: block;
        margin-left: 5%;
      }
      .block {
        width: 90% !important;
      }
      .submit {
        width: 90%;
      }
    }


  }
</style>
