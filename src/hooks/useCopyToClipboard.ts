import { useState } from "react";

export const useCopyToClipboard = () => {
  const [text, setText] = useState("");

  // useCallback
  const copyToClipboard = async (text: string) => {
    try {
      navigator.clipboard.writeText(text);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    text,
    copyToClipboard,
  };
};
