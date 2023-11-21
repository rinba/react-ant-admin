import { useEffect, useState } from "react";
import "./index.less";
import {
  Form,
  Input,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
  message,
} from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatchLayout } from "@/store/hooks";

const { Option } = Select;

const residences = [
  {
    value: "陕西省",
    label: "陕西省",
    children: [
      {
        value: "西安市",
        label: "西安市",
        children: [
          {
            value: "大雁塔",
            label: "大雁塔",
          },
        ],
      },
    ],
  },
  {
    value: "河北省",
    label: "河北省",
    children: [
      {
        value: "承德市",
        label: "承德市",
        children: [
          {
            value: "避暑山庄",
            label: "避暑山庄",
          },
        ],
      },
    ],
  },
];

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

function RegistrationForm() {
  const [form] = Form.useForm();
  const [autoCompleteResult, setAutoCompleteResult] = useState<Array<any>>([]);
  const navigate = useNavigate()
  const { stateChangeLayout } = useDispatchLayout()
  useEffect(() => {
    message.info("此页面使用 MENU_LAYOUT 属性控制页面显示布局")
    return () => {
      stateChangeLayout("pop")
    }
  }, [])

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };
  const back = () => {
    navigate(-1)
  }

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  const onWebsiteChange = (value: any) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(
        [".com", ".org", ".net"].map((domain) => `${value}${domain}`)
      );
    }
  };

  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));
  return (
    <div>
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        className="index-form"
        initialValues={{
          residence: ["陕西省", "西安市", "大雁塔"],
          prefix: "86",
        }}
        scrollToFirstError
      >
        <Form.Item
          name="email"
          label="电子邮件"
          rules={[
            {
              type: "email",
              message: "输入的电子邮件无效！",
            },
            {
              required: true,
              message: "请输入您的电子邮件",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="密码"
          rules={[
            {
              required: true,
              message: "请输入您的密码！",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="确认密码"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "请再次输入您的密码",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  new Error("您输入的两个密码不匹配！")
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="nickname"
          label="昵称"
          tooltip="您希望别人怎么称呼你"
          rules={[
            {
              required: true,
              message: "请输入您的昵称",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="residence"
          label="居住地"
          rules={[
            {
              type: "array",
              required: true,
              message: "请输入您的居住地！",
            },
          ]}
        >
          <Cascader options={residences} />
        </Form.Item>

        <Form.Item
          name="phone"
          label="电话号码"
          rules={[
            {
              required: true,
              message: "请输入您的电话号码！",
            },
          ]}
        >
          <Input
            addonBefore={prefixSelector}
            style={{
              width: "100%",
            }}
          />
        </Form.Item>

        <Form.Item
          name="website"
          label="网站"
          rules={[
            {
              required: true,
              message: "请输入您的个人网站！",
            },
          ]}
        >
          <AutoComplete
            options={websiteOptions}
            onChange={onWebsiteChange}
            placeholder="例如：xxx.com"
          >
            <Input />
          </AutoComplete>
        </Form.Item>

        <Form.Item
          label="验证码"
          extra="我们必须确认您是个人类！"
        >
          <Row gutter={8}>
            <Col span={12}>
              <Form.Item
                name="captcha"
                noStyle
                rules={[
                  {
                    required: true,
                    message: "请输入验证码！",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Button>获取验证码</Button>
            </Col>
          </Row>
        </Form.Item>

        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error("请接受协议！")),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>
            我已经阅读{" "}
            <a href="/" target="_blank">
              协议
            </a>
          </Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            注册
          </Button>
          <Button danger onClick={back} type='link'>
            返回上一页
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default RegistrationForm;

RegistrationForm.route = {
  [MENU_PATH]: "/form/index",
  [MENU_LAYOUT]: 'FULLSCREEN'
};
