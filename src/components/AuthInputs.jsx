import { useState } from 'react';
import Input from './Input';
import DivContainer from './Div';
import Button from './Button';


export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <DivContainer>
          <Input label="Email"
            type="email"
            invalid={emailNotValid}
            onChange={(event) => handleInputChange('email', event.target.value)}
          />        
          <Input label="Password"
            type="password"
            invalid = {passwordNotValid}
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
        
        </DivContainer>
      <div className="actions">
        <Button type="button"> Create a new account</Button>
        {/* <button type="button" className="text-button"></button>*/}
        <Button onClick={handleLogin}>Sign In</Button>
        {/* <button className='button' onClick={handleLogin}></button> */}
      </div>
    </div>
  );
}
