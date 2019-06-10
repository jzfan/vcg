<template>
  <div>
    <nav class="flex my-16 items-center" id="page-nav">
      <span class="flex-grow ml-2">共 {{ pages }} 页</span>

      <ul class="flex text-black">
        <!-- first -->
        <li
          :class="[index === 1 ? 'cursor-not-allowed opacity-75' : 'cursor-pointer hover:text-red']"
          @click="first"
        >首页</li>
        <!-- prev -->
        <li
          :class="[index === 1 ? 'cursor-not-allowed opacity-75' : 'cursor-pointer hover:text-red']"
          @click="prev"
        >上一页</li>

        <li class="cursor-default" v-if="showPrevMore">...</li>

        <li
          :class="[index === pager ? 'cursor-default text-white bg-red' : 'cursor-pointer hover:text-red']"
          v-for="pager in pagers"
          @click="go(pager)"
          :key="pager"
        >{{ pager }}</li>

        <li class="cursor-default" v-if="showNextMore">...</li>

        <!-- next -->
        <li
          :class="[index === pages ? 'cursor-not-allowed opacity-75' : 'cursor-pointer hover:text-red']"
          @click="next"
        >下一页</li>

        <!-- last -->
        <li
          :class="[index === pages ? 'cursor-not-allowed opacity-75' : 'cursor-pointer hover:text-red']"
          @click="last"
        >末页</li>

        <li @click="pageInputing">
          跳转至
          <span v-if="!inputing">______</span>
          <span v-else>
            <input
              type="text"
              v-model="page"
              class="w-10 text-center"
              v-focus
              @blur="inputing = false"
            >
          </span>
          页
        </li>
        <li class="bg-red text-white hover:bg-red-dark" @click="goByInput">
          <i class="iconfont iconright"></i>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    //页面中的可见页码，其他的以...替代, 必须是奇数
    perPages: {
      type: Number,
      default: 5
    },
    //当前页码
    current: {
      type: Number,
      default: 1
    },
    //每页显示条数
    pageSize: {
      type: Number,
      default: 10
    },
    //总记录数
    total: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      inputing: false,
      page: "",
      index: this.current, //当前页码
      limit: this.pageSize, //每页显示条数
      size: this.total || 1, //总记录数
      showPrevMore: false,
      showNextMore: false
    };
  },
  computed: {
    //计算总页码
    pages() {
      return Math.ceil(this.size / this.limit);
    },

    //计算页码，当count等变化时自动计算
    pagers() {
      const array = [];
      const perPages = this.perPages;
      const pageCount = this.pages;
      let current = this.index;
      const _offset = (perPages - 1) / 2;

      const offset = {
        start: current - _offset,
        end: current + _offset
      };

      //-1, 3
      if (offset.start < 1) {
        offset.end = offset.end + (1 - offset.start);
        offset.start = 1;
      }
      if (offset.end > pageCount) {
        offset.start = offset.start - (offset.end - pageCount);
        offset.end = pageCount;
      }
      if (offset.start < 1) offset.start = 1;

      this.showPrevMore = offset.start > 1;
      this.showNextMore = offset.end < pageCount;

      for (let i = offset.start; i <= offset.end; i++) {
        array.push(i);
      }

      return array;
    }
  },
  watch: {
    current(val) {
      this.index = val || 1;
    },
    pageSize(val) {
      this.limit = val || 10;
    },
    total(val) {
      this.size = val || 1;
    }
  },
  methods: {
    prev() {
      if (this.index > 1) {
        this.go(this.index - 1);
      }
    },
    next() {
      if (this.index < this.pages) {
        this.go(this.index + 1);
      }
    },
    first() {
      if (this.index !== 1) {
        this.go(1);
      }
    },
    last() {
      if (this.index != this.pages) {
        this.go(this.pages);
      }
    },
    go(page) {
      if (this.index !== page) {
        this.index = page;
        //父组件通过change方法来接受当前的页码
        this.$emit("change", this.index);
      }
    },
    pageInputing() {
      this.page = "";
      this.inputing = true;
    },
    goByInput() {
      if (this.page === "") {
        return false;
      }
      let n = parseInt(this.page);
      if (n > this.pages) {
        n = this.pages;
      }
      this.go(n);
    }
  }
};
</script>
<style>
#page-nav > ul > li {
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
}
</style>



