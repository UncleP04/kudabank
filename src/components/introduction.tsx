import React from "react";
import Image from "next/image";
import Phone from '../../public/Images/kphone.png'
import '../styles/menu.css'

const Introduction: React.FC = () => {
  return (
    <div>
      <section className="grid grid-cols-1 md:grid-cols-2 justify-between items-center">
        <div className="p-4">
            <h1 className="text-[3em] md:text-[4em] lg:text-[5em] font-bold gradient md:w-[400px] lg:w-[500px]">The money app for Africans</h1>
            <p className="text-[20px] w-auto md:w-[300px] mt-4 text-primary">
            Save, Spend, Send and invest money across boarders.
            </p>
        </div>
        <div className="p-4 md:w-[80%]">
            <Image 
                src={Phone}
                alt="phone.png"
                width={700}
                height={300}
                className="w-[100%] h-[100%]"
            />
        </div>
      </section>
    </div>
  );
};

export default Introduction;
