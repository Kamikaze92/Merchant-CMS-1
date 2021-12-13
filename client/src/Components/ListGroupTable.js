const layoutBorder = {
    borderRadius: 5,
    padding: "16px",
    backgroundColor: "white",
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
  };

export default function ListGroupPage () {
    return (
        <>
          <div className="container-fluid">
            <div className="border" style={layoutBorder}>
            <div className="row">
                <div className="col d-flex justify-content-center">
                    <div className="col-5 d-flex align-items-center">
                        <input className="form-control me-2" 
                        placeholder="Cari Nama Grup"/>
                        <div style={{ height: '38px' }}>
                            <p className="btn" style={{ color: '#f8f8f8', backgroundColor: '#229BD8' }}>Cari</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          </div>
          <div className="border p-3 mt-4 mb-4" style={layoutBorder}>
              <div
                className="d-flex flex-row justify-content-between mb-3"
                style={{ alignItems: "center" }}
              >
                <h6><strong>Akun Grup Baru</strong></h6>
                <button className="btn btn-default">+ Tambah Data</button>
              </div>
                <div>
                <table className="table table-hover">
                    <tbody>
                        <tr>
                            <th style={{ fontWeight: 'bold', backgroundColor: "#D9D9D9" }}>Nama Grup</th>
                            <th style={{ fontWeight: 'bold', backgroundColor: "#D9D9D9" }}>Deskripsi</th>
                            <th style={{ fontWeight: 'bold', backgroundColor: "#D9D9D9" }}>Jumlah Pengguna</th>
                            <th style={{ fontWeight: 'bold', backgroundColor: "#D9D9D9" }}>Hak Akses</th>
                            <th style={{ fontWeight: 'bold', backgroundColor: "#D9D9D9" }}>Aksi</th>
                        </tr>
                        <tr>
                            <td scope="row">Admin</td>
                            <td>Untuk Administrator</td>
                            <td>2</td>
                            <td>Super Admin</td>
                            <td>
                                <div className="d-flex align-items-center bd-highlight mb-3"> 
                                    <i className="bi bi-list-ul  bd-highlight" style={{ color: '#229BD8' }}></i>
                                    <div style={{ height: "20px" }}>
                                        <p className="ms-2 me-4  bd-highlight">Detail</p>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td scope="row">Verifikator Propinsi</td>
                            <td>Untuk Verifikator Propinsi</td>
                            <td>10</td>
                            <td>Approve User Kab/Kota, Approve...</td>
                            <td>
                                <div className="d-flex align-items-center bd-highlight mb-3"> 
                                    <i className="bi bi-list-ul  bd-highlight" style={{ color: '#229BD8' }}></i>
                                    <div style={{ height: "20px" }}>
                                        <p className="ms-2 me-4  bd-highlight">Detail</p>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td scope="row">Verifikator Kab/Kota</td>
                            <td>Untuk Verifikator Kab/Kota</td>
                            <td>10</td>
                            <td>Approve Merchant Kab/Kota</td>
                            <td>
                                <div className="d-flex align-items-center bd-highlight mb-3"> 
                                    <i className="bi bi-list-ul  bd-highlight" style={{ color: '#229BD8' }}></i>
                                    <div style={{ height: "20px" }}>
                                        <p className="ms-2 me-4  bd-highlight">Detail</p>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td scope="row">Merchant</td>
                            <td>Untuk Merchant</td>
                            <td>1000</td>
                            <td>Merchant Feature</td>
                            <td>
                                <div className="d-flex align-items-center bd-highlight mb-3"> 
                                    <i className="bi bi-list-ul  bd-highlight" style={{ color: '#229BD8' }}></i>
                                    <div style={{ height: "20px" }}>
                                        <p className="ms-2 me-4  bd-highlight">Detail</p>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
          </div>  
        </>
      );
}