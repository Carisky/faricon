'use client'

import { Layout } from "antd";
import NavBar from "../NavBar/Navbar";
const { Header, Footer, Sider, Content } = Layout;

const headerStyle = {
    color: '#fff',
    height: 64,
    backgroundColor: '#2a465c',
};
  
const contentStyle = {
    paddingTop: "20px",
    textAlign: 'center',
    minHeight: "80vh",
    color: '#fff',
    backgroundColor: '#8d9ea5',
};
  
const siderStyle = {
    paddingTop: "20px",
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#316d92',
};
  
const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#2a465c',
};
  
const layoutStyle = {
    overflow: 'hidden',
    width: '100%',
    maxWidth: '100%',
};

export default function PageWrapper({ children }) {
    return (
        <Layout style={layoutStyle}>
            <Header style={headerStyle}>
                <NavBar/>
            </Header>
            <Layout>
                <Sider style={siderStyle}>Sider</Sider>
                <Content style={contentStyle}>{children}</Content>
            </Layout>
            <Footer style={footerStyle}>Footer</Footer>
        </Layout>
    );
}
