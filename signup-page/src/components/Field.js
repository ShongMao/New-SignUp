function Field ({type, onChange, value, error}) {
  const config = {
    'First Name': {
      id: 'firstName',
      inputType: 'text',
      pattern: '^[A-Za-z]+$',
    },
    'Last Name': {
      id: 'lastName',
      inputType: 'text',
      pattern: '^[A-Za-z]+$',
    },
    'Email': {
      id: 'email',
      inputType: 'email',
      pattern: '^[A-Za-z0-9@.]+$',
    },
    'Phone Number': {
      id: 'phoneNumber',
      inputType: 'tel',
      pattern: '^\\+?[0-9]{10,15}$',
    },
    'Password': {
      id: 'password',
      inputType: 'password',
      pattern: '^.*$',
    },
    'Confirm Password': {
      id: 'confirmPassword',
      inputType: 'password',
      pattern: '^.*$',
    }
  } 
  const processType = config[type]
  if (!processType) {
    console.log(`invalid type ${type}`)
    return null;
  }



  return (
    <div className="field">
      <div>
        <label htmlFor={processType.id}>{type}</label>
      </div>
      <input 
        type={processType.inputType} 
        id={processType.id} 
        pattern={processType.pattern}
        required
        onChange = {onChange}
        value = {value}
      />
      {error && (
        <div className="error-message" style={{color: 'red', fontSize: '0.8rem'}}>
          {error}
        </div>
      )}
    </div>
  )
}

export default Field