import React from "react";
import ReactDOM from "react-dom";
import { Modal, Button, Form, Input, notification } from "antd";
import { editorAxiosService } from "../../services/axios.service";
const FormItem = Form.Item;

export default class UploadModal extends React.Component {
  state = { emailListError: "", submitFlag: true };

  handleOk = async e => {
    this.props.handleUploadModalVisible(false);
    await editorAxiosService.post("api/editor/article", {
      title: "test",
      content: "content"
    });

    notification.success({ message: "文件上传成功！" });
  };
  handleCancel = e => {
    this.props.handleUploadModalVisible(false);
  };

  handleEmail = e => {
    const emailText = e.currentTarget.value;
    if (emailText) {
      const emailList = emailText.split(";");
      var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const _emailList = emailList.filter(email => regex.test(email));
      if (_emailList.length !== emailList.length) {
        this.setState({ emailListError: "邮件格式不正确！" });
      } else {
        this.setState({ emailListError: "", submitFlag: false });
      }
    } else {
      this.setState({ emailListError: "邮件不能为空！" });
    }
  };

  render() {
    return (
      <Modal
        title="上传文章"
        visible={this.props.uploadModalVisible}
        onCancel={this.handleCancel}
        footer={[
          <Button
            key="back"
            type="primary"
            disabled={this.state.submitFlag}
            onClick={this.handleOk}
          >
            确定
          </Button>,
          <Button key="cancel" onClick={this.handleCancel}>
            取消
          </Button>
        ]}
      >
        <p>
          <label htmlFor="title_disabled">标题：</label>
          <input
            className="common-input "
            data-type="title"
            id="title_disabled"
            disabled
            value={this.props.title}
            style={{ width: "80%" }}
          />
        </p>
        <p>
          <label htmlFor="abstract_disabled">摘要：</label>
          <textarea
            data-type="abstract"
            id="abstract_disabled"
            disabled
            value={this.props.abstract}
            style={{
              resize: "none",
              width: "80%",
              textIndent: "8px",
              verticalAlign: "middle"
            }}
          />
        </p>
        <p>
          <label htmlFor="email">抄送：</label>
          <input
            className="common-input "
            data-type="email"
            id="email"
            placeholder="请输入邮件列表，多个邮件，用;隔开"
            style={{ width: "80%" }}
            onChange={this.handleEmail}
          />
        </p>
        {this.state.emailListError && (
          <p style={{ color: "red", marginLeft: "45px" }}>
            {this.state.emailListError}
          </p>
        )}
      </Modal>
    );
  }
}
