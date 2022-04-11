
import VueRouter from 'vue-router'
import About from '../pages/About'
import Home from '../pages/Home'
import Messages from '../pages/Message'
import News from '../pages/News'
import Detail from '../pages/Detail'
export default new VueRouter({
    routes:[
        {
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home,
            children: [
                {
                    path:'message',
                    component:Messages,
                    children:[
                        {
                            name:'detail',
                            path:'detail',//使用占位符声明接收params参数
                            component:Detail,
                            // props 的第一种写法 值为对象，该对象中的所有key-value都会作为props传递给组件
                            // props:{a:100,b:200}
                            
                            // props 的第二种写法 值为布尔值，如果为true，则会把该路由组件接收到的所有params参数作为props传递给组件
                            // props:true

                             // props 的第二种写法 值为函数
                            props($route){
                                return {
                                    title:$route.query.title,
                                    id:$route.query.id
                                }
                            }
                        }
                    ]
                },
                {
                    path:'news',
                    component:News
                }
            ]
        }
    ],
})