import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveMerchants } from '../store/actions/users';
import { useNavigate, Link } from 'react-router-dom';


const layoutBorder = {
  padding: "16px",
  backgroundColor: "white",
  marginTop: 20,
  marginRight: 24,
};
export default function ActiveMerchantTable() {
  const dispatch = useDispatch();
  const {activeMerchants, isLoading, error} = useSelector((state) => state.users);
  console.log(activeMerchants)
  
  useEffect(() => dispatch(setActiveMerchants()), [])
  
  if(isLoading) {
    return (
      <div>
        <h1>Loading ...</h1>
      </div>
    )
  }

  if(error) {
    return (
      <div>
        <h1>Error...</h1>
      </div>
    )
  }

  return (
    <>
      <div className="container-fluid mt-3">
          <div className="">
            <div style={layoutBorder}>
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
            <div className="p-3 mt-4 mb-4" style={layoutBorder}>
              <div
                className="d-flex flex-row justify-content-between mb-3"
                style={{ alignItems: "center" }}
              >
                <h6><strong>Akun Pengelola QR</strong></h6>
                <button className="btn btn-default">+ Tambah Data</button>
              </div>
              <div>
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th style={{fontWeight: 600, backgroundColor: "#D9D9D9"}}>Nama</th>
                      <th style={{fontWeight: 600, backgroundColor: "#D9D9D9"}}>Email</th>
                      <th style={{fontWeight: 600, backgroundColor: "#D9D9D9"}}>Sub-Kategori</th>
                      <th style={{fontWeight: 600, backgroundColor: "#D9D9D9"}}>Nama Tempat</th>
                      <th style={{fontWeight: 600, backgroundColor: "#D9D9D9"}}>Alamat</th>
                      <th style={{fontWeight: 600, backgroundColor: "#D9D9D9"}}>Aksi</th>

                    </tr>
                  </thead>
                  <tbody>
                    {activeMerchants?.map((merchant) => {
                      return (
                      <tr>
                        <td>{merchant.full_name}</td>
                        <td>{merchant.email}</td>
                        <td>{merchant.Merchant.Category?.name}</td>
                        <td>{merchant.Merchant.place_name}</td>
                        <td>{merchant.Merchant.address}</td>
                        <td><Link state={merchant} to={`/active-merchants/${merchant.id}`}><i class='bx bx-list-ul' ></i> Detail</Link>
                        </td>
                      </tr>)
                      
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
