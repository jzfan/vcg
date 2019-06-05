<template>
    <nav class="flex my-16" id='page-nav'>
      <span class='flex-grow ml-2'>共 123 页</span>
      <a href='/'>首页</a>
      <a href='#'>上一页</a>
      <ul class="flex">
        <li><a href='#'>1</a></li>
        <li><a href='#' class="active text-white bg-red rounded">2</a></li>
        <li><a href='#'>3</a></li>
        <li><a href='#'>4</a></li>
        <li><span href='#'>&hellip;</span></li>
        <li><a href='#'>46</a></li>
        <li><a href='#'>47</a></li>
      </ul>
      <a href='#'>下一页</a>
      <a href='#'>末页</a>
      <span class="px-2 pb-1 hover:text-red cursor-pointer" @click='pageInputing'>跳转至
        <span v-if='!inputing'>______</span>
        <span v-else>
          <input type="text" v-model='page' class="w-10 text-center" v-focus @blur='inputing = false'>
        </span>
      页</span>
      <span class="px-1 bg-red text-white rounded hover:bg-red-dark cursor-pointer"><i class="iconfont icon-double-arrow-right"></i></span>
    </nav>
</template>

<script>
export default {
  data() {
    return {
      inputing: false,
      page: ''
    }
  },
  // computed: {
  //   pageUrl() {
  //     let n = this.page === '' ? 1 : this.page
  //     return `/?page=${n}`
  //   }
  // }
  methods: {
    pageInputing() {
      this.page = ''
      this.inputing = true
    }
  }
}
</script>
<style>
#page-nav a {
  padding:0 0.5rem 0.25rem 0.5rem;
}
#page-nav a:hover:not(.active){
  color: #db0300;
}
</style>



