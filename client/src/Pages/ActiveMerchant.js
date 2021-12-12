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
            <div className="col-2">
            </div>
            <div className="col-10">
                <div class="vh-100">
                <ActiveMerchantTable />
                </div>
            </div>
        </div>
    </div>    
    </>
    )
}