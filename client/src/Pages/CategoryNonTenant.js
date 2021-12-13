import Sidebar from "../Components/Sidebar"
import Navbar from "../Components/Navbar"
import CategoryNonTenantTable from "../Components/CategoryNonTenantTable"
export default function CategoryNonTenant(){
    return(
    <>
        <Navbar />
        <Sidebar />
        <div id="table-bg">
        <div className="row">
            <div className="col-2"></div>
            <div className="col-10">
                <div className="bg-white border-top p-4">Administrasi - Kategori & Sub-Kategori
                <br/><h4 className="mt-2"><strong>Daftar Kategori</strong></h4></div>
                <div class="vh-100">
                <CategoryNonTenantTable />
                </div>
            </div>
        </div>
    </div>    
    </>
    )
}