import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/homepage/HomeView'
import FilmDetail from '../views/homepage/FilmDetail.vue'
import FilmExpected from '../views/film-expected/FilmExpected.vue'
import FilmExpectedDetail from '../views/film-expected/FilmExpectedDetail.vue'
import PayTicketView from '../views/pay-ticket/PayTicketView'
import TicketManager from '../views/pay-ticket/TicketManager'
import CinemaBlog from '../views/cinema-blog/CinemaBlog'
import BlogDetail from '../views/cinema-blog/BlogDetail'
import EventView from  '../views/event/EventView'
import EventDetail from  '../views/event/EventDetail'
import HelpView from '../views/support/HelpView'
import Login from '../views/login/Login'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homeview',
    component: HomeView
  },
  {
    path: '/film-detail/:id',
    name: 'film-detail',
    component: FilmDetail
  },
  {
    path: '/film-expected',
    name: 'film-expected',
    component: FilmExpected
  },
  {
    path: '/film-expected-detail/:id',
    name: 'film-expected-detail',
    component: FilmExpectedDetail
  },
  {
    path: '/pay-ticket',
    name: 'pay-ticket',
    component: PayTicketView
  },
  {
    path: '/cinema-blog',
    name: 'cinema-blog',
    component: CinemaBlog
  },
  {
    path: '/blog-detail/:id',
    name: 'blog-detail',
    component: BlogDetail
  },
  {
    path: '/ticket-manager/',
    name: 'ticket-manager',
    component: TicketManager
  },
  {
    path: '/event/',
    name: 'event',
    component: EventView
  },
  {
    path: '/event/:id',
    name: 'event-detail',
    component: EventDetail
  },
  {
    path: '/help/',
    name: 'help',
    component: HelpView
  },
  {
    path: '/login/',
    name: 'login',
    component: Login
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router;
