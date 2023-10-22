import {Card, Col, Flex, Row, Space, Typography} from 'antd'
import {Link} from "react-router-dom"
import styles from "./styles.module.css"
import RegisterForm from "../../components/RegisterForm"

const Register = () => {
    const {Text} = Typography

    return (
        <Space direction={"vertical"} className={styles.signUpArea}>
            <Card>
                <Row>
                    <Col span={24}>
                        <Flex vertical align={"center"} justify={"center"}>
                            <Text className={styles.signUpHeader}>CELIMLI Cars</Text>
                            <Text strong={true}>Sign Up</Text>
                        </Flex>
                    </Col>
                </Row>
                <RegisterForm/>
                <Row>
                    <Col span={24}>
                        <Flex vertical align={"center"} justify={"center"}>
                            <Link to={"/"}>
                                <Text className={styles.signInLink}>
                                    Have an account? Sign In
                                </Text>
                            </Link>
                        </Flex>
                    </Col>
                </Row>
            </Card>
        </Space>
    )
}

export default Register