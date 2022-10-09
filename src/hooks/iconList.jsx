import React from "react";

import { ReactComponent as OTracky } from "../assets/logo/OTracky.svg";

import { ReactComponent as SignUp } from "../assets/SignUp.svg";

const iconList = (purpose, { width, height, color }) => {
  switch (purpose) {
    //LOGO
    case "o-tracky":
      return <OTracky />;

    //SIGN UP
    case "sign-up":
      return <SignUp />;

    default:
      return null;
  }
};

export default iconList;
