import errorImage from '../assets/images/Frame 167.svg';
import LoadingComponent from '../Components/LoadingComponent';
import { useEffect } from "react";
import { Link } from 'react-router-dom';
const { getUserGroups } = require('../store/actions/userGroups');
const { useSelector, useDispatch } = require('react-redux');

const layoutBorder = {
    borderRadius: 5,
    padding: "16px",
    backgroundColor: "white",
    marginTop: 20,
    marginLeft: 24,
    marginRight: 24,
  };

export default function ListGroupPage ({ id }) {
    const { isLoading, userGroups } = useSelector(state => state.userGroups);
    const dispatch = useDispatch();
    const detailData = {
      id
    }
    const path = `/user-groups/${id}`;
    useEffect( () => {
        dispatch(getUserGroups());
    }, [dispatch]);
    const addGroup = () => {
      console.log('Add Feature');
    }
    return (
      <>
      {
        isLoading ? <LoadingComponent></LoadingComponent> :
        <div className="container-fluid mt-3">
          <div className="border" style={layoutBorder}>
              <div className="d-flex flex-row justify-content-center">
                <div className="col-5">
                  <div className="d-flex flex-row">
                    <input
                      class="form-control me-2"
                      type="search"
                      placeholder="cari nama grup"
                    />
                    <button class="btn btn-default" type="submit">
                      Cari
                    </button>
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
                <button className="btn btn-default" onClick={ addGroup }>+ Tambah Data</button>
              </div>
                <div>
                    {
                        isLoading ? <LoadingComponent/> :
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
                                    userGroups?.map(el => {
                                      const path = `/group-list/${el.id}`
                                        return (
                                            <tr>
                                                <td scope="row">{ el.role?.name }</td>
                                                <td>{ el.role?.description }</td>
                                                <td>2</td>
                                                <td>{ el.privilege?.name }</td>
                                                <td><Link to={ path } state= {{ detailData }}><i class='bx bx-list-ul' ></i> Detail</Link></td>
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
            <div className="d-flex flex-row-reverse">
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link" href="#">Next</a></li>
                    </ul>
                </nav>
              </div>
              </div>
          </div>
      }
        </>
      );
}