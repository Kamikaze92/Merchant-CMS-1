import Sidebar from "../Components/Sidebar";
const layoutBorder = {
  borderRadius: 5,
  padding: "16px",
  backgroundColor: "white",
  marginTop: 20,
  marginLeft: 24,
  marginRight: 24,
};
export default function ActiveMerchant() {
  return (
    <>
      <div className="container">
        <div className="row p-2">
          <div className="border-top">
            <p>
              <strong>Daftar Akun Pengelola QR</strong>
            </p>
          </div>
          <div className="" style={{ backgroundColor: "#e0f2f1" }}>
            <div className="border" style={layoutBorder}>
              <h6 style={{ fontSize: 14 }}>Status Pendaftaran</h6>
              <div className="d-flex flex-row justify-content-between">
                <div className="col-4">
                  <select class="form-select">
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
                    <button class="btn btn-primary ms-1" type="submit">
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
                <h6>Akun Pengelola QR</h6>
                <button className="btn btn-primary">+ Tambah Data</button>
              </div>
              <div>
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Nama</th>
                      <th scope="col">Email</th>
                      <th scope="col">Sub-Kategori</th>
                      <th scope="col">Nama Tempat</th>
                      <th scope="col">Alamat</th>
                      <th scope="col">Aksi</th>

                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Andi Sugandi</td>
                      <td>testdaftar@gmail.com</td>
                      <td>Restoran</td>
                      <td>Restoran Asik</td>
                      <td>Jl.buntu no.xx, kota bandung jawa barat</td>
                      <td><button className="btn btn-primary">Detail</button></td>
                    </tr>
                    <tr>
                      <td>Andi Sugandi</td>
                      <td>testdaftar@gmail.com</td>
                      <td>Restoran</td>
                      <td>Restoran Asik</td>
                      <td>Jl.buntu no.xx, kota bandung jawa barat</td>
                      <td><button className="btn btn-primary">Detail</button></td>
                    </tr>
                    <tr>
                      <td>Andi Sugandi</td>
                      <td>testdaftar@gmail.com</td>
                      <td>Restoran</td>
                      <td>Restoran Asik</td>
                      <td>Jl.buntu no.xx, kota bandung jawa barat</td>
                      <td><button className="btn btn-primary">Detail</button></td>
                    </tr>
                    <tr>
                      <td>Andi Sugandi</td>
                      <td>testdaftar@gmail.com</td>
                      <td>Restoran</td>
                      <td>Restoran Asik</td>
                      <td>Jl.buntu no.xx, kota bandung jawa barat</td>
                      <td><button className="btn btn-primary">Detail</button></td>
                    </tr>
                    <tr>
                      <td>Andi Sugandi</td>
                      <td>testdaftar@gmail.com</td>
                      <td>Restoran</td>
                      <td>Restoran Asik</td>
                      <td>Jl.buntu no.xx, kota bandung jawa barat</td>
                      <td><button className="btn btn-primary">Detail</button></td>
                    </tr>
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
      </div>
    </>
  );
}
