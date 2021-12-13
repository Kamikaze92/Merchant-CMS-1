import { Routes, Route, Link } from "react-router-dom";
import CategoryNonTenant from "./Pages/CategoryNonTenant";
import CategoryNonTenantDetail from "./Pages/CategoryNonTenantDetail";
import CategoryTenant from "./Pages/CategoryTenant";
import UserDetail from "./Pages/UserDetail";
import ListGroup from "./Pages/ListGroup";
import Users from "./Pages/Users";
import OtpInput from "./Pages/OtpInput";
import CheckStatus from "./Pages/CheckStatus";
import RegisterMerchant from "./Pages/RegisterMerchant";
import RegisterVerificator from "./Pages/RegisterVerificator";
import LoginPage from "./Pages/LoginPage";
import ActiveMerchant from "./Pages/ActiveMerchant";
import UserVerifierApproval from "./Pages/UserVerifierApproval";
import MerchantApproval from "./Pages/MerchantApproval";
import ActiveMerchantDetail from "./Pages/ActiveMerchantDetail";
import ErrorPage from "./Pages/ErrorPage";
import ListGroupDetail from "./Pages/ListGroupDetail";
import ChangePassword from "./Pages/ChangePassword";
import { RequireAuth } from './Components/RequireAuth';
import Dashboard from './Pages/Dashboard';
function App() {
  return (
    <>
      <Routes>
        {/* auth Router Guard*/}
        <Route path="/" element={<RequireAuth><Dashboard/></RequireAuth>}>
          {/* Table utama */}
          <Route path="/merchants" element={<MerchantApproval />}></Route>
          <Route path="/verifiers" element={<UserVerifierApproval />}></Route>
          <Route path="/active-merchants" element={<ActiveMerchant />}></Route>
          <Route path="/active-merchants/detail" element={<ActiveMerchantDetail />}></Route>

          {/* users, usergroup, category */}
          <Route path="/users" element={<Users />}></Route>
          <Route path="/users/detail" element={<UserDetail />}></Route>
          <Route path="/group-list" element={<ListGroup />}></Route>
          <Route path="/group-list/detail" element={<ListGroupDetail />}></Route>
          <Route path="/change-password" element={<ChangePassword />}></Route>
          <Route path="/categories" element={<CategoryNonTenant />}></Route>
          <Route path="/categories/tenant" element={<CategoryTenant />}></Route>
          <Route path="/categories/:id" element={<CategoryNonTenantDetail />}></Route>
        </Route>
        <Route path="/register-verifier" element={<RegisterVerificator />}></Route>
        <Route path="/register-merchant" element={<RegisterMerchant />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/otp-verification" element={<OtpInput />}></Route>
        <Route path="/check-status" element={<CheckStatus />}></Route>
        <Route path="/errors" element={<ErrorPage />}></Route>
      </Routes>
      <div className="App">
      </div>
    </>
  );
}

export default App;
