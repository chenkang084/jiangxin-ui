import React from "react";
import ReactDOM from "react-dom";
import { editorAxiosService } from "../services/axios.service";
import ArticleList from "../components/articleList/articleList";
import { addMetaReferrer } from "../utils/article.util";
export default class ArticlePage extends React.Component {
  componentWillMount() {
    addMetaReferrer();
  }

  componentDidMount() {
    console.log("did");
  }

  render() {
    return <ArticleList />;
  }
}
