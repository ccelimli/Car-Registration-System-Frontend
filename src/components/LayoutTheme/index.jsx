import {useState} from 'react'
import {Layout, theme} from 'antd'
import Sidebar from "../../components/Sidebar"
import Header from "../../components/Header"

// eslint-disable-next-line react/prop-types
const LayoutTheme = ({children}) => {
    const [collapsed, setCollapsed] = useState(false)
    const {token: { colorBgContainer }} = theme.useToken()

    return (
        <Layout style={{width: "100vw", height: "100vh"}}>
            <Sidebar
                collapsed={collapsed}
            />
            <Layout>
                <Header
                    collapsed={collapsed}
                    setCollapsed={setCollapsed}
                    colorBgContainer={colorBgContainer}
                />
                {children}
            </Layout>
        </Layout>
    )
}

export default LayoutTheme