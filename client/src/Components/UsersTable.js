import errorImage from '../assets/images/Frame 167.svg';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUsers, createUser } from '../store/actions/users';
import { useNavigate } from 'react-router';
import { setUser } from '../store/actions/users';
import { Link } from 'react-router-dom';
import LoadingComponent from './LoadingComponent';

const layoutBorder = {
  borderRadius: 5,
  padding: "16px",
  backgroundColor: "white",
  marginTop: 20,
  marginLeft: 24,
  marginRight: 24,
};




const UserTableComponent = ({ id, full_name, email, phone_number, Verifier }) => {
  const path = `/users/${id}`;
  const detailData = {
    id, full_name, email, phone_number, institution: Verifier.institution
  }
  return (
    <tr>
      <td>{ full_name }</td>
      <td>{ email }</td>
      <td>{ Verifier.institution }</td>

      <td>Admin/Verifikator Provinsi/Verif..</td>
      <td><Link to={ path } state= {{ detailData }}><i class='bx bx-list-ul' ></i> Detail</Link></td>
    </tr>
  )
}





export default function UsersTable() {
  const [usersData, setUsersData] = useState([]);
  const { users, isLoading } = useSelector(state => state.users);
  const dispatch = useDispatch();
  useEffect( () => {
     dispatch(setUser());
  }, [dispatch]);
  const userData = users.users;
  console.log(userData);
  return (
    <>
      <div className="container-fluid mt-3">
          <div className="">
            <div className="border" style={layoutBorder}>
              <div className="d-flex flex-row justify-content-center">
                <div className="col-4">
                  <div className="d-flex flex-row">
                    <input
                      class="form-control "
                      type="search"
                      placeholder="cari pengguna"
                    />
                    <button class="btn btn-default ms-1" type="submit">
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
                <h6><strong>Akun Pengguna Baru</strong></h6>
                <button className="btn btn-default">+ Tambah Data</button>
              </div>
              <div>
                {
                  isLoading ? <LoadingComponent/> :
                  usersData?.length ?
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th style={{fontWeight: 600, backgroundColor: "#D9D9D9"}}>Nama</th>
                        <th style={{fontWeight: 600, backgroundColor: "#D9D9D9"}}>Email</th>
                        <th style={{fontWeight: 600, backgroundColor: "#D9D9D9"}}>Instansi</th>
                        <th style={{fontWeight: 600, backgroundColor: "#D9D9D9"}}>Grup</th>
                        <th style={{fontWeight: 600, backgroundColor: "#D9D9D9"}}>Aksi</th>

                      </tr>
                    </thead>
                    <tbody>
                      {
                        userData?.map(el => {
                          if(el.verifier_id) {
                            return <UserTableComponent 
                            id={ el.id } 
                            full_name={ el.full_name }
                            email={ el.email } 
                            Verifier={ el.Verifier }
                            phone_number={ el.phone_number }
                            ></UserTableComponent>
                          }
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
        </div>
    </>
  );
};