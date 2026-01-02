import { Brain, Database, Zap } from "lucide-react";

export default function Insights() {
  return (
    <section style={styles.container}>
      <div style={styles.header}>
        <Brain size={64} color="#667eea" />
        <h2 style={styles.title}>Model Insights</h2>
        <p style={styles.subtitle}>
          Understanding the AI behind CardioAI
        </p>
      </div>

      <div style={styles.grid}>
        <InsightCard 
          icon={<Database size={40} color="#667eea" />}
          title="Training Data"
          description="Model trained on clinical and lifestyle factors from over 70,000 patients with validated outcomes."
        />
        <InsightCard 
          icon={<Zap size={40} color="#f59e0b" />}
          title="XGBoost Algorithm"
          description="Advanced gradient boosting with calibration for accurate probability estimates."
        />
        <InsightCard 
          icon={<Brain size={40} color="#10b981" />}
          title="74% Accuracy"
          description="Validated on independent test sets with high precision and recall metrics."
        />
      </div>

      <div style={styles.infoCard}>
        <h3 style={styles.infoTitle}>Key Features Used</h3>
        <ul style={styles.featureList}>
          <li>Age and anthropometric measurements</li>
          <li>Blood pressure readings (systolic & diastolic)</li>
          <li>Cholesterol and glucose levels</li>
          <li>Lifestyle factors (smoking, alcohol, physical activity)</li>
        </ul>
      </div>
    </section>
  );
}

function InsightCard({ icon, title, description }) {
  return (
    <div style={styles.card}>
      <div style={styles.cardIcon}>{icon}</div>
      <h3 style={styles.cardTitle}>{title}</h3>
      <p style={styles.cardDescription}>{description}</p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "3rem 2rem",
  },
  header: {
    textAlign: "center",
    marginBottom: "3rem",
  },
  title: {
    fontSize: "3rem",
    color: "#e2e8f0",
    marginTop: "1rem",
    marginBottom: "0.5rem",
    fontWeight: "700",
  },
  subtitle: {
    color: "#94a3b8",
    fontSize: "1.2rem",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "2rem",
    marginBottom: "3rem",
  },
  card: {
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(10px)",
    padding: "2rem",
    borderRadius: "20px",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  cardIcon: {
    marginBottom: "1rem",
  },
  cardTitle: {
    fontSize: "1.5rem",
    color: "#e2e8f0",
    marginBottom: "1rem",
    fontWeight: "600",
  },
  cardDescription: {
    color: "#94a3b8",
    fontSize: "1rem",
    lineHeight: "1.6",
  },
  infoCard: {
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(10px)",
    padding: "2rem",
    borderRadius: "20px",
    border: "1px solid rgba(255, 255, 255, 0.1)",
  },
  infoTitle: {
    fontSize: "1.8rem",
    color: "#e2e8f0",
    marginBottom: "1.5rem",
    fontWeight: "600",
  },
  featureList: {
    color: "#94a3b8",
    fontSize: "1.1rem",
    lineHeight: "2",
    paddingLeft: "1.5rem",
  },
};