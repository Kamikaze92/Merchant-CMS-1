import {useEffect, useState} from "react"

export default function OtpInput() {
    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(2)
  
    const setTime = () => {
        if(seconds == 0 && minutes == 0){
            return null
        }
        if (seconds == 0) {
            setMinutes(minutes => minutes - 1);
            setSeconds(59);
        } else {
            setSeconds(seconds => seconds - 1);
        }
    }

    useEffect(() => {
        const timer = setTimeout(setTime, 1000)
        return function cleanUp() {
          clearTimeout(timer);
        }
    })

    return (
      <div id="otpPage">
        <div className="register-form">
          <div className="container">
            <div className="row" style={{ justifyContent: "center" }}>
              <div className="col-7 mb-5 mt-5" id="cardOtp">
                <div style={{ textAlign: "center" }}>
                  <img className="img-fluid"
                    src="https://www.pedulilindungi.id/assets/logo-with-text.svg"
                    alt="Peduli-lindungi-logo"
                    style={{ height: "70px", width: "200px" }}
                  />
                  <h6 style={{ fontSize: 12, color: "#0277bd" }}>Merchant CMS</h6>
                  <img className="img-fluid"
                    src="https://ik.imagekit.io/fjaskqdnu0xp/logo-email_Vztzgz4bl.png?updatedAt=1639203405172"
                    alt="email-logo"
                    style={{height: "100px", width: "100px", padding: 0 }} 
                  />
                  <h4 style={{fontSize: 18, fontColor: "#0B4C6F"}} className="mb-2"><strong>Verifikasi Email</strong></h4>
                  <h6 style={{fontSize: 12}}>Masukan 6 digit kode verifikasi yang telah kami kirimkan ke email</h6>
                </div>
                <form className="justify-content-center">
                <div id="divOuter">
                  <div id="divInner">
                      <input id="partitioned" className="mt-5 mb-3" type="text" maxlength="6"/>
                  </div>
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
                <div
                  className="mt-2"
                  style={{
                    textAlign: "center",
                    fontSize: 12
                  }}
                >
                  <h8 className="my-3">
                    Jika anda tidak menerima email, silahkan 
                    cek folder spam anda, atau <br/> kirim ulang kode verifikasi
                    {seconds == 0 && minutes == 0 ? (
                        <a href="#" className="text-decoration-none mb-3 mx-1">Resend OTP</a>
                        ) : (
                            <span className="mx-2">({minutes}:{seconds})</span>
                        )} 
                  </h8><br/>
                  <h8 className="my-3">
                    Ingin mengubah email? 
                    <a href="#" className="text-dark text-decoration-none mx-1"><strong>Registrasi Ulang</strong></a>
                  </h8>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }