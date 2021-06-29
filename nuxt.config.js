export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Пельмени Халяль FOODELITY | 100% натурально | foodelity.ru',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
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
    htmlAttrs: {
      lang: 'ru',
    },
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
  ],
  axios: {
    // proxy: true
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/styles/custom.scss',
    '~/assets/styles/fonts.scss',
    '~/assets/styles/text.scss',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  router: {
    scrollBehavior(to) {
      if (to.hash) {
        return window.scrollTo({
          top: document.querySelector(to.hash).offsetTop,
          behavior: 'smooth',
        })
      }
      return window.scrollTo({ top: 0, behavior: 'smooth' })
    },
  },
}
