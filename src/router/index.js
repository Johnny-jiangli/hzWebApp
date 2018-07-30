import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home'
import DeviceManagement from '../views/DeviceManagement'
import WarningMessage from '../views/WarningMessage'
import SystemManagement from '../views/SystemManagement'
import Test from '../components/test'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/devicemanagement',
      name:'device-management',
      component:DeviceManagement
    },
    {
      path:'/warningmessage',
      name:'warning-message',
      component:WarningMessage
    },
    {
      path:'/systemmanagement',
      name:'system-management',
      component:SystemManagement
    },
    {
      path:'/test',
      name:'test',
      component:Test
    }
  ]
})
