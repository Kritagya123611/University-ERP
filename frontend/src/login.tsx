import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./login.css";


function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const payload = {
      email: form.email,
      password: form.password,
    };

    try {
      const res = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const json = await res.json();

      if (res.ok) {
        // Handle successful login (e.g., redirect or store token)
        toast.success("Login successful!");
        console.log("Login successful:", json);
        // Redirect user to dashboard or home page
        // Example: window.location.href = '/dashboard';
      } else {
        // Handle error if login fails
        toast.error(json.error || "Login failed. Please try again.");
        console.log("Login failed:", json.error);
        setError(json.error || "Login failed. Please try again.");
      }
    } catch (err) {
      console.error("Network error:", err);
      toast.error("Server error. Please try again later.");
      setError("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="login-layout">
        <div className="login-image">
          <img
            src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg?t=st=1745242810~exp=1745246410~hmac=1036a181879d2e1c3b731ea22119b4c165ae3c1c6b6fbb6a5c0f76cfd9a71748&w=900"
            alt="Login Illustration"
            height={800}
            width={800}
          />
        </div>

        <div className="login-container">
          <div className="card">
            <p className="headinglogin">Welcome Back to HorizonED</p>
            <form className="login-form" onSubmit={handleSubmit}>
              <input
                className="inputlogin"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
              <input
                className="inputlogin"
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
              {error && <p className="error-message">{error}</p>}
              <button type="submit" className="login-btn" disabled={loading}>
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>

            <p className="account-link">
              Don’t have an account? <a href="/signup">Sign up</a>
            </p>
            <p className="recaptcha-text">
              This site is protected by reCAPTCHA and the Google{" "}
              <a href="#">Privacy Policy</a> and <a href="#">Terms of Service</a> apply.
            </p>
          </div>
        </div>
      </div>
      {/* Add ToastContainer to show Toastify notifications */}
      <ToastContainer aria-label="notifications" />
    </div>
  );
}

export default Login;
