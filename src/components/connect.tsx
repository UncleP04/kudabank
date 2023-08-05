import React, {useState, useEffect} from "react";
import Image from "next/image";
import Play from "../../public/Images/playstore.png";
import Store from "../../public/Images/store.png";
import Sign from "../../public/Images/sign.png";
import "../styles/menu.css";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Connect: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      easing: 'ease-out-quart', // Easing function
      once: true, // Only animate once
    });
  }, []);
  return (
    <div>
      <section className="grid grid-cols-1 justify-start items-center md:mt-[40px] relative overflow-x-hidden">
        <div className="relative py-4 backdrop p-4 md:p-[4%]" data-aos="zoom-in">
          <h3 className="text-[30px] text-white font-bold" data-aos="zoom-in">
            Connect with us on social media
          </h3>
          <div className="flex justify-start items-center gap-[20px] py-4" data-aos="zoom-in">
            <TwitterIcon className="w-[25px] text-white" />
            <InstagramIcon className="w-[25px] text-white" />
            <FacebookIcon className="w-[25px] text-white" />
            <WhatsAppIcon className="w-[25px] text-white" />
          </div>
          <p className="text-[15px] py-4 text-white" data-aos="zoom-in">
            Subscribe for our newsletter, and get updates on what happens behind
            the scenes at Kuda
          </p>
          <div className="md:w-[500px] w-[100%] bg-white flex border-2 border-primary">
            <input type="mail" name="search" id="" placeholder="Enter Mail" className="p-2 w-[70%] focus:outline-none" />
            <button className={` text-white text-[15px] md:text-[20px] py-2 px-4 bg-primary font-semibold w-[30%] shadow-lg hover:text-pinky`}>Join Kuda</button>
          </div>
        </div>
        <div className="pt-10 md:pt-0">
          <div className="w-[100%] md:w-[500px] grid grid-cols-2 md:grid-cols-3 justify-start aligna-middle items-center gap-3 md:gap-10 md:px-[4%] p-4">
            <Image
              src={Play}
              alt="debit.png"
              width={700}
              height={300}
              className="w-[100px] h-[100%] self-center"
              data-aos="zoom-in"
            />
            <Image
              src={Store}
              alt="debit.png"
              width={700}
              height={300}
              className="w-[100px] h-[100%] self-center"
              data-aos="zoom-in"
            />
            <Image
              src={Sign}
              alt="debit.png"
              width={700}
              height={300}
              className="w-[100px] h-[100%] self-center"
              data-aos="zoom-in"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Connect;
