/*
 封装axios
*/
import axios from 'axios'
import qs from 'qs'

const instance = axios.create({
  timeout: 10000,
})

// 添加请求拦截器, 处理Post请求参数(从对象转换为urlencoding)
instance.interceptors.request.use((config) => {

  if (config.method.toUpperCase === 'POST' && config.data instanceof Object) {
    config.data = qs.stringify(config.data)
  }

  return config
})

// 添加响应拦截器
instance.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    alert(error.message)
    return new Promise(() => {})  // 不处理的话是会进入成功的回调函数
  }

)

export default instance