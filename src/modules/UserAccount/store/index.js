import { defineStore } from 'pinia'
import { sleep } from '@/utils/request'
import {
  getUserInfoData,
  login,
  logout,
  updateChangeLanguage
} from '@/modules/UserAccount/api'

export const useUserAccountStore = defineStore('UserAccount', {
  state: () => {
    return {
      locale: 'en',
      demoList: {},
      userInfo: {}
    }
  },
  getters: {
    // demoList: state => state.demoList
  },
  actions: {
    async GetModuleTestList (params) {
      // TODO: 模拟响应时间
      await sleep(1000)
      // TODO: 模拟 api
      // const result = await getDemoTestList(params)
      const result = {
        test: 'ok'
      }
      this.demoList = result
      return result
    },
    async updateChangeLanguage (params) {
      const result = await updateChangeLanguage(params)
      return this.filterResponse(result)
    },
    setLanguage (data) {
      this.locale = data.locale
    },
    async login (data) {
      await sleep(300)
      const res = await login(data)
      return this.filterResponse(res, null, () => {})
    },
    async logout () {
      const res = await logout()
      return this.filterResponse(res, null, () => {})
    },
    async getUserInfo () {
      const res = await getUserInfoData()
      await sleep(200)
      return this.filterResponse(res, ({ data }) => {
        this.userInfo = data
      })
    }
  }
})

