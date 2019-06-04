<template>
    <header class="flex justify-center items-center bg-local bg-no-repeat bg-cover" :style="{backgroundImage: 'url(' + img + ')'}">
        <div class="w-1/4" style="padding: 10vw 0 16vw 0">
            <img src="../assets/logo.svg">
        </div>
    </header>
</template>
<script>
export default {
    data() {
        return {
            img: require('../assets/banner.png')
        }
    }
}
</script>