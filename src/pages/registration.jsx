// import React,{useState} from 'react';


// export const Register = () => {
//     const [user, setuser] = useState({
//         name:"",
//         value:''
//     })

//     const handleEvent=(e)=>{

//         console.log(e)
//        let name=e.target.input.name;
//        let value=e.value.value;
//        setuser({
//         ...user,
//         [name]:value
//        })
//     }

//     return (
//         <>
//             <section>
//                 <main>
//                     <div>
//                         <div className='container mx-auto grid grid-cols-2 gap-4 mt-20 '>
//                             <div>
//                                 <img src="../component/philippe-oursel-7wCEHSkMSdw-unsplash.jpg" alt=" " width='400' height='500' />

//                             </div>

//                             <div>

//                                 <h1 className='text-xl font-medium'  >Registration Form</h1>
//                                 <br />
//                                 <form action="" method="post" className='flex flex-col gap-4 items-center'>
//                                     <div>

//                                         <label htmlFor='username' className='block text-sm font-medium'>username:   </label>
//                                         <input type="text"
//                                             required
//                                             onChange={handleEvent}
//                                             value={user.name}
//                                             name='username'
//                                             id='username'
//                                             autoComplete='off'
//                                             placeholder='username'
//                                             className='bg-white text-center rounded text-black mt-1 block'

//                                         />
//                                     </div>
//                                     <div>

//                                         <label htmlFor='email' className='block text-sm font-medium'>email:   </label>
//                                         <input type="email"
//                                             required

//                                             name='email'
//                                             id='email'
//                                             autoComplete='off'
//                                             placeholder='email'
//                                             className='bg-white text-center rounded text-black mt-1 block'

//                                         />
//                                     </div>
//                                     <div>

//                                         <label htmlFor='phone' className='block text-sm font-medium'>phone:   </label>
//                                         <input type="text"
//                                             required

//                                             name='phone'
//                                             id='phone'
//                                             autoComplete='off'
//                                             placeholder='phone'
//                                             className='bg-white text-center rounded text-black mt-1 block'

//                                         />
//                                     </div>
//                                     <div>

//                                         <label htmlFor='password' className='block text-sm font-medium'>password:   </label>
//                                         <input type="password"
//                                             required

//                                             name='password'
//                                             id='password'
//                                             autoComplete='off'
//                                             placeholder='password'
//                                             className='bg-white text-center rounded text-black mt-1 block'

//                                         />
//                                     </div>
//                                     <div>

//                                         <label htmlFor='isAdmin' className='block text-sm font-medium'>isAdmin:   </label>
//                                         <input type="text"
//                                             required

//                                             name='isAdmin'
//                                             id='isAdmin'
//                                             autoComplete='off'
//                                             placeholder='isAdmin'
//                                             className='bg-white text-center rounded text-black mt-1 block'

//                                         />
//                                     </div>
//                                     <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
//                                         Register Now
//                                     </button>
//                                 </form>
//                             </div>


//                         </div>
//                     </div>
//                 </main>
//             </section>
//         </>

//     );
// }

import React, { useState } from 'react';
import axios from 'axios';

export const Register = () => {
    const [user, setUser] = useState({
        name: "",
        // value: "",
        email: "",
        phone: "",
        password: "",
        isAdmin: ""
    });

    const handleEvent = (e) => {
        // Log the event to check what is being passed

        // Get the name and value from the input field
        const name = e.target.name; // Get name of the input field
        const value = e.target.value; // Get the value entered in the field

        // Update the state with the new value for the respective field
        setUser({
            ...user, // Keep the existing values
            [name]: value // Dynamically update the field based on name
        });
        // console.log(e);
    };


    // const onSubmit = async (e) => {
    //     e.preventDefault();

    //     alert(user);
    //     try {
    //         const response = await fetch("http://localhost:5000/api/auth/register", {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': "application/json"
    //             },
    //             body: JSON.stringify(user)
    //         })

    //         console.log(response)
    //     } catch (error) {
    //         console.log('error i fetching the api', error)

    //     }
    // }
    // const onSubmit = async (e) => {
    //     e.preventDefault(); // Prevent form default submission behavior

    //     try {
    //       const response = await axios("http://localhost:5000/api/auth/register", {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(user),
    //       });

    //       if (!response.ok) {
    //         throw new Error(`HTTP error! Status: ${response.status}`);
    //       }

    //       const data = await response.json();
    //       console.log("User registered successfully:", data);
    //     } catch (error) {
    //       console.error("Error during registration:", error.message);
    //     }
    //   };


    const onSubmit = async (e) => {
        e.preventDefault(); // Prevent form default submission behavior

        try {
            // Make the POST request with axios
            const response = await axios.post("http://localhost:5000/api/auth/register", user, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            // Log the success message
            console.log("User registered successfully:", response.data);
        } catch (error) {
            // Handle errors
            if (error.response) {
                // Server responded with a status other than 2xx
                console.error("Error during registration:", error.response.data.message || error.response.statusText);
            } else if (error.request) {
                // No response was received
                console.error("Error during registration: No response from server");
            } else {
                // Error setting up the request
                console.error("Error during registration:", error.message);
            }
        }
    };


    return (
        <>
            <section>
                <main>
                    <div>
                        <div className='container mx-auto grid grid-cols-2 gap-4 mt-20'>
                            <div>
                                <img
                                    src="../component/philippe-oursel-7wCEHSkMSdw-unsplash.jpg"
                                    alt=" "
                                    width='400'
                                    height='500'
                                />
                            </div>

                            <div>
                                <h1 className='text-xl font-medium'>Registration Form</h1>
                                <br />
                                <form onSubmit={onSubmit} method="post" className='flex flex-col gap-4 items-center'>
                                    <div>
                                        <label htmlFor='username' className='block text-sm font-medium'>
                                            username:
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            onChange={handleEvent}
                                            value={user.name}
                                            name='name'  // Changed to match state property
                                            id='username'
                                            autoComplete='off'
                                            placeholder='username'
                                            className='bg-white text-center rounded text-black mt-1 block'
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor='email' className='block text-sm font-medium'>
                                            email:
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            onChange={handleEvent}
                                            value={user.email}
                                            name='email'
                                            id='email'
                                            autoComplete='off'
                                            placeholder='email'
                                            className='bg-white text-center rounded text-black mt-1 block'
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor='phone' className='block text-sm font-medium'>
                                            phone:
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            onChange={handleEvent}
                                            value={user.phone}
                                            name='phone'
                                            id='phone'
                                            autoComplete='off'
                                            placeholder='phone'
                                            className='bg-white text-center rounded text-black mt-1 block'
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor='password' className='block text-sm font-medium'>
                                            password:
                                        </label>
                                        <input
                                            type="password"
                                            required
                                            onChange={handleEvent}
                                            value={user.password}
                                            name='password'
                                            id='password'
                                            autoComplete='off'
                                            placeholder='password'
                                            className='bg-white text-center rounded text-black mt-1 block'
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor='isAdmin' className='block text-sm font-medium'>
                                            isAdmin:
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            onChange={handleEvent}
                                            value={user.isAdmin}
                                            name='isAdmin'
                                            id='isAdmin'
                                            autoComplete='off'
                                            placeholder='isAdmin'
                                            className='bg-white text-center rounded text-black mt-1 block'
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                                    >
                                        Register Now
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </>
    );
};



// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export const Register = () => {
//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     password: "",
//     isAdmin: "",
//   });

//   const [submitTrigger, setSubmitTrigger] = useState(false); // Flag to trigger `onSubmit` in useEffect

//   const handleEvent = (e) => {
//     const { name, value } = e.target;
//     setUser({
//       ...user,
//       [name]: value,
//     });
//   };

//   const onSubmit = async () => {
//     try {
//       const response = await axios.post("http://localhost:5000/api/auth/register", user, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       console.log("User registered successfully:", response.data);
//     } catch (error) {
//       if (error.response) {
//         console.error("Error during registration:", error.response.data.message || error.response.statusText);
//       } else if (error.request) {
//         console.error("Error during registration: No response from server");
//       } else {
//         console.error("Error during registration:", error.message);
//       }
//     } finally {
//       setSubmitTrigger(false); // Reset the flag after submission
//     }
//     alert(user)
//   };

//   useEffect(() => {
//     if (submitTrigger) {
//       onSubmit();
//     }
//   }, [submitTrigger]); // `onSubmit` will be called when `submitTrigger` changes to true

//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent default form submission
//     setSubmitTrigger(true); // Set flag to true to trigger useEffect
//   };

//   return (
//     <>
//       <section>
//         <main>
//           <div>
//             <div className="container mx-auto grid grid-cols-2 gap-4 mt-20">
//               <div>
//                 <img
//                   src="../component/philippe-oursel-7wCEHSkMSdw-unsplash.jpg"
//                   alt=" "
//                   width="400"
//                   height="500"
//                 />
//               </div>

//               <div>
//                 <h1 className="text-xl font-medium">Registration Form</h1>
//                 <br />
//                 <form onSubmit={handleSubmit} method="post" className="flex flex-col gap-4 items-center">
//                   <div>
//                     <label htmlFor="username" className="block text-sm font-medium">
//                       Username:
//                     </label>
//                     <input
//                       type="text"
//                       required
//                       onChange={handleEvent}
//                       value={user.name}
//                       name="name"
//                       id="username"
//                       autoComplete="off"
//                       placeholder="Username"
//                       className="bg-white text-center rounded text-black mt-1 block"
//                     />
//                   </div>

//                   <div>
//                     <label htmlFor="email" className="block text-sm font-medium">
//                       Email:
//                     </label>
//                     <input
//                       type="email"
//                       required
//                       onChange={handleEvent}
//                       value={user.email}
//                       name="email"
//                       id="email"
//                       autoComplete="off"
//                       placeholder="Email"
//                       className="bg-white text-center rounded text-black mt-1 block"
//                     />
//                   </div>

//                   <div>
//                     <label htmlFor="phone" className="block text-sm font-medium">
//                       Phone:
//                     </label>
//                     <input
//                       type="text"
//                       required
//                       onChange={handleEvent}
//                       value={user.phone}
//                       name="phone"
//                       id="phone"
//                       autoComplete="off"
//                       placeholder="Phone"
//                       className="bg-white text-center rounded text-black mt-1 block"
//                     />
//                   </div>

//                   <div>
//                     <label htmlFor="password" className="block text-sm font-medium">
//                       Password:
//                     </label>
//                     <input
//                       type="password"
//                       required
//                       onChange={handleEvent}
//                       value={user.password}
//                       name="password"
//                       id="password"
//                       autoComplete="off"
//                       placeholder="Password"
//                       className="bg-white text-center rounded text-black mt-1 block"
//                     />
//                   </div>

//                   <div>
//                     <label htmlFor="isAdmin" className="block text-sm font-medium">
//                       isAdmin:
//                     </label>
//                     <input
//                       type="text"
//                       required
//                       onChange={handleEvent}
//                       value={user.isAdmin}
//                       name="isAdmin"
//                       id="isAdmin"
//                       autoComplete="off"
//                       placeholder="isAdmin"
//                       className="bg-white text-center rounded text-black mt-1 block"
//                     />
//                   </div>

//                   <button
//                     type="submit"
//                     className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
//                   >
//                     Register Now
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </main>
//       </section>
//     </>
//   );
// };
