/*
能根据接口文档定义接口请求
包含应用中所有接口请求函数的模块
每个函数的返回值都是promise
*/
import ajax from "./ajax";

// 即使加到路径前面也会有问题，是因为在3000的端口号上访问5000导致的 Access-Control-Allow-Origin
// 三种可能性：1.协议名http https  2.端口号  3.主机名
//解决方式  1.jsonp(针对get)  2.cors(很少用)  3.代理(常用)
const BASE = "http://localhost:5000";
//登录
// export function reqLogin(username,password){
//     return ajax('/login',{username,password},'POST')
// }
// 不加大括号可以不写return
export const reqLogin = (username, password) => {
  return ajax("/login", { username, password }, "POST");
};

//添加用户
export const reqAddUser = (user) => {
  return ajax("/manager/user/add", user, "POST");
};
