import { useEffect, useRef, useState } from "react";

export const useElementSize = () => {
  const [[width, height], setElementSize] = useState([0, 0]);

  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const width = elementRef?.current?.offsetWidth;
    const height = elementRef?.current?.offsetHeight;
    if (width && height) {
      setElementSize([width, height]);
    }
  }, [elementRef]);

  return {
    width,
    height,
    elementRef,
  };
};
