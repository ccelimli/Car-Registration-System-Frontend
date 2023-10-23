import {Layout, theme, Typography, Divider, Row, Col, Flex, Form, Input, Button} from 'antd'
import {LockOutlined, UserOutlined} from '@ant-design/icons'
import styles from "./styles.module.css"
import {useDispatch} from "react-redux";
import {changePasswordUser} from "../../redux/userSlice.js";

const {  Content } = Layout
const {Title} = Typography

const ChangePasswordContent = () => {
    const [form] = Form.useForm()
    const dispatch = useDispatch()
    const {token: { colorBgContainer }} = theme.useToken()

    const onFinish = (values) => {
        const data = localStorage.getItem("isAuth")
        const parseData = data !== null ? JSON.parse(data) : null

        const change = {
            username: parseData.user,
            oldPassword: values.oldPassword,
            newPassword: values.newPassword
        }

        console.log(change)

        dispatch(changePasswordUser(change))
            .then((data) => {
                console.log(data)
                form.resetFields()
            })
            .catch((error) => {
                console.log(error)
            })
    }

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
                    <Row>
                        <Col span={24}>
                            <Flex vertical align={"center"} justify={"center"} style={{marginRight: 200, marginLeft: 200}}>
                                <Form
                                    form={form}
                                    name={"signUp"}
                                    onFinish={onFinish}
                                    labelCol={{span: 12}}
                                    wrapperCol={{span: 24}}
                                    size={"large"}
                                    colon={false}
                                    layout={"vertical"}
                                    autoComplete={"off"}
                                    className={styles.signUpForm}
                                >
                                    <Form.Item
                                        name={"oldPassword"}
                                        hasFeedback
                                        validateDebounce={1000}
                                        rules={[
                                        {
                                            required: true,
                                            message: 'Please input your oldPassword'
                                        }
                                    ]}
                                        >
                                        <Input
                                            prefix={<UserOutlined className={styles.inputPrefixIcon}/>}
                                            placeholder="Enter oldPassword"
                                        />
                                </Form.Item>
                                <Form.Item
                                    name={"newPassword"}
                                    hasFeedback
                                    validateDebounce={1000}
                                    rules={[
                                    {
                                        required: true,
                                        message: "Please input your newPassword"
                                    }
                                ]}
                                    >
                                    <Input.Password
                                        prefix={<LockOutlined className={styles.inputPrefixIcon}/>}
                                        placeholder={"Enter newPassword"}
                                    />
                            </Form.Item>
                            <Form.Item
                                name={"repeatNewPassword"}
                                dependencies={['newPassword']}
                                hasFeedback
                                validateDebounce={1000}
                                rules={[
                                {
                                    required: true,
                                    message: "Please input your repeat new password"
                                },
                                ({getFieldValue}) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('newPassword') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject("Passwords do not match!");
                                    }
                                })
                            ]}
                                >
                                <Input.Password
                                    prefix={<LockOutlined className={styles.inputPrefixIcon}/>}
                                    placeholder={"Enter repeat new password"}
                                />
                        </Form.Item>
                        <Form.Item>
                            <Flex justify={"center"} align={"center"}>
                                <Button
                                    type={"primary"}
                                    htmlType={"submit"}
                                    className={styles.signUpBtn}
                                >
                                    Change Password
                                </Button>
                            </Flex>
                        </Form.Item>
                    </Form>
                </Flex>
            </Col>
        </Row>
    <Divider/>
                </Col>
            </Row>
        </Content>
    )
}

export default ChangePasswordContent