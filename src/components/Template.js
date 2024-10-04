import React from 'react';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';

const Template = ({ formtype, setIsLoggedIn }) => {
  return (
 
      <div>
        {/* Form rendering */}
        {formtype === 'signup' ? (
          <SignupForm setIsLoggedIn={setIsLoggedIn}/>
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        )}
      </div>
    
  );
};

export default Template;
