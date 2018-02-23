import React from "react";
import ReactDOM from "react-dom";
import styles from "./articleList.less";
import { editorAxiosService } from "../../services/axios.service";
import { notification } from "antd";
import { Link } from "react-router";

export default class Article extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {};

  async componentDidMount() {
    try {
      const { data: result } = await editorAxiosService.get(
        `api/editor/articles`
      );
      if (result.type === "success") {
        console.log(result.items);
        this.setState({ list: result.items });
      } else {
        notification.error({ message: "获取文章列表失败！" });
      }
    } catch (error) {
      notification.error({ message: "获取文章列表失败！" });
    }
  }

  render() {
    return (
      <div className={styles.articleWrap}>
        {!this.state.list ? (
          <div>loading</div>
        ) : (
          <div className={styles.articleContainer}>
            {this.state.list.map(article => {
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
                      </div>
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}
