import React, { useEffect, useRef} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {NavLink} from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger);

export const LandingPage = () => {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);

  useEffect(() => {
    // Hero Section Animation
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    // Features Animation on Scroll
    gsap.fromTo(
      featuresRef.current.children,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <div className="bg-gray-900 text-gray-200 font-sans min-h-screen">
      {/* Hero Section */}
      <section
        className="h-screen flex flex-col justify-center items-center text-center px-4"
        ref={heroRef}
      >
        <h1 className="text-6xl font-bold text-green-400 mb-4">
          Swa<span className="text-blue-400">Moto</span>
        </h1>
        <p className="text-lg max-w-3xl mx-auto">
          Revolutionizing the way you ride with AI-powered, self-driven two-wheelers.
        </p>
        <button className="mt-8 px-6 py-3 bg-green-500 text-gray-900 font-semibold rounded-lg shadow hover:bg-green-600 transition duration-300">
          <NavLink to='/home'>Get Started</NavLink>

         
        </button>
      </section>

      {/* Features Section */}
      <section
        className="py-20 px-4 bg-gray-800"
        ref={featuresRef}
      >
        <h2 className="text-4xl font-bold text-center text-blue-400 mb-10">
          Features of SwaMoto
        </h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-3 text-green-400">
              AI-Powered Navigation
            </h3>
            <p>
              Get smarter, faster, and safer routes with cutting-edge AI navigation.
            </p>
          </div>
          <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-3 text-green-400">
              Predictive Maintenance
            </h3>
            <p>
              Avoid unexpected breakdowns with real-time analytics and maintenance alerts.
            </p>
          </div>
          <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-3 text-green-400">
              Enhanced Safety
            </h3>
            <p>
              AI-assisted safety features ensure a worry-free ride every time.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 py-8 text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} SwaMoto. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;


