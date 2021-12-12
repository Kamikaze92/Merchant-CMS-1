import Navbar from "./Navbar";

export default function GroupDetailPage () {
    return (
        <>
          <div className="container">
            <div className="row card mt-4">
            <p className="fw-bolder p-3" style={{ color: '#f8f8f8', backgroundColor: '#229BD8' }}>Informasi Pengguna</p>
              <div className="d-flex flex-row">
                <div>
                    <div className="d-flex flex-row p-3">
                      <div className="d-flex flex-column fw-bolder">
                        <p>Email</p>
                        <p>Deskripsi</p>
                        <p>Hak Akses</p>
                        <p>Dibuat Pada</p>
                      </div>
                      <div className="d-flex flex-column ms-4">
                        <p>: Admin</p>
                        <p>: Untuk Administrator</p>
                        <p>: Super Admin</p>
                        <p>: 26 Oktober 2021 10:00:59</p>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
  
          <div className="container mt-3">
            <div className="row">
              <div className="col me-2">
              <div className="row card mt-4">
              <div className="mb-3 d-flex align-items-center bd-highlight mb-3" style={{ color: '#f8f8f8', backgroundColor: '#229BD8' }}> 
                    <p className="fw-bolder m-3 me-auto  bd-highlight">Anggota Group</p>
                    <i className="bi bi-plus-lg  bd-highlight" style={{ color: '#f8f8f8' }}></i>
                    <p className="m-3  bd-highlight">Tambah</p>
                    <i className="bi bi-trash  bd-highlight" style={{ color: '#f8f8f8' }}></i>
                    <p className="m-3  bd-highlight">Hapus</p>
                </div>
                <div className="px-3 mb-3">
                  <input class="form-control" placeholder="Cari Nama Grup" />
                </div>
                <div className="d-flex flex-row">
                <table class="table">
                  <tbody>
                    <tr>
                      <th scope="col">
                        <input class="form-check-input" type="checkbox" value=""/>
                      </th>
                      <th className="fw-bolder" scope="col">Nama Grup</th>
                      <th className="fw-bolder" scope="col">Email</th>
                      <th className="fw-bolder" scope="col">Aksi</th>
                    </tr>
                    <tr>
                      <th scope="col">
                        <input class="form-check-input" type="checkbox" value=""/>
                      </th>
                      <td>Admin</td>
                      <td>Admin@gmail.com</td>
                      <td>
                        <div className="d-flex align-items-center bd-highlight mb-3"> 
                          <i className="bi bi-pencil-fill" style={{ color: '#229BD8' }}></i>
                          <div style={{ height: "20px" }}>
                            <p className="ms-2 me-4  bd-highlight">Edit</p>
                          </div>
                          <i className="bi bi-trash  bd-highlight" style={{ color: '#DD4A48' }}></i>
                          <div style={{ height: "20px" }}>
                            <p className="ms-2 me-4  bd-highlight">Hapus</p>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                </div>
              </div>
              </div>
            </div>
          </div>  
        </>
      );
} 