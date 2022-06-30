import { useMutation, useQuery } from "@apollo/client";
import { Form, message } from "antd";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PERSON, UPDATE_PERSON } from "../../graphql";
import PersonForm from "./PersonForm";
import Title from "./Title";

export default function UpdatePerson() {
  const nav = useNavigate();
  const { userid } = useParams();
  const [form] = Form.useForm();
  const { data, loading, error, refetch } = useQuery(PERSON, {
    variables: {
      userid: Number(userid),
    },
  });

  const [update] = useMutation(UPDATE_PERSON);
  useEffect(() => {
    refetch();
  }, []);
  const onFinish = async (values: any) => {
    try {
      await update({
        variables: {
          updatePersonDto: {
            userid: Number(userid),
            age: Number(values.age),
            ...values,
          },
        },
      });
      message.success("Person Updated");
      nav("/");
    } catch {
      message.error("Something Went wrong");
    }
  };
  if (loading) <h1>Loading</h1>;

  if (error) <h1>Error</h1>;
  if (data) {
    form.setFieldsValue({
      name: data.person.name,
      email: data.person.email,
      mobile: data.person.mobile,
      gender: data.person.gender,
      age: data.person.age,
    });
  }
  return (
    <div className="layout">
      <Title>UpdatePerson</Title>
      <PersonForm onFinsh={onFinish} form={form} />
    </div>
  );
}
