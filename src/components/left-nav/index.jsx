import React from "react";
import "./index.less";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import { PieChartOutlined, MailOutlined } from "@ant-design/icons";
function LeftNav() {
  const { SubMenu } = Menu;

  return (
    <div className="left-nav">
      <Link to="/" className="left-nav-header">
        <img src={logo} alt="logo" />
        <h1>后台系统</h1>
      </Link>
      <Menu
        // defaultSelectedKeys={["1"]}
        // defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="dark"
      >
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          首页
        </Menu.Item>
        <SubMenu key="sub1" icon={<MailOutlined />} title="商品">
          <Menu.Item key="5" icon={<PieChartOutlined />}>
            品类管理
          </Menu.Item>
          <Menu.Item key="6" icon={<PieChartOutlined />}>
            商品管理
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="2" icon={<PieChartOutlined />}>
          用户管理
        </Menu.Item>
        <Menu.Item key="3" icon={<PieChartOutlined />}>
          角色管理
        </Menu.Item>
        <Menu.Item key="4" icon={<PieChartOutlined />}>
          图形图表
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default LeftNav;
