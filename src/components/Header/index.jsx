import {Button, Layout} from "antd";
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";

// eslint-disable-next-line react/prop-types
const Header = ({collapsed, setCollapsed, colorBgContainer}) => {
    const {Header} = Layout

    return (
        <Header style={{padding: 0, background: colorBgContainer}}>
            <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                    fontSize: '16px',
                    width: 64,
                    height: 64,
                }}
            />
        </Header>
    )
}

export default Header