<template>
  <transition name="preview" mode="out-in">
    <div v-if="hide" class="preview">
      <transition name="logo" mode="out-in">
        <div v-if="show" class="img-container px-2">
          <img src="/loader.svg" />
        </div>
      </transition>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'Preview',
  props: {
    hide: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      show: false,
    }
  },
  mounted() {
    setTimeout(() => {
      this.show = true
    }, 300)
  },
}
</script>
<style lang="scss" scoped>
@import '~/assets/styles/variables.scss';

.preview {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #0a1214;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  .img-container {
    overflow: hidden;
    width: 77%;
    img {
      width: 76vw;
    }
  }
}
.preview-enter-active,
.preview-leave-active {
  transition: transform 1s;
}
.preview-enter,
.preview-leave-to {
  transform: translateY(-100vh);
}
.logo-enter-active,
.logo-leave-active {
  transition: all 2s;
  transition-delay: 0.3s;
  opacity: 1;
  width: 77% !important;
}
.logo-enter,
.logo-leave-to {
  opacity: 0;
  width: 15% !important;
}
</style>
