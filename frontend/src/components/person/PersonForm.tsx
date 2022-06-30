import { Button, Col, Form, Input, Row, Select } from "antd";
import { useNavigate } from "react-router-dom";

interface Props {
  onFinsh: (val: any) => void;
  form: any;
  defaultValues?: any;
}
export default function PersonForm({ onFinsh, form }: Props) {
  const nav = useNavigate();
  return (
    <Form form={form} onFinish={onFinsh} layout="vertical">
      <Row>
        <Col md={{ span: 5, offset: 1 }}>
          <Form.Item name="name" label="name">
            <Input />
          </Form.Item>
        </Col>
        <Col md={{ span: 5, offset: 1 }}>
          <Form.Item name="email" label="email">
            <Input />
          </Form.Item>
        </Col>
        <Col md={{ span: 5, offset: 1 }}>
          <Form.Item name="mobile" label="mobile">
            <Input />
          </Form.Item>
        </Col>
        <Col md={{ span: 4, offset: 1 }}>
          <Form.Item name="gender" label="gender">
            <Select>
              <Select.Option value="Male">Male</Select.Option>
              <Select.Option value="FeMale">FeMale</Select.Option>
            </Select>
          </Form.Item>
        </Col>
        <Col md={{ span: 5, offset: 1 }}>
          <Form.Item name="age" label="age">
            <Input type="number" />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 5, offset: 1 }}>
          <Button
            onClick={() => {
              nav("/");
            }}
            type="primary"
            style={{
              backgroundColor: "red",
            }}
          >
            Cancel
          </Button>
        </Col>
        <Col md={{ span: 5, offset: 1 }}>
          <Button htmlType="submit" type="primary">
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
