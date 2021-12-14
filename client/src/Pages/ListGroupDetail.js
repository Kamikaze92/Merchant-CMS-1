import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import GroupDetailTable from "../Components/GroupDetailTable";
import { Link } from "react-router-dom";

export default function GroupDetail(){
    return(
    <>
        <Navbar />
        <Sidebar />
        <div>
        <div className="row">
            <div className="col-2"></div>
                <div className="col-10">
                    <div className="bg-white border-top p-4"> 
                    <Link to="/group-list" style={{ textDecoration: 'none'}}>
                        <i className="bi bi-arrow-left me-3 text-dark"></i>
                    </Link>
                    <span className="text-nowrap" style={{ fontSize: '20px' }}>Detail Group</span>
                    </div>
                <div class="vh-100">
                <GroupDetailTable />
                </div>
            </div>
        </div>
    </div>    
    </>
    )
}