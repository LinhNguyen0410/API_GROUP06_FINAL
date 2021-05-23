
<template>

  <div v-if="!submitted">
   <div id="wrapper">
    <!--Note-->
    <div class="note">
      <span class="note-label">Lưu ý :</span>
      <span class="note-content"
      >Các thông tin nhập vào phải là tiếng Việt có dấu.</span
      >
    </div>
    <!--Note-->
    <!-- Thông tin cá nhân - personal info -->
    <div class="personal-info__title">
      <span>Thông tin cá nhân</span>
    </div>
    <div class="personal-info--seperate"></div>
    <!-- 1 div bao tất cả chia lam 3 cot -->
    <div class="personal-info">
      <!-- cột1 -->
      <div class="personal-info__col1">
        <!-- ho ten -->
        <div class="wrap-inpu">
          <label for="" class="personal-info__input-label"
          >Mã số sinh viên:</label
          >
          <div class="personal-info__input">
            <i class="fas fa-id-card"></i>
            <input
            type="text"
            name="idcard"
            id="idcard"
            required
            v-model="student.idcard"
            />
          </div>
        </div>
        <!-- tpho nơi sinh -->
        <div class="wrap-input">
          <label for="" class="personal-info__input-label"
          >Họ và tên:</label
          >
          <div class="personal-info__input">
            <i class="fas fa-user"></i>
            <input
            type="text"
            name="name"
            id="name"
            required
            v-model="student.name"
            />
          </div>
        </div>
        <!-- quốc tịch -->
        <div class="wrap-input">
          <label for="" class="personal-info__input-label">Ngày Sinh (dd/mm/yyyy):</label>
          <div class="personal-info__input">
            <i class="fas fa-calendar-plus"></i>
            <input
            type="date"
            name="birthday"
            id="birthday"
            required
            maxlength="10"
            v-model="student.birthday"
            />
          </div>
        </div>
        <!-- CCCD -->
        <div class="wrap-input">
          <label for="" class="personal-info__input-label"
          >Giới Tính:</label
          >
          <div class="personal-info__input">
           <i class="fas fa-venus-double"></i>
           <input type="text" name="gender" id="gender"  required
           v-model="student.gender" placeholder="Vui lòng nhập 'Nam' hoặc 'Nữ'">
         </div>
       </div>
       <!-- email lienlac -->
       <div class="wrap-input">
        <label for="" class="personal-info__input-label"
        >Email liên lạc:</label
        >
        <div class="personal-info__input">
          <i class="fas fa-mail-bulk"></i>
          <input
          type="email"
          name="mail-contact"
          id="mail-contact"
          placeholder="Ví dụ : linh@1022gmail.com"
          size="30"
          required
          v-model="student.mailcontact"
          />
        </div>
      </div>
      <!--sdt lienlac -->
      <div class="wrap-input">
        <label for="" class="personal-info__input-label"
        >Số điện thoại liên hệ:</label
        >
        <div class="personal-info__input">
          <i class="fas fa-phone-alt"></i>
          <input
          type="text"
          name="number-phone"
          id="number-phone"
          maxlength="11"
          placeholder="Ví dụ : 0123456789"
          required
          v-model="student.numberphone"
          />
        </div>
      </div>
    </div>

    <!---------------------->
    <div class="personal-info__col2">
      <!-- gioi tinh-->
      <div class="wrap-inpu">
        <label for="" class="personal-info__input-label"
        >Lớp:</label
        >
        <div class="personal-info__input">
          <i class="fas fa-sort-numeric-up"></i>
          <input
          type="text"
          name="class"
          id="class"
          required
          maxlength="10"
          v-model="student.class"
          />
        </div>
      </div>

      <div class="wrap-input">
        <label for="" class="personal-info__input-label"
        >Khóa:</label
        >
        <div class="personal-info__input">
          <i class="fas fa-sort-numeric-up"></i>
          <input
          type="text"
          name="specialized"
          id="specialized"
          required
          maxlength="3"
          v-model="student.specialized"
          />
        </div>
      </div>

      <!-- quận huyện nơi sinh-->
      <div class="wrap-input">
        <label for="" class="personal-info__input-label"
        >Địa Chỉ:</label
        >
        <div class="personal-info__input">
          <i class="fas fa-map-marked-alt"></i>
          <input
          type="text"
          name="address"
          id="address"
          required
          v-model="student.address"
          />
        </div>
      </div>
      <div class="wrap-input">
        <label for="" class="personal-info__input-label"
        >Số CMND/CCCD:</label
        >
        <div class="personal-info__input">
          <i class="fas fa-id-card-alt"></i>
          <input
          type="text"
          name="IDnum"
          id="IDnum"
          required
          maxlength="10"
          v-model="student.IDnum"
          />
        </div>
      </div>

<!--       <div class="wrap-input">
        <label for="" class="personal-info__input-label"
        >Hình ảnh</label
        >
        <form action="/profile" method="post" enctype="multipart/form-data" class = "inputIMG">
          <input @change="uploadImage" type="file" ref = "file" name="image"/>
          <img :src="imageSrc" class="image">

        </form>
      </div> -->

      <button @click="saveStudent" class="btn btn-success btnSave">
        Đăng Ký
      </button>
      <p class="messageError">
        {{ messageError }}
      </p>
    </div>

    <!-- ----------- -->
    <div class="personal-info__col3">
      <img src="../assets/poster.png" alt="" class="poster">
    </div>
  </div>
  <!-- Thông tin cá nhân - personal info -->
</div>

</div>

<div v-else>
  <div class="notice-success">
    Chúc mừng,bạn đã đăng ký thành công !
  </div>
  <button class="btn btn-success btnBack" @click="newStudent">Xem danh sách</button>
</div>

</template>      

<script>
  import StudentDataService from "../services/StudentDataService";

  export default {
    name: "add-student",
    data() {
      return {
        student: {
          id: null,
          idcard: "",
          name: "",
          birthday: "",
          gender:"",
          class: "",
          address: "",
          specialized:"",
          IDnum:"",
          mailcontact:"",
          numberphone:"",


        },
        submitted: false,
        messageError: ''
      };
    },
    methods: {
      saveStudent() {
        var data = {
          idcard: this.student.idcard,
          name: this.student.name,
          birthday: this.student.birthday,
          gender: this.student.gender,
          class: this.student.class,
          address: this.student.address,
          specialized:this.student.specialized,
          numberphone:this.student.numberphone,
          mailcontact:this.student.mailcontact,
          IDnum:this.student.IDnum,

        };

        StudentDataService.create(data)
        .then((response) => {
          this.student.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
          

          
        })
        .catch((e) => {
          this.messageError = 'Vui lòng không bỏ trống bất kỳ trường nào!';
          console.log(e);
        });
      },

      newStudent() {
        this.submitted = false;
        this.$router.push({ name: "students" });
        this.student = {};
      },
    },
  };
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
.notice-success {
  background: #67b11c;
  background: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/29841/tick_2.png") 20px 50% no-repeat, linear-gradient(#72c41f, #5c9e19);
  background: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/29841/tick_1.svg") 20px 50% no-repeat, linear-gradient(#72c41f, #5c9e19);
  border: 2px solid #467813;
  border-radius: 5px;
  color: #fff;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  padding: 15px 20px 15px 50px;
  font-size :15px
}
.btnBack{
 padding:10px 20px;
 font-size:12px;
 display:flex;
 margin:20px auto;
 background-color:#7CCD7C;
}
.inputIMG{
  margin-top: 17px;
}

/* Personal - Info */
</style>