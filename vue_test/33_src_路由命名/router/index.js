
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
                            path:'detail',
                            component:Detail
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