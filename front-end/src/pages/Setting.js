import React from "react";
import Layout from "../components/Layout/Layout";
import "../pages/uploadd.css"; // Make sure this file is imported for styling

const Setting = () => {
  return (
    <Layout>
      <div className="container-fluid">
        <div className="row">
          {/* Sidebar Section */}
          <div className="col-md-2">
            <div className="sidebar" style={sidebarStyles}>
              <img
                src="../images/CompLogo1.png"
                alt="Logo"
                className="logo"
                style={logoStyles}
              />
              <ul className="nav flex-column">
                <li className="nav-item">
                  <div className="faded-purple-box">
                    <a className="nav-link" href="#" style={linkStyles}>
                      Account Settings
                    </a>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" style={linkStyles}>
                    <img
                      src="../images/ab.png"
                      alt="Create & Repurpose"
                      className="sidebar-img"
                      style={imageStyles}
                    />
                    Create & Repurpose
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" style={linkStyles}>
                    <img
                      src="../images/aa.png"
                      alt="Podcast Widget"
                      className="sidebar-img"
                      style={imageStyles}
                    />
                    Podcast Widget
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" style={linkStyles}>
                    <img src="../images/Vector705.png" style={imageStyles} />
                    Upgrade
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#" style={linkStyles}>
                    <img
                      src="../images/setting.png"
                      alt="Help"
                      className="sidebar-img"
                      style={imageStyles}
                    />
                    Help
                  </a>
                </li>
              </ul>
              <div className="user-info" style={userInfoStyles}>
                <img
                  src="/images/Rectangle89.png"
                  alt="User"
                  className="user-img"
                  style={userImgStyles}
                />
                <p style={userTextStyles}>Username</p>
                <p style={userTextStyles}>username@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Vertical Line */}
          <div className="col-md-1">
            <div className="vertical-line"></div>
          </div>

          {/* Main Content Section */}
          <div className="col-md-9">
            <div style={styles.container}>
              <h1 style={styles.title}>Account Settings</h1>

              {/* User info section */}
              <div style={styles.userInfo}>
                <img
                  src="../images/Ellipse21.png" // Replace with actual image URL
                  alt="User Profile"
                  style={styles.profileImage}
                />
                <div style={styles.userDetails}>
                  <div style={styles.field}>
                    <label style={styles.label}>User Name</label>
                    <input
                      type="text"
                      value="alphauser"
                      style={styles.input}
                      readOnly
                    />
                  </div>
                  <div style={styles.field}>
                    <label style={styles.label}>Email</label>
                    <input
                      type="email"
                      value="alphauser@gmail.com"
                      style={styles.input}
                      readOnly
                    />
                  </div>
                </div>
              </div>

              {/* Subscription section */}
              <h3 style={styles.subtitle}>Subscriptions</h3>
              <div style={styles.subscriptionBox}>
                <p style={styles.subscriptionText}>
                  Oops! You don't have any active plans.{" "}
                  <a href="#" style={styles.upgradeLink}>
                    Upgrade now!
                  </a>
                </p>
                <button style={styles.upgradeButton}>Upgrade</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

// Inline styles
const sidebarStyles = {
  display: "flex",
  flexDirection: "column",
  height: "100vh", // Full viewport height
  fontSize: "14px",
};

const logoStyles = {
  width: "80px",
  marginBottom: "10px",
};

const linkStyles = {
  fontSize: "14px",
};

const imageStyles = {
  width: "20px",
  height: "20px",
  marginRight: "5px",
};

const userInfoStyles = {
  fontSize: "12px",
  marginTop: "auto", // Pushes the user info to the bottom
  padding: "10px", // Add padding to the user info
  backgroundColor: "#f5f5f5", // Optional: for visibility
};

const userImgStyles = {
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  marginRight: "10px",
};

const userTextStyles = {
  margin: "0",
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
  },
  title: {
    fontSize: "28px",
    marginBottom: "20px",
  },
  userInfo: {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
  },
  profileImage: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    marginRight: "20px",
  },
  userDetails: {
    display: "flex",
    flexDirection: "column",
  },
  field: {
    marginBottom: "10px",
  },
  label: {
    fontWeight: "bold",
    marginRight: "10px",
    fontSize: "14px",
  },
  input: {
    padding: "8px",
    width: "200px",
    fontSize: "14px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  subtitle: {
    fontSize: "20px",
    marginBottom: "10px",
  },
  subscriptionBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f5e7ff",
    padding: "10px",
    borderRadius: "10px",
    marginBottom: "20px",
  },
  subscriptionText: {
    fontSize: "14px",
    color: "#6c757d",
  },
  upgradeLink: {
    color: "#6f42c1",
    fontWeight: "bold",
    textDecoration: "none",
  },
  upgradeButton: {
    backgroundColor: "#6f42c1",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "8px 16px",
    cursor: "pointer",
    fontSize: "14px",
  },
};

export default Setting;
