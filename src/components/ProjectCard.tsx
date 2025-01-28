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

export type ProjectsProps = {
  image: string;
  title: string;
  technologies: string[];
  liveversion: string;
  source: string;
};

const ProjectCard = (props: ProjectsProps) => {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const { image, title, technologies } = props;
  return (
    <>
      {isModalOpen && <ProjectsModal {...props} />}
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
          title={`${title}-image`}
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
            {title}
          </Typography>
        </CardContent>
        <Chips dataCollection={technologies} backgroundColor={GRAY} />
        <CardActions>
          <ActionButton
            text={"See project"}
            onClick={() => setIsModalOpen(true)  
            }
          />
        </CardActions>
      </Card>
    </>
  );
};

export default ProjectCard;
