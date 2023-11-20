import loadable from "@loadable/component";
import { Spin } from "antd";

const loaddingCom = (
  <Spin
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: 20,
      fontSize: 14,
    }}
    tip="组件加载中...."
  />
);

export const Line = loadable(() => import("./line"), { fallback: loaddingCom });
export const Bar = loadable(() => import("./bar"), { fallback: loaddingCom });
export const Pie = loadable(() => import("./pie"), { fallback: loaddingCom });

