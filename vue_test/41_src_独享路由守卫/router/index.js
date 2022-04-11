
import VueRouter from 'vue-router'
import About from '../pages/About'
import Home from '../pages/Home'
import Messages from '../pages/Message'
import News from '../pages/News'
import Detail from '../pages/Detail'
const router =  new VueRouter({
    routes:[
        {
            path:'/about',
            component:About,
            meta:{title:"关于"}
        },
        {
            path:'/home',
            component:Home,
            meta:{title:"主页"},
            children: [
                {
                    path:'message',
                    component:Messages,
                    meta:{title:"信息"},
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
                            },
                            meta:{title:"详情"}
                        }
                    ]
                },
                {
                    path:'news',
                    component:News,
                    meta:{title:"新闻"},
                    beforeEnter:(to,from,next)=>{
                        console.log('name:',from.meta.title);
                        if(from.meta.title === '信息'){
                            alert('不能从信息页面进入新闻页面')
                            next(false)
                        }
                        else{
                            next()
                        }
                    }
                }
            ]
        }
    ],
})
router.afterEach((to,from)=>{
    console.log('to:',to,'from',from)
    if(to.meta.title){
        document.title = to.meta.title
    }else{
        document.title = 'Nionbar'
    }
})
export default router