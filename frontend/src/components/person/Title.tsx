import { Col, Row } from "antd";

export default function Title({ children }: any) {
  return (
    <div className="title">
      <Row>
        <Col md={{ span: 5, offset: 1 }}>{children}</Col>
      </Row>
    </div>
  );
}
