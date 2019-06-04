<template>
        <div class="mb-4 overflow-hidden cursor-pointer">
              <img src="../assets/cat.png" @click='displayVideo' id='poster'>
        </div>
</template>
<script>
export default {
    methods: {
        displayVideo() {
            this.$router.push({path:'/show'})
        }
    }

}
</script>
<style>
#poster:hover{
	transform: scale(1.5)
}

</style>
