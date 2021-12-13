import Sidebar from "../Components/Sidebar"
import Navbar from "../Components/Navbar"
import CategoryTenantTable from "../Components/CategoryTenantTable"
export default function CategoryNonTenant(){
    return(
    <>
        <Navbar />
        <Sidebar />
        <div id="table-bg">
        <div className="row">
            <div className="col-2"></div>
            <div className="col-10">
                <div className="bg-white border-top p-4">Administrasi - Kategori Tenant
                <br/><h4 className="mt-2"><strong>Daftar Tenant</strong></h4></div>
                <div class="vh-100">
                <CategoryTenantTable />
                </div>
            </div>
        </div>
    </div>    
    </>
    )
}