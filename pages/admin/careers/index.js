import Image from "next/image";
import AdminLayout from "../../../components/admin/adminLayout"
import styles from "../../../styles/admin/contacts.module.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import { useState } from "react";
import { deleteImage, uploadImage } from "../../../utils/firebase_image_upload";

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Centered Modal</h4>
                <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
function Index() {
    const [modalShow, setModalShow] = useState(false);

    const [image, setImage] = useState(null);
    const [title, setTitle] = useState(null);

    const handleApi = (title, imageUrl) => {
        const data = {
            title: title,
            imageUrl: imageUrl
        }

        fetch("/api/careers/image_post", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.message === "success") {
                    alert("Uploaded successfully");
                }
                else {
                    deleteImage(imageUrl);
                    alert("Upload failed, try again");
                }
            })
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        const resp = uploadImage(image, "careers/" + image.name);
        resp.then((data) => {
            if (data.message === "success") {
                handleApi(title, data.data);
            }
            else {
                alert("Image upload failed, try again");
            }
        })
    }
    return (
        <AdminLayout>
            <div className={styles.contacts}>
                <h2>Careers</h2>
                <hr />

                <form onSubmit={handleSubmit} >
                    <input type="file" onChange={(e) => {
                        setImage(e.target.files[0]);
                    }} />
                    <input type="text" onChange={(e) => {
                        setTitle(e.target.value);
                    }} placeholder="Title" />
                    <button type="submit">Upload</button>
                </form>


                <div className={styles.all_contacts} >
                    <Table striped hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>
                                    <Image src="/assets/logos/logo.svg" alt="image" style={{
                                        borderRadius: "50%",
                                        height: "50px",
                                        width: "50px"

                                    }} height={1000} width={1000} />
                                </td>
                                <td>Otto</td>
                                <td>
                                    <MyVerticallyCenteredModal
                                        show={modalShow}
                                        onHide={() => setModalShow(false)}
                                    />
                                    <Button variant="primary" onClick={() => setModalShow(true)}>
                                        Launch vertically centered modal
                                    </Button>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td colSpan={2}>Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </Table>


                    {/* view */}
                    <div class="modal fade " id="careersViewModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="careersViewModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="careersViewModalLabel">Modal title</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    ...
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Understood</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* delete */}
                    <div class="modal fade " id="careersDeleteModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="careersDeleteModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="careersDeleteModalLabel">Modal Delete</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    ...
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Understood</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}

export default Index