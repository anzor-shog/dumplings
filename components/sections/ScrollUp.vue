<template>
  <div
    id="scroll-up-btn"
    class="scroll-up-btn d-md-flex d-sm-none"
    @click="scrollTop"
  >
    <img src="/up.svg" class="w-100" />
  </div>
</template>
<script>
export default {
  name: 'ScrollUp',
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 400) {
        const element = document.getElementById('scroll-up-btn')
        element.classList.add('show')
      } else {
        const element = document.getElementById('scroll-up-btn')
        element.classList.remove('show')
      }
    },
    scrollTop() {
      window.scrollTo({
        top: document.querySelector('title').offsetTop,
        behavior: 'smooth',
      })
    },
  },
}
</script>
<style lang="scss" scoped>
@import '~/assets/styles/variables.scss';
@media (min-width: $md) {
  .scroll-up-btn {
    right: 20px;
    bottom: 150px;
    width: 30px;
    height: 30px;
  }
}
@media (min-width: $lg) {
  .scroll-up-btn {
    right: 60px;
    bottom: 250px;
    width: 100px;
    height: 100px;
  }
}
.scroll-up-btn {
  position: fixed;
  background-color: #fff;
  border-radius: 50%;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  img {
    object-fit: cover;
  }
}
.show {
  visibility: visible;
  opacity: 0.2;
}
</style>
