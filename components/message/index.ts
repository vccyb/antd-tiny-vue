import { getCurrentInstance } from 'vue'

// hooks
export function useMessage() {
  // 找到挂载的message hook
  const $message = getCurrentInstance()?.appContext.app.config.globalProperties.$message
  // console.log('=====useMessage=====')
  return $message
}
