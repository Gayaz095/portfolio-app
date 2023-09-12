import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

const ProjectCard = ({ title, description, githubLink, liveDemoLink }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="project-links">
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href={liveDemoLink} target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Tic Tac Toe",
      description:
        "A game in which two players seek in alternate turns to complete a row, a column, or a diagonal with either three O's or three X's.",
      githubLink: "https://github.com/Gayaz095/tictac-app/tree/main/src",
      liveDemoLink: "https://fanciful-puffpuff-dd3e19.netlify.app/",
    },
    {
      title: "Shopping Cart",
      description:
        "A shopping cart app, where user can add products to the cart and the cart application is created using Reactjs",
      githubLink: "https://github.com/Gayaz095/cart-app",
      liveDemoLink: "https://serene-chimera-c62c46.netlify.app/",
    },
    {
      title: "Pagination Example",
      description:
        "Pagination in React JS is a function of apps that allows to display data in the form of a list,throughout a series of pages rather than all at once.",
      githubLink: "https://github.com/Gayaz095/list-view-pagination",
      liveDemoLink: "https://rainbow-souffle-39ccd3.netlify.app/",
    },
  ];

  return (
    <div className="projects-container">
      <h2>My Personal Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
      <Link
        to="https://github.com/Gayaz095?tab=repositories"
        target="_blank"
        rel="noopener noreferrer">
        More...
      </Link>
    </div>
  );
};

export default Projects;
