import {Link} from "react-router-dom"
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
                    <img className="img-fluid"
                    style={image}
                    src="https://www.pedulilindungi.id/assets/logo-with-text.svg"
                    ></img>
                    </div>
                    <div className="nav__list">
                        <a href="#" className="nav__link" title="Persetujuan Akun Pengguna">
                            <i className='bx bx-user nav__icon' ></i>
                            <Link to="/merchants" style={{ textDecoration: 'none'}}>
                                <span className="text-dark">Persetujuan Akun Pengguna</span>
                            </Link>
                        </a>
                        
                        <a href="#" className="nav__link" title="Persetujuan Akun Verifikator">
                            <i className='bx bx-user nav__icon' ></i>
                            <Link to="/verifiers" style={{ textDecoration: 'none'}}>
                                <span className="text-dark">Persetujuan Akun Verifikator</span>
                            </Link>
                        </a>

                        <a href="#" className="nav__link" title="Daftar Akun Pengelola QR Code">
                            <i className='bx bx-user nav__icon' ></i>
                            <Link to="/active-merchants" style={{ textDecoration: 'none'}}>
                                <span className="text-dark">Daftar Akun Pengelola QR Code</span>
                            </Link>
                        </a>
                        <a className="nav__link" id="dropdown__linktop">
                            <i className='bx bxs-cog nav__icon' ></i>
                            <span>Administrasi</span>
                        </a>
                        <a href="#" className="dropdown__link">
                            <Link to="/users" style={{ textDecoration: 'none'}}>
                                <span className="text-dark">Pengguna</span>
                            </Link>
                        </a>
                        <a href="#" className="dropdown__link">
                            <Link to="/group-list" style={{ textDecoration: 'none'}}>
                                <span className="text-dark">Grup</span>
                            </Link>
                        </a>
                        <a href="#" className="dropdown__link">
                            <span className="text-dark">Kategori & Sub-Kategori</span>
                        </a>
                        <a href="#" className="dropdown__link">
                            <span className="text-dark">Kategori Tenant</span>
                        </a>
                        <a href="#" className="dropdown__link" id="dropdown__link">
                            <Link to="/change-password" style={{ textDecoration: 'none'}}>
                                <span className="text-dark">Ubah Password</span>
                            </Link>
                        </a>
                        <a href="#" className="nav__link">
                            <i className='bx bx-log-out nav__icon' ></i>
                            <span className="text-dark">Keluar Akun</span>
                        </a>
                    </div>
                </div>
            </nav>
      </div>
  );
}
