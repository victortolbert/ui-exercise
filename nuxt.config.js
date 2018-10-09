export default {
  env: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000'
  },
  mode: 'spa',
  head: {
    title: 'UI Exercise',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', content: 'UI Exercise' }
    ]
  },
  css: ['~/assets/css/style.css'],
  modules: ['@nuxtjs/axios'],
  plugins: ['~/plugins/vue-svgicon.js'],
  serverMiddleware: ['~/api/index.js'],
  router: {
    linkActiveClass: 'is-active'
  },
  loading: {
    color: '#d5504c',
    height: '5px'
  },
  loadingIndicator: {
    name: 'rotating-plane',
    background: '#d5504c',
    color: 'white'
  }
}
