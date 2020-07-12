<template>
  <div class="row">
    <router-link to="/tag/">Tags</router-link>
    <SearchBox />
    <Feed />
  </div>
</template>
<script>
import SearchBox from '@SearchBox'
import Feed from './Feed'

export default {
  components: { SearchBox, Feed },
}
</script>
<style lang="stylus">
@import '~@app/style/config'
.search-box
  margin-left 20px

  input
    border-radius 5px
    transition all 0.5s
    border 1px solid #cecece

    &:hover
      border 1px solid $accentColor
      box-shadow 0 0 5px $accentColor

  .suggestions
    border 1px solid $darkBorderColor
    top 40px
    right 0

    a
      color $darkTextColor
      text-decoration none

      &.focused
        color $accentColor
</style>
