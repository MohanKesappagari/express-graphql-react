import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useMutation, useQuery } from "@apollo/client";
import { Button, message, Table } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ALL_PERSONS } from "../../graphql";
import { DELETE_USER } from "./../../graphql/index";

export default function PersonTable() {
  const { data, loading, error, refetch } = useQuery(ALL_PERSONS);
  const [remove, removep] = useMutation(DELETE_USER);
  const nav = useNavigate();

  useEffect(() => {
    refetch();
    return () => {};
  }, []);

  const deleteUser = async (userid: number) => {
    try {
      await remove({
        variables: {
          userid,
        },
      });
      message.success("User Deleted");
      refetch();
    } catch {
      message.error("Something Went Wrong");
    }
  };

  const columns: any = [
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
    {
      title: "Actions",
      render(val: any, obj: any) {
        return (
          <>
            <EditOutlined
              style={{
                fontSize: "1.5rem",
                cursor: "pointer",
                color: "#13c2c2",
              }}
              onClick={() => nav(`/update-person/${obj.userid}`)}
            />
            <DeleteOutlined
              style={{
                fontSize: "1.5rem",
                marginLeft: ".4em",
                cursor: "pointer",
                color: "#ff4d4f",
              }}
              spin={removep.loading}
              onClick={() => deleteUser(Number(obj.userid))}
            />
          </>
        );
      },
    },
  ];
  if (loading) <h1>Loading</h1>;

  if (error) <h1>Error</h1>;
  return (
    <div className="layout">
      <Button
        className="btn create"
        type="primary"
        onClick={() => nav("/create-person")}
      >
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
    </div>
  );
}
