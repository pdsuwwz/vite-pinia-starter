/**
 * plugins all export
 */

import { filterResponse } from '@/store/utils/mixin'
import router from '@/router'

// 已废弃，未来需要替换为下方的 pluginPinia
export const mixinVuex = store => {
  store.filterResponse = filterResponse
  store.router = router
}

export const pluginPinia = ({ store }) => {
  store.filterResponse = filterResponse
  store.router = router
}

export default [
  mixinVuex
]
