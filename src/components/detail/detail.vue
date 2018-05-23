<template>
  <div class="container">
    <form @change="changedData">
      <h3>{{hosData.name}} - {{hosData.hos_id}}</h3>
      <div class="form-group row">
        <label for="example-text-input" class="col-sm-2 col-form-label">Tên</label>
        <div class="col-sm-10">
          <input class="form-control" type="text" v-model="hosData.name" required>
        </div>
      </div>
      <div class="form-group row">
        <label for="example-search-input" class="col-sm-2 col-form-label">Địa chỉ</label>
        <div class="col-sm-10">
          <input class="form-control" type="search" v-model="hosData.address">
        </div>
      </div>
      <div class="form-group row">
        <label for="example-email-input" class="col-sm-2 col-form-label">Tọa độ</label>
        <div class="col-sm-5">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">Vĩ độ</span>
            </div>
            <input type="number" class="form-control" placeholder="Vĩ độ" aria-label="latitude" v-model="hosData.latitude">
          </div>
        </div>
        <div class="col-sm-5">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">Kinh độ</span>
            </div>
            <input type="number" class="form-control" placeholder="Kinh độ" aria-label="longitude" v-model="hosData.longitude">
          </div>
        </div>
      </div>
      <div class="form-group row">
        <label for="example-url-input" class="col-sm-2 col-form-label">Giờ làm việc</label>
        <div class="col-sm-5">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">Mở cửa</span>
            </div>
            <input type="time" class="form-control" v-model="hosData.open_time">
          </div>
        </div>
        <div class="col-sm-5">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">Đóng cửa</span>
            </div>
            <input type="time" class="form-control" v-model="hosData.close_time">
          </div>
        </div>
      </div>
      <div class="form-group row">
        <label for="example-tel-input" class="col-sm-2 col-form-label">Điện thoại</label>
        <div class="col-sm-3">
          <input class="form-control" type="tel" v-model="hosData.phone">
        </div>
      </div>
      <div class="form-group row">
        <label for="example-password-input" class="col-sm-2 col-form-label">Quy mô</label>
        <div class="col-sm-2">
          <select class="custom-select mb-2 mr-sm-2 mb-sm-0" v-model="hosData.scale">
          <option value="1">Nhỏ</option>
          <option value="2">Vừa</option>
          <option value="3">Lớn</option>
        </select>
        </div>
      </div>
      <div class="form-group row">
        <label for="example-number-input" class="col-sm-2 col-form-label">Chuyên khoa</label>
        <div class="col-sm-3">
          <input class="form-control" type="text" v-model="hosData.spectialist">
        </div>
      </div>
      <button type="button" class="btn btn-outline-primary" @click="saveHos" :disabled="!isChangedData">
        <span v-show="!isShowSaveLoader">Lưu</span>
        <loader v-show="isShowSaveLoader"></loader>
      </button>
      <button type="button" class="btn btn-outline-danger" @click="delHos">
        <span v-show="!isShowDelLoader">Xóa</span>
        <loader v-show="isShowDelLoader"></loader>
      </button>
    </form>
  </div>
</template>

<script>
  import loader from '@/components/compts/loader.vue'

  export default {
    components: {
      'loader': loader
    },
    data() {
      return {
        hosData: {},
        hosId: this.$route.params.id,
        isShowSaveLoader: false,
        isShowDelLoader: false,
        isChangedData: false
      }
    },
    mounted() {
      this.$api.getHosById(this.hosId)
        .then((res) => {
          this.hosData = res.data
          this.selectedScale = res.data.scale
          console.log(res.data)
        })
    },
    methods: {
      saveHos() {
        this.isShowSaveLoader = true
        this.$api.updateHos(this.hosId, this.hosData.latitude, this.hosData.longitude, this.hosData.name, this.hosData.address, this.hosData.open_time, this.hosData.close_time, this.hosData.phone, this.hosData.scale, this.hosData.spectialist)
          .then((res) => {
            if (res.data && res.data.appCode === '0') {
              this.isShowSaveLoader = false
              this.$snack.noneAction('Sửa đổi thành công!')
            }
          })
      },
      changedData() {
        this.isChangedData = true
      },
      delHos() {
        this.isShowDelLoader = true
        this.$api.delHos(this.hosId)
        .then((res) => {
          if (res.data && res.data.appCode === '0') {
            this.isShowSaveLoader = false
            this.$snack.withAction('Đã chuyển vào thùng rác', 'Hoàn tác')
          }
        })
      }
    }
  }

</script>

<style scoped>
  h3 {
    padding-bottom: 10px;
  }

  .loader {
    display: inline-block;
    width: 15px;
    height: 15px;
    border: 2px solid #f3f3f3;
    border-top: 2px solid #212529;
  }
</style>