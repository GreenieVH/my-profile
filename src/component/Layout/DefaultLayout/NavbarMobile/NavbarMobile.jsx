import { Link } from "react-router-dom";
import images from "~/assets/images/Image";
import './NavbarMobile.scss'

function NavbarMobile({isOpen,toggleMenu}) {
  return (
    <>
      <div
        className={`mobile-menu w-screen h-screen ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container p-8 flex flex-col justify-start items-start gap-8">
          <img src={images.logo} alt="" className="logo" />
          <ul className="flex flex-col justify-start items-start gap-8 pl-8">
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
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavbarMobile;
