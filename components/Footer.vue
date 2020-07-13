<template>
  <footer class="themefooter">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col">
          <a href="/"
            ><img class="logofooter" :src="$withBase($themeConfig.logoDark)"
          /></a>
        </div>
        <div class="col text-right">
          <ul v-if="contact" class="list-unstyled">
            <li
              v-for="item in contact"
              :key="item.iconComponent"
              class="contact-item ml-2"
            >
              <NavLink :link="item.link">
                <component :is="item.iconComponent"></component>
                {{ item.text }}
              </NavLink>
            </li>
          </ul>
          <ul v-if="copyright" class="list-unstyled">
            <li
              v-for="item in copyright"
              :key="item.text"
              class="copyright-item"
            >
              <NavLink :link="item.link">{{ item.text }}</NavLink>
            </li>
          </ul>
          <a href="https://www.freepik.com/free-photos-vectors/design">
            Design vector created by freepik - www.freepik.com
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import {
  CodepenIcon,
  FacebookIcon,
  GithubIcon,
  GitlabIcon,
  GlobeIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  MessageSquareIcon,
  PhoneIcon,
  TwitterIcon,
} from 'vue-feather-icons'

export default {
  components: {
    FacebookIcon,
    GlobeIcon,
    InstagramIcon,
    LinkedinIcon,
    MailIcon,
    PhoneIcon,
    TwitterIcon,
  },

  computed: {
    contact() {
      return (
        (this.$themeConfig.footer && this.$themeConfig.footer.contact) ||
        []
      )
        .map(({ type, link }) => {
          return {
            iconComponent: this.getIconComponentName(type),
            link,
          }
        })
        .filter(({ iconComponent }) => iconComponent)
    },

    copyright() {
      return (
        (this.$themeConfig.footer && this.$themeConfig.footer.copyright) || []
      )
    },
  },

  methods: {
    getIconComponentName(contactType) {
      switch (contactType) {
        case 'facebook':
          return 'FacebookIcon'
        case 'twitter':
          return 'TwitterIcon'
        case 'linkedin':
          return 'LinkedinIcon'
        case 'mail':
          return 'MailIcon'
        case 'web':
          return 'GlobeIcon'
      }
    },
  },
}
</script>
<style lang="stylus" scoped>
.contact-item
  display: inline-block;
  *display:inline;
  /* this fix is needed for IE7- */
</style>
