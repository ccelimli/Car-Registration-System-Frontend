import {Button, Col, Divider, Flex, Form, Input, Row} from 'antd';
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import styles from "./styles.module.css"
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {loginUser} from "../../redux/userSlice.js";

const LoginForm = () => {
    const [form] = Form.useForm()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onFinish = (values) => {
        dispatch(loginUser(values))
            .then((login) => {
                console.log(login)
                if (login.payload.success === true) {
                    navigate("/home")
                    form.resetFields()
                    localStorage.clear()
                    localStorage.setItem("isAuth", JSON.stringify({
                        isActive: "true",
                        userId: login.payload.data.id,
                        user: login.payload.data.username
                    }))
                }
            })
            .catch((error) => {
                console.error(error)
                localStorage.setItem("isAuth", JSON.stringify({isActive: "false", userId: 0}))
            })
    }

    return (
        <>
        <Divider/>
        <Row>
            <Col span={24}>
                <Flex vertical align={"center"} justify={"center"}>
                    <Form
                        form={form}
                        name={"signIn"}
                        onFinish={onFinish}
                        labelCol={{span: 12}}
                        wrapperCol={{span: 24}}
                        size={"large"}
                        colon={false}
                        layout={"vertical"}
                        autoComplete={"off"}
                        className={styles.signInForm}
                    >
                        <Form.Item
                            name={"username"}
                            hasFeedback
                            validateDebounce={1000}
                            rules={[
                            {
                                required: true,
                                message: 'Please input your username'
                            },
                            {
                                pattern: /^[a-zA-Z0-9]+$/,
                                message: "Username cannot contain space characters"
                            }
                        ]}
                            >
                            <Input
                                prefix={<UserOutlined className={styles.inputPrefixIcon}/>}
                                placeholder="Enter username"
                            />
                    </Form.Item>
                    <Form.Item
                        name={"password"}
                        hasFeedback
                        validateDebounce={1000}
                        rules={[
                        {
                            required: true,
                            message: "Please input your password"
                        }
                    ]}
                        >
                        <Input.Password
                            prefix={<LockOutlined className={styles.inputPrefixIcon}/>}
                            placeholder={"Enter password"}
                        />
                </Form.Item>
                <Form.Item>
                    <Flex justify={"center"} align={"center"}>
                        <Button
                            type={"primary"}
                            htmlType={"submit"}
                            className={styles.signInBtn}
                        >
                            Sign In
                        </Button>
                    </Flex>
                </Form.Item>
            </Form>
        </Flex>
        </Col>
</Row>
    <Divider/>
</>
)
}

export default LoginForm;