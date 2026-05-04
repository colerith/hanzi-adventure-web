import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GamesView from '../views/GamesView.vue'
import ScoreView from '../views/ScoreView.vue'
import AccountView from '../views/AccountView.vue'
import UserCenterView from '../views/UserCenterView.vue'
import AdminView from '../views/AdminView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/games', name: 'games', component: GamesView },
    { path: '/scores', name: 'scores', component: ScoreView },
    { path: '/account', name: 'account', component: AccountView },
    { path: '/user-center', name: 'user-center', component: UserCenterView },
    { path: '/admin', name: 'admin', component: AdminView },
  ],
})

export default router
