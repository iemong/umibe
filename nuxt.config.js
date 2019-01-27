module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'ウミベプランニング | クリエイティブコンテンツ企画制作',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=750'},
      {
        hid: 'description',
        name: 'description',
        content: 'ウミベプランニングはコンテンツプロデューサー・プランナー楠瀬薫子の屋号です。クリエイティブコンテンツの企画制作を通じ、人を笑顔に、世界をハッピーにするお手伝いをします。受託での企画制作業とオリジナル水着ブランドCOLCA(コルカ)の運営を行っています。'
      },
      {hid: 'og:title', name: 'og:title', content: 'ウミベプランニング | クリエイティブコンテンツ企画制作'},
      {hid: 'og:type', name: 'og:type', content: 'website'},
      {hid: 'og:url', name: 'og:url', content: 'http://umibe-planning.jp'},
      {hid: 'og:site_name', name: 'og:site_name', content: 'ウミベプランニング | クリエイティブコンテンツ企画'},
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'ウミベプランニングはクリエイティブコンテンツの企画制作を通じ、人を笑顔に、世界をハッピーにするお手伝いをします。受託での企画制作業とオリジナルブランドCOLCA(コルカ)の運営を行っています。'
      },
      {hid: 'og:image', name: 'og:image', content: 'http://umibe-planning.jp/ogp.png'},

    ],
    link: [
      {rel: 'icon', type: 'image/gif', href: '/favicon32.gif', size: '32x32'},
      {rel: 'icon', type: 'image/gif', href: '/favicon16.gif', size: '16x16'},
    ],
    script: [
      {src: 'https://cdnjs.cloudflare.com/ajax/libs/picturefill/3.0.3/picturefill.min.js', type: 'text/javascript'},
      {src: 'https://cdnjs.cloudflare.com/ajax/libs/bodymovin/4.13.0/bodymovin.min.js', type: 'text/javascript'}
    ],
  },
  /*
  ** Customize the progress bar color
  */
  loading: {color: '#3B8070'},
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  modules: [
    // Simple usage
    ['@nuxtjs/google-analytics', {
      id: 'UA-121767283-1'
    }]
  ]
}
