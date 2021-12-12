import { Routes, Route, Link } from "react-router-dom";
import CategoryNonTenant from "./Pages/CategoryNonTenantPage";
import CategoryDetail from "./Pages/CategoryDetailPage";
import CategoryTenant from "./Pages/CategoryTenantPage";
import Users from "./Pages/Users";
import Sidebar from "./Components/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import OtpInput from "./Pages/OtpInput";
import CheckStatus from "./Pages/CheckStatus";
import RegisterMerchant from "./Pages/RegisterMerchant";
import RegisterVerificator from "./Pages/RegisterVerificator";
import ActiveMerchant from "./Pages/ActiveMerchant";
function App() {
  // <div className="App">{/* <RegisterMerchant /> */}</div>;
  return (
    <>
      {/* <CheckStatus />
      <OtpInput />
      <RegisterMerchant />
      <RegisterVerificator /> */}
      {/* <ActiveMerchant /> */}
      <Routes>
        <Route path="/category" element={<CategoryNonTenant />}></Route>
        <Route path="/category/:id" element={<CategoryDetail />}></Route>
        <Route path="/category/tenant" element={<CategoryTenant />}></Route>
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
