import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import axios from '../config/server'
import {Link} from 'react-router-dom'

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

const RegisterFooter = {
  color: "#229BD8",
  textAlign: "center",
  fontWeight: "200",
  fontSize: 12,
  marginTop: 10,
  marginBottom: 10
}

export default function RegisterVerificator() {
  let navigate = useNavigate();
  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);
  const [isLoading, setLoading] = useState(false)
  const [isProvince, setIsProvince] = useState(false)
  const [isCity, setIsCity] = useState(false)
  const [isCityFlag, setIsCityFlag] = useState(false)
  const [formData, setFormData] = useState({
    user_type: 'Verifier',
    full_name: '',
    email: '',
    phone_number: '',
    province_id: null,
    city_id: null,
    institution: '',
    Verifier: ''
  });
    useEffect(async() => {
      if (!provinces.length) {
        const { data } = await axios({
          url: `${process.env.REACT_APP_BASE_URL}/provinces`,
          method: 'GET',
        });
        setProvinces([
          ...data,
        ]);
      }
      if (formData.province_id) {
        const prov = provinces.filter(e => e.id === +formData.province_id)[0];
        setCities([
          ...prov.Cities,
        ])
      }
      if (formData.Verifier && formData.Verifier === 'Kab/Kota' && formData.province_id) {
        setIsCityFlag(true)
      }
    }, [formData.province_id]);
    useEffect(() => {
      if (formData.Verifier && formData.Verifier === 'Provinsi') {
        console.log('provin?');
        setIsProvince(true)
        setIsCity(false)
        setIsCityFlag(false)
      } else if (formData.Verifier && formData.Verifier === 'Kab/Kota') {
        setIsProvince(false)
        setIsCity(true)
        if (formData.province_id) {
          setIsCityFlag(true)
        } else {
          setIsCityFlag(false)
        }
      }
    }, [formData.Verifier])
    const handleFormDataChange = (e) => {
      const { name, value } = e.target;
      if (name === 'Verifier' && value === 'Provinsi') {
        setIsProvince(true)
        setIsCity(false)
        setIsCityFlag(false)
      } else if (name === 'Verifier' && value === 'Kab/Kota') {
        setIsProvince(false)
        setIsCity(true)
        if (formData.province_id) {
          setIsCityFlag(true)
        } else {
          setIsCityFlag(false)
        }
      }
      let obj = {
        ...formData,
        [name]: value
      }
      if (name === 'province_id') {
        obj['city_id'] = 'disabled'
      }
      setFormData(obj);
    }

    const handleFormSubmit = async (e) => {
      setLoading(true)
      e.preventDefault()
      try {
        let obj = {
          user_type: formData.user_type,
          full_name: formData.full_name,
          email: formData.email,
          phone_number: formData.phone_number,
          province_id: formData.province_id,
          city_id: formData.Verifier==="Kab/Kota"?formData.city_id: null,
          institution: formData.institution
        }
        if (!obj['full_name']) {
          throw {
            message: 'Name is required'
          }
        }
        if (!obj['email']) {
          throw {
            message: 'Email is required'
          }
        }
        if (!obj['phone_number']) {
          throw {
            message: 'Mobile phone is required'
          }
        }
        if (!obj['institution']) {
          throw {
            message: 'Institution is required'
          }
        }

        if (!obj['province_id']) {
          throw {
            message: 'Province is required'
          }
        }
        if (formData.Verifier === "Kab/Kota") {
          if (!obj['city_id'] || obj['city_id'] === 'disabled') {
            throw {
              message: 'City is required'
            }
            
          }
        }
        
        let response = await axios({
          method: 'post',
          url:'register',
          data: obj
        })
        setLoading(false)
        navigate('otp-verification/${response.data.id}/${response.data.token}')
      } catch (error) {
        if (error.message && !error.response.data) {
          setLoading(false)
        } else {
          console.log(error.response.data.message, '>>>>>>');
          setLoading(false)
        }
        setLoading(false)
      }
    }
    const [isButtonRegisterClicked, setIsButtonRegisterClicked] = useState(false);
    //Tinggal tambahin formSubmit kayak di register merchant, tombol spinner nanti langsung bekerja
  return (
    <div style={RegisterPage}>
      <div className="register-form">
        <div className="container">
          <div className="row" style={{ justifyContent: "center" }}>
            <div className="col-7 mb-5 mt-5" style={RegisterForm}>
              <div style={{ textAlign: "center" }}>
                <img className="img-fluid"
                  src="https://www.pedulilindungi.id/assets/logo-with-text.svg"
                  alt="Peduli-lindungi-logo"
                  style={{ height: "70px", width: "200px" }}
                />
                <h6 style={{ fontSize: 12, color: "#229BD8" }}>Merchant CMS</h6>
                <h4 style={RegisterHeading}>
                  Register Akun Verificator QR Code PeduliLindungi
                </h4>
              </div>
              <form onSubmit={handleFormSubmit}>
                {/* <!--Email--> */}
                <div className="px-1 py-1">
                  <div>
                    <label className="form-label" style={FormText}>
                      Nama Lengkap
                    </label>
                    <input
                    onChange={handleFormDataChange}
                    value={formData.full_name}
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
                      value={formData.email}
                      onChange={handleFormDataChange}
                      type="email"
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
                    value={formData.phone_number}
                      onChange={handleFormDataChange}
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
                    value={formData.institution}
                      onChange={handleFormDataChange}
                      type="text"
                      className="form-control"
                      name="institution"
                      placeholder="Instansi"
                    />
                  </div>
                  <div className="mt-2">
                    <label className="form-label" style={FormText}>
                      Kategori Pengguna
                    </label>
                    <div className="input-group ">
                      <select onChange={handleFormDataChange} className="form-select" name="Verifier">
                        {/**Sampel */}
                        <option value="disabled" selected disabled>
                          Pilih Kategori
                        </option>
                        <option value="Provinsi">Verifikator Provinsi</option>
                        <option value="Kab/Kota">Verifikator Kab/Kota</option>
                      </select>
                    </div>
                  </div>
                  {
                    isCity? 
                    <SelectProvinces provinces={provinces}/>
                    :isProvince? <SelectProvinces provinces={provinces}/> : null
                  }

                  {
                    isCityFlag?
                     <div className="mt-2">
                     <label className="form-label" style={FormText}>
                       Kota
                     </label>
                     <div className="input-group ">
                       <select className="form-select" value={formData.city_id} onChange={handleFormDataChange} name="city_id">
                         {/**Sampel */}
                         <option value="disabled" selected disabled>
                           Pilih Kota
                         </option>
                         {
                           cities?cities.map(el => {
                             return <option key={el.id} value={el.id}>
                             {el.name}
                           </option>
                           }): null
                         }
                         
                       </select>
                     </div>
                   </div> : null
 
                  }
                  
                </div>
                {
                  isLoading? <div className="d-grid gap-2 col-12 mt-3">
                  <button className="btn" type="button" disabled>
                  <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                  Loading...
                </button></div>:<div className="d-grid gap-2 col-12 mt-3">
                  <button
                    className="btn"
                    type="submit"
                    style={{ backgroundColor: "#0277bd", color: "whitesmoke" }}
                  >
                    Masuk
                  </button>
                  <button
                    className={isButtonRegisterClicked ? "btn btn-primary" : "btn btn-primary d-none"}
                    type="submit"
                    style={{ backgroundColor: "#0277bd", color: "whitesmoke" }}
                    disabled
                  >
                  <span class="spinner-border spinner-border-sm text-white" role="status"></span>
                  </button>
                </div>
                }
              </form>
              <div style={RegisterFooter} className="mt-3">
                <h6 style={{ fontColor: '#229BD8', fontSize: 14}}>
                  Sudah punya akun? 
                  <Link to="/login">
                  <p style={{display:'inline'}} className="text-info text-decoration-none"><strong>
                    Login
                    </strong></p>
                  </Link>
                </h6>
                <h6 style={{ fontColor: '#229BD8', fontSize: 14}}>
                  Sudah melakukan registrasi?{" "}
                  <Link to="/check-status">
                  <p style={{display:'inline'}} className="text-info text-decoration-none"><strong>
                    Periksa status registrasi akun anda
                    </strong></p>
                  </Link>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
  function SelectProvinces({provinces}) {
    return <div className="mt-2">
    <label className="form-label" style={FormText}>
      Provinsi
    </label>
    <div className="input-group ">
      <select onChange={handleFormDataChange} value={formData.province_id} className="form-select" name="province_id">
        {/**Sampel */}
        <option value="disabled" selected disabled>
          Pilih Kategori
        </option>
        { provinces?.map(province => {
          return (<option value={province.id} key={province.id}>{province.name}</option>)
        })}
      </select>
    </div>
  </div>

  }

}
