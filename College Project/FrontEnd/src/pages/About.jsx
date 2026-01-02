import { Shield, Heart, AlertCircle } from "lucide-react";

export default function About() {
  return (
    <section style={styles.container}>
      <div style={styles.header}>
        <Shield size={64} color="#10b981" />
        <h2 style={styles.title}>About CardioAI</h2>
        <p style={styles.subtitle}>
          AI-powered cardiovascular risk assessment
        </p>
      </div>

      <div style={styles.content}>
        <div style={styles.card}>
          <Heart size={40} color="#667eea" />
          <h3 style={styles.cardTitle}>Our Mission</h3>
          <p style={styles.cardText}>
            CardioAI provides a population-level cardiovascular risk estimate using advanced 
            machine learning algorithms. Our goal is to help individuals understand their heart 
            health and take proactive steps toward a healthier lifestyle.
          </p>
        </div>

        <div style={styles.card}>
          <AlertCircle size={40} color="#f59e0b" />
          <h3 style={styles.cardTitle}>Important Disclaimer</h3>
          <p style={styles.cardText}>
            This system provides a population-level cardiovascular risk estimate based on 
            clinical and lifestyle data. <strong>It is not a medical diagnosis</strong> and 
            should not replace professional medical advice, diagnosis, or treatment.
          </p>
        </div>

        <div style={styles.infoSection}>
          <h3 style={styles.sectionTitle}>How It Works</h3>
          <ol style={styles.list}>
            <li style={styles.listItem}>
              Enter your health metrics including age, height, weight, and blood pressure
            </li>
            <li style={styles.listItem}>
              Provide lifestyle information such as smoking status and physical activity
            </li>
            <li style={styles.listItem}>
              Our AI model analyzes your data using machine learning algorithms
            </li>
            <li style={styles.listItem}>
              Receive a personalized risk assessment with health recommendations
            </li>
          </ol>
        </div>

        <div style={styles.noteCard}>
          <p style={styles.note}>
            Always consult with a healthcare professional for medical advice. 
            If you have concerns about your heart health, please contact your doctor.
          </p>
        </div>
      </div>
    </section>
  );
}

const styles = {
  container: {
    maxWidth: "900px",
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
  content: {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  },
  card: {
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(10px)",
    padding: "2rem",
    borderRadius: "20px",
    border: "1px solid rgba(255, 255, 255, 0.1)",
  },
  cardTitle: {
    fontSize: "1.8rem",
    color: "#e2e8f0",
    margin: "1rem 0",
    fontWeight: "600",
  },
  cardText: {
    color: "#94a3b8",
    fontSize: "1.1rem",
    lineHeight: "1.8",
  },
  infoSection: {
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(10px)",
    padding: "2rem",
    borderRadius: "20px",
    border: "1px solid rgba(255, 255, 255, 0.1)",
  },
  sectionTitle: {
    fontSize: "1.8rem",
    color: "#e2e8f0",
    marginBottom: "1.5rem",
    fontWeight: "600",
  },
  list: {
    color: "#94a3b8",
    fontSize: "1.1rem",
    lineHeight: "2",
    paddingLeft: "1.5rem",
  },
  listItem: {
    marginBottom: "1rem",
  },
  noteCard: {
    background: "rgba(239, 68, 68, 0.1)",
    border: "1px solid rgba(239, 68, 68, 0.3)",
    borderRadius: "15px",
    padding: "1.5rem",
  },
  note: {
    color: "#fca5a5",
    fontSize: "1rem",
    lineHeight: "1.6",
    margin: 0,
    fontWeight: "500",
  },
};