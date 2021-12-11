import Sidebar2 from "../Components/Sidebar2"
import Navbar from "../Components/Navbar"
import ActiveMerchantTable from "../Components/ActiveMerchantTable"
export default function ActiveMerchant(){
    return(
    <>
        <Navbar />
        <Sidebar2 />
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