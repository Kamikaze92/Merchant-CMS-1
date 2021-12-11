import { useEffect, useState } from "react";
import "./CategoryPage.css";
import axios from "../config/server";
export default function Category(props) {
  const [category, setCategory] = useState([]);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [lengthData, setLength] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  useEffect(async () => {
    try {
      setLoading(true);
      let response = await axios({
        url: "/categories/tenant",
      });
      setData(response.data);
      let data = Math.floor(response.data.length / 5);
      let pagination = [];
      for (let i = 0; i < 20; i++) {
        pagination.push(i);
      }
      setLength(pagination);
      setCategory(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  }, []);

  const inputSearch = (e) => {
    setSearch(e.target.value);
  };

  const filterCategory = () => {
    setLoading(true);
    if (search === "") {
      setCategory(data);
      setLoading(false);
    } else {
      let data = category.filter((el) => {
        if (el.name.toLowerCase().search(search.toLowerCase()) >= 0) {
          return el;
        }
      });
      setCategory(data);
      setLoading(false);
    }
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
        {!loading ? (
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
                {category.length
                  ? category.map((el, i) => {
                      if (i < 5) {
                        return (
                          <tr>
                            <td>{el.name}</td>
                            <td>{el.name}</td>
                          </tr>
                        );
                      }
                    })
                  : null}
              </tbody>
            </table>
          </div>
        ) : null}
        <div className="mt-3">
          <Pagination lengthData={lengthData} />
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
