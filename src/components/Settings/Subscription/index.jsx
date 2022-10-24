import * as React from "react";
import { useState } from "react";
import { Text } from "../../index.js";
import Navigation from "./Navigation.jsx";
import Plans from "./Plans.jsx";

const Subscription = ({ label }) => {
  const [active, setActive] = useState(1);

  const onChange = (id) => {
    setActive(id);
  };

  return (
    <div>
      <Text className="text-base font-medium text-tGray-700">{label}</Text>
      <Navigation onChange={onChange} />
      {active === 1 && <Plans />}
    </div>
  );
};

export default Subscription;
