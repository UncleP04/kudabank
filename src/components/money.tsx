import React, {useState, useEffect} from "react";
import Image from "next/image";
import Ellipse from "../../public/Images/Ellipse.png";
import Phone from "../../public/Images/card.png";
import "../styles/menu.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Money: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      easing: 'ease-out-quart', // Easing function
      once: true, // Only animate once
    });
  }, []);
  return (
    <div>
      <section className="p-4 md:p-[4%] grid grid-cols-1 md:grid-cols-2 justify-center items-center md:mt-[40px] relative bg-pinky overflow-x-hidden">
        <div className="md:p-6 relative">
        <Image
              src={Ellipse}
              alt="debit.png"
              width={700}
              height={300}
              className="w-[100%] h-[500px] self-center absolute left-[-200px] opacity-[10px]"
              data-aos="zoom-in"
            />
          <h2 className="text-[3em] lg:text-[4em] text-primary font-bold" data-aos="zoom-in">
            The money app for Africans.
          </h2>
          <p className="text-[20px] lg:w-[450px] py-4 text-primary" data-aos="zoom-in">
            Save, spend, send and invest money across borders.
          </p>
        </div>
        <div className="pt-10 md:pt-0">
          <div className="w-[100%] h-[100%] flex justify-center aligna-middle items-center" data-aos="zoom-in">
            <Image
              src={Phone}
              alt="debit.png"
              width={700}
              height={300}
              className="w-[100%] h-[100%] self-center"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Money;
