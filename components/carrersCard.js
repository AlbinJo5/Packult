import React from "react";
import styles from "../styles/components/carrersCard.module.scss";
import { Button, Input, Modal, Spacer, Text } from "@nextui-org/react";
import { Form } from "react-bootstrap";
import { uploadImage } from "../utils/firebase_image_upload";
import { uploadData } from "../utils/firebase_data_handler";
import { queryClient } from "../pages/_app";

function CarrersCard(props) {
  const { id, title, workHours, exp, location } = props;
  const handleSubmitImage = (e) => {
    alert("Image Upload Started");
    alert(e.target[0].value);
    alert(e.target[2].value);
    alert(e.target[4].value);
    alert(e.target[5].value);
    e.preventDefault();

    const name = e.target[0].value;
    const email = e.target[2].value;
    const phone = e.target[4].value;
    const doc = e.target[6].files[0];

    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1; // months start at 0, so add 1 to get the current month
    const day = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const currentDateTime = `${year}-${month}-${day} ${hours}:${minutes}`;

    const resp = uploadImage(doc, `Test`);
    resp.then((res) => {
      if (res.message === "success") {
        const data = {
          name: name,
          date: currentDateTime,
          email: email,
          phone: phone,
          doc: res.data,
        };
        uploadData(data, `careers/${id}/applicants`).then((res) => {
          if (res.message === "success") {
            alert("Data Uploaded");
            queryClient.invalidateQueries("careers");
          }
          else {
            alert("Data Upload Failed.");
            console.log(res.data);
          }
        });
      } else {
        alert("Image Upload Failed.");
      }
    });
  };
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <div className={styles.carrers_card}>
      <div className={styles.card_heading}>
        <h2>{title}</h2>
        <button onClick={handler} handler>
          Apply
        </button>
      </div>
      <div className={styles.card_content}>
        {/* <p>we&apos;re looking for a mid-level product designer to join our team</p> */}
        <div className={styles.card_content_buttons}>
          <button>{location} + Years</button>
          <button>{exp}</button>
          <button>{workHours}</button>
        </div>
      </div>
      <hr />
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Show your interest in
            <Text b size={18}>
              {"Packult"}
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmitImage}>
            <Input
              clearable
              bordered
              fullWidth
              color="dark"
              size="lg"
              placeholder="Name"
            />
            <Spacer y={0.5} />
            <Input
              clearable
              bordered
              fullWidth
              color="dark"
              size="lg"
              placeholder="Email"
            />
            <Spacer y={0.5} />
            <Input
              clearable
              bordered
              fullWidth
              color="dark"
              size="lg"
              placeholder="Phone"
            />
            <Spacer y={0.5} />
            <label
              style={{
                width: "90%",
                height: "50px",
                cursor: "pointer",
                backgroundColor: "#f5f5f5",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "2% 5%",
                borderRadius: "5px",
              }}
              for="resume"
            >
              Resume{"        "}
              {/* pdf only input  */}
              <input
                type="file"
                id="resume"
                accept="application/pdf,application/vnd.ms-excel"
              />
            </label>
            <Spacer y={0.5} />
            <Button
              auto
              ghost
              type="submit"
              color="success"
              css={{ width: "10%" }}
            >
              Upload
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
}

export default CarrersCard;
