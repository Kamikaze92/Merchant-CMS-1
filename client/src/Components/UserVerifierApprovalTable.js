import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserVerifiers, approveUserVerifier, deleteUserVerifier } from '../store/actions/users';
import DataTable from 'react-data-table-component';
import LoadingComponent from './LoadingComponent';
import errorImage from '../assets/images/Frame 167.svg';

const columns = (buttonHandlers) => [
  {
      name: 'Tanggal Daftar',
      selector: row => row.created_at,
      sortable: true,
  },
  {
      name: 'Nama',
      selector: row => row.full_name,
      sortable: true,
  },
  {
      name: 'Email',
      selector: row => row.email,
      sortable: true,
  },
  {
      name: 'Instansi',
      selector: row => row.institution,
      sortable: true,
  },
  // {
  //     name: 'Kategori Pengguna',
  //     selector: row => row.place_name,
  //     sortable: true,
  // },
  {
    name: 'Aksi',
    cell: (row) => (
      <div>
        <button type="button" className="btn btn-secondary btn-sm text-nowrap" onClick={() => buttonHandlers(row, 'detail')}>Detail</button>
        <button type="button" className="btn btn-secondary btn-sm text-nowrap" onClick={() => buttonHandlers(row, 'approve')}>Approve</button>
        <button type="button" className="btn btn-secondary btn-sm text-nowrap" onClick={() => buttonHandlers(row, 'delete')}>Hapus</button>
      </div>
    ),
    minWidth: 'fit-content',
    ignoreRowClick: true,
    button: true,
    center: true,
  },
];

export default function UserVerifierApproval() {
  const dispatch = useDispatch();
  const { usersVerifier, isLoading, error } = useSelector(state => state.users);
  const [ selectedRows, setSelectedRows ] = useState(false);
  // const [ toggledClearRows, setToggleClearRows ] = useState(false);

  const handleChange = ({ selectedRows }) => {
    setSelectedRows(selectedRows);
    console.log(selectedRows)
  };

  // Toggle the state so React Data Table changes to clearSelectedRows are triggered
  // const handleClearRows = () => {
  //   setToggleClearRows(!toggledClearRows);
  // }

  const ActionButtonHandlers = (payload, type) => {
    if (type === 'approve') {
      // promp are you sure want to approve.
      dispatch(approveUserVerifier(payload.id, usersVerifier));
    } 
    if (type === 'delete') {
      // promp are you sure want to approve.
      dispatch(deleteUserVerifier(payload.id, usersVerifier));
    }
	};

  useEffect(() => dispatch(setUserVerifiers()), []);

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
    // dispatch(createUserMerchant(payload));
  };

  if (isLoading) {
    return (
      <LoadingComponent />
    )
  } else {
    return (
      usersVerifier.length ?
      <>
        <div id="container-fluid">
          <div className="row">
            <div className="col-12">
              <div>
                <DataTable
                  columns={columns(ActionButtonHandlers)}
                  data={usersVerifier?.map(el => {
                    return {
                      id: el.id,
                      created_at: el.created_at,
                      full_name: el.full_name,
                      email: el.email,
                      institution: el.Verifier?.institution,
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
    )
  };
};
