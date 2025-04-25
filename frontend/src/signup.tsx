import React from "react";
import "./signup.css";
import Horizon from "./assets/images/Horizon.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function Signup() {
    const [form, setForm] = React.useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        role: "",
        terms: false
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;
        setForm(prev => ({
          ...prev,
          [name]: type === "checkbox" ? checked : value,
        }));
      };

      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.terms) {
            toast.warn("Please accept the terms");
            return;
        }
    
        // Check if all fields are filled
        if (!form.name || !form.email || !form.password || !form.phone || !form.role) {
            toast.warn("Please fill in all fields");
            return;
        }
    
        // Build the payload
        const payload = {
            name: form.name,
            email: form.email,
            password: form.password,
            phone: form.phone,
            role: form.role,
        };
    
        try {
            console.log("Payload being sent:", payload);
    
            const res = await fetch("http://localhost:3000/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
            const json = await res.json();
    
            if (res.ok) {
                toast.success(json.message || "Signup successful");
                // Optionally reset form or redirect
            } else {
                toast.error(json.error || "Signup failed");
            }
        } catch (err) {
            console.error("Network error", err);
            toast.error("Server error. Please try again later.");
        }
    };
    
      

    return (
        <div className="signup-layout">
            <div className="signup-image">
                <img height={800} width={800} src='https://img.freepik.com/free-vector/forgot-password-concept-illustration_114360-1095.jpg?t=st=1745238286~exp=1745241886~hmac=cf76d6cb849b46a92116880bb4c509e82c0b573ec056657b74a63acf163b7907&w=900' alt="Horizon Illustration" />
            </div>
            <div className="signup-container">
                <div className="card">
                    <p className="headingsignup">Sign up to HorizonED</p>
                    <form onSubmit={handleSubmit}>
                        <input className="inputsignup" type="text" name="name" value={form.name} onChange={handleChange} placeholder="Enter your name" />
                        <input className="inputsignup" type="email" name="email" value={form.email} onChange={handleChange} placeholder="Enter your email" />
                        <input className="inputsignup" type="password" name="password" value={form.password} onChange={handleChange} placeholder="Enter your password" />
                        <input className="inputsignup" type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Enter your phone number" />
                        <select className="inputsignup" name="role" value={form.role} onChange={handleChange}>
                            <option value="" disabled>Select your role</option>
                            <option value="student">Student</option>
                            <option value="faculty">Faculty</option>
                            <option value="admin">Admin</option>
                        </select>
                        <div className="checkbox-container">
                            <input type="checkbox" id="terms" name="terms" checked={form.terms} onChange={handleChange}/>
                            <label htmlFor="terms">I agree to the Terms and Conditions</label>
                        </div>
                        <button type="submit" className="signup-btn">Sign Up</button>
                    </form>
                    
                    <p className="account-link">Already have an account? <a href="/login">Log in</a></p>
                </div>
            </div>
            <ToastContainer aria-label="Toast Notifications" />

        </div>
    );
}

export default Signup;