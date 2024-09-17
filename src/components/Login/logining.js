import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import loginimage from '../../assets/images/login/loging.png'
import { GoogleLogin } from "@react-oauth/google";

const LoginPage = () => {
  const { isAuthenticated, login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [agreeToTerms, setAgreeToTerms]= useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/'); 
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, email }),
      });

      if (response.ok) {
        login(); 
        navigate('/'); 
      } else {
        const error = await response.text();
        setMessage(error);
      }
    } catch (error) {
      setMessage('An error occurred during login.');
      console.error(error);
    }
  };

  return (
    <div className=' grid grid-cols-2 justify-center align pl-[15%] pt-[5%]'>
       <div className=' text'>
          <h1 className=' text-3xl text-black font-bold'>Welcome Back!</h1>
          <p className=' text-black font-semibold mb-3'>Enter your Credentials to access your account</p>

          <form onSubmit={handleLogin}>
          <div className="formGroup mb-4">
              <label htmlFor="username" className='block  mb-2 pt-[5%] font-extrabold'>Name</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your name"
                required
                autoComplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 w-full px-4 py-2 bg-white border border-slate-300 rounded-md shadow-sm
                focus:outline-none focus:border-white focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor='email' className='block  mb-2 pt-[5%] font-extrabold'>Email address</label>
              <input
              type='email'
              id='email'
              name='email'
              placeholder='Enter your email'
              required
              autoComplete='off'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full px-4 py-2 bg-white border border-slate-300 rounded-md shadow-sm
                focus:outline-none focus:border-white focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor='email' className='block  mb-2 pt-[5%] font-extrabold'>Password</label>
              <input
              type='password'
              id='password'
              name='email'
              placeholder='Enter your password'
              required
              autoComplete='off'
              value={email}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full px-4 py-2 bg-white border border-slate-300 rounded-md shadow-sm
                focus:outline-none focus:border-white focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div className='terms flex items-center mb-4 mt-4'>
              <input
              id='agreeToTerms'
              type='checkbox'
              checked={agreeToTerms}
              onChange={()=>setAgreeToTerms(!agreeToTerms)}
              className='h-4 w-4 text-blue-600 border-gray-300 rounded'
              />

<label htmlFor='agree-to-terms' className='ml-2 text-sm text-black'>
              Remember for 30 days
            </label>
            </div>

            
            <button
            type='submit'
            className="w-full py-2 px-4 bg-blue-900 text-white rounded "
              
          >
            Signup
          </button>

           <div className=' flex justify-center items-center my-3 mb-28 mt-16'>
             <div className=' w-1/4 h-px bg-gray-300'></div>
             <span className=' mx-4 text-gray-500'>or</span>
             <div className=' w-1/4 h-px bg-gray-300 '></div>

           </div>
 
          <div className="flex justify-center items-center mt-4">
          <span className="text-black font-bold">
    Don't have an account?{' '}
    <Link to="/signup" className="text-blue-600 underline hover:text-blue-800 justify-center align-middle items-center">
      Sign up
    </Link>
  </span>
          
          </div>
          </form>
       </div>

       <div>
        <img src={loginimage} 
        height={500}
        width={500}
        />
       </div>
    </div>
  );
};

export default LoginPage;
