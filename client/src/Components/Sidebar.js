
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
    <div className="l-navbar show" id="nav-bar">
            <nav className="nav">
                <div>
                    <div className="mb-4">
                    <img
                    style={image}
                    src="https://www.pedulilindungi.id/assets/logo-with-text.svg"
                    ></img>
                    </div>
                    <div className="nav__list">
                        <a href="#" className="nav__link active" title="Persetujuan Akun Pengguna">
                            <i className='bx bx-user nav__icon' ></i>
                            <span className="nav__name">Persetujuan Akun Pengguna</span>
                        </a>
                        
                        <a href="#" className="nav__link" title="Persetujuan Akun Verifikator">
                            <i className='bx bx-user nav__icon' ></i>
                            <span className="nav__name">Persetujuan Akun Verifikator</span>
                        </a>

                        <a href="#" className="nav__link" title="Daftar Akun Pengelola QR Code">
                            <i className='bx bx-user nav__icon' ></i>
                            <span className="nav__name">Daftar Akun Pengelola QR Code</span>
                        </a>
                        <a className="nav__link" id="dropdown__linktop">
                            <i className='bx bxs-cog nav__icon' ></i>
                            <span className="nav__name">Administrasi</span>
                        </a>
                        <a href="#" className="dropdown__link">
                            <span className="nav__name">Pengguna</span>
                        </a>
                        <a href="#" className="dropdown__link">
                            <span className="nav__name">Grup</span>
                        </a>
                        <a href="#" className="dropdown__link">
                            <span className="nav__name">Kategori & Sub-Kategori</span>
                        </a>
                        <a href="#" className="dropdown__link">
                            <span className="nav__name">Kategori Tenant</span>
                        </a>
                        <a href="#" className="dropdown__link" id="dropdown__link">
                            <span className="nav__name">Ubah Password</span>
                        </a>
                        <a href="#" className="nav__link">
                            <i className='bx bx-log-out nav__icon' ></i>
                            <span className="nav__name">Keluar Akun</span>
                        </a>
                    </div>
                </div>
            </nav>
      </div>
  );
}
