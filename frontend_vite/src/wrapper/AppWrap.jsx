import React from "react";
import { NavigationDots, SocialMedia } from "../components";
import { motion } from "framer-motion";

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`${classNames} app__container `}>
        <SocialMedia />
        <div className="app__wrapper app__flex">
          <Component />

          {idName === "contact" ? (
            <div className="copyright">
              <p className="p-text">@2020 MICHAEL</p>
              <p className="p-text">All rights reserved</p>
            </div>
          ) : (
            ""
          )}
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
