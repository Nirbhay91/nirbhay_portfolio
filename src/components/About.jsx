import { useState } from "react";
import bannerImage from "../assets/bi2.png";
const About = () => {
  const [data, setData] = useState({
    image: bannerImage,
    title: "Front-End & Back-End Developer",
    desc1: `I am offering over 2.8years of experience in Full Stack Development, exhibiting expertise in both front-end and back-end technologies across various industries.
    Currently employed as an Associate Software Engineer at MPhasis Pvt. Ltd. in Bangalore.`,
    desc2: `Specializing in full-stack development and contributing to the company's growth.
    Proficient in coding and software development, with a strong understanding of requirement gathering, project execution, and the skills to identify and resolve software defects, performance issues, and technical problems through debugging & testing
    Successfully implemented defect fixes at SoftStack Technology Pvt. Ltd., resulting in a 10% increase in application efficiency.
    Skilled in a wide range of programming languages, frameworks, and tools, including Java, SQL, CSS, JavaScript, Express JS, React, NodeJS, Bootstrap, MySql, Mongo DB, J2EE, and AngularJS, enabling the delivery of versatile and efficient software solutions.
`,
    actionButton: {
      title: "Read More..",
      link: "/readmore",
    },
  });
  return (
    <>
      <div className="main-container bg-gray-100 border py-16">
        <h1 className="text-center pb-16  text-5xl underline font-bold">
          About Me
        </h1>

        <div className="flex items-center">
          {/* image container */}
          <div className="w-full flex justify-center">
            <img
              className="w-fit"
              src={data.image}
              alt="durgesh kumar tiwari"
            />
          </div>

          {/* text container  */}
          <div className="w-full  flex justify-center">
            <div className="space-y-5   w-2/3">
              <h1 className="text-5xl  font-semibold ">{data.title}</h1>
              <p>{data.desc1}</p>
              <p>{data.desc2}</p>
              <button className="bg-orange-500 px-3 py-2 text-2xl rounded-full shadow-lg">
                {data.actionButton.title}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;