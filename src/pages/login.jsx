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


// import React, { useState } from 'react';
// import axios from 'axios';

// export const Login = () => {
//     const [input, setInput] = useState({
//         email: "",
//         password: ""
//     });

//     const inputChange = (e) => {
//         try {
//             const { name, value } = e.target;
//             setInput({
//                 ...input,
//                 [name]: value
//             });
//         } catch (error) {
//             console.error("Error in inputChange:", error);
//         }
//     };

//     const formSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios({
//                 url: "http://localhost:5000/api/auth/login",
//                 method: 'POST',
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 data: input
//             });
//             console.log("Response from API:", response.data);
//         } catch (err) {
//             console.error("Error occurred in login:", err);
//         }
//     };

//     return (
//         <section>
//             <h1 className="text-center font-sans text-2xl text-cyan-600">LOGIN FORM</h1>
//             <form className="justify-between" method="post" onSubmit={formSubmit}>
//                 <div className="justify-between flex py-20 mx-10">
//                     <div>
//                         <img
//                             src="https://via.placeholder.com/150"
//                             alt="Placeholder"
//                         />
//                     </div>
//                     <div className="justify-between border-2 border-emerald-950 h-52 rounded m-7 items-center">
//                         <div className="cursor-pointer p-7">
//                             <label htmlFor="email" className="text-xl text-blue-300 px-3 -my-10">
//                                 Email:
//                             </label>
//                             <input
//                                 className="px-5 text-red-100"
//                                 type="text"
//                                 name="email"
//                                 value={input.email}
//                                 onChange={inputChange}
//                                 autoComplete="off"
//                                 id="email"
//                                 required
//                                 placeholder="Enter your email"
//                             />
//                         </div>
//                         <br />
//                         <div>
//                             <label htmlFor="password" className="text-xl text-blue-300 px-3">
//                                 Password:
//                             </label>
//                             <input
//                                 className="px-5 text-red-100"
//                                 type="password"
//                                 name="password"
//                                 value={input.password}
//                                 onChange={inputChange}
//                                 autoComplete="off"
//                                 id="password"
//                                 required
//                                 placeholder="Enter your password"
//                             />
//                         </div>
//                         <button
//                             type="submit"
//                             className="my-10 justify-center mx-28 bg-emerald-700 rounded w-16 h-8"
//                         >
//                             LOGIN
//                         </button>
//                     </div>
//                 </div>
//             </form>
//         </section>
//     );
// };



import React, { useState } from 'react';
import axios from 'axios';

export const Login = () => {
    const [input, setInput] = useState({
        email: "",
        password: ""
    });

    const inputChange = (e) => {
        try {
            const { name, value } = e.target;
            setInput({
                ...input,
                [name]: value // Dynamically update the field
            });
        } catch (error) {
            console.error("Error in inputChange:", error);
        }
    };

    const formSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                'http://localhost:5000/api/auth/login',
                input,
                {
                    headers: {
                        "Content-Type": "application/json",
                    }
                });
            console.log("Response from API:", response.data);
        } catch (err) {
            console.error("Error occurred in login:", err);
            if (err.code === 'ERR_NETWORK') {
                alert("Network Error: Unable to connect to the server. Ensure the backend is running.");
            }
        }
    };

    return (
        <section>
            <h1 className="text-center font-sans text-2xl text-cyan-600">LOGIN FORM</h1>
            <form className="justify-between" method="post" onSubmit={formSubmit}>
                <div className="justify-between flex py-20 mx-10">
                    <div>
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Placeholder"
                        />
                    </div>
                    <div className="justify-between border-2 border-emerald-950 h-52 rounded m-7 items-center">
                        <div className="cursor-pointer p-7">
                            <label htmlFor="email" className="text-xl text-blue-300 px-3 -my-10">
                                Email:
                            </label>
                            <input
                                className="px-5 text-red-100"
                                type="text"
                                name="email"
                                value={input.email}
                                onChange={inputChange}
                                autoComplete="off"
                                id="email"
                                required
                                placeholder="Enter your email"
                            />
                        </div>
                        <br />
                        <div>
                            <label htmlFor="password" className="text-xl text-blue-300 px-3">
                                Password:
                            </label>
                            <input
                                className="px-5 text-red-100"
                                type="password"
                                name="password"
                                value={input.password}
                                onChange={inputChange}
                                autoComplete="off"
                                id="password"
                                required
                                placeholder="Enter your password"
                            />
                        </div>
                        <button
                            type="submit"
                            className="my-10 justify-center mx-28 bg-emerald-700 rounded w-16 h-8"
                        >
                            LOGIN
                        </button>
                    </div>
                </div>
            </form>
        </section>
    );
};
