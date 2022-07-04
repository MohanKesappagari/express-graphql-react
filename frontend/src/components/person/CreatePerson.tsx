import { useMutation } from "@apollo/client";
import { Form, message } from "antd";
import { useNavigate } from "react-router-dom";
import { CREATE_PERSION } from "../../graphql";
import { FORM_VALUES } from "../../types";
import PersonForm from "./PersonForm";
import Title from "./Title";

export default function CreatePerson() {
  const [form] = Form.useForm();
  const [create] = useMutation(CREATE_PERSION);
  const nav = useNavigate();
  const onFinsh = async (values: FORM_VALUES) => {
    console.log(
      "🚀 ~ file: CreatePerson.tsx ~ line 7 ~ onFinsh ~ values",
      values
    );
    try {
      await create({
        variables: {
          createPersonDto: {
            ...values,
            age: Number(values.age),
          },
        },
      });
      message.success("Person Created");
      nav("/");
    } catch {
      message.error("Something Went Wrong");
    }
  };

  return (
    <div className="layout">
      <Title>CreatePerson</Title>
      <PersonForm onFinsh={onFinsh} form={form} />
    </div>
  );
}
