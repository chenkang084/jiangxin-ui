import React from "react";
import ReactDOM from "react-dom";
import styles from "./login.less";
import { Form, Icon, Input, Button, Checkbox, Alert, Spin } from "antd";
import { editorAxiosService } from "../../services/axios.service";
// import classnames from "classnames";
const FormItem = Form.Item;
const antIcon = <Icon type="loading" style={{ fontSize: 44 }} spin />;

class Login extends React.Component {
  state = {
    loginError: false,
    loginErrorMsg: "",
    loginLoading: false,
    isLogin: true
  };

  componentDidMount() {
    console.log("did");
    this.checkLogin();
  }
  componentDidUpdate() {
    console.log("update");
  }

  checkLogin = async () => {
    try {
      const result = await editorAxiosService.get("api/auth/userInfo");

      if (result && result.data && result.data.status === "ok") {
        this.props.goHomePage();
      }
    } catch (error) {
      console.log(error.response);
      if (error.response && error.response.status === 401) {
        this.setState({ isLogin: false });
      }
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        this.setState({ loginLoading: true });
        try {
          const result = await editorAxiosService.post(
            "api/auth/signIn",
            values
          );
          if (result && result.data && result.data.type === "success") {
            console.log("success");
            this.setState({
              loginError: false,
              loginErrorMsg: ""
            });
            window.location.href = "/";
          } else {
            this.setState({
              loginError: true,
              loginErrorMsg: result.data.msg,
              loginLoading: false
            });
          }
        } catch (error) {}
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div className={styles.loginPage}>
        <div className={styles.loginForm}>
          {this.state.isLogin && (
            <div className={styles.loading}>
              <Spin indicator={antIcon} />
            </div>
          )}

          {!this.state.isLogin && (
            <div>
              <section>
                <div className={styles.logoWrap}>
                  <img className={styles.logo} src="/imgs/logo/logo.png" />
                </div>
                <div className={styles.logoTitle}>酱辛后台系统</div>
              </section>

              <Form onSubmit={this.handleSubmit} className="login-form">
                {this.state.loginError && (
                  <FormItem>
                    <Alert message={this.state.loginErrorMsg} type="error" />
                  </FormItem>
                )}
                <FormItem>
                  {getFieldDecorator("user_name", {
                    rules: [{ required: true, message: "请输入用户名!" }]
                  })(
                    <Input
                      prefix={
                        <Icon
                          type="user"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      placeholder="用户名"
                    />
                  )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator("user_pwd", {
                    rules: [{ required: true, message: "请输入密码!" }]
                  })(
                    <Input
                      prefix={
                        <Icon
                          type="lock"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      type="password"
                      placeholder="密码"
                    />
                  )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator("remember", {
                    valuePropName: "checked",
                    initialValue: true
                  })(<Checkbox>记住我</Checkbox>)}
                  <a className="login-form-forgot" href="">
                    忘记密码
                  </a>
                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={this.state.loginLoading}
                    className={styles.loginBtn}
                  >
                    登陆
                  </Button>
                  <p>
                    <a href="">注册!</a>
                  </p>
                </FormItem>
              </Form>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(Login);
export default WrappedNormalLoginForm;
