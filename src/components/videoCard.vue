<template>
        <div class="mb-4">
              <img src="../assets/cat.png" @click='displayVideo'>
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
