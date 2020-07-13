<template>
  <div class="container wrapmain">
    <BaseListLayout v-if="$pagination" />
    <Content v-else />
  </div>
</template>
<style lang="stylus" scoped>
.container
  min-height: calc(100vh - 434px)

#vuepress-theme-blog__global-layout
  word-wrap break-word

.content-wrapper
  padding 160px 15px 80px 15px
  min-height calc(100vh - 80px - 60px - 160px)
  max-width $contentWidth
  margin 0 auto

  @media (max-width: $MQMobile)
    &
      padding 100px 15px 20px 15px
      min-height calc(100vh - 20px - 60px - 100px)
</style>
