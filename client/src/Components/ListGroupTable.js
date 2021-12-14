import errorImage from '../assets/images/Frame 167.svg';
import LoadingComponent from '../Components/LoadingComponent';
import { useEffect, useState } from "react";
import { Modal, Button } from 'react-bootstrap';
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

export default function ListGroupPage () {
    const { isLoading, userGroups } = useSelector(state => state.userGroups);
    const dispatch = useDispatch();
    useEffect( () => {
        dispatch(getUserGroups());
    }, [dispatch]);
    const addGroup = () => {
      console.log('Add FEature');
    }
    return (
      <>
          <App></App>
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
                <div cla>
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
        </>
      );
}


function FormModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function App() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <FormModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}