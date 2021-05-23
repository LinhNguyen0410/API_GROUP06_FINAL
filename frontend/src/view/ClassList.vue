<template>
<div class="list row text">
<div class="col-md-12">
<div class="input-group mb-3 search">
<input
type="text"
class="form-control fstext"
placeholder="Tìm kiếm nhanh..."
v-model="className"
/>
<div class="input-group-append">
<button
class="btn btn-outline-secondary text"
type="button"
@click="searchClassName"

>
<i class="fas fa-search"></i>
OK
</button>
</div>
</div>
</div>
<div class="col-md-6">
<h4>Danh sách lớp</h4>
<ul class="list-group">
<li
class="list-group-item"
:class="{ active: index == currentIndex }"
v-for="(classes, index) in classess"
:key="index"
@click="setActiveClass(classes, index)"
>
{{ classes.className }}

</li>
</ul>

<!--<button class="m-4 btn btn-sm btn-danger btnDelete psRight" @click="removeAllStudents">
Xóa tất cả
</button>-->

</div>
<div class="col-md-6">
<div v-if="currentClass">
<h4>Thông tin</h4>
<div>
<label><strong>Mã lớp:</strong></label>
{{ currentClass.IDClass }}
</div>
<div>
<label><strong>Tên lớp:</strong></label>
{{ currentClass.className }}
</div>
<div>
<label><strong>Chuyên ngành:</strong></label>
{{ currentClass.career }}
</div>

<a class="badge badge-success btn btnCreate" :href="'/add-class'">
Thêm mới
</a>
<a class="badge badge-warning btn btnUpdate" :href="'/classes/' + currentClass.id">
Cập nhật
</a>
 <button class="badge badge-danger btn mr-2 btnDelete"
      @click="deleteClass"
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
import ClassDataService from "../services/ClassDataService";

export default {
name: "class-list",
data() {
return {
classess: [],
currentClass: null,
currentIndex: -1,
className: "",
messageDelete:'',
};
},
methods: {
retrieveClasses() {
ClassDataService.getAll()
.then((response) => {
this.classess = response.data;
console.log(response.data);
})
.catch((e) => {
console.log(e);
});
},

refreshList() {
this.retrieveClasses();
this.currentClass = null;
this.currentIndex = -1;
},

setActiveClass(classes, index) {
this.currentClass = classes;
this.currentIndex = index;
},



removeAllClasses() {
ClassDataService.deleteAll()
.then((response) => {
console.log(response.data);
alert("Xóa tất cả danh sách thành công");
this.refreshList();
})
.catch((e) => {
console.log(e);

});
},

searchClassName() {
ClassDataService.findByName(this.className)
.then((response) => {
this.classess = response.data;
console.log(response.data);
})
.catch((e) => {
console.log(e);
});
},


 deleteClass() {
      ClassDataService.delete(this.currentClass.id)
        .then(response => {
          console.log(response.data);
          this.refreshList();
          alert('Xóa thành công!');


        })
        .catch(e => {
          console.log(e);
        });
    },
    },
mounted() {
this.retrieveClasses();

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
  .btnUpdate,.btnCreate{
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
  .btnCreate{
  background-color:green;
   margin-right:10px;
   color:#fff;
  }
  .btn:hover{
    font-size:13px
  }
  .fstext{
  font-size:14px
  }
  .psRight{
  }
</style>
