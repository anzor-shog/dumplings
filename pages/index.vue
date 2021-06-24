<template>
  <div class="root">
    <!-- <Header /> -->
    <Title />
    <About />
  </div>
</template>

<script>
// import Header from '~/components/Header.vue'
import Title from '~/components/Title.vue'
import About from '~/components/About.vue'

export default {
  name: 'Main',
  components: {
    // Header,
    Title,
    About,
  },
}
</script>

<style lang="scss" scoped>
.root {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
}
</style>
