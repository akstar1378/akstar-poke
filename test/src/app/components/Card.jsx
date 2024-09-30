"use client";
import Image from "next/image";
import React, { useState } from "react";
const Card = ({ imgProp, idName, name, isNotHidden }) => {
  //   const [show, setShow] = useState(false);
  //   const [point, setPoint] = useState(" ");
  const [reveal, setReveal] = useState(false);

  //   const checkPlay = () => {
  //     setShow(true);
  //     if (image[0].id === image[1].id) {
  //       setPoint("you win");
  //     } else {
  //       setPoint("you lose");
  //     }
  //   };
  console.log(isNotHidden);
  const handelReveal = () => {
    setReveal(true);
  };
  return (
    <div
      className="w-24 bg-slate-600 p-0 justify-center rounded-md shadow-black shadow-md"
      onClick={handelReveal}
    >
      <div className="grid grid-flow-row justify-center ">
        <h1>tap</h1>
        {reveal && (
          <div className="p-2 transition-all duration-500 rotate-[360] bg-black rounded-md ">
            {" "}
            {isNotHidden && (
              <div>
                {" "}
                <Image
                  placeholder={"blur"}
                  src={imgProp}
                  id={idName}
                  width={80}
                  height={80}
                  className=" m-3 scale-x-[-1] delay-200 rounded-md"
                  // onClick={checkPlay}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
