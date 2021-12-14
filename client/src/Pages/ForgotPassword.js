import { useState } from "react";
import { Form } from "react-bootstrap";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

const ForgotPasswordPage = {
  backgroundColor: "#094C6F",
  minHeight: '100vh',
};
const PasswordForm = {
  backgroundColor: "white",
  border: "5px",
  borderRadius: "10px",
  padding: 20,
  boxShadow: "0px 24px 24px rgba(0, 0, 0, 0.25)",
  borderRadius: "12px",
};
const TextHeading = {
  color: "#0B4C6F",
  textAlign: "center",
  fontSize: 26,
  marginTop: "2rem",
};
const FormText = {
  color: "black",
  fontWeight: "600",
  fontSize: "14px",
  fontFamily: "Roboto",
  marginTop: 10,
  marginBottom: 10,
};

const RegisterFooter = {
  color: "#229BD8",
  textAlign: "center",
  fontWeight: "200",
  fontSize: 12,
  marginTop: 10,
  marginBottom: 10,
};

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [formEmail, setFormEmail] = useState({
    url: `${window.location.hostname}/set-password/1/1`,
    email: "",
  });
  const inputEmail = (e) => {
    const { name, value } = e.target;
    setFormEmail({
      ...formEmail,
      [name]: value,
    });
  };
  const resetPassword = async (e) => {
    try {
      e.preventDefault();
      const response = await axios({
        url: `${process.env.REACT_APP_BASE_URL}/forgot-password`,
        method: "POST",
        data: formEmail,
      })
      if(response.status == 200){
        //redirect ke page link
      }
      console.log(response.data.message)
      navigate("/login")
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div style={ForgotPasswordPage}>
      <div className="forgot-password">
        <div className="container">
          <div className="row" style={{ justifyContent: "center" }}>
            <div className="col-7 mb-5 mt-5" style={PasswordForm}>
              <div style={{ textAlign: "center" }}>
                <img
                  src="https://www.pedulilindungi.id/assets/logo-with-text.svg"
                  alt="Peduli-lindungi-logo"
                  style={{ height: "70px", width: "200px" }}
                />
                <h6 style={{ fontSize: 12, color: "#229BD8" }}>Merchant CMS</h6>
                <h4 style={TextHeading}>Reset Password</h4>
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
                      value={formEmail.email}
                      onChange={inputEmail}
                    />
                  </div>
                  <div className="d-grid gap-2 col-12 mt-3">
                    <button
                      className="btn"
                      type="submit"
                      style={{
                        backgroundColor: "#0277bd",
                        color: "whitesmoke",
                      }}
                      onClick={resetPassword}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
