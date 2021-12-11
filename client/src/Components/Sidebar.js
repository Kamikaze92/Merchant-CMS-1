
import { DropdownButton, Dropdown } from 'react-bootstrap';
const image = {
  width: "135.02px",
  height: "32px",
  left: "36px",
  top: "16px",
  position: "absolut",
  marginTop: 30,
  marginLeft: 20,
};
export default function Sidebar() {
  return (
    <div id="sidebar">
      <div className="sidebar d-flex flex-column" id="wrapper">
        <div className="" id="sidebar-wrapper">
          <div>
            <img
              style={image}
              src="https://www.pedulilindungi.id/assets/logo-with-text.svg"
            ></img>
          </div>
          <div className="list-group list-group-flush mt-2">
            <a className="list-group-item-action p-3">
              Persetujuan Akun Pengguna
            </a>
            <a className="list-group-item-action p-3">
              Persetujuan Akun Verifikator
            </a>
            <a className="list-group-item-action p-3">
              Daftar Akun Pengelola QR Code
            </a>
            <DropdownButton variant="light" title="Administrasi" className="ms-3">
              <Dropdown.Item href="#/action-1">Pengguna</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Grup</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Kategori & Sub-Kategori</Dropdown.Item>
              <Dropdown.Item href="#/action-4">Kategori Tenant</Dropdown.Item>
              <Dropdown.Item href="#/action-5">Ubah Password</Dropdown.Item>
            </DropdownButton>
            <a className="list-group-item-action p-3">Keluar Akun</a>
          </div>
        </div>
      </div>
    </div>
  );
}
