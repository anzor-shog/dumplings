<template>
  <div class="root">
    <title-menu />
    <about />
    <principies />
    <products />
    <certificates />
    <div class="my-5" />
    <footer-form />
  </div>
</template>

<script>
import TitleMenu from '~/components/sections/TitleMenu.vue'
import About from '~/components/sections/About.vue'
import Principies from '~/components/sections/Principies.vue'
import Products from '~/components/sections/Products.vue'
import Certificates from '~/components/sections/Certificates.vue'
import FooterForm from '~/components/sections/FooterForm.vue'

export default {
  name: 'Main',
  components: {
    TitleMenu,
    About,
    Principies,
    Products,
    Certificates,
    FooterForm,
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
