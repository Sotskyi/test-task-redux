import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import { BasicModal } from "./BasicModal";

export const ActionAreaCard = ({ data }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div onClick={handleOpen}>
      <Card sx={{ maxWidth: 345, margin: 3 }}>
        <BasicModal
          data={data}
          handleClose={handleClose}
          open={open}
          handleOpen={handleOpen}
        />
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={data.image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" component="span">
              Gender - {data.gender}
              <br />
              Status - {data.status}
              <br />
              Species - {data.species}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};
