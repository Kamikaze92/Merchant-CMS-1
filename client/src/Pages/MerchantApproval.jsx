import Sidebar from "../Components/Sidebar"
import Navbar from "../Components/Navbar"
import MerchantApprovalTable from "../Components/MerchantApprovalTable.jsx"
export default function MerchantAprroval(){
    return(
    <>
        <Navbar />
        <Sidebar />
        <div id="table-bg">
        <div className="row">
            <div className="col-2"></div>
            <div className="col-10">
                <div className="bg-white border-top p-4">Persetujuan Akun Pengelola Baru
                <br/><h4 className="mt-2"><strong>Persetujuan Akun Pengelola Baru</strong></h4></div>
                <div class="vh-100">
                <MerchantApprovalTable />
                </div>
            </div>
        </div>
    </div>    
    </>
    )
}