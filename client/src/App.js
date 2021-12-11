import { Routes, Route, Link } from "react-router-dom";
import Category from "./Pages/CategoryPage";
import CategoryDetail from "./Pages/CategoryDetailPage";
import CategoryTenant from "./Pages/CategoryTenantPage";
import Users from "./Pages/Users";
import Sidebar from "./Components/Sidebar";

import OtpInput from './Pages/OtpInput';
import CheckStatus from './Pages/CheckStatus'
import RegisterMerchant from "./Pages/RegisterMerchant";
import RegisterVerificator from "./Pages/RegisterVerificator";
import ActiveMerchant from "./Pages/ActiveMerchant"
function App() {
  // <div className="App">{/* <RegisterMerchant /> */}</div>;
  return (
    <>
      {/* <CheckStatus />
      <OtpInput />
      <RegisterMerchant />
      <RegisterVerificator /> */}
      <ActiveMerchant />
      <Routes>
        <Route path="/category" element={<Category />}></Route>
        <Route path="/category/detail" element={<CategoryDetail />}></Route>
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
