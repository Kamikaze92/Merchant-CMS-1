import Sidebar from "../Components/Sidebar"
import Navbar from "../Components/Navbar"
import MerchantDetailComponent from "../Components/MerchantDetailComponent"
import {Link, useLocation} from "react-router-dom"
import { useEffect, useState } from "react"
export default function Merchant(){
    const {state} = useLocation()
    const [text, setText] = useState()
    console.log(state, 'anjianngggg');
    useEffect(() => {
        if (!state.approved_at && !state.approved_by) {
            setText('Akun Pengelola Baru')
        } else {
            console.log('masuk sini jingg???',state, '>>>>>>>');
            setText('Pengelola QR Code Detail')
        }
    }, [])
    return(
    <>
        <Navbar />
        <Sidebar />
        <div>
        <div className="row">
            <div className="col-2"></div>
                <div className="col-10">
                    <div className="bg-white border-top p-4"> 
                    <Link to={state.approved_at && state.approved_by?"/active-merchants":"/merchants"} style={{ textDecoration: 'none'}}>
                        <i className="bi bi-arrow-left me-3 text-dark"></i>
                    </Link>
                    <span className="text-nowrap" style={{ fontSize: '20px' }}>
                        {text?text:null}</span>
                    </div>
                <div class="vh-100">
                <MerchantDetailComponent />
                </div>
            </div>
        </div>
    </div>    
    </>
    )
}