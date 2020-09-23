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
            <WaitingListForm />
          </div>
          <div class="col-md-6 text-center">
            <div class="app-image">
              <img
                class="app-image-screenshot"
                src="/assets/img/screenshots/screenshot1.jpg"
              />
              <img class="app-image-frame" src="/assets/img/phone.svg" />
            </div>
            <div class="app-image-bg">
              <img class="leaf1" src="/assets/img/cannabis-leaf.png" />
              <img class="leaf2" src="/assets/img/cannabis-leaf.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Content />
  </div>
</template>
<script lang="js">
import WaitingListForm from '@theme/components/WaitingListForm.vue';

export default {
  components: {
    WaitingListForm
  }
}
</script>
<style lang="stylus" scoped>
.hero
  min-height: calc(100vh - 434px)
.app-image
  position inherit
  z-index 1
  display flex
  align-items: center;
  justify-content: center;
  > img
    // position absolute
  .app-image-screenshot
    height 360px
    z-index 2
  .app-image-frame
    height 440px
    position absolute

.app-image-bg
  position absolute
  left 0
  top 0
  z-index 0
  width 100%
  > img
    position absolute
    width 60%
    top 50px
  .leaf1
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    left 0
  .leaf2
    right 0px
</style>
