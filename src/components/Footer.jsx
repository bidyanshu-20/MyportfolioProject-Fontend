import React from "react";
import { FaFacebook } from "react-icons/fa"; // <FaFacebook />
import { FaTwitter } from "react-icons/fa"; // <FaTwitter />
import { FaInstagram } from "react-icons/fa"; // <FaInstagram />
import { CiLinkedin } from "react-icons/ci"; // <CiLinkedin />

const Footer = () => {
 

  return (
    <div>
      <footer>
        <div className="max-w-screen-2xl  bg-gray-100 dark:bg-gray-900 text-black dark:text-white container mx-auto px-4 md:px-20">
          <div className="flex flex-col justify-center items-center">
            {/* <div className='flex space-x-2 cursor-pointer'>
                    <FaFacebook size={25} />
                    <FaTwitter size={25}/>
                    <FaInstagram size={25}/>
                    <CiLinkedin size={25}/>
                </div> */}
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center ">
              <p className="text-sm">
                &copy; 2025 Your company; All Right Preserved
              </p>
              <p className="text-sm">
                Developers:{" "}
                <span className="font-bold">@Balajeeworkshop ❤️</span>{" "}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
