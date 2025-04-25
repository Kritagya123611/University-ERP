import React from 'react'
import { useState } from 'react'
import './App.css'
import Horizon from './assets/images/Horizon.png' 
import { useNavigate } from 'react-router-dom'

function App() {
  const navigate=useNavigate();
  return (
    <div>
      <div className='upperdiv'>
          <p>Product Enquiry</p>
          <p>HorizonED Cloud Login</p>
          <button className='global'>  <img  className='handshake' src='https://cdn-icons-png.flaticon.com/128/9585/9585979.png'/>  Global Relations</button>
          <button className='partner'> <img  className='handshake' src='https://cdn-icons-png.flaticon.com/128/493/493881.png'/>  Become a Partner</button>
          <button className='hiring'> <img  className='handshake' src='https://cdn-icons-png.flaticon.com/128/3914/3914501.png'/>  We are Hiring</button>
      </div>
      <div className='navbar'>
        <div className='logo'><img src='https://www.iitms.co.in/images/mastersoft-logo.png' alt="Horizon Logo" /></div>
        <div className='rightitems'>
          <p>Home</p>
          <p>Company</p>
          <p>Products</p>
          <p>Educational ERP</p>   
          <p>Special Features</p>
          <p>Resources</p>
          <p>Contact Us</p>
        </div>
      </div>
      <div>
        <hr></hr>
      </div>
      <div className='title'>
        <div className='content'>
            <p className='heading'>Store Management <br/> System For Educational <br/> Institutions</p>
            <p className='subheading'>Manage Your Educational Institution's Inventory without any Hassles<br/>
              with MasterSoft's Store Management Information System!</p>
            <div className='buttonContainer'>
            <button className='signin' onClick={() => navigate('/signup')}>Sign Up Here</button>
              <button className='login' onClick={()=> navigate('/login')}>Already a Customer ? Login Here </button>
            </div>
        </div>
          <img className='banner' src='https://www.iitms.co.in/higher-education-erp/img/Store-Management-Systems.webp'/>
      </div>
      <div className='form'>
        <div className='formcontent'>
          <p className='formheading'>FREE CONSULTATION</p>
          <p className='formsubheading'>
            Fill the form below to get a demo of our Store Management System
          </p>
          <div className='nameemail'>
            <div className='formgroup'>
            <label htmlFor='fullname'>Full Name</label>
            <input type='text' id='fullname' placeholder='Enter your full name' className='inputfield' />
            </div>

            <div className='formgroup'>
            <label htmlFor='email'>Email ID</label>
            <input type='email' id='email' placeholder='Enter your email' className='inputfield' />
            </div>
          </div>
          
          <div className='mobilecollege'>
            <div className='formgroup'>
            <label htmlFor='mobile'>Mobile Number</label>
            <input type='text' id='mobile' placeholder='Enter your mobile number' className='inputfield' />
            </div>

            <div className='formgroup'>
            <label htmlFor='institution'>Institution Name</label>
            <input type='text' id='institution' placeholder='Enter your institution name' className='inputfield' />
            </div>
          </div>
          

          <div className='formgroup checkboxfield'>
            <input type='checkbox' id='agree' />
            <label htmlFor='agree'>
              I agree to the <a href='#' className='terms-link'>Terms and Conditions</a>
            </label>
          </div>

          <div className='submitbtn'>
            <button className='submit'>Request Free Demo</button>
          </div>
        </div>
      </div>
      <div className='textpart'>
        <h2 className='headtxt'>Higher Education ERP Module For Purchase & Stores</h2>
        <hr className='hr2'></hr>
        <div className='imgtxt'>
          <p className='para1'>
            It takes a huge amount of time to manage inventory manually. The chances of data mismatch leading to
            errors in calculation can also occur. This is why inventory management in educational institutions has
            become a major cause of concern. Be it keeping track of the stock or keeping the records in place – 
            all need a centralized system. <br /><br />
            Store inventory management software is a perfect solution for taking care of the inventory as it not 
            only reduces the time but also maximizes the efficiency of the whole process. <br /><br />
            A store management system (or inventory system) tracks goods or books from the point of purchase 
            through production and sales to the point of sale. It monitors inventory levels, orders, sales, take-up, 
            and deliveries. You can use it to manage all your inventory for your institution.
          </p>
          <img src='https://www.iitms.co.in/higher-education-erp/img/Store-Management-screen.webp' alt='Store Management Screen' />
        </div>
      </div>
      <div className="erp-container">
        <div className="erp-column">
          <h3>College ERP</h3>
          <ul>
            <li>Fees Collection</li>
            <li>Time-Table/Attendance</li>
            <li>Appraisal Management</li>
            <li>Learning Management System</li>
            <li>E-Learning</li>
            <li>College Examination</li>
            <li>Academic Management</li>
          </ul>
        </div>
        <div className="erp-column">
          <h3>University ERP</h3>
          <ul>
            <li>College Affiliations</li>
            <li>Centralized Admission</li>
            <li>Student Enrollment</li>
            <li>Outcome Based Education</li>
            <li>University Examination System</li>
            <li>Mobile App - Student Diary</li>
            <li>Health Center</li>
          </ul>
        </div>
        <div className="erp-column">
          <h3>Higher Education ERP</h3>
          <ul>
            <li>E-Learning</li>
            <li>Website</li>
            <li>Purchase & Stores</li>
            <li>Hostel</li>
            <li>HRMS</li>
            <li>Finance</li>
            <li>Library</li>
          </ul>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h2 className="footer-logo">MasterSoft ERP</h2>
            <p className="footer-description">
              Accelerating education with smart ERP solutions for Colleges and Universities.
            </p>
          </div>

          <div className="footer-section">
            <h3>Products</h3>
            <ul>
              <li>College ERP</li>
              <li>University ERP</li>
              <li>Higher Education ERP</li>
              <li>Store Management</li>
              <li>Learning Management</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Resources</h3>
            <ul>
              <li>Blog</li>
              <li>Case Studies</li>
              <li>White Papers</li>
              <li>Webinars</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact</h3>
            <ul>
              <li>Email: support@mastersoft.com</li>
              <li>Phone: +91 9876543210</li>
              <li>Address: Nagpur, Maharashtra, India</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 MasterSoft ERP. All rights reserved.</p>
        </div>
      </footer>

    </div>
  )
}

export default App;
