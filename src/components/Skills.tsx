import SkillCard from "./SkillCard";
import styled from "styled-components";
import useSkillsContext from "../hooks/skills";
import { Grid } from "@mui/material";
import useIsMobile from "../hooks/mobile";

const SkillsContainer = styled.section`
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 45px;
`;

const CardsContainer = styled.div<{ $isMobile: boolean }>`
  display: flex;
  flex-direction: column;
  max-width: ${({ $isMobile }) => ($isMobile ? "465px" : "90%")};
  align-items: center;
  row-gap: 24px;
`;

const Skills = () => {
  const skillsList = useSkillsContext();
  const { isMobile } = useIsMobile();

  return (
    <SkillsContainer>
      <CardsContainer $isMobile={isMobile}>
        <Grid
          container
          spacing={{ xs: 12, sm: 12, md: 6 }}
          columns={{ xs: 1, sm: 1, md: 3 }}
        >
          {skillsList.skills.map((skill, index) => (
            <Grid item xs={1} sm={1} md={1} key={index}>
              <SkillCard
                key={skill.name}
                list={skill.list}
                title={skill.name}
                image={skill.image}
              />
            </Grid>
          ))}
        </Grid>
      </CardsContainer>
    </SkillsContainer>
  );
};

export default Skills;
