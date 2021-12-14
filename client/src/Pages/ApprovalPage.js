import approveImage from '../assets/images/Frame 167.svg'
import errorImage from '../assets/images/Frame 168.png'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
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
    const {error, setError} = useState()
    const {id, token} = useParams()
    const updateStatus = async () => {
        try {
          await axios({
            url: `http://localhost:3000/approve-user/${id}/${token}`,
            method: 'patch'
          })  
        } catch (err) {
            setError(err)
            console.log(err)
        }
    }

    useEffect(() => {updateStatus()}, [])
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
                  { error ? (
                    <>
                    <div style={{ textAlign: "center" }}>
                    <img className="img-fluid"
                        src={errorImage}
                        alt="Peduli-lindungi-logo"
                        style={{ height: "250px", width: "600px"}}
                    />
                    </div>
                    <div style={CardFooter} className="mt-3">
                    <h6 style={{ fontSize: 24, fontWeight: "bold"}}>
                        Ups.
                    </h6>
                    <h6 style={{ fontSize: 18, fontWeight: "bold"}}>
                        Link aktivasi akun anda sudah kadaluarsa.
                    </h6>
                    <h6 style={{ fontSize: 14}}>
                        klik di sini untuk mengirim ulang link aktivasi
                    </h6>
                    </div>
                    </>
                  ) : (
                    <>
                    <div style={{ textAlign: "center" }}>
                    <img className="img-fluid"
                      src={approveImage}
                      alt="Peduli-lindungi-logo"
                      style={{ height: "250px", width: "600px"}}
                    />
                  </div>
                  <div style={CardFooter} className="mt-3">
                    <h6 style={{ fontSize: 18, fontWeight: "bold"}}>
                      Akun anda sudah aktif.
                    </h6>
                    <h6 style={{ fontSize: 14}}>
                      Silahkan login <Link to="/login"><a>di sini</a></Link>
                    </h6>
                  </div>
                  </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}