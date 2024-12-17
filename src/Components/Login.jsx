import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Styled Components
const FormContainer = styled.form`
  min-height: 80vh;
  display: flex;
  align-items: center;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: auto;
  align-items: flex-start;
  padding: 32px;
  min-width: 384px;
  border: 1px solid #d1d5db;
  border-radius: 12px;
  color: #4b4b4b;
  font-size: 14px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.p`
  font-size: 24px;
  font-weight: 600;
`;

const InputLabel = styled.p`
  font-size: 14px;
  margin-bottom: 4px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  margin-top: 4px;
  font-size: 14px;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #4caf50;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  margin-top: 16px;
  cursor: pointer;

  &:disabled {
    background-color: #b5e8b5;
  }
`;

const ToggleState = styled.p`
  font-size: 14px;
  cursor: pointer;
  color: #4caf50;
  text-decoration: underline;
`;

const Login = () => {
  const navigate = useNavigate();

  const [state, setState] = useState('Sign Up');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const backendUrl = 'YOUR_BACKEND_URL'; // Replace with your actual backend URL

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (!email || !password || (state === 'Sign Up' && !name)) {
      toast.error('Please fill in all fields');
      return;
    }

    setIsLoading(true);

    try {
      const url = `${backendUrl}/api/user/${state === 'Sign Up' ? 'register' : 'login'}`;
      const { data } = await axios.post(url, { name, password, email });

      if (data.success) {
        localStorage.setItem('token', data.token); // Save token to localStorage
        toast.success(`${state === 'Sign Up' ? 'Account created' : 'Login'} successful!`);
        navigate('/');
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error('An error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/');
    }
  }, [navigate]);

  return (
    <FormContainer onSubmit={onSubmitHandler}>
      <FormWrapper>
        <Title>{state === 'Sign Up' ? 'Create Account' : 'Login'}</Title>

        {state === 'Sign Up' && (
          <>
            <InputLabel>Full Name</InputLabel>
            <Input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </>
        )}

        <InputLabel>Email</InputLabel>
        <Input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <InputLabel>Password</InputLabel>
        <Input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Please wait...' : state === 'Sign Up' ? 'Create Account' : 'Login'}
        </Button>

        <ToggleState onClick={() => setState(state === 'Sign Up' ? 'Login' : 'Sign Up')}>
          {state === 'Sign Up' ? 'Already have an account? Login here' : 'Create a new account? Click here'}
        </ToggleState>
      </FormWrapper>
    </FormContainer>
  );
};

export default Login;
