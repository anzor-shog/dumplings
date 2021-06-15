<template>
  <div class="header">
    <img src="~/assets/images/logo.svg" />
    <div class="links">
      <template v-for="title of titles">
        <nuxt-link
          :key="title.id"
          class="inter-md"
          :to="title.anchor"
          :alt="title.text"
          :text="title.text"
        >
          {{ title.text }}
        </nuxt-link>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header',
  data() {
    return {
      titles: [
        { id: 1, text: 'О компании', anchor: '#about' },
        { id: 2, text: 'Принципы Foodelity', anchor: '#foodelity' },
        { id: 3, text: 'Продукция', anchor: '#products' },
        { id: 4, text: 'Свяжитесь с нами', anchor: '#contact' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: center;
  max-width: 1180px;
  width: 100%;
  margin: auto 0;
  padding: 27px;
  z-index: 1;
  .links {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 580px;
  }
}
</style>
