import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        <Heart size={28} color="#ff4757" fill="#ff4757" />
        <h2 style={styles.logoText}>CardioAI</h2>
      </div>
      <div style={styles.navLinks}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/predict" style={styles.link}>Predict</Link>
        <Link to="/insights" style={styles.link}>Insights</Link>
        <Link to="/about" style={styles.link}>About</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    background: "rgba(10, 14, 39, 0.8)",
    backdropFilter: "blur(10px)",
    padding: "1rem 2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
  logoText: {
    fontSize: "1.5rem",
    fontWeight: "700",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    margin: 0,
  },
  navLinks: {
    display: "flex",
    gap: "2rem",
    alignItems: "center",
  },
  link: {
    color: "#94a3b8",
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: "500",
    transition: "color 0.3s ease",
    position: "relative",
  },
};