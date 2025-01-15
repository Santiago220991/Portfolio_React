import { useContext } from 'react'
import { SkillsContext } from '../contexts/skills_context';

const useSkillsContext = () => {
    const context = useContext(SkillsContext);
    if (!context) {
        throw new Error(
            "useSkillsContext must be used within a SkillsProvider",
        );
    }
    return context;
};

export default useSkillsContext;