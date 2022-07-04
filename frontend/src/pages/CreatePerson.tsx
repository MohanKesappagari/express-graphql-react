import { useMutation } from "@apollo/client";
import { Form, message } from "antd";
import { useNavigate } from "react-router-dom";
import PersonForm from "../components/PersonForm";
import Title from "../components/Title";
import { FORM_VALUES } from "../global/types";
import { CREATE_PERSION } from "../graphql";

/**
 * It's a React function component that uses Antd to create a form, and then uses Apollo to create a
 * person.
 * @returns A function that returns a React component.
 */
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
