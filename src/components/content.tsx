import React, {useState, useEffect} from "react";
import Image from "next/image";
import Phone from "../../public/Images/phone.png";
import "../styles/menu.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Content: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      easing: 'ease-out-quart', // Easing function
      once: true, // Only animate once
    });
  }, []);
  return (
    <div className="md:p-[3%]">
      <div className="pt-10 grid grid-cols-1 md:grid-cols-2 gap-x-5 justify-between items-end rounded-md courve shadow-lg">
        <div className="p-4 h-auto">
          <div className="mb-4" data-aos="zoom-in">
            <h2 className="text-[3em] text-primary font-bold uppercase">Content.</h2>
            <p className="text-primary md:w-[400px] font-semibold">
              With Kuda Bank you can enjoy a streamlined digital and mobile
              banking experience with ease.
            </p>
          </div>
          <div className="girdcard" data-aos="zoom-in">
            <div className="py-4 px-3 bg-pinky rounded-md shadow-lg text-primary h-[100px] flex justify-center align-middle items-center text-[30px] font-bold">Save</div>
            <div className="py-4 px-3 bg-pinky rounded-md shadow-lg text-primary h-[100px] flex justify-center align-middle items-center text-[30px] font-bold">Send</div>
            <div className="py-4 px-3 bg-pinky rounded-md shadow-lg text-primary h-[100px] flex justify-center align-middle items-center text-[30px] font-bold">Invest</div>
            <div className="py-4 px-3 bg-pinky rounded-md shadow-lg text-primary h-[100px] flex justify-center align-middle items-center text-[30px] font-bold">Spend</div>
            <div className="py-4 px-3 bg-pinky rounded-md shadow-lg text-primary h-[100px] flex justify-center align-middle items-center text-[30px] font-bold">Contact</div>
          </div>
        </div>
        <div className="md:w-[100%] flex justify-center align-middle mt-10 md:mt-0" data-aos="zoom-in">
          <Image
            src={Phone}
            alt="phone.png"
            width={700}
            height={300}
            className="md:w-[60%] md:h-[350px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Content;
