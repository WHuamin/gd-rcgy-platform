import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import './assets/css/element-variables.scss'

createApp(App)
  .use(store)
  .use(router)
  .use(ElementPlus)
  // .use(ElementPlus, { size: 'small', zIndex: 3000 }) // size 用于改变组件的默认尺寸，zIndex 设置弹框的初始 z-index（默认值：2000）。
  .mount('#app')
