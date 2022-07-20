import React, { useState,useContext } from 'react'
import { UiContext } from '../context/UIContext';
import Login from './login/Login';
import AddTicket from './addTicket/AddTicket';
import Cola from './cola/Cola';
import Desktop from './desktop/Desktop';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
;
const {Sider, Content} = Layout;

const RouterPage = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {ocultarMenu} = useContext(UiContext)
  return (
    <Router>
        <Layout style={{height:'100vh'}}>
            <Sider collapsedWidth={"0"} breakpoint="md" hidden={ocultarMenu}>
                <div className="logo" />
                <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={[
                    {
                    key: '1',
                    icon: <UserOutlined />,
                    label: <Link to="/ingresar"> Ingresar</Link>,
                    },
                    {
                    key: '2',
                    icon: <VideoCameraOutlined />,
                    label: <Link to="/cola">Cola</Link>,
                    },
                    {
                    key: '3',
                    icon: <UploadOutlined />,
                    label: <Link to="/crearTicket">Crear Ticket</Link>,
                    },
                ]}
                />
            </Sider>
            <Layout className="site-layout">
                <Content
                className="site-layout-background"
                style={{
                    margin: '24px 16px',
                    padding: 24,
                    minHeight: 280,
                }}
                >   
                    <Routes>
                        <Route path="/ingresar" element={<Login/>}/>
                        <Route path="/cola" element={<Cola/>}/>
                        <Route path="/crearTicket" element={<AddTicket/>}/>
                        <Route path="/desktop" element={<Desktop/>}/>
                        <Route
                            path="*"
                            element={
                                <main style={{ padding: "1rem" }}>
                                <p>There's nothing here!</p>
                                </main>
                            }
                        />
                    </Routes>
                </Content>
            </Layout>
        </Layout>
    </Router>
  )
}

export default RouterPage