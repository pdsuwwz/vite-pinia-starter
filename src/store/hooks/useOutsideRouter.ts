import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'

export const useOutsideRouter = defineStore('outside-router', () => {
  const router = useRouter()

  return {
    router
  }
})
