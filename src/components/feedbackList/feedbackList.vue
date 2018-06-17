<template>
  <div class="container">
    <table class="table table-striped">
      <thead class="thread-dark">
        <tr class="row">
          <th class="col-sm-2" scope="col">Thời gian</th>
          <th class="col-sm-3" scope="col">Vấn đề</th>
          <th class="col-sm-5" scope="col">Thông tin sai / thiếu</th>
          <th class="col-sm-2" scope="col">Giải quyết</th>
        </tr>
      </thead>
      <tbody>
        <tr class="row" v-for="item in feedbackList" :key="item._id">
          <td class="col-sm-2">
            <router-link :to="'/feedback/' + item._id">
              {{ item.date }}
            </router-link>
          </td>
          <td class="col-sm-3">
            <router-link :to="'/feedback/' + item._id">
              {{ item.type }}
            </router-link>
          </td>
          <td class="col-sm-5">{{ item.fdbk_info }}</td>
          <td class="col-sm-2" v-if="item.isResolve">
            Đã giải quyết
          </td>
          <td class="col-sm-2 inResolve" v-if="!item.isResolve">
            Chưa giải quyết
          </td>
        </tr>
      </tbody>
      <loader v-show="isShowLoader"></loader>
    </table>
  </div>
</template>

<script>
import loader from "@/components/compts/loader.vue";

export default {
  components: {
    loader: loader
  },
  data() {
    return {
      feedbackList: [],
      isShowLoader: false
    };
  },
  mounted() {
    this.isShowLoader = true;
    this.$api.getFeedbackList().then(res => {
      this.feedbackList = res.data;
      console.log(res.data);
      this.isShowLoader = false;
    }).catch;
  }
};
</script>

<style scoped>
table a {
  color: #212529;
  text-decoration: none;
}
</style>