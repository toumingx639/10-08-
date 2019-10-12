/*
使用mockjs定义mock接口模块，用于暴露mockj接口，返回数据
*/
import Mock from 'mockjs'
import homeData from './homeData.json'
import categoryList from './categoryList.json'  // 首页中推荐哪里子路由的数据
import category from './category.json' // 分类页面的数据

Mock.mock("/mock/msite", {
  code: 0,
  data: homeData
})
Mock.mock('/mock/msite/list', {
  code: 0,
  data: categoryList
})

Mock.mock('/mock/category', {
  code: 0,
  data: category
})