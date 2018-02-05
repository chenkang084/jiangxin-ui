import React from "react";
import ReactDOM from "react-dom";
import styles from "./title.less";
export default class Title extends React.Component {
  handleChange = event => {
    // console.log(event.target.value);
    if (event && event.target) {
      const type = event.target.dataset.type;
      const value = event.target.value;

      this.props.setTitle && this.props.setTitle(type, value);
    }
  };
  render() {
    return (
      <div className={styles.titleWrap}>
        <p>
          <label htmlFor="title">标题：</label>
          <input
            className="common-input "
            data-type="title"
            id="title"
            onChange={this.handleChange}
          />
        </p>
        <p>
          <label htmlFor="abstract">摘要：</label>
          <textarea
            data-type="abstract"
            id="abstract"
            onChange={this.handleChange}
          />
        </p>
      </div>
    );
  }
}
