<template>
  <div class="root" :class="{ hide }">
    <preview :hide="hide" />
    <section class="w-100 wrapper" :class="{ hide }">
      <title-menu />
      <about />
      <principies />
      <products />
      <certificates />
      <div class="my-5" />
      <footer-form />
      <scroll-up />
    </section>
  </div>
</template>

<script>
import Preview from '~/components/sections/Preview.vue'
import TitleMenu from '~/components/sections/TitleMenu.vue'
import About from '~/components/sections/About.vue'
import Principies from '~/components/sections/Principies.vue'
import Products from '~/components/sections/Products.vue'
import Certificates from '~/components/sections/Certificates.vue'
import FooterForm from '~/components/sections/FooterForm.vue'
import ScrollUp from '~/components/sections/ScrollUp.vue'

export default {
  name: 'Main',
  components: {
    Preview,
    TitleMenu,
    About,
    Principies,
    Products,
    Certificates,
    FooterForm,
    ScrollUp,
  },
  data() {
    return {
      hide: true,
    }
  },
  head: {
    title: 'Пельмени Халяль FOODELITY | 100% натурально | foodelity.ru',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Пельмени. Экономь время на готовке! Халяль. Cобственное производство. Свежие продукты. Сертифицированный продукт.',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'foodelity, пельмениб экономь время на готовке, халяль, cвежие продукты, cертифицированный продукт',
      },
    ],
  },
  mounted() {
    setTimeout(() => {
      this.hide = false
    }, 3000)
  },
}
</script>

<style lang="scss" scoped>
.root {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
  overflow: hidden;
  &.hide {
    width: 100vw;
    height: 100vh;
  }
}
.wrapper {
  transition: transform 1s;
  &.hide {
    transform: translateY(100vh);
  }
}
</style>
