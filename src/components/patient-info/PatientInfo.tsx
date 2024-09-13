import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Seneli from "../../assets/images/Seneli.jpg";
import { Box } from "@mui/material";

interface Props {
  name: string;
  identifier: string;
  dob: string;
  gender: string;
  address: string;
}

function PatientInfo(props: Props) {
  return (
    <Card
      sx={{
        maxWidth: "auto",
        maxHeight: "auto",
        margin: 1,
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Box sx={{ height: 128, width: 128, margin: 1 }}>
        <img src={Seneli} />
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          <p>Identifier: {props.identifier}</p>
          <p>Date of Birth: {props.dob}</p>
          <p>Gender: {props.gender}</p>
          <p>Address: {props.address}</p>
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
    
  );
}

export default PatientInfo;
