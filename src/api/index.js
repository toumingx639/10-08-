/* 
  包含n个接口请求函数的模块
*/
import ajax from './ajax.js'

export const reqHomeData = () => ajax("/mock/msite")
export const reqCategoryList = () => ajax("/mock/msite/list")

export const reqCategory = () => ajax("/mock/category")


// 网易提供的公开接口

// 搜索 搜索页面上的关键字
export const reqSearchData = () => ajax("/api/xhr/search/init.json")
// 获取 搜索页面输入关键字后得到的结果
export const reqSearchWord = keywordPrefix => ajax({
  url: "/api/xhr/search/searchAutoComplete.json",
  methods: "GET",
  params: {
    keywordPrefix
  }
})

//获取识物-导航
export const reqGetNav = () => ajax({
  url: "/api/topic/v1/find/getTabs.json",
  method:"GET"
})

//获取识物-content
export const reqGetContent = () => ajax('/api/topic/v1/find/recManual.json')