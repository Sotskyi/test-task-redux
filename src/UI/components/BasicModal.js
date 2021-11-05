import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const BasicModal = ({ data, handleClose, open }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div style={{ textAlign: "right" }}>For close prs ESC</div>
          <Card sx={{ maxWidth: 600, margin: 3 }}>
            <CardMedia
              component="img"
              height="300"
              image={data.image}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {data.name}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                component="span"
              >
                Gender - {data.gender}
                <br />
                Status - {data.status}
                <br />
                Species - {data.species}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Modal>
    </div>
  );
};
