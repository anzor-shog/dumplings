<template>
  <div id="title" class="title pb-5">
    <b-row>
      <b-col cols="12" class="p-0">
        <img src="/title-image.svg" class="w-100 back-image" />
      </b-col>
    </b-row>
    <div class="title-content">
      <b-row>
        <b-col xl="8" sm="10" offset-xl="2" offset-sm="1">
          <b-row align-h="between" class="py-4">
            <b-col
              lg="2"
              md="4"
              sm="7"
              offset-lg="0"
              offset-md="4"
              offset-sm="0"
              class="pb-md-4"
            >
              <img src="/logo.svg" class="logo-image" />
            </b-col>
            <b-col
              xl="6"
              lg="6"
              md="10"
              sm="0"
              offset-lg="0"
              offset-md="1"
              class="px-md-0 d-md-block d-sm-none justify-content-end"
            >
              <div class="links ml-auto">
                <template v-for="title of titles">
                  <nuxt-link
                    :key="title.id"
                    class="inter-md"
                    :to="{ path: '/', hash: title.hash }"
                    :alt="title.text"
                    :text="title.text"
                  >
                    {{ title.text }}
                  </nuxt-link>
                </template>
              </div></b-col
            >
            <div
              v-b-modal.nav-modal
              class="px-3 outline-none d-md-none d-sm-flex align-items-center"
            >
              <b-img
                src="/navbar-icon.svg"
                class="outline-none"
                alt="navbar icon"
              />
            </div>
            <b-modal id="nav-modal" hide-footer>
              <div
                class="
                  d-flex
                  flex-column
                  align-items-center
                  justify-content-center
                  h-100
                "
              >
                <template v-for="title of titles">
                  <p :key="title.id" class="inter-md" @click="to(title)">
                    {{ title.text }}
                  </p>
                </template>
              </div>
            </b-modal>
          </b-row>
        </b-col>
      </b-row>
      <b-row align-v="center" class="h-100">
        <b-col
          xl="4"
          lg="3"
          md="5"
          sm="10"
          class="mr-auto"
          offset-xl="2"
          offset-md="1"
          offset-sm="1"
        >
          <transition name="title" mode="out-in">
            <p v-if="show" class="magistral-xxl px-xl-2 px-lg-2 px-md-5">
              Верность здоровому питанию
            </p>
          </transition>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TitleMenu',
  transition: 'slide-bottom',
  data() {
    return {
      titles: [
        { id: 1, text: 'О компании', anchor: '#about', hash: 'about' },
        {
          id: 2,
          text: 'Принципы Foodelity',
          anchor: '#foodelity',
          hash: 'foodelity',
        },
        { id: 3, text: 'Продукция', anchor: '#products', hash: 'products' },
        {
          id: 4,
          text: 'Свяжитесь с нами',
          anchor: '#contact',
          hash: 'contact',
        },
      ],
      show: false,
    }
  },
  mounted() {
    setTimeout(() => {
      this.show = true
    }, 300)
  },
  methods: {
    to(link) {
      setTimeout(() => {
        window.scrollTo({
          top: document.querySelector(link.anchor).offsetTop,
          behavior: 'smooth',
        })
      }, 300)
      this.$bvModal.hide('nav-modal')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles/variables.scss';

.title {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
  overflow: hidden;
  .logo-image {
    @media (min-width: $sm) {
      width: 100%;
    }
    @media (min-width: $md) {
      width: auto;
    }
    @media (min-width: $lg) {
      width: auto;
    }
    @media (min-width: $xl) {
      width: auto;
    }
  }
  .back-image {
    @media (min-width: $sm) {
      height: 535px;
      transform: scale(3.5);
      margin-left: 40px;
    }
    @media (min-width: $md) {
      height: 725px;
      transform: scale(2);
      margin-left: 40px;
    }
    @media (min-width: $lg) {
      height: auto;
      transform: none;
      margin-left: unset;
    }
    @media (min-width: $xl) {
      height: auto;
      transform: none;
      margin-left: unset;
    }
  }
  .title-content {
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    .links {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 580px;
      height: 40px;
    }
  }
}
.title-enter-active,
.title-leave-active {
  transition: transform 1s cubic-bezier(0, 1, 0.4, 1.2);
}
.title-enter,
.title-leave-to {
  transform: translateX(-100vw);
}
</style>
