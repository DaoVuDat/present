import React from 'react';
import {Form, Input, Button, Col, Row} from 'antd';
import {Redirect, useHistory} from "react-router-dom";
import styles from "./Login.module.css"
import image from "../../assets/flat-space-background.jpg";
import dog from "../../assets/dog.svg";
import useAuth from "../../hooks/useAuth";

const Login = () => {

  const history = useHistory();
  const [isAuth, setAuth] = useAuth();

  const mainStyle = {
    backgroundImage: `url(${image})`,
  }

  const onFinish = (values) => {
    setAuth(values);
    history.push("/")
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


  if (isAuth) return <Redirect to="/" />
  else
    return (<div className={styles.main} style={mainStyle}>
      <div className={styles.card}>
        <div className={styles.imgWrapper}>
          <img src={dog} alt="logo"/>
        </div>

        <Form name="login"
              labelCol={8}
              wrapperCol={16}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}>
          <Form.Item
            className={styles.input}
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input placeholder="Username" size="medium"/>
          </Form.Item>

          <Form.Item
            className={styles.input}
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >

            <Input.Password placeholder="Password" size="medium"/>

          </Form.Item>


          <Form.Item wrapperCol={{span: 24}} noStyle={true}>
            <Row justify="end" align="middle">
              <Col>
                <Button type="primary" htmlType="submit">
                  Login
                </Button>
              </Col>
            </Row>
          </Form.Item>
        </Form>
      </div>
    </div>)


};

export default Login;
