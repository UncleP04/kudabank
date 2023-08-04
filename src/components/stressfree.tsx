import React from "react";
import Image from "next/image";
import Play from "../../public/Images/store.png";
import Store from "../../public/Images/playstore.png";
import Debit from "../../public/Images/woman.png";

const StressFree: React.FC = () => {
  return (
    <div>
      <section className="md:px-[4%] w-[100%] md:h-[100vh] p-4 grid grid-cols-1 md:grid-cols-2 justify-center items-center md:mt-[40px] bg-pinky">
        <div className="md:p-6">
          <h2 className="text-[3em] lg:text-[4em] text-primary font-bold">Spend • Easy• Stress Free</h2>
          <p className="text-[20px] lg:w-[450px] py-4">
            With Kuda, you take charge of your banking. No confusing charges, no
            paperwork and everything happens on your phone
          </p>
          <div className="flex gap-4 mt-4">
            <div className="w-[100px]">
              <Image
                src={Play}
                alt="playstore.png"
                width={700}
                height={300}
                className="w-[100%] h-[100%]"
              />
            </div>
            <div className="w-[100px]">
              <Image
                src={Store}
                alt="playstore.png"
                width={700}
                height={300}
                className="w-[100%] h-[100%]"
              />
            </div>
          </div>
        </div>
        <div className="md:p-6 pt-10 md:pt-0">
          <div>
            <Image
              src={Debit}
              alt="debit.png"
              width={700}
              height={300}
              className="w-[100%] h-[100%]"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default StressFree;
