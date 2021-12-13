import {useState} from "react"
import axios from 'axios'
import {Link} from "react-router-dom"
const RegisterPage = {
  backgroundColor: "#094C6F",
  backgroundSize: "cover",
  width: "100%",
  minHeight: "100vh"
};
const RegisterForm = {
  backgroundColor: "white",
  border: "5px",
  borderRadius: "10px",
  padding: 20,
  boxShadow: "0px 24px 24px rgba(0, 0, 0, 0.25)",
  borderRadius: "12px"
};
const RegisterHeading = {
  color: "#0B4C6F",
  textAlign: "center",
  fontSize: 26,
  marginTop: "2rem",
};
const FormText = {
  color: "black",
  fontWeight: "600",
  fontSize: "14px",
  fontFamily: 'Roboto',
  marginTop: 10,
  marginBottom: 10,
};

export default function CheckStatus() {
  const [status, setStatus] = useState();
  const [formInput, setFormInput] = useState({
    email: '',
  })

  const changeFormInput = (e) => {
      const value = e.target.value;
      const field = e.target.name;
      setFormInput({
          ...formInput,
          [field]: value
      })
  }
  const fetchStatus = async (e) => {
    e.preventDefault()
    try {
      console.log(formInput, '<<<<') 
      const response = await axios({
        url: `http://localhost:3000/check-status`,
        method: 'post',
        data: formInput,
      })
      setStatus(response.data.status)
      console.log(response)
    } catch (error) {
      console.log(error);
      // error
    }
  }

  return (
    <div style={RegisterPage}>
      <div className="register-form">
        <div className="container">
          <div className="row" style={{ justifyContent: "center" }}>
            <div className="col-7 mb-5 mt-5" style={RegisterForm}>
              <div style={{ textAlign: "center" }}>
                <img
                  src="https://www.pedulilindungi.id/assets/logo-with-text.svg"
                  alt="Peduli-lindungi-logo"
                  style={{ height: "70px", width: "200px" }}
                />
                <h6 style={{ fontSize: 12, color: "#229BD8" }}>Merchant CMS</h6>
                <h4 style={RegisterHeading}>
                  Periksa Status Akun
                </h4>
              </div>
              <form method="get" onSubmit={fetchStatus}>
                <div className="px-1 py-1">
                    <div>
                        <label className="form-label" style={FormText}>
                        Alamat Email
                        </label>
                        <input
                        id="inputForm"
                        type="text"
                        className="form-control"
                        name="email"
                        placeholder="Alamat Email"
                        value={formInput.email}
                        onChange={changeFormInput}
                        />
                    </div>
                    <div className="d-grid gap-2 col-12 mt-3">
                        <button
                            className="btn"
                            type="submit"
                            style={{ backgroundColor: "#0277bd", color: "whitesmoke" }}
                            
                        >
                            Periksa
                        </button>
                    </div>
                </div>
              </form>
              {status === "Menunggu Proses Persetujuan Akun" && (
                <div id="reason" className="mt-3">
                  <div>
                    <strong>Menunggu Proses Persetujuan Akun</strong><br/>
                    Mohon Menunggu 2x24 jam untuk penyetujuan akun
                  </div>
                </div>
              )}
              {status === "Sudah Disetujui" && (
              <div id="reason" className="mt-3">
                <div>
                    <strong>Sudah Disetujui</strong><br/>
                    Akun anda sudah disetujui. Aktifkan akun anda dengan mengklik link aktivasi akun yang sudah dikirimkan melalui email. Jika anda belum menerima email aktivasi, klik
                    <a href="#" className="text-dark mx-1 text-decoration-none"><strong>di sini</strong></a> 
                     untuk mengirimkan ulang email aktivasi
                </div>
              </div>
              )}
              {status === "Sudah Aktif" && (
              <div id="reason" className="mt-3">
                <div>
                    <strong>Sudah Aktif</strong><br/>
                    Akun anda sudah aktif, harap login melalui
                    <Link to={'/login'}>
                    <a href="#" className="text-dark mx-1 text-decoration-none"><strong>Halaman ini</strong></a> 
                    </Link>
                </div>
              </div>
              )}
              {status === "Ditolak" && (
              <div id="reason" className="mt-3">
                <div>
                    <strong>Ditolak</strong><br/>
                    Pembuatan akun anda ditolak karena [alasan penolakan]. Jika Anda masih membutuhkan akun, harap registrasi ulang
                    <Link to="/login">
                    <a href="#" className="text-dark mx-1 text-decoration-none"><strong>di sini</strong></a>
                    </Link> 
                </div>
              </div>
              )}
              {status === "Email Tidak Ditemukan" && (
              <div id="reason" className="mt-3">
                <div>
                    <strong>Email Tidak Ditemukan</strong><br/>
                    Email Anda belum terdaftar di sistem kami, harap lakukan registrasi
                    <Link to="/login">
                    <a href="#" className="text-dark mx-1 text-decoration-none"><strong>di sini</strong></a>
                    </Link>
                </div>
              </div>
              )}
              <div className="mb-4 text-center mt-4">
                <Link to="/login">
                  <a href="#" className="text-info text-decoration-none"><strong>Kembali ke Login</strong></a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
