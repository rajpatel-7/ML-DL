import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Predict from "./pages/Predict";
import Result from "./pages/Result";
import Insights from "./pages/Insights";
import About from "./pages/About";

export default function App() {
  return (
    <div style={styles.app}>
      {/* Animated Background */}
      <div style={styles.background}>
        <div style={styles.gradient1}></div>
        <div style={styles.gradient2}></div>
        <div style={styles.gradient3}></div>
      </div>

      <Navbar />
      
      <div style={styles.content}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/predict" element={<Predict />} />
          <Route path="/result" element={<Result />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

const styles = {
  app: {
    minHeight: "100vh",
    width: "100%",
    position: "relative",
    overflow: "hidden",
    background: "#0a0e27",
  },
  background: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
  },
  gradient1: {
    position: "absolute",
    width: "600px",
    height: "600px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(239,68,68,0.15) 0%, transparent 70%)",
    top: "-200px",
    left: "-200px",
    animation: "float 20s ease-in-out infinite",
  },
  gradient2: {
    position: "absolute",
    width: "500px",
    height: "500px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
    bottom: "-150px",
    right: "-150px",
    animation: "float 15s ease-in-out infinite reverse",
  },
  gradient3: {
    position: "absolute",
    width: "400px",
    height: "400px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    animation: "float 25s ease-in-out infinite",
  },
  content: {
    position: "relative",
    zIndex: 1,
    paddingTop: "80px",
  },
};