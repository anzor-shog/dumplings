<template>
  <div id="scroll-up-btn" class="scroll-up-btn" @click="scrollTop">
    <b-icon-chevron-up font-scale="3"></b-icon-chevron-up>
  </div>
</template>
<script>
import { BIconChevronUp } from 'bootstrap-vue'

export default {
  name: 'ScrollUp',
  components: {
    'b-icon-chevron-up': BIconChevronUp,
  },
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
.scroll-up-btn {
  position: fixed;
  right: 60px;
  bottom: 60px;
  width: 60px;
  height: 60px;
  background-color: $green;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  svg {
    color: #fff;
  }
}
.show {
  visibility: visible;
  opacity: 0.2;
}
</style>
