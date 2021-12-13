import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import axios from "../config/server";
import { useNavigate } from "react-router";
import {
  updateCategoryNonTenant,
  deleteCategoryNonTenant,
  createNewSubCategory,
  deleteSubCategory,
  updateSubCategory,
} from "../store/actions/category";
import { Modal, Button, Form } from "react-bootstrap";
export default function CategoryDetail(props) {
  const { id } = useParams();
  const [input, setInput] = useState();
  const navigate = useNavigate();
  const {
    non_tenant,
    loading,
    error,
    updated,
    createdSub,
    successDeleted,
    updatedSub,
  } = useSelector((state) => state.category);
  const [data, setData] = useState();
  const dispatch = useDispatch();
  const [show, setShow] = useState({
    name: null,
    payload: null,
    show: false,
    categoryName: "",
  });
  const inputName = (e) => {
    let data = {
      ...input,
    };
    data[e.target.name] = e.target.value;
    setInput(data);
  };
  const handleShow = (payload) => setShow(payload);
  const handleClose = (payload) => {
    if (payload.name === null) {
      setShow({
        name: null,
        payload: null,
        show: false,
      });
    } else {
      if (payload.name === "Edit Kategori") {
        dispatch(updateCategoryNonTenant(payload.payload, input));
      } else if (payload.name === "Hapus Kategori") {
        dispatch(deleteCategoryNonTenant(payload.payload));
        navigate("/category");
      } else if (payload.name === "Tambah Sub Kategori") {
        dispatch(createNewSubCategory(payload.payload, input));
      } else if (payload.name === "Hapus Sub Kategori") {
        dispatch(deleteSubCategory(payload.payload));
      } else if (payload.name === "Edit Sub Kategori") {
        dispatch(updateSubCategory(payload.payload, input));
      }
    }
  };
  useEffect(async () => {
    if (!non_tenant.length) {
      let response = await axios({
        url: `/categories/${id}`,
      });
      setData(response.data);
    } else {
      let data = non_tenant.filter((el) => el.id == id)[0];
      setData(data);
    }
  }, []);
  console.log(data, ">>>>>");

  useEffect(async () => {
    if (updated || createdSub || successDeleted || updatedSub) {
      console.log("masuk haahh");
      let response = await axios({
        url: `/categories/${id}`,
      });
      setData(response.data);
    }
  }, [updated, createdSub, successDeleted, updatedSub]);
  return (
    <>
      <FormPage data={show} />

      <div className="container1">
        <div className="row card mt-4" style={{ width: "990px" }}>
          <div
            className="mb-3 d-flex align-items-center bd-highlight mb-3"
            style={{
              color: "#f8f8f8",
              backgroundColor: "#229BD8",
            }}
          >
            <p className="fw-bolder m-3 me-auto  bd-highlight">Anggota Group</p>

            <i
              className="bi bi-pencil  bd-highlight"
              style={{ color: "#f8f8f8" }}
            ></i>
            <p
              className="m-3  bd-highlight"
              onClick={() =>
                handleShow({
                  name: "Edit Kategori",
                  payload: data.id,
                  categoryName: "",
                  show: true,
                })
              }
            >
              Edit
            </p>
            <i
              className="bi bi-trash  bd-highlight"
              style={{ color: "#f8f8f8" }}
            ></i>
            <p
              className="m-3  bd-highlight"
              onClick={() =>
                handleShow({
                  name: "Hapus Kategori",
                  payload: data.id,
                  categoryName: "",
                  show: true,
                })
              }
            >
              Hapus
            </p>
          </div>
          <div className="d-flex flex-row">
            <div>
              <div className="d-flex flex-row">
                <div className="d-flex flex-column fw-bolder">
                  <p>Nama</p>
                  <p>Deskripsi</p>
                  <p>Dibuat Oleh</p>
                  <p>Dibuat Pada</p>
                </div>
                {data ? (
                  <div className="d-flex flex-column ms-4">
                    <p>:{data.name}</p>
                    <p>:{data.description}</p>
                    <p>:{data.created_by}</p>
                    <p>:{data.created_at}</p>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-3">
          <div className="col me-2">
            <div
              className="row card mt-4"
              style={{ width: "990px", marginLeft: "-20px" }}
            >
              <div
                className="mb-3 d-flex align-items-center bd-highlight mb-3"
                style={{ color: "#f8f8f8", backgroundColor: "#229BD8" }}
              >
                <p className="fw-bolder m-3 me-auto  bd-highlight">
                  Sub Kategori
                </p>
                <i
                  className="bi bi-plus-lg  bd-highlight"
                  style={{ color: "#f8f8f8" }}
                ></i>
                <p
                  className="m-3  bd-highlight"
                  onClick={() =>
                    handleShow({
                      name: "Tambah Sub Kategori",
                      payload: data.id,
                      categoryName: "",
                      show: true,
                    })
                  }
                >
                  Tambah
                </p>
                <i
                  className="bi bi-trash  bd-highlight"
                  style={{ color: "#f8f8f8" }}
                ></i>
                <p
                  className="m-3  bd-highlight"
                  // onClick={() =>
                  //   handleShow({
                  //     name: "Hapus Sub Kategori",
                  //     payload: data.id,
                  //     categoryName: "",
                  //     show: true,
                  //   })
                  // }
                >
                  Hapus
                </p>
              </div>
              <div className="px-3 mb-3">
                <input class="form-control" placeholder="Cari Nama Grup" />
              </div>
              <div className="d-flex flex-row">
                <table class="table">
                  <tbody>
                    <tr>
                      <th scope="col">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                        />
                      </th>
                      <th className="fw-bolder" scope="col">
                        Sub Kategori
                      </th>
                      <th className="fw-bolder" scope="col">
                        Aksi
                      </th>
                    </tr>

                    {data
                      ? data.sub_category?.map((el) => {
                          return (
                            <tr>
                              <th scope="col" key={el.id}>
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  value=""
                                />
                              </th>
                              <td>{el.name}</td>
                              <td>
                                <div className="d-flex align-items-center bd-highlight mb-3">
                                  <i
                                    className="bi bi-pencil-fill"
                                    style={{ color: "#229BD8" }}
                                  ></i>
                                  <div
                                    style={{ height: "20px" }}
                                    onClick={() =>
                                      handleShow({
                                        name: "Edit Sub Kategori",
                                        payload: el.id,
                                        categoryName: "",
                                        show: true,
                                      })
                                    }
                                  >
                                    <p className="ms-2 me-4  bd-highlight">
                                      Edit
                                    </p>
                                  </div>
                                  <i
                                    className="bi bi-trash  bd-highlight"
                                    style={{ color: "#DD4A48" }}
                                  ></i>
                                  <div
                                    style={{ height: "20px" }}
                                    onClick={() =>
                                      handleShow({
                                        name: "Hapus Sub Kategori",
                                        payload: el.id,
                                        categoryName: "",
                                        show: true,
                                      })
                                    }
                                  >
                                    <p className="ms-2 me-4  bd-highlight">
                                      Hapus
                                    </p>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          );
                        })
                      : null}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

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
          {name === "Hapus Kategori" || name === "Hapus Sub Kategori" ? (
            <>
              <Form.Label>delete</Form.Label>
            </>
          ) : null}
          {name === "Tambah Sub Kategori" ? (
            <>
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
            </>
          ) : null}
          {name === "Edit Kategori" || name === "Edit Sub Kategori" ? (
            <>
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
              {name === "Edit Kategori" ? (
                <>
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
                </>
              ) : null}
            </>
          ) : null}
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