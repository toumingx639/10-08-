/* 
包含n个用于间接更新状态数据的方法的对象
可以包含异步/逻辑操作代码
*/
import {
  reqHomeData,
  reqCategoryList,
  reqCategory,
  reqSearchData,
  reqSearchWord,
  reqGetNav,
  reqGetContent
} from '../api/index'

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
  async getHomeData ({commit}) {
    const result = await reqHomeData()
    if (result.code === 0) {
      const homeData = result.data
      commit(RECEIVE_HOMEDATA, {homeData})
    }
  },

  async getCategoryList ({commit}) {
    const result = await reqCategoryList()
    if (result.code === 0) {
      const categoryList = result.data
      commit(RECEIVE_CATEGORYLIST, {categoryList})
    }
  },

  async getCategory ({commit}) {
    const result = await reqCategory()
    if (result.code === 0) {
      const category = result.data
      commit(RECEIVE_CATEGORY, {category})
    }
  },

  async getSearchData ({commit}) {
    const result = await reqSearchData()
    if (result.code === '200') {
      const searchData = result.data
      commit(RECEIVE_SEARCHDATA, {searchData})
    }
  },

  async getSearchWord({
      commit
    }, keywordsPrefix) {
    const result = await reqSearchWord(keywordsPrefix)
    if (result.code === '200') {
      const searchWord = result.data 
      commit(RECEIVE_SEARCHWORD, {searchWord})
    }
  },

  async getRemmendNav ({commit}) {
    const result = await reqGetNav()
    if (result.code === '200') {
      const nav = result.data
      commit(RECEIVE_GET_NAV, {nav})
    }
  },

  async getRemmendContent ({commit}) {
    const result = await reqGetContent()
    if (result.code === '200') {
      const content = result.data
      commit(RECEIVE_GET_CONTENT, {content})
    }

  }
}