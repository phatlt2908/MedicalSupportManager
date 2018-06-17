<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div class="container">
        <router-link to="/home" class="navbar-brand">Quản trị - EmerSupp</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
          aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item" :class="{ 'active' : $route.meta.active === 'home' }">
              <router-link to="/home" class="nav-link">Tổng quan <span class="sr-only">(current)</span></router-link>
            </li>
            <li class="nav-item dropdown" :class="{ 'active' : $route.meta.active === 'hosList' }">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  CS Y tế
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <router-link to="/hosList" class="dropdown-item">Danh sách CS Y tế</router-link>
                <router-link to="/hosList" class="dropdown-item">Tạo mới CS Y tế</router-link>
                <div class="dropdown-divider"></div>
                <router-link to="/hosList" class="dropdown-item">Thùng rác</router-link>
              </div>
            </li>
            <li class="nav-item dropdown" :class="{ 'active' : $route.meta.active === 'hosList' }">
              <router-link to="/home" class="nav-link">Báo cáo</router-link>
            </li>
            <li class="nav-item" :class="{ 'active' : $route.meta.active === 'feedback' }">
              <router-link to="/feedback" class="nav-link">Phản hồi</router-link>
            </li>
          </ul>
          <form class="form-inline mt-2 mt-md-0">
            <input class="form-control mr-sm-2" type="text" placeholder="Tìm dữ liệu..." aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Tìm kiếm</button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'top',
    data() {
      return {

      }
    },
  }

</script>

<style scoped>

</style>