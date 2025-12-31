import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Heart, Activity } from "lucide-react";

export default function Predict() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    age: 40,
    height: 165,
    weight: 70,
    ap_hi: 120,
    ap_lo: 80,
    cholesterol: 1,
    gluc: 1,
    smoke: 0,
    alco: 0,
    active: 1
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const validateForm = () => {
    if (!form.name.trim()) return "Please enter your name.";
    if (form.ap_hi <= form.ap_lo)
      return "Systolic BP must be greater than Diastolic BP.";
    return null;
  };

  const predict = async () => {
    setError("");
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    try {
      const payload = { ...form };
      delete payload.name; // Backend doesn't need the name

      const res = await axios.post(
        "http://127.0.0.1:8000/predict",
        payload
      );

      // Store in sessionStorage for the Result page
      sessionStorage.setItem('predictionResult', JSON.stringify({
        ...res.data,
        name: form.name
      }));
      
      navigate('/result');
    } catch (err) {
      setError("Prediction failed. Backend not reachable.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.predictPage}>
      <div style={styles.formContainer}>
        <div style={styles.formHeader}>
          <Heart size={48} color="#ff4757" fill="#ff4757" />
          <h2 style={styles.formTitle}>Health Assessment Form</h2>
          <p style={styles.formSubtitle}>Fill in your details for personalized risk analysis</p>
        </div>

        <div style={styles.formGrid}>
          {/* Name Input */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Full Name</label>
            <input
              style={styles.input}
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
              placeholder="Enter your full name"
            />
          </div>

          {/* Sliders */}
          <SliderInput label="Age" value={form.age} min={18} max={100} onChange={(v) => handleChange("age", v)} />
          <SliderInput label="Height (cm)" value={form.height} min={140} max={200} onChange={(v) => handleChange("height", v)} />
          <SliderInput label="Weight (kg)" value={form.weight} min={40} max={150} onChange={(v) => handleChange("weight", v)} />
          <SliderInput label="Systolic BP" value={form.ap_hi} min={90} max={200} onChange={(v) => handleChange("ap_hi", v)} />
          <SliderInput label="Diastolic BP" value={form.ap_lo} min={60} max={130} onChange={(v) => handleChange("ap_lo", v)} />

          {/* Checkboxes */}
          <div style={styles.checkboxGroup}>
            <CheckboxInput label="Smoking" checked={form.smoke === 1} onChange={(v) => handleChange("smoke", v ? 1 : 0)} />
            <CheckboxInput label="Alcohol" checked={form.alco === 1} onChange={(v) => handleChange("alco", v ? 1 : 0)} />
            <CheckboxInput label="Physically Active" checked={form.active === 1} onChange={(v) => handleChange("active", v ? 1 : 0)} />
          </div>
        </div>

        {error && <p style={styles.error}>{error}</p>}

        <button 
          style={{...styles.predictButton, opacity: loading ? 0.7 : 1}}
          onClick={predict}
          disabled={loading}
        >
          {loading ? (
            <>Analyzing Your Data...</>
          ) : (
            <>
              <Activity size={24} />
              Show Result
            </>
          )}
        </button>
      </div>
    </div>
  );
}

function SliderInput({ label, value, min, max, onChange }) {
  return (
    <div style={styles.sliderGroup}>
      <div style={styles.sliderHeader}>
        <label style={styles.label}>{label}</label>
        <span style={styles.sliderValue}>{value}</span>
      </div>
      <div style={styles.sliderWrapper}>
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          style={{
            ...styles.slider,
            // Dynamic background to show progress color
            background: `linear-gradient(to right, #667eea 0%, #764ba2 ${((value - min) / (max - min)) * 100}%, rgba(255, 255, 255, 0.1) ${((value - min) / (max - min)) * 100}%, rgba(255, 255, 255, 0.1) 100%)`
          }}
        />
      </div>
    </div>
  );
}
function CheckboxInput({ label, checked, onChange }) {
  return (
    <label style={styles.checkboxLabel}>
      <input
        type="checkbox" checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        style={styles.checkbox}
      />
      <span style={styles.checkboxText}>{label}</span>
    </label>
  );
}

const styles = {
  predictPage: { minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem", backgroundColor: "#0f172a" },
  formContainer: { background: "rgba(255, 255, 255, 0.05)", backdropFilter: "blur(20px)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "30px", padding: "3rem", maxWidth: "700px", width: "100%" },
  formHeader: { textAlign: "center", marginBottom: "3rem" },
  formTitle: { fontSize: "2.5rem", color: "#e2e8f0", marginTop: "1rem" },
  formSubtitle: { color: "#94a3b8" },
  formGrid: { display: "flex", flexDirection: "column", gap: "1.5rem" },
  inputGroup: { display: "flex", flexDirection: "column", gap: "0.5rem" },
  label: { color: "#e2e8f0", fontWeight: "600" },
  input: { padding: "1rem", background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "12px", color: "#e2e8f0" },
  sliderGroup: { display: "flex", flexDirection: "column", gap: "0.5rem" },
  sliderHeader: { display: "flex", justifyContent: "space-between" },
  sliderValue: { background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", color: "white", padding: "0.2rem 0.8rem", borderRadius: "20px" },
  slider: { width: "100%", cursor: "pointer" },
  checkboxGroup: { display: "flex", gap: "2rem", flexWrap: "wrap" },
  checkboxLabel: { display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer" },
  checkboxText: { color: "#e2e8f0" },
  error: { color: "#ef4444", textAlign: "center", marginTop: "1rem" },
  predictButton: { width: "100%", padding: "1.2rem", marginTop: "2rem", background: "linear-gradient(135deg, #10b981 0%, #059669 100%)", color: "white", border: "none", borderRadius: "15px", cursor: "pointer", display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", fontSize: "1.2rem", fontWeight: "bold" }
  
};