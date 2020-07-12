<template>
  <div id="vuepress-theme-blog__global-layout">
    <Header />
    <MobileHeader
      :is-open="isMobileHeaderOpen"
      @toggle-sidebar="isMobileHeaderOpen = !isMobileHeaderOpen"
    />
    <div @click="isMobileHeaderOpen = false">
      <DefaultGlobalLayout />
    </div>
    <Footer />
  </div>
</template>

<script>
import GlobalLayout from '@app/components/GlobalLayout.vue'
import Header from '@theme/components/Header.vue'
import MobileHeader from '@theme/components/MobileHeader.vue'
import Footer from '@theme/components/Footer.vue'

export default {
  components: {
    DefaultGlobalLayout: GlobalLayout,
    Header,
    MobileHeader,
    Footer,
  },

  data() {
    return {
      isMobileHeaderOpen: false,
    }
  },

  mounted() {
    this.$router.afterEach(() => {
      this.isMobileHeaderOpen = false
    })
  },
}
</script>
