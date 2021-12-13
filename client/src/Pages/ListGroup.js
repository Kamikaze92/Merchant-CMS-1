import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import ListGroupTable from "../Components/ListGroupTable";
import errorImage from '../assets/images/Frame 167.svg'
import { useEffect, useState } from "react";
const { getUserGroups } = require('../store/actions/userGroups');
const { useSelector, useDispatch } = require('react-redux');

export default function ListGroup(){
    const [ groups, setGroup ] = useState([]);
    const { isLoading } = useSelector(state => state).userGroups;
    const dispatch = useDispatch();
    useEffect( async () => {
        const resp = await dispatch(getUserGroups());
        setGroup(resp);
    }, [dispatch]);
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
                {
                    isLoading ? <h1>Loading...</h1>
                    :
                <div className="vh-100">
                    {
                    groups.length ?
                    <ListGroupTable />
                    :
                    <div className="container">
                        <div className="row" style={{ justifyContent: "center" }}>
                            <div className="col-7 mb-5 mt-5">
                            <div style={{ textAlign: "center" }}>
                                <img className="img-fluid"
                                src={ errorImage }
                                alt="Peduli-lindungi-logo"
                                style={{ width: "600px" }}
                                />
                            </div>
                            </div>
                            <h3 className="row" style={{ justifyContent: "center" }}>Data Not found!</h3>
                        </div>
                    </div> 
                    }
                </div>
                }
            </div>
        </div>
    </div>    
    </>
    )
}