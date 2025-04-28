import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./dash.css";
import { useNavigate } from "react-router-dom";

function Dash(){
    const navigate = useNavigate();
    const [Name, setName] = useState<string | null>(null);

    useEffect(()=>{
        const storedName = localStorage.getItem("userName");
        if (storedName) {
            setName(storedName);
        } else {
            navigate("/login", { replace: true });
        }
    }, [navigate]);

    return(
        <div>
            <div className="navbar2">
                <div className="logo">
                    <img src="https://www.iitms.co.in/images/mastersoft-logo.png" alt="Horizon Logo" />
                </div>
                <div className="rightitems">
                    <p>Home</p>
                    <p>Welcome {Name}</p>
                </div>
            </div>

            <div className="content">
                <div className="upper3">
                    <div className="name">
                        <p className="text">Welcome {Name}</p>
                        <p className="text">Your Registration No.: 202401100600106</p>
                        <p className="text">Your Roll No.: 202401100600106</p>
                    </div>

                    <div className="attendance">
                        <div className="donut-chart">
                            <div className="donut-center">80%</div>
                        </div>
                        <div className="legend">
                            <div><span className="dot present"></span> Present</div>
                            <div><span className="dot absent"></span> Absent</div>
                        </div>
                    </div>

                    <div className="performance">
                        9.14 CGPA
                    </div>
                </div>

                <div className="lower3">
                    <div className="classes">
                        <p>Upcoming Classes</p>
                    </div>

                    <div className="result">
                        No Record Found
                    </div>

                    <div className="exams">
                        No Upcoming Exam
                    </div>
                </div>
            </div>

            <ToastContainer aria-label="Toast notifications" />
        </div>
    )
}

export default Dash;
