import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/CategoryTenantPage.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategoriesTenant } from "../store/actions/category";
import { Modal, Button, Form } from "react-bootstrap";
import CategoryDetail from "./CategoryNonTenantDetailTable";
import {
  getAllCategoriesNonTenant,
  createCategoryNonTenant,
} from "../store/actions/category";
let page = 1;
let pagination = 5;
export default function CategoryNonTenant(props) {
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [loadingFilter, setLoading] = useState(false);
  const [noData, setNoData] = useState(false);
  const dispatch = useDispatch();
  const { non_tenant, loading, error } = useSelector((state) => state.category);
  const [show, setShow] = useState({
    name: null,
    payload: null,
    show: false,
    categoryName: "",
  });
  const [input, setInput] = useState();
  const handleShow = (payload) => setShow(payload);
  const handleClose = (payload) => {
    if (payload.name === null) {
      console.log("masuk gaiss/?");
      setShow({
        name: null,
        payload: null,
        show: false,
      });
    } else {
      if (payload.name === "Tambah Kategori") {
        dispatch(createCategoryNonTenant(input));
      }
    }
  };

  const inputName = (e) => {
    let data = {
      ...input,
    };
    data[e.target.name] = e.target.value;
    console.log(data, ">>>>> asuppp");
    setInput(data);
  };
  useEffect(() => {
    dispatch(getAllCategoriesNonTenant());
  }, []);
  useEffect(() => {
    if (!loading) {
      setShow({
        name: null,
        payload: null,
        show: false,
        categoryName: "",
      });
    }
  }, [non_tenant, loading]);
  const inputSearch = (e) => {
    setSearch(e.target.value);
  };
  const filterCategory = () => {
    if (category.length) {
      if (search !== "") {
        let data = category.filter((el) => {
          if (el.name.toLowerCase().search(search.toLowerCase()) >= 0) {
            return el;
          }
        });
        if (!data.length) {
          setNoData(true);
          setCategory([]);
        } else {
          setNoData(false);
          setCategory(data);
        }
      } else {
        let filterPage = 0;
        if (page > 1) {
          filterPage = (page - 1) * pagination;
        }
        let data = non_tenant.filter((el, i) => {
          if (i >= filterPage && i < filterPage + 5) {
            return el;
          }
        });
        setCategory(data);
      }
    } else {
      if ((search !== "" && !noData) || page === 1) {
        let data = non_tenant.filter((el, i) => {
          if (i < 5) {
            if (el.name.toLowerCase().search(search.toLowerCase()) >= 0) {
              return el;
            }
          }
        });
        setCategory(data);
      } else {
        let filterPage = 0;
        if (page > 1) {
          filterPage = (page - 1) * pagination;
        }
        let data = non_tenant.filter((el, i) => {
          if (
            i >= filterPage &&
            i < filterPage + 5 &&
            el.name.toLowerCase().search(search.toLowerCase()) >= 0
          ) {
            return el;
          }
        });
        setCategory(data);
      }
    }
  };
  return (
    <>
      <FormPage data={show} />
      <div className="filter p-3">
        <div className="input-group mb-3 input-filter">
          <input
            onChange={inputSearch}
            type="text"
            className="form-control"
            placeholder="Cari Nama Group"
            aria-label="Cari Nama Group"
            aria-describedby="basic-addon2"
          ></input>
          <div className="input-group-append">
            <button onClick={filterCategory} className="btn btn-default mx-2">
              Cari
            </button>
          </div>
        </div>
      </div>
      <div className="kategori">
        <div className="d-flex">
          <div className="mt-4">
            <p style={{fontWeight: "bold"}}>Daftar Kategori</p>
          </div>
          <div className="input-group-append add-category mt-4">
            <button
              className="btn btn-default"
              onClick={() =>
                handleShow({
                  name: "Tambah Kategori",
                  payload: null,
                  categoryName: "",
                  show: true,
                })
              }
            >
              + Tambah Kategori
            </button>
          </div>
        </div>
        {!loading || !loadingFilter ? (
          <div className="mt-4">
            <table className="table" style={{ width: "960px", margin: "auto" }}>
              <thead>
                <tr
                  style={{
                    backgroundColor: "#FAFAFA",
                    borderBottom: "none",
                  }}
                >
                  <th>Nama Kategori</th>
                  <th>Deskripsi</th>
                  <th>Jumlah Sub-Kategori</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {!category.length && !noData
                  ? non_tenant.map((el, i) => {
                      if (i < 5) {
                        return (
                          <tr key={el.id}>
                            <td>{el.name}</td>
                            <td>{el.description}</td>
                            <td>
                              {el.sub_category?.length
                                ? el.sub_category.length
                                : 0}
                            </td>
                            <td>
                              <a style={{cursor: "pointer"}}
                              onClick={() => navigate(`/categories/${el.id}`)}>
                                <i class='bx bx-list-ul' ></i>
                                Detail
                              </a>
                            </td>
                          </tr>
                        );
                      } else {
                        return null;
                      }
                    })
                  : category
                  ? category.map((el, i) => {
                      return (
                        <tr key={el.id}>
                          <td>{el.name}</td>
                          <td>{el.description}</td>
                          <td>
                            {el.sub_category?.length
                              ? el.sub_category.length
                              : 0}
                          </td>
                          <td>
                            <a style={{cursor: "pointer"}}
                            onClick={() => navigate(`/categories/${el.id}`)}>
                              <i class='bx bx-list-ul' ></i>
                              Detail
                            </a>
                          </td>
                        </tr>
                      );
                    })
                  : null}
              </tbody>
            </table>
          </div>
        ) : null}
        <div className="mt-3">
          <Pagination lengthData={non_tenant} />
        </div>
      </div>
    </>
  );
  function Pagination({ lengthData }) {
    let data = Math.ceil(lengthData.length / pagination);
    let pageNumber = [];
    for (let i = 0; i < data; i++) {
      pageNumber.push(i + 1);
    }

    const findPage = async (payload) => {
      if (payload === "min") {
        if (page === 1) {
          page = 1;
        } else {
          page = page - 1;
        }
      } else if (payload === "max") {
        page = page + 1;
      } else {
        page = payload;
      }
      if (page > pageNumber.length) {
        page = pageNumber.length;
      }
      let sliceData = (page - 1) * pagination;
      if (sliceData === 0) {
        sliceData = 0;
      }
      let beforeFiltered = non_tenant.slice(sliceData);
      let afterPagination = beforeFiltered.filter((el, i) => {
        if (i < pagination) {
          return el;
        }
      });
      setCategory(afterPagination);
    };

    let Pagination = pageNumber.map((el, i) => {
      return (
        <li className="page-item" key={el.id}>
          <a className="page-link" onClick={() => findPage(i + 1)}>
            {i + 1}
          </a>
        </li>
      );
    });
    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-end">
          <li className="page-item">
            <a
              className="page-link"
              tabIndex="-1"
              onClick={() => findPage("min")}
            >
              Previous
            </a>
          </li>
          {Pagination}
          <li className="page-item">
            <a className="page-link" onClick={() => findPage("max")}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    );
  }

  function FormPage({ data }) {
    let { name, show, payload, categoryName } = data;
    let nameUpdate = categoryName;
    return (
      <Modal
        show={show}
        onHide={() =>
          handleClose({
            name: null,
            payload: null,
          })
        }
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>Name</Form.Label>
          <input
            onChange={inputName}
            name="name"
            type="text"
            // defaultValue={nameUpdate}
            // value={nameUpdate}
            className="form-control"
            placeholder="Name"
            aria-label="Name"
            aria-describedby="basic-addon2"
          ></input>
          <Form.Label>Deskripsi</Form.Label>
          <input
            onChange={inputName}
            name="description"
            type="text"
            // defaultValue={nameUpdate}
            // value={nameUpdate}
            className="form-control"
            placeholder="Deskripsi"
            aria-label="Deskripsi"
            aria-describedby="basic-addon2"
          ></input>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() =>
              handleClose({
                name: null,
                payload: null,
              })
            }
          >
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() =>
              handleClose({
                name,
                payload,
              })
            }
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
