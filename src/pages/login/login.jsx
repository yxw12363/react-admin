import React from "react";
import "./login.less";
import logo from "../../assets/images/logo.png";
import { Form, Input, Button, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
// import { reqLogin } from "../../api";
function Login() {
  var onFinish = async (values) => {
    const { username, password } = values;
    if (!!username && !!password) {
      /*接口请求*/
      // const result = await reqLogin(username, password);
      // if (result.xx ===0) {
      //   console.log("成功");
      // message.success('登录成功');
      // } else {
      // message.error(result.msg)
      //   console.log(result.msg, "失败");
      // }
      if (username === "admin" && password === "123456") {
        message.success("登录成功");
        window.location.href = "/admin";
      } else {
        message.error("用户名和密码错误");
      }
    } else {
      message.error("用户名和密码错误");
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

export default Login;
