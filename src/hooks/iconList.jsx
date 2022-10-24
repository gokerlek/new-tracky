import React from "react";

import { ReactComponent as OTracky } from "../assets/icons/logo/OTracky.svg";
import { ReactComponent as STracky } from "../assets/icons/logo/STracky.svg";

import { ReactComponent as SignUp } from "../assets/icons/auth/signUp/SignUp.svg";
import { ReactComponent as Paper } from "../assets/icons/auth/signUp/Paper.svg";
import { ReactComponent as SignUpDog } from "../assets/icons/auth/signUp/SignUpDog.svg";
import { ReactComponent as ForgotPassword } from "../assets/icons/auth/ForgotPassword.svg";
import { ReactComponent as Google } from "../assets/icons/auth/login/Google.svg";
import { ReactComponent as ArrowShape } from "../assets/icons/auth/login/ArrowShape.svg";
import { ReactComponent as GreenShape1 } from "../assets/icons/auth/login/GreenShape1.svg";
import { ReactComponent as GreenShape2 } from "../assets/icons/auth/login/GreenShape2.svg";
import { ReactComponent as OrangeShape } from "../assets/icons/auth/login/OrangeShape.svg";
import { ReactComponent as Paper1 } from "../assets/icons/auth/login/Paper1.svg";
import { ReactComponent as Paper2 } from "../assets/icons/auth/login/Paper2.svg";
import { ReactComponent as StartStop } from "../assets/icons/auth/login/StartStop.svg";
import { ReactComponent as ReferenceCode } from "../assets/icons/auth/ReferanceCode.svg";

import { ReactComponent as Archive } from "../assets/icons/sideBar/Archive.svg";
import { ReactComponent as Archive2 } from "../assets/icons/Archive2.svg";
import { ReactComponent as Document } from "../assets/icons/sideBar/Document.svg";
import { ReactComponent as Drager } from "../assets/icons/sideBar/Drager.svg";
import { ReactComponent as EllipsisVertical } from "../assets/icons/sideBar/EllipsisVertical.svg";
import { ReactComponent as Profile } from "../assets/icons/sideBar/Profile.svg";
import { ReactComponent as Search } from "../assets/icons/sideBar/Search.svg";
import { ReactComponent as LeftDoubleArrow } from "../assets/icons/sideBar/LeftDoubleArrow.svg";
import { ReactComponent as Reports } from "../assets/icons/sideBar/Reports.svg";

import { ReactComponent as Calender } from "../assets/icons/Calender.svg";
import { ReactComponent as CreateProject1 } from "../assets/icons/CreateProject1.svg";
import { ReactComponent as CreateProject2 } from "../assets/icons/CreateProject2.svg";
import { ReactComponent as Download } from "../assets/icons/Download.svg";
import { ReactComponent as Edit } from "../assets/icons/Edit.svg";
import { ReactComponent as EllipsisVertical20 } from "../assets/icons/EllipsisVertical20.svg";
import { ReactComponent as NoActivity } from "../assets/icons/NoActivity.svg";
import { ReactComponent as Play } from "../assets/icons/Play.svg";
import { ReactComponent as Pause } from "../assets/icons/Pause.svg";
import { ReactComponent as Plus } from "../assets/icons/Plus.svg";
import { ReactComponent as PlusBold } from "../assets/icons/PlusBold.svg";
import { ReactComponent as Smile } from "../assets/icons/Smile.svg";
import { ReactComponent as Star } from "../assets/icons/Star.svg";
import { ReactComponent as StarFull } from "../assets/icons/StarFull.svg";

import { ReactComponent as DownBold } from "../assets/icons/arrows/DownBold.svg";
import { ReactComponent as Left } from "../assets/icons/arrows/Left.svg";
import { ReactComponent as Right } from "../assets/icons/arrows/Right.svg";
import { ReactComponent as Up } from "../assets/icons/arrows/Up.svg";
import { ReactComponent as Down } from "../assets/icons/arrows/Down.svg";

import { ReactComponent as Map } from "../assets/icons/profile/Map.svg";
import { ReactComponent as Language } from "../assets/icons/profile/Language.svg";
import { ReactComponent as Logout } from "../assets/icons/profile/Logout.svg";
import { ReactComponent as Bell } from "../assets/icons/profile/Bell.svg";

import { ReactComponent as NewProjectIcon } from "../assets/icons/forms/NewProjectIcon.svg";

import { ReactComponent as NoSelectedProject } from "../assets/icons/NoSelectedProject.svg";

import { ReactComponent as Share } from "../assets/icons/Share.svg";

import { ReactComponent as AccountDeleted } from "../assets/icons/forms/success/AccountDeleted.svg";
import { ReactComponent as DetailsSaved } from "../assets/icons/forms/success/DetailsSaved.svg";
import { ReactComponent as HistoryCleared } from "../assets/icons/forms/success/HistoryCleared.svg";
import { ReactComponent as PasswordUpdated } from "../assets/icons/forms/success/PasswordUpdated.svg";
import { ReactComponent as ProjectCreated } from "../assets/icons/forms/success/ProjectCreated.svg";
import { ReactComponent as ProjectDeleted } from "../assets/icons/forms/success/ProjectDeleted.svg";
import { ReactComponent as ProjectUpdated } from "../assets/icons/forms/success/ProjectUpdated.svg";
import { ReactComponent as ProjectDownloaded } from "../assets/icons/forms/success/ProjectDownloaded.svg";
import { ReactComponent as TimeLogged } from "../assets/icons/forms/success/TimeLogged.svg";

import { ReactComponent as Check } from "../assets/icons/Check.svg";

const iconList = (purpose, { width, height, color }) => {
  switch (purpose) {
    //LOGO
    case "o-tracky":
      return <OTracky />;
    case "s-tracky":
      return <STracky />;

    case "check":
      return <Check />;

    //SIDE BAR
    case "collapse":
      return <LeftDoubleArrow />;
    case "archive":
      return <Archive />;
    case "archive-2":
      return <Archive2 />;
    case "document":
      return <Document />;
    case "drager":
      return <Drager />;
    case "ellipsis":
      return <EllipsisVertical />;
    case "profile":
      return <Profile />;
    case "search":
      return <Search />;
    case "reports":
      return <Reports />;

    //SIGN UP
    case "sign-up":
      return <SignUp />;

    case "paper":
      return <Paper />;
    case "sign-up-dog":
      return <SignUpDog />;

    //LOGIN
    case "google":
      return <Google />;
    case "arrow-shape":
      return <ArrowShape />;
    case "green-shape-1":
      return <GreenShape1 />;
    case "green-shape-2":
      return <GreenShape2 />;
    case "orange-shape":
      return <OrangeShape />;
    case "paper-1":
      return <Paper1 />;
    case "paper-2":
      return <Paper2 />;
    case "start-stop":
      return <StartStop />;

    //FORGOT PASSWORD
    case "forgot-password":
      return <ForgotPassword />;

    //REFERENCE CODE
    case "reference-code":
      return <ReferenceCode />;

    //PROFILE
    case "notifications":
      return <Bell />;
    case "language":
      return <Language />;
    case "subscription":
      return <Map />;
    case "logout":
      return <Logout />;

    //General
    case "calender":
      return <Calender />;
    case "create-project 1":
      return <CreateProject1 />;
    case "create-project 2":
      return <CreateProject2 />;
    case "download":
      return <Download />;
    case "edit":
      return <Edit />;
    case "ellipsis-20":
      return <EllipsisVertical20 />;
    case "no-activity":
      return <NoActivity />;
    case "play":
      return <Play />;
    case "pause":
      return <Pause />;
    case "plus":
      return <Plus />;
    case "plus-bold":
      return <PlusBold />;
    case "smile":
      return <Smile />;
    case "star":
      return <Star />;
    case "star full":
      return <StarFull />;

    //ARROWS
    case "down-bold":
      return <DownBold />;
    case "left":
      return <Left />;
    case "right":
      return <Right />;
    case "up":
      return <Up />;
    case "down":
      return <Down />;

    // FORMS
    case "new-project":
      return <NewProjectIcon />;
    case "project-created":
      return <ProjectCreated />;
    case "project-updated":
      return <ProjectUpdated />;
    case "project-deleted":
      return <ProjectDeleted />;
    case "project-downloaded":
      return <ProjectDownloaded />;
    case "time-logged":
      return <TimeLogged />;
    case "details-saved":
      return <DetailsSaved />;
    case "password-updated":
      return <PasswordUpdated />;
    case "history-cleared":
      return <HistoryCleared />;
    case "account-deleted":
      return <AccountDeleted />;

    case "share":
      return <Share />;

    case "no-selected-project":
      return <NoSelectedProject />;

    default:
      return null;
  }
};

export default iconList;
