const image = {
    width: "150px",
    height: "34px",
    left: "36px",
    top: "16px",
    marginTop: 30,
    marginLeft: 30,
  };
export default function Sidebar2(){
    return(
        <div class="l-navbar show" id="nav-bar">
            <nav class="nav">
                <div>
                    <div className="mb-4">
                    <img
                    style={image}
                    src="https://www.pedulilindungi.id/assets/logo-with-text.svg"
                    ></img>
                    </div>
                    <div class="nav__list">
                        <a href="#" class="nav__link active">
                            <i class='bx bx-user nav__icon' ></i>
                            <span class="nav__name">Persetujuan Akun Pengguna</span>
                        </a>
                        
                        <a href="#" class="nav__link">
                            <i class='bx bx-user nav__icon' ></i>
                            <span class="nav__name">Persetujuan Akun Verifikator</span>
                        </a>

                        <a href="#" class="nav__link">
                            <i class='bx bx-user nav__icon' ></i>
                            <span class="nav__name">Daftar Akun Pengelola QR Code</span>
                        </a>
                        <div className="dropdown">
                        <a href="#" class="nav__link dropdown-toggle"
                        id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class='bx bxs-cog nav__icon' ></i>
                            <span class="nav__name">Administrasi</span>
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                        </div>
                        <a href="#" class="nav__link">
                            <i class='bx bx-log-out nav__icon' ></i>
                            <span class="nav__name">Keluar Akun</span>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    )
}