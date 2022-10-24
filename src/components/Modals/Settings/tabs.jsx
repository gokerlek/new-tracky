import MyAccount from "../../Settings/MyAccount.jsx";
import MyNotifications from "../../Settings/MyNotifications.jsx";
import Language from "../../Settings/Language.jsx";
import Subscription from "../../Settings/Subscription";

const tabs = [
  {
    purpose: "profile",
    component: MyAccount,
    label: "My Account",
    icon: "profile",
  },
  {
    purpose: "notifications",
    component: MyNotifications,
    label: "My Notifications",
    icon: "notifications",
  },
  {
    purpose: "language",
    component: Language,
    label: "Language region",
    icon: "language",
  },
  {
    purpose: "subscription",
    component: Subscription,
    label: "Subscriptions",
    icon: "subscription",
  },
];

export default tabs;
