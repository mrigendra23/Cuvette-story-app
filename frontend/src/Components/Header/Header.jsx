import React, { useState, useRef } from "react";
import style from "./Header.module.css";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import RegisterModal from "./RegisterModal";
import LoginModal from "./LoginModal";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openRegisterModal = () => {
    setIsRegisterModalOpen(true);
  };

  const closeRegisterModal = () => {
    setIsRegisterModalOpen(false);
  };

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <>
      <section>
        <header className={style.header_container}>
          <div className={style.header_navbar}>
            <div className={style.logo_title}> Swip Tory</div>
            <div className={style.header_buttons}>
              <button
                className={style.register_button}
                onClick={openRegisterModal}
              >
                Register Now
              </button>
              <button className={style.sign_in_button} onClick={openLoginModal}>
                Sign In
              </button>
            </div>
            <div className={style.mobile_toggle_btn}>
              <FaBars onClick={toggleDropdown} />

              {isOpen && (
                <div className={style.dropdown_content}>
                  <IoClose
                    className={style.dropdown_close}
                    onClick={() => setIsOpen(false)}
                  />
                  <div className={style.header_mobile_buttons}>
                    <button
                      className={style.register_button}
                      onClick={openRegisterModal}
                    >
                      Register Now
                    </button>
                    <button
                      className={style.sign_in_button}
                      onClick={openLoginModal}
                    >
                      Sign In
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>
      </section>
      <section className={style.modal_section}>
        <RegisterModal
          isRegisterModalOpen={isRegisterModalOpen}
          closeRegisterModal={closeRegisterModal}
        />
        <LoginModal
          isLoginModalOpen={isLoginModalOpen}
          closeLoginModal={closeLoginModal}
        />
      </section>
    </>
  );
};

export default Header;
