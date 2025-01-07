
import { NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
        <>
            {/* <header>
                <div className=" bg-black w-144rem px-4.2rem py-2.4rem flex justify-between h-14 ">
                
                <div className="text-3xl font-bold">Two-Wheelers AI</div>
                    <nav className="hidden md:flex space-x-6">
                        <ul className="flex gap-x-3">
                            <li  className='text-sky-400 hover:text-sky-300'>

                                <NavLink to='/home'>Home</NavLink>
                            </li>

                            <li className='text-sky-500 hover:text-sky-300'>

                                <NavLink to='/about'>About</NavLink>
                            </li>

                            <li className='text-sky-500 hover:text-sky-300'>

                                <NavLink to='/contact'>Contact</NavLink>
                            </li>

                            <li className='text-sky-500 hover:text-sky-300'>

                                <NavLink to='/service'>Service</NavLink>
                            </li>

                            <li className='text-sky-500 hover:text-sky-300'>

                                <NavLink to='/login'>Login</NavLink>
                            </li>

                            <li className='text-sky-500 hover:text-sky-300'>

                                <NavLink to='/registration'>Register</NavLink>
                            </li>

                        </ul>
                    </nav>
                </div>
            </header>
                    <hr className='gray'/> */}
            {/* Navbar */}
            <header className="bg-slate-950  w-screen  flex justify-between items-center py-4 px-6">
                {/* <div className="text-3xl font-bold">Two-Wheelers AI</div> */}
            
      <h1 className="text-center">
        {/* First Letter */}
        <span
          className="text-emerald-600 font-bold text-6xl animate-bounce"
          style={{ animationDelay: "0.1s" }}
        >
          S
        </span>
        {/* Remaining Letters */}
        <span className="text-blue-400 font-semibold text-4xl animate-fadeIn">
          wa
        </span>
        <span
          className="text-cyan-600 font-bold text-6xl animate-bounce"
          style={{ animationDelay: "0.1s" }}
        >
          M
        </span>
        <span className="text-blue-400 font-semibold text-4xl animate-fadeIn">
          oto
        </span>
      </h1>

                <nav className="hidden md:flex space-x-6">
                    <ul className="flex gap-x-3">
                        <li className='text-sky-400 hover:text-sky-300'>

                            <NavLink to='/home'>Home</NavLink>
                        </li>

                        <li className='text-sky-500 hover:text-sky-300'>

                            <NavLink to='/about'>About</NavLink>
                        </li>

                        <li className='text-sky-500 hover:text-sky-300'>

                            <NavLink to='/contact'>Contact</NavLink>
                        </li>

                        <li className='text-sky-500 hover:text-sky-300'>

                            <NavLink to='/service'>Service</NavLink>
                        </li>

                        {/* <li className='text-sky-500 hover:text-sky-300'>

                                <NavLink to='/login'>Login</NavLink>
                            </li>

                            <li className='text-sky-500 hover:text-sky-300'>

                                <NavLink to='/registration'>Register</NavLink>
                            </li> */}

                    </ul>
                </nav>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-lg mx-20">
                    <NavLink to='/registration'>Get Started</NavLink>

                </button>
            </header>
           


        </>
    );
}