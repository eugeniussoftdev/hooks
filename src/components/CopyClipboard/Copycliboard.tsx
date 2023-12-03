import React, { useState } from "react";

import { useCopyToClipboard } from "../../hooks/useCopyToClipboard";

export const Copycliboard = () => {
  const [text, setText] = useState("");
  const { copyToClipboard } = useCopyToClipboard();

  const copyToClipboardHandler = () => {
    console.log(text);
    copyToClipboard(text);
  };

  const pasteText = async () => {
    try {
      const text = await navigator.clipboard.readText();
      console.log("Pasted content: ", text);
    } catch (err) {
      console.error("Failed to read clipboard contents: ", err);
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="text"
          onChange={(e) => setText(e.target.value)}
        />
        <button type="button" onClick={copyToClipboardHandler}>
          Copy
        </button>
      </div>
      <div>
        <input type="text" />
        <button type="button" onClick={pasteText}>
          Paste
        </button>
      </div>
    </div>
  );
};
