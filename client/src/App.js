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
import AccountVerified from "./Pages/AccountVerified";
import { RequireAuth, HasToken } from './Components/RequireAuth';
import Dashboard from './Pages/Dashboard';
import ForgotPassword from './Pages/ForgotPassword';
import SetPassword from "./Pages/SetPassword";

function App() {
  return (
    <>
      <Routes>
        {/* auth Router Guard*/}
        <Route path="/" element={<RequireAuth><Dashboard/></RequireAuth>}>
          {/* Table utama */}
          <Route index element={<MerchantApproval />}></Route>
          <Route path="/merchants" element={<MerchantApproval />}></Route>
          <Route path="/verifiers" element={<UserVerifierApproval />}></Route>
          <Route path="/active-merchants" element={<ActiveMerchant />}></Route>
          <Route path="/active-merchants/detail" element={<ActiveMerchantDetail />}></Route>
        {/* auth */}
        <Route
          path="/register-verifier"
          element={<RegisterVerificator />}
        ></Route>
        <Route path="/register-merchant" element={<RegisterMerchant />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/otp-verification" element={<OtpInput />}></Route>
        <Route path="/account-verified" element={<AccountVerified />}></Route>
        <Route path="/check-status" element={<CheckStatus />}></Route>
        <Route path="/set-password/:id/:token" element={<SetPassword />}></Route>

        {/* Table utama */}
        <Route path="/merchants" element={<MerchantApproval />}></Route>
        <Route path="/verifiers" element={<UserVerifierApproval />}></Route>
        <Route path="/active-merchants" element={<ActiveMerchant />}></Route>
        <Route
          path="/active-merchants/detail"
          element={<ActiveMerchantDetail />}
        ></Route>

        {/* users, usergroup, category */}
        <Route path="/users" element={<Users />}></Route>
        <Route path="/users/detail" element={<UserDetail />}></Route>
        <Route path="/group-list" element={<ListGroup />}></Route>
        <Route path="/group-list/detail" element={<ListGroupDetail />}></Route>
        <Route path="/change-password" element={<ChangePassword />}></Route>
        <Route path="/categories" element={<CategoryNonTenant />}></Route>
        <Route path="/categories/:id" element={<CategoryNonTenantDetail />}></Route>
        <Route path="/categories/tenant" element={<CategoryTenant />}></Route>

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
        <Route path="/register-verifier" element={<HasToken><RegisterVerificator /></HasToken>}></Route>
        <Route path="/register-merchant" element={<HasToken><RegisterMerchant /></HasToken>}></Route>
        <Route path="/account-verified" element={<HasToken><AccountVerified /></HasToken>}></Route>
        <Route path="/login" element={<HasToken><LoginPage /></HasToken>}></Route>
        <Route path="/otp-verification/:id/:token" element={<HasToken><OtpInput /></HasToken>}></Route>
        <Route path="/check-status" element={<HasToken><CheckStatus /></HasToken>}></Route>
        <Route path="/forgot-password" element={<ForgotPassword />}></Route>
        <Route path="/errors" element={<ErrorPage />}></Route>
        <Route
          path="*"
          element={
            <center style={{ marginTop: "100px" }}>
              <img src="https://i.gifer.com/XOsX.gif" alt="duckWalk" /> Oops
              page not found, go to dashboard
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                {" "}
                Click here.
              </Link>
            </center>
          }
        />
      </Routes>
      <div className="App">
      </div>
    </>
  );
}

export default App;
