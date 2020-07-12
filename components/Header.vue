<template>
  <section id="header-wrapper">
    <header id="header">
      <div class="header-wrapper">
        <nav class="navbar navbar-expand-md navbar-light bg-white fixed-top">
          <div class="container">
            <NavLink link="/" class="navbar-brand"
              ><img :src="$withBase($themeConfig.logo)" /> {{ $site.title }}
            </NavLink>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarsExampleDefault"
              aria-controls="navbarsExampleDefault"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div id="navbarsExampleDefault" class="collapse navbar-collapse">
              <ul v-if="$themeConfig.nav" class="navbar-nav ml-auto">
                <li
                  v-for="item in $themeConfig.nav"
                  :key="item.text"
                  class="nav-item"
                >
                  <NavLink :link="item.link" class="nav-link">{{
                    item.text
                  }}</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  </section>
</template>

<script>
export default {}
</script>

<style lang="stylus">
@import '~@app/style/config'
// border-bottom 5px solid lighten(#3eaf7c, 50%)
.header-wrapper
  .title
    /* flex 0 0 200px */
    font-size 30px
    margin 0
    letter-spacing 2px
    display block
    text-transform uppercase

    a
      color $darkTextColor
      font-weight bold
      text-decoration none

  .header-right-wrap
    flex 1
    display flex
    justify-content flex-end
    align-items center

    .nav
      flex 0 0 auto
      display flex
      margin 0

      .nav-item
        margin-left 20px

        a
          text-decoration none
          transition color 0.3s

@media (max-width: $MQMobile)
  #header
    display none

  .header-wrapper
    flex-direction column

    .header-right-wrap
      display none
</style>
