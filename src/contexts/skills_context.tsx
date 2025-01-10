import React, { createContext, ReactNode } from "react";
import skillsData from "../constants/skills";
import { Skill } from "../models/skills";

interface SkillContextValue {
  skills: Skill[];
}

const SkillsContext = createContext<SkillContextValue>({
  skills: [],
});

const SkillsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const contextValue: SkillContextValue = { skills: skillsData };
  return (
    <SkillsContext.Provider value={contextValue}>
      {children}
    </SkillsContext.Provider>
  );
};

export { SkillsProvider, SkillsContext };
