import React from 'react';
import ReactDOM from 'react-dom';
import styles from './title.less';
import { getLocalStorage, savelocalStorage } from '../../utils/storage.util.js';
export default class Title extends React.Component {
  state = {
    title: getLocalStorage('title') || '',
    author: getLocalStorage('author') || '',
    coverImg: getLocalStorage('coverImg') || '',
    abstract: getLocalStorage('abstract') || '',
  };

  handleChange = (event) => {
    // console.log('===========', event.target.value);
    if (event && event.target) {
      const type = event.target.dataset.type;
      const value = event.target.value;

      this.setState({ [type]: value });

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
            value={this.state.title}
            onChange={this.handleChange}
          />
        </p>
        <p>
          <label htmlFor="author">作者：</label>
          <input
            className="common-input "
            data-type="author"
            id="author"
            value={this.state.author}
            onChange={this.handleChange}
          />
        </p>
        <p>
          <label htmlFor="coverImg">封面：</label>
          <input
            className="common-input "
            data-type="coverImg"
            id="coverImg"
            value={this.state.coverImg}
            placeholder="封面照片网址"
            onChange={this.handleChange}
          />
        </p>
        <p>
          <label htmlFor="abstract">摘要：</label>
          <textarea
            data-type="abstract"
            id="abstract"
            value={this.state.abstract}
            onChange={this.handleChange}
          />
        </p>
      </div>
    );
  }
}
