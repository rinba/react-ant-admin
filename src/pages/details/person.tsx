import { ReactNode, useState } from "react";
import { Card, Tag, Input, Tabs, Row, Col, List, Space, Avatar } from "antd";
import MyIcon from "@/components/icon";
import "./index.less";
import { useStyle } from "./style";

const { Meta } = Card;

const tagInitVal = [
  { value: "HTML5", color: "orange" },
  { value: "CSS3", color: "yellow" },
  { value: "JavaScript", color: "green" },
  { value: "TypeScript", color: "blue" },
  { value: "NodeJS", color: "purple" },
  { value: "Vue", color: "red" },
  { value: "React", color: "black" },
  { value: "Uniapp", color: "skyblue" },
];
function getRandomColor() {
  return "#" + Math.random().toString(16).slice(2, 8);
}

const listData = Array.from({ length: 10 }, (_, k) => ({
  title: `代码书院实验室简介 ${k + 1}`,
  avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
  description:
    "实验室负责人：陈毅",
  content:
    "代码书院实验室位于长春理工大学南校区西侧远创国际大楼第25层，是吉林省重点信息实验室，下设有前端开发组、后端开发组、数据库开发组、人工智能开发组，规模约有100人",
}));

const IconText = ({ icon, text }: { icon: ReactNode, text: string }) => (
  <Space>
    {icon}
    {text}
  </Space>
);

const tabpanes = Array.from({ length: 3 }, (_, k) => ({
  key: k + '',
  label: `tab${k + 1}`,
  children: (<List
    itemLayout="vertical"
    size="large"
    header={<h2>Tab {k + 1}</h2>}
    dataSource={listData}
    renderItem={(item) => (
      <List.Item
        key={item.title}
        actions={[
          <IconText
            icon={<MyIcon type="icon_collection" />}
            text="156"
            key="list-vertical-star-o"
          />,
          <IconText
            icon={<MyIcon type="icon_zan" />}
            text="156"
            key="list-vertical-like-o"
          />,
          <IconText
            icon={<MyIcon type="icon_voice" />}
            text="2"
            key="list-vertical-message"
          />,
        ]}
        extra={
          <img
            width={272}
            alt="logo"
            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
          />
        }
      >
        <List.Item.Meta
          avatar={<Avatar src={item.avatar} />}
          title={<p>{item.title}</p>}
          description={item.description}
        />
        {item.content}
      </List.Item>
    )}
  />)
})
);

export default function Person() {
  const [tags, setTag] = useState(tagInitVal);
  const [isInput, setInput] = useState(false);
  const [value, setVal] = useState("");
  const { styles } = useStyle()
  const addTags = () => {
    if (!value) {
      return setInput(false);
    }
    let tempTag = { value: value, color: getRandomColor() };
    setVal("");
    setTag([...tags, tempTag]);
    setInput(false);
  };
  return (
    <div className="person-container">
      <Row>
        <Col span={6}>
          <Card
            cover={
              <img
                alt="example"
                src="https://img2.baidu.com/it/u=4271918474,2449530221&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333"
              />
            }
          >
            <Meta title="张xx、华xx" description="一组无敌，所向披靡" />
            <div className={styles.info}>
              <p>
                <MyIcon type="icon_infopersonal" className="icon" />
                前端开发一组
              </p>
              <p>
                <MyIcon type="icon_address1" className="icon" />
                吉林长春
              </p>
              <p>
                <MyIcon type="icon_edit" className="icon" />
                <a
                  href="https://blog.csdn.net/qq_51904231?spm=1000.2115.3001.5343"
                  target="_blank"
                  rel="noreferrer"
                >
                  原创博客地址
                </a>
              </p>
              <p>
                <MyIcon type="icon_github" className="icon" />
                <a
                  href="https://github.com/rinba"
                  target="_blank"
                  rel="noreferrer"
                >
                  github地址
                </a>
              </p>
              <p>
                <MyIcon className="icon" type="icon_QQ" />
                3255620496
              </p>
            </div>
            <div className="tags">
              <div className="title">标签</div>
              <div className="wrapper">
                {tags.map((item) => (
                  <Tag color={item.color} key={item.color}>
                    {item.value}
                  </Tag>
                ))}
                {isInput ? (
                  <Input
                    placeholder="请输入"
                    className="ipt"
                    onBlur={addTags}
                    value={value}
                    onChange={(e) => setVal(e.target.value)}
                  />
                ) : (
                  <MyIcon type="icon_increase" onClick={() => setInput(true)} />
                )}
              </div>
            </div>
          </Card>
        </Col>
        <Col span={17} offset={1} className={styles.tabs}>
          <Tabs defaultActiveKey="1" items={tabpanes}> </Tabs>
        </Col>
      </Row>
    </div>
  );
}
Person.route = { [MENU_PATH]: "/details/person" };
