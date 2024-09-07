import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import "./Project.css"; // Custom CSS file for modal styles

const Project = () => {
  // State to manage modal visibility and project name
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [projects, setProjects] = useState([]);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setProjectName(""); // Reset the input field when the modal is closed
  };

  // Function to handle project creation
  const createProject = () => {
    if (projectName.trim()) {
      setProjects([...projects, { name: projectName }]); // Add the new project to the list
      setProjectName(""); // Clear the input field
      setIsModalOpen(false); // Close the modal
    } else {
      alert("Project Name can't be empty");
    }
  };

  return (
    <Layout>
      <div
        className={`project-container ${isModalOpen ? "blur-background" : ""}`}
      >
        <div className="header-icons">
          <i className="icon-settings"></i>
          <i className="icon-bell"></i>
        </div>

        <div className="project-header">
          <h1>Create a New Project</h1>
        </div>

        <div className="project-content">
          <img
            src="../images/Group16.png"
            alt="Illustration of team working on a project"
            className="project-illustration"
          />
          <p className="project-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button
            className="btn btn-primary create-project-button"
            onClick={openModal}
          >
            + Create New Project
          </button>
        </div>

        {/* Display Created Projects */}
        <div className="project-list">
          <h2>Projects</h2>
          {projects.length === 0 ? (
            <p>No projects created yet.</p>
          ) : (
            <ul>
              {projects.map((project, index) => (
                <li key={index} className="project-item">
                  <div className="project-icon">
                    <span>{project.name[0].toUpperCase()}</span>
                  </div>
                  <div className="project-info">
                    <h3>{project.name}</h3>
                    <p>Last edited just now</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Modal Popup for Creating a New Project */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Create Project</h2>
            <h3>Enter Project Name:</h3>
            <input
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              placeholder="Enter Project Name"
              className="modal-input"
            />
            <div className="modal-actions">
              <button className="btn btn-secondary" onClick={closeModal}>
                Cancel
              </button>
              <button className="btn btn-primary" onClick={createProject}>
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Project;
