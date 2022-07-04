import { useMutation, useQuery } from "@apollo/client";
import { Form, message } from "antd";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FORM_VALUES } from "../../common/types";
import PersonForm from "../../components/PersonForm";
import Title from "../../components/Title";
import { PERSON, UPDATE_PERSON } from "../../graphql";

/**
 * It fetches a person from the database, then sets the form values to the fetched person's values,
 * then updates the person with the new values.
 */
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
  const onFinish = async (values: FORM_VALUES) => {
    try {
      await update({
        variables: {
          updatePersonDto: {
            userid: Number(userid),
            ...values,
            age: Number(values.age),
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
