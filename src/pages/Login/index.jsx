import {Card, Col, Flex, Row, Space, Typography} from 'antd';
import {Link} from "react-router-dom";
import styles from "./styles.module.css"
import LoginForm from "../../components/LoginForm";

const Login = () => {
    const {Text} = Typography

    return (
        <Space direction={"vertical"} className={styles.signInArea}>
            <Card>
                <Row>
                    <Col span={24}>
                        <Flex vertical align={"center"} justify={"center"}>
                            <Text className={styles.signInHeader}>CELIMLI Cars</Text>
                            <Text strong={true}>Sign In</Text>
                        </Flex>
                    </Col>
                </Row>
                <LoginForm/>
                <Row>
                    <Col span={24}>
                        <Flex vertical align={"center"} justify={"center"}>
                            <Link to={"/register"}>
                                <Text className={styles.signUpLink}>
                                    No account yet? Sign Up
                                </Text>
                            </Link>
                        </Flex>
                    </Col>
                </Row>
            </Card>
        </Space>
    )
}

export default Login