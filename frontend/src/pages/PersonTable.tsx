import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useMutation, useQuery } from "@apollo/client";
import { Button, message, Table } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PERSON } from "../global/types";
import { ALL_PERSONS } from "../graphql";
import { DELETE_USER } from "../graphql/index";

export default function PersonTable() {
  const { data, loading, error, refetch } = useQuery(ALL_PERSONS);
  const [remove, removep] = useMutation(DELETE_USER);
  const nav = useNavigate();

  /* A hook that is called when the component is mounted. It is used to refetch the data from the
database. */
  useEffect(() => {
    refetch();
    return () => {};
  }, []);

  /**
   * The deleteUser function takes a userid as an argument, and then uses the remove mutation to delete
   * the user from the database, and then uses the refetch function to update the list of users.
   * @param {number} userid - number - the id of the user to be deleted
   */
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

  /* Defining the columns of the table. */
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
      render(value: string, record: PERSON, index: number) {
        return (
          <>
            <EditOutlined
              style={{
                fontSize: "1.5rem",
                cursor: "pointer",
                color: "#13c2c2",
              }}
              onClick={() => nav(`/update-person/${record.userid}`)}
            />
            <DeleteOutlined
              style={{
                fontSize: "1.5rem",
                marginLeft: ".4em",
                cursor: "pointer",
                color: "#ff4d4f",
              }}
              spin={removep.loading}
              onClick={() => deleteUser(Number(record.userid))}
            />
          </>
        );
      },
    },
  ];

  if (loading) <h1>Loading</h1>;

  if (error) <h1>Error</h1>;
  /* Returning a div with a button and a table. */
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
        dataSource={data?.persons.map((val: PERSON, index: number) => ({
          tableId: index + 1,
          ...val,
        }))}
        rowKey={(record: PERSON) => record.userid}
      />
    </div>
  );
}
