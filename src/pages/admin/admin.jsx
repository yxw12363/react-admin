import React from "react";
import { Layout } from "antd";
import LeftNav from "../../components/left-nav";
import Header from "../../components/header";

function Admin() {
  const { Footer, Sider, Content } = Layout;
  return (
    <Layout style={{ height: "100%" }}>
      <Sider>
        <LeftNav />
      </Sider>
      <Layout>
        <Header></Header>
        <Content style={{ backgroundColor: "#fff" }}>Content</Content>
        <Footer style={{ textAlign: "center", color: "#cccccc" }}>
          推荐使用谷歌浏览器，可以获得更加页面操作体验
        </Footer>
      </Layout>
    </Layout>
  );
}

export default Admin;
