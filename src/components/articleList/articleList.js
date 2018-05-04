import React from 'react';
import ReactDOM from 'react-dom';
import styles from './articleList.less';
import { editorAxiosService } from '../../services/axios.service';
import { notification, Modal, Button } from 'antd';
import { Link } from 'react-router';

export default class Article extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    isSign: false,
    deleteConfirm: false,
  };

  delArticleId = '';

  async componentDidMount() {
    this.getArticleList();
  }

  getArticleList = async () => {
    try {
      const { data: result } = await editorAxiosService.get(
        `api/editor/articles`,
      );
      if (result.type === 'success' && result.items.articles) {
        console.log(result.items);
        this.setState({
          list: result.items.articles,
          isSign: result.items.isSign,
        });
      } else {
        notification.error({ message: '获取文章列表失败！' });
      }
    } catch (error) {
      notification.error({ message: '获取文章列表失败！' });
    }
  };

  handleDel = (id) => {
    this.delArticleId = id;
    this.setState({
      deleteConfirm: true,
    });
  };

  handleOk = async () => {
    console.log(this.delArticleId, 'do del');
    try {
      const { data: result } = await editorAxiosService.delete(
        `api/editor/article/${this.delArticleId}`,
      );
      if (
        result &&
        result.type === 'success' &&
        result.items &&
        result.items.data &&
        result.items.data.affectedRows > 0
      ) {
        notification.success({ message: '文章删除成功！' });
        this.getArticleList();
      } else {
        notification.error({ error: '文章删除失败！' });
      }
    } catch (error) {
      notification.error({ error: '文章删除失败！' });
      console.log(error);
    } finally {
      this.handleCancel();
    }
  };

  handleCancel = () => {
    this.setState({
      deleteConfirm: false,
    });
    this.delArticleId = '';
  };

  render() {
    return (
      <div className={styles.articleWrap}>
        {!this.state.list ? (
          <div>loading</div>
        ) : (
          <div className={styles.articleContainer}>
            {this.state.list.map((article) => {
              return (
                <section className={styles.articleRow} key={article.id}>
                  <div className={styles.info}>
                    <div className={styles.cover}>
                      <Link to={`/article/${article.id}`}>
                        <img src={article.cover_img} />
                      </Link>
                    </div>
                    <div className={styles.abstractWrap}>
                      <Link to={`/article/${article.id}`}>
                        <h2 className={styles.title}>{article.title}</h2>
                      </Link>
                      <p className={styles.abstract}>{article.abstract}</p>
                      <div className={styles.authorInfo}>
                        <span className={styles.author}>{article.author}</span>
                        <span className={styles.updateTime}>
                          {article.update_time}
                        </span>
                        {this.state.isSign && (
                          <span
                            className={styles.delBtn}
                            onClick={() => {
                              this.handleDel(article.id);
                            }}
                          >
                            <i className="fa fa-trash" aria-hidden="true" />
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
        )}

        <Modal
          visible={this.state.deleteConfirm}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" type="primary" onClick={this.handleOk}>
              确定
            </Button>,
          ]}
        >
          <p>您确定要删除此篇文章吗？</p>
        </Modal>
      </div>
    );
  }
}
