import { createRouter, createWebHistory } from "vue-router"
import WelcomePage from "./pages/WelcomePage.vue"
import UserList from "./pages/UserList.vue"
import TaskList from "./pages/TaskList.vue"
import TaskCategory from "./pages/TaskCategory.vue"
import EditUser from "./pages/EditUser.vue"
import Register from "./pages/Register.vue"
import AgregarPage from "./pages/AgregarPage.vue"
import PagesList from "./pages/PagesList.vue"
import Login from "./pages/Login.vue"

const routes = [
  {
    name: 'welcome',
    path: '/welcome',
    component: WelcomePage
  },
  {
    name: 'task',
    path: '/task',
    component: TaskList
  },
  {
    name: 'userl',
    path: '/userl',
    component: UserList
  },
  {
    name: 'category',
    path: '/cat/:id',
    component: TaskCategory
  },
  {
    name: 'register',
    path: '/register',
    meta: { Layout: 'blank' },
    component: Register
  }
  ,
  {
    name: 'edituser',
    path: '/edituser/:id',
    component: EditUser
  },
  {
    name: 'AgregarPaginas',
    path: '/AgregarPaginas',
    component: AgregarPage
    
  },
  {name: 'PagesList',
  path: '/PagesList',
  component: PagesList
  },
  {name: 'Login',
  path: '/',
  meta: { Layout: 'blank' },
  component: Login
  },
  
]
const router = createRouter({
  history: createWebHistory(),
  routes: routes
})
export default router