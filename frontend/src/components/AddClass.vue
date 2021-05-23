<template>
  <div class="submit-form">
    <div v-if="!submitted">

            <div class="form-group">
        <label for="title">Mã Lớp</label>
        <input
          type="number"
          class="IDClass"
          id="IDClass"
          required
          v-model="classes.IDClass"
          name="IDClass"
        />
      </div>

      <div class="form-group">
        <label for="title">Tên lớp</label>
        <input
          type="text"
          class="className"
          id="className"
          required
          v-model="classes.className"
          name="className"
        />
      </div>

       <div class="form-group">
        <label for="title">Chuyên ngành</label>
        <input
          type="text"
          class="career"
          id="career"
          required
          v-model="classes.career"
          name="career"
        />
      </div>





      <button @click="saveClass" class="btn btn-success">Thêm mới</button>
    </div>

    <div v-else>
      <h4>Thêm thành công lớp!</h4>
      <button class="btn btn-success" @click="newClass">Tiếp tục</button>
    </div>
  </div>
</template>

<script>
  import ClassDataService from "../services/ClassDataService";

export default {
  name: "add-class",
  data() {
    return {

      classes: {
        id: null,
        IDClass:"",
        className: "",
        career: "",
        
      

      },
      submitted: false,
      messageError: ''
    };
  },
  methods: {
    saveClass() {
      var data = {
        IDClass: this.classes.IDClass,
        className: this.classes.className,
        career: this.classes.career,
       
      };

      ClassDataService.create(data)
        .then((response) => {
          this.classes.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
         

          
        })
        .catch((e) => {
          this.messageError = 'Vui lòng không bỏ trống bất kỳ trường nào!';
          console.log(e);
        });
    },


    newClass() {
      this.submitted = false;
      this.classes = {};
    },
  },
};
</script>


<style scoped>
.submit-form {
  max-width: 300px;
  margin: auto;
}
input,label,button{
  font-size:16px
}
button{
  margin-left:75px;
}
label{
  margin-right:10px
}
</style>