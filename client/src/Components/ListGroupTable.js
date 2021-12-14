import errorImage from '../assets/images/Frame 167.svg';
import LoadingComponent from '../Components/LoadingComponent';
import { useEffect } from "react";
const { getUserGroups } = require('../store/actions/userGroups');
const { useSelector, useDispatch } = require('react-redux');

const layoutBorder = {
    borderRadius: 5,
    padding: "16px",
    backgroundColor: "white",
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
  };

export default function ListGroupPage () {
    const { isLoading, userGroups } = useSelector(state => state.userGroups);
    const dispatch = useDispatch();
    useEffect( () => {
        dispatch(getUserGroups());
    }, [dispatch]);
    return (
        <>
          <div className="container-fluid">
            <div className="border" style={layoutBorder}>
            <div className="row">
                <div className="col d-flex justify-content-center">
                    <div className="col-5 d-flex align-items-center">
                        <input className="form-control me-2" 
                        placeholder="Cari Nama Grup"/>
                        <div style={{ height: '38px' }}>
                            <p className="btn" style={{ color: '#f8f8f8', backgroundColor: '#229BD8' }}>Cari</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          </div>
          <div className="border p-3 mt-4 mb-4" style={layoutBorder}>
              <div
                className="d-flex flex-row justify-content-between mb-3"
                style={{ alignItems: "center" }}
              >
                <h6><strong>Akun Grup Baru</strong></h6>
                <button className="btn btn-default">+ Tambah Data</button>
              </div>
                <div>
                    {
                        isLoading ? 
                        <LoadingComponent/> :
                        userGroups?.length ?
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th style={{ fontWeight: 'bold', backgroundColor: "#D9D9D9" }}>Nama Grup</th>
                                    <th style={{ fontWeight: 'bold', backgroundColor: "#D9D9D9" }}>Deskripsi</th>
                                    <th style={{ fontWeight: 'bold', backgroundColor: "#D9D9D9" }}>Jumlah Pengguna</th>
                                    <th style={{ fontWeight: 'bold', backgroundColor: "#D9D9D9" }}>Hak Akses</th>
                                    <th style={{ fontWeight: 'bold', backgroundColor: "#D9D9D9" }}>Aksi</th>
                                </tr>
                            </thead>
                                <tbody>
                                {
                                    userGroups.map(el => {
                                        return (
                                            <tr>
                                                <td scope="row">Admin</td>
                                                <td>Untuk Administrator</td>
                                                <td>2</td>
                                                <td>Super Admin</td>
                                                <td>
                                                    <div className="d-flex align-items-center bd-highlight mb-3"> 
                                                        <i className="bi bi-list-ul  bd-highlight" style={{ color: '#229BD8' }}></i>
                                                        <div style={{ height: "20px" }}>
                                                            <p className="ms-2 me-4  bd-highlight">Detail</p>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }                                
                            </tbody>
                        </table> :
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
          </div>  
        </>
      );
}