import React from "react";
import ReactDOM from "react-dom";
import styles from "./login.less";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import { editorAxiosService } from "../../services/axios.service";
// import classnames from "classnames";
const FormItem = Form.Item;

class Login extends React.Component {
  componentDidMount() {
    console.log("did");
  }
  componentDidUpdate() {
    console.log("update");
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        const result = await editorAxiosService.post("api/auth/signIn",values);
        console.log(result);
        
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return <div className={styles.loginPage}>
        <div className={styles.loginForm}>
          <section>
            <div className={styles.logoWrap}>
              <img className={styles.logo} src="imgs/logo/logo.png" />
            </div>
            <div className={styles.logoTitle}>酱辛后台系统</div>
          </section>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              {getFieldDecorator("user_name", {
                rules: [{ required: true, message: "请输入用户名!" }]
              })(<Input prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />} placeholder="用户名" />)}
            </FormItem>
            <FormItem>
              {getFieldDecorator("user_pwd", {
                rules: [{ required: true, message: "请输入密码!" }]
              })(<Input prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />} type="password" placeholder="密码" />)}
            </FormItem>
            <FormItem>
              {getFieldDecorator("remember", {
                valuePropName: "checked",
                initialValue: true
              })(<Checkbox>记住我</Checkbox>)}
              <a className="login-form-forgot" href="">
                忘记密码
              </a>
              <Button type="primary" htmlType="submit" className={styles.loginBtn}>
                登陆
              </Button>
              <p>
                <a href="">注册!</a>
              </p>
            </FormItem>
          </Form>
        </div>
      </div>;
  }
}

const WrappedNormalLoginForm = Form.create()(Login);
export default WrappedNormalLoginForm;
