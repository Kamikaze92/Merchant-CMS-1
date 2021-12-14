import {useState} from "react"
import axios from 'axios'
import {Link, useParams, useNavigate} from "react-router-dom"
const RegisterPage = {
  backgroundColor: "#094C6F",
  backgroundSize: "cover",
  width: "100%",
  height: "100vh"
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

export default function SetPassword() {
  const [formInput, setFormInput] = useState({
    password: '',
    password2: '',
  })

  const changeFormInput = (e) => {
      const value = e.target.value;
      const field = e.target.name;
      setFormInput({
          ...formInput,
          [field]: value
      })
  }
  const {id, token} = useParams()
  const navigate = useNavigate()
  const changePassword = async (e) => {
    e.preventDefault()
    try {
      await axios({
        url: `http://localhost:3000/reset-password/${id}/${token}`,
        method: 'post',
        data: formInput,
      })
      navigate('/login')
    } catch (error) {
      console.log(error);
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
                  Buat Password Akun
                </h4>
              </div>
              <form method="get" onSubmit={changePassword}>
                <div className="px-1 py-1">
                    <div>
                        <label className="form-label" style={FormText}>
                        Password Baru
                        </label>
                        <input
                        id="inputForm"
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Create Password"
                        value={formInput.password}
                        onChange={changeFormInput}
                        />
                    </div>
                    <div>
                        <label className="form-label" style={FormText}>
                        Konfirmasi Password Baru
                        </label>
                        <input
                        id="inputForm"
                        type="password"
                        className="form-control"
                        name="password2"
                        placeholder="Confirm Password"
                        value={formInput.password2}
                        onChange={changeFormInput}
                        />
                    </div>
                    <div className="d-grid gap-2 col-12 mt-3">
                        <button
                            className="btn"
                            type="submit"
                            style={{ backgroundColor: "#0277bd", color: "whitesmoke" }}
                            
                        >
                            Submit
                        </button>
                    </div>
                </div>
              </form>
              <div className="mb-4 text-center mt-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
