// import React, { useState } from 'react';
// import axios from 'axios';

// export const Login = (e) => {
//     const [input, setinput] = useState({
//         email: "",
//         password: ""
//     })
//     const inputChange = (e) => {
//         try {

//             // const name = e.target.name;
//             // const value = e.targe.value;
//      const {name, value}=e.taget
//             setinput({
//                 ...input,
//                 name:[value]
//                 // email:e.target.email,
//                 // password:e.target.password
//             })
//             console.log(e.target)
//         } catch (error) {
//             console.log(error)
//         }
//     }
//     const formSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const data = await axios({
//                 url: "http://localhost:5000/api/auth/login",
//                 method: 'POST',
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 data:input
//             })
//             console.log("data in the body : ", data.data)
//         } catch (err) {
//             console.log("orror occured in login: ", err)
//         }
//     }
//     return (

//         <section >

//             <h1 className='text-center font-sans text-2xl text-cyan-600'>LOGIN FORM</h1>
//             <form className=" justify-between  " method='post' onSubmit={formSubmit}>
//                 <div className="justify-between flex py-20 mx-10 ">

//                     <div>

//                         <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fbeautiful%2F&psig=AOvVaw3_hzWERl16mJPu-6dcUG6S&ust=1735929482824000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKDW9LPX14oDFQAAAAAdAAAAABAE" alt=''/>
//                     </div>
//                     <div className=" justify-between border-2 border-emerald-950 h-52 rounded m-7 items-center ">
//                         <div className='cursor-pointer p-7'>
//                             <label htmlFor="email" className='text-xl text-blue-300 px-3 -my-10'>
//                                 Email:
//                             </label>

//                             <input
//                                 className="px-5 text-red-100 "
//                                 type="text"
//                                 name='email'
//                                 value={input.email}
//                                 onChange={inputChange}
//                                 autoComplete="off"
//                                 id="email"
//                                 required
//                                 placeholder='enter your email'
//                             />
//                         </div>
//                         <br />
//                         <div>
//                             <label htmlFor="password" className='text-xl text-blue-300 px-3 '>
//                                 password:
//                             </label>
//                             <input
//                                 className="px-5 text-red-100 "
//                                 type="password"
//                                 name='password'
//                                 value={input.password}
//                                 onChange={inputChange}

//                                 autoComplete="off"
//                                 id="password"
//                                 required
//                                 placeholder='enter your password'
//                             />
//                         </div>
//                         <button type="submit" className='my-10  justify-center mx-28 bg-emerald-700 rounded w-16 h-8 '>LOGIN</button>
//                     </div>

//                 </div>
//             </form>


//         </section>
//     );
// }




import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';

export const Login = () => {

    const navigate=useNavigate();
    const auth = useAuth();
    const{storageTokenInLS}=auth;


    const [input, setInput] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState(null);

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInput((prevInput) => ({
            ...prevInput,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        // Validate input
        if (!input.email || !input.password) {
            setError('Both email and password are required.');
            return;
        }

        try {
            const payload = {
                email: input.email.trim(),
                password: input.password.trim(),
            };

            const response = await axios.post('http://localhost:5000/api/auth/login', payload, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
              if(response.status===200){
                const { token } = response.data;
    
                if (storageTokenInLS) {
                    storageTokenInLS(token); // Store token only if function is available
                } else {
                    console.warn("storageTokenInLS is not defined");
                }

                //    localStorage.setItem('token',response.data.token)
                  console.log('Login successful:', response.data);
                  alert('Login successful!');
                  navigate('/')
              }
            // Redirect or handle success
        } catch (err) {
            console.error('Login error:', err);

            if (err.response) {
                setError(err.response.data.message || 'Login failed. Please check your credentials.');
            } else {
                setError('Network error. Please try again later.',err);
            }

        }
    };

    return (
        <section>
            <h1 className="text-center font-sans text-2xl text-cyan-600">LOGIN FORM</h1>
            <form className="justify-between" onSubmit={handleFormSubmit}>
                <div className="justify-between flex py-20 mx-10">
                    <div>
                        <img
                            src="./Image02.png"
                            alt="Placeholder"
                            className="rounded"
                        />
                    </div>
                    <div className="border-2 border-emerald-950 h-52 rounded m-7 p-5">
                        <div className="mb-5">
                            <label htmlFor="email" className="block text-xl text-blue-300">
                                Email:
                            </label>
                            <input
                                className="block w-full p-2 border rounded text-white"
                                type="email"
                                name="email"
                                value={input.email}
                                onChange={handleInputChange}
                                autoComplete="off"
                                id="email"
                                required
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="password" className="block text-xl text-blue-300">
                                Password:
                            </label>
                            <input
                                className="block w-full p-2 border rounded text-white"
                                type="password"
                                name="password"
                                value={input.password}
                                onChange={handleInputChange}
                                autoComplete="off"
                                id="password"
                                required
                                placeholder="Enter your password"
                            />
                        </div>
                        {error && <p className="text-red-500">{error}</p>}
                        <button
                            type="submit"
                            className="block w-full py-2 bg-emerald-700 text-white rounded"
                        >
                            LOGIN
                        </button>
                    </div>
                </div>
            </form>
        </section>
    );
};
