import React from "react";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/CategoryTenantPage.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategoriesTenant } from "../store/actions/category";
import { Modal, Button, Form } from "react-bootstrap";
import ModalCategoryTenant from "./ModalCategoryTenant";
import {
  createCategoryTenant,
  updateCategoryTenant,
  deleteCategoryTenant,
} from "../store/actions/category";
import LoadingComponent from "./LoadingComponent";
let page = 1;
let pagination = 5;
export default function Category(props) {
  const [show, setShow] = useState({
    name: null,
    payload: null,
    show: false,
    categoryName: "",
  });
  const [inputCategory, setName] = useState("");
  const handleShow = (payload) => setShow(payload);
  const handleClose = (payload) => {
    if (payload.name === null) {
      console.log("masuk gaiss/?");
      setShow({
        name: null,
        payload: null,
        show: false,
      });
      setName("");
    } else {
      if (payload.name === "Tambah Kategori") {
        dispatch(createCategoryTenant(inputCategory));
        setName("");
      } else if (payload.name === "Edit Kategori") {
        dispatch(updateCategoryTenant(payload.payload, inputCategory));
        setName("");
      } else {
        dispatch(deleteCategoryTenant(payload.payload));
      }
    }
  };

  const inputName = (e) => {
    setName(e.target.value);
  };
  const [category, setCategory] = useState([]);
  const [search, setSearch] = useState("");
  const [loadingFilter, setLoading] = useState(false);
  const [noData, setNoData] = useState(false);
  const dispatch = useDispatch();
  const { tenant, loading, error } = useSelector((state) => state.categories);
  useEffect(() => {
    dispatch(getAllCategoriesTenant());
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
  }, [tenant, loading]);
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
        let data = tenant.filter((el, i) => {
          if (i >= filterPage && i < filterPage + 5) {
            return el;
          }
        });
        setCategory(data);
      }
    } else {
      if ((search !== "" && !noData) || page === 1) {
        let data = tenant.filter((el, i) => {
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
        let data = tenant.filter((el, i) => {
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
      < ModalCategoryTenant data={show} />
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
            <button onClick={filterCategory} className="btn btn-default mx-2" style={{backgroundColor:'#229bd8', borderColor:'#229bd8', color: 'white'}}>
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
            <button
              className="btn btn-default"
              style={{fontSize:'15px'}}
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
                  <th>Nama Kategori Tenant</th>
                  <th className="col-2">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {!category.length && !noData
                  ? tenant.map((el, i) => {
                      if (i < 5) {
                        return (
                          <TableCategoryTenant el={el}/>
                        );
                      } else {
                        return null;
                      }
                    })
                  : category
                  ? category.map((el, i) => {
                      return (
                        <TableCategoryTenant el={el}/>
                      );
                    })
                  : null}
              </tbody>
            </table>
          </div>
        ) : 
        <LoadingComponent></LoadingComponent>
        }
        <div className="mt-3">
          <Pagination lengthData={tenant} />
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
      let beforeFiltered = tenant.slice(sliceData);
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

  // function FormPage({ data }) {
  //   let { name, show, payload, categoryName } = data;
  //   let nameUpdate = categoryName;
  //   return (
  //     <Modal
  //       show={show}
  //       onHide={() =>
  //         handleClose({
  //           name: null,
  //           payload: null,
  //         })
  //       }
  //       animation={false}
  //     >
  //       <Modal.Header closeButton>
  //         <Modal.Title>{name}</Modal.Title>
  //       </Modal.Header>
  //       <Modal.Body>
  //         {name === "Edit Kategori" || name === "Tambah Kategori" ? (
  //           <>
  //             <Form.Label>Name</Form.Label>
  //             <input
  //               onChange={inputName}
  //               type="text"
  //               value={inputCategory}
  //               className="form-control"
  //               placeholder="Name"
  //               aria-label="Name"
  //               aria-describedby="basic-addon2"
  //             ></input>
  //           </>
  //         ) : null}
  //       </Modal.Body>
  //       <Modal.Footer>
  //         <Button
  //           variant="secondary"
  //           onClick={() =>
  //             handleClose({
  //               name: null,
  //               payload: null,
  //             })
  //           }
  //         >
  //           Close
  //         </Button>
  //         <Button
  //           variant="primary"
  //           onClick={() =>
  //             handleClose({
  //               name,
  //               payload,
  //             })
  //           }
  //         >
  //           Save Changes
  //         </Button>
  //       </Modal.Footer>
  //     </Modal>
  //   );
  // }

  function TableCategoryTenant({el}) {
    return (
      <tr key={el.id}>
        <td>{el.name}</td>
        <td>
        <p style={{fontSize: '13px'}}>
          <i
            className="bi bi-pencil-fill"
            style={{ color: "#229BD8" }}
            onClick={() =>
              handleShow({
                name: "Edit Kategori",
                payload: el.id,
                categoryName: el.name,
                show: true,
              })
            }
          ></i> &nbsp;
          <a
            onClick={() =>
              handleShow({
                name: "Edit Kategori",
                payload: el.id,
                categoryName: el.name,
                show: true,
              })
            }
            style={{ color: "#229BD8" }}
          >
            Edit
          </a> &nbsp; 
          <i
            className="bi bi-trash  bd-highlight"
            style={{ color: "#F6303A" }}
            onClick={() =>
              handleShow({
                name: "Hapus Kategori",
                payload: el.id,
                categoryName: "",
                show: true,
              })
            }
          ></i> &nbsp;
          <a
            onClick={() =>
              handleShow({
                name: "Hapus Kategori",
                payload: el.id,
                categoryName: "",
                show: true,
              })
            }
            style={{ color: "#F6303A" }}
          >
            Hapus
          </a>
          </p>
        </td>
      </tr>
    )
  }

}