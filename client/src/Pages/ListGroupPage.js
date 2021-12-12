import Navbar from "../Components/Navbar";

export default function ListGroupPage () {
    return (
        <>
          <Navbar></Navbar>
          <div className="container">
            <div className="row">
                <p>Administrasi - Group</p>
                <p style={{ fontWeight: 'bold', fontSize: '20px' }}>Daftar Group Pengguna</p>
            </div>
            <div className="row">
                <div className="col d-flex justify-content-center">
                    <div className="col-5 d-flex align-items-center">
                        <input class="form-control me-2" placeholder="Cari Nama Grup"/>
                        <div style={{ height: '38px' }}>
                            <p className="btn" style={{ color: '#f8f8f8', backgroundColor: '#229BD8' }}>Cari</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
  
          <div className="container mt-5">
            <div className="row">
                <div className="col d-flex align-items-center bd-highlight mb-3">
                    <div className="me-auto bd-highlight" style={{ height: '20px' }}>
                        <p style={{ fontWeight: 'bold' }}>Akun Grup Baru</p>
                    </div>
                    <div className="d-flex align-items-center p-2 bd-highlight" style={{ color: '#f8f8f8', backgroundColor: '#229BD8', height: '40px' }}>
                        <i className="bi bi-plus-lg"></i>
                        <p className="m-2">Tambah Pengguna</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <table class="table">
                    <tbody>
                        <tr>
                            <th scope="row"><p style={{ fontWeight: 'bold' }}>Nama Grup</p></th>
                            <th><p style={{ fontWeight: 'bold' }}>Deskripsi</p></th>
                            <th><p style={{ fontWeight: 'bold' }}>Jumlah Pengguna</p></th>
                            <th><p style={{ fontWeight: 'bold' }}>Hak Akses</p></th>
                            <th><p style={{ fontWeight: 'bold' }}>Aksi</p></th>
                        </tr>
                        <tr>
                            <td scope="row">Admin</td>
                            <td>Untuk Administrator</td>
                            <td>2</td>
                            <td>Super Admin</td>
                            <td>
                                <div className="d-flex align-items-center bd-highlight mb-3"> 
                                    <i class="bi bi-list-ul  bd-highlight" style={{ color: '#229BD8' }}></i>
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
                                    <i class="bi bi-list-ul  bd-highlight" style={{ color: '#229BD8' }}></i>
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
                                    <i class="bi bi-list-ul  bd-highlight" style={{ color: '#229BD8' }}></i>
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
                                    <i class="bi bi-list-ul  bd-highlight" style={{ color: '#229BD8' }}></i>
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