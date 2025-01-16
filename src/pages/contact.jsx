import React, {  useState } from 'react';
import axios from 'axios'
import { useAuth } from '../store/auth';
export const Contact = () => {
    const [input, setinput] = useState({
        username: "",
        email: "",
        phone: "",
        message: ""
    
    })


    // const {user} =useAuth();
    // console.log(user)
    // const [userInitialized, setUserInitialized] = useState(false);

    // // Initialize input state with user data
    // useEffect(() => {
    //     if (user && !userInitialized) {
    //         setinput({
    //             username: user.username || "",
    //             email: user.email || "",
    //             phone: user.phone || "",
    //             message: "",
    //         });
    //         setUserInitialized(true);
    //     }
    // }, [user, userInitialized]);
    const handleInput = (e) => {
        console.log(e)
        const { name, value } = e.target;
        setinput((previnput) => ({
            ...previnput,
            [name]: value

        }))
    }


    const { user } = useAuth();

  console.log("frontend user ", user.email);

  const [userData, setUserData] = useState(true);

  if (userData && user) {
    setinput({
      username: user.username,
      email: user.email,
      message: "",
    });
    setUserData(false);
  }





    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const response = await axios.post("http://localhost:5000/api/auth2/contact", input,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            )
            const mssg = "data saved in contact form"
            if (mssg) {
                alert(response.data.toString())
                console.log(mssg, response.data);
            }
            alert(`thanks for your feedback ${input.username}, your issue will be resolved in 24hrs`)

        } catch (error) {
            console.log("error occured in contact", error)
            alert("error occured in contact")
        }
    }

    return (
        <div className=" bg-black h-screen">

            <h1>you are on contact page </h1>,

            <section className='border-sky-800 justify-items-end'>
                <h1 className='text-2xl mx-44 text-cyan-600 decoration-cyan-800'>Contact Us</h1>
                <form onSubmit={handleSubmit} className='m-10 border-2 p-5 rounded'>

                    <div className='my-4'>
                        <label htmlFor="username" className='text-lg px-3  text-sky-300'>User Name:</label>
                        <input type="text" className='border-emerald-900 px-3 rounded text-black '
                            name="username"
                            id="username"
                            required
                            autoComplete='off'
                            value={input.username}
                            onChange={handleInput}
                            placeholder='enter yout Name' />
                    </div>
                    <div className='my-4'>
                        <label htmlFor="email" className='text-lg px-3  text-sky-300'>E-mail</label>
                        <input type="text" className='border-emerald-900 px-3 rounded   text-black'
                            name="email"
                            id="email"
                            required
                            autoComplete='off'
                            value={input.email}
                            onChange={handleInput}
                            placeholder='enter yout email' />
                    </div>
                    <div className='my-4'>
                        <label htmlFor="phone" className='text-lg px-3  text-sky-300'>Phone</label>
                        <input type="text" className='border-emerald-900 px-3 rounded  text-black'
                            name="phone"
                            id="phone"
                            required
                            autoComplete='off'
                            value={input.phone}
                            onChange={handleInput}
                            placeholder='enter yout Number' />
                    </div>
                    <div className='my-4'>
                        {/* <textarea name="" id=""></textarea> */}
                        <label htmlFor="message" className='text-lg px-3  text-sky-300'>Feedback</label>
                        <input type="text" className='border-emerald-900 px-3 rounded  text-black '
                            name="message"
                            id="message"
                            required
                            autoComplete='off'
                            value={input.message}
                            onChange={handleInput}
                            placeholder='write your issue' />
                    </div>
                    <button type='submit' className='mx-28 my-1 py-2 px-10 bg-emerald-800 rounded-md bg-blue-500 text-white p-2 rounded-lg hover:bg-teal-700 hover:scale-110 transform transition duration-300'>Contact</button>
                </form >

            </section>
        </div>
    );
}
