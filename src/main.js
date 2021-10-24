import Vue from 'vue'
import App from './App.vue'
/*引入自定义路由*/
import router from './router'
//import elementPlus from 'element-plus'
//import zhCn from 'element-plus/es/locale/lang/zh-cn'
/*引入elementUI样式*/
//import 'element-ui/lib/theme-chalk/index.css';
//import 'element-plus/theme-chalk/index.css'
import store from "@/store";
import VueCompositionApi from '@vue/composition-api';
/*引入elementUI组件*/
import elementUI from "element-ui";
/*Element 组件内部默认使用中文，若希望使用其他语言，则需要进行多语言设置*/
/*设置英文*/
import locale from "element-ui/lib/locale/lang/en";
/*引入elementUI样式*/
import 'element-ui/lib/theme-chalk/index.css';
/*矢量图库引入*/
import './icons'

Vue.config.productionTip = false
/*Vue.use(elementPlus,{
  locale: zhCn
});*/
Vue.use(elementUI,{locale});


new Vue({
  router,
  store,
  VueCompositionApi,
  render: h => h(App),
}).$mount('#app')
