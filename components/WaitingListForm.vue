<template>
  <div class="newsletter">
    <div class="newsletter__wrap">
      <div class="newsletter__content">
        {{ $themeConfig.newsletterText }}
      </div>
      <WaitingListInput class="mt-2" />
    </div>
  </div>
</template>
<script>
import WaitingListInput from '@theme/components/WaitingListInput.vue'

export default {
  components: {
    WaitingListInput,
  },
}
</script>
<style lang="stylus" scoped>
.newsletter
  .newsletter &__wrap
    max-width none
    padding: 1.8rem
    background: #e5f5f0

  .newsletter &__fields
    display grid
    grid-template-columns 2fr 1fr
    grid-gap 10px

  .newsletter &__input
    margin-bottom 0

  .newsletter &__content
    margin-top:0

  .newsletter &__button
    transition box-shadow 0.2s ease, transform 0.2s ease

    &:hover
      box-shadow 1px 1px 5px rgba(0, 0, 0, 0.6)
      transform translateY(-2px)

@media (max-width: $MQMobile)
  .newsletter
    .newsletter &__fields
      display block

    .newsletter &__input
      margin-bottom 10px
</style>
