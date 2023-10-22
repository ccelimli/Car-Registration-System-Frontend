import {useEffect, useState} from "react";
import {Divider, Flex, Layout, Menu, Typography} from "antd";
import {CarFilled, HomeFilled, LockFilled} from "@ant-design/icons";
import {Link, useLocation} from "react-router-dom"

const {Sider} = Layout
const {Text} = Typography

// eslint-disable-next-line react/prop-types
const Sidebar = ({collapsed}) => {
    const location = useLocation();
    const [selectedKeys, setSelectedKeys] = useState([location.pathname]);

    useEffect(() => {
        setSelectedKeys([location.pathname])
    }, [location])

    return (
        <Sider theme={"light"} trigger={null} collapsible collapsed={collapsed}>
            <Flex vertical align={"center"} justify={"center"} style={{ height: "10%", width: "100%"}}>
                <CarFilled />
                <Text strong={true}>
                    CELİMLİ
                </Text>
            </Flex>
            <Divider
                style={{
                    marginBottom: 10,
                    marginTop: 0
                }}
            />
            <Menu
                theme="light"
                mode="inline"
                selectedKeys={selectedKeys}
            >
                <Menu.Item key="/home" icon={<HomeFilled />}>
                    <Link to="/home">Home</Link>
                </Menu.Item>
                <Menu.Item key="/changePassword" icon={<LockFilled />}>
                    <Link to="/changePassword">Change Password</Link>
                </Menu.Item>
            </Menu>
        </Sider>
    )
}

export default Sidebar