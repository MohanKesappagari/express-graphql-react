import { useQuery } from "@apollo/client";
import { Button, Table } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ALL_PERSONS } from "../../graphql";

export default function PersonTable() {
  const { data, loading, error, refetch } = useQuery(ALL_PERSONS);
  const nav = useNavigate();

  useEffect(() => {
    refetch();
    return () => {};
  }, []);
  const columns = [
    {
      title: "Sr.No",
      dataIndex: "tableId",
    },
    {
      title: "name",
      dataIndex: "name",
    },
    {
      title: "email",
      dataIndex: "email",
    },
    {
      title: "age",
      dataIndex: "age",
    },
  ];
  if (loading) <h1>Loading</h1>;
  console.log(data);

  if (error) <h1>Error</h1>;
  return (
    <>
      <Button type="primary" onClick={() => nav("/create-person")}>
        Create
      </Button>
      <Table
        columns={columns}
        dataSource={data?.persons.map((val: any, index: number) => ({
          tableId: index + 1,
          ...val,
        }))}
        rowKey={(record: any) => record.userid}
      />
    </>
  );
}
