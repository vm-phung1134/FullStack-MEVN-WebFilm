import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/homepage/HomePage'
import Login from '../views/login/Login'
import FilmManager from '../views/film-manager/FilmManager'
import AddFilm from '../views/film-manager/AddFilm'
import AddFilmEx from '../views/film-manager/AddFilmEx'
import EditFilm from '../views/film-manager/EditFilm'
import EditFilmEx from '../views/film-manager/EditFilmEx'
import AddBlog from '../views/blog-manager/AddBlog'
import EditBlog from '../views/blog-manager/EditBlog'
import BlogManager from '../views/blog-manager/BlogManager'
import EventManager from '../views/event-manager/EventManager'
import AddEvent from '../views/event-manager/AddEvent'
import EditEvent from '../views/event-manager/EditEvent'
Vue.use(VueRouter)

const routes = [
  {
    path: '/homepage',
    name: 'homepage', // trang chu
    component: HomePage
  },
  {
    path: '/login',
    name: 'login', // dang nhap
    component: Login
  },
  {
    path: '/film-manager',
    name: 'film-manager', // quan ly phim
    component: FilmManager
  },
  {
    path: '/film-manager/add-film', // them moi bo phim dang chieu
    name: 'add-film',
    component: AddFilm
  },
  {
    path: '/film-manager/add-film-ex', // them moi một bộ phim sap chieu
    name: 'add-film-ex',
    component: AddFilmEx
  },
  {
    path: '/film-manager/edit-film/:id', // chinh sua phim dang chieu
    name: 'edit-film', 
    component: EditFilm
  },
  {
    path: '/film-manager/edit-film-ex/:id', // chinh sua phim sap chieu
    name: 'edit-film-ex', 
    component: EditFilmEx
  },
  {
    path: '/blog-manager', // quan ly blog
    name: 'blog-manager',
    component: BlogManager
  },
  {
    path: '/blog-manager/add-blog', // them blog moi
    name: 'add-blog', 
    component: AddBlog
  },
  {
    path: '/blog-manager/edit-blog/:id', // chinh sua phim dang chieu
    name: 'edit-blog', 
    component: EditBlog
  },
  {
    path: '/event-manager', // quan ly su kien
    name: 'event-manager',
    component: EventManager
  },
  {
    path: '/event-manager/add-event', // them su kien
    name: 'add-event',
    component: AddEvent
  },
  {
    path: '/event-manager/edit-event/:id', // chinh sua su kien
    name: 'edit-event',
    component: EditEvent
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router;
