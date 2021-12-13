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

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="d-flex flex-row">
            <div className="d-flex flex-column" style={{ marginLeft: 500 }}>
              <h3 style={heading}>Informasi Pengelola QR Code</h3>
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
                      <p>{state.email}</p>
                      <p>{state.full_name}</p>
                      <p>{state.phone_number}</p>
                      <p>{state.Merchant.Category?.name?state.Merchant.Category.name: "-" }</p>
                      <p>{state.Merchant.tenant_category_id? state.Merchant.tenant_category_id : "-"}</p>
                      <p>-</p>
                      <p>-</p>
                      <p>{state.Merchant.place_name}</p>
                      <p>{state.Merchant.institution}</p>
                      <p>{state.Merchant.address}</p>
                      <p>{state.Merchant.province_id}</p>
                      <p>{state.Merchant.city_id}</p>
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
