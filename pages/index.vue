<template>
  <div class="root">
    <Title />
    <About />
    <Principies />
    <Products />
  </div>
</template>

<script>
import Title from '~/components/sections/Title.vue'
import About from '~/components/sections/About.vue'
import Principies from '~/components/sections/Principies.vue'
import Products from '~/components/sections/Products.vue'

export default {
  name: 'Main',
  components: {
    Title,
    About,
    Principies,
    Products,
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
