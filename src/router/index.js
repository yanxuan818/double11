import Vue from 'vue'
import Router from 'vue-router'
const Index = () =>
    import ("@/views/index/Index.vue");
Vue.use(Router)
    
export default new Router({
    mode: "history",
    routes: [{
            path: '*',
            redirect: '/index',
        },
        {
            path: '/index',
            name: 'Index',
            component: Index
        },
    ]
})
