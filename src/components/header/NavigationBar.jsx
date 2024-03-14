import React from "react";
import navigationStyles from "./NavigationBar.module.css";
import { IoMdSearch } from "react-icons/io";
import filtericon from '../../assets/filtericon.jpg';
import { TiMessages } from "react-icons/ti";
import { IoSettingsOutline } from "react-icons/io5";
import { MdArrowDropDown } from "react-icons/md";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { FaSortNumericDown } from "react-icons/fa";
import { FaRegPlusSquare } from "react-icons/fa";
import { LuImport } from "react-icons/lu";

const NavigationBar = () => {
  return (
    <div>
      <div className={navigationStyles.navContainer}>
        <h3>Products</h3>
        <div className={navigationStyles.searchBar}>
          <input type="text" placeholder="Search for.." />
        </div>
        <div className={navigationStyles.searchicon}>
          <IoMdSearch />
        </div>
        <div className={navigationStyles.helpIcon}>
          <TiMessages />
        </div>

        <div className={navigationStyles.settingIcon}>
          <IoSettingsOutline />
        </div>
      </div>
      <div className={navigationStyles.navBar}>
        <div className={navigationStyles.allBrands}>
          <p>
            <HiOutlineSquares2X2 />
            All Brands
            <MdArrowDropDown />{" "}
          </p>
        </div>
        <div className={navigationStyles.desk}>
          <p>
            Desk
            <MdArrowDropDown />
          </p>
        </div>
        <div className={navigationStyles.tags}>
          <p>Tags <MdArrowDropDown/></p>
        </div>
        <div className={navigationStyles.sort}>
          <p><FaSortNumericDown/> Sort</p>
        </div>
        <div className={navigationStyles.filter}>
          <p><img src={filtericon} alt="filter-icon" />Filter</p>
        </div>
        <div className={navigationStyles.meeting}>
          <p><FaRegPlusSquare/>Meeting</p>
        </div>
        <div className={navigationStyles.importExport}>
          <p><LuImport/>Import/Export</p>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
