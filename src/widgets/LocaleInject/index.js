import { useLanguage } from '@/hooks/useLanguage'
import { useLocale } from 'element-plus'

export default {
  install (app) {
    app.config.globalProperties._t = function (str) {
      const { currentLocaleLang } = useLanguage()
      const { t } = useLocale(currentLocaleLang)
      return t(str)
    }
  }
}
