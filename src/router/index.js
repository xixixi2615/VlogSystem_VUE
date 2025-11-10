import { createRouter,createWebHashHistory} from 'vue-router'

import Home from '../views/Home.vue'
import Vlog from '../views/Vlog.vue'
import Services from '../views/Services.vue'
import Contact from '../views/Contact.vue'
import About from '../views/About.vue'

//<RouterView />
//定义路由数据
const routes=[
    {
        path:'/',
        //主页面
        component:Home
        //页面的属性，即对应的Home.vue组件
    },
    {
        path:'/services',
        component:Services
    },
    {
        path:'/contact',
        component:Contact
    },
    {
        path:'/about',
        component:About
    },
    {
        path:'/vlog',
        component:Vlog
    }
]

//创建router实例(会返回router实例)
const router = createRouter({
    //路由数据
    routes,
    //路由匹配模式(Hash模式：不刷新直接更新当前路由，即页面内容)
    history:createWebHashHistory()
})

export default router