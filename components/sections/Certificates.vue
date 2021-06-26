<template>
  <b-row class="py-2 pb-5 mb-5 flex-lg-row flex-sm-column-reverse">
    <b-col
      xl="4"
      lg="5"
      md="10"
      sm="10"
      offset-xl="2"
      offset-sm="1"
      class="px-0"
    >
      <p class="magistral-sm mb-2">Безопасность превыше всего</p>
      <p class="inter-md pr-lg-5">
        Мы ответственно относимся к вопросам гарантии качества. Весь процесс
        производства соответствует международным стандартам HACCP, ISO 9001:2015
        и ISO 22000:2005, сертификаты соответствия РСТ и ГОСТ Р, декларация о
        соответствии ЕАС.
      </p>
    </b-col>
    <b-col
      xl="3"
      lg="4"
      md="10"
      sm="10"
      offset-lg="0"
      offset-sm="1"
      class="
        d-flex
        align-items-center
        justify-content-between
        ml-lg-5
        mb-sm-3
        p-0
      "
    >
      <img v-for="icon of icons" :key="icon" :src="icon" />
    </b-col>
  </b-row>
</template>
<script>
export default {
  name: 'Certificates',
  data() {
    return {
      icons: [
        '/iso-icon.svg',
        '/eac-icon.svg',
        '/halal-icon.svg',
        '/pct-icon.svg',
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles/variables.scss';
@media (min-width: $sm) {
  img {
    width: 60px;
  }
}
@media (min-width: $md) {
  img {
    width: auto;
  }
}
</style>
