import Vue from 'vue'
import App from './App.vue'

//引入路由
import VueRouter from 'vue-router'

//引入路由配置文件
import router from './router'
// 关闭生成提示
Vue.config.productionTip = false

Vue.use(VueRouter)

new Vue({
    el:'#app',
    render:h=>h(App),
    router:router
})