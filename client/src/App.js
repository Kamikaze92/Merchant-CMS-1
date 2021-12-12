import { Routes, Route, Link } from "react-router-dom";
import CategoryNonTenant from "./Pages/CategoryNonTenantPage";
import CategoryDetail from "./Pages/CategoryDetailPage";
import CategoryTenant from "./Pages/CategoryTenantPage";
import UserDetail from "./Pages/UserDetailPage";
import ListGroup from "./Pages/ListGroupPage";
import GroupDetail from "./Pages/GroupDetailPage";
import Users from "./Pages/Users";
import Sidebar from "./Components/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import OtpInput from "./Pages/OtpInput";
import CheckStatus from "./Pages/CheckStatus";
import RegisterMerchant from "./Pages/RegisterMerchant";
import RegisterVerificator from "./Pages/RegisterVerificator";
import LoginPage from "./Pages/LoginPage";
import ActiveMerchant from "./Pages/ActiveMerchant";

import MerchantApproval from "./Pages/MerchantApproval";
import MerchantDetail from "./Pages/MerchantDetail";

import ErrorPage from "./Pages/ErrorPage";

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
        <Route path="/login" element={<LoginPage />}></Route>
        <Route
          path="/register-verifier"
          element={<RegisterVerificator />}
        ></Route>
        <Route path="/category" element={<CategoryNonTenant />}></Route>
        <Route path="/category/:id" element={<CategoryDetail />}></Route>
        <Route path="/category/tenant" element={<CategoryTenant />}></Route>
        <Route path="/approval/">
          <Route path="merchant" element={<MerchantApproval />}></Route>
          <Route path="verifier" element={<Users />}></Route>
        </Route>
        <Route path="/user-detail" element={<UserDetail />}></Route>
        <Route path="/group-list" element={<ListGroup />}></Route>
        <Route path="/group-detail" element={<GroupDetail />}></Route>

        <Route path="/users" element={<Users />}></Route>

        <Route path="/errors" element={<ErrorPage />}></Route>
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
