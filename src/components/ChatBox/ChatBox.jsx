import React from "react";
import "./chatBox.css";
import assets from "../../assets/assets";

const ChatBox = () => {
  return (
    <div className="chat-box">
      <div className="chat-user">
        <img src={assets.profile_img} alt="" />
        <p>
          Richard Sanford <img className="dot" src={assets.green_dot} />
        </p>
        <img src={assets.help_icon} className="help" />
      </div>
      <div className="chat-msg">
        <div className="s-msg">
          <p className="msg">
            Lorem ipsum is the placeholder text commonly used in..{" "}
          </p>
          <div>
            <img src={assets.profile_img} />
            <p>2:30 pm</p>
          </div>
        </div>
        <div className="s-msg">
          <img className="msg-img" src={assets.pic1} />
          <div>
            <img src={assets.profile_img} />
            <p>2:30 pm</p>
          </div>
        </div>

        <div className="r-msg">
          <p className="msg">
            Lorem ipsum is the placeholder text commonly used in..{" "}
          </p>
          <div>
            <img src={assets.profile_img} />
            <p>2:30 pm</p>
          </div>
        </div>
      </div>

      <div className="chat-input">
        <input type="text" placeholder="send a message" />
        <input type="file" id="image" accept="image/png image/jpeg" hidden />
        <label htmlFor="image">
          <img src={assets.gallery_icon} alt="" />
        </label>
        <img src={assets.send_button} alt="" />
      </div>
    </div>
  );
};

export default ChatBox;
