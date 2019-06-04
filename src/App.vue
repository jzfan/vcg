<template>
  <div id="app" class="text-black">
    <router-view/>
      <footer-cmp></footer-cmp>
  </div>
</template>

<script>
import  FooterCmp from './components/footer'
export default {
  components: {
    FooterCmp
  }
}
</script>

<style>
@import "../node_modules/tailwindcss/base.css";
@import "../node_modules/tailwindcss/components.css";
@import "../node_modules/tailwindcss/utilities.css";
</style>

