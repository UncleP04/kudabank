import React from "react";
import Image from "next/image";
import Ellipse from "../../public/Images/Ellipse.png";
import Phone from "../../public/Images/card.png";
import "../styles/menu.css";

const Money: React.FC = () => {
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
            />
          <h2 className="text-[3em] lg:text-[4em] text-primary font-bold">
            The money app for Africans.
          </h2>
          <p className="text-[20px] lg:w-[450px] py-4 text-primary">
            Save, spend, send and invest money across borders.
          </p>
        </div>
        <div className="pt-10 md:pt-0">
          <div className="w-[100%] h-[100%] flex justify-center aligna-middle items-center">
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
