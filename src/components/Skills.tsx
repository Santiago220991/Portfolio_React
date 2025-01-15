import React from "react";
import SkillCard from "./SkillCard";
import styled from "styled-components";
import useSkillsContext from "../hooks/skills";


const SkillsContainer = styled.section`
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
    margin-top: 45px;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 465px;
  align-items: center;
  row-gap: 24px;
`;

const Skills = () => {
  const skillsList = useSkillsContext();

  return (
    <SkillsContainer>
      <CardsContainer>
        {skillsList.skills.map((skill) => (
          <SkillCard
            key={skill.name}
            list={skill.list}
            title={skill.name}
            image={skill.image}
          />
        ))}
      </CardsContainer>
    </SkillsContainer>
  );
};

export default Skills;
