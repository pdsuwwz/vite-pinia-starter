import { computed } from 'vue'
import { useUserAccountStore } from '@/modules/UserAccount/store'

import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'

import selfEn from '@/locales/lang/en'
import selfZhHans from '@/locales/lang/zh-hans'

export const useLanguage = () => {
  const store = useUserAccountStore()

  const currentLocaleLang = computed(() => {
    let locale = null

    switch (store.locale) {
      case 'zh-hans':
        locale = {
          ...zhCn,
          ...selfZhHans
        }
        break
      case 'en':
        locale = {
          ...en,
          ...selfEn
        }
        break
    }
    return locale
  })

  return {
    currentLocaleLang
  }
}
