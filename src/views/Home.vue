<template>
    <div>
        <header-cmp></header-cmp>
        <div class="container mx-64 px-12 mx-auto">
            <p class="mt-12 mb-10 font-bold ml-2">
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
import HeaderCmp from '../components/header1'
import videoCard from '../components/videoCard'
import paginationCmp from '../components/pagination'
export default {
    components: {
        HeaderCmp,
        videoCard,
        paginationCmp
    }
}
</script>