<template>
    <div v-if="currentStudent">
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
          v-model="currentStudent.idcard"
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
          v-model="currentStudent.name"
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
          v-model="currentStudent.birthday"
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
          v-model="currentStudent.gender" placeholder="Vui lòng nhập 'Nam' hoặc 'Nữ'">
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
                type="text"
                name="mail-contact"
                id="mail-contact"
                placeholder="Ví dụ : linh@1022gmail.com"
                 required
          v-model="currentStudent.mailcontact"
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
                type="number"
                name="number-phone"
                id="number-phone"
                placeholder="Ví dụ : 0123456789"
                 required
                 maxlength="11"
          v-model="currentStudent.numberphone"
              />
            </div>
          </div>
        </div>

        <!---------------------->
        <div class="personal-info__col2">
          <!-- gioi tinh-->
          <div class="wrap-inpu">
            <label for="" class="personal-info__input-label">Lớp</label>
            <div class="personal-info__input">
          <i class="fas fa-users-cog"></i>
              <input
                type="class"
                name="class"
                id="class"
                 required
          v-model="currentStudent.class"
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
          v-model="currentStudent.specialized"
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
          v-model="currentStudent.address"
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
                type="number"
                name="IDnum"
                id="IDnum"
                 required
          v-model="currentStudent.IDnum"
              />
            </div>
          </div>
                <button type="submit" @click="updateStudent" class="badge badge-success btnUpdate2">
        Thay đổi cập nhật
      </button>

      <p class = "messageUpdate">{{ message }} </p>
        </div>

        <!-- ----------- -->
        <div class="personal-info__col3">
       
        </div>
      </div>
      <!-- Thông tin cá nhân - personal info -->
    </div>

    </div>

    <div v-else>
      <h4>Bạn đã lưu thông tin sinh viên thành công!</h4>
      <button class="btn btn-success" @click="newStudent">Thêm mới</button>
    </div>

</template>  

<script>
import StudentDataService from "../services/StudentDataService";

export default {
  name: "student",
  data() {
    return {
      currentStudent: null,
      message: ''
    };
  },
  methods: {
    getStudent(id) {
      StudentDataService.get(id)
        .then(response => {
          this.currentStudent = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updateStudent() {
      StudentDataService.update(this.currentStudent.id, this.currentStudent)
        .then(response => {
          console.log(response.data);
          this.message = 'Bạn đã thay đổi thông tin thành công!';
        })
        .catch(e => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.message = '';
    this.getStudent(this.$route.params.id);
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}

.btnUpdate2{
    padding:13px 20px;
    font-size:12px;
    margin-top:30px;
    display: flex;
    margin-left: auto;
    }

</style>