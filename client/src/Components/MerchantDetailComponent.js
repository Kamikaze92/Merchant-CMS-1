import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import {useParams, useLocation} from "react-router-dom"
import { useEffect, useState } from 'react';
import axios from 'axios';


const heading = {
  fontFamily: "Roboto",
  fontWeight: "bold",
  fontSize: "24px",
  lineHeight: "22px",
};
const detailInfoHead = {
  fontFamily: "Roboto",
  fontSize: "14px",
  lineHeight: "22px",
  alignItems: "center",
  marginTop: 24,
};
const detailInfo = {
  fontFamily: "Roboto",
  fontSize: "14px",
  lineHeight: "22px",
  textAlign: "left",
  alignItems: "center",
  marginTop: 24,
};
const detailHeading = {
  textAlign: "right",
  fontFamily: "Roboto",
  lineHeight: "22px",
  fontSize: "14px",
  marginRight: 10,
};
const detailData = {
  fontFamily: "Roboto",
  lineHeight: "22px",
  fontSize: "14px",
};

export default function MerchantDetail() {
  const {state} = useLocation()
  console.log(state, 'asup mantapp uhuyy');
  const [data, setData] = useState()
  const [text, setText] = useState()
  useEffect(() => {
    if (!state) {
      console.log(null);
    } else {
      if (!state.approved_at && !state.approved_by) {
        setText('Akun Pengelola Baru')
        setData(state)
    } else {
        setText('Pengelola QR Code Detail')
        setData(state)
    }
    }
  }, [])
  return (
    <>
      <div style={{backgroundColor:'white'}}>
        <div className="row">
          <div className="d-flex flex-row">
            <div className="d-flex flex-column" style={{ marginLeft: '380px', marginTop:'20px' }}>
              <h3 style={heading}>{text?text:null}</h3>
              <div style={{padding: 10}}>
                <div>
                  <div className="d-flex flex-row" style={{ marginTop: 20 }}>
                    <div className="d-flex flex-column" style={detailHeading}>
                      <p>Email : </p>
                      <p>Nama :</p>
                      <p>No. HP :</p>
                      <p>Kategori :</p>
                      <p>Sub-Kategori :</p>
                      <p>Kategori Tenant :</p>
                      <p>Nama Mall/Gedung :</p>
                      <p>Nama Tempat :</p>
                      <p>Instansi Pengampu :</p>
                      <p>Alamat :</p>
                      <p>Provinsi :</p>
                      <p>Kota :</p>
                    </div>
                    <div className="d-flex flex-column" style={detailData}>
                      <p>{data?.email}</p>
                      <p>{data?.full_name}</p>
                      <p>{data?.phone_number}</p>
                      <p>{data?.merchant?.sub_category?.category? data.merchant.sub_category.category.name: "-" }</p>
                      <p>{data?.merchant?.sub_category?.name? data.merchant.sub_category.name: "-"}</p>
                      <p>{data?.merchant?.tenant_category ? data.merchant.tenant_category.name : "-"}</p>
                      <p>{data?.merchant?.non_tenant_merchant ? data.merchant.non_tenant_merchant.place_name : "-"}</p>
                      <p>{data?.merchant?.place_name}</p>
                      <p>{data?.merchant?.institution}</p>
                      <p>{data?.merchant?.address}</p>
                      <p>{data?.merchant?.province ? data?.merchant?.province.name: "-"}</p>
                      <p>{data?.merchant?.city ? data?.merchant?.city.name: "-"}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
