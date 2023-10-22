import {Layout, theme, Typography, Divider, Row, Col} from 'antd'

const {  Content } = Layout
const {Title} = Typography

const ChangePasswordContent = () => {
    const {token: { colorBgContainer }} = theme.useToken()

    return (
        <Content
            style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
                background: colorBgContainer
            }}
        >
            <Row>
                <Col span={24}>
                    <Title style={{marginTop: 0}} level={1}>
                        Change Password
                    </Title>
                </Col>
            </Row>
            <Divider/>
            <Row>
                <Col span={24}>
                    Change Password Content
                </Col>
            </Row>
        </Content>
    )
}

export default ChangePasswordContent