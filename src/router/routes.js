import Msite from '../pages/Msite/Msite.vue'
import Category from '../pages/Category/Category.vue'
import Identify from '../pages/Identify/Identify.vue'
import ShoppingCart from '../pages/ShoppingCart/ShoppingCart.vue'
import Personal from '../pages/Personal/Personal.vue'
import Login from '../pages/Login/Login.vue'
import Search from '../pages/Search/Search.vue'
import Email from '../pages/Login/Email.vue'
import Phone from '../pages/Login/Phone.vue'


export default [
  {
    path: '/msite',
    component: Msite,
    meta: {
      isShowFooter: true
    }
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
    }
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
      isShowFooter: true
    }
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/login/email',
    component: Email
  },
  {
    path: '/login/phone',
    component: Phone
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