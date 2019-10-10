/*
使用mockjs定义mock接口模块，用于暴露mockj接口，返回数据
*/
import Mock from 'mockjs'
import homeData from './homeData.json'

Mock.mock("/msite", {data: homeData})