import Sidebar from "../Components/Sidebar"
import Navbar from "../Components/Navbar"
import UserVerifierApprovalTable from "../Components/UserVerifierApprovalTable"
export default function ActiveMerchant(){
    return(
    <>
        <Navbar />
        <Sidebar />
        <div id="table-bg">
        <div className="row">
            <div className="col-2"></div>
            <div className="col-10">
                <div className="bg-white border-top p-4">Daftar Registrasi Akun Verifikator Baru
                <br/><h4 className="mt-2"><strong>Daftar Registrasi Akun Verifikator Baru</strong></h4></div>
                <div class="vh-100">
                <UserVerifierApprovalTable />
                </div>
            </div>
        </div>
    </div>    
    </>
    )
}