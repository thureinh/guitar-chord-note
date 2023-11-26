// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    port: 4000,
    host: '0.0.0.0'
  },
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss'],
  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': 'postcss-nesting',
      tailwindcss: {},
      autoprefixer: {},
    }
  },
  css: ['~/assets/css/main.css'],
  build: {
    transpile: ['jsonwebtoken']
  },
  auth: {
    baseURL: '/',
    provider: {
        type: 'local',
        endpoints: {
          getSession: { path: '/api/auth/user', method: 'get'},
          signIn: { path: '/api/auth/login', method: 'post' },
          signOut: { path: '/api/auth/logout', method: 'post' },
        },
        pages: {
          login: '/admin/login'
        },
        token: {
          signInResponseTokenPointer: '/token/accessToken'
        },
        sessionDataType: { id: 'string', name: 'string' }
    },
    session: {
      enableRefreshOnWindowFocus: true,
    },
    globalAppMiddleware: {
      isEnabled: false
    }
  }
})
