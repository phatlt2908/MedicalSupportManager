<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <a class="navbar-brand" href="#">Quản trị - EmerSupp</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
        aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="home" class="nav-link">Tổng quan <span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item">
            <router-link to="listMedical" class="nav-link">DS CS Y tế</router-link>
          </li>
          <li class="nav-item">
            <router-link to="home" class="nav-link">Báo cáo</router-link>
          </li>
          <li class="nav-item">
            <router-link to="home" class="nav-link">Phản hồi</router-link>
          </li>
        </ul>
        <form class="form-inline mt-2 mt-md-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Tìm dữ liệu..." aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Tìm kiếm</button>
        </form>
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