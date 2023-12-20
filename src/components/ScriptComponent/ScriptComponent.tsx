import React from "react";

import { useScript } from "../../hooks/useScript";

const url = "https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID";
export const ScriptComponent = () => {
  const { isLoaded } = useScript(url);
  return <div>ScriptComponent</div>;
};

export default ScriptComponent;
