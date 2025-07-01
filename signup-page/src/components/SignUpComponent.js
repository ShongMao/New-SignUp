import { useState } from 'react'
import Field from './Field';

function SignUp() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [errors, setErrors] = useState({
    email: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {
    const {id, value} = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));

    if (id === 'email') {
      if (!value) {
        setErrors(prev => ({...prev, email: ''}));
      } else if (!value.includes('@')) {
        setErrors(prev => ({...prev, email: 'Email must contain "@"'}));
      } else {
        setErrors(prev => ({...prev, email: ''}));
      } 
    } 

    if (id === 'password' || id === 'confirmPassword') {
      if (id === 'password' && formData.confirmPassword && value !== formData.confirmPassword) {
        setErrors(prev => ({...prev, confirmPassword: "Passwords must match"}));
      } else if (id === 'confirmPassword' && value !== formData.password) {
        setErrors(prev => ({...prev, confirmPassword: "Passwords must match"}));
      } else {
        setErrors(prev => ({...prev, confirmPassword: ''}));
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setErrors(prev => ({...prev, confirmPassword: "Passwords must match"}));
      return;
    }
    console.log('Form submitted');
    
  };
  

  return (
    <form onSubmit={handleSubmit} className='fields'>
      <div className="signup">
        <div className="title">Sign Up!</div>
          <div className='fields-container'>
            <Field type="First Name" onChange={handleChange} />
            <Field type="Last Name" onChange={handleChange} />
            <Field 
              type="Email" 
              onChange={handleChange} 
              value={formData.email}
              error={errors.email}
            />
            <Field type="Phone Number" onChange={handleChange} />
            <Field 
              type="Password" 
              onChange={handleChange} 
              value={formData.password}
            />
            <Field 
              type="Confirm Password" 
              onChange={handleChange} 
              value={formData.confirmPassword} 
              error={errors.confirmPassword}
            />
          </div>
      </div> 

      <button className="submit-button" type="submit">Create Account</button>
    </form> 
  )
}

export default SignUp;