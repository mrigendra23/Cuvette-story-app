import React, { useState } from "react";
import style from "./Header.module.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import { toast } from "react-toastify";

const RegisterModal = ({ isRegisterModalOpen, closeRegisterModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisible = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      {isRegisterModalOpen && (
        <div className={style.modal_box_overlay}>
          <div className={style.modal_box}>
            <div className={style.modal_close}>
              <AiOutlineCloseCircle
                className={style.modal_close_icon}
                onClick={closeRegisterModal}
              />
            </div>
            <div className={style.modal_head}>
              <h1 className={style.modal_title}>Register to SwipTory</h1>
            </div>
            <div className={style.modal_body}>
              <form className={style.register_modal}>
                <div className={style.form_input}>
                  <label htmlFor="">UserName</label>
                  <input
                    type="text"
                    className={style.input_box}
                    placeholder="Enter username"
                    required
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
                    required
                  />
                  <span onClick={togglePasswordVisible}>
                    {showPassword ? (
                      <FaRegEye className={style.password_icon} />
                    ) : (
                      <FaRegEyeSlash className={style.password_icon} />
                    )}
                  </span>
                </div>
                <button className={style.form_register_button}>Register</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RegisterModal;
