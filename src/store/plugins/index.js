/**
 * Plugins for Pinia
 */

import { filterResponse } from '@/store/utils/mixin'

export const pluginPinia = ({ store }) => {
  store.filterResponse = filterResponse
}
