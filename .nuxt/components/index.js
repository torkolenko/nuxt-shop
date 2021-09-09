export { default as Categories } from '../..\\components\\Categories.vue'
export { default as CategoryItem } from '../..\\components\\CategoryItem.vue'
export { default as GoodItem } from '../..\\components\\GoodItem.vue'
export { default as Goods } from '../..\\components\\Goods.vue'
export { default as Header } from '../..\\components\\Header.vue'
export { default as ShowGood } from '../..\\components\\ShowGood.vue'
export { default as SubCategories } from '../..\\components\\SubCategories.vue'
export { default as SubCategoryItem } from '../..\\components\\SubCategoryItem.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
