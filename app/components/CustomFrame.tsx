import React from "react";
import Image from "next/image";
import  profilePic  from "../../public/img/profile-pic.png"
import "./customFrame.css"

const CustomFrame = () => {
  return (
    <>
      <Image className="image-frame" src={profilePic} alt="Minha foto" width={250} height={250}/>
    </>
  );
};

export default CustomFrame;