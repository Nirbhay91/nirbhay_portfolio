import { useState } from "react";

const Services = () => {
    useState([
        {
            id: "",
            title: "",
            description: "",
            actionButton: {
                title: "",
                link: "",
            },
        },
    ]);
    return (
        <>
            <div className="main-container py-14">
                <h1 className="text-5xl font-bold text-center underline">
                    My Services
                </h1>
                <div className="services-container space-x-5 px-10 flex mt-12">
                    <div className=" cursor-pointer hover:bg-gray-100 bg-slate-100 p-5 text-center shadow-lg rounded-xl   service1 space-y-4">
                        <i class=" text-5xl fa-brands fa-aws"></i>
                        <h1 className="text-4xl">Web Development</h1>
                        <p>
                        Experienced in full-stack web development, proficient in HTML, CSS, JavaScript, 
                        and various frameworks such as React and Java,Spring boot. Demonstrated ability to 
                        create responsive and visually appealing websites while ensuring cross-browser compatibility and accessibility. 
                        Strong understanding of web development principles, including MVC architecture, RESTful APIs, and database management.
                        </p>
                        <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">
                            Check
                        </button>
                    </div>
                    <div className=" cursor-pointer hover:bg-gray-100 space-y-3  bg-slate-100 p-5 text-center shadow-lg rounded-xl">
                        <i class=" text-5xl fa-solid fa-mobile"></i>
                        <h1 className="text-4xl">Front-End Development</h1>
                        <p>
                        Proficient in front-end development using HTML5, CSS3, and JavaScript. 
                        Experienced in building responsive,user-friendly web interfaces with modern 
                        frameworks/libraries such as React.js and Vue.js. Passionate about creating visually 
                        appealing and accessible web experiences that enhance user engagement and satisfaction.
                        </p>
                        <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">
                            Check
                        </button>
                    </div>
                    <div className=" cursor-pointer hover:bg-gray-100 space-y-3 bg-slate-100 p-5 text-center shadow-lg rounded-xl">
                        <i class=" text-5xl fa-solid fa-server"></i>
                        <h1 className="text-4xl">Backend Development</h1>
                        <p>
                        Skilled in backend development utilizing languages such as Node.js and Python, 
                        along with frameworks like Express.js and Django. Experienced in building scalable
                         and efficient server-side applications, handling databases, and implementing RESTful APIs. 
                         Dedicated to creating robust and secure backend systems that drive seamless interactions and enhance 
                         overall application performance.
                        </p>
                        <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">
                            Check
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;