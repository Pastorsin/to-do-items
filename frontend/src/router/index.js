import Folders from '@/pages/Folders.vue';
import Login from '@/pages/Login.vue';
import TaskEdit from '@/pages/TaskEdit.vue';
import Tasks from '@/pages/Tasks.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';

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
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const { isUserLoggedIn } = store.getters;

  if (to.name !== "Login" && !isUserLoggedIn) {
    next({ name: "Login" });
    return
  }

  if (to.name === "Login" && isUserLoggedIn) {
    next({ name: "Folders" });
    return
  }

  next()
})

export default router
