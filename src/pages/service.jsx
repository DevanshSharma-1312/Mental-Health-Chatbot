// import React from 'react';


//  export const Service =()=>{

// return(

//     <div className=" bg-black h-screen">

//     <h1>you are on a page, tells about the services we provide  </h1>
//     </div>
// );
// }
import React,{useEffect,useState} from 'react';
import { useAuth } from '../store/auth';

const services = [
    {
        title: 'Web Development',
        description: 'Build responsive and dynamic websites tailored to your needs.',
        icon: '🌐',
    },
    {
        title: 'Mobile Development',
        description: 'Create stunning mobile applications for iOS and Android.',
        icon: '📱',
    },
    {
        title: 'UI/UX Design',
        description: 'Design user-friendly interfaces that provide great user experiences.',
        icon: '🎨',
    },
    {
        title: 'SEO Optimization',
        description: 'Improve your website ranking and increase organic traffic.',
        icon: '🚀',
    },
];

const ServiceCard = ({ icon, title, description }) => {
    return (
        <div
            className="bg-gray-800 text-gray-200 shadow-lg p-6 rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
        >
            <div className="text-4xl mb-4 text-blue-400">{icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
            <p className="text-gray-400">{description}</p>
        </div>
    );
};

const FeatureCard = ({title,description , })=>{
    return(
        <>
        <div>
            <div>

            </div>
            <h3>

            </h3>
            <p>

            </p>
        </div>
        
        </>
    )
}

const Typewriter = () => {
    const {user} =useAuth();
    // console.log(user.username)
    const words = [`Hello, ${user.username}!`, "Welcome to my website!", `Our Services `];
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


const Service = () => {
    return (
        
        <section className="bg-gray-900 py-16">
            <div className=''>
                <Typewriter />
            </div>
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    {/* <h2 className="text-4xl font-bold text-white mb-4">
                        Our Services
                    </h2> */}
                    <p className="text-gray-400 text-lg">
                        We offer a wide range of services to meet your <strong> business</strong> needs and provide <strong>Innovative </strong> solutions to the user .
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Service;
