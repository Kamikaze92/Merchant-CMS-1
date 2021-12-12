import { Routes, Route, Link } from "react-router-dom";
import Category from "./Pages/CategoryPage";
import CategoryDetail from "./Pages/CategoryDetailPage";
import CategoryTenant from "./Pages/CategoryTenantPage";
import ListGroup from "./Pages/ListGroupPage";
import GroupDetail from "./Pages/GroupDetailPage";
import Sidebar from "./Sidebar";

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
        <Route path="/group-list" element={<ListGroup />}></Route>
        <Route path="/group-detail" element={<GroupDetail />}></Route>
      </Routes>
      <div className="App">
        {/* <RegisterMerchant /> */}
        {/* <RegisterVerificator /> */}
      </div>
    </>
  );
}

export default App;
