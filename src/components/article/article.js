import React from 'react';
import ReactDOM from 'react-dom';
import styles from './article.less';
import classnames from 'classnames';
import config from '../../config';

export default class Article extends React.Component {
  // componentWillMount() {
  //   addMetaReferrer();
  // }

  componentDidMount() {
    iFrameResize({ log: true }, document.getElementById('article-content'));
    console.log(this.refs.iframe, '......');
    const iframe = this.refs.iframe;

    if (iframe) {
      if (env === 'prod') {
        iframe.onload = () => {
          var style = document.createElement('style');
          style.type = 'text/css';
          style.innerHTML = 'img{max-width:400px !important;}';

          iframe.contentDocument.head.append(style);
        };
      }
    }
  }

  render() {
    return (
      <div className={styles.articleContainer}>
        <section className={styles.titleContainer}>
          <div className={styles.title}>{this.props.title}</div>
          <div className={styles.authorInfo}>
            <span>{this.props.author}</span>
            <span style={{ marginLeft: '15px' }}>{this.props.create_time}</span>
          </div>
        </section>
        {/* <div
          className={classnames(styles.contentWrap, "contentWrap")}
          dangerouslySetInnerHTML={{ __html: this.props.content }}
        /> */}

        <iframe
          id="article-content"
          className={styles.articleContent}
          src={`${config.uri.iframeUri}articles/${this.props.title}.html`}
          style={{ minHeight: '800px' }}
        />
      </div>
    );
  }
}
