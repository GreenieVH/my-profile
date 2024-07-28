import images from "~/assets/images/Image";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { TfiMenu } from "react-icons/tfi";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import NavbarMobile from "../NavbarMobile/NavbarMobile";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    <NavbarMobile isOpen={isOpen} toggleMenu={toggleMenu}/>
      <nav className="nav-wrapper sticky top-0 z-30 backdrop-blur-2xl px-2">
        <div className="nav-content flex justify-between items-center max-w-screen-xl px-4 my-0 mx-auto">
          <img className="logo w-20 h-20" src={images.logo} alt="" />
          <ul className="list-menu-item flex justify-around items-center gap-8">
            <li>
              <Link className="menu-item ">Home</Link>
            </li>
            <li>
              <Link className="menu-item">Skill</Link>
            </li>
            <li>
              <Link className="menu-item">Work Experience</Link>
            </li>
            <li>
              <Link className="menu-item">Contact Me</Link>
            </li>
            <button className="py-2 px-6 rounded cursor-pointer">
              Hire me
            </button>
          </ul>
          <button
            className="menu-btn py-1 px-3 rounded cursor-pointer"
            onClick={toggleMenu}
          >
            {isOpen ? <IoClose size={30}/> : <TfiMenu size={30} />}
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
