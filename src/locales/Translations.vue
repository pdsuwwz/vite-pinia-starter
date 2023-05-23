<template>
  <el-dropdown
    class="translations-box"
    popper-class="translations-box"
    :class="{
      'is-dark': dark
    }"
    trigger="hover"
    @command="handleChange"
  >
    <span class="icon-outer">
      <!-- Translations<el-icon class="el-icon--right">
        <ArrowDown />
      </el-icon> -->
      <LogoIcon
        :dark="dark"
      />
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="(localeItem, index) in localesList"
          :key="index"
          :command="localeItem"
          :disabled="currentLocale === localeItem.localeCode"
        >
          <span class="custom-dropdown-item">
            {{ localeItem.localeName }}
          </span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script>
import { computed, defineComponent, ref } from 'vue'
import { localesMapping } from '@/locales'
import { useUserAccountStore } from '@/modules/UserAccount/store'

import { useRoute, useRouter } from 'vue-router'

import LogoIcon from '@/locales/LogoIcon.vue'

export default defineComponent({
  name: 'TranslationsBox',
  components: {
    LogoIcon
  },
  props: {
    dark: {
      type: Boolean,
      default: false
    }
  },
  setup () {
    const route = useRoute()
    const router = useRouter()
    const userAccountStore = useUserAccountStore()
    const localesList = ref(localesMapping)
    const currentLocale = computed(() => userAccountStore.locale)

    const handleChange = (targetLocaleItem) => {
      setTimeout(() => {
        const { localeCode } = targetLocaleItem
        router.replace({
          params: {
            ...route.params,
            locale: localeCode
          }
        })
        userAccountStore.setLanguage({
          locale: localeCode
        })
      })
    }
    return {
      localesList,
      currentLocale,
      handleChange
    }
  }
})
</script>
<style lang="scss">
.translations-box {
  display: flex;
  align-items: center;
  color: #fff;
  outline: none;
  cursor: initial;
  user-select: none;

  &.is-dark {
    color: #495164;
  }

  .icon-outer {
    display: flex;
    align-items: center;
    outline: none;

    &:hover > * {
      color: $color-primary;
    }
  }

  .custom-dropdown-item {
    white-space: nowrap;
  }
}
</style>
