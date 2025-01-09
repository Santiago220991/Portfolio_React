import React, { createContext, ReactNode } from "react";
import { Project } from "../models/project";
import data from "../constants/projects";
interface ProjectContextValue {
  projects: Project[];
}

const ProjectsContext = createContext<ProjectContextValue>({
  projects: [],
});

const ProjectsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const contextValue: ProjectContextValue = { projects: data };
  return (
    <ProjectsContext.Provider value={contextValue}>
      {children}
    </ProjectsContext.Provider>
  );
};

export { ProjectsProvider, ProjectsContext };
