
import { useDispatch } from 'react-redux';
import { approveUser, deleteUser } from '../store/actions/users';

const layoutBorder = {
  borderRadius: 5,
  padding: "16px",
  backgroundColor: "white",
  marginTop: 20,
  marginLeft: 24,
  marginRight: 24,
};
export default function MerchantApprovalTable({ datas }) {
  const dispatch = useDispatch();

  const handleApproveMerchant = (e, id) => {
    // promp are you sure want to approve.
    dispatch(approveUser(id));
  }

  const handleDeleteMerchant = (e, id) => {
    // promp are you sure want to approve.
    dispatch(approveUser(id));
  }

  return (
    <>
      <div className="container-fluid mt-5" style={{backgroundColor: "#F6FBFF"}}>
          <div className="">
            <p>
              <strong>Persetujuan Akun Pengelola Baru</strong>
            </p>
          </div>
          <div className="">
            <div className="border" style={layoutBorder}>
              <h6 style={{ fontSize: 14 }}>Status Pendaftaran</h6>
              <div className="d-flex flex-row justify-content-between">
                <div className="col-4">
                  <select class="form-select" id="inputForm">
                    {/**Sampel */}
                    <option selected disabled>
                      Pilih Kategori
                    </option>
                    <option value="1">Dalam Proses</option>
                    <option value="2">Aktif</option>
                    <option value="3">Registrasi</option>
                    <option value="3">Merchant</option>
                  </select>
                </div>
                <div className="col-4">
                  <div className="d-flex flex-row">
                    <input
                      class="form-control "
                      type="search"
                      placeholder="Masukkan email / nama tempat"
                    />
                    <button class="btn btn-default ms-1" type="submit">
                      Cari
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="border p-3 mt-4 mb-4" style={layoutBorder}>
              <div
                className="d-flex flex-row justify-content-between"
                style={{ alignItems: "center" }}
              >
                <h6><strong>Akun Pengelola QR</strong></h6>
                <button className="btn btn-default">+ Tambah Data</button>
              </div>
              <div>
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Tanggal Daftar</th>
                      <th scope="col">Nama</th>
                      <th scope="col">Email</th>
                      <th scope="col">Sub-Kategori</th>
                      <th scope="col">Nama Tempat</th>
                      <th scope="col">Alamat</th>
                      <th scope="col">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                      { datas?.users?.map(el => {
                        return (
                          <tr key={el.id}>
                            <td>{el.created_at}</td>
                            <td>{el.full_name}</td>
                            <td>{el.email}</td>
                            <td>{el.Merchant.Category?.name}</td>
                            <td>{el.Merchant?.place_name}</td>
                            <td>{el.Merchant?.address}</td>
                            <td>
                              <button href="#"><i class='bx bx-list-ul' ></i> Detail</button>
                              <button href="#" onClick={(e) => handleApproveMerchant(e, el.id)}><i class='bx bx-list-ul' ></i> Approve</button>
                              <button href="#" onClick={(e) => handleDeleteMerchant(e, el.id)}><i class='bx bx-list-ul' ></i> Hapus</button>
                            </td>
                          </tr>
                        )
                    })}
                  </tbody>
                </table>
              </div>
              <div className="d-flex flex-row-reverse">
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link" href="#">Next</a></li>
                    </ul>
                </nav>
              </div>
            </div>
          </div>
      </div>
    </>
  );
}
