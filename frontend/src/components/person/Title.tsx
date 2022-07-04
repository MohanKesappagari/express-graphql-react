import { Col, Row } from "antd";
import React from "react";

interface Props {
  children: React.ReactNode;
}
export default function Title({ children }: Props) {
  return (
    <div className="title">
      <Row>
        <Col md={{ span: 5, offset: 1 }}>{children}</Col>
      </Row>
    </div>
  );
}
