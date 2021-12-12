import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserMerchants, createUserMerchant, approveUserMerchant, deleteUserMerchant } from '../store/actions/users';
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import DataTable from 'react-data-table-component';

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
      name: 'Sub-Kategori',
      selector: row => row.sub_category,
      sortable: true,
  },
  {
      name: 'Nama Tempat',
      selector: row => row.place_name,
      sortable: true,
  },
  {
      name: 'Alamat',
      selector: row => row.address,
      sortable: true,
  		wrap: true,
  },
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

export default function UserMerchantApproval() {
  const dispatch = useDispatch();
  const { usersMerchant, isLoading, error } = useSelector(state => state.users);
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
      dispatch(approveUserMerchant(payload.id, usersMerchant));
    } 
    if (type === 'delete') {
      // promp are you sure want to approve.
      dispatch(deleteUserMerchant(payload.id, usersMerchant));
    }
	};

  useEffect(() => dispatch(setUserMerchants()), []);

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
      <div>
        <h1>Loading ...</h1>
      </div>
    )
  } else {
    return (
      <>
        <Navbar />
        {/* <Sidebar /> */}
        <div id="container-fluid">
          <div className="row">
            <div className="col-12">
              <div>
                <DataTable
                  // columns={columns}
                  columns={columns(ActionButtonHandlers)}
                  data={usersMerchant?.map(el => {
                    return {
                      id: el.id,
                      created_at: el.created_at,
                      full_name: el.full_name,
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
        </div>
      </>
    
    )
  };
};
