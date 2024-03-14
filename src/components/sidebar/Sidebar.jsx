import React from "react";
import sidebarStyle from "./Sidebar.module.css";
import displayPicture from "../../assets/user.webp";
import logo from "../../assets/mainlogo.jpg";
import { FiPenTool } from "react-icons/fi";
import { BiShapeSquare } from "react-icons/bi";
import { GrAnnounce } from "react-icons/gr";
import { TbBracketsAngle } from "react-icons/tb";
import { MdOutlineAddBox } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { PiFolderSimpleDuotone } from "react-icons/pi";
import { MdArrowDropUp } from "react-icons/md";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { IoIosHelpCircleOutline } from "react-icons/io";


const Sidebar = () => {
  return (
    <div>
      <div className={sidebarStyle.sidebarContainer}>
        <div className={sidebarStyle.companyProfile}>
          <img src={logo} alt="Logo" />
          <h4>INC</h4>
          <h1>InnovateHub</h1>
          <div className={sidebarStyle.userPicture}>
            <img src={displayPicture} alt="Usericture" />
          </div>
        </div>
        <div className={sidebarStyle.teamsContainer}>
          <div className={sidebarStyle.designTeam}>
            <FiPenTool />
            <h4>Design Team</h4>

            <p>
              <BiShapeSquare />
              +1
            </p>
          </div>
          <div className={sidebarStyle.marketingTeam}>
            <GrAnnounce />
            <h4>Marketing Team</h4>

            <p>
              {" "}
              <BiShapeSquare />
              +2
            </p>
          </div>
          <div className={sidebarStyle.developmentTeam}>
            <TbBracketsAngle />
            <h4>Development Team</h4>

            <p>
              <BiShapeSquare />
              +3
            </p>
          </div>
        </div>
        <div className={sidebarStyle.addIcon}>
          <button>
            <MdOutlineAddBox />
            <span> Create a team </span>
          </button>
        </div>
        <div className={sidebarStyle.folders}>
          <h3>FOLDERS</h3>
          <h2>
            <FaPlus />
          </h2>
        </div>
        <div className={sidebarStyle.subFolders}>
          <h3>
            {" "}
            <PiFolderSimpleDuotone /> Products{" "}
          </h3>
          <h5>
            <MdArrowDropUp />
          </h5>
          <div className={sidebarStyle.folderElements}>
            <h4>Roadmap</h4>
            <h4>Feedback</h4>
            <h4>Performance</h4>
            <h4>Team</h4>
            <h4>Analytics</h4>
            <h3>
              <MdOutlineAddBox />
              Add new sub
            </h3>
          </div>
        </div>
        <div className={sidebarStyle.folderTypes}>
          <h5>
            <PiFolderSimpleDuotone />
            <span>Sales</span>
            <b><MdOutlineArrowDropDown /></b>
          </h5>
          <h5>
            <PiFolderSimpleDuotone />
            <span>Design</span>
            <i><MdOutlineArrowDropDown /></i>
          </h5>
          <h5>
            <PiFolderSimpleDuotone />
            <span>Office</span>
          </h5>
          <h5>
            <PiFolderSimpleDuotone />
            <span>Legal</span>
          </h5>
        </div>
        <div className={sidebarStyle.sideFooter}>
                  <h5><MdOutlinePersonAddAlt /></h5>
                  <h1>Invite teammates</h1>
                  <p><IoIosHelpCircleOutline /></p>
                  <h4>Help and first steps <span>0/6</span></h4>
                  <b>7</b>
                  <h2>days left on traili <i>Add billing</i></h2>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
