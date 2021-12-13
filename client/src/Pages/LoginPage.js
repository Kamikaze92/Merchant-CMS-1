import { useState, useEffect } from "react";

const LoginPageStyle = {
  backgroundColor: "#094C6F",
};
const LoginForm = {
  backgroundColor: "white",
  border: "5px",
  borderRadius: "10px",
  padding: 20,
  boxShadow: "0px 24px 24px rgba(0, 0, 0, 0.25)",
  borderRadius: "12px"
};
const LoginHeading = {
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

const LoginFooter = {
  color: "#229BD8",
  textAlign: "center",
  fontWeight: "200",
  fontSize: 12,
  marginTop: 10,
  marginBottom: 10
}

export default function LoginPage() {
  document.body.style = `background: ${LoginPageStyle.backgroundColor}`;
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });

  const handleFormDataChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setLoginForm({
      ...loginForm,
      [name]: value
    });
  }

  const login = (e) => {
    e.preventDefault();
    console.log('login Feature');  
  }
  return (
    <div style={ LoginPageStyle }>
      <div className="register-form">
        <div className="container">
          <div className="row" style={{ justifyContent: "center" }}>
            <div className="col-7 mb-5 mt-5" style={ LoginForm }>
              <div style={{ textAlign: "center" }}>
                <img className="img-fluid"
                  src="https://www.pedulilindungi.id/assets/logo-with-text.svg"
                  alt="Peduli-lindungi-logo"
                  style={{ height: "70px", width: "200px" }}
                />
                <h6 style={{ fontSize: 12, color: "#229BD8" }}>Merchant CMS</h6>
                <h4 style={ LoginHeading }>
                  Login Akun Merchant QR Code PeduliLindungi
                </h4>
              </div>
              <form onSubmit={(e) => login(e)}>
                <div className="px-1 py-1">
                  <div className="mt-2">
                    <label className="form-label" style={FormText}>
                      Email
                    </label>
                    <input
                      id="email"
                      type="text"
                      className="form-control"
                      name="email"
                      placeholder="Email"
                      value={ loginForm.email }
                      onChange={handleFormDataChange}
                    />
                  </div>
                  <label className="form-label" style={FormText}>
                      Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="Password"
                      value={ loginForm.password }
                      onChange={handleFormDataChange}
                    />
                </div>
                <div className="d-grid gap-2 col-12 mt-3">
                  <button
                    className="btn"
                    type="submit"
                    style={{ backgroundColor: "#0277bd", color: "whitesmoke" }}
                  >
                    Register
                  </button>
                </div>
              </form>
              <div style={LoginFooter} className="mt-3">
                <h6 style={{ fontColor: '#229BD8', fontSize: 12}}>
                  Belum punya akun? <a href="#"  className="text-info text-decoration-none"><strong>Register</strong></a>
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
