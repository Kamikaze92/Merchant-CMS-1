import { useEffect, useState } from "react";
import "./css/CategoryTenantPage.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategoriesTenant } from "../store/actions/category";
export default function Category(props) {
  const [category, setCategory] = useState([]);
  const [search, setSearch] = useState("");
  const [loadingFilter, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { tenant, loading, error } = useSelector((state) => state.category);
  useEffect(() => {
    dispatch(getAllCategoriesTenant());
  }, []);

  const inputSearch = (e) => {
    setSearch(e.target.value);
  };
  const filterCategory = () => {
    setLoading(true);
    if (search === "") {
      setCategory(tenant);
    } else {
      let data = tenant.filter((el) => {
        if (el.name.toLowerCase().search(search.toLowerCase()) >= 0) {
          return el;
        }
      });
      setCategory(data);
      setLoading(false);
    }
  };
  const pages = () => {
    tenant.map((el, i) => {
      if (i < Math.floor(tenant.length / 5)) {
        return el;
      }
    });
  };
  return (
    <>
      <div className="context">
        <p className="admin">Administrasi - Kategori Tenant</p>
        <p className="list">Daftar Kategori Tenant</p>
      </div>
      <div className="filter p-3">
        <div className="input-group mb-3 input-filter">
          <input
            onChange={inputSearch}
            type="text"
            className="form-control"
            placeholder="Cari kategori tenant"
            aria-label="Cari kategori tenant"
            aria-describedby="basic-addon2"
          ></input>
          <div className="input-group-append">
            <button onClick={filterCategory} className="button-search">
              Cari
            </button>
          </div>
        </div>
      </div>
      <div className="kategori">
        <div className="d-flex">
          <div className="mt-4">
            <p>Daftar Kategori</p>
          </div>
          <div className="input-group-append add-category mt-4">
            <button>+ Tambah Kategori</button>
          </div>
        </div>
        {!loading || !loadingFilter ? (
          <div className="mt-4">
            <table className="table" style={{ width: "960px", margin: "auto" }}>
              <thead>
                <tr
                  style={{
                    backgroundColor: "#FAFAFA",
                  }}
                >
                  <th>Nama Kategori Tenant</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {!category.length
                  ? tenant.map((el, i) => {
                      if (i < 5) {
                        return (
                          <tr key={el.id}>
                            <td>{el.name}</td>
                            <td>{el.name}</td>
                          </tr>
                        );
                      }
                    })
                  : category.map((el, i) => {
                      if (i < 5) {
                        return (
                          <tr key={el.id}>
                            <td>{el.name}</td>
                            <td>{el.name}</td>
                          </tr>
                        );
                      }
                    })}
              </tbody>
            </table>
          </div>
        ) : null}
        <div className="mt-3">
          <Pagination />
        </div>
      </div>
    </>
  );
}

function Pagination({ lengthData }) {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-end">
        <li className="page-item disabled">
          <a className="page-link" tabIndex="-1">
            Previous
          </a>
        </li>
        {lengthData
          ? lengthData.map((el, i) => {
              if (lengthData.length > 5 && i < 5) {
                return (
                  <li className="page-item">
                    <a className="page-link">{i + 1}</a>
                  </li>
                );
              }
            })
          : null}
        <li className="page-item">
          <a className="page-link">Next</a>
        </li>
      </ul>
    </nav>
  );
}
