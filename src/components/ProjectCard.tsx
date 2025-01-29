import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { BLUE, GRAY } from "../constants/colors";
import ActionButton from "./Button";
import Chips from "./Chips";
import ProjectsModal from "./ProjectsModal";
import { Project } from "../models/project";

const ProjectCard = (props: Project) => {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const { image, name, technologies } = props;
  return (
    <>
      {isModalOpen && <ProjectsModal project={props} setIsModalOpen={setIsModalOpen} />}
      <Card
        sx={{
          width: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: 1,
          maxWidth: { md: "425px" },
        }}
      >
        <CardMedia
          sx={{ height: 250, width: "100%", objectFit: "cover" }}
          image={`../../src/assets/${image}`}
          title={`${name}-image`}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              fontSize: "24px",
              fontWeight: 600,
              color: BLUE,
              maxHeight: "auto",
              flexGrow: 1,
              textAlign: "center",
            }}
          >
            {name}
          </Typography>
        </CardContent>
        <Chips
          dataCollection={technologies}
          backgroundColor={GRAY}
          padding={10}
        />
        <CardActions>
          <ActionButton
            text={"See project"}
            onClick={() => setIsModalOpen(true)}
          />
        </CardActions>
      </Card>
    </>
  );
};

export default ProjectCard;
