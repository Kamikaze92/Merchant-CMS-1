import Sidebar from "../Components/Sidebar"
import Navbar from "../Components/Navbar"
import ActiveMerchantTable from "../Components/ActiveMerchantTable"
export default function ActiveMerchant(){
    return(
    <>
        <Navbar />
        <Sidebar />
        <div id="table-bg">
        <div className="row">
            <div className="col-2"></div>
            <div className="col-10">
                <div className="bg-white border-top p-4">Daftar akun pengelola QR
                <br/><h4 className="mt-2"><strong>Daftar Akun Pengelola QR</strong></h4></div>
                <div class="vh-100">
                <ActiveMerchantTable />
                </div>
            </div>
        </div>
    </div>    
    </>
    )
}