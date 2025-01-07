import React, { createContext, ReactNode } from "react";
import { Project } from "../models/project";

const data = [
  {
    name: "Tourify",
    description:
      "This is an app in which you can reserve a tour, create a tour, delete a tour and show all your reserved tours. This app was created by separating the Fron-End and the Back-End into two repositories.",
    image: "tourify.png",
    technologies: ["HTML", "CSS", "JavaScript", "Ruby on Rails", "React-Redux"],
    liveversion: "https://tourify-app.netlify.app/",
    source: "https://github.com/Santiago220991/Booking-Tours",
  },

  {
    name: "Budget Calculator",
    description:
      "This app is a mobile web application where you can manage your budget: you have a list of transactions associated with a category. So that you can see how much money you spent and on what.",
    image: "budget_calculator.png",
    technologies: ["HTML", "CSS", "Ruby on Rails", "RSpec", "PostgreSQL"],
    liveversion: "https://budget-calculator-production.up.railway.app/",
    source: "https://github.com/Santiago220991/Budget-App",
  },

  {
    name: "Premier League Statistics",
    description:
      "This single-page application shows the Premier League statistics from the seasons 2019 to 2023. This app shows a list of the teams that participated in the tournament and also shows the statistics of every team during that season. The app was designed with an approach mobile first. Therefore there are desktop and mobile view versions.",
    image: "premier_league.png",
    technologies: ["HTML", "CSS", "TypeScript", "React", "MUI", "Jest"],
    liveversion: "https://premier-league-statistics.netlify.app/",
    source: "https://github.com/Santiago220991/Premier-League-Statistics",
  },

  {
    name: "Bookstore",
    description:
      "This is a Bookstore webpage. This project uses an API to store the books. It shows a booklist with the next features: Show the book's title and author, add a new book and remove a book.",
    image:
      "https://user-images.githubusercontent.com/98363075/175354896-7e9ef2a9-aece-4a36-ae4a-1245fb758d76.png",
    technologies: ["HTML", "JavaScript", "React-Redux"],
    liveversion: "https://santiago-bookstore.netlify.app/",
    source: "https://github.com/Santiago220991/Bookstore",
  },

  {
    name: "E-commerce",
    description:
      "This app is an e-commerce where you can add items to the cart, sort items by different categories and see a short description of every item. It was built with React and JavaScript.",
    image: "e_commerce.png",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    liveversion: "https://e-commerce-project-santiago.netlify.app/",
    source: "https://github.com/Santiago220991/E-COMMERCE",
  },

  {
    name: "Music Band Web Page",
    description:
      "This is a music band web page. It contains information like Albums, Videos, Pictures, Shop. Mobile and desktop versions were created for this project.",
    image: "music_band_web_page.png",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    liveversion: "https://santiago220991.github.io/Music-Band-Web-Page/",
    source: "https://github.com/Santiago220991/Music-Band-Web-Page",
  },
];

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
