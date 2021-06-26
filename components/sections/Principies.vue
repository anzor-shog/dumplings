<template>
  <b-row id="foodelity" class="py-5">
    <b-col sm="10" offset-xl="2" offset-sm="1" class="py-5 px-0">
      <p class="magistral-lg">Принципы Foodelity</p>
    </b-col>
    <b-col sm="10" offset-xl="2" offset-sm="1" class="px-0">
      <b-row>
        <template v-for="item of items">
          <b-col :key="item.title" xl="5" lg="6" class="px-3">
            <b-row align-v="center">
              <b-col md="3" class="py-3">
                <img :src="item.icon" />
              </b-col>
              <b-col md="8" class="h-100 py-3 px-4">
                <p class="magistral-sm">{{ item.title }}</p>
                <p class="inter-md">
                  {{ item.text }}
                </p>
              </b-col>
            </b-row>
          </b-col>
        </template>
      </b-row>
    </b-col>
  </b-row>
</template>
<script>
export default {
  name: 'Principies',
  data() {
    return {
      items: [
        {
          icon: '/halal.svg',
          title: 'Халяль',
          text: '«Халяль» всегда является гарантом качества и люди, которые стремятся оздоровить организм, могут быть уверены, что в их рационе будет исключительно экологически чистая и натуральная еда',
        },
        {
          icon: '/eco.svg',
          title: 'ECO',
          text: 'Использование в производстве экологичного, натурального или органически чистого сырья',
        },
        {
          icon: '/gmo.svg',
          title: 'GMO & Soy Free',
          text: 'Без ГМО и соевых добавок',
        },
        {
          icon: '/cons.svg',
          title: 'Без консервантов',
          text: 'Полное отсутствие в производстве консервантов, усилителей вкуса и E-Добавок',
        },
      ],
    }
  },
}
</script>
