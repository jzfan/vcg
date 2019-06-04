<template>
<div>
  <section class="flex justify-center items-center bg-local bg-no-repeat bg-cover"  :style="{backgroundImage: 'url(' + img + ')'}">
      <div class="w-1/4" style="padding: 10vw 0 16vw 0">
        <img src="../assets/logo.svg">
      </div>
  </section>
    <div class="container mx-64 px-12 mx-auto">
    	<p class="py-12">
    	  视频展示
    	</p>
    <div class="flex justify-between flex-wrap md:justify-around">
		<video-card v-for='n in 24'></video-card>
    </div>

    <nav class="pagination is-centered" role="navigation" aria-label="pagination">
      <span class='pagination-all'>共 123 页</span>
      <a class="pagination-previous">首页</a>
      <a class="pagination-previous">上一页</a>
      <ul class="pagination-list">
        <li><a class="pagination-link" aria-label="Goto page 1">1</a></li>
        <li><a class="pagination-link" aria-label="Goto page 2">2</a></li>
        <li><a class="pagination-link" aria-label="Goto page 3">3</a></li>
        <li><a class="pagination-link" aria-label="Goto page 4">4</a></li>
        <li><span class="pagination-ellipsis">&hellip;</span></li>
        <li><a class="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a></li>
        <li><a class="pagination-link" aria-label="Goto page 47">47</a></li>
      </ul>
      <a class="pagination-next">下一页</a>
      <a class="pagination-next">末页</a>
      <a class="pagination-next">跳转至____页</a>
      <a class="pagination-next pagination-go"><i class="iconfont icon-double-arrow-right has-background-danger has-text-white"></i></a>
    </nav>
    </div>
    </div>
        
</template>
<script>
import videoCard from '../components/videoCard'
export default {
  data() {
    return {
      img: require('../assets/banner.png')
    }
  },
	components: {
		videoCard
	}
}
</script>
