import { Routes, Route, Link } from "react-router-dom";
import Category from "./Pages/CategoryPage";
import CategoryDetail from "./Pages/CategoryDetailPage";
import CategoryTenant from "./Pages/CategoryTenantPage";
import Users from "./Pages/Users";
import Sidebar from "./Sidebar";

import OtpInput from './Pages/OtpInput';

import RegisterMerchant from "./Pages/RegisterMerchant";
import RegisterVerificator from "./Pages/RegisterVerificator";

function App() {
  // <div className="App">{/* <RegisterMerchant /> */}</div>;
  return (
    <>
      <OtpInput />
      <Sidebar />
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
