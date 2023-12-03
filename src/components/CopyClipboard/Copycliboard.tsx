import React from "react";

export const Copycliboard = () => {
  return (
    <div>
      <div>
        <input type="text" placeholder="text" />
        <button type="button">Copy</button>
      </div>
      <div>
        <input type="text" />
        <button type="button">Paste</button>
      </div>
    </div>
  );
};
