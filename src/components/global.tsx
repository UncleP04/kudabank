import React, {useState, useEffect} from "react";
import Image from "next/image";
import Plane from "../../public/Images/Polygon.png";
import "../styles/menu.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Global: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      easing: 'ease-out-quart', // Easing function
      once: true, // Only animate once
    });
  }, []);
  return (
    <div>
      <section className="p-4 md:p-[4%] grid grid-cols-1 md:grid-cols-2 justify-center items-center md:mt-[40px] relative">
        <div className="pt-10 md:pt-0">
          <div className="w-[100%] h-[100%] flex justify-center aligna-middle items-center" data-aos="zoom-in">
            <Image
              src={Plane}
              alt="debit.png"
              width={700}
              height={300}
              className="w-[80%] h-[100%] self-center"
            />
          </div>
        </div>
        <div className="md:p-6">
          <h2 className="text-[3em] lg:text-[4em] text-primary font-bold" data-aos="zoom-in">
            Send
          </h2>
          <p className="text-[20px] lg:w-[450px] py-4" data-aos="zoom-in">
            With Kuda, sending money is easy and hassle-free. From local
            transfers to international payments, we've got you covered.
          </p>
          <p className="text-[20px] lg:w-[450px] py-4" data-aos="zoom-in">
            Connect with friends, send unlimited instant transfers for free, and
            fulfill promises to family across borders with ease.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Global;
