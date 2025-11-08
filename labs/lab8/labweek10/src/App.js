import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    address1: '',
    address2: '',
    city: '',
    province: '',
    postalCode: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log(formData);
  };

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const [submitted, setSubmitted] = useState(false);

  return (
    <div style={{ marginTop: '30px', textAlign: 'center', maxWidth: '800px', margin: '30px auto' }}>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
      <div>
          <label htmlFor="email">Email:</label><br />
          <input 
            type="email" 
            id="email"
            name="email" 
            placeholder="Enter email" 
            value={formData.email} 
            onChange={handleChange} 
            required
          />
      </div>
      <br />        
      <div>
          <label htmlFor="fullName">Full Name:</label><br />
          <input 
            type="text" 
            id="fullName"
            name="fullName" 
            placeholder="Full Name" 
            value={formData.fullName} 
            onChange={handleChange} 
            required
          />
      </div>
      <br />
      <div>
          <label htmlFor="address1">Address 1:</label><br />
          <input 
            type="text" 
            id="address1"
            name="address1" 
            placeholder="Address 1" 
            value={formData.address1} 
            onChange={handleChange} 
            required
          />
      </div>
      <br />
      <div>
          <label htmlFor="address2">Address 2:</label><br />
          <input 
            type="text" 
            id="address2"
            name="address2" 
            placeholder="Address 2" 
            value={formData.address2} 
            onChange={handleChange} 
            optional
          />
      </div>
      <br />
      <div>
          <label htmlFor="city">City:</label><br />
          <input 
            type="text" 
            id="city"
            name="city" 
            placeholder="City" 
            value={formData.city} 
            onChange={handleChange} 
            required
          />
      </div>
      <br />
      <div>
          <label htmlFor="province">Province:</label><br />
          <select 
            id="province"
            name="province" 
            value={formData.province} 
            onChange={handleChange} 
            required
          >
            <option value="">Select Province</option>
            <option value="Alberta">Alberta</option>
            <option value="British Columbia">British Columbia</option>
            <option value="Manitoba">Manitoba</option>
            <option value="New Brunswick">New Brunswick</option>
            <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
            <option value="Northwest Territories">Northwest Territories</option>
            <option value="Nova Scotia">Nova Scotia</option>
            <option value="Nunavut">Nunavut</option>
            <option value="Ontario">Ontario</option>
            <option value="Prince Edward Island">Prince Edward Island</option>
            <option value="Quebec">Quebec</option>
            <option value="Saskatchewan">Saskatchewan</option>
            <option value="Yukon">Yukon</option>
          </select>
      </div>
      <br />
      <div>
          <label htmlFor="postalCode">Postal Code:</label><br />
          <input 
            type="text" 
            id="postalCode"
            name="postalCode" 
            placeholder="Postal Code" 
            value={formData.postalCode} 
            onChange={handleChange} 
            required
          />
      </div>
      <br />
      <button type="submit">Submit</button>
      </form>
      {submitted && (
        <div style={{ marginTop: '30px', textAlign: 'center', maxWidth: '800px', margin: '30px auto' }}>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Full Name:</strong> {formData.fullName}</p>
          <p><strong>Address 1:</strong> {formData.address1}</p>
          <p><strong>Address 2:</strong> {formData.address2}</p>
          <p><strong>City:</strong> {formData.city}</p>
          <p><strong>Province:</strong> {formData.province}</p>
          <p><strong>Postal Code:</strong> {formData.postalCode}</p>
        </div>
      )}
    </div>
  );


}

export default App;
