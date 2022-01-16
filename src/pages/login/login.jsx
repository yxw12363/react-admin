import React, { Component } from "react";
import "./login.less";
import logo from "./images/logo.png";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { reqLogin } from "../../api";
class Login extends Component {
  render() {
    var onFinish = (values) => {
      const { username, password } = values;
      if (!!username && !!password) {
        /*接口请求*/
        // reqLogin(username, password)
        //   .then((response) => {
        //     console.log("成功", response.data);
        //   })
        //   .catch((error) => {
        //     console.log("失败", error);
        //   });
        if (username === "admin" && password === "123456") {
          console.log("登录成功");
        }
      } else {
        console.log("校验失败");
      }
    };
    return (
      <div className="login">
        <header className="login-header">
          <img src={logo} alt="logo"></img>
          <h1>React项目：后台管理系统</h1>
        </header>
        <section className="login-content">
          <h2>用户登录</h2>

          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: "用户名必须输入 !",
                },
                {
                  min: 4,
                  message: "最小不能低于4位",
                },
                {
                  max: 12,
                  message: "最多不能超过12位",
                },
                {
                  pattern: /^[a-zA-Z0-9_]+$/,
                  message: "用户名必须由下划线~数字和字母组成",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="用户名"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: "密码必须输入 !",
                },
                {
                  min: 4,
                  message: "最小不能低于4位",
                },
                {
                  max: 12,
                  message: "最多不能超过12位",
                },
                {
                  pattern: /^[a-zA-Z0-9_]+$/,
                  message: "用户名必须由下划线~数字和字母组成",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="登录"
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                登录
              </Button>
            </Form.Item>
          </Form>
        </section>
      </div>
    );
  }
}

export default Login;
