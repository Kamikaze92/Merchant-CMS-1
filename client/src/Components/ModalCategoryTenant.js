import React from "react";
import { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import {
    createCategoryTenant,
    updateCategoryTenant,
    deleteCategoryTenant,
  } from "../store/actions/category";
  import { useDispatch, useSelector } from "react-redux";
export default function ModalCategoryTenant({data}) {
    console.log(data, 'joiahh');
    let { name, show, payload, categoryName } = data;
    let nameUpdate = categoryName;
    const { tenant, loading, error } = useSelector((state) => state.categories);
    const dispatch = useDispatch();
    const [inputCategory, setName] = useState("");
    const [open, setOpen] = useState(true);
    const handleShow = (payload) => setOpen(payload);
  const handleClose = (payload) => {
    if (payload.name === null) {
      console.log("masuk gaiss/?");
      setOpen(true)
      setName("");
    } else {
      if (payload.name === "Tambah Kategori") {
          console.log('masukk');
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
  useEffect(() => {
    console.log("asup ga sihh???", loading);
    if (!loading) {
    //   setOpen(tr);
    }
  }, [tenant, loading]);

        return (
          <Modal
            show={show && open}
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
              {name === "Edit Kategori" || name === "Tambah Kategori" ? (
                <>
                  <Form.Label>Name</Form.Label>
                  <input
                    onChange={inputName}
                    type="text"
                    value={inputCategory}
                    className="form-control"
                    placeholder="Name"
                    aria-label="Name"
                    aria-describedby="basic-addon2"
                  ></input>
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