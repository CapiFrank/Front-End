import { createRouter, createWebHistory } from "vue-router"
import WelcomePage from "./pages/WelcomePage.vue"
import UserList from "./pages/UserList.vue"

const routes = [
  {
    name: 'welcome',
    path: '/welcome',
    component: WelcomePage
  },
  {
    name: 'userl',
    path: '/',
    component: UserList
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes: routes
})
export default router