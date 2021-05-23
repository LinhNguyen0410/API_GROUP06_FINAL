<template>
<div class="list row text">
<div class="col-md-12">
<div class="input-group mb-3 search ">
<input
type="text"
class="form-control fstext"
placeholder="Nhập họ tên sinh viên cần tìm..."
v-model="name"
/>
<div class="input-group-append">
<button
class="btn btn-outline-secondary text"
type="button"
@click="searchName"

>
<i class="fas fa-search"></i>
Tìm Kiếm
</button>
</div>
</div>
</div>
<div class="col-md-6">
<h4>Đã đăng ký</h4>
<ul class="list-group">
<li
class="list-group-item"
:class="{ active: index == currentIndex }"
v-for="(student, index) in students"
:key="index"
@click="setActiveStudent(student, index)"
>
{{ student.name }}

</li>
</ul>

<button class="m-4 btn btn-sm btn-danger btnDelete psRight" @click="removeAllStudents">
Xóa tất cả
</button>

</div>
<div class="col-md-6">
<div v-if="currentStudent">
<h4>Thông tin</h4>
<!-- <div> <img src="/uploads/images/ <%= currentStudent.image %>" alt=""> </div> -->
<div>
<label><strong>Mã số sinh viên:</strong></label>
{{ currentStudent.idcard }}
</div>
<div>
<label><strong>Họ và tên:</strong></label>
{{ currentStudent.name }}
</div>

<div>
<label><strong>Ngày Sinh:</strong></label>
{{ currentStudent.birthday }}
</div>

<div>
<label><strong>Giới Tính:</strong></label>
{{ currentStudent.gender }}
</div>

<div>
<label><strong>Email:</strong></label>
{{ currentStudent.mailcontact }}
</div>

<div>
<label><strong>Số điện thoại:</strong></label>
{{ currentStudent.numberphone }}
</div>

<div>
<label><strong>Lớp:</strong></label>
{{ currentStudent.class }}
</div>


<div>
<label><strong>Khóa:</strong></label>
{{ currentStudent.specialized }}
</div>

<div>
<label><strong>Địa chỉ:</strong></label>
{{ currentStudent.address }}
</div>

<div>
<label><strong>CMND/CCCD:</strong></label>
{{ currentStudent.IDnum }}
</div>



<a class="badge badge-warning btnUpdate" :href="'/students/' + currentStudent.id">
Cập nhật
</a>
 <button class="badge badge-danger mr-2 btnDelete"
      @click="deleteStudent"
    >
      Xoá
    </button>

</div>
<div v-else>

</div>
</div>
</div>
</template>


//code JS

<script>
import StudentDataService from "../services/StudentDataService";

export default {
name: "students-list",
data() {
return {
students: [],
currentStudent: null,
currentIndex: -1,
name: "",
messageDelete:'',
};
},
methods: {
retrieveStudents() {
StudentDataService.getAll()
.then((response) => {
this.students = response.data;
console.log(response.data);
})
.catch((e) => {
console.log(e);
});
},

refreshList() {
this.retrieveStudents();
this.currentStudent = null;
this.currentIndex = -1;
},

setActiveStudent(student, index) {
this.currentStudent = student;
this.currentIndex = index;
},



removeAllStudents() {
StudentDataService.deleteAll()
.then((response) => {
console.log(response.data);
alert("Xóa tất cả danh sách thành công");
this.refreshList();
})
.catch((e) => {
console.log(e);

});
},

searchName() {
StudentDataService.findByName(this.name)
.then((response) => {
this.students = response.data;
console.log(response.data);
})
.catch((e) => {
console.log(e);
});
},


 deleteStudent() {
      StudentDataService.delete(this.currentStudent.id)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "students" });
          this.refreshList();
          alert('Xóa thành công!');


        })
        .catch(e => {
          console.log(e);
        });
    },
    },
mounted() {
this.retrieveStudents();

},
};
</script>

<style>
.list {
text-align: left;
max-width: 750px;
margin: auto;
}

.btnDelete{
 margin-left:10px;
  padding:10px 20px;
    font-size:11px;
    font-weight:bold
  }
  .btnUpdate{
  padding:10px;
  border:1px solid #000;
  }
  .text
  {font-size:14px;}
  .search input
  {height:40px}
  h4{
  font-weight:bold;
  margin:10px 0px;
  }
  .fstext{
  font-size:14px
  }
  .psRight{
  }
</style>
