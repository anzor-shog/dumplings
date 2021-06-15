<template>
  <div class="title">
    <img src="~/assets/images/title-image.svg" />
    <div class="title-text">
      <p class="magistral-xxl">Верность здоровому питанию</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Title',
}
</script>

<style lang="scss" scoped>
.title {
  display: flex;
  position: absolute;
  top: 0;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 96px);
  img {
    position: absolute;
    width: 100vw;
    top: 0;
    left: 0;
  }
  .title-text {
    max-width: 1180px;
    width: 100%;
    z-index: 1;
    p {
      width: 720px;
    }
  }
}
</style>
