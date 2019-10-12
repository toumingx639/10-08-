import Msite from '../pages/Msite/Msite.vue'
import CategoryList from '../pages/Msite/CategoryList.vue'  // 首页的子路由

import Category from '../pages/Category/Category.vue'

import Identify from '../pages/Identify/Identify.vue'
import Select from '../pages/Identify/Select.vue' // 识物页面中的二级路由甄选家

import ShoppingCart from '../pages/ShoppingCart/ShoppingCart.vue'
import Personal from '../pages/Personal/Personal.vue'

import Login from '../pages/Login/Login.vue'
import Phone from '../pages/Login/Phone.vue'
import Email from '../pages/Login/Email.vue'

import Search from '../pages/Search/Search.vue'

export default [
  {
    path: '/msite',
    component: Msite,
    meta: {
      isShowFooter: true
    },
    children: [
      {
        path: '/msite/list',
        component: CategoryList,
        meta: {
          isShowFooter: true
        },
      }
    ]
  },

  {
    path: '/category',
    component: Category,
    meta: {
      isShowFooter: true
    }
  },

  {
    path: '/identify',
    component: Identify,
    meta: {
      isShowFooter: true
    },
    children: [
      {
        path: '/identify/select',
        component: Select,
      }
    ]
  },

  {
    path: '/shoppingCart',
    component: ShoppingCart,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/personal',
    component: Personal,
    meta: {
      isShowFooter: false
    }
  },

  {
    path: '/login',
    component: Login,
    children: [
      {
        path: 'email',
        component: Email
      },
      {
        path: '/login/phone',
        component: Phone
      }
    ]
  },
  
  {
    path: '/search',
    component: Search
  },

  {
    path: '/',
    redirect: '/msite'
  },
]