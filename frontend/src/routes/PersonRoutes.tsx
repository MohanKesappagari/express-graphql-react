import { Route, Routes } from "react-router-dom";
import CreatePerson from "../components/person/CreatePerson";
import PersonTable from "../components/person/PersonTable";
import UpdatePerson from "../components/person/UpdatePerson";

export default function PersonRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PersonTable />} />
      <Route path="/create-person" element={<CreatePerson />} />
      <Route path="/update-person/:userid" element={<UpdatePerson />} />
    </Routes>
  );
}
