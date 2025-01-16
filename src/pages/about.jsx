// import React from 'react';


// export const  About=()=>{
//     return(
//         <div className=" bg-black ">
            
//         <h1>youa are on about us page </h1>
//         </div>
//     );
// }

import React,{useState,useEffect} from "react";
import { useAuth } from "../store/auth";
import {Link} from 'react-router-dom'


const Typewriter = () => {
    const {user} =useAuth();
    // console.log(user.username)
    const words = [`Hello, ${user.username}!`];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const handleTyping = () => {
            const currentWord = words[currentWordIndex];
            if (isDeleting) {
                setCurrentText((prev) => prev.substring(0, prev.length - 1));
                if (currentText.length === 0) {
                    setIsDeleting(false);
                    setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
                }
            } else {
                setCurrentText((prev) => currentWord.substring(0, prev.length + 1));
                if (currentText.length === currentWord.length) {
                    setIsDeleting(true);
                }
            }
        };

        const timer = setTimeout(handleTyping, 100);
        return () => clearTimeout(timer);
    }, [currentText, isDeleting, words, currentWordIndex]);


    return (
        <div className="text-center py-10">
            <h1 className="text-4xl font-bold text-gray-800">
                <span id="typewriter" className="border-r-2 border-gray-800 pr-2">
                    {currentText}
                </span>
            </h1>
        </div>
    );
};

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-700 py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold inline- text-blue-500 mb-6 animate-fade-in">
            <Typewriter/> About Us
          </h1>
          <p className="text-lg text-gray-300 animate-slide-up">
            Empowering two-wheeler riders with cutting-edge AI solutions for a smarter, safer, and more connected future.
          </p>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="hover:scale-105 transition-transform duration-300">
              <h2 className="text-3xl font-bold text-blue-400 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-300 leading-relaxed">
                At Two-Wheelers Digitalisation, our mission is to revolutionize the two-wheeler riding experience. We aim to integrate advanced AI-driven solutions to make rides smarter, safer, and more enjoyable for every rider on the road.
              </p>
            </div>
            {/* Vision */}
            <div className="hover:scale-105 transition-transform duration-300">
              <h2 className="text-3xl font-bold text-blue-400 mb-4">
                Our Vision
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We envision a world where every two-wheeler is equipped with intelligent systems that enhance navigation, safety, and overall performance. Our goal is to lead the transformation of two-wheelers into connected, autonomous vehicles of the future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-100 mb-8 animate-fade-in">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Innovation", "Safety", "Sustainability"].map((value, index) => (
              <div
                key={index}
                className="p-6 bg-gray-800 rounded-lg shadow-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-3">{value}</h3>
                <p className="text-gray-300">
                  {value === "Innovation"
                    ? "We push the boundaries of technology to create cutting-edge solutions."
                    : value === "Safety"
                    ? "Rider safety is at the heart of everything we do."
                    : "Committed to eco-friendly solutions for a greener tomorrow."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-100 mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: "John Doe", role: "Founder & CEO" },
              { name: "Jane Smith", role: "CTO" },
              { name: "Mike Johnson", role: "Lead Engineer" },
            ].map((member, index) => (
              <div
                key={index}
                className="p-6 bg-gray-700 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={`https://via.placeholder.com/150`}
                  alt="Team Member"
                  className="w-24 h-24 rounded-full mx-auto mb-4 hover:animate-spin-slow"
                />
                <h3 className="text-xl font-semibold text-blue-400">
                  {member.name}
                </h3>
                <p className="text-gray-300">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-gray-800 to-gray-700 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Transform Your Ride?
        </h2>
        <p className="text-lg text-gray-300 mb-6">
          Join us in shaping the future of two-wheelers with advanced AI and digital solutions.
        </p>
        <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transform hover:scale-110 transition-all duration-300">
          <Link to={'/contact'}>Contact Us</Link>
        </button>
      </section>
    </div>
  );
};

export { About};

