import VueRouter from "vue-router";
import Main from "./views/Main";
import Resume from "./views/Resume"

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/resume',
        component: Resume
    },
    {
        path: '*',
        redirect: '/'
    },
]

export default new VueRouter(({
    mode: 'history',
    routes
}))