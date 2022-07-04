import { Route, Routes } from "react-router-dom";
import CreatePerson from "../components/person/CreatePerson";
import PersonTable from "../components/person/PersonTable";
import UpdatePerson from "../components/person/UpdatePerson";

/**
 * The PersonRoutes function returns a Routes component that contains three Route components.
 * @returns The Routes component is being returned.
 */
export default function PersonRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PersonTable />} />
      <Route path="/create-person" element={<CreatePerson />} />
      <Route path="/update-person/:userid" element={<UpdatePerson />} />
    </Routes>
  );
}
