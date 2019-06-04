<template>
  <div id="app">
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

