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

    <pagination-cmp></pagination-cmp>
    </div>
    </div>
        
</template>
<script>
import videoCard from '../components/videoCard'
import paginationCmp from '../components/pagination'
export default {
  data() {
    return {
      img: require('../assets/banner.png')
    }
  },
	components: {
		videoCard,
    paginationCmp
	}
}
</script>
