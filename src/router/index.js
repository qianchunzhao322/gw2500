import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import People from '../views/People.vue'
import Online from '../views/Online.vue'
import Us from '../views/Us.vue'
import New from '../views/New.vue'
import Project from '../views/Project.vue'
import companyProfile from '../views/about/companyProfile.vue'
import corporateCulture from '../views/about/corporateCulture.vue'
import Honer from '../views/about/Honer.vue'
import Leader from '../views/about/Leader.vue'
import Concept from '../views/people/Concept.vue'
import Position from '../views/people/Position.vue'
import Message from '../views/online/Message.vue'
import Connect from '../views/us/Connect.vue'
import Inner from '../views/new/Inner.vue'
import Outer from '../views/new/Outer.vue'
import newInfo from '../views/new/newInfo.vue'
import Projects from '../views/project/Projects.vue'
import Info from '../views/project/Info.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    children: [{
      path: '/about',
      name: 'companyProfile',
      component: companyProfile
    }, {
      path: '/about/corporateCulture',
      name: 'corporateCulture',
      component: corporateCulture
    }, {
      path: '/about/Honer',
      name: 'Honer',
      component: Honer
    }, {
      path: '/about/Leader',
      name: 'Leader',
      component: Leader
    }]
  },
  {
    path: '/people',
    name: 'People',
    component: People,
    children: [{
      path: '/people',
      name: 'Position',
      component: Position
    }, {
      path: '/people/position',
      name: 'Concept',
      component: Concept
    }]
  },
  {
    path: '/online',
    name: 'Online',
    component: Online,
    children: [{
      path: '/online',
      name: 'Message',
      component: Message
    }]
  },
  {
    path: '/us',
    name: 'Us',
    component: Us,
    children: [{
      path: '/us',
      name: 'Connect',
      component: Connect
    }]
  },
  {
    path: '/new',
    name: 'New',
    component: New,
    children: [{
      path: '/new',
      name: 'Inner',
      component: Inner
    }, {
      path: '/new/outer',
      name: 'Outer',
      component: Outer
    }, {
      path: '/new/newInfo',
      name: 'newInfo',
      component: newInfo
    }]
  },
  {
    path: '/project',
    name: 'Project',
    component: Project,
    children: [{
      path: '/project',
      name: 'Projects',
      component: Projects
    }, {
      path: '/project/info',
      name: 'Info',
      component: Info
    }]
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

export default router
