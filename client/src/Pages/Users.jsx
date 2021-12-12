import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import UsersTable from "../Components/UsersTable";
export default function Users() {
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
