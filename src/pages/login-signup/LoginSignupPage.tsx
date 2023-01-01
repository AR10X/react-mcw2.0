import React from 'react';
import LoginForm from 'src/components/login-form/LoginForm';
import SignupForm from 'src/components/signup-form/SignupForm';

function LoginSignupPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      {isLogin ? <LoginForm /> : <SignupForm />}
      <button onClick={() => setIsLogin((prev) => !prev)}>
        Toggle Login/Signup
      </button>
    </div>
  );
}

export default LoginSignupPage;
