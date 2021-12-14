import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserMerchants, createUserMerchant, approveUserMerchant, deleteUserMerchant } from '../store/actions/users';
import DataTable from 'react-data-table-component';
import LoadingComponent from './LoadingComponent';
import errorImage from '../assets/images/Frame 167.svg';
import { Navigate, useNavigate } from 'react-router-dom';

const columns = (buttonHandlers) => [
  {
      name: 'Tanggal Daftar',
      selector: row => row.created_at,
      sortable: true,
      width: "140px"
  },
  {
    name: 'Email',
    selector: row => row.email,
    sortable: true,
    width: "150px"
},
  
  {
      name: 'Sub-Kategori',
      selector: row => row.sub_category,
      sortable: true,
      width: "150px"
  },
  {
      name: 'Nama Tempat',
      selector: row => row.place_name,
      sortable: true,
      width: "150px"
  },
  {
      name: 'Alamat',
      selector: row => row.address,
      sortable: true,
  		wrap: true,
      width: "150px"
  },
  {
    name: 'Aksi',
    cell: (row) => (
      <div>
        <i
            className="bi bi-pencil-fill"
            style={{ color: "#229BD8" }}
            onClick={() =>
              buttonHandlers(row, 'detail')
            }
          ></i> &nbsp;
          <a
            onClick={() =>
              buttonHandlers(row, 'detail')
            }
            style={{ color: "#229BD8" }}
          >
            Detail
          </a> &nbsp;
        <i
            className="bi bi-plus-lg  bd-highlight"
            style={{ color: "#229BD8" }}
            onClick={() =>
              buttonHandlers(row, 'approve')
            }
          ></i> 
          <a
            onClick={() =>
              buttonHandlers(row, 'approve')
            }
            style={{ color: "#1890FF" }}
          >
            Tambah
          </a> &nbsp;
      <i
            className="bi bi-trash  bd-highlight"
            style={{ color: "#F6303A" }}
            onClick={() =>
              buttonHandlers(
                row, 'delete'
              )
            }
          ></i> 
          <a
            onClick={() =>
              buttonHandlers(
                row, 'delete'
              )
            }
            style={{ color: "#F6303A" }}
          >Hapus</a>
          
      </div>
    ),
    minWidth: 'fit-content',
    ignoreRowClick: true,
    button: true,
    center: true,
  },
];
const layoutBorder = {
  padding: "16px",
  backgroundColor: "white",
  width: '1000px',
  marginTop:'20px',
  marginLeft: '35px'
};

export default function MerchantApprovalTable() {
  const dispatch = useDispatch();
  const { usersMerchant, isLoading, error } = useSelector(state => state.users);
  const [ selectedRows, setSelectedRows ] = useState(false);
  const navigate = useNavigate()
  // const [ toggledClearRows, setToggleClearRows ] = useState(false);
  console.log(usersMerchant, 'apaa gaiiss');
  const handleChange = ({ selectedRows }) => {
    setSelectedRows(selectedRows);
  };

  // Toggle the state so React Data Table changes to clearSelectedRows are triggered
  // const handleClearRows = () => {
  //   setToggleClearRows(!toggledClearRows);
  // }

  const ActionButtonHandlers = (payload, type) => {
    if (type === 'approve') {
      // promp are you sure want to approve.
      dispatch(approveUserMerchant(payload.id, usersMerchant));
    } 
    if (type === 'delete') {
      // promp are you sure want to approve.
      dispatch(deleteUserMerchant(payload.id, usersMerchant));
    }
    if (type === 'detail') {
      let detailUser = usersMerchant.filter(el => el.id == payload.id)[0]
      console.log(detailUser, 'banagsaata ahahahhahahhahahha');
      navigate(`/merchants/${payload.id}`,{state: detailUser})
    }
    console.log(type, 'typee', payload, 'payloadd');
	};

  useEffect(() => dispatch(setUserMerchants()), []);
  console.log(usersMerchant, 'asupppp gaiiss???');
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const payload = {
      full_name: 'Merchant City 4',
      email: 'merch4@mail.com',
      phone_number: '098888123',
      // should chose one category_id or tenant_category_id
      category_id: 1,
      tenant_category_id: 1, // tenant category
      parent_id: 1, // only if tenant_category_id
      place_name: 'Toko',
      institution: 'JUJU', // pengampu
      address: 'Bandung',
      province_id: 171,
      city_id: 1,
      // city_id: null,
      postal_code: '123',
      user_type: 'Merchant',
      // user_type: 'Verifier',
    }
    dispatch(createUserMerchant(payload));
  };
  if (isLoading) {
    return (
      <LoadingComponent />
    )
  } else {
    return (
      <>
      <div style={layoutBorder}>
              <h6 style={{ fontSize: 14 }}>Status Pendaftaran</h6>
              <div className="d-flex flex-row justify-content-between">
                <div className="col-4">
                  <select className="form-select" id="inputForm">
                    {/**Sampel */}
                    <option selected disabled>
                      Pilih Kategori
                    </option>
                    <option value="1">Dalam Proses</option>
                    <option value="2">Aktif</option>
                    <option value="3">Registrasi</option>
                    <option value="3">Merchant</option>
                  </select>
                </div>
                <div className="col-4">
                  <div className="d-flex flex-row">
                    <input
                      className="form-control "
                      type="search"
                      placeholder="Masukkan email / nama tempat"
                    />
                    <button className="btn btn-default ms-1" type="submit" style={{backgroundColor: '#229BD8', color: 'white'}}>
                      Cari
                    </button>
                  </div>
                </div>
              </div>
            </div>
   
    <div style={{backgroundColor:'white', width: '1065px', height: '350px'}}>
      <div style={{width: '1000px'}}>
       {
        usersMerchant.length ?
      <>
        <div id="container-fluid mt-3">
          <div>
              <div style={{marginTop: '20px'}}>
                <DataTable
                  // columns={columns}
                  columns={columns(ActionButtonHandlers)}
                  data={usersMerchant?.map(el => {
                    return {
                      id: el.id,
                      created_at: el.created_at,
                      email: el.email,
                      sub_category: el.Merchant?.Category?.name,
                      place_name: el.Merchant?.place_name,
                      address: el.Merchant?.address,
                    }
                  })}
                  direction="auto"
                  pagination
                  // responsive
                  selectableRows // ini untuk checkbox
                  selectableRowsHighlight
                  selectableRowsNoSelectAll
                  clearSelectedRows
                  highlightOnHover
                  striped
                  onSelectedRowsChange={handleChange}
                />
                {/* <button
                onClick={handleFormSubmit}
                >Submit user</button> */}
              </div>
            </div>
          </div>
      </> :
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
    )
  };
};
