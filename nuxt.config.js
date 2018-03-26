module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    // title: 'story-blog',
    title: 'my frist nuxt webapp',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "An awesome  blog about me" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel="stylesheet", href: 'https://fonts.googleapis.com/css?family=Faster+One' }
      // { rel:'stylesheet', href: 'https://fonts.googleapis.com/css?family=Pacifico&amp;subset=cyrillic'  }
      // { rel: 'stylesheet', href:'https://fonts.googleapis.com/css?family=Bungee+Outline'  }
      { rel:'stylesheet', href: 'https://fonts.googleapis.com/css?family=Permanent+Marker' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
