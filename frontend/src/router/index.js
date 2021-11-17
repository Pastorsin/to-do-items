import Folders from '@/pages/Folders.vue';
import TaskEdit from '@/pages/TaskEdit.vue';
import Tasks from '@/pages/Tasks.vue';
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Folders',
        component: Folders
    },
    {
        path: '/folder/:id',
        name: 'Tasks',
        component: Tasks
    },
    {
        path: '/task/:id/edit',
        name: 'TaskEdit',
        component: TaskEdit
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})


export default router
