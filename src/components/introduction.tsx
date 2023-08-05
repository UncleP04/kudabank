import React, { useState, useEffect } from "react";
import Image from "next/image";
import Phone from "../../public/Images/kphone.png";
import "../styles/menu.css";

const Introduction: React.FC = () => {

  const [hovered, setHovered] = useState(false);
  const [rotation, setRotation] = useState(0);

  const handleMouseEnter = () => {
    setHovered(true);
    console.log("entered")
  };

  const handleMouseLeave = () => {
    setHovered(false);
    console.log("mouse leave")

  };

  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
    if (hovered) {
      console.log("Mouse move")
      const { clientX, clientY, currentTarget } = e;
      const { top, left, width, height } =
        currentTarget.getBoundingClientRect();

      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const angle = Math.atan2(clientY - centerY, clientX - centerX);
      const degree = (angle * 180) / Math.PI;

      setRotation(degree);
    }
  };

  return (
    <div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 justify-between items-center md:px-[4%]">
        <div className="p-4">
          <h1 className="text-[3em] md:text-[4em] lg:text-[5em] font-bold gradient md:w-[400px] lg:w-[500px]">
            The money app for Africans
          </h1>
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
            className={`transi transform ${
              hovered ? 'rotate-' + rotation : ""} w-[100%] h-[100%]`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
