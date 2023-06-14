import { FaBeer, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="h-40 bg-slate-400">
      <footer className="p-5 footer text-black-content">
        <div>
          <img src="" alt="" />
          <p>
            <span className="font-bold"> ART INNOVATORS ACADEMY</span>
            <br />
            Providing Service since 2023
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <div className="grid grid-flow-col gap-4">
            <Link>
            About Us
            </Link>
            <Link to='/'>
            Home
            </Link>
            <Link>
             Contact Us
            </Link>
          </div>
        </div>
        <div>
          <span className="footer-title">Social</span>
          <div className="grid grid-flow-col gap-4">
            <Link>
              <FaTwitter className="text-4xl" />
            </Link>
            <Link>
              <FaLinkedin className="text-4xl" />
            </Link>
            <Link>
              <FaFacebook className="text-4xl" />
            </Link>
          </div>
        </div>
      </footer>
      <div className="p-2 footer-center text-base-content">
        <p className="font-medium">
          Copyright © 2023 - All right reserved by ART INNOVATORS ACADEMY
        </p>
      </div>
    </div>
  );
};

export default Footer;
