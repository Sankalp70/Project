import React from "react";
import footerStyles from "../footer/Footer.module.css";
import { BsArchive } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const Footer = () => {
  return <div>{/*Footer Section Of The Project*/}
  <div className={footerStyles.container}> </div>
   <div className={footerStyles.footerContainer}>
    <div className={footerStyles.selected}>
        <button>3</button><p>selected</p>
    </div>
    <div className={footerStyles.archive}>
           <BsArchive/><p>Archive</p>
    </div>
    <div className={footerStyles.delete}>
    <MdOutlineDelete /><p>Delete</p>
    </div>
    <div className={footerStyles.more}>
  <p>More  <IoMdArrowDropdown /></p> 

    </div>
    <div className={footerStyles.cross}>
    <RxCross2 />
    </div>
   </div>
  
  </div>;
};

export default Footer;
