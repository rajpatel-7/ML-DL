import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Heart, CheckCircle } from "lucide-react";

export default function Result() {
  const navigate = useNavigate();
  const [result, setResult] = useState(null);

  useEffect(() => {
    const storedResult = sessionStorage.getItem('predictionResult');
    if (storedResult) {
      setResult(JSON.parse(storedResult));
    } else {
      navigate('/predict');
    }
  }, [navigate]);

  if (!result) return null;

  const riskColor = 
    result.risk_category === "Low Risk" ? "#10b981" :
    result.risk_category === "Moderate Risk" ? "#f59e0b" : "#ef4444";

  return (
    <div style={styles.resultPage}>
      <div style={styles.resultContainer}>
        <div style={styles.resultHeader}>
          <CheckCircle size={64} color={riskColor} />
          <h2 style={styles.resultTitle}>Analysis Complete</h2>
          <p style={styles.resultName}>Hello, {result.name}</p>
        </div>

        <div style={{...styles.riskCard, borderColor: riskColor}}>
          <div style={styles.riskBadge}>
            <Heart size={40} color={riskColor} fill={riskColor} />
          </div>
          <h3 style={{...styles.riskCategory, color: riskColor}}>
            {result.risk_category}
          </h3>
          <div style={styles.probabilityContainer}>
            <span style={styles.probabilityLabel}>Risk Probability</span>
            <span style={{...styles.probabilityValue, color: riskColor}}>
              {(result.risk_probability * 100).toFixed(1)}%
            </span>
          </div>
          
          <div style={styles.progressBar}>
            <div style={{
              ...styles.progressFill,
              width: `${result.risk_probability * 100}%`,
              background: riskColor
            }}></div>
          </div>
        </div>

        <div style={styles.adviceCard}>
          <h4 style={styles.adviceTitle}>Personalized Health Recommendations</h4>
          <ul style={styles.adviceList}>
            {result.advice?.map((a, i) => (
              <li key={i} style={styles.adviceItem}>
                <CheckCircle size={20} color="#10b981" />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </div>

        <p style={styles.modelNote}>{result.note}</p>

        <button     
          style={styles.backButton}
          onClick={() => navigate("/")}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

const styles = {
  resultPage: {
    position: "relative",
    zIndex: 1,
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
  },
  resultContainer: {
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(20px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "30px",
    padding: "3rem",
    maxWidth: "700px",
    width: "100%",
    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
  },
  resultHeader: {
    textAlign: "center",
    marginBottom: "2rem",
  },
  resultTitle: {
    fontSize: "2.5rem",
    color: "#e2e8f0",
    margin: "1rem 0",
    fontWeight: "700",
  },
  resultName: {
    fontSize: "1.3rem",
    color: "#94a3b8",
  },
  riskCard: {
    background: "rgba(255, 255, 255, 0.03)",
    border: "2px solid",
    borderRadius: "20px",
    padding: "2rem",
    textAlign: "center",
    marginBottom: "2rem",
  },
  riskBadge: {
    display: "inline-block",
    marginBottom: "1rem",
  },
  riskCategory: {
    fontSize: "2rem",
    fontWeight: "700",
    marginBottom: "1rem",
  },
  probabilityContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1rem",
  },
  probabilityLabel: {
    color: "#94a3b8",
    fontSize: "1.1rem",
  },
  probabilityValue: {
    fontSize: "2rem",
    fontWeight: "700",
  },
  progressBar: {
    width: "100%",
    height: "12px",
    background: "rgba(255, 255, 255, 0.1)",
    borderRadius: "10px",
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    transition: "width 1s ease",
    borderRadius: "10px",
  },
  adviceCard: {
    background: "rgba(255, 255, 255, 0.03)",
    borderRadius: "20px",
    padding: "2rem",
    marginBottom: "2rem",
  },
  adviceTitle: {
    color: "#e2e8f0",
    fontSize: "1.5rem",
    marginBottom: "1.5rem",
    fontWeight: "700",
  },
  adviceList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  adviceItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "1rem",
    color: "#cbd5e1",
    fontSize: "1rem",
    lineHeight: "1.6",
  },
  modelNote: {
    color: "#64748b",
    fontSize: "0.9rem",
    textAlign: "center",
    marginBottom: "2rem",
    fontStyle: "italic",
  },
  backButton: {
    width: "100%",
    padding: "1.2rem",
    fontSize: "1.1rem",
    fontWeight: "600",
    background: "rgba(255, 255, 255, 0.1)",
    color: "#e2e8f0",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "15px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
};