export default {
  head: {
    mode: 'spa',
    title: 'UI Exercise',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', content: 'UI Exercise' }
    ]
  },
  modules: ['@nuxtjs/axios'],
  serverMiddleware: ['~/api/index.js']
}
