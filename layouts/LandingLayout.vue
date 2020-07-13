<template>
  <div>
    <div class="hero">
      <div class="container wrapmain">
        <div class="row align-items-center justify-content-between">
          <div class="col-md-6 pt-6">
            <h1>
              {{ $frontmatter.heroText }}
              <span class="text-green">
                {{ $frontmatter.heroTextHighlight }}
              </span>
            </h1>
            <div>{{ $frontmatter.tagline }}</div>
            <div style="width: 200px;">
              <a :href="$themeConfig.playstoreUrl">
                <img
                  alt="Get it on Google Play"
                  src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"
                />
              </a>
            </div>
            <Newsletter />
          </div>
          <div class="col-md-6 text-center">
            <img class="app-image" src="/assets/img/screenshot2.svg" />
          </div>
        </div>
      </div>
    </div>
    <Content />
  </div>
</template>
<script lang="js">
import Newsletter from '@theme/components/Newsletter.vue';

export default {
  components: {
    Newsletter
  }
}
</script>
<style lang="stylus" scoped>
.hero
  min-height: calc(100vh - 434px)
.app-image
  max-width 440px
</style>
