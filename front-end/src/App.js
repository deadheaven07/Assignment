import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register.js";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound.js";
import Project from "./pages/Project.js";
import Setting from "./pages/Setting.js";
import Transcript from "./pages/Transcript.js";
import Uploadd from "./pages/Uploadd.js";
import Layout from "./components/Layout/Layout"; // Updated to use Layout
import "./App.css";
function App() {
  return (
    <Routes>
      {/* Use Layout for homepage too, so it includes the navbar */}
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      {/* All other routes */}
      <Route path="/register" element={<Register />} />
      <Route
        path="/project"
        element={
          <Layout>
            <Project />
          </Layout>
        }
      />
      <Route
        path="/uploadd"
        element={
          <Layout>
            <Uploadd />
          </Layout>
        }
      />
      <Route
        path="/transcript"
        element={
          <Layout>
            <Transcript />
          </Layout>
        }
      />
      <Route
        path="/setting"
        element={
          <Layout>
            <Setting />
          </Layout>
        }
      />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
