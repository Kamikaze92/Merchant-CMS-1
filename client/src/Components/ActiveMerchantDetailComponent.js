import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
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
                      <p>Akbar@gmail.com</p>
                      <p>Akbar Kurnia</p>
                      <p> 0812312312</p>
                      <p>Makanan & Minuman</p>
                      <p>Restoran</p>
                      <p>-</p>
                      <p>-</p>
                      <p>-</p>
                      <p>Negri Wakanda</p>
                      <p>Jl.Mambu,No.xx</p>
                      <p>Jawa tengah</p>
                      <p>Sidoarjo</p>
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
