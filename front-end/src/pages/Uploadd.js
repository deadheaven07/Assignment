import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import "./uploadd.css";

const Uploadd = () => {
  const [showModal, setShowModal] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  // Handle scroll to show/hide the navbar based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsNavbarVisible(false); // Hide the navbar when scrolling down
      } else {
        setIsNavbarVisible(true); // Show the navbar when at the top
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Layout>
      {/* Navbar */}
      <nav className={`navbar ${isNavbarVisible ? "visible" : ""}`}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>

      {/* Page Content */}
      <div className={`container-fluid ${showModal ? "modal-active" : ""}`}>
        <div className="row">
          {/* Sidebar Section */}
          <div className="col-md-2">
            <div className="sidebar">
              <img src="../images/CompLogo1.png" alt="Logo" className="logo" />
              <ul className="nav flex-column">
                <li className="nav-item">
                  <div className="faded-purple-box">
                    <a className="nav-link" href="#">
                      <img src="../images/add.png" />
                      Add your Podcast(s)
                    </a>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <img
                      src="../images/ab.png"
                      alt="Create & Repurpose"
                      className="sidebar-img"
                    />
                    Create & Repurpose
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <img
                      src="../images/aa.png"
                      alt="Podcast Widget"
                      className="sidebar-img"
                    />
                    Podcast Widget
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <img src="../images/Vector705.png" alt="Upgrade" />
                    Upgrade
                  </a>
                </li>
              </ul>

              {/* Help Section */}
              <div className="help-section">
                <a href="#">
                  <img src="../images/setting.png" alt="Help" />
                  Help
                </a>
              </div>

              {/* User Info Section */}
              <div className="user-info mt-4">
                <img
                  src="/images/Rectangle89.png"
                  alt="User"
                  className="user-img"
                />
                <p>Username</p>
                <p>username@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Vertical Line */}
          <div className="col-md-1">
            <div className="vertical-line"></div>
          </div>

          {/* Main Content Section */}
          <div className="col-md-9">
            <div className="row">
              <div className="col-12">
                <nav className="breadcrumb mt-3">
                  <a href="#">Home Page</a> / <a href="#">Sample Project</a> /{" "}
                  <span>Add your podcast</span>
                </nav>
                <h2 className="mt-3">Add Podcast</h2>
              </div>
            </div>

            {/* Podcast Options */}
            <div className="row mt-2">
              <div className="col-md-4">
                <div className="card text-center">
                  <div className="card-body">
                    <img src="/images/rss.png" alt="RSS Feed" />
                    <h5 className="card-title mt-3">RSS Feed</h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit. Dolor lorem sit.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card text-center">
                  <div className="card-body">
                    <img src="/images/youtube.png" alt="Youtube Video" />
                    <h5 className="card-title mt-3">Youtube Video</h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit. Dolor lorem sit.
                    </p>
                    <button className="btn btn-primary" onClick={openModal}>
                      Upload from YouTube
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card text-center">
                  <div className="card-body">
                    <img src="/images/upload.png" alt="Upload Files" />
                    <h5 className="card-title mt-3">Upload Files</h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit. Dolor lorem sit.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* File Upload Section */}
            <div className="row mt-4">
              <div className="col-12 text-center">
                <div className="file-upload-section">
                  <img
                    src="/images/frame.png"
                    alt="Upload Icon"
                    className="upload-icon"
                  />
                  <p>
                    Select a file or drag and drop here (Podcast Media or
                    Transcription Text)
                  </p>
                  <button className="btn">Select File</button>
                </div>
              </div>
            </div>

            {/* Modal Pop-up */}
            {showModal && (
              <div className="modal-overlay" onClick={closeModal}>
                <div
                  className="modal-content"
                  onClick={(e) => e.stopPropagation()}
                >
                  <h4>Upload from YouTube</h4>
                  <input
                    type="text"
                    className="form-control mt-3"
                    placeholder="Enter Name"
                  />
                  <input
                    type="text"
                    className="form-control mt-3"
                    placeholder="Enter Link"
                  />
                  <div className="modal-buttons mt-4">
                    <button className="btn btn-secondary" onClick={closeModal}>
                      Cancel
                    </button>
                    <button className="btn btn-primary">Upload</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Uploadd;
