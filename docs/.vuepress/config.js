module.exports = {
  title: 'Groots',
  base: '/',
  dest: 'public',
  home: true,
  description: 'Your indoor grow asssistant',
  logo: './assets/img/logo.svg',
  logoDark: './assets/img/logo_dark.svg',
  theme: require.resolve('../../'),
  head: [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/assets/favicons/apple-touch-icon.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/favicons/favicon-32x32.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/assets/favicons/favicon-16x16.png"}],
    ['link', { rel: "manifest", href: "/assets/favicons/site.webmanifest"}],
    ['link', { rel: "mask-icon", href: "/assets/favicons/safari-pinned-tab.svg", color: "#3a0839"}],
    ['link', { rel: "shortcut icon", href: "/assets/favicons/favicon.ico"}],
    ['meta', { name: "msapplication-TileColor", content: "#3a0839"}],
    ['meta', { name: "msapplication-config", content: "/assets/favicons/browserconfig.xml"}],
    ['meta', { name: "theme-color", content: "#ffffff"}],
  ],
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
