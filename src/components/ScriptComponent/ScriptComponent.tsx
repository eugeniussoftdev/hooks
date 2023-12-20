import React from "react";

import { useElementSize } from "../../hooks/useElementSize";
import { useScript } from "../../hooks/useScript";

const url = "https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID";

export const ScriptComponent = () => {
  const { width, height, elementRef } = useElementSize();
  const { isLoaded } = useScript(url);

  return (
    <div ref={elementRef} style={{ width: "300px", height: "200px" }}>
      ScriptComponent
      <div>
        <h3>UseSize Hook</h3>
        <p>Width {width}</p>
        <p>Height {height}</p>
      </div>
    </div>
  );
};

export default ScriptComponent;
