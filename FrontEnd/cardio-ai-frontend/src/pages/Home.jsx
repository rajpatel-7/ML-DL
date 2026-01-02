import { useNavigate } from "react-router-dom";
import { Heart, Activity, TrendingUp, Users, ArrowRight } from "lucide-react";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={styles.homePage}>
      <div style={styles.heroContent}>
        <div style={styles.floatingHeart}>
          <Heart size={120} color="#ff4757" fill="#ff4757" />
          <div style={styles.pulse}></div>
        </div>
        
        <h1 style={styles.mainTitle}>
          CardioAI
        </h1>
        <p style={styles.subtitle}>
          AI-Powered Cardiovascular Risk Assessment
        </p>
        <p style={styles.description}>
          Advanced machine learning technology to predict your heart health risk in seconds
        </p>

        <button 
          style={styles.startButton}
          onClick={() => navigate("/predict")}
          onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"}
          onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
        >
          <span style={styles.buttonText}>Start Prediction</span>
          <ArrowRight size={24} style={styles.buttonIcon} />
        </button>

        <div style={styles.features}>
          <FeatureCard icon={<Activity size={32} />} title="Real-time Analysis" />
          <FeatureCard icon={<TrendingUp size={32} />} title="74% Accuracy" />
          <FeatureCard icon={<Users size={32} />} title="High Rated" />
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title }) {
  return (
    <div style={styles.featureCard}>
      <div style={styles.featureIcon}>{icon}</div>
      <p style={styles.featureTitle}>{title}</p>
    </div>
  );
}

const styles = {
 homePage: {
    position: "relative",
    zIndex: 1,
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem 0", // Reduced horizontal padding to 0
    width: "100vw",     // Ensure it takes full viewport width
    overflowX: "hidden" // Prevent accidental horizontal scrolling
  },
  heroContent: {
    textAlign: "center",
    width: "100%",      // Take full available width
    maxWidth: "1200px", // Increased from 800px to allow more spread
    padding: "0 20px",  // Small safe margin for mobile screens
  },
  floatingHeart: {
    position: "relative",
    display: "inline-block",
    marginBottom: "2rem",
    animation: "heartBeat 2s ease-in-out infinite",
  },
  pulse: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    border: "3px solid #ff4757",
    animation: "pulse 2s ease-out infinite",
  },
  mainTitle: {
    fontSize: "5rem",
    fontWeight: "900",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "1rem",
    letterSpacing: "-2px",
  },
  subtitle: {
    fontSize: "1.5rem",
    color: "#94a3b8",
    marginBottom: "1rem",
    fontWeight: "500",
  },
  description: {
    fontSize: "1.1rem",
    color: "#64748b",
    marginBottom: "3rem",
    lineHeight: "1.6",
  },
  startButton: {
    display: "inline-flex",
    alignItems: "center",
    gap: "1rem",
    padding: "1.5rem 3rem",
    fontSize: "1.3rem",
    fontWeight: "700",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "white",
    border: "none",
    borderRadius: "50px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 10px 30px rgba(102, 126, 234, 0.4)",
    marginBottom: "4rem",
  },
  buttonText: {
    fontSize: "1.3rem",
  },
  buttonIcon: {
    transition: "transform 0.3s ease",
  },
 features: {
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    flexWrap: "wrap",
    width: "100%",      // Ensure feature row spans the width
    marginTop: "2rem"
  },
  featureCard: {
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(10px)",
    padding: "2rem",
    borderRadius: "20px",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    minWidth: "180px",
    transition: "transform 0.3s ease",
  },
  featureIcon: {
    color: "#667eea",
    marginBottom: "1rem",
  },
  featureTitle: {
    color: "#e2e8f0",
    fontSize: "1rem",
    fontWeight: "600",
  },
};