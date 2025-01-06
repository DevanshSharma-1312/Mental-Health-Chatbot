
import { NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
        <>
            <header>
                <div className="w-144rem px-4.2rem py-2.4rem flex justify-between h-10 ">
                
                    <div>devansh</div>
                    <nav>
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
                    <hr className='gray'/>
           { /* <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="./philippe-oursel-7wCEHSkMSdw-unsplash.jpg" alt="" width="384" height="512"/> 
                    <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                        <blockquote>
                            <p class="text-lg font-medium">
                                “Tailwind CSS is the only framework that I've seen scale
                                on large teams. It's easy to customize, adapts to any design,
                                and the build size is tiny.”
                            </p>
                        </blockquote>
                        <figcaption class="font-medium">
                            <div class="text-sky-500 dark:text-sky-400">
                                Sarah Dayan
                            </div>
                            <div class="text-slate-700 dark:text-slate-500">
                                Staff Engineer, Algolia
                            </div>
                        </figcaption>
                    </div>
            </figure> */} 


        </>
    );
}