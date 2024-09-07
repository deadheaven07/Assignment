import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import "../pages/Transcript.css";

const Transcript = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [originalText, setOriginalText] = useState(
    `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.`
  );
  const [transcriptText, setTranscriptText] = useState(originalText);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setOriginalText(transcriptText);
    setIsEditing(false);
  };

  const handleDiscardClick = () => {
    setTranscriptText(originalText);
    setIsEditing(false);
  };

  return (
    <Layout>
      <div className="container-fluid transcript-page">
        <div className="row">
          {/* Sidebar Section */}
          <div className="col-md-2">
            <div className="sidebar">
              <img src="../images/CompLogo1.png" alt="Logo" className="logo" />
              <ul className="nav flex-column">
                <li className="nav-item">
                  <div className="faded-purple-box">
                    <a className="nav-link " href="#">
                      + Add your Podcast(s)
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
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    <img
                      src="../images/setting.png"
                      alt="Help"
                      className="sidebar-img"
                    />
                    Help
                  </a>
                </li>
              </ul>
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

          {/* Transcript Editing Section */}
          <div className="col-md-10 d-flex justify-content-center">
            <div className="transcript-container">
              {/* Breadcrumb - Just Above the Transcript */}
              <div className="breadcrumb">
                <span className="breadcrumb-icon">
                  <img src="/path-to-home-icon.svg" alt="Home" />
                </span>
                <span className="breadcrumb-text">
                  <a href="#">Home Page</a> / <a href="#">Sample Project</a> /
                  <span className="breadcrumb-active">Add your podcast</span>
                </span>
              </div>

              <div className="transcript-header">
                <h2>Edit Transcript</h2>
                {isEditing ? (
                  <div>
                    <button
                      className="btn save-button"
                      onClick={handleSaveClick}
                    >
                      Save
                    </button>
                    <button
                      className="btn discard-button"
                      onClick={handleDiscardClick}
                    >
                      Discard
                    </button>
                  </div>
                ) : (
                  <button className="btn edit-button" onClick={handleEditClick}>
                    Edit
                  </button>
                )}
              </div>

              <div className="transcript-box">
                <h5 className="speaker">Speaker</h5>
                {isEditing ? (
                  <textarea
                    className="transcript-textarea"
                    value={transcriptText}
                    onChange={(e) => setTranscriptText(e.target.value)}
                    rows="10"
                  />
                ) : (
                  <p className="transcript-paragraph">{transcriptText}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Transcript;
