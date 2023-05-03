import { useEffect, useState } from "react";
import AdminLayout from "../../../components/admin/adminLayout";
import styles from "../../../styles/admin/testimonials.module.scss";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  deleteDataById,
  getAllData,
  getDataById,
  uploadData,
} from "../../../utils/firebase_data_handler";
import { useQuery } from "@tanstack/react-query";
import { FiEdit2 } from "react-icons/fi";
import { HiEye } from "react-icons/hi";
import { AiFillDelete } from "react-icons/ai";
import { queryClient } from "../../_app";

function Model(props) {
  const { id, show, type, name } = props;
  const [loading, setLoading] = useState(false);
  console.log(id);

  // useEffect(() => {
  //   if (type === "edit") {
  //     setLoading(true);
  //   }
  // }, [type]);

  const DetailsData = useQuery(
    [`${name}/${id}`],
    () => {
      return getDataById(`${name}/${id}`);
    },
    {
      staleTime: 10000 * 60,
      enabled: !!id,
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      name: e.target[0].value,
      title: e.target[1].value,
      content: e.target[2].value,
    };
    if (type === "edit")
      updateDataById(data, `${name}/${id}`).then((res) => {
        if (res.message === "success") {
          queryClient.invalidateQueries(`${name}`);
          alert("Edited"), setLoading(false), props.onHide();
        } else {
          alert("Error"), setLoading(false), props.onHide();
        }
      });
    else
      uploadData(data, `${name}`).then(
        () => alert("Added"),
        setLoading(false),
        props.onHide()
      );
  };

  const handleDelete = () => {
    setLoading(true);
    deleteDataById(`${name}/${id}`).then((res) => {
      if (res.message === "success") {
        queryClient.invalidateQueries(`${name}`);
        alert("Deleted"), setLoading(false), props.onHide();
      } else {
        alert("Error"), setLoading(false), props.onHide();
      }
    });
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {type.charAt(0).toUpperCase() + type.slice(1)}{" "}
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {type === "view" ? (
          <section>
            <h6>Email</h6>
            <h3>{DetailsData.data?.data.id}</h3>
            <br />
            <h6>Name</h6>
            <h3>{DetailsData.data?.data.name}</h3>
            <br />
            <h6>Number</h6>
            <h3>{DetailsData.data?.data.number}</h3>
            <br />
            <h6>Message</h6>
            <h3>{DetailsData.data?.data.message}</h3>
            <br />
          </section>
        ) : type != "delete" ? (
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicInput">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                defaultValue={DetailsData ? DetailsData.data?.data.name : ""}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicInput">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                defaultValue={DetailsData ? DetailsData.data?.data.title : ""}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicInput">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                defaultValue={DetailsData ? DetailsData.data?.data.content : ""}
              />
            </Form.Group>
            <Button variant="success" type="submit">
              {loading ? "Uploading..." : "Upload"}
            </Button>
          </Form>
        ) : (
          <p>Do you want Delete this</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        {type === "delete" ? (
          <Button variant="danger" type="submit" onClick={handleDelete}>
            Delete
          </Button>
        ) : null}
      </Modal.Footer>
    </Modal>
  );
}
function Index() {
  const [modalShow, setModalShow] = useState(false);
  const [type, setType] = useState("add");
  const [id, setID] = useState();

  const contactData = useQuery(
    ["contact"],
    () => {
      return getAllData("contact");
    },
    {
      staleTime: 10000 * 60,
    }
  );
  console.log(contactData);

  return (
    <AdminLayout>
      <div className={styles.testimonials}>
        <div className={styles.head}>
          <h2>Contact</h2>
        </div>
        <hr />
        <div className={styles.all_testimonials}>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Message</th>
                <th>Number</th>
                <th>Options</th>
              </tr>
            </thead>

            <tbody>
              {contactData.data?.data.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.message}</td>
                    <td>{item.number}</td>

                    <td
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <HiEye
                        size={20}
                        onClick={() => {
                          setModalShow(true);
                          setType("view");
                          setID(item.id);
                        }}
                      />
                      <AiFillDelete
                        size={20}
                        onClick={() => {
                          setModalShow(true);
                          setType("delete");
                          setID(item.id);
                        }}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <Model
        show={modalShow}
        type={type}
        id={id}
        name={"contact"}
        onHide={() => setModalShow(false)}
      />
    </AdminLayout>
  );
}

export default Index;
