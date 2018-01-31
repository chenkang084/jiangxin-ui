import React from "react";
import ReactDOM from "react-dom";
import styles from "./header.less";

export default class Header extends React.Component {
  render() {
    return <div className={styles.header}>
        <div className={styles.left}>header</div>
        <div className={styles.right}>
          <div className={styles.userInfo}>
            <i className="fa fa-user-circle-o" aria-hidden="true" />
          </div>
        </div>
      </div>;
  }
}
