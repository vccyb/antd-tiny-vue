import { type App, createApp } from 'vue'
import Message from './message.vue'
// hooks
export function useMessage() {
  // 返回一个
  return $message
}

// function generateInstance(options) {

// }
type MessageQueue = App[]
const instances: MessageQueue = [] //

function $message(options: any) {
  const container = document.createElement('div')
  const app = createApp(Message, {
    ...options,
  }).mount(container)
  instances.push(app as any)
  document.body.appendChild(container.firstElementChild!)
}

// 默认注册上
export default {
  install() {
    // eslint-disable-next-line no-console
    // console.log('挂载上啦', app)
  },
}
