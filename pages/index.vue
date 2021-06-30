<template>
  <div class="root" :class="{ hide }">
    <preview :hide="hide" />
    <transition name="wrapper">
      <section v-show="!hide" class="w-100 wrapper">
        <title-menu />
        <about />
        <principies />
        <products />
        <certificates />
        <div class="my-5" />
        <footer-form />
        <scroll-up />
      </section>
    </transition>
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
          'Foodelity. Пельмени. Экономь время на готовке! Халяль. Cобственное производство. Свежие продукты. Сертифицированный продукт.',
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
}
.hide {
  width: 100vw;
  height: 100vh;
}

.wrapper-enter-active,
.wrapper-leave-active {
  transition: transform 1s;
}
.wrapper-enter,
.wrapper-leave-to {
  transform: translateY(100vh);
}
</style>
