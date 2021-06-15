<template>
  <div class="root">
    <Header />
    <Title />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Title from '~/components/Title.vue'

export default {
  name: 'Main',
  components: {
    Header,
    Title,
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
