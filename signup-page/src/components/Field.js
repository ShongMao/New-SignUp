function Field ({type}) {
  const config = {
    'First Name': {
      id: 'firstName',
      inputType: 'text',
      pattern: '^[A-Za-z]+$',
      errorMessage: "No numbers or special characters"
    },
    'Last Name': {
      id: 'lastName',
      inputType: 'text',
      pattern: '^[A-Za-z]+$',
      errorMessage: "No numbers or special characters"
    },
    'Email': {
      id: 'email',
      inputType: 'email',
      pattern: '^[A-Za-z@.]+$',
      errorMessage: "Please enter a valid email address"
    },
    'Phone Number': {
      id: 'phoneNumber',
      inputType: 'tel',
      pattern: '^\\+?[0-9]{10,15}$',
      errorMessage: "No numbers or special characters"
    },
    'Password': {
      id: 'password',
      inputType: 'password',
      pattern: '^.*$',
      errorMessage: "Invalid password"
    },
    'Confirm Password': {
      id: 'confirmPassword',
      inputType: 'password',
      pattern: '^.*$',
      errorMessage: "Passwords must match"
    }
  } 
  const processType = config[type]
  if (!processType) {
    console.log(`invalid type ${type}`)
    return null;
  }



  return (
    <div class="field">
      <div>
        <label for={processType.id}>{type}</label>
      </div>
      <input 
        type={processType.inputType} 
        id={processType.id} 
        pattern={processType.pattern}
        required
      />
    </div>
  )
}

export default Field