import { useState, useEffect } from "react";
import errorImage1 from '../assets/images/Frame 167.svg'
import errorImage2 from '../assets/images/Illustration - Business, Startup, workflow, error _ exhaustion, exhausted, work, laptop, computer, support.svg'

const ErrorPageStyle = {
    backgroundColor: "#094C6F",
};
const ErrorCard = {
    backgroundColor: "white",
    border: "5px",
    borderRadius: "10px",
    padding: 20,
    boxShadow: "0px 24px 24px rgba(0, 0, 0, 0.25)",
    borderRadius: "12px"
};
const ErrorFooter = {
    textAlign: "center",
    fontWeight: "100",
    fontSize: 14,
    marginTop: 10,
    marginBottom: 10
  }


export default function ErrorPage() {
  document.body.style = `background: ${ErrorPageStyle.backgroundColor}`;
  return (
      <>
        <div style={ ErrorPageStyle }>
            <div className="register-form">
                <div className="container">
                <div className="row" style={{ justifyContent: "center" }}>
                    <div className="col-7 mb-5 mt-5" style={ ErrorCard }>
                    <div style={{ textAlign: "center" }}>
                        <img className="img-fluid"
                        src="https://www.pedulilindungi.id/assets/logo-with-text.svg"
                        alt="Peduli-lindungi-logo"
                        style={{ height: "70px", width: "200px" }}
                        />
                        <h6 style={{ fontSize: 12, color: "#229BD8" }}>Merchant CMS</h6>
                        <img className="img-fluid"
                        src={ errorImage1 }
                        alt="Peduli-lindungi-logo"
                        style={{ width: "600px" }}
                        />
                        <h5 className="mt-4" style={{ fontWeight: 'bold' }}>Akun anda sudah aktif</h5>
                        <p className="mt-4" style={ ErrorFooter }>Klik <a style={{ fontWeight: 'bold', color: '#229BD8' }}>di sini</a> untuk login</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

        <div style={ ErrorPageStyle }>
            <div className="register-form">
                <div className="container">
                <div className="row" style={{ justifyContent: "center" }}>
                    <div className="col-7 mb-5 mt-5" style={ ErrorCard }>
                    <div style={{ textAlign: "center" }}>
                        <img className="img-fluid"
                        src="https://www.pedulilindungi.id/assets/logo-with-text.svg"
                        alt="Peduli-lindungi-logo"
                        style={{ height: "70px", width: "200px" }}
                        />
                        <h6 style={{ fontSize: 12, color: "#229BD8" }}>Merchant CMS</h6>
                        <img className="img-fluid"
                        src={ errorImage1 }
                        alt="Peduli-lindungi-logo"
                        style={{ width: "600px" }}
                        />
                        <h1 className="mt-4" style={{ fontWeight: 'bold' }}>Ups!</h1>
                        <h5 className="mt-4" style={{ fontWeight: 'bold' }}>Link yang anda akses tidak dapat dibuka</h5>
                        <p className="mt-4" style={ ErrorFooter }>Klik <a style={{ fontWeight: 'bold', color: '#229BD8' }}>di sini</a> untuk login</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

        <div style={ ErrorPageStyle }>
            <div className="register-form">
                <div className="container">
                <div className="row" style={{ justifyContent: "center" }}>
                    <div className="col-7 mb-5 mt-5" style={ ErrorCard }>
                    <div style={{ textAlign: "center" }}>
                        <img className="img-fluid"
                        src="https://www.pedulilindungi.id/assets/logo-with-text.svg"
                        alt="Peduli-lindungi-logo"
                        style={{ height: "70px", width: "200px" }}
                        />
                        <h6 style={{ fontSize: 12, color: "#229BD8" }}>Merchant CMS</h6>
                        <img className="img-fluid"
                        src={ errorImage2 }
                        alt="Peduli-lindungi-logo"
                        style={{ width: "300px" }}
                        />
                        <h1 className="mt-4" style={{ fontWeight: 'bold' }}>Ups!</h1>
                        <h5 className="mt-4" style={{ fontWeight: 'bold' }}>Link aktivasi akun Anda telah Kadaluarsa</h5>
                        <p className="mt-4" style={ ErrorFooter }>Klik <a style={{ fontWeight: 'bold', color: '#229BD8' }}>di sini</a> untuk mengirim ulang email aktivasi akun</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
      </>
  );
}