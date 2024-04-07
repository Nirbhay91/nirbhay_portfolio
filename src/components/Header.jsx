import { useState } from "react";
import resume from "../assets/Nirbhay_Resume.pdf";

const Header = () => {
  const [brandName, setBrandName] = useState("Nirbhay Kaushik");
  const [menuLinks, setMenuLinks] = useState([
    {
      title: "Home",
      link: "/home",
      id: 1,
    },
    {
      title: "About",
      link: "/About",
      id: 2,
    },
    {
      title: "Skills",
      link: "/skills",
      id: 3,
    },
    {
      title: "Portfolio",
      link: "/portfolio",
      id: 4,
    },
    {
      title: "Contact",
      link: "/Contact",
      id: 5,
    },
    {
      title: "Project",
      link: "/Project",
      id: 6,
    },
  ]);

  const [actionButton, setActionButton] = useState({
    title: "Download CV",
    link: "/hire-me",
  });

  return (
    <>
      <div className="h-20 border main flex justify-between items-center px-16 bg-gray-100">
        <div>
          {/* brand logo */}
          <h1 className="text-2xl font-bold">{brandName}</h1>
        </div>

        <div className="space-x-6">
          {/* menu links */}

          {menuLinks.map((link) => (
            <a key={link.id} href={link.link} className="hover:text-orange-600">
              {link.title}
            </a>
          ))}
        </div>

        <div>
          {/* buttons */}
          <a
            // href={actionButton.link}
            href={resume}
            className="px-4 py-2 bg-orange-500 shadow  rounded-full text-1xl "
          >
            {actionButton.title}
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;