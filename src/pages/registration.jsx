

    // **************************************************************************************************************




    import React, { useState } from 'react';
    import axios from 'axios';
    import {useNavigate} from 'react-router-dom';
    import { useAuth } from '../store/auth';
    
    export const Register = () => {

        const navigate=useNavigate();
        const auth=useAuth();
        const {storageTokenInLS}=auth

        const [user, setUser] = useState({
            username: "",
            // value: "",
            email: "",
            age:"",
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

    const onSubmit = async (e) => {
        e.preventDefault(); // Prevent form default submission behavior

        try {
            // Make the POST request with axios
            const response = await axios.post("http://localhost:5000/api/auth/register", user, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
                // if(response.status===200){
                //     const res_data=  response;
                //     console.log(res_data);
                //     // localStorage.setItem(res_data.data.token)
                //             // Token.storetokenInLS(res_data.data.token)
                //    const token= storageTokenInLS(res_data.data.token);
                //    console.log(token)
                //     console.log("User registered successfully:", response.data);
                //     alert(`Registration Successfull from ${user.username}`)
                //      navigate('/login')
                // }

                if (response.status === 200) {
                    const { token } = response.data;
    
                    if (storageTokenInLS) {
                        storageTokenInLS(token); // Store token only if function is available
                    } else {
                        console.warn("storageTokenInLS is not defined");
                    }
    
                    console.log("User registered successfully:", response.data);
                    alert(`Registration Successful, Welcome ${user.username}!`);
    
                    navigate("/login");
                }



            // Log the success message
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
            console.log(error);
        }
    };


    return (
        <>
        <div className=" bg-black  h-screen ">

            <section >
                <main>
                    <div>
                        <div className='container mx-auto grid grid-cols-2 gap-4 mt-20'>
                            {/* <div>
                                <img
                                    src="../component/philippe-oursel-7wCEHSkMSdw-unsplash.jpg"
                                    alt=" "
                                    width='400'
                                    height='500'
                                />
                            </div> */}

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
                                            value={user.username}
                                            name='username'  // Changed to match state property
                                            id='username'
                                            autoComplete='off'
                                            placeholder='username'
                                            className='bg-white text-center rounded text-black mt-1 block'
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor='age' className='block text-sm font-medium'>
                                            age:
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            onChange={handleEvent}
                                            value={user.age}
                                            name='age'  // Changed to match state property
                                            id='age'
                                            autoComplete='off'
                                            placeholder='age'
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
        </div>
        </>
    );
};


// *************************************************************************************************************************************






// import React, { useState } from 'react';

// export const Register = () => {
//     const [user, setUser] = useState({
//         name: "",
//         email: "",
//         phone: "",
//         password: "",
//         age:"",
//         isAdmin: false
//     });

//     const [error, setError] = useState("");
//     const [success, setSuccess] = useState("");

//     const handleEvent = (e) => {
//         const { name, value, type, checked } = e.target;
        
//         setUser(prev => ({
//             ...prev,
//             [name]: type === 'checkbox' ? checked : value
//         }));
//     };

//     const validateForm = () => {
//         if (!user.username || user.username.length < 3) {
//             setError("Username must be at least 3 characters long");
//             return false;
//         }
        
//         if (!user.email ) {
//             // setError("Please enter a valid email address");
//             return false;
//         }
//         if (!user.age || !/\S+@\S+\.\S+/.test(user.age)) {
//             setError("Please enter a valid email address");
//             return false;
//         }
//         if (!user.phone || !/^\d{10}$/.test(user.phone.replace(/\D/g, ''))) {
//             setError("Please enter a valid 10-digit phone number");
//             return false;
//         }
        
//         if (!user.password || user.password.length < 6) {
//             setError("Password must be at least 6 characters long");
//             return false;
//         }

//         return true;
//     };

//     const onSubmit = async (e) => {
//         e.preventDefault();
//         setError("");
//         setSuccess("");

//         // if (!validateForm()) {
//         //     return;
//         // }

//         const requestBody = {
//             name: user.username,
//             email: user.email,
//             phone: user.phone,
//             age:user.age,
//             password: user.password,
//             isAdmin: user.isAdmin ? "true" : "false"
//         };

//         try {
//             const response = await fetch("http://localhost:5000/api/auth/register", {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(requestBody)
//             });

//             // First check if the response is ok
//             if (!response.ok) {
//                 // Try to get the error message from response
//                 let errorMessage;
//                 try {
//                     const errorData = await response.json();
//                     errorMessage = errorData.message || 'Registration failed';
//                 } catch (e) {
//                     // If parsing JSON fails, use the status text
//                     errorMessage = response.statusText || 'Registration failed';
//                 }
//                 throw new Error(errorMessage);
//             }

//             // Try to parse the success response
//             try {
//                 const data = await response.text();
//                 // Check if the response is JSON
//                 const jsonData = data ? JSON.parse(data) : {};
                
//                 setSuccess(jsonData.message || "Registration successful!");
//                 setUser({
//                     name: "",
//                     email: "",
//                     phone: "",
//                     age:"",
//                     password: "",
//                     isAdmin: false
//                 });
//             } catch (e) {
//                 // If response isn't JSON but request was successful
//                 setSuccess("Registration successful!");
//                 setUser({
//                     name: "",
//                     email: "",
//                     phone: "",
//                     age:"",
//                     password: "",
//                     isAdmin: false
//                 });
//             }
//         } catch (error) {
//             console.error('Registration error:', error);
//             setError(error.message || "Registration failed. Please try again.");
//         }
//     };

//     return (
//         <section className="min-h-screen bg-gray-50 py-12">
//             <main className="container mx-auto px-4">
//                 <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
//                     <div className="hidden md:block">
//                         <img
//                             src="/api/placeholder/400/320"
//                             alt="Registration"
//                             className="rounded-lg shadow-lg w-full h-auto object-cover"
//                         />
//                     </div>

//                     <div className="bg-white p-8 rounded-lg shadow-md">
//                         <h1 className="text-2xl font-bold text-gray-800 mb-6">Registration Form</h1>
                        
//                         {error && (
//                             <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
//                                 {error}
//                             </div>
//                         )}
                        
//                         {success && (
//                             <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
//                                 {success}
//                             </div>
//                         )}

//                         <form onSubmit={onSubmit} className="space-y-4">
//                             <div>
//                                 <label htmlFor="username" className="block text-sm font-medium text-gray-700">
//                                     Username
//                                 </label>
//                                 <input
//                                     type="text"
//                                     required
//                                     onChange={handleEvent}
//                                     value={user.username}
//                                     name="username"
//                                     id="username"
//                                     autoComplete="off"
//                                     placeholder="Enter your username"
//                                     className="mt-1 block w-full rounded border p-2"
//                                 />
//                             </div>
//                             <div>
//                                 <label htmlFor="age" className="block text-sm font-medium text-gray-700">
//                                     age
//                                 </label>
//                                 <input
//                                     type="text"
//                                     required
//                                     onChange={handleEvent}
//                                     value={user.age}
//                                     name="age"
//                                     id="age"
//                                     autoComplete="off"
//                                     placeholder="Enter your username"
//                                     className="mt-1 block w-full rounded border p-2"
//                                 />
//                             </div>

//                             <div>
//                                 <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                                     Email
//                                 </label>
//                                 <input
//                                     type="email"
//                                     required
//                                     onChange={handleEvent}
//                                     value={user.email}
//                                     name="email"
//                                     id="email"
//                                     autoComplete="off"
//                                     placeholder="Enter your email"
//                                     className="mt-1 block w-full rounded border p-2"
//                                 />
//                             </div>

//                             <div>
//                                 <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
//                                     Phone
//                                 </label>
//                                 <input
//                                     type="tel"
//                                     required
//                                     onChange={handleEvent}
//                                     value={user.phone}
//                                     name="phone"
//                                     id="phone"
//                                     autoComplete="off"
//                                     placeholder="Enter your phone number"
//                                     className="mt-1 block w-full rounded border p-2"
//                                 />
//                             </div>

//                             <div>
//                                 <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                                     Password
//                                 </label>
//                                 <input
//                                     type="password"
//                                     required
//                                     onChange={handleEvent}
//                                     value={user.password}
//                                     name="password"
//                                     id="password"
//                                     autoComplete="new-password"
//                                     placeholder="Enter your password"
//                                     className="mt-1 block w-full rounded border p-2"
//                                 />
//                             </div>

//                             <div className="flex items-center">
//                                 <input
//                                     type="checkbox"
//                                     onChange={handleEvent}
//                                     checked={user.isAdmin}
//                                     name="isAdmin"
//                                     id="isAdmin"
//                                     className="h-4 w-4 rounded border"
//                                 />
//                                 <label htmlFor="isAdmin" className="ml-2 block text-sm text-gray-700">
//                                     Administrator Account
//                                 </label>
//                             </div>

//                             <button
//                                 type="submit"
//                                 className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
//                             >
//                                 Register Now
//                             </button>
//                         </form>
//                     </div>
//                 </div>
//             </main>
//         </section>
//     );
// };

// export default Register;