const RegisterPage = {
  backgroundColor: "#094C6F"
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

export default function RegisterVerificator() {
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
                  Register Akun Verificator QR Code PeduliLindungi
                </h4>
              </div>
              <form>
                {/* <!--Email--> */}
                <div className="px-1 py-1">
                  <div>
                    <label className="form-label" style={FormText}>
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="full_name"
                      placeholder="Nama Lengkap"
                    />
                  </div>
                  <div className="mt-2">
                    <label className="form-label" style={FormText}>
                      Email
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="mt-2">
                    <label className="form-label" style={FormText}>
                      Nomor HP
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      name="phone_number"
                      placeholder="+62"
                    />
                  </div>
                  <div className="mt-2">
                    <label className="form-label" style={FormText}>
                      Instansi
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      name="phone_number"
                    />
                  </div>
                  <div className="mt-2">
                    <label className="form-label" style={FormText}>
                      Kategori Pengguna
                    </label>
                    <div className="input-group ">
                      <select class="form-select">
                        {/**Sampel */}
                        <option selected disabled>
                          Pilih Kategori
                        </option>
                        <option value="1">Admin</option>
                        <option value="2">Verifikator Provinsi</option>
                        <option value="3">Verifikator Kab/Kota</option>
                        <option value="3">Merchant</option>
                      </select>
                    </div>
                  </div>
                  <div className="mt-2">
                    <label className="form-label" style={FormText}>
                      Provinsi
                    </label>
                    <div className="input-group ">
                      <select class="form-select">
                        {/**Sampel */}
                        <option selected disabled>
                          Pilih Kategori
                        </option>
                        <option value="1">Sumatera Barat</option>
                        <option value="2">Sumatera Utara</option>
                        <option value="3">Sumatera Selatan</option>
                      </select>
                    </div>
                  </div>
                  <div className="mt-2">
                    <label className="form-label" style={FormText}>
                      Kota
                    </label>
                    <div className="input-group ">
                      <select class="form-select">
                        {/**Sampel */}
                        <option selected disabled>
                          Pilih Kota
                        </option>
                        <option value="1">Padang</option>
                        <option value="2">Medan</option>
                        <option value="3">Sumedang</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="d-grid gap-2 col-12 mt-3">
                  <button
                    className="btn"
                    type="submit"
                    style={{ backgroundColor: "#0277bd", color: "whitesmoke" }}
                  >
                    Masuk
                  </button>
                </div>
              </form>
              <div style={RegisterFooter} className="mt-3">
                <h6 style={{ fontColor: '#229BD8', fontSize: 12}}>
                  Sudah punya akun? <a href="#"  className="text-info text-decoration-none"><strong>Login</strong></a>
                </h6>
                <h6 style={{ fontColor: '#229BD8', fontSize: 12}}>
                  Sudah melakukan registrasi?{" "}
                  <a href="#" className="text-info text-decoration-none"><strong>Periksa status registrasi akun anda</strong></a>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
