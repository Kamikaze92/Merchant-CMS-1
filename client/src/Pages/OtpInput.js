import {useEffect, useState} from "react"

const OtpPage = {
    backgroundColor: "#094C6F",
    fontFamily: 'Roboto',
  };
  const Card = {
    backgroundColor: "white",
    border: "5px",
    borderRadius: "10px",
    boxShadow: "0px 24px 24px rgba(0, 0, 0, 0.25)",
    borderRadius: "12px",
    padding: "32px"
  };

  const OtpInput = {
    paddingLeft: "15px",
    letterSpacing: "42px",
    border: 0,
    backgroundImage: "linear-gradient(to left, black 70%, rgba(255, 255, 255, 0) 0%)",
    backgroundPosition: "bottom",
    backgroundSize: "50px 1px",
    backgroundRepeat: "repeat-x",
    backgroundPositionX: "35px",
    width: "220px",
    minWidth: "220px",
  }
  
  export default function RegisterMerchant() {
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
      <div style={OtpPage}>
        <div className="register-form">
          <div className="container">
            <div className="row" style={{ justifyContent: "center" }}>
              <div className="col-6 mb-5 mt-5" style={Card}>
                <div style={{ textAlign: "center" }}>
                  <img
                    src="https://www.pedulilindungi.id/assets/logo-with-text.svg"
                    alt="Peduli-lindungi-logo"
                    style={{ height: "70px", width: "200px" }}
                  />
                  <h6 style={{ fontSize: 12, color: "#0277bd" }}>Merchant CMS</h6>
                  <img 
                    src="https://ik.imagekit.io/fjaskqdnu0xp/logo-email_Vztzgz4bl.png?updatedAt=1639203405172"
                    alt="email-logo"
                    style={{height: "80px", width: "80px", padding: 0 }} 
                  />
                  <h4 style={{fontSize: 18, fontColor: "#0B4C6F"}} className="mb-5">Verifikasi Email</h4>
                  <h6 style={{fontSize: 12}}>Masukan 6 digit kode verifikasi yang telah kami kirimkan ke email</h6>
                </div>
                <form className="justify-content-center">
                <div id="divOuter">
                  <div id="divInner">
                      <input id="partitioned" className="mt-5 mb-3" type="text" maxLength="6"/>
                  </div>
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
                    cek folder spam anda, atau kirim ulang kode verifikasi
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