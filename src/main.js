import Vue from 'vue'
import App from './App.vue'
/*引入自定义路由*/
import router from './router'
/*引入elementUI组件*/
import elementUI from "element-ui";
/*Element 组件内部默认使用中文，若希望使用其他语言，则需要进行多语言设置*/
/*设置英文*/
import locale from "element-ui/lib/locale/lang/en";
/*引入elementUI样式*/
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(elementUI,{locale});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
