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
              <a
                href="https://play.google.com/store/apps/details?id=com.app.groots"
              >
                <img
                  alt="Get it on Google Play"
                  src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"
                />
              </a>
            </div>
            <Newsletter
              :show-title="false"
              :text="$frontmatter.newsletterText"
            />
          </div>
          <div class="col-md-6 text-center">
            <img class="app-image" src="/assets/img/screenshot.svg" />
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
.app-image
  max-width 340px
</style>
