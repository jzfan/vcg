<template>
  <div>
    <header-cmp></header-cmp>
    <div class="container mx-64 px-2 lg:px-10 mx-auto">
      <p class="mt-12 mb-10 font-bold">视频展示</p>
      <div class="flex -mx-2 flex-wrap">
        <video-card v-for="item in items" :item="item" :key="item.id"></video-card>
      </div>
      <pagination-cmp
        :current="currentPage"
        :total="count"
        :page-size="pageSize"
        @change="pageChange"
      >></pagination-cmp>
    </div>
  </div>
</template>
<script>
import HeaderCmp from "../components/header1";
import videoCard from "../components/videoCard";
import paginationCmp from "../components/pagination";
export default {
  components: {
    HeaderCmp,
    videoCard,
    paginationCmp
  },
  data() {
    return {
      pageSize: 20, //每页显示20条数据
      currentPage: 1, //当前页码
      count: 0, //总记录数
      items: []
    };
  },
  methods: {
    //获取数据
    getList() {
      //模拟
      let url = `/videostore/queryVideoList?pageSize=${
        this.pageSize
      }&currentPage=${this.currentPage}`;
      this.axios.get(url).then(res => {
        // console.log(res.data);
        //子组件监听到count变化会自动更新DOM
        this.count = res.data.data.total;
        this.items = res.data.data.list;
      });
    },

    //从page组件传递过来的当前page
    pageChange(page) {
      this.currentPage = page;
      this.getList();
    }
  },
  mounted() {
    //请求第一页数据
    this.getList();
  }
};
</script>