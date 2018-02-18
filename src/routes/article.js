import React from "react";
import ReactDOM from "react-dom";
import { editorAxiosService } from "../services/axios.service";
import Article from "../components/article/article";

export default class ArticlePage extends React.Component {
  state = {
    // content: ""
  };

  async componentDidMount() {
    const { data: result } = await editorAxiosService.get(
      `api/editor/article/${this.props.params.id}`
    );
    if (result.type === "success") {
      console.log();
      this.setState({ ...result.items });
    }
  }

  render() {
    return <Article {...this.state} />;
  }
}
