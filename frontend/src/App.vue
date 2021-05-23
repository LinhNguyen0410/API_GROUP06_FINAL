<template>
  <div id="app">
    <nav class="navbar navbar-expand bg">
      <router-link to="" class="navbar-brand"><img src="./assets/ntt.png" class ="logo"></router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/students-list" class="nav-link title"
            >Danh Sách <i class="fas fa-address-book"></i></router-link
          >
        </li>
       <li class="nav-item">
          <router-link to="/add-info" class="nav-link title">Đăng Ký Thông Tin <i class="fas fa-user-edit"></i></router-link>
        </li>

        <li class="nav-item">
          <router-link to="/class-list" class="nav-link title">Quản lý Lớp Học<i class="fas fa-chalkboard-teacher"></i></router-link>
        </li>
      </div>
            <div class = "account">
        <li class="nav-item nav-link title">
        <i class="fas fa-sign-in-alt"></i>
           Đăng Nhập
        </li>

      </div>

      <div class = "account">
        <li class="nav-item nav-link title">
        <i class="far fa-registered"></i>
            Đăng Ký
        </li>

      </div>

   
    </nav>

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>
<style> 
.logo{
  width:120px;
  margin-right:30px;
  }
.bg{
  background-color:#CCCC00;
}
.title{
  font-weight :500;
  font-size:15px;
  color:#000099;
  margin:0px 10px;
  padding:6px 12px;
  background-color:#33CC99;
  border-radius:10px;
  transition: 0.4s;
}
.title{
  background-color:#009966;
  font-weight :600;
  color: #fff;
  cursor: pointer;
}
.title:hover{
  color:#000;
}
</style>
