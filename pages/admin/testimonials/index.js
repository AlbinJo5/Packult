import { useEffect, useState } from "react";
import AdminLayout from "../../../components/admin/adminLayout"
import styles from "../../../styles/admin/testimonials.module.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Image from "next/image";
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
function AddModel(props) {
    const [loading, setloading] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        setloading(true);
        const data = {
            name: e.target[0].value,
            title: e.target[1].value,
            content: e.target[2].value,
        }

        fetch("/api/testimonials/post", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.message === "success") {
                    props.newDataAdded(data.data);
                    setloading(false);
                    props.onHide();
                }
                else {
                    alert("Upload failed, try again");
                    setloading(false);
                }
            })
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add Testimonial
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit} >
                    <Form.Group className="mb-3" controlId="formBasicInput">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicInput">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicInput">
                        <Form.Label>Content</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>

                    <Button variant="success" type="submit">
                        {
                            loading ? "Uploading..." : "Upload"
                        }
                    </Button>
                </Form>
            </Modal.Body>

        </Modal>
    );
}


function Index() {

    const [data, setData] = useState([]);
    const [addModalShow, setAddModalShow] = useState(false);
    useEffect(() => {
        fetch("/api/testimonials/get_all")
            .then((res) => res.json())
            .then((data) => {
                if (data.message === "success") {
                    setData(data.data);
                }
            })
    }, [])

    const newDataAdded = (newData) => {
        setData([...data, newData]);
    }


    return (
        <AdminLayout>
            <div className={styles.testimonials}>
                <div className={styles.head} >
                    <h2>Testimonials</h2>
                    <Button variant="success" onClick={() => setAddModalShow(true)}>
                        Add
                    </Button>
                </div>
                <hr />
                <div className={styles.all_testimonials} >
                    <Table striped hover responsive={false}>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Content</th>
                                <th>Title</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{
                                            item.content.length > 50 ?
                                                item.content.substring(0, 50) + "..."
                                                : item.content
                                        }</td>
                                        <td>{item.title}</td>
                                        <td style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",


                                        }} >
                                            <OverlayTrigger
                                                key={1}
                                                placement={"top"}
                                                overlay={
                                                    <Tooltip id={`tooltip-${"top"}`}>
                                                        View
                                                    </Tooltip>
                                                }
                                            >
                                                <Image style={{
                                                    cursor: "pointer"
                                                }} src="/assets/icons/eye.svg" width={20} height={20} alt={"view"} />
                                            </OverlayTrigger>
                                            <OverlayTrigger
                                                key={1}
                                                placement={"top"}
                                                overlay={
                                                    <Tooltip id={`tooltip-${"top"}`}>
                                                        Edit
                                                    </Tooltip>
                                                }
                                            >
                                                <Image style={{
                                                    cursor: "pointer"
                                                }} src="/assets/icons/pen.svg" width={20} height={20} alt={"edit"} />
                                            </OverlayTrigger>
                                            <OverlayTrigger
                                                key={1}
                                                placement={"top"}
                                                overlay={
                                                    <Tooltip id={`tooltip-${"top"}`}>
                                                        Delete
                                                    </Tooltip>
                                                }
                                            >
                                                <Image style={{
                                                    cursor: "pointer"
                                                }} src="/assets/icons/trash.svg" width={20} height={20} alt={"delete"} />
                                            </OverlayTrigger>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </div>
            </div>

            <AddModel
                show={addModalShow}
                onHide={() => setAddModalShow(false)}
                newDataAdded={newDataAdded}
            />
        </AdminLayout>
    )
}

export default Index