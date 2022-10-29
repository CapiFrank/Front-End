import { createRouter, createWebHistory } from "vue-router"
import WelcomePage from "./pages/WelcomePage.vue"
import UserList from "./pages/UserList.vue"
import TaskList from "./pages/TaskList.vue"
import TaskCategory from "./pages/TaskCategory.vue"

const routes = [
  {
    name: 'welcome',
    path: '/welcome',
    component: WelcomePage
  },
  {
    name: 'task',
    path: '/tasks',
    component: TaskList
  },
  {
    name: 'userl',
    path: '/',
    component: UserList
  },
  {
    name: 'category',
    path: '/cat/:id',
    component: TaskCategory
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes: routes
})
export default router