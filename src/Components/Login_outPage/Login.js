// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError(''); // Clear previous errors

//     try {
//       const response = await fetch('https://ahmedwego.com/admin/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         const { role } = data;

//         // Store the user data in localStorage
//         localStorage.setItem('user', JSON.stringify(data));

//         // Redirect based on role
//         if (role === 'super') {
//           navigate('/superadmin/*');
//         } else if (role === 'admin') {
//           navigate('/admin/*');
//         } else {
//           navigate('/admin/*'); // Default redirect if role is not explicitly defined
//         }
//       } else {
//         setError(data.message || 'Login failed. Please try again.');
//       }
//     } catch (error) {
//       setError('Failed to login. Please try again.');
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div className="bg-white p-6 rounded shadow-md w-96">
//         <h2 className="text-2xl font-bold mb-4">Login</h2>
//         <form onSubmit={handleLogin}>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             />
//           </div>
//           {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
//           <button
//             type="submit"
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors

    try {
      const response = await fetch('https://ahmedwego.com/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.status === 200) {
        const { token, admin } = response.data;
        console.log(response.data)

        // Store the token securely in localStorage
        localStorage.setItem('token', token);

        // Redirect based on the admin role
        if (admin === 'superadmin') {
          navigate('/superadmin/dashboard');
        } else if (admin === 'admin') {
          navigate('/admin/dashboard');
        } else {
          // Default redirect if the role is not explicitly defined
          navigate('/admin/dashboard');
        }
      } else {
        setError('Login failed. Please check your credentials and try again.');
      }
    } catch (error) {
      setError('There was a problem with the network. Please try again later.');
      console.error('Login error:', error);
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
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;



// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError(''); // Clear previous errors

//     try {
//       const response = await axios.post('https://ahmedwego.com/admin/login', {
//         email,
//         password,
//       });

//       if (response.status === 200) {
//         const { token, admin } = response.data;
//         console.log(response.data)

//         // Store the token securely in localStorage
//         localStorage.setItem('token', token);

//         // Redirect based on the admin role
//         if (admin === 'superadmin') {
//           navigate('/superadmin/dashboard');
//         } else if (admin === 'admin') {
//           navigate('/admin/dashboard');
//         } else {
//           // Default redirect if the role is not explicitly defined
//           navigate('/admin/dashboard');
//         }
//       } else {
//         setError('Login failed. Please check your credentials and try again.');
//       }
//     } catch (error) {
//       setError('There was a problem with the network. Please try again later.');
//       console.error('Login error:', error);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div className="bg-white p-6 rounded shadow-md w-96">
//         <h2 className="text-2xl font-bold mb-4">Login</h2>
//         <form onSubmit={handleLogin}>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             />
//           </div>
//           {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
//           <button
//             type="submit"
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;
