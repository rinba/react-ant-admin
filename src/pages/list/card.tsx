import { useState } from "react";
import { Card, Avatar, Row, Col, Typography, Modal, Form, Input } from "antd";
import MyIcon from "@/components/icon";
import "./index.less";

const list = [
  {
    img: "https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png",
    title: "Ant Design",
    description:
      "Ant Design是蚂蚁金服团队推出的一个企业级UI设计语言，旨在为开发者和设计师提供更优秀的和更完整的设计解决方案。它的特长是能够满足现代企业复杂的设计需求，可以以细致和完整的将用户体验融入服务里，从而实现极致的交互效果和服务质量。",
  },
  {
    img: "https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png",
    title: "React",
    description:
      "React是一个由Facebook开发并维护的用于构建用户界面的JavaScript库。它以声明式的方式构建用户界面，可以轻松地创建交互式的用户界面组件。",
  },
  {
    img: "http://www.axios-js.com/logo.svg",
    title: "axios",
    description:
      "axios是一个流行的基于Promise的HTTP客户端，用于浏览器和Node.js环境。它可以被用来在客户端发起HTTP请求并处理响应。",
  },
  {
    img: "https://webpack.docschina.org/icon-square-small.85ba630cf0c5f29ae3e3.svg",
    title: "Webpack",
    description:
      "Webpack是一个现代化的静态模块打包工具。它主要用于构建前端项目，将多个模块（如JavaScript、CSS、图片等）打包成几个静态资源文件，以便在浏览器中加载。",
  },
];

const { Meta } = Card;
const dRules = [
  {
    required: true,
    message: "Please input your description!",
  },
  {
    min: 50,
    message: "The description must be more than 50 words!",
  },
];
const tRules = [
  {
    required: true,
    message: "Please input your title!",
  },
];
const iRules = [
  {
    required: true,
    message: "Please input your img!",
  },
];
function useCardPage() {
  const [dataList, setList] = useState(list);
  const [showModal, setShow] = useState(false);
  const [form] = Form.useForm();

  const show = () => {
    setShow(true);
  };
  const hide = () => {
    setShow(false);
  };
  const addList = () => {
    form.validateFields().then((values) => {
      setList([...dataList, values]);
      form.resetFields();
      hide();
    });
  };
  return { show, dataList, showModal, hide, addList, form };
}

export default function CardPage() {
  const { show, showModal, addList, dataList, hide, form } = useCardPage();
  return (
    <div className="card-container">
      <Row gutter={[16, 16]}>
        <Col span={6}>
          <Card hoverable className="add-wapper" onClick={show}>
            <MyIcon type="icon_increase" />
            <p>新增</p>
          </Card>
        </Col>
        {dataList.map((item) => (
          <Col span={6} key={item.title}>
            <Card
              hoverable
              actions={[
                <MyIcon type="icon_edit" className="icon" />,
                <MyIcon className="icon" type="icon_setting" />,
              ]}
            >
              <Meta
                avatar={<Avatar src={item.img} />}
                title={item.title}
                description={
                  <Typography.Paragraph ellipsis={{ rows: 3, suffix: "..." }}>
                    {item.description}
                  </Typography.Paragraph>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>
      <Modal
        title="添加列表"
        open={showModal}
        cancelText="取消"
        okText="添加"
        onOk={addList}
        onCancel={hide}
      >
        <Form form={form}>
          <Form.Item label="图片链接" name="img" rules={iRules}>
            <Input />
          </Form.Item>
          <Form.Item label="标题" name="title" rules={tRules}>
            <Input />
          </Form.Item>
          <Form.Item label="描述" name="description" rules={dRules}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
CardPage.route = { [MENU_PATH]: "/list/card" }
