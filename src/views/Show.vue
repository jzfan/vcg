<template>
    <div>
        <header-cmp></header-cmp>
        <div class="container mx-64 px-12 mx-auto">
            <p class="mt-12 mb-10 text-gray-500">
                <span><i class="iconfont icon-location"></i>当前位置：</span>首页 > 视频详情
            </p>
            <div class="border-2 border-gray-200 p-12 mb-10">
              <video src="movie.ogg" controls="controls" class="w-full">
              您的浏览器不支持 video 标签。
              </video>
            </div>
            <div class="flex justify-between mb-8">
              <p><i class="iconfont icon-yuan mr-2"></i><span class="tracking-wider">价 格：</span><span class="font-medium text-red text-xl">￥5000</span></p>
              <button class="bg-red px-12 py-2 text-gray-300 tracking-wider hover:text-gray-200 rounded hover:bg-red-dark">点击购买</button>
            </div>
            <div class="flex mb-8">
              <p class="w-32 -mr-4">
                <i class="iconfont icon-star-normal mr-2"></i>
                <span class="tracking-wider">用 途：</span>
              </p>
              <p class="flex-grow">
                用途1，用途2，用途1，用途2，用途1，用途2，用途1，用途2，用途1，用途2，用途1，用途2，用途1，用途2，用途1，用途2，用途19
              </p>
            </div>
            <p class="mb-12">
              <i class="iconfont icon-barchart"></i>
              <span class="tracking-wide"> 成交量：</span> 1022
            </p>
              <i class="iconfont icon-dot text-red"></i>
              <span class="font-bold"> 版权声明：</span>
            <p class="mb-12 text-gray-600">
              本公司所有本公司所有本公司所有本公司所有本公司所有本公司所有本公司所有本公司所有本公司所有本公司所有本公司所有本公司所有本公司所有本公司所有本公司所有本公司所有本公司所有本公司所有本公司所有本公司所有本公司所有本公司所有本公司所有本公司所有本公司所有本公司所有本公司所有本公司所有本公司所有本公司所有本公司所有本公司所有本公司所有本公司所有本公司所有本公司所有本公司所有本公司所有
            </p>
        </div>
    </div>
</template>
<script>
import headerCmp from '../components/header2'
export default {
    components: {
        headerCmp
    }
}
</script>