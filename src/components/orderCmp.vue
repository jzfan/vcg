<template>
    <div class="flex flex-wrap justify-between items-center p-6 bg-gray-100">
        <span class='w-1/4 lg:w-1/12 text-gray-600 flex-none'>订单信息：</span>
        <div class="w-2/4 lg:w-2/12 flex justify-center items-center bg-local bg-no-repeat bg-cover" :style="{backgroundImage: 'url(' + img + ')'}">
            <a class="iconfont icon-play text-white text-4xl py-8 mr-4" href='/show'></a>
        </div>
        <div class="w-10/12 lg:w-9/12 flex-shrink flex flex-col justify-around text-gray-900 pl-4">
            <p class="mb-4">价 格：<span class='text-red text-2xl font-medium'>￥5000.00</span></p>
            <p><span><i class='iconfont icon-star-normal'></i> 用途：</span>
                用途 1，用途 1，用途 1，用途 1，用途 1，用途 1，用途 1，用途 1，用途 1，用途 1，用途 1，用途 1
            </p>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            img: require('../assets/cat.png')
        }
    }
}
</script>