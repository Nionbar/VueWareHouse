import Vue from 'vue'
import App from './App.vue'
// 关闭生成提示
Vue.config.productionTip = false

//引入所有
// // 引入ElementUI全部组件
// import ElementUI from 'element-ui';
// // 引入ElementUI全部样式
// import 'element-ui/lib/theme-chalk/index.css'

// // 使用ElementUI全部组件
// Vue.use(ElementUI);

//按需引入
import { Button, Row } from 'element-ui';

Vue.component('nbr-button', Button);
Vue.component('nbr-row', Row);

new Vue({
    el:'#app',
    render:h=>h(App)
})