import { useState } from "react";
import { Form } from "react-bootstrap";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";
import { Link, Navigate, useNavigate } from "react-router-dom";
import successImage from '../assets/images/Frame 167.svg'
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
  const [formEmail, setFormEmail] = useState({
    url: `${window.location.hostname}/set-password`,
    email: "",
  });
  const [text, setText] = useState('Reset Password')
  const [isValid, setIsValid] = useState(false)
  const [emptyUser, setEmptyUser] = useState(false)
  const [isLoading, setLoading] = useState(false)
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
      setLoading(true)
      setEmptyUser(false)
      if (!formEmail.email) {
        setEmptyUser(true)
        setLoading(false)
      } else {        
        const response = await axios({
          url: `${process.env.REACT_APP_BASE_URL}/forgot-password`,
          method: "POST",
          data: formEmail,
        })
        setEmptyUser(false)
        setIsValid(true)
        setText('Verify Password')
        setLoading(false)
      }
    } catch (error) {
      setLoading(false)
      setEmptyUser(true)
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
                <h4 style={TextHeading}>{text}</h4>
              </div>
              {
                isValid? 
                <>
                <img style={{marginTop: '-100px', marginLeft:'40px'}} src={successImage}></img>
                <p style={{textAlign: 'center', marginTop: '10px'}}>Please check your email for your information to update new password.</p>
                </> :  <form>
                <div className="px-1 py-1">
                  {emptyUser?
                <div id="is-valid-password" className="mt-3">
                  <div>
                    <strong>Tidak ada akun dengan nama pengguna tersebut.</strong><br/>
                    <u>Temukan nama pengguna Anda disini.</u>
                  </div> 
                </div> : null
                  }
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
                  {
                    isLoading?<div className="d-grid gap-2 col-12 mt-3">
                    <button className="btn" type="button" disabled>
                    <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                    Loading...
                  </button></div>: <div className="d-grid gap-2 col-12 mt-3">
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
                  }
                  
                </div>
              </form> 
              }
              {
                isValid? <Link to="/login" style={{textDecoration:'none', color:'black', marginLeft:'230px'}}>Kembali ke halaman <span style={{color:'#229BD8'}}><u>login</u></span></Link> :
              <Link to="/login" style={{textDecoration:'none', color:'black'}}>Kembali ke halaman <span style={{color:'#229BD8'}}><u>login</u></span></Link>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
