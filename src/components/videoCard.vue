<template>
  <div class="w-1/2 md:w-1/3 lg:w-1/5 px-2 mb-4 overflow-hidden cursor-pointer">
    <img :src="item.pic" @click="displayVideo" class="poster">
  </div>
</template>
<script>
export default {
  props: ["item"],
  methods: {
    displayVideo() {
      localStorage.setItem("video", JSON.stringify(this.item));
      this.$router.push({ path: "/show" });
    }
  }
};
</script>
<style>
.poster:hover {
  transform: scale(1.5);
}
</style>
