import { Layout } from "antd";
const { Footer } = Layout;

export default function BottomFooter() {
  return (
    <Footer className="footer">
      <p>...我是有底线的...</p>
      <p>备案/许可证编号：吉ICP备00000000号</p>
      <p>实验室级后台管理系统 ©2023 Created by Code Academy Lab</p>
    </Footer>
  );
}
