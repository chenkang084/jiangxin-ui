import React from "react";
import ReactDOM from "react-dom";
import styles from "./article.less";
import classnames from "classnames";

export default class Article extends React.Component {
  // componentWillMount() {
  //   addMetaReferrer();
  // }

  componentDidMount() {
    iFrameResize({ log: true }, document.getElementById("test"));
  }

  render() {
    return (
      <div className={styles.articleContainer}>
        <section className={styles.titleContainer}>
          <div className={styles.title}>{this.props.title}</div>
          <div className={styles.authorInfo}>
            <span>{this.props.author}</span>
            <span style={{ marginLeft: "15px" }}>{this.props.create_time}</span>
          </div>
        </section>
        {/* <div
          className={classnames(styles.contentWrap, "contentWrap")}
          dangerouslySetInnerHTML={{ __html: this.props.content }}
        /> */}

        <iframe
          id="test"
          src={`http://10.104.209.82:9001/articles/${this.props.title}.html`}
          style={{ minHeight: "800px" }}
        />
      </div>
    );
  }
}
