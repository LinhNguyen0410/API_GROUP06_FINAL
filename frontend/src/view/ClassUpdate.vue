<template>
  <div v-if="currentClass.id" class="edit-form">
    <h4>Thay đổi thông tin lớp học</h4>
    <form>
      <div class="form-group personal-info__input">
        <label for="title">Mã lớp</label>
        <input
          type="text"
          class="form-control"
          id="class"
          disabled
          v-model="currentClass.IDClass"
        />
      </div>
      <div class="form-group personal-info__input">
        <label for="description">Tên lớp</label>
        <input
          type="text"
          class="form-control"
          id="className"
          v-model="currentClass.className"
        />
      </div>

            <div class="form-group personal-info__input">
        <label for="description">Chuyên ngành</label>
        <input
          type="text"
          class="form-control"
          id="career"
          v-model="currentClass.career"
        />
      </div>

    </form>

    <button type="submit" class="badge badge-success btnUpdate2" @click="updateClass">
      Lưu Thay Đổi
    </button>
    <p class = "messageUpdate">{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Tutorial...</p>
  </div>
</template>
<script>
import ClassDataService from "../services/ClassDataService";

export default {
  name: "class-update",
  data() {
    return {
      currentClass: null,
      message: ''
    };
  },
  methods: {
    getClass(id) {
      ClassDataService.get(id)
        .then(response => {
          this.currentClass = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updateClass() {
      ClassDataService.update(this.currentClass.id, this.currentClass)
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
    this.getClass(this.$route.params.id);
  }
};
</script>
<style>
.edit-form {
  max-width: 400px;
  margin: 0 auto;
}
label{
font-size:15px 
}
.btnUpdate2{
    padding:13px 20px;
    font-size:12px;
    margin-top:30px;
    display: flex;
    margin-left: auto;
    }
    h4{
    text-align:center;
    font-weight:bold
    }
</style>