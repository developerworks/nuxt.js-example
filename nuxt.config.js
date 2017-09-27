module.exports = {

  ////////////////////////////
  // Loading component
  ////////////////////////////

  // If you don't want to display the progress bar between the routes, simply add loading: false in your nuxt.config.js file
  // You could also set loading as an javascript plain object, If you set it as boolean type, then use default loading configs.

  loading: false,

  // The default styles is as folloing config object, you can change it with your own styles.

  // loading: {
  //   color: 'black',
  //   failedColor: 'red',
  //   height: '2px',
  //   duration: 5000
  // },

  // You can also specify a customized loading component, in the loading config, you must specify the path of the loading
  // component. Nuxt.js will automatically call the component. for example:

  // loading: '~components/Loading.vue',

  ////////////////////////////
  // Main styles
  ////////////////////////////
  css: [
    'assets/main.css'
  ],

  ////////////////////////////
  // Nuxt.js plugins
  ////////////////////////////
  plugins: [
    { src: '~plugins/iview', ssr: true }
  ],

  ///////////////////////////
  // Html meta tags config
  ///////////////////////////

  head: {
    titleTemplate: '%s - Nuxt.js',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Meta description' }
    ]
  },

  performance: {
    // In production, nuxt.js will use gzip to compress the all assets files in the app. if you use cloudflare or other cdn service that has been opened the gzip compression, you should close the gzip compress by set it as: false
    gzip: {
      threshold: 0
    },
    // In production, nuxt.js uses the prefetch strategy to pre-fetch the pages bundle that will be required when navigating
    // to the next page. When the user will click on a link, nuxt.js will already have pre-fetched the page and the navigation
    // will feel instant while keeping the code splitted.
    prefetch: true, // default is true
  },

  router: {
    // base: '/app/',
    linkActiveClass: 'nuxt-link-active',

  },
  // Nuxt.js uses the <transition> component to let you create amazing transitions/animations between your pages.
  // Page transition effect, when from a page route to other pages
  // Value type could be string, object, or function as following:
  // About full references, please see: https://nuxtjs.org/api/pages-transition
  transition: 'page',
  // or
  // transition: {
  //   name: 'page',
  //   mode: 'out-in',
  //   beforeEnter (el) {
  //     console.log('Before enter...');
  //   }
  // },
  // transition(to, from) {
  //   if (!from) return 'slide-left'
  //   return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
  // }
}
