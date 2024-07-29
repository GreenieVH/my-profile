import images from "~/assets/images/Image";
import "./Hero.scss";
import { FaReact } from "react-icons/fa";
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io5";
import { SiJavascript } from "react-icons/si";

function Hero() {
  return (
    <>
      <section className="hero-container flex items-center relative" id="home">
        <div className="hero-content flex-1">
          <h2 className="text-6xl font-semibold mb-8">Building Digital Experiences</h2>
          <p className="w-4/5 text-base">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.sitdas amet
            consectetur, adipisicing elit.
          </p>
        </div>
        <div className="hero-image flex-1 flex flex-col items-center gap-8 mt-20">
          <div className="flex items-end gap-8">
            <div className="tech-icon text-blue-500 cursor-pointer">
              <FaReact className="size-icon"/>
            </div>
            <img src={images.hero} alt="" className="object-cover" />
          </div>
          <div className="flex gap-8 items-end justify-end">
            <div className="tech-icon text-orange-500 bg-white">
              <IoLogoHtml5 className="size-icon"/>
            </div>
            <div className="tech-icon text-blue-500 bg-white  ">
              <IoLogoCss3 className="size-icon"/>
            </div>
            <div className="tech-icon text-yellow-400 bg-black ">
              <SiJavascript className="size-icon"/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
