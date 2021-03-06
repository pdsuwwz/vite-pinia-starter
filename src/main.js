import { createApp } from 'vue'

import router from '@/router'
import '@/router/permission'
import { setupStore } from '@/store'

import App from '@/App.vue'

import ElementPlus from 'element-plus'
import Fonts from '@/assets/fonts'
import GlobalComponents from '@/components'
import Mixin from '@/mixins'
import Widgets from '@/widgets'

const app = createApp(App)

app
  .use(router)

setupStore(app)

app
  .use(ElementPlus)
  .use(GlobalComponents)
  .use(Widgets)
  .use(Fonts)
  .mixin(Mixin)
  .mount('#app')

export default app
