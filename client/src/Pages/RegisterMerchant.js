import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const RegisterPage = {
  backgroundColor: "#094C6F",
  height: "130vh"
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

export default function RegisterMerchant() {
  let navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [tenantCategories, setTenantCategories] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);

  const [isTenant, setIsTenant] = useState('true');
  const [formData, setFormData] = useState({
    user_type: 'Merchant',
  });
  
  const fetchCategories = async () => {
    const { data } = await axios({
      url: `${process.env.REACT_APP_BASE_URL}/categories`,
      method: 'GET',
    });
    setCategories([
      ...data.filter(e => !e.is_tenant_category && !e.parent_id),
    ]);
    setTenantCategories([
      ...data.filter(e => e.is_tenant_category),
    ]);
  };

  const fetchProvinces = async () => {
    const { data } = await axios({
      url: `${process.env.REACT_APP_BASE_URL}/provinces`,
      method: 'GET',
    });
    setProvinces([
      ...data,
    ]);
  };

  useEffect(() => {
    fetchCategories();
    fetchProvinces();
  }, []);

  useEffect(() => {
    const subcat = categories.filter(e => e.id === +formData.category_id)[0];
    if (formData.category_id) {
      setSubCategories([
        ...subcat.sub_category,
      ])
    }
  }, [formData.category_id]);

  useEffect(() => {
    const prov = provinces.filter(e => e.id === +formData.province_id)[0];
    if (formData.province_id) {
      setCities([
        ...prov.Cities,
      ])
    }
  }, [formData.province_id]);

  const handleIsTenant = (e) => {
    const { value } = e.target;
    setIsTenant(value);
  }

  const handleFormDataChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value)
    setFormData({
      ...formData,
       [name]: value,
    });
  }

  const onFormSubmit = async (e) => {
    e.preventDefault();
    try { 
      const response = await axios({
        url: `${process.env.REACT_APP_BASE_URL}/register`,
        method: 'POST',
        data: formData,
      })
      if (response.status === 201 ) navigate(`/register-merchant/${response.data.id}/${response.data.token}`);
    } catch (error) {
      console.log(error);
      // error
    }
  }

  const {
    full_name,
    email,
    phone_number,
    category_id,
    sub_category_id,
    tenant_category_id, // tenant category
    parent_id, // only if tenant_category_id
    place_name,
    institution, // pengampu
    address,
    province_id,
    city_id,
    postal_code,
  } = formData;

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
                  Register Akun Pengelola QR Code PeduliLindungi
                </h4>
              </div>
              <form onSubmit={(e) => onFormSubmit(e)}>
                {/* <!--Email--> */}
                <div className="px-1 py-1">
                  <div>
                    <label className="form-label" style={FormText}>
                      Nama Lengkap
                    </label>
                    <input
                      id="full_name"
                      type="text"
                      className="form-control"
                      name="full_name"
                      placeholder="Nama Lengkap"
                      value={full_name}
                      onChange={handleFormDataChange}
                    />
                  </div>
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
                      value={email}
                      onChange={handleFormDataChange}
                    />
                  </div>
                  <div className="mt-2">
                    <label className="form-label" style={FormText}>
                      Nomor HP
                    </label>
                    <input
                      id="phone_number"
                      type="number"
                      className="form-control"
                      name="phone_number"
                      placeholder="+62"
                      value={phone_number}
                      onChange={handleFormDataChange}
                    />
                  </div>
                  <div className="mt-2">
                    <label className="form-label" style={FormText}>
                      Apakah anda tenant di Mall, Gedung Perkantoran, Tempat
                      Wisata, Perbelanjaan Lainnya?
                    </label>
                    <div className="d-flex">
                      <Form.Check
                        type="radio"
                        aria-label="radio 1"
                        label="Ya"
                        name="tenant"
                        checked={isTenant === 'true'}
                        value="true"
                        onChange={handleIsTenant}
                      />
                      <Form.Check
                        className="ms-2"
                        type="radio"
                        aria-label="radio 1"
                        label="Tidak"
                        name="tenant"
                        value="false"
                        onChange={handleIsTenant}
                      />
                    </div>
                  </div>
                  { isTenant === "true" && 
                    (<>
                      <div className="mt-2">
                        <label className="form-label" style={FormText}>
                          Kategori Tenant
                        </label>
                        <div className="input-group ">
                          <select class="form-select" id="tenant_category_id" name="tenant_category_id"
                            value={tenant_category_id}
                            onChange={handleFormDataChange}
                            >
                            {/**Sampel */}
                            <option selected disabled>
                              Pilih Kategori
                            </option>
                            { tenantCategories?.map(category => {
                              return (<option value={category.id} key={category.id}>{category.name}</option>)
                            })}
                          </select>
                        </div>
                      </div>
                      <div className="mt-2">
                        <label className="form-label" style={FormText}>
                          Nama Mall / Gedung Perkantoran / Tempat Wisata / Pusat
                          Perbelanjaan
                        </label>
                        <input
                          id="inputForm"
                          type="text"
                          className="form-control"
                          name="" //Belum tau Variable
                        />
                      </div>
                    </>
                    )}

                  { isTenant === "false" && (
                    <>
                      <div className="mt-2">
                        <label className="form-label" style={FormText}>
                          Kategori
                        </label>
                        <div className="input-group ">
                          <select class="form-select" id="category_id" name="category_id"
                            value={category_id}
                            onChange={handleFormDataChange}
                            >
                            {/**Sampel */}
                            <option selected disabled>
                              Pilih Kategori
                            </option>
                            { categories?.map(category => {
                              return (<option value={category.id} key={category.id}>{category.name}</option>)
                            })}
                          </select>
                        </div>
                      </div>
                      <div className="mt-2">
                        <label className="form-label" style={FormText}>
                          Sub-Kategori
                        </label>
                        <div className="input-group ">
                          <select class="form-select" id="sub_category_id" name="sub_category_id"
                            value={sub_category_id}
                            onChange={handleFormDataChange}
                          >
                          {/**Sampel */}
                          <option selected disabled>
                            Pilih Sub-Kategori
                          </option>
                            { subCategories?.map(category => {
                              return (<option value={category.id} key={category.id}>{category.name}</option>)
                            })}
                          </select>
                        </div>
                      </div>
                    </>
                  )}
                  <div className="mt-2">
                    <label className="form-label" style={FormText}>
                      Nama Tempat / Nama Gedung
                    </label>
                    <input
                      id="place_name"
                      type="text"
                      className="form-control"
                      name="place_name"
                      value={place_name}
                      onChange={handleFormDataChange}
                    />
                  </div>
                  <div className="mt-2">
                    <label className="form-label" style={FormText}>
                      Nama Institusi Pengampu
                    </label>
                    <input
                      id="institution"
                      type="text"
                      className="form-control"
                      name="institution"
                      value={institution}
                      onChange={handleFormDataChange}
                    />
                  </div>
                  <div className="mt-2">
                    <label className="form-label" style={FormText}>
                      Alamat
                    </label>
                    <input
                      id="address"
                      type="text"
                      className="form-control"
                      name="address"
                      value={address}
                      onChange={handleFormDataChange}
                    />
                  </div>
                  <div className="mt-2">
                    <label className="form-label" style={FormText}>
                      Kode POS
                    </label>
                    <input
                      id="postal_code"
                      type="text"
                      className="form-control"
                      name="postal_code"
                      value={postal_code}
                      onChange={handleFormDataChange}
                    />
                  </div>
                  <div className="mt-2">
                    <label className="form-label" style={FormText}>
                      Provinsi
                    </label>
                    <div className="input-group ">
                      <select class="form-select" id="province_id" name="province_id"
                        value={province_id}
                        onChange={handleFormDataChange}
                      >
                        {/**Sampel */}
                        <option selected disabled>
                          Pilih Provinsi
                        </option>
                        { provinces?.map(province => {
                          return (<option value={province.id} key={province.id}>{province.name}</option>)
                        })}
                      </select>
                    </div>
                  </div>
                  <div className="mt-2">
                    <label className="form-label" style={FormText}>
                      Kota
                    </label>
                    <div className="input-group ">
                      <select class="form-select" id="city_id" name="city_id"
                        value={city_id}
                        onChange={handleFormDataChange}
                      >
                        {/**Sampel */}
                        <option selected disabled>
                          Pilih Kota / Kabupaten
                        </option>
                        { cities?.map(city => {
                          return (<option value={city.id} key={city.id}>{city.name}</option>)
                        })}
                      </select>
                    </div>
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
              <div style={RegisterFooter} className="mt-3">
                <h6 style={{ fontColor: '#229BD8', fontSize: 14}}>
                  Sudah punya akun? <Link to="/login"  className="text-info text-decoration-none"><strong>Login</strong></Link>
                </h6>
                <h6 style={{ fontColor: '#229BD8', fontSize: 14}}>
                  Sudah melakukan registrasi?{" "}
                  <Link to="/check-status" className="text-info text-decoration-none"><strong>Periksa status registrasi akun anda</strong></Link>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
