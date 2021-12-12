import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUsers, createUser } from '../store/actions/users';
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import MerchantApprovalTable from "../Components/MerchantApprovalTable";

export default function Users() {
  const dispatch = useDispatch();
  const { users, isLoading, error } = useSelector(state => state.users);

  useEffect(() => {
    dispatch(setUsers());
  }, []);

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
    dispatch(createUser(payload));
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
        <div id="table-bg">
          <div className="row">
            <div className="col-2">
            </div>
            <div className="col-10">
              <div class="vh-100">
                <MerchantApprovalTable 
                  datas={users}
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
