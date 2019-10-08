import Msite from '../pages/Msite/Msite.vue'
import Category from '../pages/Category/Category.vue'
import Identify from '../pages/Identify/Identify.vue'
import ShoppingCart from '../pages/ShoppingCart/ShoppingCart.vue'
import Personal from '../pages/Personal/Personal.vue'


export default [
  {
    path: '/msite',
    component: Msite
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/identify',
    component: Identify
  },
  {
    path: '/shoppingCart',
    component: ShoppingCart
  },
  {
    path: '/personal',
    component: Personal
  },
  {
    path: '/',
    redirect: '/msite'
  },
]