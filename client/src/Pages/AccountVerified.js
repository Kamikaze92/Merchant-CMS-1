import errorImage from '../assets/images/Frame 167.svg'
const VerifiedPage = {
    backgroundColor: "#094C6F",
    backgroundSize: "cover",
    width: "100%",
    height: "100vh"
  };

const Card = {
    backgroundColor: "white",
    border: "5px",
    borderRadius: "10px",
    padding: 20,
    boxShadow: "0px 24px 24px rgba(0, 0, 0, 0.25)",
    borderRadius: "12px"
  };

const CardFooter = {
    textAlign: "center",
    fontWeight: "200",
    fontSize: 12,
    paddingTop: "30px",
    marginTop: "70px", 
    marginBottom: "70px"
  }
export default function AccountVerified(){
    return (
        <div style={VerifiedPage}>
          <div className="register-form">
            <div className="container">
              <div className="row" style={{ justifyContent: "center" }}>
                <div className="col-7 mb-5 mt-5" style={Card}>
                  <div style={{ textAlign: "center" }}>
                    <img className="img-fluid"
                      src="https://www.pedulilindungi.id/assets/logo-with-text.svg"
                      alt="Peduli-lindungi-logo"
                      style={{ height: "70px", width: "200px", marginTop: "70px" }}
                    />
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <img className="img-fluid"
                      src={errorImage}
                      alt="Peduli-lindungi-logo"
                      style={{ height: "250px", width: "600px"}}
                    />
                  </div>
                  <div style={CardFooter} className="mt-3">
                    <h6 style={{ fontSize: 18, fontWeight: "bold"}}>
                      Email anda sudah terverifikasi
                    </h6>
                    <h6 style={{ fontSize: 14}}>
                      Kami akan mengirimkan link aktivasi akun anda untuk mengaktifkan akun.<br/>
                      Periksa email anda dalam kurun waktu 2x24 jam.
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}