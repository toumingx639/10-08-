/* 
包含n个用于直接更新状态数据的方法的对象
*/
import {
  RECEIVE_HOMEDATA,
  RECEIVE_CATEGORYLIST,
  RECEIVE_CATEGORY,
  RECEIVE_SEARCHDATA,
  RECEIVE_SEARCHWORD,
  RECEIVE_GET_NAV,
  RECEIVE_GET_CONTENT
} from './mutations-types'

export default {
  [RECEIVE_HOMEDATA] (state, {homeData}) {
    state.homeData = homeData
  },

  [RECEIVE_CATEGORYLIST] (state, {categoryList}) {
    state.categoryList = categoryList
  },

  [RECEIVE_CATEGORY] (state, {category}) {
    state.category = category
  },

  [RECEIVE_SEARCHDATA] (state, {searchData}) {
    state.searchData = searchData
  },

  [RECEIVE_SEARCHWORD] (state, {searchWord}) {
    state.searchWord = searchWord
  },

  [RECEIVE_GET_NAV] (state, {nav}) {
    state.nav = nav
  },

  [RECEIVE_GET_CONTENT] (state, {content}) {
    state.content = content
  }
}