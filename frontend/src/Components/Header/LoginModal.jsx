import React, { useState } from "react";
import style from "./Header.module.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";

const LoginModal = ({ isLoginModalOpen, closeLoginModal }) => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisible = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      {isLoginModalOpen && (
        <div className={style.modal_box_overlay}>
          <div className={style.modal_box}>
            <div className={style.modal_close}>
              <AiOutlineCloseCircle
                className={style.modal_close_icon}
                onClick={closeLoginModal}
              />
            </div>
            <div className={style.modal_head}>
              <h1 className={style.modal_title}>Login to SwipTory</h1>
            </div>
            <div className={style.modal_body}>
              <form className={style.login_modal}>
                <div className={style.form_input}>
                  <label htmlFor="">UserName</label>
                  <input
                    type="text"
                    className={style.input_box}
                    placeholder="Enter username"
                  />
                </div>
                <div className={style.form_input}>
                  <label htmlFor="">Password</label>&nbsp;&nbsp;
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    className={style.input_box}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Password"
                  />
                  <span onClick={togglePasswordVisible}>
                    {showPassword ? (
                      <FaRegEye className={style.password_icon} />
                    ) : (
                      <FaRegEyeSlash className={style.password_icon} />
                    )}
                  </span>
                </div>
                <button className={style.form_login_button}>Login</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginModal;
