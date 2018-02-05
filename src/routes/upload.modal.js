import React from "react";
import ReactDOM from "react-dom";
import { Modal, Button } from "antd";

export default class UploadModal extends React.Component {
  handleOk = e => {
    console.log(e);
    this.props.handleUploadModalVisible(false);
  };
  handleCancel = e => {
    console.log(e);
    this.props.handleUploadModalVisible(false);
  };

  render() {
    return (
      <Modal
        title="上传文章"
        visible={this.props.uploadModalVisible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        footer={[
          <Button key="back" type="primary">
            确定
          </Button>,
          <Button key="submit">取消</Button>
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
            style={{ resize: "none", width: "80%" }}
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
          />
        </p>
      </Modal>
    );
  }
}
