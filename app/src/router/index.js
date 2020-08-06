import Vue from 'vue';
import VueRouter from 'vue-router';


const Home = () => import('@/views/Home');


// 执行 VueRouter 的 install
Vue.use(VueRouter);

// 创建一个具体的路由对象，该对象就是我们应用中需要使用到的路由相关配置
let router = new VueRouter({
    mode: 'history',    // hash \  history

    // 存放了 url 与 组件的映射关系
    routes: [
        // 每一个对象就是一组url与组件的对应
        {
            path: '/',
            name: 'home',
            component: Home
        }
    ]
});


export default router;