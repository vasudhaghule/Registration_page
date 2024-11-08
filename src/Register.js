
import React, { useState } from 'react';
import './Register.css'; 


function Register() {
  const [referralCode, setReferralCode] = useState('');

  const handleInputChange = (e) => {
    setReferralCode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Referral Code:", referralCode);
  };

  return (
    <div className="register-container">
    <div className="register-card">
  <h1 className="register-title">Register in <span className="brand">MyWealth</span></h1>
 <p className="register-subtitle">The fastest-growing investment and wealth management company.</p>
    <p className="register-trust">💰 +10,000 users trust us.</p>
 <form onSubmit={handleSubmit} className="register-form">
 <label htmlFor="referralCode" className="register-label">Referral Code*</label>
        <input
            type="text"
            id="referralCode"
            value={referralCode}
            onChange={handleInputChange}
            placeholder="REFERRAL01MCO"
            className="register-input"
          />
    <div className="button-container">
            <button type="button" className="skip-button">Skip</button>
             <button type="submit" className="next-button">Next</button>
          </div>
        </form>
        <p className="privacy-text">
          This site is protected by Google’s <a href="/privacy-policy" className="link">Privacy Policy</a> and <a href="/terms-of-service" className="link">Terms of Service</a> apply.
        </p>
      </div>
      </div>
  );
  }

  export default Register;
