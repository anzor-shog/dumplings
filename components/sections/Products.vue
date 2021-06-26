<template>
  <b-row class="py-5">
    <b-col sm="10" offset-xl="2" offset-sm="1" class="py-5 px-0">
      <p class="magistral-lg">Наша продукция</p>
    </b-col>
    <b-col sm="10" offset-xl="2" offset-sm="1" class="px-0">
      <b-row>
        <template v-for="product of products">
          <b-col :key="product.subtitle" xl="5" lg="6" class="px-3 mb-5">
            <product-card :product="product" />
          </b-col>
        </template>
      </b-row>
    </b-col>
  </b-row>
</template>
<script>
import ProductCard from '~/components/units/ProductCard.vue'

export default {
  name: 'Products',
  components: {
    ProductCard,
  },
  data() {
    return {
      products: [
        {
          image: '/govyajie.svg',
          title: 'Пельмени',
          subtitle: '«ГОВЯЖЬИ»',
          compounds: [
            {
              title: 'Фарш',
              subtitle:
                'говядина, вода питьевая, жир-сырец, лук репчатый,соль поваренная, перец черный, кориандр.',
            },
            {
              title: 'Тесто',
              subtitle:
                'мука пшеничная высший сорт, вода питьевая, яйцо куриное, масло подсолнечное, соль.',
            },
          ],
          bju: ['Белки 9 г', 'Жиры 15 г', 'Углеводы 26 г'],
          calories: '280 кКкал, 750 г',
        },
        {
          image: '/sabantui.svg',
          title: 'Пельмени',
          subtitle: '«САБАНТУЙ»',
          compounds: [
            {
              title: 'Фарш',
              subtitle:
                'говядина, баранина, вода питьевая, лук репчатый, соль поваренная, зелень, перец черный, перец душистый.',
            },
            {
              title: 'Тесто',
              subtitle:
                'мука пшеничная высший сорт, вода питьевая, яйцо куриное, масло подсолнечное, соль.',
            },
          ],
          bju: ['Белки 8,5 г', 'Жиры 11 г', 'Углеводы 28 г'],
          calories: '250 кКкал, 750 г',
        },
        {
          image: '/vostochnie.svg',
          title: 'Пельмени',
          subtitle: '«ВОСТОЧНЫЕ»',
          compounds: [
            {
              title: 'Фарш',
              subtitle:
                'баранина охлажденное в/с, говядина охлажденная в/с, мясо куриное в/с, вода питьевая, лук репчатый, соль поваренная, зелень, перец черный, перец душистый.',
            },
            {
              title: 'Тесто',
              subtitle:
                'мука пшеничная в/с, вода питьевая, яйца куриные, соль.',
            },
          ],
          bju: ['Белки 9 г', 'Жиры 9 г', 'Углеводы 28 г'],
          calories: '230 кКкал, 750 г',
        },
      ],
    }
  },
}
</script>
