module.exports =  {
  loading: {
    color: '#41b883'
  },
  build: {
    vendor: ['axios']
  },
  env: {
    provApiUrl: 'https://nuxt-api.herokuapp.com',
    provApiUrl: 'http://localhost:3200'
  },
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Meta description' }
    ],
    javascript: [
      { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.css' },
      { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css' }
    ]
  },
  css: [
    '~/css/app.css'
  ]
}
