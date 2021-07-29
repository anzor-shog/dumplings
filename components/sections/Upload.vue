<template>
  <b-row id="upload" class="py-5" align-h="center">
    <b-col xl="3" lg="4" class="d-lg-block d-sm-none">
      <img src="/iphone.svg" />
    </b-col>
    <b-col xl="3" lg="4" md="7">
      <b-row class="py-5 px-1 h-100" align-h="center" align-v="center">
        <b-col>
          <a href="https://biovillage.ru" target="_blank">
            <img src="/biovillage.svg" class="biovillage-icon" />
          </a>
          <p class="magistral-lg black">
            Доставка <br />
            через приложение
          </p>
          <p class="inter-xl black">
            Установите приложении Biovillage и заказывайте доставку до двери в
            удобное вам время
          </p>
          <div class="d-flex">
            <a
              href="https://play.google.com/store/apps/details?id=ru.biovillage.android&hl=ru&gl=US"
              target="_blank"
            >
              <img src="/google-play.svg" class="google-play-icon" />
            </a>
            <a
              href="https://apps.apple.com/RU/app/biovillage/id1546373052"
              target="_blank"
            >
              <img src="/app-store.svg" class="app-store-icon" />
            </a>
          </div>
        </b-col>
      </b-row>
    </b-col>
    <b-col md="2" class="d-lg-none d-md-block d-sm-none">
      <img src="/iphone.svg" />
    </b-col>
  </b-row>
</template>
<script>
export default {
  name: 'Principies',
  data() {
    return {}
  },
}
</script>
<style lang="scss" scoped>
@import '~/assets/styles/variables.scss';

#upload {
  background-image: linear-gradient(180deg, #ffcf2d 0%, #ffb94a 100%);
  .biovillage-icon {
    margin-bottom: 40px;
  }
  .magistral-lg {
    margin-bottom: 10px;
  }
  .inter-xl {
    line-height: 30px;
    margin-bottom: 30px;
  }
  .google-play-icon {
    margin-right: 20px;
  }
  .google-play-icon,
  .app-store-icon {
    transition: tranform 300ms;
    cursor: pointer;
    &:hover {
      transform: scale(1.01);
    }
  }
  a {
    border: none;
    text-decoration: none;
  }
}
@media (min-width: $lg) {
  .inter-xl {
    font-size: 17px;
  }
}
@media (min-width: $xl) {
  .inter-xl {
    font-size: 18px;
  }
}
</style>
