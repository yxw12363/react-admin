/**
 *能发送异步ajax请求的函数模块
 * 封装axios库
 * 函数的返回值是promise对象
 * 统一处理请求异常
 **/
import axios from "axios";
import { message } from "antd";
export default function ajax(url, data = {}, type = "GET") {
  return new Promise((resolve, reject) => {
    let promise = new Promise();
    //执行异步ajax请求
    if (type === "GET") {
      promise = axios.get(url, {
        params: data,
      });
    } else {
      promise = axios.post(url, data);
    }
    //成功，调用resolve(value)
    promise
      .then((response) => {
        console.log(response);
        resolve(response);
      })
      .catch((error) => {
        console.log(error);
        message.error("请求出错了:" + error.message);
      });

    //失败,调用reject(reason),不显示而是提示异常信息
  });
}
