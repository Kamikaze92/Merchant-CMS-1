import { Routes, Route, Link } from "react-router-dom";
import CategoryNonTenant from "./Pages/CategoryNonTenantPage";
import CategoryDetail from "./Pages/CategoryDetailPage";
import CategoryTenant from "./Pages/CategoryTenantPage";
import UserDetail from "./Pages/UserDetailPage";
import ListGroup from "./Pages/ListGroupPage";
import GroupDetail from "./Pages/GroupDetailPage";
import Users from "./Pages/Users";
import Sidebar from "./Components/Sidebar";
import OtpInput from "./Pages/OtpInput";
import CheckStatus from "./Pages/CheckStatus";
import RegisterMerchant from "./Pages/RegisterMerchant";
import RegisterVerificator from "./Pages/RegisterVerificator";
import ActiveMerchant from "./Pages/ActiveMerchant";

import MerchantApproval from "./Pages/MerchantApproval";
import MerchantDetail from './Pages/MerchantDetail';

function App() {
  // <div className="App">{/* <RegisterMerchant /> */}</div>;
  return (
    <>
      {/* <CheckStatus />
      <OtpInput />
      <RegisterMerchant />
      <RegisterVerificator /> */}
      {/* <ActiveMerchant /> */}
      {/* <MerchantDetail /> */}
      <Routes>
        <Route path="/register-merchant" element={<RegisterMerchant />}></Route>
        <Route path="/register-verifier" element={<RegisterVerificator />}></Route>
        <Route path="/category" element={<CategoryNonTenant />}></Route>
        <Route path="/category/detail" element={<CategoryDetail />}></Route>
        <Route path="/category/tenant" element={<CategoryTenant />}></Route>

        <Route path="/user-detail" element={<UserDetail />}></Route>
        <Route path="/group-list" element={<ListGroup />}></Route>
        <Route path="/group-detail" element={<GroupDetail />}></Route>

        <Route path="/users" element={<Users />}></Route>
      </Routes>
      <div className="App">
        {/* <RegisterMerchant /> */}
        {/* <RegisterVerificator /> */}
        {/* <OtpInput /> */}
        {/* <RegisterMerchant /> */}
      </div>
    </>
  );
}

export default App;
