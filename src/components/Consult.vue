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
        <div class="input_label">이름*</div>
        <input type="text" class="name fill" id="in_name" v-model="in_name" maxlength="16" placeholder="본인의 이름을 입력해주세요">
      </div>
      <div class="input_wrap">
        <div class="input_label">직책</div>
        <input type="text" class="position fill" id="in_position" v-model="in_position" maxlength="16" placeholder="본인의 직책을 입력해주세요">
      </div>
      <div class="input_wrap">
        <div class="input_label">소속*</div>
        <input type="text" class="company fill" id="in_group" v-model="in_group" maxlength="50" placeholder="본인의 회사명 또는 소속 기관을 입력해주세요">
      </div>
      <div class="input_wrap">
        <div class="input_label">이메일</div>
        <input type="text" class="email fill" id="in_email" v-model="in_email" maxlength="50" placeholder="연락받을 이메일 주소를 입력해주세요">
      </div>
      <div class="input_wrap">
        <div class="input_label">전화번호*</div>
        <input type="number" class="phone fill" id="in_phone" v-model="in_phone" maxlength="12" placeholder="연락받을 전화번호를 입력해주세요">
      </div>
      <div class="input_wrap block">
        <div class="input_label">설명</div>
        <textarea class="describe fill area" id="in_desc" v-model="in_desc" maxlength="3000" placeholder="무엇을 도와드릴까요?"></textarea>
      </div>
      <div class="input_wrap block">
        <div class="input_label">첨부파일</div>
        <input type="file" class="file" id="file_input" ref="file_input" @change="add_file()" multiple>
        <input type="button" class="delete" value="파일 삭제" @click="remove_file" v-show="file_flag === 1">
      </div>

      <div>
        <input type="button" class="submit" value="문의하기" @click="submit_form()">
      </div>

<!--
      <div v-if="test[0]">
        <div>{{ test[0].name }}</div>
        <div>{{ test[1].name }}</div>
        <div>{{ test[0].group }}</div>
        <div>{{ test[1].group }}</div>
      </div>
-->

    </section>
  </div>
</template>

<script>
  export default {
    name: 'consult',
    data: () => ({
      file_flag: 0,
      in_name: '',
      in_position: '',
      in_group: '',
      in_email: '',
      in_phone: '',
      in_desc: '',
      in_file: [],
      test: []
    }),
    methods: {
      add_file() {
        /* When file data changed */
        let file_data = event.target.files[0]
        let fileNames = file_data.name
        console.log(fileNames)
        this.in_file[0] = file_data
        this.file_flag = 1
      },
      remove_file() {
        /* Remove file data */
        this.$refs.file_input.value = ''
        this.in_file = []
        this.file_flag = 0
      },
      submit_form() {
        /* axios get test */
        /*
        const baseURI = 'http://127.0.0.1:8000'
        this.$axios.get(`${baseURI}/consult/`)
          .then((result) => {
            console.log(result)
            this.test = result.data
            console.log(this.test)
          })
        */

        /* When mandatory forms are empty */
        if (this.in_name === '') {
          alert('이름을 입력해주세요.')
          document.getElementById('in_name').focus()
        }
        else if (this.in_group === '') {
          alert('회사명 또는 소속기관을 입력해주세요.')
          document.getElementById('in_group').focus()
        }
        else if (this.in_phone === '') {
          alert('연락받을 전화번호를 입력해주세요.')
          document.getElementById('in_phone').focus()
        }

        /* When file does not exist */
        else if (!this.in_file[0]){
          let formData = new FormData()
          formData.append('name', this.in_name)
          formData.append('position', this.in_position)
          formData.append('group', this.in_group)
          formData.append('email', this.in_email)
          formData.append('phone', this.in_phone)
          formData.append('describe', this.in_desc)
          const baseURI = 'http://13.209.67.94/'
          const config = {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
          /* Do axios post */
          this.$axios.post(`${baseURI}/consult/`, formData, config)
            .then((response) => {
              console.log(response)
              alert('접수되었습니다.')
              this.in_name = ''
              this.in_position = ''
              this.in_group = ''
              this.in_email = ''
              this.in_phone = ''
              this.in_desc = ''
              this.$refs.file_input.value = ''
              this.in_file = []
              this.file_flag = 0
            })
            .catch((e) => {
              console.error(e)
              alert('전송 중 문제가 발생하였습니다. 다시시도 또는 이메일을 이용해주세요.')
            })
        }

        /* When file exist */
        else {
          let formData = new FormData()
          formData.append('name', this.in_name)
          formData.append('position', this.in_position)
          formData.append('group', this.in_group)
          formData.append('email', this.in_email)
          formData.append('phone', this.in_phone)
          formData.append('describe', this.in_desc)
          formData.append('file', this.$refs.file_input.files[0])
          const baseURI = 'http://13.209.67.94/'
          const config = {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
          /* Do axios post */
          this.$axios.post(`${baseURI}/consult/`, formData, config)
            .then((response) => {
              console.log(response)
              alert('접수되었습니다.')
              this.in_name = ''
              this.in_position = ''
              this.in_group = ''
              this.in_email = ''
              this.in_phone = ''
              this.in_desc = ''
              this.$refs.file_input.value = ''
              this.in_file = []
              this.file_flag = 0
            })
            .catch((e) => {
              console.error(e)
              alert('전송 중 문제가 발생하였습니다. 다시시도 또는 이메일을 이용해주세요.')
            })
        }
      },
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

    .fill {

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

    .example-drag label.btn {
      display: block;
      margin-bottom: 0;
      margin-right: 1rem;
    }
    .example-drag .drop-active {
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      z-index: 9999;
      opacity: .6;
      text-align: center;
      background: #000;
    }
    .example-drag .drop-active h3 {
      margin: -.5em 0 0;
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);
      font-size: 40px;
      color: #fff;
      padding: 0;
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
