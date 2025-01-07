// import React from 'react';
// export const Home = ()=>{
    
//     return(
//         <h1>you are on HOME page</h1>
//     );
// }



// import React from "react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// export const Home = () => {
//   return (
//     <div className="min-h-screen bg-gray-900 text-gray-200">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-gray-800 to-gray-700 text-center py-20">
//         <h1 className="text-4xl font-bold">Welcome to Two-Wheelers Digitalisation</h1>
//         <p className="mt-4 text-lg">
//           Leveraging AI for smarter and safer rides.
//         </p>
//         <button className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition duration-300">
//           Learn More
//         </button>
//       </section>

//       {/* Carousel Section */}
//       <section className="my-12 mx-auto max-w-5xl">
//         <Carousel autoPlay infiniteLoop showThumbs={false}>
//           <div>
//             <img
//               src="./Image02.png"
//               alt="AI in Navigation"
//               className="rounded-lg"
//             />
//             <p className="legend bg-gray-700 text-white p-2">AI for Navigation</p>
//           </div>
//           <div>
//             <img
//               src="https://via.placeholder.com/800x400"
//               alt="Predictive Maintenance"
//               className="rounded-lg"
//             />
//             <p className="legend bg-gray-700 text-white p-2">Predictive Maintenance</p>
//           </div>
//           <div>
//             <img
//               src="https://via.placeholder.com/800x400"
//               alt="Enhanced Safety"
//               className="rounded-lg"
//             />
//             <p className="legend bg-gray-700 text-white p-2">Enhanced Safety with AI</p>
//           </div>
//         </Carousel>
//       </section>

//       {/* Cards Section */}
//       <section className="py-12 bg-gray-800">
//         <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
//           <div className="p-6 bg-gray-700 rounded-lg shadow hover:shadow-lg transition duration-300">
//             <h2 className="text-xl font-bold mb-3 text-white">Project Goals</h2>
//             <p>
//               Revolutionizing two-wheeler experiences with AI-powered solutions.
//             </p>
//           </div>
//           <div className="p-6 bg-gray-700 rounded-lg shadow hover:shadow-lg transition duration-300">
//             <h2 className="text-xl font-bold mb-3 text-white">AI Integration</h2>
//             <p>
//               Using AI for navigation, safety enhancements, and predictive
//               maintenance.
//             </p>
//           </div>
//           <div className="p-6 bg-gray-700 rounded-lg shadow hover:shadow-lg transition duration-300">
//             <h2 className="text-xl font-bold mb-3 text-white">Future Scope</h2>
//             <p>
//               Expanding to autonomous two-wheelers and advanced telematics.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-gray-400 py-6">
//         <div className="container mx-auto text-center">
//           <p>© 2025 Two-Wheelers Digitalisation. All rights reserved.</p>
//           <div className="flex justify-center space-x-4 mt-4">
//             <a
//               href="#"
//               className="hover:underline hover:text-blue-400 transition duration-300"
//             >
//               Facebook
//             </a>
//             <a
//               href="#"
//               className="hover:underline hover:text-blue-400 transition duration-300"
//             >
//               Twitter
//             </a>
//             <a
//               href="#"
//               className="hover:underline hover:text-blue-400 transition duration-300"
//             >
//               LinkedIn
//             </a>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// import React from "react";

// export const Home = () => {
//   return (
//     <div className="bg-gray-900 text-white font-sans">
//       {/* Navbar
//       <header className="container mx-auto flex justify-between items-center py-4 px-6">
//         <div className="text-3xl font-bold">CB</div>
//         <nav className="hidden md:flex space-x-6">
//           <a href="#home" className="hover:text-blue-500">
//             Home
//           </a>
//           <a href="#about" className="hover:text-blue-500">
//             About
//           </a>
//           <a href="#pricing" className="hover:text-blue-500">
//             Pricing
//           </a>
//         </nav>
//         <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-lg">
//           Buy Now
//         </button>
//       </header> */}

//       {/* Hero Section */}
//       <section className="relative container mx-auto flex flex-col-reverse lg:flex-row items-center py-12 px-6">
//         {/* Text Content */}
//         <div className="lg:w-1/2 text-center lg:text-left">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">
//             Specially For <span className="text-blue-500">Crazy Bikers</span>
//           </h1>
//           <p className="text-lg mb-6">Price: <span className="font-semibold">$750</span> | Colors: <span className="font-semibold">3</span></p>
//           <div className="flex justify-center lg:justify-start space-x-4">
//             <button className="bg-blue-500 text-white px-6 py-3 rounded-md shadow-md">
//               Buy Now
//             </button>
//             <button className="bg-gray-700 px-6 py-3 rounded-md">
//               Watch Video
//             </button>
//           </div>
//         </div>
//         {/* Bike Image */}
//         <div className="lg:w-1/2 text-center mb-8 lg:mb-0">
//           <img
//             src="https://via.placeholder.com/600x400"
//             alt="Bike"
//             className="mx-auto"
//           />
//         </div>
//       </section>

//       {/* Popular Collections */}
//       <section className="bg-gray-800 py-12">
//         <div className="container mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-8">Our Most Popular Collections</h2>
//           <div className="flex justify-center space-x-6">
//             <img
//               src="https://via.placeholder.com/100"
//               alt="Bike 1"
//               className="hover:scale-105 transition-transform"
//             />
//             <img
//               src="https://via.placeholder.com/100"
//               alt="Bike 2"
//               className="hover:scale-105 transition-transform"
//             />
//             <img
//               src="https://via.placeholder.com/100"
//               alt="Bike 3"
//               className="hover:scale-105 transition-transform"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="container mx-auto py-16 px-6">
//         <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {/* Feature 1 */}
//           <div className="bg-gray-800 p-6 rounded-md shadow-md text-center">
//             <h3 className="text-xl font-semibold mb-2">GPS Tracking</h3>
//             <p className="text-gray-400">
//               Always stay on track with our advanced GPS systems.
//             </p>
//           </div>
//           {/* Feature 2 */}
//           <div className="bg-gray-800 p-6 rounded-md shadow-md text-center">
//             <h3 className="text-xl font-semibold mb-2">Supercharging Battery</h3>
//             <p className="text-gray-400">
//               Extended battery life for long rides without interruptions.
//             </p>
//           </div>
//           {/* Feature 3 */}
//           <div className="bg-gray-800 p-6 rounded-md shadow-md text-center">
//             <h3 className="text-xl font-semibold mb-2">Pure Ride Conditions</h3>
//             <p className="text-gray-400">
//               Enhanced performance in all weather conditions.
//             </p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// // export default HomePage;


import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-sans">
      

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-700 text-center py-20">
        <h1 className="text-5xl font-bold mb-4">
          Welcome to <span className="text-blue-500">Two-Wheelers Digitalisation</span>
        </h1>
        <p className="text-lg mt-4">
          Leveraging AI for smarter and safer rides.
        </p>
        <div className="flex justify-center mt-6 space-x-4">
          <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition duration-300">
            Learn More
          </button>
          <button className="px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg shadow hover:bg-gray-600 transition duration-300">
            Watch Video
          </button>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="my-12 mx-auto max-w-5xl">
        <Carousel autoPlay infiniteLoop showThumbs={false}>
          <div>
            <img
              src="./Image02.png"
              alt="AI in Navigation"
              className="rounded-lg"
            />
            <p className="legend bg-gray-700 text-white p-2">AI for Navigation</p>
          </div>
          <div>
            <img
              src="https://via.placeholder.com/800x400"
              alt="Predictive Maintenance"
              className="rounded-lg"
            />
            <p className="legend bg-gray-700 text-white p-2">Predictive Maintenance</p>
          </div>
          <div>
            <img
              src="https://via.placeholder.com/800x400"
              alt="Enhanced Safety"
              className="rounded-lg"
            />
            <p className="legend bg-gray-700 text-white p-2">Enhanced Safety with AI</p>
          </div>
        </Carousel>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">
                AI Navigation
              </h3>
              <p className="text-gray-400">
                Always stay on track with advanced AI-based navigation systems.
              </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">
                Predictive Maintenance
              </h3>
              <p className="text-gray-400">
                Use AI to predict and prevent potential issues in advance.
              </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">
                Enhanced Safety
              </h3>
              <p className="text-gray-400">
                Improve safety with intelligent monitoring and alerts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-6">
        <div className="container mx-auto text-center">
          <p>© 2025 Two-Wheelers Digitalisation. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="#"
              className="hover:underline hover:text-blue-400 transition duration-300"
            >
              Facebook
            </a>
            <a
              href="#"
              className="hover:underline hover:text-blue-400 transition duration-300"
            >
              Twitter
            </a>
            <a
              href="#"
              className="hover:underline hover:text-blue-400 transition duration-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
