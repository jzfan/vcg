<template>
  <div class="flex flex-wrap justify-between items-center p-6 bg-gray-100">
    <span class="w-1/4 lg:w-1/12 text-gray-600 flex-none">订单信息：</span>
    <div
      class="w-2/4 lg:w-2/12 flex justify-center items-center bg-local bg-no-repeat bg-cover"
      :style="{backgroundImage: 'url('+ video.pic +')'}"
    >
      <a class="iconfont iconplay text-white text-4xl py-8 mr-4" href="/show"></a>
    </div>
    <div class="w-10/12 lg:w-9/12 flex-shrink flex flex-col justify-around text-gray-900 pl-4">
      <p class="mb-4">
        <i class="iconfont iconjiage"></i>
        价 格：
        <span class="text-red text-2xl font-medium">￥{{ video.price }}</span>
      </p>
      <p>
        <i class="iconfont iconyongtu"></i>
        用 途：
        {{ video.purpose }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      video: JSON.parse(localStorage.getItem("video"))
    };
  }
};
</script>