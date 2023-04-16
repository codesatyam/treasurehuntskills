import React,{useContext} from "react";
import "./Admin.css";
import FinalTable from "./FinalTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { Context, server } from "../../index";
const AdminDash = () => {
  const { countUser,setCountUser,user,setUser } =useContext(Context);
  return (
    <>
      <div className="admin">
      <div className="admin-heading">
        <h1 className=" d-flex justify-content-center p-2 text-white">Admin Portal</h1>
      </div>
        <div className="admin-upper">
          <div className="admin-info">
            <div className="admin-pic">
              <FontAwesomeIcon icon={faUser} size="7x" />
            </div>
            <div className="admin-h mt-2">
              <div className="admin-name">
                <h4>Name: {user?.name}</h4>
              </div>
              <div className="admin-email mt-2">
                <h4>Email:  {user?.email}</h4>
              </div>
            </div>
          </div>
          <div className="total-user">
            <div className="tot-box d-flex justify-content-center align-items-center">
              <div className="text-white tot-info d-flex flex-column justify-content-center align-items-center">
                <h3>Total User</h3>
                <h3>{countUser}</h3>
              </div>
            </div>
          </div>
          <div className="total-user">
          <div className="tot-box d-flex justify-content-center align-items-center">
              <div className="text-white tot-info d-flex flex-column justify-content-center align-items-center">
                <h3>Max Score</h3>
                <h3>1050</h3>
              </div>
            </div>
          </div>
          <div className="total-user">
          <div className="tot-box d-flex justify-content-center align-items-center">
              <div className="text-white tot-info d-flex flex-column justify-content-center align-items-center">
                <h3>Played Time</h3>
                <h3>2H</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="admin-lower"></div>
      </div>
      {/* <div className="admin">
        <div className="adminprofileOuter"> */}

      {/* <div className="adminProfilenner">
          {/* <section class="user_vert">
        <div class="user__image2"></div>
        <div class="user__details2">
          <h1 class="user__name2">Doc Holliday</h1>          
          <p class="user__title2 animated fadeInLeft">Gunfighter &amp; Gambler</p>
        </div>
      </section>  
          </div> */}
          <div className="leader d-flex flex-column mt-5">
          <div className="leader-h">
            <h1 className="text-white d-flex justify-content-center align-items-center">All User</h1>
          </div>
          <div className="adminTable">
             <FinalTable/>
          </div>
          </div>
     
      {/* </div>
      </div> */}
    </>
  );
};

export default AdminDash;
