import "./Footer.scss";
import { LuCopyright } from "react-icons/lu";

function Footer() {
  return (
    <>
      <div className=" flex justify-center items-center gap-2"> 
        <LuCopyright /> 
        <p className="">2024, tranhoangth1979@gmail.com</p>
      </div>
    </>
  );
}

export default Footer;
