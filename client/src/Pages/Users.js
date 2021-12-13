import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import UsersTable from "../Components/UsersTable";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
export default function Users() {
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {

  }, [dispatch])
  return (
    <>
      <Navbar />
      <Sidebar />
      <div id="table-bg">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-10">
            <div className="bg-white border-top p-4">
              Administrasi - Pengguna
              <br />
              <h4 className="mt-2">
                <strong>Daftar Pengguna</strong>
              </h4>
            </div>
            <div class="vh-100">
              <UsersTable />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
