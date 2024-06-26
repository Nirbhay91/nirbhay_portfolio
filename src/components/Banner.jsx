import { useEffect, useRef } from "react";
import bannerBackground from "../assets/banner_wallpaper.svg";
import bannerImage from "../assets/bi1.png";
import Typed from "typed.js";
const Banner = () => {
    const el = useRef(null);
    useEffect(() => {
        const typed = new Typed(el.current, {
          strings: ["Full Stack Java + React Developer"], // Strings to display
          // Speed settings, try diffrent values untill you get good results
          startDelay: 100,
          typeSpeed: 50,
          backSpeed: 10,
          backDelay: 100,
          loop: true,
        });
    
        // Destropying
        return () => {
          typed.destroy();
        };
      }, []);
    return (
        <div

            style={{
                backgroundImage: `url(${bannerBackground})`,
                backgroundSize: "cover",
            }}
            className="main-container flex items-center"

        >
            <div className="w-full flex items-center justify-center text-white ">
                <div className="w-2/3 space-y-2  ms-10">
                    <h3 className="text-3xl font-semibold">Hi, I am</h3>
                    <h1 className="text-5xl font-bold">Nirbhay Kaushik</h1>
                    <h2 className="text-3xl ">
                        I am <span className="font-bold underline" ref={el}></span>
                    </h2>
                    <p className="">
                    Java, React.js, HTML5, CSS3, JavaScript, Spring boot, Mysql Jenkins, Microservice
                    </p>
                    <div className="icons-container flex space-x-5">
                        <a className=" hover:bg-orange-600 border cursor-pointer  px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800">
                            <i className="fa-brands text-4xl  fa-facebook"></i>
                        </a>
                        <a className=" hover:bg-orange-600   border cursor-pointer  px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800">
                            <i className="fa-brands text-4xl  fa-instagram"></i>
                        </a>

                        <a className="  hover:bg-orange-600 border  cursor-pointer  px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800" href="https://www.youtube.com/channel/UC8yz4-Iiz9bAyCZvxPw9Xsg">
                            <i className="fa-brands text-4xl  fa-youtube"></i>
                        </a>

                        <a className=" hover:bg-orange-600  border  cursor-pointer px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800"href="https://www.linkedin.com/in/nirbhay-kaushik/" >
                            <i className="fa-brands text-4xl  fa-linkedin-in"></i>
                        </a>
                    </div>
                    <br />
                    <a
                        className=" text-2xl     px-3  py-2 bg-orange-500  rounded-full shadow-lg"
                        href="/contact"
                    >
                        Contact Me
                    </a>
                </div>
            </div>
            {/* second  dabba */}

            <div className=" w-full flex justify-center">
                {/* image */}
                <img className="rounded-full my-2 shadow-lg w-fit" src={bannerImage} />
            </div>
        </div>
    )
}

export default Banner