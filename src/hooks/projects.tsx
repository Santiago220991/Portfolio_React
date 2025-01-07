import { useContext } from 'react'
import { ProjectsContext } from '../contexts/projects_context';

const useProjectsContext = () => {
    const context = useContext(ProjectsContext);
    if (!context) {
        throw new Error(
            "useProjectsContext must be used within a ProjectsProvider",
        );
    }
    return context;
};

export default useProjectsContext;