import { Col, Row } from "antd";
import React from "react";

interface Props {
  children: React.ReactNode;
}
/* A function that returns a div with a row and a column. */
export default function Title({ children }: Props) {
  return (
    <div className="title">
      <Row>
        <Col md={{ span: 5, offset: 1 }}>{children}</Col>
      </Row>
    </div>
  );
}
