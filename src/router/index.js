import Vue from 'vue';
import VueRouter from 'vue-router'
import routes from './routes'
import { setTitle } from '@/utils'
if (!window.VueRouter) {
    // 没有使用传统的方式引入VueRouter
    Vue.use(VueRouter);
}

const router = new VueRouter({
    routes,
    mode: "history"
})

router.afterEach((to) => {
    if (to.meta.title) {
        setTitle.setRouteTitle(to.meta.title)
    }
})
export default router
