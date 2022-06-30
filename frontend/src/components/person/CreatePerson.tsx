import { useMutation } from "@apollo/client";
import { Form, message } from "antd";
import { useNavigate } from "react-router-dom";
import { CREATE_PERSION } from "../../graphql";
import PersonForm from "./PersonForm";

export default function CreatePerson() {
  const [form] = Form.useForm();
  const [create] = useMutation(CREATE_PERSION);
  const nav = useNavigate();
  const onFinsh = async (values: any) => {
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
    <>
      <div>CreatePerson</div>
      <PersonForm onFinsh={onFinsh} form={form} />
    </>
  );
}
