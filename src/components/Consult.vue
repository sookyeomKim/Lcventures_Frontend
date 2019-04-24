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
        <div>- 우리와 프로젝트를 시작해 보세요</div>
      </div>
    </div>

    <section class="section_1">
      <form @submit.prevent="submit_form">
        <div class="divide">
          <div class="input_wrap">
            <div class="input_label">이름*</div><div class="error_label" v-if="errors.has('in_name')">이름을 입력해주세요</div>
            <input v-validate="'required'" type="text" class="name fill" id="in_name" name="in_name" v-model="in_name" data-vv-as="Name" maxlength="16" placeholder="본인의 이름을 입력해주세요">
          </div>
          <div class="input_wrap">
            <div class="input_label">직책</div>
            <input type="text" class="position fill" id="in_position" v-model="in_position" maxlength="16" placeholder="본인의 직책을 입력해주세요">
          </div>
          <div class="input_wrap">
            <div class="input_label">소속*</div><div class="error_label" v-if="errors.has('in_group')">소속업체를 입력해주세요</div>
            <input v-validate="'required'" type="text" class="company fill" id="in_group" name="in_group" data-vv-as="Group name" v-model="in_group" maxlength="50" placeholder="본인의 회사명 또는 소속 기관을 입력해주세요">
          </div>
          <div class="input_wrap">
            <div class="input_label">이메일</div><div class="error_label" v-if="errors.has('in_email')">이메일 형식을 확인하세요</div>
            <input v-validate="'email'" type="email" class="email fill" id="in_email" name="in_email" v-model="in_email" data-vv-as="E-mail" maxlength="50" placeholder="연락받을 이메일 주소를 입력해주세요">
          </div>
          <div class="input_wrap">
            <div class="input_label">전화번호*</div><div class="error_label" v-if="errors.has('in_phone')">전화번호를 확인하세요</div>
            <input v-validate="'required|numeric|max:12'" type="number" class="phone fill" id="in_phone" name="in_phone" data-vv-as="Phone number" v-model="in_phone" maxlength="12" placeholder="연락받을 전화번호를 입력해주세요">
          </div>
        </div>
        <div class="divide">
          <div class="input_wrap">
            <div class="input_label">설명</div>
            <textarea class="describe fill area" id="in_desc" v-model="in_desc" maxlength="3000" placeholder="무엇을 도와드릴까요?"></textarea>
          </div>
        </div>
        <div class="input_wrap block">
          <div class="input_label">첨부파일</div><div class="error_label" v-if="errors.has('in_file')">파일은 6mb 이하여야 합니다</div>
          <input v-validate="'size:6143'" type="file" class="file" id="file_input" name="in_file" data-vv-as="File" ref="file_input" @change="add_file()" multiple>
          <input type="button" class="delete" value="파일 삭제" @click="remove_file">
        </div>

        <div class="input_wrap block">
          <input type="submit" class="submit" id="submit" value="문의하기">
        </div>
      </form>

    </section>
    <div v-if="loading" class="loading">
      <div class="lds-hourglass"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'consult',
    data: () => ({
      file_flag: 1,
      in_name: '',
      in_position: '',
      in_group: '',
      in_email: '',
      in_phone: '',
      in_desc: '',
      in_file: [],
      file_info: '',
      test: [],
      loading: false
    }),
    methods: {
      add_file() {
        /* When file data changed */
        let file_data = event.target.files[0]
        this.file_info = file_data
        let fileNames = file_data.name
        /*console.log(fileNames)*/
        this.in_file[0] = file_data
        this.file_flag = 1
        //console.log(file_data.size)
      },
      remove_file() {
        /* Remove file data */
        this.$refs.file_input.value = ''
        this.in_file = []
        this.file_info = ''
        this.file_flag = 0
        this.$validator.validateAll()
      },
      submit_form() {
        // Disable some additional edits by user, loading ui
        this.loading = true
        document.getElementById('submit').disabled = true
        // Validate form
        this.$validator.validateAll()
        var kor_filter = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/

        /* When mandatory forms are empty */
        if (this.in_name === '') {
          alert('이름을 입력해주세요.')
          document.getElementById('in_name').focus()
          this.loading = false
          document.getElementById('submit').disabled = false
        }
        else if (this.in_group === '') {
          alert('회사명 또는 소속기관을 입력해주세요.')
          document.getElementById('in_group').focus()
          this.loading = false
          document.getElementById('submit').disabled = false
        }
        else if (this.in_phone === '') {
          alert('연락받을 전화번호를 입력해주세요.')
          document.getElementById('in_phone').focus()
          this.loading = false
          document.getElementById('submit').disabled = false
        }
        else if (this.in_phone.length > 12) {
          alert('전화번호 길이를 확인하세요.')
          document.getElementById('in_phone').focus()
          this.loading = false
          document.getElementById('submit').disabled = false
        }
        else if (this.file_info.size > 6291455) {
          alert('파일 크기는 6MB 이하만 가능합니다.')
          this.loading = false
          document.getElementById('submit').disabled = false
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
          // const testURI = 'http://127.0.0.1:8000/'
          // const baseURI = 'http://54.180.144.6/'
          const baseURI = 'https://mwopiz0j2b.execute-api.ap-northeast-2.amazonaws.com/prod/api/inquiry/'
          const config = {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
          /* Do axios post */
          // this.$axios.post(`${testURI}consult/`, formData, config)
          this.$axios.post(`${baseURI}`, formData, config)
            .then((response) => {
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
              this.file_info = ''
              this.$validator.validateAll()
              this.loading = false
              document.getElementById('submit').disabled = false
            })
            .catch((e) => {
              console.error(e)
              alert('전송 중 문제가 발생하였습니다. 다시시도 또는 이메일을 이용해주세요.')
              this.loading = false
              document.getElementById('submit').disabled = false
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
          // const testURI = 'http://127.0.0.1:8000/'
          // const baseURI = 'http://54.180.144.6/'
          const baseURI = 'https://mwopiz0j2b.execute-api.ap-northeast-2.amazonaws.com/prod/api/inquiry/'
          const config = {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
          /* Do axios post */
          // this.$axios.post(`${testURI}consult/`, formData, config)
          this.$axios.post(`${baseURI}`, formData, config)
            .then((response) => {
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
              this.file_info = ''
              this.$validator.validateAll()
              this.loading = false
              document.getElementById('submit').disabled = false
            })
            .catch((e) => {
              console.error(e)
              alert('전송 중 문제가 발생하였습니다. 다시시도 또는 이메일을 이용해주세요.')
              this.loading = false
              document.getElementById('submit').disabled = false
            })
        }
      },
    },
  }
</script>

<style lang="scss" scoped>

  .loading {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }

  /**/

  .lds-hourglass {
    display: inline-block;
    position: relative;
    width: 64px;
    height: 64px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .lds-hourglass:after {
    content: " ";
    display: block;
    border-radius: 50%;
    width: 0;
    height: 0;
    margin: 6px;
    box-sizing: border-box;
    border: 26px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-hourglass 1.2s infinite;
  }
  @keyframes lds-hourglass {
    0% {
      transform: rotate(0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    50% {
      transform: rotate(900deg);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    100% {
      transform: rotate(1800deg);
    }
  }


  /**/


  .main_title {
    .table {
      position: relative;
      width: 320px;
      z-index: 500;
      padding: 20px 0 0 10px;
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
      text-align: left;
      padding: 8px;
      vertical-align: top;
    }

    .divide {
      width: 100%;
      display: inline-block;
      vertical-align: top;
    }

    .input_label {
      display: inline-block;
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
    .error_label {
      font-family: 'Nanums_regular', sans-serif;
      font-size: 13px;
      display: inline-block;
      padding: 0 10px;
      color: #ee5151;
      border-radius: 5px;
      margin-left: 5px;
      border: 1px solid #ee5151;
      box-sizing: border-box;
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

    .file {
      background-color: #ffffff;
    }

    .area {
      min-height: 334px;
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
        border: 1px solid #ff788a;
        background-color: #ff788a;
        color: #fefefe;
      }
    }
    .submit {
      border: 1px solid #009da5;
      border-radius: 5px;
      color: #009da5;
      background-color: #ffffff;
      font-weight: bold;
      margin: 10px 0;
      cursor: pointer;
      transition: all 200ms ease-in-out;
      &:hover, &:active {
        background-color: #01AEB7;
        color: #fefefe;
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
      .divide {
        width: calc(50% - 32px);
      }
      .first {
        width: 45%;
        display: block;
        margin-left: 5%;
      }
      .block {
        width: calc(100% - 60px) !important;
        margin: auto;
      }
    }
  }
</style>
