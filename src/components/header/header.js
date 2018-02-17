import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router";
import { Menu, Dropdown, Icon } from "antd";

import styles from "./header.less";
import { editorAxiosService } from "../../services/axios.service";

export default class Header extends React.Component {
  state = { user: null, isLogin: false };
  componentDidMount() {
    this.getUserInfo();
  }

  handleMenu = ({ item, key, keyPath }) => {
    if (key) {
      switch (key) {
        case "loginOut":
          this.loginOut();
          break;

        default:
          break;
      }
    }
  };

  loginOut = async () => {
    try {
      await editorAxiosService.put("api/auth/signOut");
      window.location.href = "/";
    } catch (error) {}
  };

  getUserInfo = async () => {
    try {
      const { data: user } = await editorAxiosService.get("api/auth/userInfo");
      if (user) {
        this.setState({ user, isLogin: true });
        this.props.setLoginStatus(true);
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        this.setState({ isLogin: false });
        // this.props.setLoginStatus(false);
      }
    }
  };

  render() {
    const menu = (
      <Menu onClick={this.handleMenu}>
        <Menu.Item key="loginOut">
          <span>退出登陆</span>
        </Menu.Item>
      </Menu>
    );

    return (
      <div className={styles.header}>
        <div className={styles.left}>
          <div className={styles.logoWrap}>
            <img src="imgs/logo/logo.png" />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.userInfo}>
            {!this.state.isLogin ? (
              <Link to={`/login`} className={styles.loginLink}>
                登陆
              </Link>
            ) : (
              <Dropdown overlay={menu}>
                <div>
                  <span className="ant-dropdown-link" href="#">
                    <i className="fa fa-user-circle-o" aria-hidden="true" />
                    <span className={styles.username}>
                      {this.state.user && this.state.user.user_name}
                    </span>
                  </span>
                </div>
              </Dropdown>
            )}
          </div>
        </div>
      </div>
    );
  }
}
