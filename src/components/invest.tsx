import React from "react";
import Image from "next/image";
import Invests from "../../public/Images/Invest.png";
import InvestsTwo from "../../public/Images/spend.png";
import "../styles/menu.css";

const Invest: React.FC = () => {
  return (
    <div>
      <section className="p-4 md:px-[4%] grid grid-cols-1 md:grid-cols-2 justify-center items-center md:mt-[40px] w-[100%] md:h-[100vh] relative">
        <div className="md:p-6">
          <h2 className="text-[3em] lg:text-[4em] text-primary font-bold">
            Invest
          </h2>
          <p className="text-[20px] lg:w-[450px] py-4">
            We’re bringing verified global investment options closer to every
            African with fractional shares on Kud.
          </p>
          <p className="text-[20px] lg:w-[450px] py-4">
            Giving anyone with a Kuda account the opportunity to grow their
            money wherever they are in the world.
          </p>
        </div>
        <div className="pt-10 md:pt-0">
          <div className="w-[100%] h-[100%] flex justify-center align-middle items-center relative">
            <Image
              src={Invests}
              alt="debit.png"
              width={700}
              height={300}
              className="md:w-[50%] md:h-[50%] self-center w-[80%]"
            />
            <Image
              src={InvestsTwo}
              alt="debit.png"
              width={700}
              height={300}
              className="md:w-[40%] md:h-[60%] w-[50%] self-center absolute md:right-[60px] right-0 md:top-[-70px] top-[-30px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Invest;
