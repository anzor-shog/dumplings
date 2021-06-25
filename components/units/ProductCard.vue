<template>
  <div class="d-md-flex">
    <img :src="product.image" />
    <div class="description">
      <p class="magistral-sm mb-1">{{ product.title }}</p>
      <p class="magistral-md">{{ product.subtitle }}</p>
      <div class="compound pb-2 mb-5">
        <p
          v-for="compound of product.compounds"
          :key="compound.subtitle"
          class="inter-md"
        >
          <span class="font-weight-bold">{{ compound.title }}</span> —
          {{ compound.subtitle }}
        </p>
      </div>
      <b-row class="inter-sm w-100 m-0">
        <b-col v-for="bju of product.bju" :key="bju" md="4" sm="5" class="p-0">
          <p class="mb-2">{{ bju }}</p>
        </b-col>
        <b-col cols="6" class="p-0">
          <p>{{ product.calories }}</p>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles/variables.scss';
@media (min-width: $sm) {
  .description {
    padding: 25px 0;
    width: 100%;
    .compound {
      height: 170px;
    }
  }
}
@media (min-width: $md) {
  .description {
    position: relative;
    border: 2px solid $green;
    border-left: none;
    border-radius: 0 2px 2px 0;
    top: 40px;
    padding: 25px;
    width: 363px;
  }
}
img {
  border: 1px solid white;
}
.description {
  height: 385px;
  .compound {
    height: 160px;
  }
}
</style>
