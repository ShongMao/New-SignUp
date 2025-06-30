
import Field from './Field';

function SignUp() {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
    
  };
  

  return (
    <form onSubmit={handleSubmit} className='fields'>
      <div class="signup">
        <div class="title">Sign Up!</div>
          <div className='fields-container'>
            <Field type="First Name" />
            <Field type="Last Name"/>
            <Field type="Email"/>
            <Field type="Phone Number"/>
            <Field type="Password"/>
            <Field type="Confirm Password"/>
          </div>
      </div> 

      <button className="submit-button" type="submit">Create Account</button>
    </form> 
  )
}

export default SignUp;