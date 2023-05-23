import { getCurrentInstance } from 'vue'
export default function useCurrentInstance () {
  const { proxy } = getCurrentInstance()

  return {
    proxy
  }
}
