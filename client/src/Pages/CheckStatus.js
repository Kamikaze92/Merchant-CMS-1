import { Form } from "react-bootstrap";

const RegisterPage = {
  backgroundColor: "#094C6F",
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

const RegisterFooter = {
  color: "#229BD8",
  textAlign: "center",
  fontWeight: "200",
  fontSize: 12,
  marginTop: 10,
  marginBottom: 10
}

export default function RegisterMerchant() {
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
              <form>
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
              <div id="reason" className="mt-3">
                <div>
                    <strong>Menunggu Proses Persetujuan Akun</strong><br/>
                    Mohon Menunggu 2x24 jam untuk penyetujuan akun
                </div>
              </div>
              <div id="reason" className="mt-3">
                <div>
                    <strong>Sudah Disetujui</strong><br/>
                    Akun anda sudah disetujui. Aktifkan akun anda dengan mengklik link aktivasi akun yang sudah dikirimkan melalui email. Jika anda belum menerima email aktivasi, klik
                    <a href="#" className="text-dark mx-1 text-decoration-none"><strong>di sini</strong></a> 
                     untuk mengirimkan ulang email aktivasi
                </div>
              </div>
              <div id="reason" className="mt-3">
                <div>
                    <strong>Sudah Aktif</strong><br/>
                    Akun anda sudah aktif, harap login melalui
                    <a href="#" className="text-dark mx-1 text-decoration-none"><strong>Halaman ini</strong></a> 
                </div>
              </div>
              <div id="reason" className="mt-3">
                <div>
                    <strong>Ditolak</strong><br/>
                    Pembuatan akun anda ditolak karena [alasan penolakan]. Jika Anda masih membutuhkan akun, harap registrasi ulang 
                    <a href="#" className="text-dark mx-1 text-decoration-none"><strong>di sini</strong></a>
                </div>
              </div>
              <div id="reason" className="mt-3">
                <div>
                    <strong>Email Tidak Ditemukan</strong><br/>
                    Email Anda belum terdaftar di sistem kami, harap lakukan registrasi
                    <a href="#" className="text-dark mx-1 text-decoration-none"><strong>di sini</strong></a>
                </div>
              </div>
              <div className="mb-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
