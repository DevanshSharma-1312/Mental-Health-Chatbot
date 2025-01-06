// import React from 'react';
// export const Home = ()=>{
    
//     return(
//         <h1>you are on HOME page</h1>
//     );
// }



import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-700 text-center py-20">
        <h1 className="text-4xl font-bold">Welcome to Two-Wheelers Digitalisation</h1>
        <p className="mt-4 text-lg">
          Leveraging AI for smarter and safer rides.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition duration-300">
          Learn More
        </button>
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

      {/* Cards Section */}
      <section className="py-12 bg-gray-800">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          <div className="p-6 bg-gray-700 rounded-lg shadow hover:shadow-lg transition duration-300">
            <h2 className="text-xl font-bold mb-3 text-white">Project Goals</h2>
            <p>
              Revolutionizing two-wheeler experiences with AI-powered solutions.
            </p>
          </div>
          <div className="p-6 bg-gray-700 rounded-lg shadow hover:shadow-lg transition duration-300">
            <h2 className="text-xl font-bold mb-3 text-white">AI Integration</h2>
            <p>
              Using AI for navigation, safety enhancements, and predictive
              maintenance.
            </p>
          </div>
          <div className="p-6 bg-gray-700 rounded-lg shadow hover:shadow-lg transition duration-300">
            <h2 className="text-xl font-bold mb-3 text-white">Future Scope</h2>
            <p>
              Expanding to autonomous two-wheelers and advanced telematics.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-6">
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
