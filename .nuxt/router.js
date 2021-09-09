import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3a8c1aae = () => interopDefault(import('..\\pages\\books\\adventure.vue' /* webpackChunkName: "pages/books/adventure" */))
const _ed68212a = () => interopDefault(import('..\\pages\\books\\classic.vue' /* webpackChunkName: "pages/books/classic" */))
const _f868b8d2 = () => interopDefault(import('..\\pages\\phones\\android.vue' /* webpackChunkName: "pages/phones/android" */))
const _95c83aa6 = () => interopDefault(import('..\\pages\\phones\\iphone.vue' /* webpackChunkName: "pages/phones/iphone" */))
const _87fb0242 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _6dffafbe = () => interopDefault(import('..\\pages\\_category\\_subcategory\\_idProduct.vue' /* webpackChunkName: "pages/_category/_subcategory/_idProduct" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/books/adventure",
    component: _3a8c1aae,
    name: "books-adventure"
  }, {
    path: "/books/classic",
    component: _ed68212a,
    name: "books-classic"
  }, {
    path: "/phones/android",
    component: _f868b8d2,
    name: "phones-android"
  }, {
    path: "/phones/iphone",
    component: _95c83aa6,
    name: "phones-iphone"
  }, {
    path: "/",
    component: _87fb0242,
    name: "index"
  }, {
    path: "/:category/:subcategory?/:idProduct?",
    component: _6dffafbe,
    name: "category-subcategory-idProduct"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
