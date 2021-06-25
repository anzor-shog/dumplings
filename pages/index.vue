<template>
  <div class="root">
    <Title />
    <About />
    <Principies />
  </div>
</template>

<script>
import Title from '~/components/Title.vue'
import About from '~/components/About.vue'
import Principies from '~/components/Principies.vue'

export default {
  name: 'Main',
  components: {
    Title,
    About,
    Principies,
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
