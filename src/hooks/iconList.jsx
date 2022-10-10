import React from "react";

import { ReactComponent as OTracky } from "../assets/icons/logo/OTracky.svg";

import { ReactComponent as SignUp } from "../assets/icons/auth/signUp/SignUp.svg";
import { ReactComponent as Smile } from "../assets/icons/auth/signUp/Smile.svg";
import { ReactComponent as Paper } from "../assets/icons/auth/signUp/Paper.svg";
import { ReactComponent as SignUpDog } from "../assets/icons/auth/signUp/SignUpDog.svg";
import { ReactComponent as Google } from "../assets/icons/auth/login/Google.svg";
import { ReactComponent as ForgotPassword } from "../assets/icons/auth/ForgotPassword.svg";

const iconList = (purpose, { width, height, color }) => {
  switch (purpose) {
    //LOGO
    case "o-tracky":
      return <OTracky />;

    //SIGN UP
    case "sign-up":
      return <SignUp />;
    case "smile":
      return <Smile />;
    case "paper":
      return <Paper />;
    case "sign-up-dog":
      return <SignUpDog />;

    //LOGIN
    case "google":
      return <Google />;

    //FORGOT PASSWORD
    case "forgot-password":
      return <ForgotPassword />;

    default:
      return null;
  }
};

export default iconList;
