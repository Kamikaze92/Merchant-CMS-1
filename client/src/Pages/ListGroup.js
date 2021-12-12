import Sidebar from "../Components/Sidebar"
import Navbar from "../Components/Navbar"
import ListGroupTable from "../Components/ListGroupTable"
export default function ListGroup(){
    return(
    <>
        <Navbar />
        <Sidebar />
        <div id="table-bg">
        <div className="row">
            <div className="col-2"></div>
            <div className="col-10">
                <div className="bg-white border-top p-4">Administrasi - Grup
                <br/><h4 className="mt-2"><strong>Daftar Grup Pengguna</strong></h4></div>
                <div class="vh-100">
                    <ListGroupTable />
                </div>
            </div>
        </div>
    </div>    
    </>
    )
}