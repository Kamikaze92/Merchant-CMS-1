import Sidebar from "../Components/Sidebar"
import Navbar from "../Components/Navbar"
import ChangePasswordForm from "../Components/ChangePasswordForm"
export default function ChangePassword(){
    return(
    <>
        <Navbar />
        <Sidebar />
        <div id="table-bg">
        <div className="row">
            <div className="col-2"></div>
            <div className="col-10">
                <div className="bg-white border-top p-4">Administrasi - Ubah Password
                <br/><h4 className="mt-2"><strong>Ubah Password</strong></h4></div>
                <div class="vh-100">
                    <ChangePasswordForm />
                </div>
            </div>
        </div>
    </div>    
    </>
    )
}