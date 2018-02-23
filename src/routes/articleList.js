import React from "react";
import ReactDOM from "react-dom";
import { editorAxiosService } from "../services/axios.service";
import ArticleList from "../components/articleList/articleList";

export default class ArticlePage extends React.Component {
  state = {
    // content: ""
  };

  componentDidMount() {
    console.log("did");
  }

  render() {
    return <ArticleList />;
  }
}
