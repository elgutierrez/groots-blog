module.exports = {
  title: '',
  base: '/',
  dest: 'public',
  home: true,
  description: 'Some description',
  logo: './assets/img/logo.svg',
  logoDark: './assets/img/logo_dark.svg',
  theme: require.resolve('../../'),
  themeConfig: {
  authors: [
      {
      name: 'Carlo',
      avatar: '/assets/img/sal.jpg',
      link: 'https://wowthemes.net/donate',
      linktext: 'Follow',
      },
      {
        name: 'John Doe',
        avatar: '/assets/img/avatar.png',
        link: 'https://bootstrapstarter.com/',
        linktext: 'Follow',
      },
    ],
    footer: {
      contact: [
        {
          type: 'facebook',
          link: 'https://www.facebook.com/grootsapp',
        },
        {
          type: 'instagram',
          link: 'https://www.instagram.com/grootsapp',
        },
        {
          type: 'linkedin',
          link: 'https://www.linkedin.com/company/grootsapp',
        },
        {
          type: 'mail',
          link: 'mailto:contact@groots.app',
        },
        {
          type: 'twitter',
          link: 'https://twitter.com/grootsapp',
        },
        {
          type: 'web',
          link: 'https://www.groots.app',
        }
      ],
      copyright: [
        {
          text: 'Groots Privacy policy and Terms',
          link: 'https://www.groots.app/terms/',
        },
        {
          text: 'Made with ❤️ from all over Europe and South America',
          link: 'https://www.groots.app/manifest/',
        },
      ],
    },

    sitemap: {
      hostname: 'https://www.groots.app/'
    },
    comment: {
      service: 'disqus',
      shortname: 'demowebsite',
    },
    newsletter: {
      endpoint: 'https://app.us10.list-manage.com/subscribe/post?u=331b1e53e07b0b5b75b3367f8&amp;id=d8dcd1fed0'
    },
    feed: {
      canonical_base: 'https://www.groots.app/',
    },
    smoothScroll: true
  },
}
