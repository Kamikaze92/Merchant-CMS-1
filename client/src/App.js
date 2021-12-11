import { Routes, Route, Link } from "react-router-dom";
import Category from "./Pages/CategoryPage";
import CategoryDetail from "./Pages/CategoryDetailPage";
import CategoryTenant from "./Pages/CategoryTenantPage";
import Sidebar from "./components/sidebar/Sidebar";
import RegisterMerchant from "./Pages/RegisterMerchant";

import RegisterMerchant from "./Pages/RegisterMerchant";
import RegisterVerificator from "./Pages/RegisterVerificator";
function App() {
  // <div className="App">{/* <RegisterMerchant /> */}</div>;
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/category" element={<Category />}></Route>
        <Route path="/category/detail" element={<CategoryDetail />}></Route>
        <Route path="/category/tenant" element={<CategoryTenant />}></Route>
      </Routes>
      <div className="App">
        {/* <RegisterMerchant /> */}
        <RegisterVerificator />
      </div>
    </>
  );
}

export default App;
