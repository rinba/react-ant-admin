import { Layout } from "antd";
const { Footer } = Layout;

export default function BottomFooter() {
  return (
    <Footer className="footer">
      <p>......我可是有底线的......</p>
      <p>备案/许可证编号：陕ICP备00000000号</p>
      <p>react-ant-admin ©2023 Created by rinba_murphy</p>
    </Footer>
  );
}
