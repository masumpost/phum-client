// import React from 'react';

import { Layout, } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

// import { adminSidebarItems } from "../../routes/admin.routes";
const { Header, Content, Footer } = Layout;
// import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
// import { createElement } from "react";


// const items: MenuProps["items"] = [
//     {
//         key: "Dashboard",
//         label: <NavLink to="/admin/dashboard">Dashborad</NavLink>,
//     },
//     {
//         key: "User-managment",
//         label: "User Management",
//         children: [
//             {
//                 key: "create-admin",
//                 label: <NavLink to="/admin/create-admin">Create Admin</NavLink>
//             },
//             {
//                 key: "create-faculty",
//                 label: <NavLink to="/admin/create-faculty">Create Faculty</NavLink>
//             },
//             {
//                 key: "create-student",
//                 label: <NavLink to="/admin/create-student">Create Student</NavLink>
//             },
//         ]
//     },

// ]

const MainLayout = () => {
    return (
        <>
            <Layout style={{ height: "100vh" }}>

                <Layout>
                    <Sidebar></Sidebar>
                    <Header style={{ padding: 0 }} />
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div
                            style={{
                                padding: 24,
                                minHeight: 360,
                            }}
                        >
                            <Outlet></Outlet>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        © Copyright {new Date().getFullYear()} Created by Masum
                    </Footer>
                </Layout>
            </Layout>
        </>
    );
};

export default MainLayout;