import Sidebar from "../Components/Sidebar"
import Navbar from "../Components/Navbar"
import {Link} from "react-router-dom"
import CategoryNonTenantDetailTable from "../Components/CategoryNonTenantDetailTable"
export default function CategoryNonTenant(){
    return(
    <>
        <Navbar />
        <Sidebar />
        <div id="table-bg">
        <div className="row">
            <div className="col-2"></div>
            <div className="col-10">
                <div className="bg-white border-top p-4">
                    <Link to="/categories" style={{ textDecoration: 'none'}}>
                        <i className="bi bi-arrow-left me-3 text-dark"></i>
                    </Link>
                    <span className="text-nowrap" style={{ fontSize: '20px' }}>
                        Detail Kategori</span>
                </div>
                <div class="vh-100">
                <CategoryNonTenantDetailTable />
                </div>
            </div>
        </div>
    </div>    
    </>
    )
}