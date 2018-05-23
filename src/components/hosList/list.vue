<template>
  <div class="container">
    <table class="table table-striped">
      <thead>
        <tr class="row">
          <th class="col-sm-1" scope="col">#</th>
          <th class="col-sm-4" scope="col">Tên</th>
          <th class="col-sm-5" scope="col">Địa chỉ</th>
          <th class="col-sm-2" scope="col">Tọa độ</th>
        </tr>
      </thead class="thread-dark">
      <tbody>
        <tr class="row" v-for="item in hosList">
          <td class="col-sm-1">
            <router-link :to="'/detail/' + item._id">
              {{ item.hos_id }}
            </router-link>
          </td>
          <td class="col-sm-4">
            <router-link :to="'/detail/' + item._id">
              {{ item.name }}
            </router-link>
          </td>
          <td class="col-sm-5">{{ item.address }}</td>
          <td class="col-sm-2">{{ item.latitude }} : {{ item.longitude }}</td>
        </tr>
      </tbody>
      <loader v-show="isShowLoader"></loader>
    </table>
  </div>
</template>

<script>
  import loader from '@/components/compts/loader.vue'

  export default {
    components: {
      'loader': loader,
    },
    data() {
      return {
        hosList: [],
        isShowLoader: false
      }
    },
    mounted() {
      this.isShowLoader = true
      this.$api.getHosList()
        .then((res) => {
          this.hosList = res.data
          console.log(res.data)
          this.isShowLoader = false
        })
        .catch
    }
  }

</script>

<style scoped>
  table a {
    color: #212529;
    text-decoration: none;
  }
</style>