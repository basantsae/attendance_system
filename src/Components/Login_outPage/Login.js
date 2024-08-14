import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Replace this with your actual API call
      const response = await fetch('https://ahmedwego.com/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

    //   if (data.success) {
    //     // Assuming your API returns the user role in the response
    //     const { role } = data;

        // Store the user data in localStorage or any state management solution
        localStorage.setItem('user', JSON.stringify(data));

        navigate('/admin/*');

        // Redirect based on role
        // if (role === 'super') {
        //   navigate('/superadmin/*');
        // } else if (role === 'admin') {
        //   navigate('/admin/*');
        // }
    //   } else {
    //     setError(data.message);
    //   }
    } catch (error) {
      setError('Failed to login. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleLogin}>
      <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        {error && <p>{error}</p>}
        <button type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >Login</button>
      </form>
    </div>
    </div>
  );
}

export default Login;
