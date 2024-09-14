import React from "react";
import "./RightSideBar.css";
import assets from "../../assets/assets";
import { logout } from "../../config/firebase";

const RightSideBar = () => {
  return (
    <div className="rs">
      <div className="rs-profile">
        <img src={assets.profile_img} />
        <h3>
          Vikas Dagur <img src={assets.green_dot} className="dot" />
        </h3>
        <p>Hey, there I am Vikas dagur using chat app</p>
      </div>
      <hr />
      <div className="rs-media">
        <p>Media</p>
        <div>
          <img src={assets.pic1} />
          <img src={assets.pic2} />
          <img src={assets.pic3} />
          <img src={assets.pic4} />
          <img src={assets.pic1} />
          <img src={assets.pic2} />
        </div>
        <button onClick={() => logout()}>Logout</button>
      </div>
    </div>
  );
};

export default RightSideBar;
