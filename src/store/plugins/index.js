/**
 * Plugins for Pinia
 */

import { filterResponse } from '@/store/utils/mixin'
import router from '@/router'

export const pluginPinia = ({ store }) => {
  store.filterResponse = filterResponse
  store.router = router
}
